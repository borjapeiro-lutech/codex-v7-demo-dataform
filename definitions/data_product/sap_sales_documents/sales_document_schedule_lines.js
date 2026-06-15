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
  "moduleId": "sap_sales_documents"
};
const tableConfig = {
  "tags": [
    "sap",
    "dataproduct",
    "transactional"
  ],
  "materializationType": "incremental",
  "description": "This view provides details about sales documents at schedule line level, including KPIs such as Open Quantity and In-Transit Quantity. The granularity of this view is Client(System), Sales Document Number, Item Number of Sales Document and Delivery Schedule Line Counter.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "sales_document_vbeln": "Sales Document, PK",
    "sales_document_item_posnr": "Sales Document Item, PK",
    "schedule_line_number_etenr": "Schedule Line Number, PK",
    "schedule_line_category_ettyp": "Schedule Line Category",
    "item_relevantfor_delivery_lfrel": "Item is Relevant for Delivery",
    "schedule_line_date_edatu": "Schedule Line Date",
    "arrival_time_ezeit": "Arrival Time",
    "order_quantity_in_sales_units_wmeng": "Order Quantity in Sales Units",
    "confirmed_quantity_bmeng": "Confirmed Quantity",
    "sales_unit_vrkme": "Sales Unit",
    "required_quantity_for_mat_management_in_stockkeeping_units_lmeng": "Required Quantity for Material Management in Stockkeeping units",
    "base_unit_of_measure_meins": "Base Unit of Measure",
    "requirement_date_bddat": "Requirement date(deadline for procurement)",
    "requirement_type_bdart": "Requirement Type",
    "planning_type_plart": "Planning Type",
    "business_document_number_vbele": "Business Document Number",
    "business_item_number_posne": "Business Item Number",
    "schedule_line_etene": "Schedule Line",
    "earliest_possible_reservation_date_rsdat": "Earliest Possible Reservation Date",
    "maintenance_request_idnnr": "Maintenance Request",
    "purchase_requisition_number_banfn": "Purchase Requisition Number",
    "order_type_bsart": "Order Type(Purchasing)",
    "purchasing_document_category_bstyp": "Purchasing Document Category",
    "confirmation_status_of_schedule_line_wepos": "Confirmation Status of Schedule Line",
    "invoice_receipt_indicator_repos": "Invoice Receipt Indicator",
    "return_date_for_returnable_packaging_lrgdt": "Return Date for Returnable Packaging",
    "date_type_prgrs": "Date Type(day, week, month, interval)",
    "transportation_planning_date_tddat": "Transportation Planning Date",
    "material_availability_date_mbdat": "Material Staging/Availability Date",
    "loading_date_lddat": "Loading Date",
    "goods_issue_date_wadat": "Goods Issue Date",
    "corrected_quantity_in_sales_unit_cmeng": "Corrected Quantity in Sales Unit",
    "schedule_line_blocked_for_delivery_lifsp": "Schedule Line Blocked for Delivery",
    "group_definition_of_structure_data_grstr": "Group Definition of Structure Data",
    "release_type_abart": "Release Type",
    "forecast_delivery_schedule_number_abruf": "Forecast Delivery Schedule Number",
    "committed_quantity_roms1": "Committed Quantity",
    "size2_roms2": "Size 2",
    "size3_roms3": "Size 3",
    "unit_of_measure_for_sizes1to3_romei": "Unit of Measure for Sizes 1 to 3",
    "formula_key_rform": "Formula Key for Variable-Size Items",
    "numerator_for_conversion_of_sales_quantity_into_sku_umvkz": "Numerator (factor) for conversion of sales quantity into SKU",
    "denominator_for_conversion_of_sales_qty_into_sku_umvkn": "Denominator (Divisor) for Conversion of Sales Quantity into SKU",
    "availability_confirmed_automatically_verfp": "Availability Confirmed Automatically",
    "movement_type_bwart": "Movement Type(Inventory management)",
    "item_number_of_purchase_requisition_bnfpo": "Item Number of Purchase Requisition",
    "schedule_line_type_edi_etart": "Schedule Line Type EDI",
    "order_number_aufnr": "Order Number",
    "planned_order_number_plnum": "Planned Order Number",
    "bom_explosion_number_sernr": "BOM Explosion Number",
    "customer_engineering_change_status_aeskd": "Customer Engineering Change Status",
    "guaranteed_abges": "Guaranteed(factor between 0 and 1)",
    "material_staging_time_mbuhr": "Material Staging Time (Local, Relating to a Plant)",
    "transp_planning_time_tduhr": "Transp. Planning Time (Local, Relating to a Shipping Point)",
    "loading_time_lduhr": "Loading Time(Local Time Relating to a Shipping Point)",
    "time_of_goods_issue_wauhr": "Time of Goods Issue(Local, Relating to a Plant)",
    "route_schedule_aulwe": "Route Schedule",
    "handover_date_at_the_handover_location_handoverdate": "Handover Date at the Handover Location",
    "handover_time_at_the_handover_location_handovertime": "Handover Time at the Handover Location",
    "delivery_date_rule_delivery_date_type_rule": "Delivery Date Type Rule",
    "delivered_quantity_dlvqty_bu": "Delivered Quantity",
    "delivered_quantity_dlvqty_su": "Delivered Quantity",
    "open_confirmed_delivery_quantity_ocdqty_bu": "Open Confirmed Delivery Quantity",
    "open_confirmed_delivery_quantity_ocdqty_su": "Open Confirmed Delivery Quantity",
    "open_requested_delivery_quantity_ordqty_bu": "Open Requested Delivery Quantity",
    "open_requested_delivery_quantity_ordqty_su": "Open Requested Delivery Quantity",
    "delivery_creation_date_crea_dlvdate": "Delivery Creation Date",
    "schedule_line_date_req_dlvdate": "Schedule Line Date",
    "requirements_class_bedar": "Requirements Class",
    "sales_document_currency_waerk": "Sales Document Currency",
    "open_delivery_net_amount_odn_amount": "Open Delivery Net Amount(in Sales Document Currency)",
    "guid_in_raw_format_handle": "GUID In 'RAW' Format",
    "legal_control_check_status_lccst": "Legal Control Check Status",
    "requested_requirement_quantity_in_base_unit_rrqqty_bu": "Requested Requirement Quantity In Base Unit",
    "confirmed_requirement_quantity_in_base_unit_crqqty_bu": "Confirmed Requirement Quantity In Base Unit",
    "material_availability_date_third_party_order_planning_mbdat_drs": "Material Availability Date Third-Party Order Planning",
    "year_of_schedule_line_date_edatu": "Year of Schedule Line Date",
    "month_of_schedule_line_date_edatu": "Month of Schedule Line Date",
    "quarter_of_schedule_line_date_edatu": "Quarter of Schedule Line Date",
    "week_of_schedule_line_date_edatu": "Week of Schedule Line Date",
    "year_of_requirement_date_bddat": "Year of Requirement Date",
    "month_of_requirement_date_bddat": "Month of Requirement Date",
    "quarter_of_requirement_date_bddat": "Quarter of Requirement Date",
    "week_of_requirement_date_bddat": "Week of Requirement Date",
    "source_last_updated_at": "Source Last Updated At",
    "bq_loaded_at": "BigQuery Loaded At"
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
    "sales_document_vbeln",
    "sales_document_item_posnr",
    "schedule_line_number_etenr"
  ]
);

