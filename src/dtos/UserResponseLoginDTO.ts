import User from '../entities/User';

export default class UserResponseLoginDTO {
  public id: number;
  public name: string;
  public email: string;
  public githubUsername: string;
  public value: number;
  public password: string;

  constructor(user: User){
    this.id = Number(user.id);
    this.name = user.name;
    this.email = user.email;
    this.githubUsername = user.githubUsername;
    this.value = user.value;
    this.password = user.password;
  }

  public getName() {
    return this.name;
  }

  public getEmail() {
    return this.email;
  }

  public getGithubUsername() {
    return this.githubUsername;
  }

  public getValue() {
    return this.value;
  }
}