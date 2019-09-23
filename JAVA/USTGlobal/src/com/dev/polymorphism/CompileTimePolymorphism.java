package com.dev.polymorphism;

public class CompileTimePolymorphism {
	
	static CompileTimePolymorphism cp=new CompileTimePolymorphism();
	public int add(int i,int j){
		int k=i+j;
		System.out.println("addition of two numbers "+k);
		return 1;
	}
	public int add(int i,int j,int l){
		int k=i+j+l;
		System.out.println("addition of three numbers "+k);
		return 1;
	}
	public int add(int i,int j,int b,int a){
		int k=i+j+a+b;
		System.out.println("addition of four numbers "+k);
		return 1;
	}
	public static void main(String[] args) {
		
		cp.add(10, 30);
		cp.add(23, 34, 45);
		cp.add(45, 67, 54, 21);
	}

}
