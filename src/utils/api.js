import { users } from "./mock-data";

export const getUsers = () => {
  console.log("get Users");
  return new Promise((resolve) => resolve([...users]));
};
export const getUser = (id) => {
  const user = users.find(user => user.id == id);
  return new Promise((resolve) => resolve(user));
};
