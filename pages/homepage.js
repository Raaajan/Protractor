let homepage = function () {
    let firstNumber = element(by.model('first'));
    let secondNumber = element(by.model('second'));
    let goBtn = element(by.id('gobutton'));
    let result = element(by.xpath("//h2[@class='ng-binding']"));
    
    this.getUrl = function(url){
        browser.get(url);
    }
    this.enterFN = function (fno) {
        firstNumber.sendKeys(fno);

    }

    this.enterSN = function (sno) {
        secondNumber.sendKeys(sno);

    }

    this.clickGobtn = function () {
        goBtn.click();
    }

};
module.exports = new homepage();