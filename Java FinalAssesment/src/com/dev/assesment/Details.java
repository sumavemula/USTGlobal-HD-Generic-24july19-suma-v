package com.dev.assesment;
import java.util.*;

public class Details {

	static HashSet<Contact> hs=new HashSet<Contact>();
	static Contact ct=new Contact();
	public static void main(String[] args) {
		
		Scanner sc=new Scanner(System.in);
		int n;
		do{
		System.out.println("Enter option");
		System.out.println("Press 1 to all contacts");
		System.out.println("Press 2 to search for contacts");
		System.out.println("Press 3 to operate on  contacts");
		int option=sc.nextInt();
		switch(option){
		case 1:	
				ShowData.showContacts();
				break;
		case 2:	
				System.out.println("Enter a name to search");
				String name=sc.next();
				ShowData.search(name);
				break;
		case 3:
				System.out.println("1- to add contact  2- delete contact  3- update contact");
				int m=sc.nextInt();
				if(m==1){
					System.out.println("Enter name to add");
					String s=sc.next();
					ct.setName(s);
					System.out.println("Enter number to add");
					int n1=sc.nextInt();
					ct.setNumber(n1);
					System.out.println("Enter group to add");
					String g=sc.next();
					ct.setGroup(g);
				} else if(m==2){
					hs.remove(ct);
					System.out.println("Contact removed successfully");
				}else if(m==3){
					System.out.println("Enter name to update");
					String str=sc.next();
					ct.setName(str);
					System.out.println("Enter number to update");
					int upnum=sc.nextInt();
					ct.setNumber(upnum);
				}
				break;
		default: System.out.println("invalid option");
		}
		System.out.println("1-repeate 0-exit");
		n=sc.nextInt();
		}while(n==1);
			System.out.println("thanks");
	}

}
