import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { ProductState } from 'src/app/modules/ProductState';
import { CartServiceService } from 'src/app/service/cart-service.service';

interface Delivery {
  deliveryType: string;
}


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
    name: ['', Validators.required],
    personalData: false,
    phoneNumber: ['', Validators.required],
  });

  secondFormGroup = this._formBuilder.group({
  });

  thirdFormGroup = this._formBuilder.group({
    snils: ['', Validators.required],
  });

  fourthFormGroup = this._formBuilder.group({
    // delivery: ['', Validators.required],
  });

  deliveryControl = new FormControl<Delivery | null >(null, Validators.required);

  delivery: Delivery[] = [
    {deliveryType: 'Самовывоз'},
    {deliveryType: 'Доставка почтой'},]

  isLinear = false;
  totalCost: number = 0;
  sendingData: any;

  cartStorage: ProductState[];


  constructor(private _formBuilder: FormBuilder, private readonly cartService: CartServiceService) {
    this.cartStorage = [];
  }

  ngOnInit(): void {
    this.cartStorage = this.cartService.getCartItems();{
    this.countTotalCost();
    }
  }

  showSendingData(){
    let sendingData = [
      this.firstFormGroup.value.name,
      this.firstFormGroup.value.phoneNumber,
      this.cartStorage,
      this.thirdFormGroup.value,
      this.deliveryControl.value];
    this.sendingData = JSON.stringify(sendingData);
    console.log(this.sendingData)
  }

  MakeOrder(){
    console.log("sending...");
  }

  countTotalCost(){
    this.cartStorage.forEach(product => {
      this.totalCost += (product.product.price * product.count);
    });
  }

}
