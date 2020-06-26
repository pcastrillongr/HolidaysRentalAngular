import { Injectable } from '@angular/core';
import { Owner } from './owner.model';
import {HttpClient, HttpParams} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OwnerService {

   formData: Owner;
   listOwners: Owner[];
   addOwner: any = false;
   readonly rootUrl = 'https://localhost:44324/api';
   
  constructor(private http: HttpClient) { }

  postOwner(formData: Owner){

    return this.http.post(this.rootUrl + '/Owner', formData);
  }
  getAllOwners(){
    return this.http.get(this.rootUrl + '/Owners')
                      .toPromise().
                        then(res => this.listOwners = res as Owner[]);
  }
  removeItem(formData: Owner){

    return this.http.delete(this.rootUrl + '/Owners/' + formData.OwnerId);
  }
  updateOwner(formData: Owner){

    return this.http.put(this.rootUrl + '/Owners/' + formData.OwnerId, formData );
  }
}
