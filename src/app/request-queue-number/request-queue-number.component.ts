import { Component, OnInit } from '@angular/core';
import { CustomerService } from 'src/app/customer.service';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {
 
  public dataCustomer: any = [];
  public allDataCustomer: any = [];
  public page: number = 1;
  public total: number = 0;

  constructor(
    private customerService: CustomerService
    ) { }

  ngOnInit(): void {
    this.getCustomerList();
  }

  getCustomerList(){
    const sort: string = 'asc';
    this.customerService.getCustomer(this.page, sort)
    .subscribe(
      (res:any) => {
        this.dataCustomer = res;
        console.log('dataCustomer', this.dataCustomer);
        
        this.allDataCustomer = res
        this.total = res.total;
      },
      err => console.log(err)
    );
  }

}
