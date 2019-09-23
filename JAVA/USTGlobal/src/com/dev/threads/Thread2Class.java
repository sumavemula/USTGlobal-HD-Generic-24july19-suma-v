package com.dev.threads;

public class Thread2Class extends Thread{
	
	@Override
	public void run() {
		
		System.out.println("T2 thread started.. ");
		System.out.println("Thread2 prints the value of i");
		
		for(int j=1;j<=10;j++){
			System.out.println("j= "+j);
		}
		System.out.println("T2 thread terminated");
	}
	public static void main(String[] args) {

		//new T2().start();
	}

}
