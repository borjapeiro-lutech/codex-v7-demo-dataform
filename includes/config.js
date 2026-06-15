module.exports = {
    "foundation": {
        "erp": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_foundation",
            "sourceProjectId": "lutech--cortexv7-sandbox--b7",
            "sourceDatasetId": "sap_raw_ingest"
        }
    },
    "product": {
        "sap_customers": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_vendors": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_materials": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_material_types": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_material_groups": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_material_plants": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_material_cross_plant_batches": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_material_movement_types": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_materials_movement": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_sales_documents": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_sales_organizations": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_purchasing_documents": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_purchasing_organizations": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_delivery_documents": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        },
        "sap_delivery_blocking_reasons": {
            "targetProjectId": "lutech--cortexv7-sandbox--b7",
            "targetDatasetId": "sap_ingest_products",
            "sources": {
                "sapModule": {
                    "projectId": "lutech--cortexv7-sandbox--b7",
                    "datasetId": "sap_ingest_foundation"
                }
            }
        }
    }
};
