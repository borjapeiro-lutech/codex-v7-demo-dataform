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
  "description": "Information about sales documents at the header level, at the granularity of Client(System) and Sales document number.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "document_number_vbeln": "Sales Document, PK",
    "creation_date_erdat": "Sales document creation date.",
    "creation_time_erzet": "Sales document creation time.",
    "created_by_ernam": "Name of person who created the sales document.",
    "quotation_date_from_angdt": "Quotation/Inquiry is Valid From",
    "quotation_date_to_bnddt": "Date Until Which Bid/Quotation is Binding (Valid-To Date)",
    "document_date_audat": "Document Date (Date Received/Sent)",
    "document_category_vbtyp": "Sales and Delivery Document Category",
    "transaction_group_trvog": "Transaction Group",
    "document_type_auart": "Sales Document Type",
    "reason_augru": "Order Reason (Reason for the Business Transaction)",
    "warranty_date_gwldt": "Guarrantee Date",
    "collective_number_submi": "Collective Number (SD)",
    "delivery_block_lifsk": "Delivery Block (Document Header)",
    "billing_block_faksk": "Billing Block in Sales and Delivery Document",
    "net_value_of_the_sales_document_in_document_currency_netwr": "Net value of the sales document in document currency.",
    "document_currency_waerk": "Sales document currency.",
    "sales_organization_vkorg": "Sales Organization",
    "distribution_channel_vtweg": "Distribution Channel",
    "division_spart": "Division",
    "sales_group_vkgrp": "Sales Group",
    "sales_office_vkbur": "Sales Office",
    "business_area_gsber": "Business Area",
    "cost_ctr_business_area_gskst": "Business Area from Cost Center",
    "agreement_valid_from_guebg": "Valid-From Date (Outline Agreements, Product Proposals)",
    "agreement_valid_to_gueen": "Valid-To Date (Outline Agreements, Product Proposals)",
    "condition_number_knumv": "Number of the Document Condition",
    "requested_delivery_date_vdatu": "Requested Delivery Date",
    "proposed_date_type_vprgr": "Proposed Date Type",
    "complete_delivery_flag_autlf": "Complete Delivery Defined for Each Sales Order?",
    "original_system_vbkla": "Original System with Release and Transaction Control",
    "document_indicator_vbklt": "Sales and Delivery Document Indicator",
    "pricing_procedure_kalsm": "Pricing Procedure in Pricing",
    "shipping_conditions_vsbed": "Shipping Conditions",
    "proposed_billing_type_fkara": "Proposed Billing Type for an Order-Related Billing Document",
    "sales_probability_awahr": "Sales Probability",
    "search_term_for_product_proposal_ktext": "Search Term for Product Proposal",
    "customer_purchase_order_number_bstnk": "Customer Reference",
    "customer_purchase_order_type_bsark": "Customer Purchase Order Type",
    "customer_purchase_order_date_bstdk": "Customer Reference Date",
    "purchase_order_number_supplement_bstzd": "Purchase Order Number Supplement",
    "your_reference_ihrez": "Your Reference",
    "name_of_orderer_bname": "Name of Orderer",
    "telephone_number_telf1": "Telephone Number",
    "number_of_contacts_from_the_customer_mahza": "Number of Contacts from the Customer",
    "last_customer_contact_date_mahdt": "Last Customer Contact Date",
    "sold_to_party_kunnr": "Sold-To Party",
    "cost_center_kostl": "Cost Center",
    "update_group_for_statistics_stafo": "Update Group for Statistics Update",
    "statistic_scurrency_stwae": "Statistics Currency",
    "changed_on_aedat": "Date of Last Change",
    "customer_group1_kvgr1": "Customer Group 1",
    "customer_group2_kvgr2": "Customer Group 2",
    "customer_group3_kvgr3": "Customer Group 3",
    "customer_group4_kvgr4": "Customer Group 4",
    "customer_group5_kvgr5": "Customer Group 5",
    "agreement_knuma": "Agreement (various conditions grouped together)",
    "controlling_area_kokrs": "Controlling Area",
    "wbs_element_ps_psp_pnr": "Work Breakdown Structure Element (WBS Element)",
    "exchange_rate_type_kurst": "Exchange Rate Type",
    "credit_control_area_kkber": "Credit Control Area",
    "customer_credit_limit_ref_knkli": "Customer's Account Number with Credit Limit Reference",
    "customer_credit_group_grupp": "Customer Credit Group",
    "credit_representative_group_for_credit_management_sbgrp": "Credit Representative Group for Credit Management",
    "risk_category_ctlpc": "Credit Management: Risk Category",
    "currency_key_of_credit_control_area_cmwae": "Currency Key of Credit Control Area",
    "rele_a_se_date_of_the_document_determined_by_credit_management_cmfre": "Release Date of the Document Determined by Credit Management",
    "date_of_next_credit_check_of_document_cmnup": "Date of Next Credit Check of Document",
    "next_date_cmngv": "Next Date",
    "released_credit_value_of_the_document_amtbl": "Released Credit Value of the Document",
    "hierarchy_type_for_pricing_hityp_pr": "Hierarchy Type for Pricing",
    "usage_indicator_abrvw": "Usage Indicator",
    "mrp_for_delivery_schedule_types_abdis": "MRP for Delivery Schedule Types",
    "document_number_of_the_reference_document_vgbel": "Document Number of the Reference Document",
    "object_number_at_header_level_objnr": "Object Number at Header Level",
    "company_code_to_be_billed_bukrs_vf": "Company Code to be Billed",
    "alternative_tax_classification_taxk1": "Alternative Tax Classification",
    "tax_classification2_taxk2": "Tax Classification 2 for Customer",
    "tax_classification3_taxk3": "Tax Classification 3 for Customer",
    "tax_classification4_taxk4": "Tax Classification 4 for Customer",
    "tax_classification5_taxk5": "Tax Classification 5 for Customer",
    "tax_classification6_taxk6": "Tax Classification 6 for Customer",
    "tax_classification7_taxk7": "Tax Classification 7 for Customer",
    "tax_classification8_taxk8": "Tax Classification 8 for Customer",
    "tax_classification9_taxk9": "Tax Classification 9 for Customer",
    "reference_document_number_xblnr": "Reference Document Number",
    "assignment_number_zuonr": "Assignment Number",
    "pre_doc_category_vgtyp": "Document Category of Preceding Sales and Delivery Document",
    "order_number_aufnr": "Order Number",
    "notification_no_qmnum": "Notification Number",
    "master_contract_number_vbeln_grp": "Master Contract Number",
    "tax_destination_country_stceg_l": "Tax Destination Country",
    "tax_departure_country_landtx": "Tax Departure Country",
    "international_unique_key_handle": "International Unique Key for VBAK-VBELN",
    "dangerous_goods_management_profile_proli": "DG mgmt profile",
    "dangerous_goods_flag_cont_dg": "Dangerous Goods Management Profile in Sales and Delivery Documents",
    "utc_time_stamp_l_upd_tmstmp": "UTC Time Stamp in Long Form (YYYYMMDDhhmmssmmmuuun)",
    "year_of_creation_date_erdat": "Year of Creation Date",
    "month_of_creation_date_erdat": "Month of Creation Date",
    "quarter_of_creation_date_erdat": "Quarter of Creation Date",
    "week_of_creation_date_erdat": "Week of Creation Date",
    "year_of_document_date_audat": "Year of Document Date",
    "month_of_document_date_audat": "Month of Document Date",
    "quarter_of_document_date_audat": "Quarter of Document Date",
    "week_of_document_date_audat": "Week of Document Date",
    "year_of_requested_delivery_date_vdatu": "Year of Requested Delivery Date",
    "month_of_requested_delivery_date_vdatu": "Month of Requested Delivery Date",
    "quarter_of_requested_delivery_date_vdatu": "Quarter of Requested Delivery Date",
    "week_of_requested_delivery_date_vdatu": "Week of Requested Delivery Date",
    "source_last_updated_at": "Source Last Updated At",
    "bq_loaded_at": "Bq Loaded At"
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
    "document_number_vbeln"
  ]
);

