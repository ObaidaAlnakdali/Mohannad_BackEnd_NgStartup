import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { CommonService } from "./common.service";
@Injectable()
export class Proxy {
  APIBaseUrl = "";
  url = "";
  constructor(public api: HttpClient, private common: CommonService) {
    this.APIBaseUrl = common.APIUrl;
  }
  Get_Skills_By_OWNER_ID(
    i_Params_Get_Skills_By_OWNER_ID: Params_Get_Skills_By_OWNER_ID
  ): Observable<Skills[]> {
    this.url =
      this.APIBaseUrl + "/Get_Skills_By_OWNER_ID?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Skills_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Skills_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Skills_By_Where(
    i_Params_Get_Skills_By_Where: Params_Get_Skills_By_Where
  ): Observable<Skills[]> {
    this.url =
      this.APIBaseUrl + "/Get_Skills_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Skills_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Skills_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Skills_By_ACTIVE(
    i_Params_Get_Skills_By_ACTIVE: Params_Get_Skills_By_ACTIVE
  ): Observable<Skills[]> {
    this.url =
      this.APIBaseUrl + "/Get_Skills_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Skills_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Skills_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Skills(
    i_Params_Delete_Skills: Params_Delete_Skills
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_Skills?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Skills), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Skills(i_Skills: Skills): Observable<Skills> {
    this.url = this.APIBaseUrl + "/Edit_Skills?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Skills>(this.url, JSON.stringify(i_Skills), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Skills;
        })
      );
  }
  Get_Testimonials_By_ACTIVE(
    i_Params_Get_Testimonials_By_ACTIVE: Params_Get_Testimonials_By_ACTIVE
  ): Observable<Testimonials[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Testimonials_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Testimonials_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Testimonials_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Testimonials_By_OWNER_ID(
    i_Params_Get_Testimonials_By_OWNER_ID: Params_Get_Testimonials_By_OWNER_ID
  ): Observable<Testimonials[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Testimonials_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Testimonials_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Testimonials_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Testimonials_By_Where(
    i_Params_Get_Testimonials_By_Where: Params_Get_Testimonials_By_Where
  ): Observable<Testimonials[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Testimonials_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Testimonials_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Testimonials_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Testimonials(
    i_Params_Delete_Testimonials: Params_Delete_Testimonials
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Testimonials?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Testimonials),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Testimonials(i_Testimonials: Testimonials): Observable<Testimonials> {
    this.url =
      this.APIBaseUrl + "/Edit_Testimonials?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Testimonials>(
        this.url,
        JSON.stringify(i_Testimonials),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Testimonials;
        })
      );
  }
  Get_Educations_By_ACTIVE(
    i_Params_Get_Educations_By_ACTIVE: Params_Get_Educations_By_ACTIVE
  ): Observable<Educations[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Educations_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Educations_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Educations_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Educations_By_OWNER_ID(
    i_Params_Get_Educations_By_OWNER_ID: Params_Get_Educations_By_OWNER_ID
  ): Observable<Educations[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Educations_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Educations_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Educations_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Educations_By_Where(
    i_Params_Get_Educations_By_Where: Params_Get_Educations_By_Where
  ): Observable<Educations[]> {
    this.url =
      this.APIBaseUrl + "/Get_Educations_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Educations_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Educations_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Educations(
    i_Params_Delete_Educations: Params_Delete_Educations
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Educations?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Educations), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Educations(i_Educations: Educations): Observable<Educations> {
    this.url =
      this.APIBaseUrl + "/Edit_Educations?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Educations>(
        this.url,
        JSON.stringify(i_Educations),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Educations;
        })
      );
  }
  Get_Experience_By_ACTIVE(
    i_Params_Get_Experience_By_ACTIVE: Params_Get_Experience_By_ACTIVE
  ): Observable<Experience[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Experience_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Experience_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Experience_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Experience_By_OWNER_ID(
    i_Params_Get_Experience_By_OWNER_ID: Params_Get_Experience_By_OWNER_ID
  ): Observable<Experience[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Experience_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Experience_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Experience_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Experience_By_Where(
    i_Params_Get_Experience_By_Where: Params_Get_Experience_By_Where
  ): Observable<Experience[]> {
    this.url =
      this.APIBaseUrl + "/Get_Experience_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Experience_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Experience_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Experience(
    i_Params_Delete_Experience: Params_Delete_Experience
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Experience?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Experience), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Experience(i_Experience: Experience): Observable<Experience> {
    this.url =
      this.APIBaseUrl + "/Edit_Experience?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Experience>(
        this.url,
        JSON.stringify(i_Experience),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Experience;
        })
      );
  }
  Get_Experience_item_By_Where(
    i_Params_Get_Experience_item_By_Where: Params_Get_Experience_item_By_Where
  ): Observable<Experience_item[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Experience_item_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Experience_item_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Experience_item_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Experience_item(
    i_Params_Delete_Experience_item: Params_Delete_Experience_item
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Experience_item?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Experience_item),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Experience_item(
    i_Experience_item: Experience_item
  ): Observable<Experience_item> {
    this.url =
      this.APIBaseUrl + "/Edit_Experience_item?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Experience_item>(
        this.url,
        JSON.stringify(i_Experience_item),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Experience_item;
        })
      );
  }
  Get_Bluger_By_ACTIVE(
    i_Params_Get_Bluger_By_ACTIVE: Params_Get_Bluger_By_ACTIVE
  ): Observable<Bluger[]> {
    this.url =
      this.APIBaseUrl + "/Get_Bluger_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_By_BLUGER_ID(
    i_Params_Get_Bluger_By_BLUGER_ID: Params_Get_Bluger_By_BLUGER_ID
  ): Observable<Bluger> {
    this.url =
      this.APIBaseUrl + "/Get_Bluger_By_BLUGER_ID?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_By_BLUGER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_By_BLUGER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_By_BLUGER_CATEGORY_ID(
    i_Params_Get_Bluger_By_BLUGER_CATEGORY_ID: Params_Get_Bluger_By_BLUGER_CATEGORY_ID
  ): Observable<Bluger[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Bluger_By_BLUGER_CATEGORY_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_By_BLUGER_CATEGORY_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_By_BLUGER_CATEGORY_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_By_OWNER_ID(
    i_Params_Get_Bluger_By_OWNER_ID: Params_Get_Bluger_By_OWNER_ID
  ): Observable<Bluger[]> {
    this.url =
      this.APIBaseUrl + "/Get_Bluger_By_OWNER_ID?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_By_Where(
    i_Params_Get_Bluger_By_Where: Params_Get_Bluger_By_Where
  ): Observable<Bluger[]> {
    this.url =
      this.APIBaseUrl + "/Get_Bluger_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Bluger(
    i_Params_Delete_Bluger: Params_Delete_Bluger
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_Bluger?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Bluger), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Bluger(i_Bluger: Bluger): Observable<Bluger> {
    this.url = this.APIBaseUrl + "/Edit_Bluger?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Bluger>(this.url, JSON.stringify(i_Bluger), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Bluger;
        })
      );
  }
  Get_Courses_By_ACTIVE(
    i_Params_Get_Courses_By_ACTIVE: Params_Get_Courses_By_ACTIVE
  ): Observable<Courses[]> {
    this.url =
      this.APIBaseUrl + "/Get_Courses_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Courses_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Courses_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Courses_By_Where(
    i_Params_Get_Courses_By_Where: Params_Get_Courses_By_Where
  ): Observable<Courses[]> {
    this.url =
      this.APIBaseUrl + "/Get_Courses_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Courses_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Courses_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Courses(
    i_Params_Delete_Courses: Params_Delete_Courses
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_Courses?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Courses), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Courses(i_Courses: Courses): Observable<Courses> {
    this.url = this.APIBaseUrl + "/Edit_Courses?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Courses>(this.url, JSON.stringify(i_Courses), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Courses;
        })
      );
  }
  Get_Bluger_category_By_ACTIVE(
    i_Params_Get_Bluger_category_By_ACTIVE: Params_Get_Bluger_category_By_ACTIVE
  ): Observable<Bluger_category[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Bluger_category_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_category_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_category_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_category_By_OWNER_ID(
    i_Params_Get_Bluger_category_By_OWNER_ID: Params_Get_Bluger_category_By_OWNER_ID
  ): Observable<Bluger_category[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Bluger_category_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_category_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_category_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Bluger_category_By_Where(
    i_Params_Get_Bluger_category_By_Where: Params_Get_Bluger_category_By_Where
  ): Observable<Bluger_category[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Bluger_category_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Bluger_category_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Bluger_category_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Bluger_category(
    i_Params_Delete_Bluger_category: Params_Delete_Bluger_category
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Bluger_category?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Bluger_category),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Bluger_category(
    i_Bluger_category: Bluger_category
  ): Observable<Bluger_category> {
    this.url =
      this.APIBaseUrl + "/Edit_Bluger_category?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Bluger_category>(
        this.url,
        JSON.stringify(i_Bluger_category),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Bluger_category;
        })
      );
  }
  Get_Publisher_By_ACTIVE(
    i_Params_Get_Publisher_By_ACTIVE: Params_Get_Publisher_By_ACTIVE
  ): Observable<Publisher[]> {
    this.url =
      this.APIBaseUrl + "/Get_Publisher_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Publisher_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Publisher_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Publisher_By_OWNER_ID(
    i_Params_Get_Publisher_By_OWNER_ID: Params_Get_Publisher_By_OWNER_ID
  ): Observable<Publisher[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Publisher_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Publisher_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Publisher_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Publisher_By_Where(
    i_Params_Get_Publisher_By_Where: Params_Get_Publisher_By_Where
  ): Observable<Publisher[]> {
    this.url =
      this.APIBaseUrl + "/Get_Publisher_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Publisher_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Publisher_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Publisher(
    i_Params_Delete_Publisher: Params_Delete_Publisher
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Publisher?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Publisher), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Publisher(i_Publisher: Publisher): Observable<Publisher> {
    this.url = this.APIBaseUrl + "/Edit_Publisher?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Publisher>(
        this.url,
        JSON.stringify(i_Publisher),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Publisher;
        })
      );
  }
  Get_Gallary_By_ACTIVE(
    i_Params_Get_Gallary_By_ACTIVE: Params_Get_Gallary_By_ACTIVE
  ): Observable<Gallary[]> {
    this.url =
      this.APIBaseUrl + "/Get_Gallary_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Gallary_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Gallary_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Gallary_By_OWNER_ID(
    i_Params_Get_Gallary_By_OWNER_ID: Params_Get_Gallary_By_OWNER_ID
  ): Observable<Gallary[]> {
    this.url =
      this.APIBaseUrl + "/Get_Gallary_By_OWNER_ID?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Gallary_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Gallary_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Gallary_By_Where(
    i_Params_Get_Gallary_By_Where: Params_Get_Gallary_By_Where
  ): Observable<Gallary[]> {
    this.url =
      this.APIBaseUrl + "/Get_Gallary_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Gallary_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Gallary_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Gallary(
    i_Params_Delete_Gallary: Params_Delete_Gallary
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_Gallary?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Gallary), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Gallary(i_Gallary: Gallary): Observable<Gallary> {
    this.url = this.APIBaseUrl + "/Edit_Gallary?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Gallary>(this.url, JSON.stringify(i_Gallary), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Gallary;
        })
      );
  }
  Get_Gallary_item_By_GALLARY_ID(
    i_Params_Get_Gallary_item_By_GALLARY_ID: Params_Get_Gallary_item_By_GALLARY_ID
  ): Observable<Gallary_item[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Gallary_item_By_GALLARY_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Gallary_item_By_GALLARY_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Gallary_item_By_GALLARY_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Gallary_item_By_Where(
    i_Params_Get_Gallary_item_By_Where: Params_Get_Gallary_item_By_Where
  ): Observable<Gallary_item[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Gallary_item_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Gallary_item_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Gallary_item_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Gallary_item(
    i_Params_Delete_Gallary_item: Params_Delete_Gallary_item
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Gallary_item?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Gallary_item),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Gallary_item(i_Gallary_item: Gallary_item): Observable<Gallary_item> {
    this.url =
      this.APIBaseUrl + "/Edit_Gallary_item?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Gallary_item>(
        this.url,
        JSON.stringify(i_Gallary_item),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Gallary_item;
        })
      );
  }
  Get_Socialmedia_By_ACTIVE(
    i_Params_Get_Socialmedia_By_ACTIVE: Params_Get_Socialmedia_By_ACTIVE
  ): Observable<Socialmedia[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Socialmedia_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Socialmedia_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Socialmedia_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Socialmedia_By_OWNER_ID(
    i_Params_Get_Socialmedia_By_OWNER_ID: Params_Get_Socialmedia_By_OWNER_ID
  ): Observable<Socialmedia[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Socialmedia_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Socialmedia_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Socialmedia_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Socialmedia_By_Where(
    i_Params_Get_Socialmedia_By_Where: Params_Get_Socialmedia_By_Where
  ): Observable<Socialmedia[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Socialmedia_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Socialmedia_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Socialmedia_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Delete_Socialmedia(
    i_Params_Delete_Socialmedia: Params_Delete_Socialmedia
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Socialmedia?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Socialmedia), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Edit_Socialmedia(i_Socialmedia: Socialmedia): Observable<Socialmedia> {
    this.url =
      this.APIBaseUrl + "/Edit_Socialmedia?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Socialmedia>(
        this.url,
        JSON.stringify(i_Socialmedia),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Socialmedia;
        })
      );
  }
  Get_Personal_By_PERSONAL_ID(
    i_Params_Get_Personal_By_PERSONAL_ID: Params_Get_Personal_By_PERSONAL_ID
  ): Observable<Personal> {
    this.url =
      this.APIBaseUrl +
      "/Get_Personal_By_PERSONAL_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Personal_By_PERSONAL_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Personal_By_PERSONAL_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Personal_By_OWNER_ID(
    i_Params_Get_Personal_By_OWNER_ID: Params_Get_Personal_By_OWNER_ID
  ): Observable<Personal[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Personal_By_OWNER_ID?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Personal_By_OWNER_ID>(
        this.url,
        JSON.stringify(i_Params_Get_Personal_By_OWNER_ID),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Personal_By_Where(
    i_Params_Get_Personal_By_Where: Params_Get_Personal_By_Where
  ): Observable<Personal[]> {
    this.url =
      this.APIBaseUrl + "/Get_Personal_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Personal_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Personal_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_Personal(i_Personal: Personal): Observable<Personal> {
    this.url = this.APIBaseUrl + "/Edit_Personal?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Personal>(this.url, JSON.stringify(i_Personal), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Personal;
        })
      );
  }
  Get_Friendly_sites_By_ACTIVE(
    i_Params_Get_Friendly_sites_By_ACTIVE: Params_Get_Friendly_sites_By_ACTIVE
  ): Observable<Friendly_sites[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Friendly_sites_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Friendly_sites_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Friendly_sites_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Friendly_sites_By_Where(
    i_Params_Get_Friendly_sites_By_Where: Params_Get_Friendly_sites_By_Where
  ): Observable<Friendly_sites[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Friendly_sites_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Friendly_sites_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Friendly_sites_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_Friendly_sites(
    i_Friendly_sites: Friendly_sites
  ): Observable<Friendly_sites> {
    this.url =
      this.APIBaseUrl + "/Edit_Friendly_sites?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Friendly_sites>(
        this.url,
        JSON.stringify(i_Friendly_sites),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Friendly_sites;
        })
      );
  }
  Delete_Friendly_sites(
    i_Params_Delete_Friendly_sites: Params_Delete_Friendly_sites
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Friendly_sites?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Friendly_sites),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Get_Chance_By_ACTIVE(
    i_Params_Get_Chance_By_ACTIVE: Params_Get_Chance_By_ACTIVE
  ): Observable<Chance[]> {
    this.url =
      this.APIBaseUrl + "/Get_Chance_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Chance_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Chance_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Chance_By_Where(
    i_Params_Get_Chance_By_Where: Params_Get_Chance_By_Where
  ): Observable<Chance[]> {
    this.url =
      this.APIBaseUrl + "/Get_Chance_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Chance_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Chance_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_Chance(i_Chance: Chance): Observable<Chance> {
    this.url = this.APIBaseUrl + "/Edit_Chance?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Chance>(this.url, JSON.stringify(i_Chance), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Chance;
        })
      );
  }
  Delete_Chance(
    i_Params_Delete_Chance: Params_Delete_Chance
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_Chance?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_Chance), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Get_License_By_ACTIVE(
    i_Params_Get_License_By_ACTIVE: Params_Get_License_By_ACTIVE
  ): Observable<License[]> {
    this.url =
      this.APIBaseUrl + "/Get_License_By_ACTIVE?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_License_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_License_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_License_By_Where(
    i_Params_Get_License_By_Where: Params_Get_License_By_Where
  ): Observable<License[]> {
    this.url =
      this.APIBaseUrl + "/Get_License_By_Where?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_License_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_License_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_License(i_License: License): Observable<License> {
    this.url = this.APIBaseUrl + "/Edit_License?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_License>(this.url, JSON.stringify(i_License), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_License;
        })
      );
  }
  Delete_License(
    i_Params_Delete_License: Params_Delete_License
  ): Observable<string> {
    this.url = this.APIBaseUrl + "/Delete_License?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(this.url, JSON.stringify(i_Params_Delete_License), options)
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Get_Consulting_services_By_ACTIVE(
    i_Params_Get_Consulting_services_By_ACTIVE: Params_Get_Consulting_services_By_ACTIVE
  ): Observable<Consulting_services[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Consulting_services_By_ACTIVE?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Consulting_services_By_ACTIVE>(
        this.url,
        JSON.stringify(i_Params_Get_Consulting_services_By_ACTIVE),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Get_Consulting_services_By_Where(
    i_Params_Get_Consulting_services_By_Where: Params_Get_Consulting_services_By_Where
  ): Observable<Consulting_services[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Consulting_services_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Consulting_services_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Consulting_services_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_Consulting_services(
    i_Consulting_services: Consulting_services
  ): Observable<Consulting_services> {
    this.url =
      this.APIBaseUrl +
      "/Edit_Consulting_services?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Consulting_services>(
        this.url,
        JSON.stringify(i_Consulting_services),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Consulting_services;
        })
      );
  }
  Delete_Consulting_services(
    i_Params_Delete_Consulting_services: Params_Delete_Consulting_services
  ): Observable<string> {
    this.url =
      this.APIBaseUrl +
      "/Delete_Consulting_services?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Consulting_services),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Get_Reqwest_publishers_By_Where(
    i_Params_Get_Reqwest_publishers_By_Where: Params_Get_Reqwest_publishers_By_Where
  ): Observable<Reqwest_publishers[]> {
    this.url =
      this.APIBaseUrl +
      "/Get_Reqwest_publishers_By_Where?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Get_Reqwest_publishers_By_Where>(
        this.url,
        JSON.stringify(i_Params_Get_Reqwest_publishers_By_Where),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  Edit_Reqwest_publishers(
    i_Reqwest_publishers: Reqwest_publishers
  ): Observable<Reqwest_publishers> {
    this.url =
      this.APIBaseUrl + "/Edit_Reqwest_publishers?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Reqwest_publishers>(
        this.url,
        JSON.stringify(i_Reqwest_publishers),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Reqwest_publishers;
        })
      );
  }
  Authenticate(i_Params_Authenticate: Params_Authenticate): Observable<User> {
    this.url = this.APIBaseUrl + "/Authenticate?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Authenticate>(
        this.url,
        JSON.stringify(i_Params_Authenticate),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Result;
        })
      );
  }
  SendEmail(i_Params_SendEmail: Params_SendEmail): Observable<void> {
    this.url = this.APIBaseUrl + "/SendEmail?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_SendEmail>(
        this.url,
        JSON.stringify(i_Params_SendEmail),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
        })
      );
  }
  Edit_Uploaded_file(
    i_Uploaded_file: Uploaded_file
  ): Observable<Uploaded_file> {
    this.url =
      this.APIBaseUrl + "/Edit_Uploaded_file?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<Result_Edit_Uploaded_file>(
        this.url,
        JSON.stringify(i_Uploaded_file),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.My_Uploaded_file;
        })
      );
  }
  Delete_Uploaded_file(
    i_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file
  ): Observable<string> {
    this.url =
      this.APIBaseUrl + "/Delete_Uploaded_file?Ticket=" + this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(i_Params_Delete_Uploaded_file),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
  Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD(
    i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
  ): Observable<string> {
    this.url =
      this.APIBaseUrl +
      "/Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD?Ticket=" +
      this.common.ticket;
    const headers = new HttpHeaders({
      "Content-Type": "application/json",
      ticket: this.common.ticket,
    });
    const options = { headers: headers };
    return this.api
      .post<any>(
        this.url,
        JSON.stringify(
          i_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD
        ),
        options
      )
      .pipe(
        map((response) => {
          this.common.Handle_Exception(response.ExceptionMsg);
          return response.ExceptionMsg;
        })
      );
  }
}
export class Params_Get_Skills_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Skills {
  SKILLS_ID?: number;
  NAME: string;
  NAME_AR: string;
  VALUE?: number;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Skills_By_Where {
  OWNER_ID?: number;
  NAME: string;
  NAME_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Get_Skills_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Params_Delete_Skills {
  SKILLS_ID?: number;
}
export class Params_Get_Testimonials_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Testimonials {
  TESTIMONIALS_ID?: number;
  NAME: string;
  NAME_AR: string;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Uploaded_file {
  UPLOADED_FILE_ID?: number;
  REL_ENTITY: string;
  REL_KEY?: number;
  REL_FIELD: string;
  SIZE?: number;
  EXTENSION: string;
  STAMP: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_URL: string;
}
export class Params_Get_Testimonials_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Testimonials_By_Where {
  OWNER_ID?: number;
  NAME: string;
  NAME_AR: string;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Testimonials {
  TESTIMONIALS_ID?: number;
}
export class Params_Get_Educations_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Educations {
  EDUCATIONS_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_D: string;
  NAME: string;
  NAME_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Educations_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Educations_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_D: string;
  NAME: string;
  NAME_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Educations {
  EDUCATIONS_ID?: number;
}
export class Params_Get_Experience_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Experience {
  EXPERIENCE_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_Y: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Experience_item: Experience_item[];
}
export class Experience_item {
  EXPERIENCE_ITEM_ID?: number;
  ITEM: string;
  ITEM_AR: string;
  EXPERIENCE_ID?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Experience: Experience;
}
export class Params_Get_Experience_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Experience_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_Y: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Experience {
  EXPERIENCE_ID?: number;
}
export class Params_Get_Experience_item_By_Where {
  OWNER_ID?: number;
  ITEM: string;
  ITEM_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Experience_item {
  EXPERIENCE_ITEM_ID?: number;
}
export class Params_Get_Bluger_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Bluger {
  BLUGER_ID?: number;
  TITLE: string;
  DESCRIPTION: string;
  PUBLISH_OF_DATE: string;
  AUTHOR: string;
  AUTHOR_INFO: string;
  CONTENT1_TITLE: string;
  CONTENT1: string;
  CONTENT2_TITLE: string;
  CONTENT2: string;
  CONTENT3_TITLE: string;
  CONTENT3: string;
  CONTENT4_TITLE: string;
  CONTENT4: string;
  CONTENT5_TITLE: string;
  CONTENT5: string;
  QUATE: string;
  THANKS_ABOUT: string;
  REFERENCE_EN: string;
  REFERENCE_AR: string;
  EN?: boolean;
  FAVORITE?: boolean;
  ACTIVE?: boolean;
  BLUGER_CATEGORY_ID?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Bluger_category: Bluger_category;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Bluger_category {
  BLUGER_CATEGORY_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  SUB_TITLE: string;
  SUB_TITLE_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_Bluger_By_BLUGER_ID {
  BLUGER_ID?: number;
}
export class Params_Get_Bluger_By_BLUGER_CATEGORY_ID {
  BLUGER_CATEGORY_ID?: number;
}
export class Params_Get_Bluger_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Bluger_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  DESCRIPTION: string;
  PUBLISH_OF_DATE: string;
  AUTHOR: string;
  AUTHOR_INFO: string;
  CONTENT1_TITLE: string;
  CONTENT1: string;
  CONTENT2_TITLE: string;
  CONTENT2: string;
  CONTENT3_TITLE: string;
  CONTENT3: string;
  CONTENT4_TITLE: string;
  CONTENT4: string;
  CONTENT5_TITLE: string;
  CONTENT5: string;
  QUATE: string;
  THANKS_ABOUT: string;
  REFERENCE_EN: string;
  REFERENCE_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Bluger {
  BLUGER_ID?: number;
}
export class Params_Get_Courses_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Courses {
  COURSES_ID?: number;
  TITLES: string;
  DESCRIPTION: string;
  GOALS: string;
  DATE: string;
  EN?: boolean;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_Courses_By_Where {
  OWNER_ID?: number;
  TITLES: string;
  DESCRIPTION: string;
  GOALS: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Courses {
  COURSES_ID?: number;
}
export class Params_Get_Bluger_category_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Params_Get_Bluger_category_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Bluger_category_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  SUB_TITLE: string;
  SUB_TITLE_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Bluger_category {
  BLUGER_CATEGORY_ID?: number;
}
export class Params_Get_Publisher_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Publisher {
  PUBLISHER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  URL: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_Publisher_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Publisher_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  URL: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Publisher {
  PUBLISHER_ID?: number;
}
export class Params_Get_Gallary_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Gallary {
  GALLARY_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Gallary_item: Gallary_item[];
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Gallary_item {
  GALLARY_ITEM_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  NAME: string;
  NAME_AR: string;
  CATEGORY: string;
  CATEGORY_AR: string;
  PROJECTDATE: string;
  PROJECTURL: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  GALLARY_ID?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Gallary: Gallary;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_Gallary_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Gallary_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Gallary {
  GALLARY_ID?: number;
}
export class Params_Get_Gallary_item_By_GALLARY_ID {
  GALLARY_ID?: number;
}
export class Params_Get_Gallary_item_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  NAME: string;
  NAME_AR: string;
  CATEGORY: string;
  CATEGORY_AR: string;
  PROJECTDATE: string;
  PROJECTURL: string;
  DESCRIPTION: string;
  DESCRIPTION_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Gallary_item {
  GALLARY_ITEM_ID?: number;
}
export class Params_Get_Socialmedia_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Socialmedia {
  SOCIALMEDIA_ID?: number;
  NAME: string;
  URL: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Socialmedia_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Socialmedia_By_Where {
  OWNER_ID?: number;
  NAME: string;
  URL: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Socialmedia {
  SOCIALMEDIA_ID?: number;
}
export class Params_Get_Personal_By_PERSONAL_ID {
  PERSONAL_ID?: number;
}
export class Personal {
  PERSONAL_ID?: number;
  NAME: string;
  NAME_AR: string;
  PHONE: string;
  EMAIL: string;
  WEBSITE: string;
  DEGREE: string;
  DEGREE_AR: string;
  ADDRESS: string;
  FOOTER_ABOUT_ME: string;
  FOOTER_ABOUT_ME_AR: string;
  FOOTER_ABOUT_LINES: string;
  FOOTER_ABOUT_LINES_AR: string;
  HOME_DESCRIPTION: string;
  HOME_DESCRIPTION_AR: string;
  CONSULTING_HEADER: string;
  CONSULTING_HEADER_AR: string;
  CONSULTING_FOOTER: string;
  CONSULTING_FOOTER_AR: string;
  ABOUT_DESCRIPTION: string;
  ABOUT_DESCRIPTION_AR: string;
  JOB_TITLE: string;
  JOB_TITLE_AR: string;
  JOB_DESCRIPTION: string;
  JOB_DESCRIPTION_AR: string;
  ABOUT_SUMARY: string;
  ABOUT_SUMARY_AR: string;
  SKILLS_DESCRIPTION: string;
  SKILLS_DESCRIPTION_AR: string;
  RESUME_DESCRIPTION: string;
  RESUME_DESCRIPTION_AR: string;
  TESTIMONTION_DESCRIPTION: string;
  TESTIMONTION_DESCRIPTION_AR: string;
  FRIENDLY_SITES: string;
  FRIENDLY_SITES_AR: string;
  PUBLISHER_DESCRIPTION: string;
  PUBLISHER_DESCRIPTION_AR: string;
  GALLARY_DESCRIPTION: string;
  GALLARY_DESCRIPTION_AR: string;
  COURSES_DESCRIPTION: string;
  COURSES_DESCRIPTION_AR: string;
  BLUGER_DESCRIPTION: string;
  BLUGER_DESCRIPTION_AR: string;
  CHANCE_DESCRIPTION: string;
  CHANCE_DESCRIPTION_AR: string;
  CONTACT_DESCRIPTION: string;
  CONTACT_DESCRIPTION_AR: string;
  CONTACT_LOCATION: string;
  CONTACT_LOCATION_AR: string;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Personal_By_OWNER_ID {
  OWNER_ID?: number;
}
export class Params_Get_Personal_By_Where {
  OWNER_ID?: number;
  NAME: string;
  NAME_AR: string;
  PHONE: string;
  EMAIL: string;
  WEBSITE: string;
  DEGREE: string;
  DEGREE_AR: string;
  ADDRESS: string;
  FOOTER_ABOUT_ME: string;
  FOOTER_ABOUT_ME_AR: string;
  FOOTER_ABOUT_LINES: string;
  FOOTER_ABOUT_LINES_AR: string;
  HOME_DESCRIPTION: string;
  HOME_DESCRIPTION_AR: string;
  CONSULTING_HEADER: string;
  CONSULTING_HEADER_AR: string;
  CONSULTING_FOOTER: string;
  CONSULTING_FOOTER_AR: string;
  ABOUT_DESCRIPTION: string;
  ABOUT_DESCRIPTION_AR: string;
  JOB_TITLE: string;
  JOB_TITLE_AR: string;
  JOB_DESCRIPTION: string;
  JOB_DESCRIPTION_AR: string;
  ABOUT_SUMARY: string;
  ABOUT_SUMARY_AR: string;
  SKILLS_DESCRIPTION: string;
  SKILLS_DESCRIPTION_AR: string;
  RESUME_DESCRIPTION: string;
  RESUME_DESCRIPTION_AR: string;
  TESTIMONTION_DESCRIPTION: string;
  TESTIMONTION_DESCRIPTION_AR: string;
  FRIENDLY_SITES: string;
  FRIENDLY_SITES_AR: string;
  PUBLISHER_DESCRIPTION: string;
  PUBLISHER_DESCRIPTION_AR: string;
  GALLARY_DESCRIPTION: string;
  GALLARY_DESCRIPTION_AR: string;
  COURSES_DESCRIPTION: string;
  COURSES_DESCRIPTION_AR: string;
  BLUGER_DESCRIPTION: string;
  BLUGER_DESCRIPTION_AR: string;
  CHANCE_DESCRIPTION: string;
  CHANCE_DESCRIPTION_AR: string;
  CONTACT_DESCRIPTION: string;
  CONTACT_DESCRIPTION_AR: string;
  CONTACT_LOCATION: string;
  CONTACT_LOCATION_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Get_Friendly_sites_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Friendly_sites {
  FRIENDLY_SITES_ID?: number;
  TITLE: string;
  URL: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Image_Url: string;
  My_Uploaded_files: Uploaded_file[];
}
export class Params_Get_Friendly_sites_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  URL: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Friendly_sites {
  FRIENDLY_SITES_ID?: number;
}
export class Params_Get_Chance_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Chance {
  CHANCE_ID?: number;
  TITLE: string;
  DESCRIPTION: string;
  CONTENT: string;
  CHANCE_LANG: string;
  TYPE: string;
  ICON: string;
  LINK: string;
  END_DATE: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Chance_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  DESCRIPTION: string;
  CONTENT: string;
  CHANCE_LANG: string;
  TYPE: string;
  ICON: string;
  LINK: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Chance {
  CHANCE_ID?: number;
}
export class Params_Get_License_By_ACTIVE {
  ACTIVE?: boolean;
}
export class License {
  LICENSE_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_D: string;
  NAME: string;
  NAME_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_License_By_Where {
  OWNER_ID?: number;
  TITLE: string;
  TITLE_AR: string;
  FROM_TO_D: string;
  NAME: string;
  NAME_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_License {
  LICENSE_ID?: number;
}
export class Params_Get_Consulting_services_By_ACTIVE {
  ACTIVE?: boolean;
}
export class Consulting_services {
  CONSULTING_SERVICES_ID?: number;
  CONSULTING_SERVICES_EN: string;
  CONSULTING_SERVICES_AR: string;
  ACTIVE?: boolean;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
}
export class Params_Get_Consulting_services_By_Where {
  OWNER_ID?: number;
  CONSULTING_SERVICES_EN: string;
  CONSULTING_SERVICES_AR: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Params_Delete_Consulting_services {
  CONSULTING_SERVICES_ID?: number;
}
export class Params_Get_Reqwest_publishers_By_Where {
  OWNER_ID?: number;
  NAME: string;
  EMAIL: string;
  START_ROW?: number;
  END_ROW?: number;
  TOTAL_COUNT?: number;
}
export class Reqwest_publishers {
  REQWEST_PUBLISHERS_ID?: number;
  NAME: string;
  EMAIL: string;
  PUBLISHER_ID?: number;
  ENTRY_USER_ID?: number;
  ENTRY_DATE: string;
  OWNER_ID?: number;
  My_Publisher: Publisher;
}
export class Params_Authenticate {
  UserName: string;
  Password: string;
}
export class User {
  USER_ID?: number;
  OWNER_ID?: number;
  USERNAME: string;
  PASSWORD: string;
  USER_TYPE_CODE: string;
  IS_ACTIVE?: boolean;
  ENTRY_DATE: string;
  Ticket: string;
}
export class Params_SendEmail {
  name: string;
  email: string;
  supject: string;
  message: string;
}
export class Params_Delete_Uploaded_file {
  UPLOADED_FILE_ID?: number;
}
export class Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD {
  REL_ENTITY: string;
  REL_KEY?: number;
  REL_FIELD: string;
}
export class Action_Result {
  ExceptionMsg: string;
}
export class Result_Get_Skills_By_OWNER_ID extends Action_Result {
  My_Result: Skills[];
  My_Params_Get_Skills_By_OWNER_ID: Params_Get_Skills_By_OWNER_ID;
}
export class Result_Get_Skills_By_Where extends Action_Result {
  My_Result: Skills[];
  My_Params_Get_Skills_By_Where: Params_Get_Skills_By_Where;
}
export class Result_Get_Skills_By_ACTIVE extends Action_Result {
  My_Result: Skills[];
  My_Params_Get_Skills_By_ACTIVE: Params_Get_Skills_By_ACTIVE;
}
export class Result_Delete_Skills extends Action_Result {
  My_Params_Delete_Skills: Params_Delete_Skills;
}
export class Result_Edit_Skills extends Action_Result {
  My_Skills: Skills;
}
export class Result_Get_Testimonials_By_ACTIVE extends Action_Result {
  My_Result: Testimonials[];
  My_Params_Get_Testimonials_By_ACTIVE: Params_Get_Testimonials_By_ACTIVE;
}
export class Result_Get_Testimonials_By_OWNER_ID extends Action_Result {
  My_Result: Testimonials[];
  My_Params_Get_Testimonials_By_OWNER_ID: Params_Get_Testimonials_By_OWNER_ID;
}
export class Result_Get_Testimonials_By_Where extends Action_Result {
  My_Result: Testimonials[];
  My_Params_Get_Testimonials_By_Where: Params_Get_Testimonials_By_Where;
}
export class Result_Delete_Testimonials extends Action_Result {
  My_Params_Delete_Testimonials: Params_Delete_Testimonials;
}
export class Result_Edit_Testimonials extends Action_Result {
  My_Testimonials: Testimonials;
}
export class Result_Get_Educations_By_ACTIVE extends Action_Result {
  My_Result: Educations[];
  My_Params_Get_Educations_By_ACTIVE: Params_Get_Educations_By_ACTIVE;
}
export class Result_Get_Educations_By_OWNER_ID extends Action_Result {
  My_Result: Educations[];
  My_Params_Get_Educations_By_OWNER_ID: Params_Get_Educations_By_OWNER_ID;
}
export class Result_Get_Educations_By_Where extends Action_Result {
  My_Result: Educations[];
  My_Params_Get_Educations_By_Where: Params_Get_Educations_By_Where;
}
export class Result_Delete_Educations extends Action_Result {
  My_Params_Delete_Educations: Params_Delete_Educations;
}
export class Result_Edit_Educations extends Action_Result {
  My_Educations: Educations;
}
export class Result_Get_Experience_By_ACTIVE extends Action_Result {
  My_Result: Experience[];
  My_Params_Get_Experience_By_ACTIVE: Params_Get_Experience_By_ACTIVE;
}
export class Result_Get_Experience_By_OWNER_ID extends Action_Result {
  My_Result: Experience[];
  My_Params_Get_Experience_By_OWNER_ID: Params_Get_Experience_By_OWNER_ID;
}
export class Result_Get_Experience_By_Where extends Action_Result {
  My_Result: Experience[];
  My_Params_Get_Experience_By_Where: Params_Get_Experience_By_Where;
}
export class Result_Delete_Experience extends Action_Result {
  My_Params_Delete_Experience: Params_Delete_Experience;
}
export class Result_Edit_Experience extends Action_Result {
  My_Experience: Experience;
}
export class Result_Get_Experience_item_By_Where extends Action_Result {
  My_Result: Experience_item[];
  My_Params_Get_Experience_item_By_Where: Params_Get_Experience_item_By_Where;
}
export class Result_Delete_Experience_item extends Action_Result {
  My_Params_Delete_Experience_item: Params_Delete_Experience_item;
}
export class Result_Edit_Experience_item extends Action_Result {
  My_Experience_item: Experience_item;
}
export class Result_Get_Bluger_By_ACTIVE extends Action_Result {
  My_Result: Bluger[];
  My_Params_Get_Bluger_By_ACTIVE: Params_Get_Bluger_By_ACTIVE;
}
export class Result_Get_Bluger_By_BLUGER_ID extends Action_Result {
  My_Result: Bluger;
  My_Params_Get_Bluger_By_BLUGER_ID: Params_Get_Bluger_By_BLUGER_ID;
}
export class Result_Get_Bluger_By_BLUGER_CATEGORY_ID extends Action_Result {
  My_Result: Bluger[];
  My_Params_Get_Bluger_By_BLUGER_CATEGORY_ID: Params_Get_Bluger_By_BLUGER_CATEGORY_ID;
}
export class Result_Get_Bluger_By_OWNER_ID extends Action_Result {
  My_Result: Bluger[];
  My_Params_Get_Bluger_By_OWNER_ID: Params_Get_Bluger_By_OWNER_ID;
}
export class Result_Get_Bluger_By_Where extends Action_Result {
  My_Result: Bluger[];
  My_Params_Get_Bluger_By_Where: Params_Get_Bluger_By_Where;
}
export class Result_Delete_Bluger extends Action_Result {
  My_Params_Delete_Bluger: Params_Delete_Bluger;
}
export class Result_Edit_Bluger extends Action_Result {
  My_Bluger: Bluger;
}
export class Result_Get_Courses_By_ACTIVE extends Action_Result {
  My_Result: Courses[];
  My_Params_Get_Courses_By_ACTIVE: Params_Get_Courses_By_ACTIVE;
}
export class Result_Get_Courses_By_Where extends Action_Result {
  My_Result: Courses[];
  My_Params_Get_Courses_By_Where: Params_Get_Courses_By_Where;
}
export class Result_Delete_Courses extends Action_Result {
  My_Params_Delete_Courses: Params_Delete_Courses;
}
export class Result_Edit_Courses extends Action_Result {
  My_Courses: Courses;
}
export class Result_Get_Bluger_category_By_ACTIVE extends Action_Result {
  My_Result: Bluger_category[];
  My_Params_Get_Bluger_category_By_ACTIVE: Params_Get_Bluger_category_By_ACTIVE;
}
export class Result_Get_Bluger_category_By_OWNER_ID extends Action_Result {
  My_Result: Bluger_category[];
  My_Params_Get_Bluger_category_By_OWNER_ID: Params_Get_Bluger_category_By_OWNER_ID;
}
export class Result_Get_Bluger_category_By_Where extends Action_Result {
  My_Result: Bluger_category[];
  My_Params_Get_Bluger_category_By_Where: Params_Get_Bluger_category_By_Where;
}
export class Result_Delete_Bluger_category extends Action_Result {
  My_Params_Delete_Bluger_category: Params_Delete_Bluger_category;
}
export class Result_Edit_Bluger_category extends Action_Result {
  My_Bluger_category: Bluger_category;
}
export class Result_Get_Publisher_By_ACTIVE extends Action_Result {
  My_Result: Publisher[];
  My_Params_Get_Publisher_By_ACTIVE: Params_Get_Publisher_By_ACTIVE;
}
export class Result_Get_Publisher_By_OWNER_ID extends Action_Result {
  My_Result: Publisher[];
  My_Params_Get_Publisher_By_OWNER_ID: Params_Get_Publisher_By_OWNER_ID;
}
export class Result_Get_Publisher_By_Where extends Action_Result {
  My_Result: Publisher[];
  My_Params_Get_Publisher_By_Where: Params_Get_Publisher_By_Where;
}
export class Result_Delete_Publisher extends Action_Result {
  My_Params_Delete_Publisher: Params_Delete_Publisher;
}
export class Result_Edit_Publisher extends Action_Result {
  My_Publisher: Publisher;
}
export class Result_Get_Gallary_By_ACTIVE extends Action_Result {
  My_Result: Gallary[];
  My_Params_Get_Gallary_By_ACTIVE: Params_Get_Gallary_By_ACTIVE;
}
export class Result_Get_Gallary_By_OWNER_ID extends Action_Result {
  My_Result: Gallary[];
  My_Params_Get_Gallary_By_OWNER_ID: Params_Get_Gallary_By_OWNER_ID;
}
export class Result_Get_Gallary_By_Where extends Action_Result {
  My_Result: Gallary[];
  My_Params_Get_Gallary_By_Where: Params_Get_Gallary_By_Where;
}
export class Result_Delete_Gallary extends Action_Result {
  My_Params_Delete_Gallary: Params_Delete_Gallary;
}
export class Result_Edit_Gallary extends Action_Result {
  My_Gallary: Gallary;
}
export class Result_Get_Gallary_item_By_GALLARY_ID extends Action_Result {
  My_Result: Gallary_item[];
  My_Params_Get_Gallary_item_By_GALLARY_ID: Params_Get_Gallary_item_By_GALLARY_ID;
}
export class Result_Get_Gallary_item_By_Where extends Action_Result {
  My_Result: Gallary_item[];
  My_Params_Get_Gallary_item_By_Where: Params_Get_Gallary_item_By_Where;
}
export class Result_Delete_Gallary_item extends Action_Result {
  My_Params_Delete_Gallary_item: Params_Delete_Gallary_item;
}
export class Result_Edit_Gallary_item extends Action_Result {
  My_Gallary_item: Gallary_item;
}
export class Result_Get_Socialmedia_By_ACTIVE extends Action_Result {
  My_Result: Socialmedia[];
  My_Params_Get_Socialmedia_By_ACTIVE: Params_Get_Socialmedia_By_ACTIVE;
}
export class Result_Get_Socialmedia_By_OWNER_ID extends Action_Result {
  My_Result: Socialmedia[];
  My_Params_Get_Socialmedia_By_OWNER_ID: Params_Get_Socialmedia_By_OWNER_ID;
}
export class Result_Get_Socialmedia_By_Where extends Action_Result {
  My_Result: Socialmedia[];
  My_Params_Get_Socialmedia_By_Where: Params_Get_Socialmedia_By_Where;
}
export class Result_Delete_Socialmedia extends Action_Result {
  My_Params_Delete_Socialmedia: Params_Delete_Socialmedia;
}
export class Result_Edit_Socialmedia extends Action_Result {
  My_Socialmedia: Socialmedia;
}
export class Result_Get_Personal_By_PERSONAL_ID extends Action_Result {
  My_Result: Personal;
  My_Params_Get_Personal_By_PERSONAL_ID: Params_Get_Personal_By_PERSONAL_ID;
}
export class Result_Get_Personal_By_OWNER_ID extends Action_Result {
  My_Result: Personal[];
  My_Params_Get_Personal_By_OWNER_ID: Params_Get_Personal_By_OWNER_ID;
}
export class Result_Get_Personal_By_Where extends Action_Result {
  My_Result: Personal[];
  My_Params_Get_Personal_By_Where: Params_Get_Personal_By_Where;
}
export class Result_Edit_Personal extends Action_Result {
  My_Personal: Personal;
}
export class Result_Get_Friendly_sites_By_ACTIVE extends Action_Result {
  My_Result: Friendly_sites[];
  My_Params_Get_Friendly_sites_By_ACTIVE: Params_Get_Friendly_sites_By_ACTIVE;
}
export class Result_Get_Friendly_sites_By_Where extends Action_Result {
  My_Result: Friendly_sites[];
  My_Params_Get_Friendly_sites_By_Where: Params_Get_Friendly_sites_By_Where;
}
export class Result_Edit_Friendly_sites extends Action_Result {
  My_Friendly_sites: Friendly_sites;
}
export class Result_Delete_Friendly_sites extends Action_Result {
  My_Params_Delete_Friendly_sites: Params_Delete_Friendly_sites;
}
export class Result_Get_Chance_By_ACTIVE extends Action_Result {
  My_Result: Chance[];
  My_Params_Get_Chance_By_ACTIVE: Params_Get_Chance_By_ACTIVE;
}
export class Result_Get_Chance_By_Where extends Action_Result {
  My_Result: Chance[];
  My_Params_Get_Chance_By_Where: Params_Get_Chance_By_Where;
}
export class Result_Edit_Chance extends Action_Result {
  My_Chance: Chance;
}
export class Result_Delete_Chance extends Action_Result {
  My_Params_Delete_Chance: Params_Delete_Chance;
}
export class Result_Get_License_By_ACTIVE extends Action_Result {
  My_Result: License[];
  My_Params_Get_License_By_ACTIVE: Params_Get_License_By_ACTIVE;
}
export class Result_Get_License_By_Where extends Action_Result {
  My_Result: License[];
  My_Params_Get_License_By_Where: Params_Get_License_By_Where;
}
export class Result_Edit_License extends Action_Result {
  My_License: License;
}
export class Result_Delete_License extends Action_Result {
  My_Params_Delete_License: Params_Delete_License;
}
export class Result_Get_Consulting_services_By_ACTIVE extends Action_Result {
  My_Result: Consulting_services[];
  My_Params_Get_Consulting_services_By_ACTIVE: Params_Get_Consulting_services_By_ACTIVE;
}
export class Result_Get_Consulting_services_By_Where extends Action_Result {
  My_Result: Consulting_services[];
  My_Params_Get_Consulting_services_By_Where: Params_Get_Consulting_services_By_Where;
}
export class Result_Edit_Consulting_services extends Action_Result {
  My_Consulting_services: Consulting_services;
}
export class Result_Delete_Consulting_services extends Action_Result {
  My_Params_Delete_Consulting_services: Params_Delete_Consulting_services;
}
export class Result_Get_Reqwest_publishers_By_Where extends Action_Result {
  My_Result: Reqwest_publishers[];
  My_Params_Get_Reqwest_publishers_By_Where: Params_Get_Reqwest_publishers_By_Where;
}
export class Result_Edit_Reqwest_publishers extends Action_Result {
  My_Reqwest_publishers: Reqwest_publishers;
}
export class Result_Authenticate extends Action_Result {
  My_Result: User;
  My_Params_Authenticate: Params_Authenticate;
}
export class Result_SendEmail extends Action_Result {
  My_Params_SendEmail: Params_SendEmail;
}
export class Result_Edit_Uploaded_file extends Action_Result {
  My_Uploaded_file: Uploaded_file;
}
export class Result_Delete_Uploaded_file extends Action_Result {
  My_Params_Delete_Uploaded_file: Params_Delete_Uploaded_file;
}
export class Result_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD extends Action_Result {
  My_Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD: Params_Delete_Uploaded_file_By_REL_ENTITY_REL_KEY_REL_FIELD;
}
