import { expect } from "chai";
import { todos } from "../reducers";

describe("The todos reducer", () => {
  it("Adds a new todo when CREATE_TODO action is received", () => {
    const fakeTodo = { tex: "hello", isCompleted: false };
    const fakeAction = { type: "CREATE_TODO", payload: { todo: fakeTodo } };
    const orignalState = { isLoading: false, data: [] };
    const expected = { isLoading: false, data: [fakeTodo] };
    const actual = todos(orignalState, fakeAction);
    expect(actual).to.deep.equal(expected);
  });
});
