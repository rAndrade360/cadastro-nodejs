import User from '../entities/User';

export default class UserResponseDTO {
  protected id: Number;
  protected name: String;
  protected email: String;
  protected githubUsername: String;
  protected value: Number;

  constructor(user: User){
    this.id = Number(user.id);
    this.name = user.name;
    this.email = user.email;
    this.githubUsername = user.githubUsername;
    this.value = user.value;
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