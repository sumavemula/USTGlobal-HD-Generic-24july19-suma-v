package com.dev.collections;

import java.util.HashSet;

public class C2 {

	public static void main(String[] args) {

		HashSet<Employee> hs=new HashSet<Employee>();
		
		Employee e1=new Employee();
		e1.setId(100);
		e1.setName("suma");
		e1.setEmail("suma.v@gmail.com");
		e1.setPassword("suma");
		
		Employee e2=new Employee();
		e2.setId(101);
		e2.setName("vani");
		e2.setEmail("vani.r@gmail.com");
		e2.setPassword("rvani");
		
		Employee e3=new Employee();
		e3.setId(102);
		e3.setName("navya");
		e3.setEmail("navya.v@gmail.com");
		e3.setPassword("vnavya");
		
		boolean b=hs.add(e1);
		boolean b1=hs.add(e2);
		boolean b2=hs.add(e3);
		System.out.println("output of add(): "+b+" "+b1+" "+b2);
		System.out.println(hs);
		
		e3.setEmail("vemula.n@gmail.com");
		System.out.println(hs);
		
		System.out.println("size of hashset before remove(): "+hs.size());
		
		boolean b3=hs.remove(e3);
		System.out.println("output of remove(): "+b3);
		System.out.println(hs);
		
		System.out.println("size of hashset after remove(): "+hs.size());
		
	}

}
