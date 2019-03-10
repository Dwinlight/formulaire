import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {Formulaire} from '../services/formulaire';
import {RouterModule, Routes} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AuthComponent } from './auth/auth.component';
import {AuthGuardService} from '../services/authGuardService';
import { DemandeComponent } from './demande/demande.component';
import { ViewComponent } from './view/view.component';
import {AuthService} from '../services/authService';
import { SingleDemandeComponent } from './single-demande/single-demande.component';
import {DemandeService} from '../services/demandeService';

const appRoutes: Routes = [
  { path: 'auth', component: AuthComponent },
  { path: 'demande', canActivate: [AuthGuardService], component: DemandeComponent },
  { path: '**', component: ViewComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    DemandeComponent,
    ViewComponent,
    SingleDemandeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [Formulaire, AuthGuardService, AuthService, DemandeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
