package com.dev.inheritance;

public class SubClass1 extends SuperClass1{

	public SubClass1(){
		super();
	}
	public SubClass1(int i){
		super(10.0);
	}
	public SubClass1(double d){
		super(10);
	}
	public SubClass1(String s){
		super(10,2.3,"suma");
	}
	public static void main(String[] args) {
		SubClass1 s=new SubClass1();
		SubClass1 s1=new SubClass1(10);
		SubClass1 s2=new SubClass1(10.0);
		SubClass1 s3=new SubClass1("suma");
		
	}

}
