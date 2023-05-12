import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import {  FormsModule, ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ErrorComponent } from './error/error.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';
import { routes } from './routes';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { TemplateFormsComponent } from './template-forms/template-forms.component';
import { AddProductComponent } from './add-product/add-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    ErrorComponent,
    ChildComponent,
    ReactiveFormComponent,
    ParentComponent,
    TemplateFormsComponent,
    AddProductComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
  FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
