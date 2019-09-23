package com.dev.overriding;

public class ArithmeticOperations {
	static ArithmeticOperations ao=new ArithmeticOperations();
	public int add(int a,int b,int d,int e){
		int c=a+b+d+e;
		System.out.println("Addition of four numbers is  "+c);
		return 1;
	}
	public int add(int a,int b){
		int c=a+b;
		System.out.println("Addition of two numbers is  "+c);
		return 1;
	}
	public int add(int a,int b,int d){
		int c=a+b+d;
		System.out.println("Addition of three numbers is  "+c);
		return 1;
	}
	public float sub(float a,float b){
		float c=a-b;
		System.out.println("substraction of two numbers is  "+c);
		return 1.0f;
	}
	public int sub(int a,int b,int d){
		int c=a-b-d;
		System.out.println("substraction of three numbers is  "+c);
		return 1;
	}
	public int sub(int a,int b,int d,int e){
		int c=a-b-d-e;
		System.out.println("substraction of four numbers is  "+c);
		return 1;
	}
	public int mul(int a,int b){
		int c=a*b;
		System.out.println("multiplication of two numbers is  "+c);
		return 1;
	}
	public int mul(int a,int b,int d){
		int c=a*b*d;
		System.out.println("multiplication of two numbers is  "+c);
		return 1;
	}
	public int mul(int a,int b,int d,int e){
		int c=a*b*d*e;
		System.out.println("multiplication of two numbers is  "+c);
		return 1;
	}
	public float div(int a,int b){
		float c=a/b;
		System.out.println("division of two numbers is  "+c);
		return 2.0f;
	}
	public float div(int a,int b,int d){
		float c=a/b/d;
		System.out.println("division of three numbers is  "+c);
		return 2.0f;
	}
	public float div(int a,int b,int d,int e){
		float c=a/b/d/e;
		System.out.println("division of three numbers is  "+c);
		return 2.0f;
	}
	public static void main(String[] args) {
		
		ao.add(10, 20);
		ao.add(40, 30, 50);
		ao.add(5, 6, 7, 8);
		
		ao.sub(20.5f, 5.3f);
		ao.sub(60, 20, 5);
		ao.sub(10, 8, 6, 2);
		
		ao.mul(8, 7);
		ao.mul(9, 5, 6);
		ao.mul(8, 12, 3, 2);
		
		ao.div(50, 5);
		ao.div(50, 10, 2);
		ao.div(100, 20, 10, 2);
		
		
	}

}
