package com.dev.string;

public class StringExp1 {

	public static void main(String[] args) {
		
		String str="UST Global";
		String str1="Ust Global";
		
		int len=str.length();
		System.out.println("output for length() "+len);
		
		char[] ch=str.toCharArray();
		System.out.println("output for toCharArray() "+ch[7]);
		
		char c=str.charAt(5);
		System.out.println("output for charAt() "+c);
		
		boolean b=str.equals(str1);
		System.out.println("output for equlas() "+b);
		
		boolean e=str.equalsIgnoreCase(str1);
		System.out.println("output for equlasIgnoreCase() "+e);
		
		
	}

}
