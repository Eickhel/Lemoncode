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

  getAllMembers(organizationName: string, pageLimit: number, offset: number) {
    let gitHubMembersUrl: string = `https://api.github.com/orgs/${organizationName}/members?per_page=${pageLimit}`;
    let apiResponse: ApiResponse = createDefaultApiResponse();

    if (offset > 0) {
      gitHubMembersUrl = gitHubMembersUrl + `&page=${offset}`;
    }

    this.http.get<MemberEntity[]>(gitHubMembersUrl, { observe: "response" }).subscribe(response => {
      let linkHeader = parse(response.headers.get("Link"));

      if (linkHeader == undefined) {
        apiResponse.pagesCount = 0;
      } else {
        apiResponse.pagesCount = linkHeader["last"] == undefined ? apiResponse.pagesCount : linkHeader["last"].page;
      }

      apiResponse.members = response.body;
    });

    return apiResponse;
  }
}
