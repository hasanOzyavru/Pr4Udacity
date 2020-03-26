import {
  sumUp,
  handleSubmit,
  postData
} from "./formHandler";

test("if adds correctly", () => {
  expect(sumUp(3, 5)).toBe(8);
});

test("It should return true", async () => {
  expect(handleSubmit).toBeDefined();
});

test("It should be a function", async () => {
  expect(typeof handleSubmit).toBe("function");
});

// test("Test async post", async () => {
//   let res = await postData("http://localhost:3030/test", {});
//   expect(res.msg).toEqual("Hi");
// });