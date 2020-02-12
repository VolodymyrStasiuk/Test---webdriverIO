import {Given, Then, When} from "cucumber";
import { expect } from 'chai';
import { assert } from 'chai';
import homepage from "pages/homepage.page"
import { isMainThread } from "worker_threads";
import { equal } from "assert";
import { get } from "https";
import { request } from "http";


// makes the connection between the cucumber and the typescript
Given(
    /^the home page is shown$/,
    (): void => {
        homepage.open();
        
    },
);
Then(
    /^correct page title is shown$/,
    (): any => {
        const TitleText: string = browser.getTitle();
        expect(TitleText).to.eql('ЛУН | Шукаєш квартиру? Перевір на ЛУН');
    }
);




When(
    /^Opening new appartment category$/,
    (): any => {
        homepage.apartmentsFromTheConstructionLink().click();
    }
);
Then(
    /^correct page title is shown for the cosntructor page$/,
    (): any => {
        const TitleText: string = browser.getTitle();
        expect(TitleText).to.eql('ЛУН — Усі новобудови України, квартири в ЖК від забудовників');
    }
);




When(
    /^Sending keys to the search field$/,
    (): any => {
        homepage.searchInputField().clearValue();
        homepage.searchInputField().setValue('ЖК Парус Smart');
    }
);
When(
    /^Submitting search form$/,
    (): any => {
        homepage.submitSearchButton().click();
    }
);




When(
    /^Opening documents tab$/,
    (): any => {
        homepage.documentsTab().click();
    }
);
When(
    /^Expanding land yard documents section$/,
    (): any => {
        homepage.landYardDocumentsExpander().click();
        browser.pause(1000);
    }
);


Then(
    /^correct document is shown$/,
    (): any => {
        const documentTextSelector = $('/html/body/div[3]/div[2]/div[1]/div[2]');
        expect(documentTextSelector.getText()).to.have.string('НВ-4605972402017');
    }
);





