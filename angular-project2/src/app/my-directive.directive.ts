import { Directive, ElementRef, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appMyDirective]'
})
export class MyDirectiveDirective {

  constructor(private elementRef: ElementRef) {
    elementRef.nativeElement.style.background  = 'cyan';
    elementRef.nativeElement.style.color = 'white';
    elementRef.nativeElement.style.padding = '60px';
   }

@HostBinding('style.background') background : string;
@HostListener('mouseenter')
mouseEnter(){
  this.background ='skyblue';
  // this.elementRef.nativeElement.style.background  = 'red';
  // this.elementRef.nativeElement.style.color  = 'white';
  // this.elementRef.nativeElement.style.fontSize  = '30px';
}
@HostListener('mouseleave')
mouseLeave(){
  this.background ='purple';
  // this.elementRef.nativeElement.style.background  = 'green';
  // this.elementRef.nativeElement.style.color  = 'white';
  // this.elementRef.nativeElement.style.fontSize  = '30px';

}

}
