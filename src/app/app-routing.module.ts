import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

const routes: Routes = [
  // {path: '',   redirectTo: '/index', pathMatch: 'full'},
  // {path: 'index', component: IndexComponent},
  // {path:'contact', component:ContactUsComponent, pathMatch:"full"},
  {path:'contactus', component:ContactUsComponent, pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
