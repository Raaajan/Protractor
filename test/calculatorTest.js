let homepage = require('../pages/homepage');
describe('calculator', function () {
    beforeAll(function () {
        console.log('opening browser')
        homepage.getUrl('http://juliemr.github.io/protractor-demo/');
    })
    it('to check addition', function () {
        homepage.enterFN('2');
        homepage.enterSN('2');
        homepage.clickGobtn();
    })
})