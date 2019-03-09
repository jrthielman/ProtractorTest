import { browser, by, element, ElementFinder } from 'protractor';
import { CatBox } from './pages/catbox.po'; 

describe('angular test links', () => {

  let catBox: CatBox = new CatBox();

  beforeEach(() => {
    //The code here will get executed before each it block is called  
    browser.get('/');
  });

  it('should display the name: tour of heroes and open angular tutorial page',() => {
   /*Expectations accept parameters that will be matched with the real value
   using Jasmine's matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
   let heroesLink = element(by.linkText("Tour of Heroes"));
   expect(heroesLink.getText()).toEqual("Tour of Heroes")
   .then(function(){
     heroesLink.click().then(function (){
      browser.getAllWindowHandles().then(function (handles){
        let newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function (){
          expect(browser.getTitle()).toEqual("Angular - Tutorial: Tour of Heroes");
          expect(browser.getCurrentUrl()).toMatch("https://angular.io/tutorial");
          browser.close();
          browser.switchTo().window(handles[0]);
        });
      });
    });
   });
  });

  it('should display the name: CLI documentation and open documentation page',() => {
   /*Expectations accept parameters that will be matched with the real value
   using Jasmine's matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
   let cliDocu = element(by.linkText("CLI Documentation"));
   expect(cliDocu.getText()).toEqual("CLI Documentation")
   .then(function(){
     cliDocu.click().then(function (){
      browser.getAllWindowHandles().then(function (handles){
        let newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function (){
          expect(browser.getTitle()).toEqual("Angular - CLI Command Reference");
          expect(browser.getCurrentUrl()).toMatch("https://angular.io/cli");
          browser.close();
          browser.switchTo().window(handles[0]);
        });
      });
    });
   });
  });

  it('should display the name: angular blog and open blog page',() => {
   /*Expectations accept parameters that will be matched with the real value
   using Jasmine's matcher functions. eg. toEqual(),toContain(), toBe(), toBeTruthy() etc. */
    let blogLink = element(by.linkText("Angular blog"));

    blogLink.click().then(() => {
      console.log('halloooo2');
      browser.getAllWindowHandles().then(function (handles){
        let newWindowHandle = handles[1];
        browser.switchTo().window(newWindowHandle).then(function (){
          browser.waitForAngularEnabled(false);
          expect(browser.getTitle()).toEqual("Angular Blog");
          expect(browser.getCurrentUrl()).toMatch("https://blog.angular.io");
          browser.close();
          browser.switchTo().window(handles[0]);
        });
      });
    });
  });

  it('catbox text should read: This is the cat box', () => {
    expect(catBox.getCatBoxText()).toEqual("This is the cat box");
    chillOut(2);
    catBox.getInputBox().sendKeys("https://www.google.com");
    chillOut(2);
    catBox.getCatBoxButton().get(0).click();
    chillOut(2);
    catBox.getLink().click().then(function (){
      browser.getAllWindowHandles().then(function (handles){
        browser.switchTo().window(handles[1]).then(function (){
          browser.waitForAngularEnabled(false);
          expect(browser.getCurrentUrl()).toMatch("https://www.google.com/");
          chillOut(2);
          element(by.name("q")).sendKeys("lol dit is een geautomatiseerde test die iets probeert op te zoeken");
          chillOut(2);
          browser.close();
          browser.switchTo().window(handles[0]);
        });
      });
    });
    for(let i = 0; i <= 100; i++){
      catBox.getCatBoxButton().get(1).click();
    }
  });

});

function chillOut(ms: number){
  browser.sleep(ms*1000);
}

function findName(name: string): ElementFinder{
  return element(by.name(name));
}