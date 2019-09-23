import { Directive, ElementRef, HostBinding, HostListener } from "@angular/core";


@Directive({
    selector:'[appMydir]'
})
export class  MyDirectiveDirective {
    constructor(private elementRef:ElementRef){
        elementRef.nativeElement.style.background='red';
        elementRef.nativeElement.style.color='white';
        elementRef.nativeElement.style.padding='60px';
    }
    @HostBinding('style.background') background:string;
    @HostListener('mouseenter')
    mouseEnter(){
        this.background='blue';
    }
    @HostListener('mouseout')
    mouseLeave(){
        this.background='yellow';
    }
}