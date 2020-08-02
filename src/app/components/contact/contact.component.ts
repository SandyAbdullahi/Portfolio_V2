import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.sass'],
  encapsulation: ViewEncapsulation.None
})
export class ContactComponent implements OnInit {
    form:any = document.querySelector("contactForm");
    alert:boolean = false;
  constructor() { }

  ngOnInit() {

  }


  onsubmit(){
    console.log(this.form);

    if(this.form.valid){
      this.alert = true;
      console.log(this.form.value);
    }
  }
}
