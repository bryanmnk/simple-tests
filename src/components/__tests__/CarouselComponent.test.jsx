import React from "react";
import { fireEvent, render } from "@testing-library/react";

import CarouselComponent from "../CarouselComponent";

const reviewMocks = [
  {
    name: "Liru",
    position: "Teach Lead",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit.",
  },
  {
    name: "Bryan",
    position: "Senior Dev",
    comment:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus quam. Curabitur ultricies pretium orci nec finibus. Nullam congue quis tortor a tempus. Morbi rutrum, nunc at hendrerit gravida, tortor turpis molestie nibh, vel varius augue ante eu velit.",
  },
];

describe("CarouselComponent Component", () => {
  it("should render component", () => {
    const screen = render(<CarouselComponent reviews={reviewMocks} />);

    const liru = screen.queryByText("Liru");
    const position = screen.getByText(/Teach Lead/);

    expect(liru.textContent).toEqual(reviewMocks[0].name);
    expect(position).toBeInTheDocument();
  });

  it("should render component with testId", () => {
    const screen = render(<CarouselComponent reviews={reviewMocks} />);

    const bryan = screen.getByTestId("Bryan");
    const position = screen.getByTestId("Senior Dev");

    expect(bryan.textContent).toEqual(reviewMocks[1].name);
    expect(position).toBeInTheDocument();
  });

  it("should render component with counter", () => {
    const screen = render(<CarouselComponent reviews={reviewMocks} />);

    const counter = screen.getByTestId("counter");
    const counterByText = screen.getByText(/2/);

    expect(counter).toBeInTheDocument();
    expect(counterByText).toBeInTheDocument();
  });
});

// Note getByTestId vs queryByTestId
// https://testing-library.com/docs/queries/about/#types-of-queries

// describe("CarouselComponent Component", () => {
//   it("should not render component", () => {
//     const screen = render(<CarouselComponent reviews={[]} />);

//     const liru = screen.queryByText("Liru");

//     expect(liru).not.toBeInTheDocument();
//   });

//   it("should render component with testId", () => {
//     const screen = render(<CarouselComponent reviews={[]} />);

//     const bryan = screen.queryByTestId("Bryan");
//     const position = screen.queryByTestId("Senior Dev");

//     expect(bryan).toBe(null);
//     expect(position).not.toBeInTheDocument();
//   });

//   it("should render component with counter", () => {
//     const screen = render(<CarouselComponent reviews={[]} />);

//     const counter = screen.getByTestId("counter");
//     const counterByText = screen.getByText(/0/);

//     expect(counter).toBeInTheDocument();
//     expect(counterByText).toBeInTheDocument();
//   });
// });

// ===================================

// Refactor validation to show how to work with tests, validation should be reviews.length

// describe("CarouselComponent Component", () => {
//   it("should not render component", () => {
//     const screen = render(<CarouselComponent />);

//     const liru = screen.queryByText("Liru");

//     expect(liru).not.toBeInTheDocument();
//   });
// });

// ===================================

// describe("Onclick behavior", () => {
//   it("should change number after click  on button", () => {
//     const screen = render(<CarouselComponent reviews={reviewMocks} />);
//     const next = screen.getByTestId("next");
//     const prev = screen.getByTestId("prev");
//     const counter = screen.getByTestId("counter");

//     fireEvent.click(next);

//     expect(counter.textContent).toBe("2/2");

//     fireEvent.click(next);

//     expect(counter.textContent).toBe("2/2");

//     fireEvent.click(prev);

//     expect(counter.textContent).toBe("1/2");

//     fireEvent.click(prev);

//     expect(counter.textContent).toBe("1/2");
//   });
// });

// ===================================

// jest.mock("react-redux", () => ({
//   ...jest.requireActual("react-redux"),
//   useSelector: jest.fn(),
// }));

// describe("MySearchComponent", () => {
//   beforeEach(() => {
//     useSelector.mockImplementation((callback) => {
//       return callback(mockAppState);
//     });
//   });
//   afterEach(() => {
//     useSelector.mockClear();
//   });

//   it("should render a query", () => {
//     const { getByTestId } = render(<MySearchComponent />);
//     expect(getByTestId("query_testId").textContent).toEqual(
//       mockAppState.config.query
//     );
//   });
//   it("should not render if query is empty", () => {
//     const localMockState = {
//       ...mockAppState,
//       config: {
//         ...mockShoppingState.config,
//         query: "",
//       },
//     };
//     useSelector.mockImplementation((callback) => {
//       return callback(localState);
//     });
//     const { queryByTestId } = render(<MySearchComponent />);
//     expect(queryByTestId("query_testId")).toBeNull();
//   });
// });
