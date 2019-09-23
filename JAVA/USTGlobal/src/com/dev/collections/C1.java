package com.dev.collections;

import java.util.HashSet;

import com.dev.encapsulation.Dog;

public class C1 {
	
	public static void main(String[] args) {

		HashSet<Dog> hs= new HashSet<Dog>();
		Dog d=new Dog();
		d.setAge(2);
		d.setBreed("dabur man");
		d.setColor("black");
		d.setName("shiro");
		
		Dog d1=new Dog();
		d1.setAge(3);
		d1.setBreed("Dalmation");
		d1.setColor("Black&white");
		d1.setName("Ronnie");
		
		Dog d2=new Dog();
		d2.setAge(1);
		d2.setBreed("Dalmation");
		d2.setColor("brown");
		d2.setName("nikkie");
		
		d1.setAge(4);
		
		boolean b=hs.add(d);
		boolean b1=hs.add(d1);
		boolean b3=hs.add(d2);
		
		for (Dog dog : hs) {
			
			System.out.println(dog);
		}
		
//		System.out.println("output of add(): "+b+" "+b1);
//		System.out.println(hs);
//		
//		System.out.println("Size of HashSet hs: "+hs.size());
//		
//		boolean b2=hs.remove(d);
//		System.out.println("output of remove(): "+b+" "+b3);
//		System.out.println(hs);
//		
//		System.out.println("output of contains : "+hs.contains(d));
//		
//		System.out.println("Size of HashSet hs: "+hs.size());
//		
//		hs.clear();
//		System.out.println("Size of HashSet hs after clear(): "+hs.size());

	}

}
