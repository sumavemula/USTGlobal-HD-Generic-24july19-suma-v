package com.dev.encapsulation;

public class StudentData {
	
	public static void main(String[] args) {
		Student s=new Student();
		s.setRegno(100);
		s.setName("suma");
		s.setEmail("suma.v@gmail.com");
		s.setPassword("suma");
		
		int regno=s.getRegno();
		System.out.println("Regno: "+regno);
		System.out.println("Name: "+s.getName());
		System.out.println("email: "+s.getEmail());
		System.out.println("*************");
	}
}
