package com.dev.lambdaexp;

public class Test {

	public static void main(String[] args) {
		
		FuncInt f = (int i)->{
			for(int j=1;j<=i;j++){
				System.out.println(j);
			}
		};
		FuncInt1 f1 = () ->{
			try{
				int i=10/5;
				System.out.println(i);
			}catch(Exception e){
				System.out.println("Exception...");
			}
		};
		f.printVal(5);
		f1.m1();
	}

}
