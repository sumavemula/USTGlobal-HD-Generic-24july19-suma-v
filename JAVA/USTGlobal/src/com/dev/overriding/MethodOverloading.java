package com.dev.overriding;

public class MethodOverloading {

	public void print(){
		System.out.println("This is print method with no-arg");
	}
	public int print(int i){
		System.out.println("This is print method with int arg");
		return 1;
	}
	public String print(String s){
		System.out.println("This is print method with String arg");
		return "a";
	}
	public static void main(String[] args) {
		
		MethodOverloading mo=new MethodOverloading();
	}

}
