/**
 * Copyright 2026 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const moduleContext = {
  "moduleId": "sap_sales_organizations"
};
const tableConfig = {
  "tags": [
    "sap",
    "dataproduct",
    "masterdata"
  ],
  "materializationType": "incremental",
  "description": "Information about sales organizations at the granularity of Client(System), Sales Organization and Language Key.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "sales_organization_vkorg": "Sales Organization, PK",
    "language_key_spras": "Language Key, PK",
    "name_vtext": "Name",
    "statistics_currency_waers": "Statistics currency",
    "company_code_bukrs": "Company code",
    "address_adrnr": "Address",
    "address_text_name_txnam_adr": "Address text name",
    "letter_header_text_txnam_kop": "Letter header text",
    "footer_lines_text_txnam_fus": "Footer lines text",
    "greeting_text_name_txnam_gru": "Greeting text name",
    "refsorg_salesdoctype_vkoau": "RefSorg.SalesDocType",
    "cust_inter_co_bill_kunnr": "Cust.inter-co.bill.",
    "rebate_proc_active_boavo": "Rebate proc.active",
    "sales_org_calendar_vkokl": "Sales org.calendar",
    "purch_organization_ekorg": "Purch. Organization",
    "purchasing_group_ekgrp": "Purchasing Group",
    "vendor_lifnr": "Vendor",
    "plant_werks": "Plant",
    "order_type_bsart": "Order Type",
    "purch_doc_category_bstyp": "Purch. doc. category",
    "movement_type_bwart": "Movement Type",
    "storage_location_lgort": "Storage Location",
    "text_sds_sender_txnam_sdb": "Text SDS sender",
    "tax_code_for_sd_doc_mwskz": "Tax code for SD doc.",
    "tax_number_xstceg": "Tax number",
    "numbering_time_j_1anutime": "Numbering time",
    "max_no_bill_items_maxbi": "Max. no. bill. items",
    "price_protection_pd_plaufz": "Price protection pd.",
    "price_protection_unit_plauez": "Price protection unit",
    "source_last_updated_at": "Source Last Updated At",
    "bq_loaded_at": "Bq Loaded At"
  }
};

const moduleConfig = config.product[moduleContext.moduleId];

const materializationType = tableConfig.materializationType || "incremental";

const incremental = require("includes/cortex/incremental.js");
const publish_config = require("includes/cortex/publish_config.js");

const publishConfig = publish_config.getPublishConfig(
  materializationType,
  tableConfig,
  moduleConfig,
  [
    "client_mandt",
    "sales_organization_vkorg",
    "language_key_spras"
  ]
);

publish("sales_organizations_md", publishConfig).query(
  (ctx) => `
SELECT
  tvko.mandt as client_mandt,
  tvko.vkorg as sales_organization_vkorg,
  tvkot.spras as language_key_spras,
  tvkot.vtext as name_vtext,
  tvko.waers as statistics_currency_waers,
  tvko.bukrs as company_code_bukrs,
  tvko.adrnr as address_adrnr,
  tvko.txnam_adr as address_text_name_txnam_adr,
  tvko.txnam_kop as letter_header_text_txnam_kop,
  tvko.txnam_fus as footer_lines_text_txnam_fus,
  tvko.txnam_gru as greeting_text_name_txnam_gru,
  tvko.vkoau as refsorg_salesdoctype_vkoau,
  tvko.kunnr as cust_inter_co_bill_kunnr,
  tvko.boavo as rebate_proc_active_boavo,
  tvko.vkokl as sales_org_calendar_vkokl,
  tvko.ekorg as purch_organization_ekorg,
  tvko.ekgrp as purchasing_group_ekgrp,
  tvko.lifnr as vendor_lifnr,
  tvko.werks as plant_werks,
  tvko.bsart as order_type_bsart,
  tvko.bstyp as purch_doc_category_bstyp,
  tvko.bwart as movement_type_bwart,
  tvko.lgort as storage_location_lgort,
  tvko.txnam_sdb as text_sds_sender_txnam_sdb,
  tvko.mwskz as tax_code_for_sd_doc_mwskz,
  tvko.xstceg as tax_number_xstceg,
  tvko.j_1anutime as numbering_time_j_1anutime,
  tvko.maxbi as max_no_bill_items_maxbi,
  GREATEST(
    IFNULL(tvko.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00')),
    IFNULL(tvkot.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00'))
  ) as source_last_updated_at,
  CURRENT_TIMESTAMP() as bq_loaded_at
FROM
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'tvko')} AS tvko
LEFT JOIN
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'tvkot')} AS tvkot
  ON tvko.mandt = tvkot.mandt
  AND tvko.vkorg = tvkot.vkorg
${incremental.getWhere(ctx, ["tvko.recordstamp", "tvkot.recordstamp"])}
`,
);
