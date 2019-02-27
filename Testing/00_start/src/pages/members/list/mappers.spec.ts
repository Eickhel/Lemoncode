import * as model from "../../../rest-api/model";
import { mapMemberListModelToVM } from "./mappers";
import * as vm from "./viewModel";

describe("pages/members/list/mappers specs", () => {
  describe("mapMemberListModelToVM", () => {
    it("should return empty array when passing members equals undefined", () => {
      // Arrange
      const members: model.Member[] = undefined;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return empty array when passing members equals null", () => {
      // Arrange
      const members: model.Member[] = null;

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return empty array when passing members equals emtpy array", () => {
      // Arrange
      const members: model.Member[] = [];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      expect(result).toEqual([]);
    });

    it("should return array with one item when passing members equals array with one item", () => {
      // Arrange
      const members: model.Member[] = [
        {
          id: 14540103,
          login: "antonio06",
          avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        }
      ];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      const expectedResult: vm.Member[] = [
        {
          id: 14540103,
          name: "antonio06",
          avatarUrl: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        }
      ];
      expect(result).toEqual(expectedResult);
    });

    it("should return array with two items when passing members equals array with two items", () => {
      // Arrange
      const members: model.Member[] = [
        {
          id: 14540103,
          login: "antonio06",
          avatar_url: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        },
        {
          id: 1457912,
          login: "brauliodiez",
          avatar_url: "https://avatars1.githubusercontent.com/u/1457912?v=4"
        }
      ];

      // Act
      const result = mapMemberListModelToVM(members);

      // Assert
      const expectedResult: vm.Member[] = [
        {
          id: 14540103,
          name: "antonio06",
          avatarUrl: "https://avatars1.githubusercontent.com/u/14540103?v=4"
        },
        {
          id: 1457912,
          name: "brauliodiez",
          avatarUrl: "https://avatars1.githubusercontent.com/u/1457912?v=4"
        }
      ];
      expect(result).toEqual(expectedResult);
    });
  });
});
