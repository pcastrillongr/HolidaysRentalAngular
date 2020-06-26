import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';


@Component({
  selector: 'app-home-rentals',
  templateUrl: './home-rentals.component.html',
  styleUrls: ['./home-rentals.component.scss']
})
export class HomeRentalsComponent implements OnInit {

  showOwnerComponent: any ;
  constructor(public ownerService: OwnerService) {
   }

  ngOnInit(): void {
  }

  getShowOwnerValue(){
    this.showOwnerComponent = this.ownerService.addOwner;
    return  this.showOwnerComponent;
}
}
