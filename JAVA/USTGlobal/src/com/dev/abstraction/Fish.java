package com.dev.abstraction;

public class Fish extends Animal{

	@Override
	void eat() {
		System.out.println("eat() in Fish class");
		
	}

	@Override
	void sleep() {
		System.out.println("sleep() in Fish class");
		
	}
	void swim(){
		System.out.println("swim() in Fish class");
	}

	@Override
	void hunt() {
		System.out.println("hunt() in Fish class");
		
	}
}
