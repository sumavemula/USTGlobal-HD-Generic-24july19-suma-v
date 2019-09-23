package com.dev.exception;

public class CustomException extends Exception{

	public CustomException(){
		System.out.println("Custom Exception");
	}
	public CustomException(int i){
		System.out.println("Custom Exception for integer");
	}
	public CustomException(String s){
		System.out.println("Custom Exception for String");
	}
	public String NegativeArraySizeException(){
		
		 return "NegativeArraySizeException";
	}
	public String ArithmetiicException(){
		
		 return "ArithmetiicException";
	}
}
