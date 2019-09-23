package com.dev.methods;

public class MethodExample {
	
	public static int j;
	public static void main(String[] args) {
		j =calArea(6);
		System.out.println(j);
		MethodExample m=new MethodExample();
		j=m.calRect(7, 8);
		System.out.println(j);
	}
	public static int calArea(int side){
		j =side*side;
		return j;
	}
	public  int calRect(int len,int width){
		j =len*width;
		return j;
	}
}
