import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { refundReports } from 'src/app/shared/models/data-table-model';
import { apiResultFormat, pageSelection } from 'src/app/shared/models/models';
interface data {
  value : string
  
}
import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexPlotOptions,
  ApexYAxis,
  ApexLegend,
  ApexStroke,
  ApexXAxis,
  ApexFill,
  ApexTooltip
} from "ng-apexcharts";
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill |any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tooltip: ApexTooltip | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: ApexLegend | any;
};
@Component({
    selector: 'app-refund-report',
    templateUrl: './refund-report.component.html',
    styleUrls: ['./refund-report.component.css'],
    standalone: false
})
export class RefundReportComponent implements OnInit{
  public selectedValue = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public showFilter = false;
  public searchDataValue = '';
  public lastIndex = 0;
  public pageSize = 10;
  public totalData = 0;
  public skip = 0;
  public limit: number = this.pageSize;
  public pageIndex = 0;
  public serialNumberArray: Array<number> = [];
  public currentPage = 1;
  public pageNumberArray: Array<number> = [];
  public pageSelection: Array<pageSelection> = [];
  public totalPages = 0;
  selectedList: data[] = [
    {value: 'Date'},
    {value: '01'},
    {value: '02'},
    {value: '03'}
    ];
    selectedList2: data[] = [
      {value: 'July'},
      {value: 'Aug'},
      {value: 'Sep'}
    ];
    selectedList3: data[] = [
      {value: '2023'},
      {value: '2022'},
      {value: '2021'}
    ];
    selectedList4: data[] = [
      {value: 'Jerry'},
      {value: 'Pauline'},
      {value: 'Robert'}
    ];
    selectedList5: data[] = [
      {value: 'Select Service'},
      {value: 'Plumbing Service'},
      {value: 'Car Repair'},
      {value: 'Interior Design'}
    ];
    public refundReports : Array<refundReports> = []
    dataSource!: MatTableDataSource<refundReports>;
    constructor(public data : DataService) {
     
      this.chartOptions = {
        series: [{
          color: '#333333',
          data: [120, 132, 116, 175, 119, 117, 154, 192, 162, 183, 146, 151],
        }, {
          
          color: '#4C40ED',
          data: [336, 612, 344, 647, 345, 563, 256, 344, 323, 300, 455, 456],
        }],
        labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
        chart: {
          type: "bar",
          height: 350,
          width: '100%',
          stacked: false,
        },
        plotOptions: {
          bar: {
            columnWidth: "55%",
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ["transparent"]
        },
        xaxis: {
          labels: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
        },
        yaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            style: {
              colors: '#777'
            }
          }
        },
        fill: {
          opacity: 1
        },
        tooltip: {
          y: {
           
          }
        }
      };
    }
    ngOnInit() {
      this.getTableData();
    }
    private getTableData(): void {
      this.refundReports = [];
      this.serialNumberArray = [];
  
      this.data.getRefundReport().subscribe((data: apiResultFormat) => {
        this.totalData = data.totalData;
        data.data.map((res: refundReports, index: number) => {
          const serialNumber = index + 1;
          if (index >= this.skip && serialNumber <= this.limit) {
            res.id = serialNumber;
            this.refundReports.push(res);
            this.serialNumberArray.push(serialNumber);
          }
        });
        this.dataSource = new MatTableDataSource<refundReports>(this.refundReports);
        this.calculateTotalPages(this.totalData, this.pageSize);
      });
    }
    private calculateTotalPages(totalData: number, pageSize: number): void {
      this.pageNumberArray = [];
      this.totalPages = totalData / pageSize;
      if (this.totalPages % 1 != 0) {
        this.totalPages = Math.trunc(this.totalPages + 1);
      }
      for (let i = 1; i <= this.totalPages; i++) {
        const limit = pageSize * i;
        const skip = limit - pageSize;
        this.pageNumberArray.push(i);
        this.pageSelection.push({ skip: skip, limit: limit });
      }
    }
    public sortData(sort: Sort) {
      const data = this.refundReports.slice();
  
      if (!sort.active || sort.direction === '') {
        this.refundReports = data;
      } else {
        this.refundReports = data.sort((a, b) => {         
          const aValue = (a as never)[sort.active];         
          const bValue = (b as never)[sort.active];
          return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
        });
      }
    }
    @ViewChild("chart") chart!: ChartComponent;
  public chartOptions: Partial<ChartOptions>;
  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
  }
  public moveToPage(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.skip = this.pageSelection[pageNumber - 1].skip;
    this.limit = this.pageSelection[pageNumber - 1].limit;
    if (pageNumber > this.currentPage) {
      this.pageIndex = pageNumber - 1;
    } else if (pageNumber < this.currentPage) {
      this.pageIndex = pageNumber + 1;
    }
    this.getTableData();
  }

}
