export default class User {
  public id: number | null;
  public name: string;
  public email: string;
  public githubUsername: string;
  public value: number;
  public password: string;
  public createdAt!: Date;
  public updatedAt!: Date;

  
  constructor( id: number | null, name: string, email: string, githubUsername: string, value: number, password: string){
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

  public toJSON(){
    return {
      id: this.id,
      name: this.name,
      email: this.email,
      githubUsername: this.githubUsername,
      value: this.value,
      password: this.password,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }
  }

  public setCreatedAt(date: Date) {
    this.createdAt = date;
  }

  public setUpdatedAt(date: Date) {
    this.updatedAt = date;
  }
  
}