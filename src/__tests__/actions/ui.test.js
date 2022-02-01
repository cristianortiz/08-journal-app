import {
  finishLoading,
  removeError,
  setError,
  startLoading,
} from "../../actions/ui";
import { types } from "../../types/types";

describe("Test in UI - actions", () => {
  test("all sync actions should work propertly returning an object ", () => {
    //setError action set an error msg as payload
    const setErrorAction = setError("Help!!!");
    expect(setErrorAction).toEqual({
      type: types.uiSetError,
      payload: "Help!!!",
    });

    //removeError action
    const removeErrorAction = removeError();
    expect(removeErrorAction).toEqual({
      type: types.uiRemoveError,
    });

    const startLoadingAction = startLoading();
    expect(startLoadingAction).toEqual({
      type: types.uiStartLoading,
      payload: true,
    });

    const finishLoadingAction = finishLoading();
    expect(finishLoadingAction).toEqual({
      type: types.uiFinishLoading,
      payload: false,
    });
  });
});
