export class Ticket{
  // Definicion de la Clase Ticket \\
  //Atributos:
  // idCompra: String = "";          //ID ticket
  nombre: String = "";            //Nombre
  apellido: String = "";          //Apellido
  direccionDeMail: String = "";   //Mail
  telefono: String = "";          //Telefono
  metodoDePago: String = "";      //Metodo de Pago
  cantidadDeTickets: Number = 0;  //Cantidad de Tickets
  tipoDeTicket: String = "";      //Tipo de Ticket
  // pasesTotales: String = "";      //Pases Totales
  // montoTotal: Number = 0;         //Monto Total

  //Constructor:
  constructor(name: String, fname: String, email: String, phone: String, payment: String, quantity: Number, type: String){
    this.nombre = name;
    this.apellido = fname;
    this.direccionDeMail = email;
    this.telefono = phone;
    this.metodoDePago = payment;
    this.cantidadDeTickets = quantity;
    this.tipoDeTicket = type;
  }

  //Metodos:
  // public getIdCompra(): String {return this.idCompra;}
  public getNombre(): String {return this.nombre;}
  public getApellido(): String {return this.apellido;}
  public getDireccionDeMail(): String {return this.direccionDeMail;}
  public getTelefono(): String {return this.telefono;}
  public getMetodoDePago(): String {return this.metodoDePago;}
  public getCantidadDeTickets(): Number {return this.cantidadDeTickets;}
  public getTipoDeTicket(): String {return this.tipoDeTicket;}
  // public getPasesTotales(): String {return this.pasesTotales;}
  // public getMontoTotal(): Number {return this.montoTotal;}

  // public setIdCompra(id: String): void {this.idCompra = id;}
  public setNombre(name: String): void {this.nombre = name;}
  public setApellido(fname: String): void {this.apellido = fname;}
  public setDireccionDeMail(email: String): void {this.direccionDeMail = email;}
  public setTelefono(phone: String): void {this.telefono = phone;}
  public setMetodoDePago(payment: String): void {this.metodoDePago = payment;}
  public setCantidadDeTickets(quantity: Number): void {this.cantidadDeTickets = quantity;}
  public setTipoDeTicket(type: String): void {this.tipoDeTicket = type;}
  // public setPasesTotales(pases: String): void {this.pasesTotales = pases;}
  // public setMontoTotal(monto: Number): void {this.montoTotal = monto;}

//   toString(){
//     return `{\n
//       \tPurchase ID: ${this.idCompra},\n
//       \tName: ${this.nombre},\n
//       \tFirst Name: ${this.apellido},\n
//       \tEmail Adress: ${this.direccionDeMail},\n
//       \tTelephone: ${this.telefono},\n
//       \tPayment of Choise: ${this.metodoDePago},\n
//       \tNumber of tickets bought: ${this.cantidadDeTickets},\n
//       \tType of pass: ${this.tipoDeTicket},\n
//       // \tTotal ammount of purchase (USD): ${this.montoTotal},\n
//       \tTotal of passes: ${this.pasesTotales},\n
//     }`
//   }
}
