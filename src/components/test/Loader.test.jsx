import React from "react";
import { render } from "@testing-library/react";

import Loader from "../Loader";

describe("Loader Component", () => {
  it("should render loader component ", () => {
    const { container } = render(<Loader />);

    const loader = container.getElementsByClassName("loader__container");

    expect(loader.length).toBe(1);
  });
});
