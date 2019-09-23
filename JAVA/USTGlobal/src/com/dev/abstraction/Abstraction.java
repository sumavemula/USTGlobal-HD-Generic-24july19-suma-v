package com.dev.abstraction;

public abstract class Abstraction {
	
	public Abstraction(){
		System.out.println("const in Abstraction class");
	}
	abstract void display();
	public void show(){
		System.out.println("concrete method of abstract class");
	}
}
