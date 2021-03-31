export default class User {
  public id: Number | null;
  public name: String;
  public email: String;
  public githubUsername: String;
  public value: Number;
  public password: String;
  public createdAt!: Date;
  public updatedAt!: Date;

  
  constructor( id: Number | null, name: String, email: String, githubUsername: String, value: Number, password: String){
    this.id = id;
    this.name = name;
    this.email = email;
    this.githubUsername = githubUsername;
    this.value = value;
    this.password = password;
  }

  public static getKeys(){
    return ["id", "name", "email", "githubUsername", "value", "password"];
  }

  public setCreatedAt(date: Date) {
    this.createdAt = date;
  }

  public setUpdatedAt(date: Date) {
    this.updatedAt = date;
  }
  
}