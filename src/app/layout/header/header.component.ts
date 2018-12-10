import { Component, OnInit } from '@angular/core';
import {ROUTER} from '../../shared/constants/router.const';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  links = ROUTER;
  constructor() { }

  ngOnInit() {
  }

}
