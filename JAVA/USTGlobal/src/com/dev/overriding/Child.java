package com.dev.overriding;

public class Child extends Parent{

	
	@Override
	public void m1() {	
		System.out.println("m1() in child class");
	}

	@Override
	public void m2() {
		System.out.println("m2() in child class");
	}

	public static void main(String[] args) {
		Child c=new Child();
		c.m1();
		c.m2();
		Parent p=new Parent();
		p.m1();
		p.m2();
		
	}

}
