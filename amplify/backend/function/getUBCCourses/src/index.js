const chromium = require('chrome-aws-lambda');
const UBC_COURSES_URL = "https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-all-departments";
// exports.handler = async (event) => {
//     await driver.get(UBC_COURSES_URL);
//     let courseTable = await driver.findElement(By.id('mainTable'));
//     let courses = await courseTable.findElements(By.css('tbody tr td'));
//     console.log(courses);
//     const response = {
//         statusCode: 200,
//     };
//     return response;
// };


exports.handler = async (event) => {
  let result = null;
  let browser = null;

  try {
    browser = await chromium.puppeteer.launch({
      args: chromium.args,
      defaultViewport: chromium.defaultViewport,
      executablePath: await chromium.executablePath,
      headless: chromium.headless,
      ignoreHTTPSErrors: true,
    });

    let page = await browser.newPage();

    await page.goto(event.url || 'https://courses.students.ubc.ca/cs/courseschedule?pname=subjarea&tname=subj-all-departments');

    result = await page.title();
  } catch (error) {
      console.error(error);
  } finally {
    if (browser !== null) {
      await browser.close();
    }
  }

  return result;
};