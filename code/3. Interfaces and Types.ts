// Interfaces and Types

// Interfaces -> define the structure of your data 

interface User {
  name: String;
  id: Number;
  email?: String; // Optional
  readonly createdAt: Date;
}

const user: User = {
  name: "Aaditya",
  id: 1,
  createdAt: new Date(),
  email: "a@b.com"
}

// Types Allies Definition

type Product = {
  title: String;
  price: Number;
}

const p1: Product = {
  title: "Apple",
  price: 100
};