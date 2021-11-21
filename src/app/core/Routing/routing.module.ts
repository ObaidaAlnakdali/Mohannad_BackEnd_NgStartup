import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { PersonalComponent } from '../../components/Personal/personal.component';
import { SkillsComponent } from '../../components/Skills/skills.component';
import { EducationsComponent } from '../../components/Educations/educations.component';
import { ExperienceComponent } from '../../components/Experience/experience.component';
import { TestimonialsComponent } from '../../components/Testimonials/testimonials.component';
import { Experience_itemComponent } from '../../components/Experience_item/experience_item.component';
import { BlugerComponent } from '../../components/Bluger/bluger.component';
import { PublisherComponent } from '../../components/Publisher/publisher.component';
import { SocialmediaComponent } from '../../components/Socialmedia/socialmedia.component';
import { GallaryComponent } from '../../components/Gallary/gallary.component';
import { Gallary_itemComponent } from '../../components/Gallary_item/gallary_item.component';
import { Friendly_sitesComponent } from '../../components/Friendly_sites/friendly_sites.component';
import { ChanceComponent } from '../../components/Chance/Chance.component';
import { CoursesComponent } from '../../components/Courses/Courses.component';
import { Bluger_categoryComponent } from '../../components/Bluger_category/bluger_category.component';
import { Consulting_servicesComponent } from '../../components/Consulting_services/consulting_services.component';
import { LicenseComponent } from '../../components/License/license.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'personal', component: PersonalComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'license', component: LicenseComponent},
    {path: 'consulting', component: Consulting_servicesComponent},
    {path: 'experience_item', component: Experience_itemComponent},
    {path: 'educations', component: EducationsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'bluger', component:BlugerComponent},
    {path: 'publisher', component: PublisherComponent},
    {path: 'sicialmedia', component: SocialmediaComponent},
    {path: 'chance', component: ChanceComponent},
    {path: 'courses', component: CoursesComponent},
    {path: 'gallary', component: GallaryComponent},
    {path: 'gallaryItem', component: Gallary_itemComponent},
    {path: 'BlugerCategory', component: Bluger_categoryComponent},
    {path: 'friendlySite', component: Friendly_sitesComponent},
    {path: 'menu', component: MenuComponent, canActivate: [CanActivateThisRoute]},
    {path: '**', component: LoginComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class RoutingModule {}
