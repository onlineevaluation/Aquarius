import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageDetailsService } from './page-details.service';
import { Details } from '../domain/Details';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit {
  public details: Details = new Details();
  private pageId: number;
  public studentNumber: string;
  public username: string;
  score: number = 0;
  constructor(
    private activateRouter: ActivatedRoute,
    private pageDetailsService: PageDetailsService,
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe((params: Params) => {
      this.pageId = params['pageId'];
    });
    // 获取试卷详细信息
    this.pageDetailsService.getPageDetail(this.pageId).subscribe(next => {
      this.details = next.data;
      console.log('details,', this.details);
    });
    // 获取用户信息
    this.pageDetailsService.getUserProfile().subscribe(result => {
      console.log('data is ', result);
      this.username = result.data.name;
      this.studentNumber = result.data.number;
    });
  }
}
