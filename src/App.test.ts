import {render, fireEvent} from "@testing-library/svelte";
import '@testing-library/jest-dom';
import App from "./App.svelte";

describe('App', () => {
  test("should render", () => {
    const app = render(App);

    expect(() => app.getByText("Hide Clock")).not.toThrow();
  });

  test("should hide clock", async () => {
    const app = render(App);
    const checkbox = app.getByText("Hide Clock");

    await fireEvent.click(checkbox);

    expect(checkbox).toHaveTextContent('Show Clock');
  });
});
