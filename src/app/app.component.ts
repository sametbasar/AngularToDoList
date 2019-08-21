import { Component } from '@angular/core'; 
import { Model,ToDoItems } from './model';
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  model = new Model();
  isDisplay= false;  
  
  getName() {
    return this.model.user;
  }
  getItems() {
    if(!this.isDisplay)
      return this.model.items.filter(item => !item.action);
    else 
      return this.model.items
  }
  addItem(value) {
    if(value != "") { 
        this.model.items.push(new ToDoItems(value,false)); 
    }
  }

}