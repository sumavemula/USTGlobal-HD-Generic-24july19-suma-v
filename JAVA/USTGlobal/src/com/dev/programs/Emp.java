package com.dev.programs;

import java.util.HashSet;

public class Emp implements Employee{

	HashSet<EmployeeDetails> hs=new HashSet<EmployeeDetails>();
	@Override
	public boolean addEmployee(EmployeeDetails e) {
		
		if(e!=null){
			hs.add(e);
			return true;
		}
		return false;
	}
	@Override
	public void getEmployee() {
		System.out.println(hs);
		
	}
	@Override
	public boolean removeEmployee(EmployeeDetails e) {
		if(e!=null){
			hs.remove(e);
			return true;
		}
		return false;
	}
	
	
}
