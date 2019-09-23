package com.dev.collections;

import java.util.TreeSet;

import com.dev.encapsulation.Dog;

public class C4 {

	
	public static void main(String[] args) {
		
		TreeSet<Dog> ts=new TreeSet<Dog>();
		
		Dog d=new Dog();
		d.setAge(7);
		d.setBreed("dabur man");
		d.setColor("black");
		d.setName("shiro");
		
		Dog d1=new Dog();
		d1.setAge(6);
		d1.setBreed("Dalmation");
		d1.setColor("Black&white");
		d1.setName("Ronnie");
		
		Dog d2=new Dog();
		d2.setAge(5);
		d2.setBreed("Dalmation");
		d2.setColor("brown");
		
		ts.add(d);
		ts.add(d1);
		ts.add(d2);
		System.out.println(ts);
	}

}
