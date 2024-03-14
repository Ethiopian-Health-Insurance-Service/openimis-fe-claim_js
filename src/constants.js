import _ from "lodash";

export const CLAIM_STATUS = [1, 2, 4, 8, 16];
export const REVIEW_STATUS = [1, 2, 4, 8, 16];
export const FEEDBACK_STATUS = [1, 2, 4, 8, 16];
export const APPROVAL_STATUS = [1, 2];

export const CLAIM_DETAIL_REJECTED_STATUS = 2;
export const STATUS_REJECTED = 1;
export const STATUS_ENTERED = 2;
export const REJECTION_REASONS = _.range(-1, 20);
export const FEEDBACK_ASSESSMENTS = _.range(-1, 6);
// NULL - all claims, 1 - with attachments, 2 - without attachments
export const ATTACHMENT_STATUS_WITH = 1;
export const ATTACHMENT_STATUS_WITHOUT = 2;
export const ATTACHMENT_STATUS = [ATTACHMENT_STATUS_WITH, ATTACHMENT_STATUS_WITHOUT];

export const IN_PATIENT_STRING = "IPD";
export const OUT_PATIENT_STRING = "OPD";
export const CARE_TYPE_STATUS = [IN_PATIENT_STRING, OUT_PATIENT_STRING];

export const URL_TYPE_STRING = "URL";
export const FILE_TYPE_STRING = "FILE";
export const ATTACHMENT_TYPE_STATUS = [URL_TYPE_STRING, FILE_TYPE_STRING];

export const MODULE_NAME = "claim";

export const RIGHT_CLAIM = 111000;
export const RIGHT_SEARCH = 111001;
export const RIGHT_ADD = 111002;
// export const RIGHT_EDIT = 111003
export const RIGHT_DELETE = 111004;
export const RIGHT_LOAD = 111005;
export const RIGHT_PRINT = 111006;
export const RIGHT_SUBMIT = 111007;
export const RIGHT_CLAIMREVIEW = 111008;
export const RIGHT_FEEDBACK = 111009;
export const RIGHT_UPDATE = 111010;
export const RIGHT_PROCESS = 111011;
export const RIGHT_RESTORE = 111012;

export const CLAIMS_WITH_AT_LEAST_ENTERED_STATUS = 'status_Gt: 2';

export const DEFAULT_ADDITIONAL_DIAGNOSIS_NUMBER = 4;
export const POLICY_ACTIVE_STATUS = 2;

export const DEFAULT = {
  IS_ADDITIONAL_PANEL_ENABLED: false,
  EXPLANATION_REQUIRED_IF_ABOVE_THRESHOLD: false,
  QUANTITY_EXPLANATION_THRESHOLD: 1,
  QUANTITY_MAX_VALUE: 10000,
  AUTOGENERATE_CLAIM_CODE: false,
  ALLOWED_DOMAINS_ATTACHMENTS: [],
  RENDER_LAST_NAME_FIRST: true,
};

export const DAYS = {
  IN_A_WEEK: 7,
  IN_A_MONTH: 30,
  IN_A_YEAR: 365,
};

export const PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_1 = 1;
export const PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_2 = 2;
export const PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_3 = 3;
export const PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_4 = 4;
export const PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTERS = [
  PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_1,
  PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_2,
  PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_3,
  PRIMARY_OPERATIONAL_INDICATORS_REPORT_QUARTER_4
];
export const STORAGE_KEY_CLAIM_HEALTH_FACILITY = 'claimHealthFacility';
export const STORAGE_KEY_ADMIN = 'admin';
