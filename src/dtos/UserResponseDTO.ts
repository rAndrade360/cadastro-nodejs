import User from '../entities/User';

export default class UserResponseDTO {
  protected id: number;
  protected name: string;
  protected email: string;
  protected githubUsername: string;
  protected value: number;

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