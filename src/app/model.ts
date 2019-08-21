export class Model {
    user;
    items;
    constructor() {
        this.user = "Çınar";
        this.items = [
            new ToDoItems("Spor", true),
            new ToDoItems("kahvaltı", false),            
            new ToDoItems("Kitap Okumak", false),
            new ToDoItems("Sinema", false)            
        ]
    }
}
export class ToDoItems {
    description;
    action;
    constructor(description, action) {
        this.description = description;
        this.action = action;
    }
}