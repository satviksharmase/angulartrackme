import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{AngularFireModule} from 'angularfire2';
import{AngularFireDatabaseModule} from 'angularfire2/database';
import{AngularFireAuthModule} from 'angularfire2/auth';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { environment } from 'src/environments/environment';
import { BsnavbarComponent } from './bsnavbar/bsnavbar.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { DevicesComponent } from './devices/devices.component';
import { RegisterDeviceComponent } from './register-device/register-device.component';
import { SendCommandComponent } from './send-command/send-command.component';
import { LoginComponent } from './login/login.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { FooterComponent } from './footer/footer.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    BsnavbarComponent,
    AboutMeComponent,
    DevicesComponent,
    RegisterDeviceComponent,
    SendCommandComponent,
    LoginComponent,
    SignUpComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    RouterModule.forRoot([
      {path:'',component : LoginComponent},
      {path:'about-me',component : AboutMeComponent},
      {path:'devices',component : DevicesComponent},
      {path:'register-device',component : RegisterDeviceComponent},
      {path:'send-command',component : SendCommandComponent},
      {path:'sign-up',component : SignUpComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
