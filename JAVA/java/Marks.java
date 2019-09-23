import java.util.Scanner;
class Marks{
	public static void main(String[]args){
		
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter marks");
		int marks=sc.nextInt();
		if(marks<=100&&marks>=91)
		{
			System.out.println("A");
		}
		else if(marks<=90&&marks>=81)
		{
			System.out.println("B");
		}
		else if(marks<=80&&marks>=71)
		{
			System.out.println("C");
		}
		else if(marks<=70&&marks>=61)
		{
			System.out.println("D");
		}
		else if(marks<=60&&marks>=51)
		{
			System.out.println("E");
		}
		else if(marks<=50&&marks>=41)
		{
			System.out.println("RETEST");
		}
		else if(marks<1){
			System.out.println("invalid marks");
		}
		else if(marks<=40){
			System.out.println("FAIL");
		}
		else{
			System.out.println("invalid marks");
		}
	}
}