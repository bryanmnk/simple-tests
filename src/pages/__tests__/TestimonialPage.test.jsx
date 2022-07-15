import React from "react";
import { render } from "@testing-library/react";
import { useDispatch, useSelector } from "react-redux";

import TestimonialPage from "../TestimonialPage";
import { toastComponent } from "../../components/Toast";

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
  useDispatch: jest.fn(),
}));

jest.mock("../../components/Toast", () => ({
  toastComponent: jest.fn(),
}));

const mockAppState = {
  testimonial: {
    testimonial: {},
    error: "",
  },
};

const mockAppStateWithError = {
  testimonial: {
    testimonial: {},
    error: "Error",
  },
};

const mockAppStateInformation = {
  testimonial: {
    testimonial: {
      title: "Our customers love us",
      reviews: [
        {
          comment: "some",
          name: "Pete Zahut",
          position: "Chief @ Maniak",
        },
      ],
    },
    error: "",
  },
};

describe("Testimonial Page", () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  beforeEach(() => {
    // render(<TestimonialPage />);
  });

  it("should render TestimonialPage page", () => {
    const dispatch = jest.fn();
    useSelector.mockImplementation((callback) => {
      return callback(mockAppState);
    });

    useDispatch.mockReturnValue(dispatch);

    const { container } = render(<TestimonialPage />);
    const testimonial = container.getElementsByClassName("testimonalPage");

    expect(testimonial.length).toBe(0);
    expect(dispatch).toHaveBeenCalledTimes(1);
  });

  it("should render TestimonialPage page with information", () => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppStateInformation);
    });

    const { container } = render(<TestimonialPage />);

    const testimonial = container.getElementsByClassName("testimonalPage");

    expect(testimonial.length).toBe(1);
  });

  it("should render TestimonialPage page with error", () => {
    useSelector.mockImplementation((callback) => {
      return callback(mockAppStateWithError);
    });

    const { container } = render(<TestimonialPage />);

    const testimonial = container.getElementsByClassName("testimonalPage");

    expect(testimonial.length).toBe(0);
    expect(toastComponent).toHaveBeenCalledWith(
      mockAppStateWithError.testimonial.error
    );
    expect(toastComponent).toHaveBeenCalledTimes(1);
  });
});
