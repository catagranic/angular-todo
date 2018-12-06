import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  list: any[] = [
    {
      id: 1,
      text: 'clean the house'
    },
    {
      id: 2,
      text: 'buy milk'
    }
  ];
  todo: string;

  createNewToDoItem(todo: string) {
    const newId = Math.max.apply(null, this.list.map(t => t.id)) + 1;
    this.list.push({ id: newId, text: todo });
  }

  onDeleteItem(todo: string) {
    this.list = this.list.filter(item => item !== todo);
  }

}
