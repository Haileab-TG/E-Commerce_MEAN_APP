import { AddProductComponent } from "./add-product/add-product.component";
import { ErrorComponent } from "./error/error.component";
import { HomeComponent } from "./home/home.component";
import { ProductsComponent } from "./products/products.component";
import { SingleProductComponent } from "./single-product/single-product.component";

export const routes = [
    {
        path: "",
        component: HomeComponent
      },
      {
        path: "addProduct",
        component: AddProductComponent
      },
      {
        path:"products",
        component: ProductsComponent
      },
      {
        path:"product/:productId",
        component: SingleProductComponent
      },
      {
        path:"**",
        component: ErrorComponent
      }
]