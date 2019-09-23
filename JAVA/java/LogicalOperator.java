class LogicalOperator{
	public static void main(String[]args){
		
		boolean b=true;
		boolean b1=false;
		boolean b2= b&&b1;
		System.out.println("for && "+b2);
		b2= b||b1;
		System.out.println("for || "+b2);
		b2=!(b||b1);
		System.out.println("for ! "+b2);
		
	}
}
