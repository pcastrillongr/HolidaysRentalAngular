import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { AppComponent } from './app.component';
import { HomeRentalsComponent } from './home-rentals/home-rentals.component';
import { HomeRentalComponent } from './home-rentals/HomeRental/home-rental/home-rental.component';
import { HomerentalListComponent } from './home-rentals/HomeRental-list/homerental-list/homerental-list.component';
import { HomerentalsService } from './shared/homerentals.service';
import { OwnerComponent } from './owner/owner.component';
import { OwnerListComponent } from './owner-list/owner-list.component';
import { OwnerService } from './shared/owner.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeRentalsComponent,
    HomeRentalComponent,
    HomerentalListComponent,
    OwnerComponent,
    OwnerListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [HomerentalsService,
              OwnerService,
              OwnerListComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
