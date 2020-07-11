import React from "react";
import { render } from "@testing-library/react";
import Episodes from "./Episodes";

test("test to render", () => {
  render(<Episodes episodes={[]} />);
});

test("Renders episodes without props, and then with props", () => {
  const mockData = {
    id: "123",
    image: { medium: "medium_image" },
    name: "name",
    season: 3,
    episode: 2,
    description: "<p>Description</p>",
    runtime: 20,
  };

  const { queryAllByText, rerender } = render(<Episodes episodes={[]} />);
  expect(queryAllByText(/season/i) === null);
  rerender(<Episodes episodes={[mockData]} />);
  expect(queryAllByText(/name/i)).toHaveLength(1);
});

test("Shows a list of episodes rerendered with new data", () => {
  const { queryAllByTestId, rerender, queryByTestId } = render(
    <Episodes error="" episodes={[]} />
  );
  expect(queryAllByTestId("episode")).toStrictEqual([]);
  expect(queryAllByTestId("episode")).toHaveLength(0);
});
