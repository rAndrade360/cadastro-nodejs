export default class UserRegisterDTO {
  protected name: String;
  protected email: String;
  protected githubUsername: String;
  protected value: Number;
  protected password: String;

  constructor(name: String, email: String, githubUsername: String, value: Number, password: String){
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