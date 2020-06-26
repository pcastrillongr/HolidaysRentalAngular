import { Component, OnInit } from '@angular/core';
import { OwnerService } from '../shared/owner.service';
import { NgForm } from '@angular/forms';
import { Owner } from '../shared/owner.model';
import { ToastrService } from 'ngx-toastr';
import { HomerentalsService } from '../shared/homerentals.service';


@Component({
  selector: 'app-owner-list',
  templateUrl: './owner-list.component.html',
  styleUrls: ['./owner-list.component.scss']
})
export class OwnerListComponent implements OnInit {

  selectedOwner: Owner = null;
  constructor(public service: OwnerService,
              private toastr: ToastrService,
              public rentalsService: HomerentalsService) { }

  ngOnInit(): void {

    this.service.getAllOwners();
  }
  removeItem(formData: Owner){

    this.service.removeItem(formData).subscribe(
      success =>
            {
                    this.service.getAllOwners();
                    this.showSuccess();
            }
    );
  }

  onSelect(owner: Owner): void {

    this.selectedOwner = owner;
  }
  onUpdate(form: NgForm){

    this.updateOwner(form);
  }

  updateOwner(form: NgForm){

    this.service.updateOwner(form.value)
                  .subscribe(   success =>
                    {
                            this.service.getAllOwners();
                    }
                  );
  }
showSuccess(){
  this.toastr.show('Owner Deleted');
  }
  showAddOwner(){
    this.service.addOwner = true;
    console.log( this.service.addOwner);
  }

  getRentalsByOwner(formData: Owner){
     this.rentalsService.getHomeRentalByOwnerId(formData);
  }
}
