import { RouterModule, Router, Routes } from "@angular/router";
import { ProductsComponent } from "./products/products.component";
import { ProductDetailsComponent } from "./product-details/product-details.component";
import { AboutComponent } from "./pages/about/about.component";
import { ContactsComponent } from "./pages/contacts/contacts.component";
import { OrdersComponent } from "./orders/orders.component";
import { SettingComponent } from "./setting/setting.component";
import { NgModule } from "@angular/core";
import { CartHomeLayoutComponent } from "./behaviorSubject-cart-home-layout/cart-home-layout.component";

const routes:Routes = [
    {
        path:'products',
        component:ProductsComponent
    },
    {
        path:'productDetails/:id',
        component:ProductDetailsComponent
    },
    {
        path:'about',
        component:AboutComponent
    },
    {
        path:'orders',
        component:OrdersComponent
    },
    {
        path:'setting',
        component:SettingComponent
    },
    {
        path:'contacts',
        component:ContactsComponent
      },
    {
        path:'add-to-cart',
        component:CartHomeLayoutComponent
    }
];

@NgModule({
    imports:[RouterModule.forChild(routes)],
    exports:[RouterModule]
})

export class dashboardRoutingModule { }

