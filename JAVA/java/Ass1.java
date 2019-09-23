import java.util.Scanner;
class Ass1{
	public static void main(String[]args){
	Scanner sc=new Scanner(System.in);
		System.out.println("Enter day");
		int day=sc.nextInt();
		String s="suma";
		switch(day){
			
			case 1:
			case 2:
			case 3:
			case 4:
			case 5:		
						System.out.println(s);
						break;
			case 6:	
			case 7:   for(int i=0;i<5;i++){
						System.out.println(s);
				}
					break;
			default : System.out.println("invalid day");
		}
	}
}