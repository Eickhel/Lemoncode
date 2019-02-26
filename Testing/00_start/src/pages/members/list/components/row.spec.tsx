import { shallow } from "enzyme";
import * as React from "react";
import { Row } from "./row";

describe("pages/members/list/components/row tests", () => {
  it("should render as expected when passing required properties", () => {
    // Arrange
    const props = {
      member: {
        id: 14540103,
        name: "antonio06",
        avatarUrl: "https://avatars1.githubusercontent.com/u/14540103?v=4"
      }
    };

    // Act
    const component = shallow(<Row {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
