package com.dev.constructors;

public class ConstructorExample1 {

	public ConstructorExample1(){
		System.out.println("This is no-arg constructor");
	}
	public ConstructorExample1(int i){
		System.out.println("This is int arg constructor");
	}
	public ConstructorExample1(double d){
		System.out.println("This is double arg constructor");
	}
	public ConstructorExample1(int i,double j){
		System.out.println("This is int and double arg constructor");
	}
	public ConstructorExample1(double d,String s){
		System.out.println("This is double and string arg constructor");
	}
	public ConstructorExample1(int i,double d,String s){
		System.out.println("This is int, double and string arg constructor");
	}
	
	public static void main(String[] args) {
		
		ConstructorExample1 ce=new ConstructorExample1();
		ConstructorExample1 ce1=new ConstructorExample1(10);
		ConstructorExample1 ce2=new ConstructorExample1(10.6);
		ConstructorExample1 ce3=new ConstructorExample1(7,2.3);
		ConstructorExample1 ce4=new ConstructorExample1(10.0,"suma");
		ConstructorExample1 ce5=new ConstructorExample1(20,10.0,"suma");

		
		System.out.println(ce);
		System.out.println(ce1);
		System.out.println(ce2);
		System.out.println(ce3);
		System.out.println(ce4);
		System.out.println(ce5);
	}

}
