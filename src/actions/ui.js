import { types } from "../types/types";

//ui actions, all this are sync, so we can set the paylads directly
export const setError = (err) => ({
  type: types.uiSetError,
  payload: err,
});
export const removeError = () => ({
  type: types.uiRemoveError,
});

//ui actions to start and finish loading states when login button is clicked
export const startLoading = () => ({
  type: types.uiStartLoading,
  payload: true,
});
export const finishLoading = () => ({
  type: types.uiFinishLoading,
  payload: false,
});
