import { ProductDetailsComponent } from "./product-details/product-details.component";
import { CreateProductComponent } from "./create-product/create-product.component";
import { UpdateProductComponent } from "./update-product/update-product.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from "./product-list/product-list.component";
import { SupplierListComponent } from "./supplier-list/supplier-list.component";
import { CategoryListComponent } from "./category-list/category-list.component";

const routes: Routes = [
  { path: "", redirectTo: "product", pathMatch: "full" },
  { path: "products", component: ProductListComponent },
  { path: "suppliers", component: SupplierListComponent },
  { path: "categories", component: CategoryListComponent },
  { path: "add", component: CreateProductComponent },
  { path: "details", component: ProductDetailsComponent },
  {path: "update", component: UpdateProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}


/* You mean the world to me too, Eric. You're incredibly important to me (and to others). You matter to a lot of people
You're stunning, I kept thinking it at the arcade and when we were cuddling on the couch on Saturday and Sunday. */ 