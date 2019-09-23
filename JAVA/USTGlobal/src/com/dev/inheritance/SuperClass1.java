package com.dev.inheritance;

public class SuperClass1 {

	public SuperClass1(){
		System.out.println("This is no-arg constructor");
	}
	public SuperClass1(int i){
		System.out.println("This is int arg constructor");
	}
	public SuperClass1(double d){
		System.out.println("This is double arg constructor");
	}
	public SuperClass1(int i,double j){
		System.out.println("This is int and double arg constructor");
	}
	public SuperClass1(double d,String s){
		System.out.println("This is double and string arg constructor");
	}
	public SuperClass1(int i,double d,String s){
		System.out.println("This is int, double and string arg constructor");
	}
}
