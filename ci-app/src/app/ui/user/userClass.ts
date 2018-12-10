class UserClass {
  private userName: string;
  private userEmail: string;
  private userToken: string;

  constructor(name: string, email: string, token: string) {
    this.userName = name;
    this.userEmail = email;
    this.userToken = token;
  }

  getName(): string {
    return this.userName;
  }
  getEmail(): string {
    return this.userEmail;
  }
  getToken(): string {
    return this.userToken;
  }
  setName(name: string): void {
    this.userName = name;
  }
  setEmail(email: string): void {
    this.userEmail = email;
  }
  setToken(token: string): void {
    this.userToken = token;
  }
}

export default UserClass;
