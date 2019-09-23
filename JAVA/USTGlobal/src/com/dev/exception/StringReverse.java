package com.dev.exception;

public class StringReverse {

	public static void main(String[] args) {

		String str="Hello Welcome to java class";
		String s="";
		System.out.println("Original String is : "+str);
		for(int i=str.length()-1;i>=0;i--){
			s=s+str.charAt(i);
		}
		System.out.println("Reverse of a String is : "+s);
	}

}
