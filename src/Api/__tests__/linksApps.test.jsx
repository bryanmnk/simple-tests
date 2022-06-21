import React from "react";
import { linksApi } from "../links/linksApi";

//jest.mock("../links/linksApi");

describe("Mock linksApi", () => {
  const menuMock = {
    menu: {
      items: [
        {
          text: "Testimonial",
          route: "page-1",
        },
        {
          text: "Configurator",
          route: "page-2",
        },
        {
          text: "Stories",
          route: "#",
        },
        {
          text: "About",
          route: "#",
        },
      ],
    },
  };

  const errorMock = {
    error: {
      status: 400,
    },
  };

  it("should render loader component ", () => {
    //linksApi.getLinks.mockImplementation(() => Promise.resolve(menuMock));

    linksApi.getLinks().then((response) => {
      expect(response).toEqual(menuMock);
    });
  });

  it("should render loader component ", () => {
    // linksApi.getLinks.mockImplementation(() => Promise.reject(errorMock));

    linksApi.getLinks().catch((error) => {
      expect(error).toEqual(errorMock);
    });
  });
});
