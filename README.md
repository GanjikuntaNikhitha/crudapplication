# AngularCRUDApplication

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 12.2.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Angular Material
ng add @angular/material

## How to check angular material is added or not
angular.json file -> styles ->  "./node_modules/@angular/material/prebuilt-themes/indigo-pink.css"

## Install bootstrap, jquery, popper
npm install bootstrap jquery popper --save

## after installing bootstrap we can't directly used, need to do some changes as shown below.
angular.json->styles->"node_modules/bootstrap/dist/css/bootstrap.min.css"

<!-- important first query next bootsrap otherwise it wont work -->
angular.json->scripts->"node_modules/jquery/dist/jquery.min.js"
angular.json->scripts->"node_modules/bootstrap/dist/js/bootstrap.min.js"

## Create component
ng g c componentName.

## Creating component inside the other component.
ng g c Folder/componentName

## Service creation
ng g s serviceName
1) need to import the services in app.module.ts file
2) **need to add in providers array not in imports.
3) If we need to user that service in any of the component we have to inject that service in the component in the constructor area.(constructor(public empService : EmployeeService))

## Module creation
ng g m moduleName

1) Created material module because if we use bootstrap we have to imports all the features like cards, buttons etc...
2) Inorder to imports all in app.module.ts file the file gets lengthy and confusion.
3) Inorder to avoid this created the module (material module) import all the features and add the features in the array. 
4) And next import the module in app.module.ts file.

## Date picker 
1) If we need any fileds will just import from api in angular material.
2) But for date picker we have to import MatNativeDateModule as well otherwise will get error. 

## create new project in firebase console.
1) Click on project then click on web it will ask to add firebase to your web apps.
2) will get confuguration file. copy the firebaseConfig and paste in env file.
3) Click on 'Real time database' for create database for application then on create it will show two modes.
4) locked mode(when we use authentication) and test mode.

## In our angular application we have to install firebase application
npm install firebase @angular/fire --save
next import angular fire base module in app.module.ts file