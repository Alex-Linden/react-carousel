import React from "react";
import { render } from "@testing-library/react";
import Card from "./Card";
import TEST_IMAGES from "./_testCommon.js";

it("renders without crashing", function () {
  render(<Card
    caption="smoke and mirrors"
    src="test.com"
    currNum={1}
    totalNum={4} />);
});

it("matches snapshot", function () {
  const { container, debug } = render(<Card
    caption="smoke and mirrors"
    src="test.com"
    currNum={1}
    totalNum={4} />);

  expect(container).toMatchSnapshot();
});


// const img = container.querySelector("img");
//   debug(img);