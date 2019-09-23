package com.dev.exception;

public class ExceptionExample extends CustomException{

	public static void main(String[] args) throws Exception, CustomException{

		try{
			s();
			System.out.println("No exception for s()");
			int res=divide(10,0);
			System.out.println("no exception for divide()");
			System.out.println(res);
		}catch(NegativeArraySizeException e){
			System.err.println("exception caught in catch block");
			System.err.println("getMessage(): "+e.getMessage());
			e.printStackTrace();
		}catch(ArithmeticException e){
			System.err.println("exception caught in catch block");
			System.err.println("getMessage(): "+e.getMessage());
		}finally{
			System.out.println("finally block");
		}
		
	}
	public static void s(){
		try{
			StringBuffer sb=new StringBuffer(-1);	//NegativeArraySizeException
		}catch(Exception e){
			System.out.println("Exception occured");
		}
			
	}
	public static int divide(int i,int j){
		int res=i/j;
		System.out.println(res);
		return 1;
	}
	
}
	