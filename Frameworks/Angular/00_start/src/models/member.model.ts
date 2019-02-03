export interface ApiResponse {
  pagesCount: number;
  members: MemberEntity[];
}

export interface MemberEntity {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const createDefaultMemberEntity = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: ""
});

export const createDefaultApiResponse = () => ({
  pagesCount: 0,
  members: []
});
