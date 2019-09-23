package com.dev.collections;

import java.util.HashMap;
import java.util.HashSet;

public class EmployeeDetails extends Employee implements Emp{
	
	static HashMap<String, Employee> hm=new HashMap<String,Employee>();
	public static void main(String[] args) {
		
	}

	@Override
	public void addEmployee() {
		
		System.out.println(hm);
	}

	@Override
	public void removeEmployee() {
		
		
	}

	@Override
	public void updateEmployee() {
		
		
	}

}
