import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MatDialogModule } from '@angular/material/dialog';
import { BooksComponent } from './books/books.component';
import { ShopbooksComponent } from './shopbooks/shopbooks.component';
import { PrimeComponent } from './prime/prime.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { LibraryComponent } from './library/library.component';
import { ShippingComponent } from './shipping/shipping.component';

const routes: Routes = [
  { path: '', redirectTo: '/sign-up', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'sign-up', component: SignUpComponent },
  { path: 'new-member', component: NewMemberComponent },
  { path: 'home', component: HomeComponent },
  {path:'header',component:HeaderComponent},
  { path: 'books', component: BooksComponent },
  {path:'library',component:LibraryComponent},
  {path:'cart',component:ShippingComponent},
  { path: 'shopbooks', component: ShopbooksComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [DiamondComponent,GoldComponent,PrimeComponent,SignInComponent,LibraryComponent,NewMemberComponent, PageNotFoundComponent, SignUpComponent, HomeComponent, BooksComponent,ShopbooksComponent,ShippingComponent]


