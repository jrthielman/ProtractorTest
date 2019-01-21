import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';
 

export class Test {

    navigateToHome(): promise.Promise<any>{
        return browser.get("/");
    }

    getTitleInput(): ElementFinder{
        return element(by.id("change-title"));
    }

}