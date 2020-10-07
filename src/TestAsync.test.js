import "@testing-library/jest-dom/extend-expect";

import React from "react";
import {
  render,
  cleanup,
  fireEvent,
  waitForElement,
} from "@testing-library/react";
import TestAsync from "./TestAsync";

afterEach(cleanup);

it("0.5s뒤에 카운터가 증가하는지?", async () => {
  const { getByTestId, getByText } = render(<TestAsync />);

  fireEvent.click(getByTestId("button-up"));
  const counter = await waitForElement(() => getByText("1"));
  expect(counter).toHaveTextContent("1");
});
