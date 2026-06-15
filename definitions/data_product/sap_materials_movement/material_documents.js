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
  "moduleId": "sap_materials_movement"
};
const tableConfig = {
  "tags": [
    "sap",
    "dataproduct",
    "transactional"
  ],
  "materializationType": "incremental",
  "description": "Information about material documents at the granularity of Client(System), Document Number, Document Year and Document Item.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "document_number_mblnr": "Number of Material Document, PK",
    "document_year_mjahr": "Material Document Year, PK",
    "document_item_zeile": "Item in Material Document, PK",
    "material_number_matnr": "Material Number",
    "batch_number_charg": "Batch Number",
    "plant_werks": "Plant",
    "storage_location_lgort": "Storage Location",
    "movement_type_bwart": "Movement Type",
    "stock_type_insmk": "Stock Type",
    "debit_credit_indicator_shkzg": "Debit/Credit Indicator",
    "quantity_menge": "Quantity",
    "base_unit_of_measure_meins": "Base Unit of Measure",
    "currency_key_waers": "Currency Key",
    "amount_in_local_currency_dmbtr": "Amount in Local Currency",
    "purchase_order_number_ebeln": "Purchase Order Number",
    "vendors_account_number_lifnr": "Vendor's Account Number",
    "sales_order_number_kdauf": "Sales Order Number",
    "account_number_of_customer_kunnr": "Account Number of Customer",
    "receiving_issuing_material_ummat": "Receiving/Issuing Material",
    "receiving_issuing_batch_umcha": "Receiving/Issuing Batch",
    "item_number_of_purchasing_document_ebelp": "Item Number of Purchasing Document",
    "document_number_of_a_reference_document_lfbnr": "Document Number of a Reference Document",
    "item_of_a_reference_document_lfpos": "Item of a Reference Document",
    "order_number_aufnr": "Order Number",
    "company_code_bukrs": "Company Code",
    "receiving_plant_umwrk": "Receiving Plant",
    "receiving_issuing_storage_location_umlgo": "Receiving/Issuing Storage Location",
    "warehouse_number_lgnum": "Warehouse Number",
    "movement_type_for_warehouse_management_bwlvs": "Movement Type for Warehouse Management",
    "indicator_posting_in_warehouse_management_system_xblvs": "Indicator Posting in Warehouse Management System",
    "stock_category_in_the_warehouse_management_system_bestq": "Stock Category in the Warehouse Management System",
    "special_stock_indicator_sobkz": "Special Stock Indicator",
    "movement_indicator_kzbew": "Movement Indicator",
    "reason_for_movement_grund": "Reason for Movement",
    "goods_receipt_non_valuated_weunb": "Goods Receipt Non-Valuated",
    "storage_type_lgtyp": "Storage Type",
    "equipment_number_equnr": "Equipment Number",
    "business_area_gsber": "Business Area",
    "cost_center_kostl": "Cost Center",
    "profit_center_prctr": "Profit Center",
    "work_breakdown_structure_element_ps_psp_pnr": "Work Breakdown Structure Element",
    "gl_account_number_sakto": "G/L Account Number",
    "debit_credit_indicator_in_revaluation_shkum": "Debit/Credit Indicator in Revaluation",
    "valuation_type_bwtar": "Valuation Type",
    "receipt_indicator_kzzug": "Receipt Indicator",
    "posting_date_budat": "Posting Date",
    "year_of_posting_date_budat": "Year of Posting Date",
    "month_of_posting_date_budat": "Month of Posting Date",
    "quarter_of_posting_date_budat": "Quarter of Posting Date",
    "week_of_posting_date_budat": "Week of Posting Date",
    "source_last_updated_at": "Source Last Updated At",
    "bq_loaded_at": "BQ Loaded At"
  }
};

const moduleConfig = config.product[moduleContext.moduleId];

const materializationType = tableConfig.materializationType || "incremental";

const currency = require("includes/cortex/currency.js");
const date = require("includes/cortex/date.js");
const incremental = require("includes/cortex/incremental.js");
const publish_config = require("includes/cortex/publish_config.js");

const publishConfig = publish_config.getPublishConfig(
  materializationType,
  tableConfig,
  moduleConfig,
  [
    "client_mandt",
    "document_number_mblnr",
    "document_year_mjahr",
    "document_item_zeile"
  ]
);

