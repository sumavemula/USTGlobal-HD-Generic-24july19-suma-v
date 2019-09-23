package com.dev.collections;

import java.util.ArrayList;

import com.dev.encapsulation.Dog;

public class C6 {

	public static void main(String[] args) {
		
		ArrayList<Dog> al=new ArrayList<Dog>(2);
		
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
		
		al.add(d);
		al.add(d1);
		al.add(d2);
		
		System.out.println(al);
		
		al.trimToSize();
		
		System.out.println("size of ArrayList after trimToSize():"+al.size());
		
	}

}
