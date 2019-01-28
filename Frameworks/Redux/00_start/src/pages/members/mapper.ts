import * as apiModel from "../../api/model";
import * as vm from "./viewModel";

const mapMemberFromModelToVm = (member: apiModel.MemberEntity): vm.MemberEntity => ({
  id: member.id,
  avatar_url: member.avatar_url,
  login: member.login,
  html_url: member.html_url
});

export const mapMemberListFromModelToVm = (memberList: apiModel.MemberEntity[]): vm.MemberEntity[] =>
  memberList.map(mapMemberFromModelToVm);
