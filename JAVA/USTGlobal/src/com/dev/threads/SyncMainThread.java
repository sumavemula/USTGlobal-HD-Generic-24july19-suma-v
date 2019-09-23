package com.dev.threads;

public class SyncMainThread {

	public static void main(String[] args) throws InterruptedException  {
		
		System.out.println("SyncMain Thread started......");
		
		Printer p=new Printer();
		
		Thread4 t4=new Thread4(p);
		t4.start();
		//t4.join();
		new Thread5(p).start();
//		new Thread4(p).start();
//		new Thread5(p).start();
//		for (int i = 0; i <=10; i++) {
//			System.out.println("i= "+i);
//		}
		Printer1 p1=new Printer1();
		Thread6 t6=new Thread6(p1);
		t6.start();
		t6.join();
		System.out.println("SyncMain Thread terminated......");
	}

}
