import { Directive,ElementRef,HostListener } from '@angular/core';
import { element } from 'protractor';

@Directive({
  selector: '[RedColor]'
})
export class RedColorDirective {

  constructor(element : ElementRef) { 
    element.nativeElement.style.color="Red";
  }
  @HostListener('click') dosome(){
    alert('dosome is called');
  }

  @HostListener('mouseenter') domouse(){
    alert('dosome is called');
  }
    
}
