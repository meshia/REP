# Getting Started with Create React App
## This Project was Authored by: Meshi Avrahami

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
### Basic Specs

The Front-end of the website was built with React, v.17.0.2 with the build of “create-react-app” and structured as a single-page website.
There is no Back-end at the moment (the plan is to add some Node.js and Express server-side)
Currently, the data is inside the JSON-based React Library `react-i18next` which is a translation library that is used here to work as some kind of JSON-based database.
find out more on the `react-i18next` on the `react-i18next` website.

### Git
## The Git Repo:
For Cloning: `git clone https://meshiRep@bitbucket.org/meshirep/rep-website.git`
# instructions: 

if you don’t have Git installed, follow the instructions to install Git on the official Git website.

Open cmd, go to the wanted folder, and run the cloning line. don’t worry about a folder, the Git will create one.

Open a new branch to work on - `git checkout -b "your_branch_name"`

### Initialization, Run and Build
## download and install node and npm

# instructions:
Install according to the guild in the official npm website, it’s pretty much `npm install -g npm` but it depends on the system, it is better to follow the current instructions.

currently using v17.0.1 node.

## Initializing the Project Environment

This project is a react app, it needs to be initialized, dependencies installed, and afterward to run the (http://localhost:3000) (local environment to view the project on) with live updates for a smooth workflow.

fortunately, all of these are running automatically after initialization.

for the initialization, we have the package.json file, this file contains all the data and dependencies of the project. the npm install command knows how to install all the dependencies automatically. 

# instructions:

In your project folder, open cmd/terminal in your code editor.

run `npm install` in the root folder.

sometimes there would be a run `npm audit fix` if the installation wasn’t complete, if it happens, run  run `npm audit fix` and follow the instructions.

after all is installed, you can run `npm start` or `yarn start` for the project to start running the localhost (local environment to view the project on) and the watchers (which identify changes in the code, compile the Less into CSS, compile the JSX into HTML, minify, and update all of that for the localhost to display automatically) to start the work.

## Run the Project

After the project is initialized and installed, all you have to do to run the project and start working is run:

`npm start` or `yarn start` in the cmd\terminal and the browser will open up automatically on (http://localhost:3000) where you will see the project running.

## Build the Project

To deploy the project and upload it to production, you need all the files to be compiled, gather, and set up for deployment, this process is called build - it builds a build folder for you just to upload its content to the server. all you have to do is run:

`npm build` or `yarn build` in the cmd\terminal and the build folder will be created\updated automatically.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


