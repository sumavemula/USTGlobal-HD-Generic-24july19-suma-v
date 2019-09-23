package com.dev.abstraction;

public class Lion extends Tiger{

	void eat() {
		System.out.println("eat() in Tiger");
		
	}

	@Override
	void sleep() {
		System.out.println("sleep() in Tiger class");
		
	}
	@Override
	void hunt() {
		System.out.println("hunt() in Lion class ");
		
	}

}
