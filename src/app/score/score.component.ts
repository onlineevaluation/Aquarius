import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ScoreService } from './score.service';
import { ScoreItem } from '../domain/ScoreItem';
import { EChartOption } from 'echarts';
import { Router } from '@angular/router';

@Component({
  selector: 'app-score',
  templateUrl: './score.component.html',
  styleUrls: ['./score.component.scss'],
})
export class ScoreComponent implements OnInit {
  public scoreList: Array<ScoreItem> = [];
  public xData = [];
  public scoreData = [];
  public classRankData = [];
  public gradeRankData = [];
  public chartOption: any;
  // EChartOption =

  constructor(private scoreService: ScoreService, private router: Router) {}

  ngOnInit() {
    this.scoreService.getStudentScore().subscribe(next => {
      console.log('next is ', next);
      this.scoreList = next.data;
      this.scoreList.forEach(item => {
        this.xData.push(item.pageTitle);
        this.scoreData.push(item.score);
        this.gradeRankData.push(item.gradeRank);
        this.classRankData.push(item.classRank);
        // this.gradeRankData.push(item.grad)
      });
      // 图表数据展示和设置
      this.chartOption = {
        tooltip: {
          trigger: 'axis',
        },
        legend: {
          data: ['成绩', '班级排名', '年级排名'],
        },
        xAxis: {
          type: 'category',
          data: this.xData,
        },
        yAxis: [
          {
            type: 'value',
            name: '成绩',
            min: '100',
            max: '0',
            position: 'right',
          },
          {
            type: 'value',
            name: '排名',
            min: '0',
            max: '100',
            position: 'left',
            axisLabel: {
              formatter: '{value} %',
            },
          },
        ],
        series: [
          {
            name: '成绩',
            data: this.scoreData,
            type: 'line',
            smooth: true,
          },
          {
            name: '班级排名',
            data: this.classRankData,
            type: 'line',
            smooth: true,
            stack: '班级排名',
          },
          {
            name: '年级排名',
            data: this.gradeRankData,
            type: 'line',
            smooth: true,
            stack: '年级排名',
          },
        ],
      };
    });
  }

  openDetails(pagesId: number) {
    this.router.navigate(['/pageDetails', pagesId]);
  }
}
