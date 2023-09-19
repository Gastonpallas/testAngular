import {bootstrapApplication} from "@angular/platform-browser";
import {AppComponent} from "./app/app.component";
import {provideRouter} from "@angular/router";
import routeConfig from "./app/app.routes";
import {WelcomeComponent} from "./app/components/welcome/welcome.component";

bootstrapApplication(AppComponent,
  {
    providers:[
      provideRouter(routeConfig)
    ]
  }
  ).catch(e => console.error(e));
