import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from '../../components/login/login.component';
import { LogoutComponent } from '../../components/logout/logout.component';
import { CanActivateThisRoute } from '../Guard/RouterGuard';
import { MenuComponent } from '../../components/menu/menu.component';
import { SkillsComponent } from '../../components/Skills/skills.component';
import { EducationsComponent } from '../../components/Educations/educations.component';
import { ExperienceComponent } from '../../components/Experience/experience.component';
import { TestimonialsComponent } from '../../components/Testimonials/testimonials.component';
import { Experience_itemComponent } from '../../components/Experience_item/experience_item.component';
import { BlugerComponent } from '../../components/Bluger/bluger.component';
import { PublisherComponent } from '../../components/Publisher/publisher.component';


export const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'logout', component: LogoutComponent},
    {path: 'skills', component: SkillsComponent},
    {path: 'experience', component: ExperienceComponent},
    {path: 'experience_item', component: Experience_itemComponent},
    {path: 'educations', component: EducationsComponent},
    {path: 'testimonials', component: TestimonialsComponent},
    {path: 'bluger', component:BlugerComponent},
    {path: 'publisher', component: PublisherComponent},
    {path: 'menu', component: MenuComponent, canActivate: [CanActivateThisRoute]},
    {path: '**', component: LoginComponent}
  ];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [ RouterModule]
})
export class RoutingModule {}
