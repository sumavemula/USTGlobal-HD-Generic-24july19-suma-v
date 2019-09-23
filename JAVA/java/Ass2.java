import java.util.Scanner;
class Ass2{
	public static void main(String[]args){
	Scanner sc=new Scanner(System.in);
		System.out.println("Enter n value");
		int n=sc.nextInt();
		int c=65,s=97;
		for(int i=1;i<=n;i++)
		{
			for(int j=1;j<=i;j++)
			{
				System.out.print((char)(c));
				System.out.print((char)(s)+" ");
				c++;
				s++;
			}
			System.out.println();
		}
	}
}