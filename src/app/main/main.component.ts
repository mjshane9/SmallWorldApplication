import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MainService } from '../../service/main.service';
import { User as user } from '../../models/user.model';
import { Router } from '@angular/router';



@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['id', 'first_name', 'last_name', 'email','avatar'];
  userList:[] = [];
  isLoading = false;
  totalRows = 0;
  pageSize = 5;
  currentPage = 0;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
  

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  dataSource: any;

  constructor(
    private userService:MainService,
    private router: Router
    ){

  }

  ngOnInit(){
    this.fetchUsersList()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  fetchUsersList(){
    this.isLoading = true;
    this.userService.getUserList(this.currentPage,this.pageSize).subscribe((data:any)=>{
      console.log("User List",data)
      this.userList = data.data
      this.dataSource  = new MatTableDataSource<user>(this.userList);
      setTimeout(() => {
        this.currentPage = data.page;
        this.paginator.length = data.total;
      });
    })
  }

  pageChanged(event: PageEvent) {
    this.currentPage = event.pageIndex;
    this.fetchUsersList();
  }

  onMatCellClick(id:any){
    console.log(id)
    this.router.navigate([`/userdetail/${id}`]);
  }
}

