import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { EducationComponent } from './education/education.component';
import { SkillsComponent } from './skills/skills.component';
import { ContactComponent } from './contact/contact.component';
const routes: Routes = [
  {path:'', component:HomeComponent},
  {
    path:'home', component:HomeComponent}
    ,
    { path: 'about', component: AboutComponent }
    ,
    { path: 'education', component: EducationComponent }
    ,
    { path: 'skills', component: SkillsComponent }
    ,
    { path: 'contact', component: ContactComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
