import { Component } from '@angular/core';

@Component({
  selector: 'portfolio-app',
  templateUrl: './contact-form.template.html'
})

export class AppContactForm
{
  onSubmit(f){
    console.log(f);
  }
}