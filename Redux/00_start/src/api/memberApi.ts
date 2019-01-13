import { MemberEntity } from "./model";

interface Props {
  organization: string;
}

const baseRoot = "https://api.github.com/orgs/";

export const fetchMemberList = (organization: string): Promise<MemberEntity[]> => {
  const requestURL = `${baseRoot}${organization}/members`;

  return fetch(requestURL)
    .then(checkStatus)
    .then(parseJSON)
    .then(resolveMembers)
    .catch(returnEmpty);
};

const checkStatus = (response: Response): Response => {
  if (response.status >= 200 && response.status < 300) {
    return response;
  } else {
    let error = new Error(response.statusText);
    throw error;
  }
};

const parseJSON = (response: Response): any => {
  return response.json();
};

const resolveMembers = (data: any): MemberEntity[] => {
  const members = data.map(
    ({ id, login, avatar_url, html_url }) => ({ id, login, avatar_url, html_url } as MemberEntity)
  );

  return members;
};

const returnEmpty = (data: any): MemberEntity[] => {
  return [];
};