publish("sales_document_headers", publishConfig).query(
  (ctx) => `
WITH 
  date_dimension AS (
    ${date.getDateDimension()}
  ),
  currency_decimal AS (
    ${currency.currencyDecimalShift(ctx.ref(moduleConfig.sources.sapModule.datasetId, "tcurx"))}
  )
SELECT
  vbak.mandt AS client_mandt,
  vbak.vbeln AS document_number_vbeln,
  vbak.erdat AS creation_date_erdat,
  vbak.erzet AS creation_time_erzet,
  vbak.ernam AS created_by_ernam,
  vbak.angdt AS quotation_date_from_angdt,
  vbak.bnddt AS quotation_date_to_bnddt,
  vbak.audat AS document_date_audat,
  vbak.vbtyp AS document_category_vbtyp,
  vbak.trvog AS transaction_group_trvog,
  vbak.auart AS document_type_auart,
  vbak.augru AS reason_augru,
  vbak.gwldt AS warranty_date_gwldt,
  vbak.submi AS collective_number_submi,
  vbak.lifsk AS delivery_block_lifsk,
  vbak.faksk AS billing_block_faksk,
  ${currency.amountWithDecimalShift("vbak.netwr", "currency_decimal")} AS net_value_of_the_sales_document_in_document_currency_netwr,
  vbak.waerk AS document_currency_waerk,
  vbak.vkorg AS sales_organization_vkorg,
  vbak.vtweg AS distribution_channel_vtweg,
  vbak.spart AS division_spart,
  vbak.vkgrp AS sales_group_vkgrp,
  vbak.vkbur AS sales_office_vkbur,
  vbak.gsber AS business_area_gsber,
  vbak.gskst AS cost_ctr_business_area_gskst,
  vbak.guebg AS agreement_valid_from_guebg,
  vbak.gueen AS agreement_valid_to_gueen,
  vbak.knumv AS condition_number_knumv,
  vbak.vdatu AS requested_delivery_date_vdatu,
  vbak.vprgr AS proposed_date_type_vprgr,
  vbak.autlf AS complete_delivery_flag_autlf,
  vbak.vbkla AS original_system_vbkla,
  vbak.vbklt AS document_indicator_vbklt,
  vbak.kalsm AS pricing_procedure_kalsm,
  vbak.vsbed AS shipping_conditions_vsbed,
  vbak.fkara AS proposed_billing_type_fkara,
  vbak.awahr AS sales_probability_awahr,
  vbak.ktext AS search_term_for_product_proposal_ktext,
  vbak.bstnk AS customer_purchase_order_number_bstnk,
  vbak.bsark AS customer_purchase_order_type_bsark,
  vbak.bstdk AS customer_purchase_order_date_bstdk,
  vbak.bstzd AS purchase_order_number_supplement_bstzd,
  vbak.ihrez AS your_reference_ihrez,
  vbak.bname AS name_of_orderer_bname,
  vbak.telf1 AS telephone_number_telf1,
  vbak.mahza AS number_of_contacts_from_the_customer_mahza,
  vbak.mahdt AS last_customer_contact_date_mahdt,
  vbak.kunnr AS sold_to_party_kunnr,
  vbak.kostl AS cost_center_kostl,
  vbak.stafo AS update_group_for_statistics_stafo,
  vbak.stwae AS statistic_scurrency_stwae,
  vbak.aedat AS changed_on_aedat,
  vbak.kvgr1 AS customer_group1_kvgr1,
  vbak.kvgr2 AS customer_group2_kvgr2,
  vbak.kvgr3 AS customer_group3_kvgr3,
  vbak.kvgr4 AS customer_group4_kvgr4,
  vbak.kvgr5 AS customer_group5_kvgr5,
  vbak.knuma AS agreement_knuma,
  vbak.kokrs AS controlling_area_kokrs,
  vbak.ps_psp_pnr AS wbs_element_ps_psp_pnr,
  vbak.kurst AS exchange_rate_type_kurst,
  vbak.kkber AS credit_control_area_kkber,
  vbak.knkli AS customer_credit_limit_ref_knkli,
  vbak.grupp AS customer_credit_group_grupp,
  vbak.sbgrp AS credit_representative_group_for_credit_management_sbgrp,
  vbak.ctlpc AS risk_category_ctlpc,
  vbak.cmwae AS currency_key_of_credit_control_area_cmwae,
  vbak.cmfre AS rele_a_se_date_of_the_document_determined_by_credit_management_cmfre,
  vbak.cmnup AS date_of_next_credit_check_of_document_cmnup,
  vbak.cmngv AS next_date_cmngv,
  vbak.amtbl AS released_credit_value_of_the_document_amtbl,
  vbak.hityp_pr AS hierarchy_type_for_pricing_hityp_pr,
  vbak.abrvw AS usage_indicator_abrvw,
  vbak.abdis AS mrp_for_delivery_schedule_types_abdis,
  vbak.vgbel AS document_number_of_the_reference_document_vgbel,
  vbak.objnr AS object_number_at_header_level_objnr,
  vbak.bukrs_vf AS company_code_to_be_billed_bukrs_vf,
  vbak.taxk1 AS alternative_tax_classification_taxk1,
  vbak.taxk2 AS tax_classification2_taxk2,
  vbak.taxk3 AS tax_classification3_taxk3,
  vbak.taxk4 AS tax_classification4_taxk4,
  vbak.taxk5 AS tax_classification5_taxk5,
  vbak.taxk6 AS tax_classification6_taxk6,
  vbak.taxk7 AS tax_classification7_taxk7,
  vbak.taxk8 AS tax_classification8_taxk8,
  vbak.taxk9 AS tax_classification9_taxk9,
  vbak.xblnr AS reference_document_number_xblnr,
  vbak.zuonr AS assignment_number_zuonr,
  vbak.vgtyp AS pre_doc_category_vgtyp,
  vbak.aufnr AS order_number_aufnr,
  vbak.qmnum AS notification_no_qmnum,
  vbak.vbeln_grp AS master_contract_number_vbeln_grp,
  vbak.stceg_l AS tax_destination_country_stceg_l,
  vbak.landtx AS tax_departure_country_landtx,
  vbak.handle AS international_unique_key_handle,
  vbak.proli AS dangerous_goods_management_profile_proli,
  vbak.cont_dg AS dangerous_goods_flag_cont_dg,
  vbak.upd_tmstmp AS utc_time_stamp_l_upd_tmstmp,
  dimensional_date_erdat.cal_year AS year_of_creation_date_erdat,
  dimensional_date_erdat.cal_month AS month_of_creation_date_erdat,
  dimensional_date_erdat.cal_quarter AS quarter_of_creation_date_erdat,
  dimensional_date_erdat.cal_week AS week_of_creation_date_erdat,
  dimensional_date_audat.cal_year AS year_of_document_date_audat,
  dimensional_date_audat.cal_month AS month_of_document_date_audat,
  dimensional_date_audat.cal_quarter AS quarter_of_document_date_audat,
  dimensional_date_audat.cal_week AS week_of_document_date_audat,
  dimensional_date_vdatu.cal_year AS year_of_requested_delivery_date_vdatu,
  dimensional_date_vdatu.cal_month AS month_of_requested_delivery_date_vdatu,
  dimensional_date_vdatu.cal_quarter AS quarter_of_requested_delivery_date_vdatu,
  dimensional_date_vdatu.cal_week AS week_of_requested_delivery_date_vdatu,    
  IFNULL(
    vbak.recordstamp,
    TIMESTAMP('1900-01-01 00:00:00+00')
  ) AS source_last_updated_at,
  CURRENT_TIMESTAMP() AS bq_loaded_at
FROM ${ctx.ref(moduleConfig.sources.sapModule.datasetId, "vbak")} AS vbak
LEFT JOIN currency_decimal
  ON vbak.waerk = currency_decimal.currkey
LEFT JOIN date_dimension AS dimensional_date_erdat
  ON vbak.erdat = dimensional_date_erdat.date
LEFT JOIN date_dimension AS dimensional_date_audat
  ON vbak.audat = dimensional_date_audat.date
LEFT JOIN date_dimension AS dimensional_date_vdatu
  ON vbak.vdatu = dimensional_date_vdatu.date
${incremental.getWhere(ctx, "vbak.recordstamp")}
`,
);
