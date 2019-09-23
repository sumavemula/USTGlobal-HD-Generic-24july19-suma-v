package com.dev.encapsulation;

public class DogData {
	
	public static void main(String[] args) {
		Dog d1=new Dog();
		Dog d2=new Dog();
		Dog d3=new Dog();
		
		d1.setAge(1);
		d1.setBreed("dober man");
		d1.setColor("black");
		d1.setName("shiro");
		
		d2.setAge(2);
		d2.setBreed("German shepherd");
		d2.setColor("bbrown");
		d2.setName("spike");
		
		d3.setAge(3);
		d3.setBreed("German shepherd");
		d3.setColor("white");
		d3.setName("abby");
		
		Dog [] dogs={d1,d2,d3};
		for(int i=0;i<dogs.length;i++){
			System.out.println("age : "+dogs[i].getAge());
			System.out.println("breed : "+dogs[i].getBreed());
			System.out.println("color : "+dogs[i].getColor());
			System.out.println("****************");
		}
		//System.out.println(d3.equals(d4));
	}

	
}
