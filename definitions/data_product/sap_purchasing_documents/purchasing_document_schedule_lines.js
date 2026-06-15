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
  "moduleId": "sap_purchasing_documents"
};
const tableConfig = {
  "tags": [
    "sap",
    "dataproduct",
    "transactional"
  ],
  "materializationType": "incremental",
  "description": "Information about purchasing documents at the schedule line level, at the granularity of Client(System), Purchasing Document Number, Item Number of Purchasing Document and Delivery Schedule Line Counter.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "purchasing_document_number_ebeln": "Purchasing Document Number, PK",
    "item_number_of_purchasing_document_ebelp": "Item Number of Purchasing Document, PK",
    "delivery_schedule_line_counter_etenr": "Delivery Schedule Line Counter, PK",
    "material_number_matnr": "Material Number",
    "uo_m_meins": "Unit of Measure",
    "plant_werks": "Plant",
    "storage_location_lgort": "Storage Location",
    "company_code_bukrs": "Company Code",
    "item_delivery_date_eindt": "Item Delivery date",
    "year_of_item_delivery_date_eindt": "Year of Item Delivery Date",
    "month_of_item_delivery_date_eindt": "Month of Item Delivery Date",
    "quarter_of_item_delivery_date_eindt": "Quarter of Item Delivery Date",
    "week_of_item_delivery_date_eindt": "Week of Item Delivery Date",
    "statistics_relevant_delivery_date_slfdt": "Statistics-Relevant Delivery Date",
    "year_of_statistics_relevant_delivery_date_slfdt": "Year of Statistics-Relevant Delivery Date",
    "month_of_statistics_relevant_delivery_date_slfdt": "Month of Statistics-Relevant Delivery Date",
    "quarter_of_statistics_relevant_delivery_date_slfdt": "Quarter of Statistics-Relevant Delivery Date",
    "week_of_statistics_relevant_delivery_date_slfdt": "Week of Statistics-Relevant Delivery Date",
    "category_of_delivery_date_lpein": "Category of delivery date",
    "scheduled_quantity_menge": "Scheduled Quantity",
    "previous_quantity_ameng": "Previous Quantity (Delivery Schedule Lines)",
    "quantity_of_goods_received_wemng": "Quantity of goods received",
    "issued_quantity_wamng": "Issued Quantity",
    "number_of_reminders_for_schedule_line_mahnz": "Number of reminders/expediters",
    "committed_quantity_mng02": "Committed Quantity",
    "committed_date_dat01": "Committed Date",
    "purchasing_document_type_bsart": "Purchasing document type",
    "date_on_which_record_was_created_aedat": "Date on which record was created",
    "year_of_date_on_which_record_was_created_aedat": "Year of Date on which record was created",
    "month_of_date_on_which_record_was_created_aedat": "Month of Date on which record was created",
    "quarter_of_date_on_which_record_was_created_aedat": "Quarter of Date on which record was created",
    "week_of_date_on_which_record_was_created_aedat": "Week of Date on which record was created",
    "vendor_account_number_lifnr": "Account Number of Vendor or Creditor",
    "purchasing_organization_ekorg": "Purchasing Organization",
    "purchasing_group_ekgrp": "Purchasing Group",
    "purchasing_document_date_bedat": "Purchasing Document Date",
    "year_of_purchasing_document_date_bedat": "Year of Purchasing Document Date",
    "month_of_purchasing_document_date_bedat": "Month of Purchasing Document Date",
    "quarter_of_purchasing_document_date_bedat": "Quarter of Purchasing Document Date",
    "week_of_purchasing_document_date_bedat": "Week of Purchasing Document Date",
    "supplying_plant_in_case_of_stock_transport_order_reswk": "Supplying plant in case of stock transport order",
    "deletion_indicator_in_purchasing_document_loekz": "Deletion indicator in purchasing document",
    "delivery_completed_indicator_elikz": "Delivery completed indicator",
    "purchasing_document_category_bstyp": "Purchasing document category",
    "purchase_requisition_number_banfn": "Purchase requisition number",
    "item_number_of_purchase_requisition_bnfpo": "Item number of purchase requisition",
    "returns_item_retpo": "Returns Item",
    "issuing_storage_location_for_stock_transport_order_reslo": "Issuing storage location for stock transport order",
    "open_quantity": "Difference between scheduled quantity and goods issued quantity when purchase order is not completed",
    "open_quantity_amount": "Open Quantity multiplied by Unit Price in the document currency",
    "in_transit_quantity": "Difference between issued quantity and quantity of goods received"
  }
};

const moduleConfig = config.product[moduleContext.moduleId];

const materializationType = tableConfig.materializationType || "incremental";

const currency = require("includes/cortex/currency.js");
const date = require("includes/cortex/date.js");
const incremental = require("includes/cortex/incremental.js");
const po_helper = require("includes/cortex/po_helper.js");
const publish_config = require("includes/cortex/publish_config.js");

const publishConfig = publish_config.getPublishConfig(
  materializationType,
  tableConfig,
  moduleConfig,
  [
    "client_mandt",
    "purchasing_document_number_ebeln",
    "item_number_of_purchasing_document_ebelp",
    "delivery_schedule_line_counter_etenr"
  ]
);

