import { browser, by, element } from 'protractor';
import { AppPage } from './app.po';
import { Test } from './pages/test.po';

describe('manipulate title and scroll', () =>{

    let page: AppPage;
    let test: Test;

    beforeEach(() =>{
        page = new AppPage();
        test = new Test();
        page.navigateToHome();
    })

    // it('should change title', () =>{
  //   let changeTitle = element(by.id("change-title"));
  //   changeTitle.clear();
  //   changeTitle.sendKeys("dit is het nieuwe titel");
  //   expect(element(by.xpath("//div/h1")).getText()).toEqual("Welcome to dit is het nieuwe titel!");
  // });

  // it('scroll down', () =>{
  //   let scrollTest = element(by.xpath("//p/span/h1"));
  //   browser.actions()
  //   .mouseMove(scrollTest)
  //   .mouseMove({x: 0, y: 30})
  //   .mouseDown()
  //   .mouseMove({x: 0, y: 100})
  //   .doubleClick()
  //   .perform()
  //   .then(function (){
  //     browser.sleep(5000);
  //   })
  //   expect(scrollTest.getText()).toEqual("Moved to here");

  // })

//   it('change the title 100 times', () => {
//     for (let i = 1; i <= 100; i++) {
//       test.getTitleInput().clear();
//       test.getTitleInput().sendKeys(`test 0${i}`);
//       if (i == 100) {
//         test.getTitleInput().clear();
//         test.getTitleInput().sendKeys("finished!!!!!!!!!!!");
//         browser.sleep(2000);
//       }
//     }
//   })
  
});