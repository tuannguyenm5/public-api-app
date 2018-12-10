import { Component, OnInit } from '@angular/core';
import {ROUTER} from '../../shared/constants/router.const';

@Component({
  selector: 'app-list-cats',
  templateUrl: './list-cats.component.html',
  styleUrls: ['./list-cats.component.scss']
})
export class ListCatsComponent implements OnInit {
  links = ROUTER;
  constructor() { }

  ngOnInit() {
  }

}
