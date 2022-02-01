import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { startNewNote } from "../../actions/notes";

//config a store to test
const middlewares = [thunk];
const mockStore = configureStore(middlewares);

//state of the store to carry out the tests
const store = mockStore({
  auth: {
    uid: "testuid",
  },
});

describe("Tests in notes actions", () => {
  test("should create a new note throuch startNewNotes", async () => {
    //starNewNote action returns an async function
    //await store.dispatch(startNewNote());

    const actions = store.getActions();
  });
});
