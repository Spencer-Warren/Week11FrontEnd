export class registerUser {
  firstname: string;
  lastname: string;
  username: string;
  password: string;


  constructor(firstName: string, lastName: string, username: string, password: string) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.password = password;
  }
}

export class loginUser {
    userName: string;
    password: string;
    
    constructor(userName: string, password: string) {
        this.userName = userName;
        this.password = password;
    }
}

export class responseUser {
  firstname: string;
  lastname: string;
  username: string;
  userid: string;

  constructor(firstName: string, lastName: string, username: string, uid: string) {
    this.firstname = firstName;
    this.lastname = lastName;
    this.username = username;
    this.userid = uid;
  }
}
