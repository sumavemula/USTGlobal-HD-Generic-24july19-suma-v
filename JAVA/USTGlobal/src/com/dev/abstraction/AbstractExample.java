package com.dev.abstraction;

public class AbstractExample extends Abstraction{
	
	public AbstractExample(){
		System.out.println("const of AbstractExample class");
	}
	@Override
	void display() {
		
		System.out.println("this is implemented abstract method ");
	}
	public static void main(String[]args){
		
		AbstractExample ae=new AbstractExample();
		ae.display();
		ae.show();
	}

}
