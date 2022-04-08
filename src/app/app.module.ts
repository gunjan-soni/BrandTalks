import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CarouselModule } from 'primeng/carousel';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarouselComponent } from './carousel/carousel.component';
import { ButtonModule } from 'primeng/button';
import { ToastModule } from 'primeng/toast';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { IndexComponent } from './index/index.component';
import { RouterModule, Routes } from '@angular/router';
@NgModule({
  declarations: [
    AppComponent,
    CarouselComponent,
    TestimonialsComponent,
    ContactUsComponent,
    IndexComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule,
    CarouselModule,
    BrowserAnimationsModule,
    ToastModule,
    ButtonModule
  ],

  exports: [
    CarouselComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

}
