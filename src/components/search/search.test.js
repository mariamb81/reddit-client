import SearchBar from "./SearchBar";
// https://reactjs.org/docs/testing-recipes.html
import { render, unmountComponentAtNode } from "react-dom";
import {  act } from "react-dom/test-utils";
let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

test("renders Search bar", () => {
    act(() => {
        render(<SearchBar />, container);
      });
    expect(container.textContent).toBe("search");
});
test("user can type in search bar", () => {});
test("user can submit searchQuery", () => {});
