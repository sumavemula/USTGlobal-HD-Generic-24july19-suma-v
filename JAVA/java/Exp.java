class Exp{
	public static void main(String[]args){
		
		int i=20,j=50;
		int k=j%i;
		System.out.println("Arithmetic operator "+k);
		i+=5;
		System.out.println("Assignment operator "+i);
		++i;
		System.out.println("Pre increment operator "+i);
		i++;
		System.out.println("post increment operator "+i);
		--j;
		System.out.println("pre decrement operator "+j);
		j--;
		System.out.println("post decrement operator "+j);
		boolean b2=i>j;
		System.out.println("Relational operator >= "+b2);
		boolean b= true;
		boolean b1=true;
		b2=b&&b1;
		System.out.println("Logical operator "+b2);
		int a=5,d=6;
		int c=a & d;
		System.out.println(c);
		
		
	}
}