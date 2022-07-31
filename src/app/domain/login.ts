export class Login{
  // Definicion de la Clase Ticket \\
  //Atributos:
  private id_user: number = 0;
  private direccion_de_mail: String = "";
  private password: String = "";
  private nombre: String = "";
  private apellido: String = "";
  private rol: String = "";

  //Constructor:
  constructor(email: String, password: String, role: String){
    this.id_user = 0;
    this.direccion_de_mail = email;
    this.password = password;
    this.nombre = "";
    this.apellido = "";
    this.rol = role;
  }

  //Metodos:
  public getEmail(): String {return this.direccion_de_mail;}
  public getPassword(): String {return this.password;}
  public getRole(): String {return this.rol;}
  public setEmail(email: String): void {this.direccion_de_mail = email;}
  public setPassword(password: String): void {this.password = password;}
  public setRole(role: String): void {this.rol = role;}
}
