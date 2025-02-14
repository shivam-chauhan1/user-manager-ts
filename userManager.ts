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

// Create an instance of UserManager
const userManager = new UserManager();

// Add users
userManager.addUser({
  id: 1,
  name: "Shivam Chauhan",
  email: "shivam@ttn.com",
  age: 21,
});
userManager.addUser({ id: 2, name: "Abhinav Singh", email: "abhinav@ttn.com" });
userManager.addUser({
  id: 3,
  name: "Deepak Yadav",
  email: "deepak@ttn.com",
  age: 25,
});

console.log("All Users:");
console.log(userManager.getAllUsers()); // Displays all users

// Get and print a user by ID
const user = userManager.getUser(1);
if (user) {
  console.log("\nUser Details:");
  printUserDetails(user);
}

// Remove a user by ID
console.log("\nRemoving User with ID 3...");
userManager.removeUser(3);
console.log("Updated Users List:");
console.log(userManager.getAllUsers()); // Deepak Yadav should be removed

// Test getUserGreeting method with and without parameters
console.log("\nGreeting Examples:");
console.log(userManager.getUserGreeting()); // "Hello, Guest!"
console.log(userManager.getUserGreeting("Shivam")); // "Hello, Shivam!"
