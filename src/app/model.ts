import { TodoItem } from "./todoitem";


//bir model oluşturmanın amacı oluşturulan modelleri farklı componentler içerisinde kullanabilmektir.

export class Model{
    name:string;
    items: TodoItem[];

    //model içinde bir class olduğu için yukarıdaki değişkenlerin boş olma ihtimaline karşın 
    //içerisinde bir constructor barındırmak zorundadır. Constructor içerisinde tanımlama işlemlerimizi gerçekleştiriyoruz.
    constructor(){
        this.name = "Berkant";
        this.items = [
            { description: "Kahvaltı", action: true},
            { description: "Spor", action: true },
            { description: "Yemek", action: false}
        ];
    }
}