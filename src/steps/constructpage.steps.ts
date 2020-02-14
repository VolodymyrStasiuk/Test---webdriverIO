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

When(
    /^switching to the constructor web site tab$/,
    (): any => {
        const handlers = browser.getWindowHandles()
            browser.switchToWindow(handlers[1]);
    }
);

When(
    /^the constructor web site view all button is clicked$/,
    (): any => {
        constructor.constructorWebSiteButtonLink().click();
    } 
)

Then (
    /^the constructor website is shown$/,
    (): any => {

        const constructorUrl = browser.getUrl();
        expect(constructorUrl).to.include('https://parus-smart.lviv.ua/');
        browser.pause(1000);

    }
);