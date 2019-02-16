import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PageDetailsService } from './page-details.service';
import { authInfo } from '../utils/auth.util';
import { Details } from '../domain/Details';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.scss'],
})
export class PageDetailsComponent implements OnInit {
  public details: Details = new Details();
  private pageId: number;
  public studentNumber = authInfo().auth;
  score: number = 0;
  constructor(
    private activateRouter: ActivatedRoute,
    private pageDetailsService: PageDetailsService,
  ) {}

  ngOnInit() {
    this.activateRouter.params.subscribe((params: Params) => {
      this.pageId = params['pageId'];
    });
    this.pageDetailsService.getPageDetail(this.pageId).subscribe(next => {
      this.details = next.data;
    });
  }
}
