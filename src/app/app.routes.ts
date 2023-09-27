import { Route } from "@angular/router";
import { WelcomeComponent } from "./components/welcome/welcome.component";
import {AppComponent} from "./app.component";
import {ElementComponent} from "./components/element/element.component";
import {ElementEnfantComponent} from "./components/elementEnfant/elementEnfant.component";
import {RegisterComponent} from "./components/login/register.component";
import {AuthenticateComponent} from "./components/login/authenticate.component";


const routeConfig: Route[] = [
  {
    path: '',
    component: WelcomeComponent,
    title: 'Welcome Page'
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Register Page'
  },
  {
    path: 'authenticate',
    component: AuthenticateComponent,
    title: 'Authenticate Page'
  },
  {
    path: 'element',
    component: ElementComponent,
    title: 'Element Page',
    children :[
      {
        path: 'enfant',
        component: ElementEnfantComponent
      }
    ]
  }

];

export default routeConfig;

