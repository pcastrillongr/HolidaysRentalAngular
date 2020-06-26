import { Component, OnInit } from '@angular/core';
import { HomerentalsService } from 'src/app/shared/homerentals.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-home-rental',
  templateUrl: './home-rental.component.html',
  styleUrls: ['./home-rental.component.scss']
})
export class HomeRentalComponent implements OnInit {

  constructor(public service: HomerentalsService) { }

  ngOnInit(): void {

    this.resetForm();
  }
resetForm(form?: NgForm){

  if (form != null){
    form.resetForm();
  }
  this.service.formData = {
    HomeId : null,
    Owner: null,
    Name : '',
    Country: '',
    City: ''
  };
}

onSubmit(form: NgForm){

  this.insertHomeRental(form);
}
insertHomeRental(form: NgForm){

  this.service.postHomeRental(form.value)
                .subscribe(res => this.resetForm(form));
}

}
