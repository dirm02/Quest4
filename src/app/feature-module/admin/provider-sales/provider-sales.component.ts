import { Component, OnInit, ViewChild } from '@angular/core';
import { Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { DataService } from 'src/app/shared/data/data.service';
import { providerSales } from 'src/app/shared/models/data-table-model';
import { pageSelection, apiResultFormat } from 'src/app/shared/models/models';
import { routes } from 'src/app/shared/routes/routes';
import {
  ChartComponent,
  ApexAxisChartSeries,
  ApexChart,
  ApexXAxis,
  ApexDataLabels,
  ApexTooltip,
  ApexStroke,
  ApexPlotOptions,
  ApexYAxis,
  ApexFill,
  ApexLegend,
  ApexResponsive,
} from 'ng-apexcharts';
export type ChartOptions = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  series: ApexAxisChartSeries | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  chart: ApexChart | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  xaxis: ApexXAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stroke: ApexStroke | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  tooltip: ApexTooltip | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  dataLabels: ApexDataLabels | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  plotOptions: ApexPlotOptions | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  yaxis: ApexYAxis | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  fill: ApexFill | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  legend: ApexLegend | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  labels: | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  responsive: ApexResponsive[] | any;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  colors: | any;
};
interface data {
  value: string;
}

@Component({
    selector: 'app-provider-sales',
    templateUrl: './provider-sales.component.html',
    styleUrls: ['./provider-sales.component.css'],
    standalone: false
})
export class ProviderSalesComponent implements OnInit{
  public routes = routes;
  @ViewChild('chart') chart!: ChartComponent;
  public chartOptionsThree: Partial<ChartOptions>;
  public selectedValue = '';
  public selectedValue2 = '';
  public selectedValue3 = '';
  public selectedValue4 = '';
  public selectedValue5 = '';
  public providerSales : Array<providerSales> = []
  dataSource!: MatTableDataSource<providerSales>;

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

  constructor(public data : DataService){
    this.chartOptionsThree = {
      chart: {
        type: 'bar',
        height: 350,
        width: '100%',
        stacked: false,
        toolbar: {
          show: false
        },
      },
      dataLabels: {
        enabled: false
      },
      plotOptions: {
        bar: {
          columnWidth: '30%',
        },
      },
      stroke: {
        show: true,
        width: 2,
        colors: ['transparent']
      },
      series: [{
        color: '#000',
        data: [420, 532, 516, 575, 519, 517, 454, 392, 262, 383, 446, 551],
      }],
      labels: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020],
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
    
      
    };
  }
  ngOnInit() {
    this.getTableData();
  }
  private getTableData(): void {
    this.providerSales= [];
    this.serialNumberArray = [];

    this.data.getProviderSales().subscribe((data: apiResultFormat) => {
      this.totalData = data.totalData;
      data.data.map((res: providerSales, index: number) => {
        const serialNumber = index + 1;
        if (index >= this.skip && serialNumber <= this.limit) {
          res.id = serialNumber;
          this.providerSales.push(res);
          this.serialNumberArray.push(serialNumber);
        }
      });
      this.dataSource = new MatTableDataSource<providerSales>(this.providerSales);
      this.calculateTotalPages(this.totalData, this.pageSize);
    });
  }

  public searchData(value: string): void {
    this.dataSource.filter = value.trim().toLowerCase();
    this.providerSales = this.dataSource.filteredData;
  }

  public sortData(sort: Sort) {
    const data = this.providerSales.slice();

    if (!sort.active || sort.direction === '') {
      this.providerSales = data;
    } else {
      this.providerSales = data.sort((a, b) => {         
        const aValue = (a as never)[sort.active];         
        const bValue = (b as never)[sort.active];
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  public getMoreData(event: string): void {
    if (event == 'next') {
      this.currentPage++;
      this.pageIndex = this.currentPage - 1;
      this.limit += this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    } else if (event == 'previous') {
      this.currentPage--;
      this.pageIndex = this.currentPage - 1;
      this.limit -= this.pageSize;
      this.skip = this.pageSize * this.pageIndex;
      this.getTableData();
    }
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

  public PageSize(): void {
    this.pageSelection = [];
    this.limit = this.pageSize;
    this.skip = 0;
    this.currentPage = 1;
    this.getTableData();
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
  selectedList: data[] = [
    {value: '1'},
    {value: '2'},
    {value: '3'},
    {value: '4'},
  ];
  selectedList2: data[] = [
    {value: 'Jul'},
    {value: 'Aug'},
    {value: 'Sep'},
  ];
  selectedList3: data[] = [
    {value: '2023'},
    {value: '2022'},
    {value: '2021'},
  ];
  selectedList4: data[] = [
    {value: 'Robert'},
    {value: 'Pauline'},
    {value: 'Jerry'},
  ];
  selectedList5: data[] = [
    {value: 'Completed'},
    {value: 'Uncompleted'},
  ];

}
