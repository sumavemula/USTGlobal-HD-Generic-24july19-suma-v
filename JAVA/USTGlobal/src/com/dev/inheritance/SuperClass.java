package com.dev.inheritance;

public class SuperClass {

	public SuperClass(int i){
		System.out.println("This is const with int arg");
	}
	public SuperClass(){
		System.out.println("this is no-arg constructor");
	}
	public SuperClass(String s){
		System.out.println("This is const with String arg");
	}
	public SuperClass(String s,int i){
		System.out.println("This is const with String and int arg");
	}
	public SuperClass(int i,String s){
		System.out.println("This is const with int and String arg");
	}
	
}
