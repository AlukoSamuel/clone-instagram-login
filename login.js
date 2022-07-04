"use script";

const account1 = {
  phoneNumber: 09063779896,
  username: "alukosamuel",
  email: "alukoolakunle4@gmail.com",
  password: "123",
};

const account2 = {
  phoneNumber: 08051320004,
  username: "alukomary",
  email: "alukomary@gmail.com",
  password: "alukomary",
};

const accounts = [account1, account2];

const btnLogin = document.querySelector(".login");

const inputLoginUsername = document.querySelector(".login-input-username");
const inputLoginPassword = document.querySelector(".login-input-password");

let currentAccount;

// btnLogin.addEventListener("click", (e) => {
//   e.preventDefault();

//   currentAccount = accounts.find((acc) => {
//     acc.username === inputLoginUsername;
//     console.log("username is correct");
//   });
// })