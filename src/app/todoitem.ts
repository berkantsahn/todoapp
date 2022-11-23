// export class TodoItem {
//     description: string;
//     action: string;

//     constructor(description:string, action:string) {
//         this.description = description;
//         this.action = action
//     }
// }

//İki export class'da aynı işe yaramaktadır. Biri diğerinin alternatifidir.

// export class TodoItem {
//     constructor(public description:string, public action:string){
//         this.description = description;
//         this.action = action;
//     }
// }

//interface'nin bir constructor'i olmaz. Oluşturulacak objelerin şemaları interface içinde belirtilir.
export interface TodoItem {
    description:string;
    action:string;
}