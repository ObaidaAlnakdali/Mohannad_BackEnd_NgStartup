import { Component, OnInit } from "@angular/core";
import { CommonService } from "../../core/services/common.service";
import { setTestabilityGetter } from "@angular/core/src/testability/testability";
import { Router } from "@angular/router";
import {
  Params_Authenticate,
  Proxy,
  User,
} from "../../core/services/proxy.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  loading = false;
  model: any = {};
  constructor(
    private proxy: Proxy,
    private CmSvc: CommonService,
    private router: Router,
    private translate: TranslateService
  ) {
    this.model = {};
    this.model.UserName = "";
    this.model.Password = "";
    }

  ngOnInit() {}

  login() {
    //this.loading = true;
    const p = new Params_Authenticate();
    p.UserName = this.model.UserName;
    p.Password = this.model.Password;
    this.proxy.Authenticate(p).subscribe((data : User)=>{
      if ((data.Ticket == null) || (data.Ticket == ''))
      {
        alert("Unvalid User Name / Password");
      }
      else
      {
        this.CmSvc.ticket = data.Ticket ;
        this.CmSvc.Is_Logged_In.next(true);
        this.router.navigate(["/menu"]);
      }
    })
  }
}
