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

  constructor(){
    //eğer localStorage içerisinde bir bilgi varsa bu başlangıçta model içerisine gönderilir
    this.model.items = this.getItemsFromLS();
  }
  
  message:string = "";
  inputText:string = "";
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
  addItem(){
    if(this.inputText != ""){
      let data = {description: this.inputText, action: false};
      this.model.items.push(data);

      //bir dizi oluşturarak içerisine data bilgilerini ekliyoruz
      //eğer bir dizi oluşturmadan localStorage içerisine gönderme yapsaydık sadece en son gönderilen veriyi saklayabilecektik
      //let items = [];
      //burada getItemsFromLS fonksiyonundan gelen bilgiyi items isimli objeye gönderdik
      let items = this.getItemsFromLS();
      items.push(data);
      //oluşturduğumuz items objesi localStorage içerisine gönderildi. LocalStorage içerisine gönderilen bilgi JSON türünde string olmalıdır.
      localStorage.setItem("items", JSON.stringify(items));
      this.inputText = "";
    }
    else {
      alert("Bir todo bilgisi giriniz.");
    }   
  }

  displayCount(){
    return this.model.items.filter(i => i.action).length;
  }

  getBtnClasses() {
    return {'disabled': this.inputText.length == 0, 'btn-secondary': this.inputText.length == 0, 'btn-primary': this.inputText.length > 0}
  }

  getItemsFromLS(){
    //todoItem türünde bir dizi tanımladık
    let items: TodoItem[] = [];
    //localStorage'den gelen bilgisi value değişkeni içerisine aldık
    let value = localStorage.getItem("items");
    //eğer value değişkeni null değilse items objesi içerisine JSON'a dönüştürülmüş value değerini gönderdik
    if(value != null){
      items = JSON.parse(value);
    }
    return items;
  }

  onActionChanged(item: TodoItem){
    let items = this.getItemsFromLS();
    localStorage.clear();

    //foreach ile birlikte getItemsFromLS'den gelen bilgileri tek tek geziyoruz. Description bilgileri karşılaştırarak eğer eleman ile item içerisindeki
    //değer uyuşuyorsa action işlemini item'den almasını sağlıyoruz
    items.forEach(i => {
      if(i.description == item.description) {
        i.action = item.action;
      }
    });
    localStorage.setItem("items", JSON.stringify(items));
  }
}
