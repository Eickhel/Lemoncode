import { Component, Input } from "@angular/core";
import { MemberEntity } from "../models/member.model";

@Component({
  selector: "app-member-row",
  templateUrl: "./member-row.component.html",
  styleUrls: ["./member-row.component.css"]
})
export class MemberRowComponent {
  @Input() member: MemberEntity;

  openURL() {
    window.open(this.member.html_url);
  }
}
