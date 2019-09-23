package com.dev.arrays;

import java.util.*;
public class Array2 {

	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter index");
		int index=sc.nextInt();
		int arr[]={10,20,30,40,50,60};
		if(index<arr.length){
			System.out.println("index is valid");
			for( int i=0;i<=index;i++){
				System.out.println(arr[i]);
			}
		} else{
			System.out.println("Index is not valid");
		}
	}

}
