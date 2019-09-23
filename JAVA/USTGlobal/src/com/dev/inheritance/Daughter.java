package com.dev.inheritance;

public class Daughter extends Father{

	static Daughter d=new Daughter();
	public static void main(String[] args) {
		
		d.printName();
	}
	@Override
	public void printName(){
	String name="navya";
	System.out.println(name+" "+d.name+ " "+d.lastName);
	}

}
