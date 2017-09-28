import '/imports/client/crud.html';
import '/imports/client/status.html';
import './offers.html';
import '../offers-meteor.js';
import * as crud from '/imports/client/crud.js';

OffersConfig.template = Template.offers;
OffersConfig.editFormTemplate = Template.editOfferForm;

crud.init(OffersConfig);

/* TODO: DRY: unify offerStatusSelector & advanceStatusSelector */
Template.offerStatusSelector.helpers({
    statusoptions() {
        var r = OffersConfig.modelFields.Status.validators[0].param;
        r =  r.map(function (element) {
            return { code: element }; 
        })
        //console.log(r);
        return r;
    },
 });