# html-injector
Demo of injecting dynamic angular and ionic templates into a component with Ionic 4 starting with a blank template.  The idea for this and much of the code comes from [here](https://indepth.dev/here-is-what-you-need-to-know-about-dynamic-components-in-angular/)

* The demo works if the IonicModule is not in the list of imports for the dynamic component, line 25 of insert-template.directive.ts and the `*appInsertTemplate="templateIonic"` of line 20 of home.page.html is commented out.
* The demo fails when IonicModule is imported and we insert an `<ion-button>` tag into the HomePage component. Instead of `<ion-button>` getting injected, Ionic inserts another `<ion-app>` tag. 
## Does anyone know why and how to fix or work around this?
