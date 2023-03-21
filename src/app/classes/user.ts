export class registerUser {
  firstName: string;
  lastName: string;
  username: string;
  password: string;


  constructor(firstName: string, lastName: string, username: string, password: string) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.username = username;
    this.password = password;
  }
}

export class loginUser {
    username: string;
    password: string;
    
    constructor(username: string, password: string) {
        this.username = username;
        this.password = password;
    }
}


