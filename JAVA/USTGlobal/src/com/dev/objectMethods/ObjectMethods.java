package com.dev.objectMethods;

public class ObjectMethods {
	
	public static void main(String[] args) {
		Dog d=new Dog();
		Dog d1=new Dog();
		
		System.out.println(d1.getClass());
		System.out.println(d.getClass());
		
		Dog d3=d1;
		Dog d4=d1;
	}
	
}
