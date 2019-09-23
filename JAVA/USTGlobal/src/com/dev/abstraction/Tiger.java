package com.dev.abstraction;

public abstract  class Tiger extends Animal{

	@Override
	void eat() {
		System.out.println("eat() in Tiger");
		
	}

	@Override
	void sleep() {
		System.out.println("sleep() in Tiger class");
		
	}
	
}
