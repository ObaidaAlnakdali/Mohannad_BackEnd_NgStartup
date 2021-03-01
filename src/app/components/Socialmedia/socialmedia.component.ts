import { Component, OnInit, OnDestroy  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import { Location } from '@angular/common';
import { MatDialog } from '@angular/material';
import {
Proxy,
Socialmedia,
Params_Get_Socialmedia_By_Where,
Params_Delete_Socialmedia,

} from '../../core/services/proxy.service';
import { DeleteConfirmationComponent } from '../delete-confirmation/delete-confirmation.component';
import { CommonService } from '../../core/services/common.service';
@Component({
selector: 'app-socialmedia',
templateUrl: './socialmedia.component.html',
styleUrls: ['./socialmedia.component.css']
})
export class SocialmediaComponent implements OnInit , OnDestroy  {
Get_Socialmedia_By_Where_Subscription = new Subscription();
searchModel: Params_Get_Socialmedia_By_Where = new Params_Get_Socialmedia_By_Where();
data: Socialmedia[] = [];



constructor(private proxy: Proxy, private CmSvc: CommonService, private dialog: MatDialog, private location : Location ) {}

ngOnInit(): void {
this.searchModel.START_ROW = 0;


this.fetchData();
}
ngOnDestroy(): void {
this.Get_Socialmedia_By_Where_Subscription.unsubscribe();

}
ClearAndFetch() {
this.data = [];
this.searchModel.START_ROW  = 0;
this.fetchData();
}
fetchData() {
this.searchModel.END_ROW = this.searchModel.START_ROW + 10;
this.Get_Socialmedia_By_Where_Subscription = this.proxy.Get_Socialmedia_By_Where(this.searchModel).subscribe(result => {
 if (result != null) {
result.forEach((element: any) => {
this.data.push(element);
});
}
});
}
AddEntry() {
if (this.data !== undefined) {
if (this.data.filter(e => e.SOCIALMEDIA_ID === -1).length > 0) {
return;
}
}
const record = new Socialmedia();
record.SOCIALMEDIA_ID = -1;
record.ACTIVE = false;
this.data.unshift(record);
}
Edit(current) {
this.proxy.Edit_Socialmedia(current).subscribe((result) => {
if (result != null) {
this.CmSvc.ShowMessage('Done');
if (current.SOCIALMEDIA_ID === -1) {
this.data.splice(this.data.indexOf(current), 1);
const newEntry: any = result;
newEntry.MyUploadedImages = [];
newEntry.MyURL = this.CmSvc.APIUrl + '/Upload_Image?REL_ENTITY=[TBL_SOCIALMEDIA]&REL_FIELD=SOCIALMEDIA_IMAGE&REL_KEY=' + newEntry.SOCIALMEDIA_ID;
this.data.unshift(newEntry);
}
}
});
}
Delete(entry) {
const dialogRef = this.dialog.open(DeleteConfirmationComponent);
dialogRef.afterClosed().subscribe(response =>  {
if (response) {
const _params_Delete_Socialmedia = new Params_Delete_Socialmedia();
_params_Delete_Socialmedia.SOCIALMEDIA_ID = entry.SOCIALMEDIA_ID;
this.proxy.Delete_Socialmedia(_params_Delete_Socialmedia).subscribe(data => {
if (data === '') {
this.data.splice(this.data.indexOf(entry), 1);
}
});
 }
});
}
onScroll () {
this.searchModel.START_ROW = this.searchModel.START_ROW + 10;
this.fetchData(); }
goBack() {
this.location.back();
}
}
