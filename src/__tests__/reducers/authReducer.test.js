import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe("Tests in authReducer", () => {
  test("should login a user with the returned uid and displayName", () => {
    //empty state
    const initState = {};
    //config the action to send to reducer
    const action = {
      type: types.login,
      payload: {
        uid: "abc",
        displayName: "Jon",
      },
    };
    //the state when the login action is called
    const state = authReducer(initState, action);
    //to compare two objects use Equal, in state displayName is renamed a username
    expect(state).toEqual({
      uid: "abc",
      username: "Jon",
    });
  });

  test("should logout an authenticated user", () => {
    //the state when a user is authendicated
    const initState = {
      uid: "abc5345234uio888",
      username: "Jon",
    };
    //config the action to send to reducer
    const action = {
      type: types.logout,
    };
    //the state when the logout action is called
    const state = authReducer(initState, action);
    //at logout the state must be and empty object again
    expect(state).toEqual({});
  });

  test("default action, any change must occurs in state", () => {
    //the state when a user is authendicated
    const initState = {
      uid: "abc5345234uio888",
      username: "Jon",
    };
    //config  and action with no type considered in authReducer
    const action = {
      type: "defaultAction",
    };
    //the state when the  action is called
    const state = authReducer(initState, action);
    //at no type action the state must remains with no changes
    expect(state).toEqual(initState);
  });
});
