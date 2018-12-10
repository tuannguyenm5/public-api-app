import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-detail-cats',
  templateUrl: './detail-cats.component.html',
  styleUrls: ['./detail-cats.component.scss']
})
export class DetailCatsComponent implements OnInit {
  task: string;
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.task = this.route.snapshot.params.id ? 'detail' : 'create-detail';
  }

}
