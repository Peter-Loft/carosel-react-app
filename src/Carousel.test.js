import { render, fireEvent } from "@testing-library/react";
import Carousel from "./Carousel";
import TEST_IMAGES from "./_testCommon.js";

/** Smoke Test */
it("works at all", function() {
  render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
});

/** Snapshot test */
it("matches snapshot", function () {
  const { container } = render(
  <Carousel
    photos={TEST_IMAGES}
    title="images for testing"
  />);
  expect(container).toMatchSnapshot();
});

it("works when you click on the right arrow", function() {
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
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  // expect the second image to show, but not the first
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).not.toBeInTheDocument();
  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
});

it("left arrow moves back one image", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  // move forward in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 2"]')
  ).toBeInTheDocument();
  // move backward in the carousel
  const leftArrow = container.querySelector(".fa-chevron-circle-left");
  fireEvent.click(leftArrow);

  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).not.toBeInTheDocument();
  
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();

});

it("left arrow dissapears on first item", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  expect(
    container.querySelector('img[alt="testing image 1"]')
  ).toBeInTheDocument();
  expect(
    container.querySelector('.fa-chevron-circle-left')
  ).not.toBeInTheDocument();

});

it("right arrow dissapears on last item", function() {
  const { container } = render(
    <Carousel
      photos={TEST_IMAGES}
      title="images for testing"
    />
  );
  
  // move forward twice in the carousel
  const rightArrow = container.querySelector(".fa-chevron-circle-right");
  fireEvent.click(rightArrow);
  fireEvent.click(rightArrow);

  expect(
    container.querySelector('img[alt="testing image 3"]')
  ).toBeInTheDocument();

  expect(
    container.querySelector('.fa-chevron-circle-right')
  ).not.toBeInTheDocument();

});
