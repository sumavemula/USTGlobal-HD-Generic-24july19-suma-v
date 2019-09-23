package com.dev.constructors;

public class ConstructorExample {
	public ConstructorExample(int i){
		System.out.println("This is const with int arg");
	}
	public ConstructorExample(){
		System.out.println("this is no-arg constructor");
	}
	public ConstructorExample(String s){
		System.out.println("This is const with String arg");
	}
	public ConstructorExample(String s,int i){
		System.out.println("This is const with String and int arg");
	}
	public ConstructorExample(int i,String s){
		System.out.println("This is const with int and String arg");
	}
	
	public static void main(String[] args) {
		ConstructorExample c=new ConstructorExample();
		ConstructorExample c1=new ConstructorExample(5);
		ConstructorExample c2=new ConstructorExample("suma");
		ConstructorExample c3=new ConstructorExample("suma",10);
		ConstructorExample c4=new ConstructorExample(10,"suma");
	}

}
