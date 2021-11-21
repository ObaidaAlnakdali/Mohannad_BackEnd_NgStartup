import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { ImageUploadModule } from 'angular2-image-upload';
import { AgmCoreModule } from '@agm/core';
import {TranslateModule, TranslateLoader} from '@ngx-translate/core';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS , HttpClient } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { Proxy } from './core/services/proxy.service';
import { CommonService } from './core/services/common.service';
import { CanActivateThisRoute } from './core/Guard/RouterGuard';
import { MaterialModule } from './core/Material/material.module';
import { RoutingModule } from './core/Routing/routing.module';
import { DeleteConfirmationComponent } from './components/delete-confirmation/delete-confirmation.component';
import { MyHttpInterceptor } from './core/Interceptor/interceptor.service';
import { DirectionsMapDirective } from './core/Directives/DirectionsMapDirective';
import { MenuComponent } from './components/menu/menu.component';
import { SignalRService } from './core/Services/SignalRService';
import { SkillsComponent } from './components/Skills/skills.component';
import { EducationsComponent } from './components/Educations/educations.component';
import { ExperienceComponent } from './components/Experience/experience.component';
import { TestimonialsComponent } from './components/Testimonials/testimonials.component';
import { Experience_itemComponent } from './components/Experience_item/experience_item.component';
import { BlugerComponent } from './components/Bluger/bluger.component';
import { PublisherComponent } from './components/Publisher/publisher.component';
import { SocialmediaComponent } from './components/Socialmedia/socialmedia.component';
import { PersonalComponent } from './components/Personal/personal.component';
import { GallaryComponent } from './components/Gallary/gallary.component';
import { Gallary_itemComponent } from './components/Gallary_item/gallary_item.component';
import { Friendly_sitesComponent } from './components/Friendly_sites/friendly_sites.component';
import { ChanceComponent } from './components/Chance/Chance.component';
import { Bluger_categoryComponent } from './components/Bluger_category/bluger_category.component';
import { CoursesComponent } from './components/Courses/Courses.component';
import { Consulting_servicesComponent } from './components/Consulting_services/consulting_services.component';
import { LicenseComponent } from './components/License/license.component';


export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LogoutComponent,
    DeleteConfirmationComponent,
    DirectionsMapDirective,
    MenuComponent,
    PersonalComponent,
    SkillsComponent,
    EducationsComponent,
    ExperienceComponent,
    TestimonialsComponent,
    Experience_itemComponent,
    BlugerComponent,
    PublisherComponent,
    SocialmediaComponent,
    Gallary_itemComponent,
    GallaryComponent,
    Friendly_sitesComponent,
    ChanceComponent,
    Bluger_categoryComponent,
    CoursesComponent,
    LicenseComponent,
    Consulting_servicesComponent
  ],
  entryComponents: [
    DeleteConfirmationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    RoutingModule,
    MaterialModule,
    FlexLayoutModule,
    InfiniteScrollModule,
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCkBsM4-NKYM-ivEHOLrFJCxL00fhcQsMY'
    }),
    TranslateModule.forRoot({
      loader: {
          provide: TranslateLoader,
          useFactory: (createTranslateLoader),
          deps: [HttpClient]
      }
  })
  ],
  providers: [
            Proxy,
            CommonService,
            CanActivateThisRoute,
            {
              provide: HTTP_INTERCEPTORS,
              useClass: MyHttpInterceptor,
              multi: true
            },
            SignalRService
        ],
  bootstrap: [AppComponent]
})
export class AppModule { }
