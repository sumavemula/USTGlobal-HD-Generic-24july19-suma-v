package com.dev.threads;

public class MainThread {


	public static void main(String[] args) {

		System.out.println("main thread started....");
		System.out.println("Main Thread prints the value of i");
		Thread2Class t2=new Thread2Class();
		t2.start();
		t2.setName("Thread T2");
		
		t2.setPriority(3);
		//new Thread(new T3()).start();
		Thread3Class t=new Thread3Class(); 
		Thread t1=new Thread(t);
		t1.start();
		
		t1.setPriority(8);
		Thread.currentThread().setName("Main Thread");
		
		for(int i=1;i<=10;i++){
			System.out.println("i= "+i);
		}
		System.out.println("Thread Name2: "+t2.getName());
		System.out.println("Thread Name1: "+Thread.currentThread().getName());
		System.out.println("Thread2 Id: "+t2.getId() );
		System.out.println("Thread3 id: "+t1.getId());
		System.out.println("Main Thread id: "+Thread.currentThread().getId());
		System.out.println("Thread2 Priority: "+t2.getPriority());
		System.out.println("Thread3 Priority: "+t1.getPriority());
		System.out.println("main thread terminated....");
	}

}
