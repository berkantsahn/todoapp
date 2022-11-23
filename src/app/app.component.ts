import { Component } from '@angular/core';

@Component({
  selector: 'app', //app-root uygulama içerisinde çağırıldığında bu component çağırılacak. 
  //Eğer selector başına . konursa bunu bir elementin class'ı olarak kullanabiliriz. Örneğin; selector: '.app-root'
  //Eğer selector başına # konursa bunu bir elementin id'si olarak kullanabliriz. Örneğin; selector: '#app.root'
  templateUrl: './app.component.html', //component çağırıldığında ise templateUrl içerisinde belirtilen html içerikleri çağırılmış olacak.
  styleUrls: ['./app.component.css'] //burada ise yukarıdaki html dosyasında kullanılacak css kodları belirlenebilir.
})

//Yukarıdaki component'e diğer dosyalardan ulaşabilmek için mutlaka bir export class tanımlamalıyız. Burada tanımladığımız export class'ı diğer dosyalara import ederek
//Componenti kullanabiliriz.
export class AppComponent {
  title:string = 'todo app';

  todoItem:any = {
    description: "kahvaltı",
    action: true
  }

  getTitle(){
    return this.title;
  }
}
