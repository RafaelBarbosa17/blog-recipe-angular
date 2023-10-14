import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgIconsModule } from '@ng-icons/core';
import { 
  bootstrapFacebook, 
  bootstrapTwitter, 
  bootstrapInstagram, 
  bootstrapPersonCircle
} from '@ng-icons/bootstrap-icons';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { HeaderComponent } from './header/header.component';
import { SideBarComponent } from './side-bar/side-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HeaderComponent,
    SideBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapFacebook, bootstrapTwitter, bootstrapInstagram, bootstrapPersonCircle }),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
