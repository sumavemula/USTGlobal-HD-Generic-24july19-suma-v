import java.util.Scanner;
class WeekDays{
	public static void main(String[]args){
		Scanner sc=new Scanner(System.in);
		System.out.println("Enter day");
		int day=sc.nextInt();
		switch(day){
		
		case 1:
		case 2:
		case 3:
		case 4:
		case 5:
			System.out.println("weekdays");
			break;
		case 6:
		case 7:
			System.out.println("weekends");
			break;
		default :
			System.out.println("Invalid day");
			break;
		}
	}
}