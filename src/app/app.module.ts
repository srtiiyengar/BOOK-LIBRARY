import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './header/header.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NewMemberComponent } from './new-member/new-member.component';
import { AngularFireModule } from '@angular/fire';
import {AngularFireDatabaseModule } from '@angular/fire/database';
import { environment } from 'src/environments/environment';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './services/firebase.service';
import { RouterModule,Routes } from '@angular/router';
import { BooksComponent } from './books/books.component';
import { MylibraryComponent } from './mylibrary/mylibrary.component';
import { ShopbooksComponent } from './shopbooks/shopbooks.component';
import { PrimeComponent } from './prime/prime.component';
import { GoldComponent } from './gold/gold.component';
import { DiamondComponent } from './diamond/diamond.component';
import { HttpClientModule } from '@angular/common/http';
import { BooksShowcaseComponent } from './books-showcase/books-showcase.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { LibraryComponent } from './library/library.component';
import { ShippingComponent } from './shipping/shipping.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    routingComponents,
    SignUpComponent,
    PageNotFoundComponent,
    NewMemberComponent,
    HomeComponent,
    BooksComponent,
    MylibraryComponent,
    ShopbooksComponent,
    PrimeComponent,
    GoldComponent,
    DiamondComponent,
    BooksShowcaseComponent,
    LibraryComponent,
    ShippingComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    RouterModule,
    BrowserAnimationsModule,
    MaterialModule
  ],
  entryComponents: [BooksShowcaseComponent],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule {  }
