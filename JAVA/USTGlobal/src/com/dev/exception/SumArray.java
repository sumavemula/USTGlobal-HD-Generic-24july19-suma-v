package com.dev.exception;

public class SumArray {

	public static void main(String[] args) {

		int[] arr={8,5,12,34,23,9,6};
		int mid=arr.length/2;
		int sec=arr.length-2;
		int sum=arr[0]+arr[mid]+arr[sec];
		System.out.println("Sum of first, middle and second last elemnt is: "+sum);
	}

}