publish("purchasing_document_schedule_lines", publishConfig).query(
  (ctx) => `
WITH date_dim as (
  ${date.getDateDimension()}
), currency_decimal as (
  ${currency.currencyDecimalShift(ctx.ref(moduleConfig.sources.sapModule.datasetId, "tcurx"))}
)
SELECT
  ekpo.mandt as client_mandt,
  eket.ebeln as purchasing_document_number_ebeln,
  eket.ebelp as item_number_of_purchasing_document_ebelp,
  eket.etenr as delivery_schedule_line_counter_etenr,
  ekpo.matnr as material_number_matnr,
  ekpo.meins as uo_m_meins,
  ekpo.werks as plant_werks,
  ekpo.lgort as storage_location_lgort,
  ekpo.bukrs as company_code_bukrs,
  eket.eindt as item_delivery_date_eindt,
  dimensional_date_eindt.cal_year as year_of_item_delivery_date_eindt,
  dimensional_date_eindt.cal_month as month_of_item_delivery_date_eindt,
  dimensional_date_eindt.cal_quarter as quarter_of_item_delivery_date_eindt,
  dimensional_date_eindt.cal_week as week_of_item_delivery_date_eindt,
  eket.slfdt as statistics_relevant_delivery_date_slfdt,
  dimensional_date_slfdt.cal_year as year_of_statistics_relevant_delivery_date_slfdt,
  dimensional_date_slfdt.cal_month as month_of_statistics_relevant_delivery_date_slfdt,
  dimensional_date_slfdt.cal_quarter as quarter_of_statistics_relevant_delivery_date_slfdt,
  dimensional_date_slfdt.cal_week as week_of_statistics_relevant_delivery_date_slfdt,
  eket.lpein as category_of_delivery_date_lpein,
  eket.menge as scheduled_quantity_menge,
  eket.ameng as previous_quantity_ameng,
  eket.wemng as quantity_of_goods_received_wemng,
  eket.wamng as issued_quantity_wamng,
  eket.mahnz as number_of_reminders_for_schedule_line_mahnz,
  eket.mng02 as committed_quantity_mng02,
  eket.dat01 as committed_date_dat01,
  ekko.bsart as purchasing_document_type_bsart,
  ekko.aedat as date_on_which_record_was_created_aedat,
  dimensional_date_aedat.cal_year as year_of_date_on_which_record_was_created_aedat,
  dimensional_date_aedat.cal_month as month_of_date_on_which_record_was_created_aedat,
  dimensional_date_aedat.cal_quarter as quarter_of_date_on_which_record_was_created_aedat,
  dimensional_date_aedat.cal_week as week_of_date_on_which_record_was_created_aedat,
  ekko.lifnr as vendor_account_number_lifnr,
  ekko.ekorg as purchasing_organization_ekorg,
  ekko.ekgrp as purchasing_group_ekgrp,
  ekko.bedat as purchasing_document_date_bedat,
  dimensional_date_bedat.cal_year as year_of_purchasing_document_date_bedat,
  dimensional_date_bedat.cal_month as month_of_purchasing_document_date_bedat,
  dimensional_date_bedat.cal_quarter as quarter_of_purchasing_document_date_bedat,
  dimensional_date_bedat.cal_week as week_of_purchasing_document_date_bedat,
  ekko.reswk as supplying_plant_in_case_of_stock_transport_order_reswk,
  ekpo.loekz as deletion_indicator_in_purchasing_document_loekz,
  ekpo.elikz as delivery_completed_indicator_elikz,
  ekpo.bstyp as purchasing_document_category_bstyp,
  ekpo.banfn as purchase_requisition_number_banfn,
  ekpo.bnfpo as item_number_of_purchase_requisition_bnfpo,
  ekpo.retpo as returns_item_retpo,
  ekpo.reslo as issuing_storage_location_for_stock_transport_order_reslo,
  ${po_helper.getOpenQuantity(
    "eket.menge",
    "eket.wemng",
    "ekpo.elikz"
  )} as open_quantity,
  ${currency.amountWithDecimalShift(
    `${po_helper.getOpenQuantity(
      "eket.menge",
      "eket.wemng",
      "ekpo.elikz"
    )} * ekpo.netpr`,
    "currency_decimal"
  )} as open_quantity_amount,
  eket.wamng - eket.wemng as in_transit_quantity,
  GREATEST(
    IFNULL(eket.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00')),
    IFNULL(ekpo.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00')),
    IFNULL(ekko.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00'))
  ) as source_last_updated_at,
  CURRENT_TIMESTAMP() as bq_loaded_at
FROM
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'eket')} as eket
INNER JOIN
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'ekpo')} as ekpo
  ON eket.ebeln = ekpo.ebeln
  AND eket.ebelp = ekpo.ebelp
  AND eket.mandt = ekpo.mandt
INNER JOIN
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, 'ekko')} as ekko
  ON eket.ebeln = ekko.ebeln
  AND eket.mandt = ekko.mandt
LEFT JOIN date_dim as dimensional_date_eindt
  ON eket.eindt = dimensional_date_eindt.date
LEFT JOIN date_dim as dimensional_date_slfdt
  ON eket.slfdt = dimensional_date_slfdt.date
LEFT JOIN date_dim as dimensional_date_aedat
  ON ekko.aedat = dimensional_date_aedat.date
LEFT JOIN date_dim as dimensional_date_bedat
  ON ekko.bedat = dimensional_date_bedat.date
LEFT JOIN currency_decimal
  ON ekko.waers = currency_decimal.currkey
${incremental.getWhere(ctx, ["eket.recordstamp", "ekpo.recordstamp", "ekko.recordstamp"])}
`,
);
