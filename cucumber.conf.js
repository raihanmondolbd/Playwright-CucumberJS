const { Before, BeforeAll, AfterAll, After, setDefaultTimeout } = require("@cucumber/cucumber");
// you can choose other browsers like webkit or firefox according to your requirement
const { chromium } = require("playwright");
setDefaultTimeout(60000)


BeforeAll(async function () {
    global.browser = await chromium.launch({
        headless: false,
        slowMo: 1000,
    });
 
 });
 
 // close the browser
 AfterAll(async function () {
 
    await global.browser.close();
 });
 Before(async function () {
    global.context = await global.browser.newContext();
    global.page = await global.context.newPage();
 });
 
 // Cleanup after each scenario
 After(async function () {
    await global.page.close();
    await global.context.close();
 });
