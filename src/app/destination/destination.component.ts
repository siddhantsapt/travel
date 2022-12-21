import { Component, OnInit } from '@angular/core';
import { destination } from '../user';
import { all_destination } from '../user';

@Component({
  selector: 'app-destination',
  templateUrl: './destination.component.html',
  styleUrls: ['./destination.component.css']
})
export class DestinationComponent implements OnInit {

  constructor() { }

  all_destinations=[...all_destination];

  ngOnInit(): void {
  }

}
