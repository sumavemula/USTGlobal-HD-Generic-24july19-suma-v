package com.dev.encapsulation;

public class PetData {
	
	public static void main(String[] args) {
		Pets p=new Pets();
		Pets p1=new Pets();
		Pets p2=new Pets();
		
		p.setAge(2);
		p.setName("dog");
		p.setColor("brown");
		p.setBreed("German shepherd");
		
		p1.setAge(1);
		p1.setName("cat");
		p1.setColor("white");
		p1.setBreed("Persian Cat");
		
		p2.setAge(1);
		p2.setName("rabbit");
		p2.setColor("white");
		p2.setBreed("");
		
		Pets[] pet={p,p1,p2};
		for(int i=0;i<pet.length;i++){
			System.out.println("age : "+pet[i].getAge());
			System.out.println("breed : "+pet[i].getBreed());
			System.out.println("name : "+pet[i].getName());
			System.out.println("color : "+pet[i].getColor());
			System.out.println("*****************");
			
		}
	}
}
