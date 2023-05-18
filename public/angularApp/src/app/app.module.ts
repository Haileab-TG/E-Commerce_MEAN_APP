import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ProductsComponent } from './products/products.component';
import { SingleProductComponent } from './single-product/single-product.component';
import { ErrorComponent } from './error/error.component';
import { routes } from './routes';
import { AddProductComponent } from './add-product/add-product.component';
import { UpdateProductComponent } from './update-product/update-product.component';


@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HeaderComponent,
    HomeComponent,
    ProductsComponent,
    SingleProductComponent,
    ErrorComponent,
    AddProductComponent,
    UpdateProductComponent,

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
