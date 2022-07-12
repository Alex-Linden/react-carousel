import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";


it("renders without crashing", function () {
  render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
});

it("matches snapshot", function () {
  const { container } = render(<Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);

  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("works when you click on the left arrow", function () {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );

  // move forward in the carousel
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();

  // move left in the carousel
  const leftArrow = container.querySelector(".bi-arrow-left-circle");
  fireEvent.click(leftArrow);

  // expect the first image to show, but not the second
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
});


it("left arrow not rendered with first photo, but rendered with second photo.",
  function () {
    const { container, debug } = render(
      <Carousel
        photos={TEST_IMAGES}
        title="images for testing"
      />
    );
    // expect the first image to show, but not the left arrow
    expect(
      container.querySelector('img[alt="testing image 1"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.bi-arrow-left-circle')
    ).not.toBeInTheDocument();

    // move forward in the carousel
    const rightArrow = container.querySelector(".bi-arrow-right-circle");
    fireEvent.click(rightArrow);

    // expect the second image to show, and left arrow to show
    expect(
      container.querySelector('img[alt="testing image 2"]')
    ).toBeInTheDocument();
    expect(
      container.querySelector('.bi-arrow-left-circle')
    ).toBeInTheDocument();
  });


it("right arrow not rendered with last photo.", function () {
  const { container, debug } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // expect the first image to show, and right arrow
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).toBeInTheDocument();

  // move forward in the carousel twice
  const rightArrow = container.querySelector(".bi-arrow-right-circle");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  // expect the last image to show, but not the right arrow
  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('.bi-arrow-right-circle')
  ).not.toBeInTheDocument();

});

//TODO: repeated strings as const