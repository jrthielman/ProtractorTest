import { browser, by, element, promise, ElementFinder, ElementArrayFinder } from 'protractor';

export class CatBox{

    getCatBox(): ElementFinder{
        return element(by.css(".cat-box"));
    }

    getCatBoxText(): promise.Promise<string>{
        return this.getCatBox()
        .element(by.css("h2")).getText();
    }

    getCatBoxButton(): ElementArrayFinder{
        return this.getCatBox()
        .all(by.css("button"));
    }

    getInputBox(): ElementFinder{
        return this.getCatBox()
        .element(by.css("input"));
    }

    getLink(): ElementFinder{
        return this.getCatBox()
        .element(by.css("a"));
    }

}