<B>Pre-requisites to this solution include</B>

1. Download and install Node.js: https://nodejs.org/en/download/
2. Download and install Visual Studio Code: https://code.visualstudio.com/download
3. It is recommended to update your npm to the latest version.

<B>Project Specification</B>

1. Framework: Cypress.io (with Cypress Testing Library)
2. Node.JS version: v16.10.0
3. NPM version: 8.0.0
4. IDE used: VS Code 1.61.0

<B>Steps to run this project</B>

1. Once you have downloaded or cloned this repo, install the dependencies by running the following command in terminal (from inside your automation folder directory i.e. where package.json is located): <I><B>npm install</I></B>
2. Once all dependencies are installed successfully, you can run the spec files using your playground or through command line.
3. To run from the command line, go to the root folder and use the command: <I><B>npm run test</I></B> to run all spec files within the project. This will run the test in a headless mode and once the execution is completed you can generate the HTML report by running the following command from the terminal: <I><B>npm run final_report</I></B>
4. While developing the automated tests, you can also run the tests by using playground. From the command line use the command: <I><B>npx cypress open</I></B> and click the spec file to run.

<B>Generating reports in this project</B>

1. To generate the report, run the following command from the terminal <I><B>npm run final_report</I></B>
2. In the console where you run the above command, you will be shown the path where the HTML report is saved. Path is: <I><B>mochawesome-report/output.html</I></B>


<B>Pre-requisites to use and modify this framework</B>

1. Download or clone this repo.
2. Install dependencies by running the following command in terminal (from inside your app directory i.e. where package.json is located): <I><B>npm install</I></B>