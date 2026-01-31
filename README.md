Prerequisites
Ensure the following are installed on your system:

Node.js (v18 or later recommended)
Git
A modern web browser (Chrome / Edge)

Installation

1) .Clone the repository

git clone https://github.com/Harshavidath12/playwright-testing.git

2) .Navigate to the project directory

cd playwright-project

3) Install dependencies

 npm install

4) Install Playwright browsers

npx playwright install

5) Running the Tests

To Run the positive.spec.js file : 

npx playwright test tests/positive.spec.js  

To Run the negative.spec.js file :

npx playwright test tests/negative.spec.js  

To Run the ui.spec.js file :

npx playwright test ui.spec.js --headed 


