package com.dev.arrays;

public class CreatingArrays {

	public static void main(String[] args) {
		int []intArr;			//declaring an array
		
		intArr = new int[5];	
		intArr[0]=10;
		intArr[1]=20;
		intArr[2]=30;
		intArr[3]=40;
		intArr[4]=50;
		
		int res=intArr[1]*3;
		System.out.println(res);
		res=intArr[0]+3;
		System.out.println(res);
		res=intArr[2]-3;
		System.out.println(res);
		res=intArr[3]/3;
		System.out.println(res);
		res=intArr[4]%3;
		System.out.println(res);
		System.out.println("length of an array " +intArr.length);	
		
		byte byteArr[]= {11,12,13,14,15};	//creating and initialization in one line
		
		System.out.println(byteArr[5]);       //exception bcz the size of an array is 4
		
		char[] charArr=new char[5];			//creating an array
		charArr[0]='s';
		charArr[1]='u';
		charArr[2]='m';
		charArr[3]='a';
		charArr[4]='v';
		
		
		
	}

}
