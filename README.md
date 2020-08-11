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
1. Install mongodb locally:
   ``` 
   https://www.mongodb.com/try/download/community
   ```