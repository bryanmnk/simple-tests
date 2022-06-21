import React from "react";
import { render } from "@testing-library/react";

import Loader from "../Loader";

describe("Loader Component", () => {
  it("should render loader component wrong way", () => {
    const { container } = render(<Loader />);

    const loader = container.getElementsByClassName("loader__container");

    expect(loader.length).toBe(1);
  });

  it("should render loader component rigth way", () => {
    const screen = render(<Loader />);

    expect(screen).not.toBe(null);
  });
});
