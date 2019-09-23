package com.dev.collections;

import java.util.ArrayList;
import java.util.TreeSet;

public class C5 {

	public static void main(String[] args) {

		TreeSet<Employee> ts=new TreeSet<Employee>();
		
		
		Employee e1=new Employee();
		e1.setId(106);
		e1.setName("suma");
		e1.setEmail("suma.v@gmail.com");
		e1.setPassword("suma");
		
		Employee e2=new Employee();
		e2.setId(107);
		e2.setName("vani");
		e2.setEmail("vani.r@gmail.com");
		e2.setPassword("rvani");
		
		Employee e3=new Employee();
		e3.setId(108);
		e3.setName("navya");
		e3.setEmail("navya.v@gmail.com");
		e3.setPassword("vnavya");
		
		ts.add(e1);
		ts.add(e2);
		ts.add(e3);
		System.out.println(ts);
	}

}
