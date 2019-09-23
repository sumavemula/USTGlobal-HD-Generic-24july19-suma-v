package com.dev.exception;

public class ReverseArray {

	
	public static void main(String[] args) {
		
		int[] arr={10,4,6,36,92,45,38};
		for(int i=0;i<=arr.length-1;i++){
			System.out.print(" "+arr[i]);
		}
		System.out.println();
		for(int i=arr.length-1;i>=0;i--){
			System.out.print(" "+arr[i]);
		}
	}

}
