package com.dev.collections;

import java.util.HashMap;

import com.dev.encapsulation.Dog;

public class C3 {

	public static void main(String[] args) {
		
		HashMap<String, Dog> hm=new HashMap<String, Dog>();
		
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
		
		hm.put("1", d);
		hm.put("2", d1);
		hm.put("3", d2);
		System.out.println(hm);
		
		Dog f=hm.remove("2");
		System.out.println(f);
		System.out.println(hm);
		
		System.out.println("Output of containsKey(): "+hm.containsKey("1"));
		
		System.out.println("Output of containsValue(): "+hm.containsValue(d2));
	}

}
