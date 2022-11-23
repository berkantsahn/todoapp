import { Component } from '@angular/core';
import { Model } from '../model';
import { TodoItem } from '../todoitem';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  
  displayAll:boolean = true;

  constructor(){}
  
  message:string = "Merhaba";
  //private name:string = "Berkant"

  // items:any = [
  //   "item 1", "item 2", "item 3"
  // ];


  //model.ts içerisinde tanımlama gerçekleştirdiğimiz için altta bulunan tanımlamalara ihtiyacımız yoktur.
  // items:TodoItem[] = [
  //   todoitem.ts içinde oluşturulan interface için kullanılabilir.
  //   { description: "Kahvaltı", action: "Yapıldı" },
  //   { description: "Spor", action: "Yapıldı" },
  //   { description: "Yemek", action: "Yapılmadı" }

  //   todoitem.ts içinde constructor olan class için kullanılabilir.
  //   new TodoItem("Kahvaltı", "Yapıldı"),
  //   new TodoItem("Spor", "Yapıldı"),
  //   new TodoItem("Alışveriş", "Yapıldı"),
  //   new TodoItem("Temizlik", "Yapılmadı")
  // ];

  //modeli burada tanımladık. Her bir new dendiğinde bu modelden farklı referansta bir kopya oluşturulur.
  //bunun önüne geçmek için servis kullanmak gereklidir.
  model = new Model();

  getItems(){
    if(this.displayAll){
      return this.model.items;
    }
    else{
      return this.model.items.filter(item => item.action === false);
    }
    
  }

  getListName(){
    return this.model.name;
  }

  // addItem(txtItem:string) {
  //   console.log(txtItem);
  //   this.message = txtItem;
  // }

  //modele veri göndermek için aşağıdaki gibi bir fonksiyon oluşturduk
  addItem(value:string){
    if(value != ""){
      this.model.items.push({description: value, action: false});
    }
    else {
      alert("Bir todo bilgisi giriniz.");
    }   
  }
}
