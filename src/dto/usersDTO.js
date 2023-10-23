//DTO para el back - esto viene del req.body
export class UsersDTO {
  constructor(user) {
    this.fullName = `${user.name} ${user.lastName}`;
    this.email = user.email;
    this.age = user.age;
    this.role = user.role;
  }
}
//DTO para el front
export class Users {
  constructor(user) {
    const [name, lastName] = user?.fullName.split(" ");
    this.name = name;
    this.lastName = lastName;
  }
}
