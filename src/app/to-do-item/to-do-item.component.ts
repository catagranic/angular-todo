import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-to-do-item',
  templateUrl: './to-do-item.component.html',
  styleUrls: ['./to-do-item.component.css']
})
export class ToDoItemComponent implements OnInit {
  @Input() listComp: any;
  @Output() onDeleteItem = new EventEmitter<{todoItem: string}>();

  constructor() { }

  ngOnInit() {
  }

  deleteItem(todo) {
    this.onDeleteItem.emit(todo)
  }

}
