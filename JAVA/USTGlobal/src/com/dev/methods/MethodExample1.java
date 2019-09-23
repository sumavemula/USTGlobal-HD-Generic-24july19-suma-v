package com.dev.methods;

public class MethodExample1 {

	public static void main(String[] args) {
		int area=MethodExample.calArea(10);
		System.out.println("Area is  "+area);
		MethodExample m=new MethodExample();
		area=m.calRect(7,6);
		System.out.println("Area of rectangle is  "+area);
	}

}
