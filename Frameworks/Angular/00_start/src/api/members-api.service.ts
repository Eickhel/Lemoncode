import { Injectable } from "@angular/core";
import { HttpClient, HttpResponse, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

import { MemberEntity, ApiResponse, createDefaultApiResponse } from "../models/member.model";
import parse from "parse-link-header";

@Injectable({
  providedIn: "root"
})
export class MembersApiService {
  constructor(private http: HttpClient) {}
  public pagesCount: number = 0;

  getAllMembers(organizationName: string, pageLimit: number, offset: number) {
    let gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?per_page=${pageLimit}`;
    let apiResponse: ApiResponse = createDefaultApiResponse();

    if (offset > 0) {
      gitHubMembersUrl = gitHubMembersUrl + `&page=${offset}`;
    }

    this.http.get<MemberEntity[]>(gitHubMembersUrl, { observe: "response" }).subscribe(response => {
      let linkHeader = parse(response.headers.get("Link"));

      if (linkHeader == undefined) {
        this.pagesCount = 0;
      } else {
        this.pagesCount = linkHeader["last"] == undefined ? this.pagesCount : linkHeader["last"].page;
      }

      apiResponse.pagesCount = this.pagesCount;
      apiResponse.members = response.body;
    });

    return apiResponse;
  }
}
