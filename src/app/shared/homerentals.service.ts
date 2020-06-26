import { Injectable } from '@angular/core';
import { HomeRental } from './home-rental.model';
import {HttpClient} from '@angular/common/http';
import { Owner } from './owner.model';
import { OwnerService } from './owner.service';

@Injectable({
  providedIn: 'root'
})
export class HomerentalsService {
  
  formData: HomeRental;
  listRentals: HomeRental[];
  readonly rootUrl = 'https://localhost:44324/api';
  constructor(private http: HttpClient) { }

  postHomeRental(formData: HomeRental){

    return this.http.post(this.rootUrl + '/HomeRentals', formData);
  }
  getHomeRentalByOwnerId(formData: Owner){
      
          return this.http.get(this.rootUrl + '/HomeRentals/' + formData.OwnerId)
                      .toPromise().
                        then(res => this.listRentals = res as HomeRental[]);  }
}
