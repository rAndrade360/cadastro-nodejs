export default class UserRegisterDTO {
  protected name: string;
  protected email: string;
  protected githubUsername: string;
  protected value: number;
  protected password: string;

  constructor(name: string, email: string, githubUsername: string, value: number, password: string){
    this.name = name;
    this.email = email;
    this.githubUsername = githubUsername;
    this.value = value;
    this.password = password;
  }

  /**
   * name
   */
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

  public getPassword(){
    return this.password;
  }
}