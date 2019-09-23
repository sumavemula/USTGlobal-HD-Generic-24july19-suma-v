class RelationalOperator{
	public static void main(String[]args){
	
		int i=10,j=20;
		char c='A';
		byte d=66;
		boolean b=i==j;
		System.out.println("For == "+b);
		b=i!=j;
		System.out.println("For != "+b);
		b=i<=j;
		System.out.println("For <= "+b);
		b=i>=j;
		System.out.println("For >= "+b);
		b=i<j;
		System.out.println("For < "+b);
		b=i>j;
		System.out.println("For > "+b);
		System.out.println("******************");
		b=d==c;
		System.out.println("For == "+b);
		b=d!=c;
		System.out.println("For != "+b);
		b=d<=c;
		System.out.println("For <= "+b);
		b=d>=c;
		System.out.println("For >= "+b);
		b=d<c;
		System.out.println("For < "+b);
		b=d>c;
		System.out.println("For > "+b);
	}

}