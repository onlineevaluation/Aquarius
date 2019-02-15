import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageDetailsService } from './page-details.service';
import { authInfo } from '../utils/auth.util';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit {
  private pageId: number;
  public studentNumber = authInfo().auth;
  constructor(
    private activateRouter: ActivatedRoute,
    private pageDetailsService: PageDetailsService,
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe((params: Params) => {
      this.pageId = params['pageId'];
    });
    console.log('pageid is ', this.pageId);
    this.pageDetailsService.getPageDetail(this.pageId).subscribe(next => {
      console.log('试卷详情 ', next);
    });
  }
}
