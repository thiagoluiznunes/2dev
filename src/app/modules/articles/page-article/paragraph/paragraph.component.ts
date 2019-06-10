import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-paragraph',
  templateUrl: './paragraph.component.html',
  styleUrls: ['./paragraph.component.css']
})
export class ParagraphComponent implements OnInit {

  @Input() data: { type: string, data: string };

  constructor() { }

  ngOnInit() {
    console.log(this.data);
  }

}
