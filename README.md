# IvoryPay

Ivory Pay  Registration Automation
This repository contains the code and instructions for automating the sign up  process for ivoryPay web application using Cypress.

Prerequisites
Before proceeding, make sure you have the following installed on your system:

Node.js: You can download and install Node.js from the official website: https://nodejs.org/en/download/

Cypress: Install Cypress using npm by running the following command:


npm install cypress --save-dev

Configuration
Before running the automation script, you need to configure the application-specific settings.

install mailosaur using 

npm install -D cypress-mailosaur

the mailosaur helps retrive the confirmation email and verify it on the code.

You also need to install the fakers library using 

npm install @faker-js/faker --save-dev

this helps to generate random data on the code. 

Running the Automation
Open a terminal or command prompt.

Navigate to the project directory where the Cypress configuration (cypress.json) file is located.

Run Cypress by executing the following command:


npx cypress open
Cypress Test Runner will open. Click on the ivoryPay.cy.js file under the e2e folder in the Cypress Test Runner.

Cypress will launch Google Chrome and automatically navigate to the specified registration URL.

The automation script will fill in the registration form fields using the configuration you set in cypress.json and submit the form.

You can see the test execution in the Cypress Test Runner, and it will output the results and any potential errors or verification messages.
