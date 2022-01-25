import { types } from "../../types/types";

describe("Testing the types object", () => {
  test("all the types must be declared", () => {
    expect(types).toEqual({
      login: "[Auth] Login",
      logout: "[Auth] Logout",
      uiSetError: "[UI] Set Error",
      uiRemoveError: "[UI] Remove Error",
      uiStartLoading: "[UI] Start loading",
      uiFinishLoading: "[UI] Finish loading",
      notesAddNew: "[Notes] Add New",
      notesActive: "[Notes] Set active note",
      notesGetAll: "[Notes] Get all notes",
      notesUpdate: "[Notes] Update note",
      notesFileUrl: "[Notes] Update img url",
      notesDelete: "[Notes] Delete note",
      notesLogoutCleanup: "[Notes] Logout Cleanup",
    });
  });
});
