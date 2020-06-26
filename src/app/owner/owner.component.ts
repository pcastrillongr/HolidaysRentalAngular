import { Component, OnInit } from '@angular/core';
import { OwnerService } from 'src/app/shared/owner.service';
import { NgForm } from '@angular/forms';
import { Owner } from '../shared/owner.model';
import { Toast, ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-owner',
  templateUrl: './owner.component.html',
  styleUrls: ['./owner.component.scss']
})
export class OwnerComponent implements OnInit {


  constructor(public service: OwnerService, private toastr: ToastrService) { }

  ngOnInit(): void {

    this.resetForm();
  }
resetForm(form?: NgForm){

  if (form != null){
    form.resetForm();
  }
  this.service.formData = {
    OwnerId: null,
    Name: '',
    LastName: '',
    PhoneNumber: null,
    Country: '',
    City: '',
    HomeRentals: null
  };
}

onSave(form: NgForm){

  this.insertOwner(form);
}
insertOwner(form: NgForm){

  this.service.postOwner(form.value)
                .subscribe(   success =>
                  {
                          this.service.addOwner = false;
                          this.toastr.show('User Added');
                          this.service.getAllOwners();

                  }
                );

}
getAllOwners(){

  this.service.getAllOwners();
}


}
