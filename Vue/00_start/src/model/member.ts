export interface Member {
  id: number;
  login: string;
  avatar_url: string;
  html_url: string;
}

export const createDefaultMember = () => ({
  id: -1,
  login: "",
  avatar_url: "",
  html_url: ""
});
