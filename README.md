# openIMIS Frontend Claim reference module

This repository holds the files of the openIMIS Frontend Claim reference module.
It is dedicated to be deployed as a module of [openimis-fe_js](https://github.com/openimis/openimis-fe_js).

[![License: AGPL v3](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)

## Main Menu Contributions

- Claims (claim.mainMenu translation key)

  **Health Facilities Claims** (claim.menu.healthFacilityClaims translation key), displayed if user has at least one of rights [111002, 111004, 111005, 111006 or 111007]

  **Reviews** (claim.menu.reviews translation key), displayed if user has at least one of the rights [111008, 111009, 111010; 111011]

## Other Contributions

- `core.Router`: registering the `claim/healthFacilities`, `claim/claim/:claim_uuid`, `claim/reviews`, `claim/review/:claim_uuid` and `claim/feedback/:claim_uuid` routes in openIMIS client-side router

## Available Contribution Points

- `claim.MainMenu` ability to add entries within the main menu entry (known usage: openimis-fe-claim_batch)
- `claim.Filter` ability to extend the ClaimFilter (inside the criteria form), used for HealthFacilities and Reviews screens
- `claim.HealthFacilitiesFilter` ability to extend the ClaimFilter (inside the criteria form), only for the HealthFacilities screen
- `claim.ReviewsFilter` ability to extend the ClaimFilter (inside the criteria form), only for the Reviews screen
- `claim.Searcher` ability to extend the ClaimSearcher (between the criteria form and the results table)
- `claim.ClaimForm` ability to extend the ClaimForm (entity displayed to add, edit, provide feedback and provide review)
- `claim.MasterPanel` ability to extend the first section (paper) of the ClaimForm
- `claim.ClaimFeedback` ability to extend the ClaimFeedbackPanel (i.e. feedback form)
- `claim.SelectionAction` ability to extend the ClaimSearcher action menu
- `claim.ReviewSelectionAction` ability to extend the ClaimReviewSearcher action menu

## Published Components

- `claim.ClaimAdminPicker`, suggestion-based picker bound to `claimAdmins` GraphQL query
- `claim.ClaimOfficerPicker`, suggestion-based picker bound to `claimOfficers`GraphQL query
- `claim.ClaimStatusPicker`, constant-based picker, translation keys: `claim.claimStatus.null`, `claim.claimStatus.1`,...
- `claim.FeedbackStatusPicker`, constant-based picker, translation keys: `claim.feedbackStatus.null`, `claim.feedbackStatus.1`,...
- `claim.ReviewStatusPicker`, constant-based picker, translation keys: `claim.reviewStatus.null`, `claim.reviewStatus.1`,...
- `claim.AttachmentStatusPicker`, constant-based picker, translation keys: `claim.attachmentStatus.null`, `claim.attachmentStatus.1`,`claim.attachmentStatus.2`
- `claim.ApprovalStatusPicker`, constant-based picker, translation keys: `claim.approvalStatus.null`, `claim.approvalStatus.1`,...
- `claim.RejectionReasonPicker`, constant-based picker (with tooltip), translation keys: `claim.rejectionReason.null`, `claim.rejectionReason.1`,...
- `claim.ClaimMasterPanelExt`, ready to use extension for the `claim.MasterPanel`, loading the `policy.InsureePolicyEligibilitySummary` published component and displaying the last claim (visit) code, date from and date to

## Dispatched Redux Actions

- `CLAIM_CLAIM_ADMINS_{REQ|RESP|ERR}`: loading the claim admins cache
- `CLAIM_CLAIM_ADMIN_SELECTED`: when claim administrator is selected in filter (enable claim add button)
- `CLAIM_CLAIM_HEALTH_FACILITY_SELECTED`: when health facility is selected in filter (enable claim add button)
- `CLAIM_CLAIM_SEARCHER_{REQ|RESP|ERR}`: querying for claims (filter updates or refresh button pushed)
- `CLAIM_CLAIM_{REQ|RESP|ERR}`: loading a claim (double click on claim in result table)
- `CLAIM_LAST_CLAIM_AT_{REQ|RESP|ERR}`: loading the last (other) claim of the claim insuree at the claim health facility (cfr. `claim.ClaimMasterPanelExt`)
- `CLAIM_MUTATION_{REQ|ERR}`: sending a mutation (update, deliver feedback,...)
- `CLAIM_CREATE_CLAIM_RESP`: receiving the result of create claim mutation
- `CLAIM_UPDATE_CLAIM_RESP`: receiving the result of update claim mutation
- `CLAIM_SUBMIT_CLAIMS_RESP`: receiving the result of submit claim(s) mutation
- `CLAIM_DELETE_CLAIMS_RESP`: receiving the result of delete claim(s) mutation
- `CLAIM_SELECT_CLAIMS_FOR_FEEDBACK_RESP`: receiving the result of select claim(s) for feedback mutation
- `CLAIM_BYPASS_CLAIMS_FEEDBACK_RESP`: receiving the result of bypass claim(s) feedback mutation
- `CLAIM_SKIP_CLAIMS_FEEDBACK_RESP`: receiving the result of skip claim(s) feedback mutation
- `CLAIM_DELIVER_CLAIM_FEEDBACK_RESP`: receiving the result of deliver claim feedback mutation
- `CLAIM_SELECT_CLAIMS_FOR_REVIEW_RESP`: receiving the result of select claim(s) for review mutation
- `CLAIM_BYPASS_CLAIMS_REVIEW_RESP`: receiving the result of bypass claim(s) review mutation
- `CLAIM_SKIP_CLAIMS_REVIEW_RESP`: receiving the result of skip claim(s) review mutation
- `CLAIM_DELIVER_CLAIM_REVIEW_RESP`: receiving the result of deliver claim review mutation
- `CLAIM_PROCESS_CLAIMS_RESP`: receiving the result of process claim(s) mutation
- `CLAIM_PRINT`: emit print claim request
- `CLAIM_PRINT_DONE`: recieved print claim response (pdf)
- `CLAIM_EDIT_HEALTH_FACILITY_SET`: selected health facility in claim edit form. Known usage: `medical_pricelist` (to load the corresponding pricelist)

## Other Modules Listened Redux Actions

None

## Other Modules Redux State Bindings

- `state.core.user`, to access user info (rights,...)
- `state.medical_pricelist`, retrieving medical pricelist once health facility of claim selected (changed)
- `state.loc.userHealthFacilityFullPath`, retrieving user's heath facility (and its district and region)

## Configurations Options

- `debounceTime`: debounce time (ms) before triggering search in ClaimFilter (Default: 800)
- `newClaim.visitType`: default (pre-selected) visity type when creating a claim (Default: 'O' - Other)
- `claim.CreateClaim.feedbackStatus`: value set to feedback status when creating a claim (Default: 1)
- `claim.CreateClaim.reviewStatus`value set to review status when creating a claim (Default: 1)
- `claimFilter.rowsPerPageOptions`: pagination page size options in Claim Searcher component (Default: `[10, 20, 50, 100]`)
- `claimFilter.defaultPageSize`, pagination pre-selected page size options in Claim Searcher component (Default: `10`)
- `claimFilter.highlightAmount`, amount triggering the primary highligh (default bold) for claims in claim searcher result. Default: `0`, menaing no highlight threshold
- `claimFilter.highlightAltInsurees`, boolean to trigger the secondary highligh (default italic) for claims of the same insuree. Default: `true`
- `claimForm.codeMaxLength`, the max size of a claim code (id), default 8;
- `claimForm.fixedPricesAtEnter`, boolean to prevent user to adapt prices at claim entry (fixed to price list). Default: false (user can change the price)
- `claimForm.fixedPricesAtReview`, boolean to prevent user to adapt prices at claim review (fixed to price list). Default: false (user can change the price)
- `claimForm.showJustificationAtEnter`, boolean to display justification field(s) for items and services at claim entry. Default false;
- `claimForm.showAdjustmentAtEnter`, boolean to display adjustment field at claim entry. Default false;
- `claimForm.insureePicker`, the insuree picker to use when filling a claim. Default insuree.InsureeChfIdPicker (the exact chfid entry picker). Other pre-canned option (from insuree reference module): insuree.InsureePicker (dialog picker with search on chfid, last name and other names)
- `canSaveClaimWithoutServiceNorItem`, wherever user can save a claim without service nor item, default: true
- `canSubmitClaimWithZero`, wherever user can submit with 0 as claimed amount (probably a claim without service/item), default: false
- `claimAttachments`, boolean to enable/disable claim attachments. Default true;
- `claimForm.isReferHFMandatory`, boolean to make referal HF mandatory when visit type = Referal. Default false;
- `claimForm.claimTypeReferSymbol`, used for checking referHF option, indicate which letter represents referal. Default R.
- `claimForm.autoGenerateClaimCode`, boolean to enable autogenerating claim code by the backend. Default false.
- `claimForm.numberOfAdditionalDiagnosis`, integer to enable required number of additional diagnoses. Default 4, up to 4 supported.
- `claimForm.isExplanationMandatoryForIPD`, boolean to enable check for required explanation if visit type is IPD. Default false.
- `claimForm.isCareTypeMandatory`, boolean to set CareType (in/out patient) field to mandatory. It removes "any" option. Default false.
- `reviews.defaultFilters`, default filters for claim review searcher. The code snippet below sets the default values for 'Claim Status' and 'Claimed Less Than' in the Review page. Specifically, it sets 'Claim Status' to the value of 4 (which means 'Checked') and 'Claimed Less Than' to a value of 1,000,000.
  {
  "reviews.defaultFilters" : {
  "claimStatus": {
  "value": 4,
  "filter": "status: 4",
  },
  "claimedUnder": {
  "value": 1000000,
  "filter": "claimed_Lte: \"1000000\""
  }
  }
  }
- `claimForm.showOrdinalNumber`, show "number" column as a first column in claim searcher and item/services table. Default false.
- `claimForm.isClaimedDateFixed`, set Date Claimed to current date and set field to read only while creating new claim. Default false.
- `claimForm.quantityMaxValue`, defines the max number of provided quantity. By default: **10.000**.
- `ClaimMasterPanelExt.isAdditionalPanelEnabled`: Determines whether to display additional panels, including information about the insuree and details about claim related to the same diagnosis. By default: **false**.
- `explanationRequiredIfQuantityAboveThreshold`: Determines if an explanation field should be mandatory and if an error should be displayed when the provided quantity exceeds the specified threshold. If set to true, an error will be triggered when the provided quantity goes beyond the threshold set in **quantityExplanationThreshold**. By default: **false**.
- `quantityExplanationThreshold`: Specifies the threshold for the provided quantity. If the quantity provided exceeds this threshold, and if **explanationRequiredIfQuantityAboveThreshold** is set to true, an error will be triggered indicating that an explanation is required. By default: **1**.
- `showPreAuthorization`, boolean to hide/show Pre-Authorization field. Default is **false**
- `fields`, controls the behavior of the fields. For example "fields": {"guaranteeNo": "M"} will make the field **Guarantee No** a mandatory field. Options are M, O and N.

  - **M**: Makes the field mandatory
  - **O**: Makes the field optional
  - **N**: Hides the field
