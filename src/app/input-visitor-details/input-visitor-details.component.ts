import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerService } from 'src/app/customer.service';
// import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-input-visitor-details',
  templateUrl: './input-visitor-details.component.html',
  styleUrls: ['./input-visitor-details.component.css']
})
export class InputVisitorDetailsComponent implements OnInit {
  public formInput: FormGroup ;
  public dataCustomer: any = [];
  public allDataCustomer: any = [];
  public page: number = 1;
  public total: number = 0;

  constructor( 
    private fb: FormBuilder,
    private router: Router,
    private customerService: CustomerService,
    // private toastr: ToastrService
    ) { 

      this.formInput = this.fb.group({
        customerID: ['', Validators.required],
        customerName: ['', Validators.required],
        contact: ['', Validators.required],
        pic: ['', Validators.required],
        city: ['', Validators.required],
        region: ['', Validators.required],
        address: ['', Validators.required],
        address2:['', Validators.required],
        province:['', Validators.required],
        remark:['', Validators.required],
        kuota:['', Validators.required],
        npwp:['', Validators.required]
      });
    }

  ngOnInit(): void {
  }


  addData() {
    const params = {
      customerID: this.formInput.controls.customerID.value,
      customerName: this.formInput.controls.customerName.value,
      contact: this.formInput.controls.contact.value,
      pic: this.formInput.controls.pic.value,
      city: this.formInput.controls.city.value,
      region: this.formInput.controls.region.value,
      address: this.formInput.controls.address.value,
      address2: this.formInput.controls.address2.value,
      province: this.formInput.controls.province.value,
      remark: this.formInput.controls.remark.value,
      kuota: this.formInput.controls.kuota.value,
      npwp: this.formInput.controls.npwp.value,
    }
    this.customerService.addCustomer(params)
    .subscribe(
      (res:any) => {
        // this.toastr.success('Data save successfully', 'Success');
        this.back();
      },
      err => console.log(err)
    );
  }

  back() {
    this.router.navigateByUrl('/visitor-list');
  }
}
