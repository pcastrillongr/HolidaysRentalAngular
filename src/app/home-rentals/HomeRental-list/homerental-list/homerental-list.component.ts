import { Component, OnInit } from '@angular/core';
import { HomerentalsService } from 'src/app/shared/homerentals.service';

@Component({
  selector: 'app-homerental-list',
  templateUrl: './homerental-list.component.html',
  styleUrls: ['./homerental-list.component.scss']
})
export class HomerentalListComponent implements OnInit {

  constructor(public service: HomerentalsService) { }

  ngOnInit(): void {
  }

}
