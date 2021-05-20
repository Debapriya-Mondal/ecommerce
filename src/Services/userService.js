const users = [
  {
    id: 1,
    token: "1",
    name: "Debapriya Mondal",
    email: "debapriya@gmail.com",
    password: "12345678",
    isAdmin: true,
  },
  {
    id: 2,
    token: "2",
    name: "Goutam Das",
    email: "goutam@gmail.com",
    password: "12345678",
    isAdmin: true,
  },
  {
    id: 3,
    token: "3",
    name: "Manomoy Biswas",
    email: "manomoy@gmail.com",
    password: "12345678",
    isAdmin: false,
  },
];

export function login(email, password) {
  const user = users.find((u) => u.email === email && u.password === password);
  localStorage.setItem("token", user["token"]);
  window.location = "/";
}

export function getUser(token) {
  const user = users.find((u) => u.token === token);
  return new Promise((res, rej) => {
    res(user);
  });
}

export function logout() {
  localStorage.removeItem("token");
}