publish("sales_document_schedule_lines", publishConfig).query(
  (ctx) => `
WITH date_dimension AS (
  ${date.getDateDimension()}
), currency_decimal AS (
  ${currency.currencyDecimalShift(ctx.ref(moduleConfig.sources.sapModule.datasetId, "tcurx"))}
)
SELECT
  vbep.mandt AS client_mandt,
  vbep.vbeln AS sales_document_vbeln,
  vbep.posnr AS sales_document_item_posnr,
  vbep.etenr AS schedule_line_number_etenr,
  vbep.ettyp AS schedule_line_category_ettyp,
  vbep.lfrel AS item_relevantfor_delivery_lfrel,
  vbep.edatu AS schedule_line_date_edatu,
  vbep.ezeit AS arrival_time_ezeit,
  vbep.wmeng AS order_quantity_in_sales_units_wmeng,
  vbep.bmeng AS confirmed_quantity_bmeng,
  vbep.vrkme AS sales_unit_vrkme,
  vbep.lmeng AS required_quantity_for_mat_management_in_stockkeeping_units_lmeng,
  vbep.meins AS base_unit_of_measure_meins,
  vbep.bddat AS requirement_date_bddat,
  vbep.bdart AS requirement_type_bdart,
  vbep.plart AS planning_type_plart,
  vbep.vbele AS business_document_number_vbele,
  vbep.posne AS business_item_number_posne,
  vbep.etene AS schedule_line_etene,
  vbep.rsdat AS earliest_possible_reservation_date_rsdat,
  vbep.idnnr AS maintenance_request_idnnr,
  vbep.banfn AS purchase_requisition_number_banfn,
  vbep.bsart AS order_type_bsart,
  vbep.bstyp AS purchasing_document_category_bstyp,
  vbep.wepos AS confirmation_status_of_schedule_line_wepos,
  vbep.repos AS invoice_receipt_indicator_repos,
  vbep.lrgdt AS return_date_for_returnable_packaging_lrgdt,
  vbep.prgrs AS date_type_prgrs,
  vbep.tddat AS transportation_planning_date_tddat,
  vbep.mbdat AS material_availability_date_mbdat,
  vbep.lddat AS loading_date_lddat,
  vbep.wadat AS goods_issue_date_wadat,
  vbep.cmeng AS corrected_quantity_in_sales_unit_cmeng,
  vbep.lifsp AS schedule_line_blocked_for_delivery_lifsp,
  vbep.grstr AS group_definition_of_structure_data_grstr,
  vbep.abart AS release_type_abart,
  vbep.abruf AS forecast_delivery_schedule_number_abruf,
  vbep.roms1 AS committed_quantity_roms1,
  vbep.roms2 AS size2_roms2,
  vbep.roms3 AS size3_roms3,
  vbep.romei AS unit_of_measure_for_sizes1to3_romei,
  vbep.rform AS formula_key_rform,
  vbep.umvkz AS numerator_for_conversion_of_sales_quantity_into_sku_umvkz,
  vbep.umvkn AS denominator_for_conversion_of_sales_qty_into_sku_umvkn,
  vbep.verfp AS availability_confirmed_automatically_verfp,
  vbep.bwart AS movement_type_bwart,
  vbep.bnfpo AS item_number_of_purchase_requisition_bnfpo,
  vbep.etart AS schedule_line_type_edi_etart,
  vbep.aufnr AS order_number_aufnr,
  vbep.plnum AS planned_order_number_plnum,
  vbep.sernr AS bom_explosion_number_sernr,
  vbep.aeskd AS customer_engineering_change_status_aeskd,
  vbep.abges AS guaranteed_abges,
  vbep.mbuhr AS material_staging_time_mbuhr,
  vbep.tduhr AS transp_planning_time_tduhr,
  vbep.lduhr AS loading_time_lduhr,
  vbep.wauhr AS time_of_goods_issue_wauhr,
  vbep.aulwe AS route_schedule_aulwe,
  vbep.handoverdate AS handover_date_at_the_handover_location_handoverdate,
  vbep.handovertime AS handover_time_at_the_handover_location_handovertime,
  vbep.delivery_date_type_rule AS delivery_date_rule_delivery_date_type_rule,
  vbep.dlvqty_bu AS delivered_quantity_dlvqty_bu,
  vbep.dlvqty_su AS delivered_quantity_dlvqty_su,
  vbep.ocdqty_bu AS open_confirmed_delivery_quantity_ocdqty_bu,
  vbep.ocdqty_su AS open_confirmed_delivery_quantity_ocdqty_su,
  vbep.ordqty_bu AS open_requested_delivery_quantity_ordqty_bu,
  vbep.ordqty_su AS open_requested_delivery_quantity_ordqty_su,
  vbep.crea_dlvdate AS delivery_creation_date_crea_dlvdate,
  vbep.req_dlvdate AS schedule_line_date_req_dlvdate,
  vbep.bedar AS requirements_class_bedar,
  vbep.waerk AS sales_document_currency_waerk,
  ${currency.amountWithDecimalShift("vbep.odn_amount", "currency_decimal")} AS open_delivery_net_amount_odn_amount,
  vbep.handle AS guid_in_raw_format_handle,
  vbep.lccst AS legal_control_check_status_lccst,
  vbep.rrqqty_bu AS requested_requirement_quantity_in_base_unit_rrqqty_bu,
  vbep.crqqty_bu AS confirmed_requirement_quantity_in_base_unit_crqqty_bu,  
  vbep.mbdat_drs AS material_availability_date_third_party_order_planning_mbdat_drs,
  dimensional_date_edatu.cal_year AS year_of_schedule_line_date_edatu,
  dimensional_date_edatu.cal_month AS month_of_schedule_line_date_edatu,
  dimensional_date_edatu.cal_quarter AS quarter_of_schedule_line_date_edatu,
  dimensional_date_edatu.cal_week AS week_of_schedule_line_date_edatu,
  dimensional_date_bddat.cal_year AS year_of_requirement_date_bddat,
  dimensional_date_bddat.cal_month AS month_of_requirement_date_bddat,
  dimensional_date_bddat.cal_quarter AS quarter_of_requirement_date_bddat,
  dimensional_date_bddat.cal_week AS week_of_requirement_date_bddat,
  IFNULL(
    vbep.recordstamp,
    TIMESTAMP('1900-01-01 00:00:00+00')
  ) AS source_last_updated_at,
  CURRENT_TIMESTAMP() AS bq_loaded_at  
FROM 
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, "vbep")} AS vbep
LEFT JOIN currency_decimal
  ON vbep.waerk = currency_decimal.currkey
LEFT JOIN date_dimension AS dimensional_date_edatu
  ON vbep.edatu = dimensional_date_edatu.date
LEFT JOIN date_dimension AS dimensional_date_bddat
  ON vbep.bddat = dimensional_date_bddat.date
${incremental.getWhere(ctx, "vbep.recordstamp")}
`,
);
