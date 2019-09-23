package com.dev.threads;

public class Thread3Class implements Runnable{

	@Override
	public void run() {
		
		System.out.println("T3 thread started.. ");
		System.out.println("Thread3 prints the value of i");

		for(int k=1;k<=10;k++){
			System.out.println("k= "+k);
		}
		System.out.println("T3 thread terminated");
	}

}
