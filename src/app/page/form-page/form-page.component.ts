import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrls: ['./form-page.component.scss']
})
export class FormPageComponent implements OnInit {

  public myForm: FormGroup ;

  constructor(private router:Router, private formBuilder:FormBuilder) {
    this.myForm = this.formBuilder.group({
      id: [null, Validators.compose(
        [
          Validators.required,
          Validators.pattern(/^[0-9]\d*$/)
        ])],
      message: ['',Validators.compose([
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(300)


      ])]
    })
  }

  ngOnInit(): void {
  }

public onSubmit():void{
  console.log('coletado')


  const isValid = this.myForm.valid
  // console.log('formStatus esta:', formStatus)

  if(!isValid){
    return
  }

  console.log()
}


public onReturn():void{
  this.router.navigateByUrl('/')
}


public onChandId(id:number):void{
  const controller = this.myForm.get('id')

  controller?.setValue(id)

}

public getErrors(controlName:string, errorName : string): boolean{

  const controler = this.myForm.get(controlName)

  const error = controler?.getError(errorName)

  const touched  = controler?.touched

  const pristine = controler?.pristine

  return error && touched && !pristine  ? true : false

}



}
