import { shallow } from "enzyme";
import * as React from "react";
import { Body } from "./body";

describe("pages/members/list/components/body tests", () => {
  it("should render as expected when passing required properties", () => {
    // Arrange
    const props = {
      members: [
        {
          id: 14540103,
          name: "antonio06",
          avatarUrl: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        },
        {
          id: 1457912,
          name: "brauliodiez",
          avatarUrl: "https://avatars1.githubusercontent.com/u/1457912?v=4"
        },
        {
          id: 13205689,
          name: "crsanti",
          avatarUrl: "https://avatars1.githubusercontent.com/u/13205689?v=4"
        }
      ]
    };
    // Act
    const component = shallow(<Body {...props} />);

    // Assert
    expect(component).toMatchSnapshot();
  });
});
