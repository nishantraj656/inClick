import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';

import { RouterModule, Routes } from '@angular/router';
import { ImageSliderComponent } from './image-slider/image-slider.component';
import { ProductComponent } from './product/product.component';
import { UpComingExamComponent } from './up-coming-exam/up-coming-exam.component';
import { TestMainComponent } from './test-main/test-main.component';
import { WebsiteComponent } from './website/website.component';
import { WebsiteHomeComponent } from './website-home/website-home.component';
const appRoutes = [
    {path:'test',component:TestMainComponent },
    {path:'',component:WebsiteComponent,
      children:[{path:'', component:WebsiteHomeComponent }
                // {path:'', component:WebsiteHomeComponent }
                ]
    },

];

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    ImageSliderComponent,
    ProductComponent,
    UpComingExamComponent,
    TestMainComponent,
    WebsiteComponent,
    WebsiteHomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),    
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot() // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
