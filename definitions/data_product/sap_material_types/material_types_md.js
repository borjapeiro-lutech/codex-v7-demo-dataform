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
  "moduleId": "sap_material_types"
};
const tableConfig = {
  "description": "Information about material types at the granularity of Client(System), Language Key and Material Type.",
  "columns": {
    "client_mandt": "Client (Mandant), PK",
    "language_key_spras": "Language key, PK",
    "material_type_mtart": "Material Type, PK",
    "reference_material_type_mtref": "Reference material type",
    "screen_reference_mbref": "Screen reference depending on the material type",
    "description_mtbez": "Material type description",
    "display_material_aranz": "Display material on cash register display",
    "time_till_deleted_ardel": "Time in days until a material is deleted",
    "authorization_group_begru": "Authorization group in the material master",
    "external_purchase_orders_bsext": "External purchase orders allowed",
    "internal_purchase_orders_bsint": "Internal purchase orders allowed",
    "history_requirement_cchis": "Control (time) of history requirement: Material",
    "create_new_batch_chneu": "Create new batch",
    "class_class": "Class number",
    "class_type_ctype": "Class type",
    "with_quantity_structure_ekalr": "Material is costed with quantity structure",
    "external_number_assignment_indicator_envop": "Indicates whether external number assignment is allowed without validation",
    "field_reference_flref": "Field reference for material master",
    "initial_status_izust": "Initial status of a new batch",
    "account_category_reference_kkref": "Account category reference",
    "grouping_indicator_kzgrp": "Grouping indicator",
    "configurable_material_kzkfg": "Material is configurable",
    "manufacturer_part_kzmpn": "Manufacturer part",
    "pipeline_mandatory_indicator_kzpip": "Indicates whether pipeline handling is mandatory",
    "material_for_process_kzprc": "Material master record for a process",
    "returnable_packaging_logistics_mandatory_indicator_kzrac": "Indicates whether returnable packaging logistics is mandatory",
    "price_control_mandatory_indicator_kzvpr": "Indicates whether price control is mandatory",
    "cross_plant_status_mstae": "Cross plant material status",
    "print_price_indicator_prdru": "Indicates whether price is displayed on cash register display and printed on receipt",
    "maintenance_status_pstat": "Maintenance Status",
    "item_category_group_vmtpo": "Default value for material item category group",
    "price_control_vprsv": "Price Control",
    "version_category_vtype": "Version Category",
    "material_type_id_wmakg": "Material Type ID",
    "source_last_updated_at": "Timestamp of the last update from the source system",
    "bq_loaded_at": "Timestamp of the last update from the BigQuery system"
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
    "material_type_mtart",
    "language_key_spras"
  ]
);

publish("material_types_md", publishConfig).query(
  (ctx) => `
SELECT
  t134.mandt AS client_mandt,
  t134t.spras AS language_key_spras,
  t134.mtart AS material_type_mtart,
  t134.mtref AS reference_material_type_mtref,
  t134.mbref AS screen_reference_mbref,
  t134t.mtbez AS description_mtbez,
  t134.aranz AS display_material_aranz,
  t134.ardel AS time_till_deleted_ardel,
  t134.begru AS authorization_group_begru,
  t134.bsext AS external_purchase_orders_bsext,
  t134.bsint AS internal_purchase_orders_bsint,
  t134.cchis AS history_requirement_cchis,
  t134.chneu AS create_new_batch_chneu,
  t134.class AS class_class,
  t134.ctype AS class_type_ctype,
  t134.ekalr AS with_quantity_structure_ekalr,
  t134.envop AS external_number_assignment_indicator_envop,
  t134.flref AS field_reference_flref,
  t134.izust AS initial_status_izust,
  t134.kkref AS account_category_reference_kkref,
  t134.kzgrp AS grouping_indicator_kzgrp,
  t134.kzkfg AS configurable_material_kzkfg,
  t134.kzmpn AS manufacturer_part_kzmpn,
  t134.kzpip AS pipeline_mandatory_indicator_kzpip,
  t134.kzprc AS material_for_process_kzprc,
  t134.kzrac AS returnable_packaging_logistics_mandatory_indicator_kzrac,
  t134.kzvpr AS price_control_mandatory_indicator_kzvpr,
  t134.mstae AS cross_plant_status_mstae,
  t134.prdru AS print_price_indicator_prdru,
  t134.pstat AS maintenance_status_pstat,
  t134.vmtpo AS item_category_group_vmtpo,
  t134.vprsv AS price_control_vprsv,
  t134.vtype AS version_category_vtype,
  t134.wmakg AS material_type_id_wmakg,
  GREATEST(
    IFNULL(t134.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00')),
    IFNULL(t134t.recordstamp, TIMESTAMP('1900-01-01 00:00:00+00'))
  ) AS source_last_updated_at,
  CURRENT_TIMESTAMP() AS bq_loaded_at
FROM
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, "t134")} AS t134
INNER JOIN
  ${ctx.ref(moduleConfig.sources.sapModule.datasetId, "t134t")} AS t134t
  ON t134.mandt = t134t.mandt AND t134.mtart = t134t.mtart
${incremental.getWhere(ctx, ["t134.recordstamp", "t134t.recordstamp"])}
`,
);
