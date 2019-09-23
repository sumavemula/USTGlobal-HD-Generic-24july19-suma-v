import java.util.Scanner;
class Ass5{
	public static void main(String[]args)
	{
		Scanner sc=new Scanner(System.in);
		System.out.println("enter a value");
		int n=sc.nextInt();
		int i,j,spaces=20,stars=1;
		int c=65;
		for(i=1;i<=n;i++)
		{
			for(j=1;j<=spaces;j++)
			{
				System.out.print(" ");	
			}
			if(i<=n/2){
			for(int k=1;k<=stars;k++)
			{
				System.out.print((char)c);
				c++;
				
			}
			
			spaces--;
			stars+=2;
			System.out.println();
			}
				else{
					
					int l=1;
					for(int k=1;k<=stars;k++)
					{
						System.out.print(l);
						l++;
					}
					
					spaces++;
					stars-=2;
					System.out.println();
				}
			
		}
		
	}
}