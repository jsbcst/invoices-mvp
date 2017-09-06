import '/imports/client/crud.html';
import './offers.html';
import '../offers.js';
import * as crud from '/imports/client/crud.js';

OffersConfig.template = Template.offers;
OffersConfig.editFormTemplate = Template.editOfferForm;
OffersConfig.cleanForm = function () {
    this.dataForm.Amount.value    = null;
    this.dataForm.Maturity.value  = null;   
}
OffersConfig.fillForm = function (doc) {
    document.getElementById("Amount").value = doc.Amount;
    document.getElementById("Maturity").value = doc.Maturity;
}
OffersConfig.fillDoc = function (doc) {
    doc.Amount   = Number(this.dataForm.Amount.value);
    doc.Maturity = new Date(this.dataForm.Maturity.value);  
}

crud.init(OffersConfig);