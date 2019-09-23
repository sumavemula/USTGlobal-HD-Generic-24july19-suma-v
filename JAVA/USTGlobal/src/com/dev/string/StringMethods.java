package com.dev.string;

public class StringMethods {

	public static void main(String[] args) {
		String str="suma vemula";
		String str1="Suma Vemula";
		
		int len=str.length();
		System.out.println("output for length() "+len);
		
		char[] ch=str.toCharArray();
		System.out.println("output for toCharArray() "+ch[8]);
		
		char c=str.charAt(5);
		System.out.println("output for charAt() "+c);
		
		boolean b=str.equals(str1);
		System.out.println("output for equlas() "+b);
		
		str.equalsIgnoreCase(str1);
		System.out.println("output for equlasIgnoreCase() "+b);
		
		b=str.contains("sum");
		System.out.println("output for contains() "+b);
		
		str1=str.replace('a', 'o');
		System.out.println("output for replace() "+str1);
		
		int f=str.indexOf('v');
		System.out.println("output for index() "+f);
		
		str=str.toUpperCase();
		System.out.println("output for toLowerCase() "+str);
		
		str1=str1.toLowerCase();
		System.out.println("output for toUpperCase() "+str1);
		
		String a=str.substring(10);
		System.out.println(a);
		
		a=str1.substring(4, 11);		//ending index elements are excluded
		System.out.println(a);
	}

}
