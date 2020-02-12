import {Given, Then, When} from "cucumber";
import { expect } from 'chai';
import constructor from "pages/constructor.page"
import homepagePage from "pages/homepage.page";

Given(
    /^the constructor page is shown$/,
    (): void => {
        constructor.open();
        
    },
);

When(
    /^the constructor web site link is clicked$/,
    (): any => {
       constructor.constractorWebSiteLink().click();

    }
);


Then (
    /^the constructor website is shown$/,
    (): any => {

        const constructorUrl = browser.getUrl();
        expect(constructorUrl).to.equal('https://novostroyki.lun.ua/uk/%D0%B6%D0%BA-%D0%BF%D0%B0%D1%80%D1%83%D1%81-smart-%D0%BB%D1%8C%D0%B2%D1%96%D0%B2/%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8');
        browser.pause(1000);

    }
);





/*
Then (
    /^the constructor website is shown$/,
    (): any => {
        const constructorUrl = browser.getUrl();
        expect(constructorUrl).to.equal('https://novostroyki.lun.ua/uk/%D0%B6%D0%BA-%D0%BF%D0%B0%D1%80%D1%83%D1%81-smart-%D0%BB%D1%8C%D0%B2%D1%96%D0%B2/%D0%B4%D0%BE%D0%BA%D1%83%D0%BC%D0%B5%D0%BD%D1%82%D0%B8');
        browser.pause(1000);

    }
);
*/