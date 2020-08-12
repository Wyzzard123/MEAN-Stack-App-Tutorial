# README

Making MEAN stack app using this tutorial:
https://www.youtube.com/playlist?list=PLC3y8-rFHvwj200LLotCYum_9wmGeTJx9

## Notes
1. Install angular CLI:
    ``` 
   npm install -g @angular/cli 
   ```
1. Create new Angular app called ngApp with routing module:
   ``` 
   ng new ngApp --routing
   ```
1. Open application in browser with:
   ``` 
   cd ngApp
   ng serve -o
   ```
1. To connect to Express server:
   ``` 
   ng build
   ```
   This creates a "dist" folder which can be fed into the server.
1. While in ngApp, install Express server with:
   ``` 
   npm install --save express body-parser
   ```
   Express is the server. Body parser is the middleware to handle form data.
1. Create the server.js file in the root folder
1. Create a ./server/routes/api.js file
1. Run api server and see "api works" at http://localhost:3000/api with:
    ``` 
    node server
   ```
1. Install mongodb locally: https://www.mongodb.com/try/download/community
   
   See how to use and connect to Compass here: https://zellwk.com/blog/local-mongodb/

1. Create a user using CLI: https://stackoverflow.com/questions/46972695/see-setup-a-user-with-mongodb-compass

1. Add sample database entries (comma separated array of documents).

1. Install mongoose to access MongoDB data as JSON objects:
   ``` 
   npm install --save mongoose
   ``` 
1. While in ngApp directory, create angular home component with this (ng = angular, g = generate, c = component, home = name of our component):
    ``` 
   ng g c home 
   ```
1. Do the same for videoCenter component:
    ``` 
   ng g c videoCenter 
   ```
1. Install bootstrap to app:
   ``` 
   npm install --save bootstrap
   ```
1. Include path to bootstrap in angular.json (in older versions, this was called angular-cli.json):
   ``` 
   "styles": [
              "src/styles.css",
              "node_modules/bootstrap/dist/css/bootstrap.min.css"
            ],
   ```
   __NOTE__: No need for .. before node_modules as the folder is referenced from the ngApp folder.
1. Make sure to run ngbuild whenever a change is made to the angular app.
   ``` 
   ng build
   ```
1. Create videoDetail and videoList components:
    ``` 
   ng g c videoDetail 
   ng g c videoList 
   ```
1. Generate video class (g cl) in Angular with:
   ``` 
   ng g cl Video
   ```
   
1. Generate a video service to handle CRUD operations.
   ``` 
   ng g s video
   ```
1. Generate a pipe (p) to turn youtube urls into safe urls: 
   ``` 
   ng g p safe 
   ```