publish("material_documents", publishConfig).query(
  (ctx) => `
WITH date_dimension AS (
  ${date.getDateDimension()}
),
currency_decimal AS (
  ${currency.currencyDecimalShift(ctx.ref(moduleConfig.sources.sapModule.datasetId, "tcurx"))}
)
SELECT
  matdoc.mandt AS client_mandt,
  matdoc.mblnr AS document_number_mblnr,
  matdoc.mjahr AS document_year_mjahr,
  matdoc.zeile AS document_item_zeile,
  matdoc.matnr AS material_number_matnr,
  matdoc.charg AS batch_number_charg,
  matdoc.werks AS plant_werks,
  matdoc.lgort AS storage_location_lgort,
  matdoc.bwart AS movement_type_bwart,
  matdoc.insmk AS stock_type_insmk,
  matdoc.shkzg AS debit_credit_indicator_shkzg,
  matdoc.menge AS quantity_menge,
  matdoc.meins AS base_unit_of_measure_meins,
  matdoc.waers AS currency_key_waers,
  ${currency.amountWithDecimalShift("matdoc.dmbtr", "currency_decimal")} AS amount_in_local_currency_dmbtr,
  matdoc.ebeln AS purchase_order_number_ebeln,
  matdoc.lifnr AS vendors_account_number_lifnr,
  matdoc.kdauf AS sales_order_number_kdauf,
  matdoc.kunnr AS account_number_of_customer_kunnr,
  matdoc.ummat AS receiving_issuing_material_ummat,
  matdoc.umcha AS receiving_issuing_batch_umcha,
  matdoc.ebelp AS item_number_of_purchasing_document_ebelp,
  matdoc.lfbnr AS document_number_of_a_reference_document_lfbnr,
  matdoc.lfpos AS item_of_a_reference_document_lfpos,
  matdoc.aufnr AS order_number_aufnr,
  matdoc.bukrs AS company_code_bukrs,
  matdoc.umwrk AS receiving_plant_umwrk,
  matdoc.umlgo AS receiving_issuing_storage_location_umlgo,
  matdoc.lgnum AS warehouse_number_lgnum,
  matdoc.bwlvs AS movement_type_for_warehouse_management_bwlvs,
  matdoc.xblvs AS indicator_posting_in_warehouse_management_system_xblvs,
  matdoc.bestq AS stock_category_in_the_warehouse_management_system_bestq,
  matdoc.sobkz AS special_stock_indicator_sobkz,
  matdoc.kzbew AS movement_indicator_kzbew,
  matdoc.grund AS reason_for_movement_grund,
  matdoc.weunb AS goods_receipt_non_valuated_weunb,
  matdoc.lgtyp AS storage_type_lgtyp,
  matdoc.equnr AS equipment_number_equnr,
  matdoc.gsber AS business_area_gsber,
  matdoc.kostl AS cost_center_kostl,
  matdoc.prctr AS profit_center_prctr,
  matdoc.ps_psp_pnr AS work_breakdown_structure_element_ps_psp_pnr,
  matdoc.sakto AS gl_account_number_sakto,
  matdoc.shkum AS debit_credit_indicator_in_revaluation_shkum,
  matdoc.bwtar AS valuation_type_bwtar,
  matdoc.kzzug AS receipt_indicator_kzzug,
  matdoc.budat AS posting_date_budat,
  dimensional_date_budat.cal_year AS year_of_posting_date_budat,
  dimensional_date_budat.cal_month AS month_of_posting_date_budat,
  dimensional_date_budat.cal_quarter AS quarter_of_posting_date_budat,
  dimensional_date_budat.cal_week AS week_of_posting_date_budat,
  IFNULL(
    matdoc.recordstamp,
    TIMESTAMP('1900-01-01 00:00:00+00')
  ) AS source_last_updated_at,
  CURRENT_TIMESTAMP() AS bq_loaded_at
FROM
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, "matdoc")} AS matdoc
LEFT JOIN currency_decimal
  ON matdoc.waers = currency_decimal.currkey
LEFT JOIN date_dimension AS dimensional_date_budat
  ON matdoc.budat = dimensional_date_budat.date
${incremental.getWhere(ctx, "matdoc.recordstamp")}
`
);
