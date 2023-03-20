const dataServerChimera = require('../utils/dataServerChimera');

const cekChimera = async (browser, id, server) => {
   if (!id) return { code: 400, message: 'ID Game Tidak Boleh Kosong' };

   const findServer = dataServerChimera.filter((item) => item.zoneId == server);

   if (findServer.length < 1) return { code: 404, message: 'Server Tidak Ditemukan' };

   page = browser.chimera;
   if (!page) return { code: 400, message: 'Silahkan Coba 1 menit lagi.' };

   try {
      const check = await page.$('.user-head > .switch-btn');
      if (check) {
         await page.click('.user-head > .switch-btn');

         const c = await page.$('input[placeholder="Harap masukkan ID Pemain"]');
         await c.click({ clickCount: 3 });
         await page.keyboard.press('Backspace');
      }

      await page.click('[placeholder="Select the partition"]');
      await page.waitForSelector(`text/${findServer[0].name}`);
      await page.click(`text/${findServer[0].name}`);
      await page.type('input[placeholder="Harap masukkan ID Pemain"]', id);
      await page.keyboard.press('Enter');

      await page.waitForSelector('.n-box > .loading-btn', { hidden: true });

      const divId = 'div[class="box id-box active have-zIndex-select"]';

      const getResult = await page.$$eval(divId, (divs) => {
         const elData = {};

         divs.forEach((div) => {
            const elements = div.querySelectorAll('*');

            elements.forEach((element) => {
               if (element.className !== '') {
                  elData[element.className] = element.innerText.trim();
               }
            });
         });

         return elData;
      });

      // console.log(getResult);

      if (getResult['error-tips show']) {
         const c = await page.$('input[placeholder="Harap masukkan ID Pemain"]');
         await c.click({ clickCount: 3 });
         await page.keyboard.press('Backspace');
         return { code: 400, message: getResult['error-tips show'] };
      } else if (getResult['name']) {
         await page.click('.user-head > .switch-btn');
         const c = await page.$('input[placeholder="Harap masukkan ID Pemain"]');
         await c.click({ clickCount: 3 });
         await page.keyboard.press('Backspace');
         return { code: 200, data: getResult['name'] || 'null' };
      }

      const c = await page.$('input[placeholder="Harap masukkan ID Pemain"]');
      await c.click({ clickCount: 3 });
      await page.keyboard.press('Backspace');
      return { code: 400, message: 'Silahkan Coba Lagi' };
   } catch (e) {
      console.log(e.message);
      await page.screenshot({ path: `./public/images/${id}.png` });
      await page.reload();
      return { code: 500, message: 'Error, silahkan coba lagi' };
   }
};

module.exports = cekChimera;
