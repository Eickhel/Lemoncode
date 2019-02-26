import { shallow } from "enzyme";
import * as React from "react";
import { Header } from "./header";

describe("pages/members/list/components/header tests", () => {
  it("should render as expected when is invoked", () => {
    // Arrange

    // Act
    const component = shallow(<Header />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
