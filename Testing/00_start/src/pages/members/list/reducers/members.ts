import { Member } from "../../../../rest-api/model";
import { actionIds } from "../actions/actionIds";

export type MembersState = Member[];

export const membersReducer = (state = [], action): MembersState => {
  switch (action.type) {
    case actionIds.UPDATE_MEMBERS:
      return handleUpdateMembers(state, action.payload);
  }

  return state;
};

const handleUpdateMembers = (state: MembersState, members: Member[]): MembersState => members;
