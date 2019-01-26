import { MemberEntity, ApiResponse, createDefaultApiResponse } from "../model/member";
import parse from "parse-link-header";

class MemberAPI {
  public pagesCount: number = 0;

  getAllMembers(organizationName: string, pageLimit: number, offset: number): Promise<ApiResponse> {
    let gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?per_page=${pageLimit}`;

    if (offset > 0) {
      gitHubMembersUrl = gitHubMembersUrl + `&page=${offset / pageLimit + 1}`;
    }

    return fetch(gitHubMembersUrl, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer d16e8ad2333e3f7049734125761ce0424cda5d49"
      }
    })
      .then(response => this.checkStatus(response))
      .then(response => this.processPages(response))
      .then(response => this.parseJSON(response))
      .then(data => this.resolveMembers(data))
      .catch(() => {
        return Promise.resolve(createDefaultApiResponse());
      });
  }

  private checkStatus(response: Response): Promise<Response> {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    } else {
      let error = new Error(response.statusText);
      throw error;
    }
  }

  private processPages(response: Response): Promise<Response> {
    let linkHeader = parse(response.headers.get("Link"));
    if (linkHeader == undefined) {
      this.pagesCount = 0;
    } else {
      this.pagesCount = linkHeader["last"] == undefined ? this.pagesCount : linkHeader["last"].page;
    }

    return Promise.resolve(response);
  }

  private parseJSON(response: Response): any {
    return response.json();
  }

  private resolveMembers(data: any): Promise<ApiResponse> {
    const apiResponse: ApiResponse = createDefaultApiResponse();

    apiResponse.pagesCount = this.pagesCount;
    apiResponse.members = data.map((gitHubMember: MemberEntity) => {
      return { ...gitHubMember };
    });

    return Promise.resolve(apiResponse);
  }
}

export const memberAPI = new MemberAPI();
