class UserClass {
  userName: string;
  userEmail: string;
  userToken: string;

  constructor(name: string, email: string, token: string) {
    this.userName = name;
    this.userEmail = email;
    this.userToken = token;
  }
}

export default UserClass;
