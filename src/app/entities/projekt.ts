
export  class item {
 public id: number ;
 public name: string;
 public kunde: string;
 public holzart: string;
 public fraechter:string;
 public schaetzmeter:number;
 public preis:number;

 constructor(id:number, name:string,kunde:string,holzart:string,
  fraechter:string, schaetzmeter:number, preis:number){
    this.id = id;
    this.name = name;
    this.kunde = kunde;
    this.holzart = holzart;
    this.fraechter = fraechter;
    this.schaetzmeter= schaetzmeter;
    this.preis = preis;

  }
}

