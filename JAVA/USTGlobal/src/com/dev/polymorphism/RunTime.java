package com.dev.polymorphism;
class RunTime extends RunTimePolymorphysm{
	@Override
	public void m1(){
		System.out.println("m1() in subclass with zero arguments");
	}
	@Override
	public void m2(int i){
		System.out.println("m2() in subclass with int arguments");
	}
	public static void main(String[] args) {
		 
		RunTimePolymorphysm r=new RunTime();
		r.m1();
		r.m2(10);
		RunTimePolymorphysm rp=new RunTimePolymorphysm();
		rp.m1();
		rp.m2(10);
	}
}