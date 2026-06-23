const { chromium } = require('playwright');
(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  await page.setViewportSize({ width: 1440, height: 900 });
  const errors = [];
  page.on('console', function(m) { if (m.type()==='error') errors.push(m.text()); });
  page.on('pageerror', function(e) { errors.push('PAGEERROR: '+e.message); });
  await page.goto('http://localhost:3002/', { waitUntil: 'domcontentloaded', timeout: 15000 });
  await page.waitForTimeout(5000);
  await page.screenshot({ path: 'lanyard-state.png' });
  var nCanvas = await page.evaluate(function() { return document.querySelectorAll('canvas').length; });
  var rect = await page.evaluate(function() { var c = document.querySelector('canvas'); return c ? {w: c.offsetWidth, h: c.offsetHeight} : null; });
  console.log('canvas count:', nCanvas);
  console.log('canvas size:', JSON.stringify(rect));
  console.log('errors:', errors.slice(0,5).join('\n') || 'none');
  await browser.close();
})();
