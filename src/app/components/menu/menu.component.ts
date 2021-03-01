import { Component, OnInit } from '@angular/core';
import { menumodel } from '../../core/Models/menumodel';
import { Router } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  entries: menumodel[] = [];
  constructor(private router: Router) { }

  MenuHandler(m: menumodel)
  {
    const NavArray = [];
    NavArray.push(m.route);
    this.router.navigate(NavArray);
  }

  ngOnInit() {

    let m = new menumodel();
    m.fa_icon = 'fa fa-cogs';
    m.title = 'General';
    m.route = 'personal';
    this.entries.push(m);

     m = new menumodel();
    m.fa_icon = 'fa fa-share-alt';
    m.title = 'Social Media';
    m.route = 'sicialmedia';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-free-code-camp';
    m.title = 'Skills';
    m.route = 'skills';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-users';
    m.title = 'Testimonials';
    m.route = 'testimonials';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-book';
    m.title = 'Educations';
    m.route = 'educations';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-plus-square-o';
    m.title = 'Experience';
    m.route = 'experience';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-tasks';
    m.title = 'Experience_Item';
    m.route = 'experience_item';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-edit';
    m.title = 'Bluger';
    m.route = 'bluger';
    this.entries.push(m);

    m = new menumodel();
    m.fa_icon = 'fa fa-product-hunt';
    m.title = 'Publisher';
    m.route = 'publisher';
    this.entries.push(m);



  }

}
