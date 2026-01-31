const { test, expect } = require('@playwright/test');

const scenarios = [
  
  { 
    id: 'Neg_Fun_0001', 
    name: 'Cuurency', 
    input: 'Meka Rs.300 wenne', 
    expected: 'මෙක Rs.300 වෙන්නෙ' 
  },  

  { 
    id: 'Neg_Fun_0002', 
    name: 'Multiple spaces, line breaks, and paragraph inputs', 
    input: 'api heta trip ekak yannavaa oyaa maath ekka yanna kamathi dha?',
    expected: 'අපි හෙට trip එකක් යන්නවා ඔයා මාත් එක්ක යන්න කැමති ද?'
  }, 

  { 
    id: 'Neg_Fun_0003', 
    name: ' Units of measurements ', 
    input: 'Mata haal 1kg genna mathak karanna puluwandha?', 
    expected: 'මට හාල් 1kg ගෙන්න මතක් කරන්න පුලුවන්ද?' 
  }, 

  { 
    id: 'Neg_Fun_0004', 
    name: ' Proper spacing  ', 
    input: 'kanna monaada thiyenne?', 
    expected: 'කන්න මොනාද තියෙන්නෙ?' 
  }, 
  { 
    id: 'Neg_Fun_0005', 
    name: 'joined words (stress test) ', 
    input: 'mamamodai', 
    expected: 'මමමොඩයි' 
  },

  { 
    id: 'Neg_Fun_0006', 
    name: 'Greetings', 
    input: 'Bohoma isthuthi', 
    expected: 'බොහොම ස්තුති' 
  }, 

  { 
    id: 'Neg_Fun_0007', 
    name: 'Negation patterns ', 
    input: 'Mata wada karanna baha', 
    expected: 'මට වැඩ කරන්න බැහැ' 
  }, 
  
    { 
    id: 'Neg_Fun_0008', 
    name: 'Negation patterns ', 
    input: 'Mama December 25 lankaavata enavaa', 
    expected: 'මම December 25 ලංකාවට එනවා' 
  }, 

  { 
    id: 'Neg_Fun_0009', 
    name: 'case-sensitivity in consonant mapping', 
    input: 'Mata ID eka Denna Puluvandha?', 
    expected: 'මට ID එක දෙන්න පුලුවන්ද?' 
  },  

  { 
    id: 'Neg_Fun_0010', 
    name: 'Compound sentence', 
    input: 'api sellam karalaa ewara vunaata passee bath kanavaa.', 
    expected: 'අපි සෙල්ලම් කරලා ඉවර වුනාට පස්සේ බත් කනවා.' 
  },
  

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    await page.goto('https://www.swifttranslator.com/', { waitUntil: 'networkidle' });

    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();

    // Clear and fill the area
    await inputArea.clear();
    await inputArea.fill(scenario.input);

    // Give the translation engine a moment to react
    await page.waitForTimeout(2000); 

    // Verify it is not empty
    await expect(outputDiv).not.toBeEmpty({ timeout: 15000 });

    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    // Status Check
    expect(actualOutput.trim()).toBe(scenario.expected);
  });
}