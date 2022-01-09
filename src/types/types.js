export const types = {
  //Login actions
  login: "[Auth] Login",
  logout: "[Auth] Logout",

  //form error messages for ui actions
  uiSetError: "[UI] Set Error",
  uiRemoveError: "[UI] Remove Error",

  //disable login button after click actions
  uiStartLoading: "[UI] Start loading",
  uiFinishLoading: "[UI] Finish loading",

  //notes crud actions
  notesAddNew: "[Notes] Add New",
  notesActive: "[Notes] Set active note",
  notesGetAll: "[Notes] Get all notes",
  notesUpdate: "[Notes] Update note",
  notesFileUrl: "[Notes] Update img url",
  notesDelete: "[Notes] Delete note",
  notesLogoutCleanup: "[Notes] Logout Cleanup",
};
