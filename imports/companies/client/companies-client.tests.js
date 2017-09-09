import { Factory } from 'meteor/dburles:factory';
import { $ } from 'meteor/jquery';
import faker from 'faker';
import * as th from '/imports/client/test-helpers.js';
import '/imports/companies/client/companies-client.js';
import * as cth from './companies-test-helpers.js';

th.factoryDefine(CompaniesConfig, {
    TaxId: 0,
    Name: '',
    Rating: 0
});

CompaniesConfig.fakeData = cth.fakeData;

CompaniesConfig.extractDataFromHtml = function (html) {
    var data =[];
    $(html).find('.datarow').each( function () {
        data.push({
            Name:   $(this).find('div').first().text(),
            TaxId:  $(this).find('div').first().next().text(),
            Rating: $(this).find('div').first().next().next().text(),              
        });
   });
   return data;
}

describe(CompaniesConfig.collectionName, function () {  
    var config =  CompaniesConfig;
    it(th.sayHasH2Text(), function () { th.checksH2Text(config); });
    it(th.sayRendersSomeDocs(config), function () { th.withCollectionList(config); });
});