import { types } from "../types/types";

//ui actions
export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
export const removeError = () => ({
  type: types.uiRemoveError,
});
