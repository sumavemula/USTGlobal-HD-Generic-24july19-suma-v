package com.dev.programs;

public class Test {
	
	public static void main(String[] args) {
		
		int count=0;
		String s="Good friend is needed";
		String str=s.toLowerCase();
		
		for(int i=0;i<str.length();i++){
			if(str.charAt(i)=='a'||str.charAt(i)=='e'||str.charAt(i)=='i'||str.charAt(i)=='o'||str.charAt(i)=='u'){
				
				count++;
			}
		}
		System.out.println(count);
}
}
