package com.dev.threads;

public class Thread6 extends Thread{

	Printer1 p;

	public Thread6(Printer1 pref){
		p=pref;
	}

	@Override
	public void run() {
		try {
			Thread.currentThread().sleep(500);
		} catch (InterruptedException e) {
			e.printStackTrace();
		}
		p.printValue(10, "thread6");
	}

}
