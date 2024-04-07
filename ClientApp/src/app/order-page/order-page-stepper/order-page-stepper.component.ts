import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductState } from 'src/app/modules/ProductState';
import { CartServiceService } from 'src/app/service/cart-service.service';

@Component({
  selector: 'app-order-page-stepper',
  templateUrl: './order-page-stepper.component.html',
  styleUrls: ['./order-page-stepper.component.css'],
  providers: [
    {
      provide: STEPPER_GLOBAL_OPTIONS,
      useValue: {showError: true},
    },
  ],
})
export class OrderPageStepperComponent implements OnInit {

  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
    personalData: false,
  });
  secondFormGroup = this._formBuilder.group({
    //secondCtrl: ['', Validators.required],
  });

  thirdFormGroup = this._formBuilder.group({
    thirdCtrl: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    //fourthCtrl: ['', Validators.required],
  });

  selected = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  selectFormControl = new FormControl('valid', [Validators.required, Validators.pattern('valid')]);

  //matcher = new MyErrorStateMatcher();

  isLinear = true;
  totalCost: number = 0;

  cartStorage: ProductState[];


  constructor(private _formBuilder: FormBuilder,private readonly cartService: CartServiceService) {
    this.cartStorage = [];
  }

  ngOnInit(): void {
    this.cartStorage = this.cartService.getCartItems();{
    this.countTotalCost();
    }
  }

  MakeOrder(){}

  countTotalCost(){
    this.cartStorage.forEach(product => {
      this.totalCost += product.product.price;
    });
  }

  onClickShow(){
    console.log(this.firstFormGroup);
  }


}
