import appReducer, { AppState, addItem } from "./";

describe("app reducer", () => {
  const initialState: AppState = {
    items: [],
  };
  it("should add item", () => {
    const newItem = {
      id: "1",
    };
    const finalState: AppState = {
      ...initialState,
      items: [newItem],
    };
    expect(appReducer(initialState, addItem(newItem))).toEqual(finalState);
  });
});
