import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-toolbox-item',
  templateUrl: './toolbox-item.component.html',
  styleUrls: ['./toolbox-item.component.scss']
})
export class ToolboxItemComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  
  @Input()
  title = '';

}
