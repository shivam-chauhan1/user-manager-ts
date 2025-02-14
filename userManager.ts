interface User {
  id: number;
  name: string;
  email: string;
  age?: number;
}

class UserManager {
  private users: User[] = [];

  addUser = (user: User): void => {
    this.users.push(user);
  };

  removeUser = (id: number): void => {
    this.users = this.users.filter((user) => user.id !== id);
  };

  getUser = (id: number): User | undefined => {
    return this.users.find((user) => user.id === id);
  };

  getAllUsers = (): User[] => this.users;

  getUserGreeting = (name: string = "Guest"): string => `Hello, ${name}!`;
}

const printUserDetails = ({ id, name, email, age }: User): void => {
  console.log(
    `ID: ${id}, Name: ${name}, Email: ${email}, Age: ${age ?? "N/A"}`
  );
};

// Example Usage
const userManager = new UserManager();
userManager.addUser({
  id: 1,
  name: "Shivam",
  email: "shivam@ttn.com",
  age: 21,
});
userManager.addUser({ id: 2, name: "Chauhan", email: "chauhan@example.com" });

console.log(userManager.getUserGreeting()); // Hello, Guest!
console.log(userManager.getUserGreeting("Shivam")); // Hello, Shivam!

const user = userManager.getUser(1);
if (user) printUserDetails(user);
