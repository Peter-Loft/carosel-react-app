import React from "react";
import { render } from "@testing-library/react";

import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

/** Super basic smoke test */
it("renders without crashing", function () {
  // this is a low-value test, but better than nothing
  render(<Card caption="testing image 1" src="test1.com" />);
});

/** Snapshot test */
it("matches snapshot", function () {
  const { container } = render(<Card caption="testing image 1" src="test1.com" />);
  expect(container).toMatchSnapshot();
});