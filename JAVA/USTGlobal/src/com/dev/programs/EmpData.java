package com.dev.programs;

public class EmpData {

	public static void main(String[] args) {
		
		EmployeeDetails e=new EmployeeDetails();
		e.setId(100);
		e.setName("suma");
		e.setEmail("suma.v@gmail.com");
		
		Emp e1=new Emp();
		boolean b=e1.addEmployee(e);
		System.out.println(b);
		
		e1.getEmployee();
		boolean b1=e1.removeEmployee(e);
		System.out.println(b1);
		
	}

}
