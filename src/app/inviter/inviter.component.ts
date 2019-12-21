import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-inviter",
  templateUrl: "./inviter.component.html",
  styleUrls: ["./inviter.component.scss"]
})
export class InviterComponent implements OnInit {
  title = "Mach";

  users = [1, 2, 3, 4, 5];

  showErrors = false;
  constructor() {}

  ngOnInit() {}
}
