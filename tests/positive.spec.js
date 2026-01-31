
const { test, expect } = require('@playwright/test');

const scenarios = [
  { 
    id: 'Pos_Fun_0001', 
    name: 'Simple Greeting', 
    input: 'kohomadha adha dhavasa?',
    expected: 'කොහොමද අද දවස?' 
  },

  { 
    id: 'Pos_Fun_0002', 
    name: 'Compund Sentence', 
    input: 'Eyaata mahansiyi, nisaa adha class ekata giyee nae.', 
    expected: 'එයාට මහන්සියි, නිසා අද class එකට ගියේ නැ.'
  },
    { 
    id: 'Pos_Fun_0003', 
    name: 'Complex Sentence', 
    input: 'vaessa vahinanisaa api gedhara innavaa.', 
    expected: 'වැස්ස වහිනනිසා අපි ගෙදර ඉන්නවා.'
  },

  { 
    id: 'Pos_Fun_0004', 
    name: 'Negative Form: Do not do that', 
    input: 'Ehema karanna epaa', 
    expected: 'එහෙම කරන්න එපා' 
  },
  { 
    id: 'Pos_Fun_0005', 
    name: 'Simple Sentence: Pronoun variation', 
    input: 'Eyaa mata udhavu karanavaa.', 
    expected: 'එයා මට උදවු කරනවා.' 
},
{ 
    id: 'Pos_Fun_0006', 
    name: 'Negative Future Tense', 
    input: 'api heta ennee naehae.', 
    expected: 'අපි හෙට එන්නේ නැහැ.' 
},
{ 
    id: 'Pos_Fun_0007', 
    name: 'Common Greeting', 
    input: 'Suba dhavasak!', 
    expected: 'සුබ දවසක්!' 
},
{ 
    id: 'Pos_Fun_0008', 
    name: 'Interrogative/Request', 
    input: 'udhavvak karanna puluvandha?', 
    expected: 'උදව්වක් කරන්න පුලුවන්ද?' 
},
{ 
    id: 'Pos_Fun_0009', 
    name: 'Convert a short response phrase', 
    input: 'Hari hodhayi', 
    expected: 'හරි හොදයි' 
},
 {
    id: 'Pos_Fun_0010',
    name: 'Convert a polite phrasing.',
    input: 'karuNaakaralaa mata meeka poddak explain karanna puLuvandha, mata eeka hariyata therenne naethi nisa?',
    expected: 'කරුණාකරලා මට මේක පොඩ්ඩක් explain කරන්න පුළුවන්ද, මට ඒක හරියට තෙරෙන්නෙ නැති නිස?'

  },

  {
    id: 'Pos_Fun_0011', 
    name: 'Informal phrasing', 
    input: 'ehema karapan', 
    expected: 'එහෙම කරපන්'

  },  
 { 
    id: 'Pos_Fun_0012', 
    name: 'Fequently used day-to-day phrase', 
    input: 'mata badagini', 
    expected: 'මට බඩගිනි' 
},  
{ 
    id: 'Pos_Fun_0013', 
    name: 'Multi-word expressions and frequent collocations ', 
    input: 'parissamin yanna', 
    expected: 'පරිස්සමින් යන්න' 
},  

{ 
    id: 'Pos_Fun_0014', 
    name: 'Joined words without spaces', 
    input: 'oyaamonavadhakarannee', 
    expected: 'ඔයාමොනවදකරන්නේ' 
},

{
    id: 'Pos_Fun_0015', 
    name: 'Repeated word expressions used for emphasis', 
    input: 'hodhayi hodhayi', 
    expected: 'හොදයි හොදයි'
}, 

{
    id: 'Pos_Fun_0016', 
    name: 'Tense variation-Past tense', 
    input: 'mama iiyee udhe panthiya ivara unaata passe yaluvoo thun dhenek ekka bus ekata naegala gamata giyaa.', 
    expected: 'මම ඊයේ උදෙ පන්තිය ඉවර උනාට පස්සෙ යලුවෝ තුන් දෙනෙක් එක්ක bus එකට නැගල ගමට ගියා.'
}, 

{
    id: 'Pos_Fun_0017', 
    name: 'Tense variation-Future tense', 
    input: 'Api heta cricket sellam karamu.', 
    expected: 'අපි හෙට cricket සෙල්ලම් කරමු.'
}, 

{
    id: 'Pos_Fun_0018', 
    name: 'Negation patterns', 
    input: 'Mata oka karanna baehae', 
    expected: 'මට ඔක කරන්න බැහැ'
},

{
    id: 'Pos_Fun_0019', 
    name: 'Pronoun Variation', 
    input: 'mama panthiyata yanavaa, saha passee mama yaaluvoo hamuvanna plan karanavaa.', 
    expected: 'මම පන්තියට යනවා, සහ පස්සේ මම යාලුවෝ හමුවන්න plan කරනවා.'
}, 

{
    id: 'Pos_Fun_0020', 
    name: 'Request forms with varying degrees of politeness', 
    input: 'karuNaakaralaa adha lecture note eka evanna puluvandha?', 
    expected: 'කරුණාකරලා අද lecture note එක එවන්න පුලුවන්ද?'
}, 

{
    id: 'Pos_Fun_0021', 
    name: 'English technical/brand terms embedded in Singlish ', 
    input: 'Mata oyaagee email  eka evanna puluvandha?', 
    expected: 'මට ඔයාගේ email  එක එවන්න පුලුවන්ද?'
},

{
    id: 'Pos_Fun_0022', 
    name: 'Sentences containing places and common English words that should remain as they are', 
    input: 'Mama vaedata ennee train eken', 
    expected: 'මම වැඩට එන්නේ train එකෙන්'
} ,

{
    id: 'Pos_Fun_0023', 
    name: 'Inputs containing punctuation marks ', 
    input: 'ohoma navathinu', 
    expected: 'ඔහොම නවතිනු'
}, 

{
    id: 'Pos_Fun_0024', 
    name: 'Slang and colloquial phrasing', 
    input: 'mata bag eka genna amathaka vunaa kiyahanko', 
    expected: 'මට bag එක ගෙන්න අමතක වුනා කියහන්කො'
}

];

for (const scenario of scenarios) {
  test(`${scenario.id}: ${scenario.name}`, async ({ page }) => {
    // Increase timeout for this specific long-running loop
    test.setTimeout(600000); 

    await page.goto('https://www.swifttranslator.com/');

    const inputArea = page.getByPlaceholder('Input Your Singlish Text Here.');
    
    // 1. Ensure the area is ready and clear it
    await inputArea.click();
    await inputArea.fill(''); 
    
    // 2. Type the input
    await inputArea.fill(scenario.input);

    // 3. Wait for the output div to exist and contain text
    const outputDiv = page.locator('div.whitespace-pre-wrap.overflow-y-auto').first();
    
    // Wait up to 15 seconds for the output to actually change from empty
    await expect(outputDiv).not.toBeEmpty({ timeout: 15000 });

    // Give the site a split second to finish the "real-time" translation
    await page.waitForTimeout(1000); 

    const actualOutput = await outputDiv.innerText();
    console.log(`TC ID: ${scenario.id} | Actual: ${actualOutput}`);

    await page.screenshot({ path: `screenshots/${scenario.id}.png` });

    if (scenario.id.startsWith('Pos')) {
        expect(actualOutput.trim()).toBe(scenario.expected);
    }
  });
}