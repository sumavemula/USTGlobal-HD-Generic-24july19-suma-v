import java.util.Scanner;
class Ass4{
	public static void main(String[]args){
		Scanner sc=new Scanner(System.in);
		System.out.println("enter a value");
		int n=sc.nextInt();
		int i,j,spaces=n-1,stars=1;
		for(i=1;i<=n;i++){
			for(j=1;j<=spaces;j++){
				System.out.print(" ");
			}
			for(int k=1;k<=stars;k++){
				System.out.print("*");
				
			}
			System.out.println();
			
			if(i<=n/2){
				spaces--;
				stars+=2;
				
			} else {
				spaces++;
				stars-=2;
			}
				
			
		}
		
	}
}