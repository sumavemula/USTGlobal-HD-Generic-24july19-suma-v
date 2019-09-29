package com.dev.assesment;


import java.util.HashSet;
import java.util.Iterator;
import java.util.Scanner;
public class ShowData extends Contact{
	static Scanner sc=new Scanner(System.in);
	static Contact ct=new Contact();
	static Contact c=new Contact();
	static Contact c1=new Contact();
	static Contact c2=new Contact();
	static Contact c3=new Contact();
	static HashSet<Contact> hs=new HashSet<Contact>();
	public static  void showContacts(){
		c.setName("suma");
		c.setNumber(987654);
		c.setGroup("Idea");
		
		c1.setName("vani");
		c1.setNumber(12345);
		c1.setGroup("BSNL");
	
		c2.setName("navya");
		c2.setNumber(657398);
		c2.setGroup("Airtel");
		
		c3.setName("kavitha");
		c3.setNumber(67527);
		c3.setGroup("JIO");
		
		hs.add(c);
		hs.add(c1);
		hs.add(c2);
		hs.add(c3);
		
		System.out.println(hs);
		
	}
	
	public static void search(String name){
		if(c.getName().equals(name)||c1.getName().equals(name)||c2.getName().equals(name)||c3.getName().equals(name)){
			System.out.println("Contact is valid");
			System.out.println("Enter option");
			System.out.println("Press 1 to call ");
			System.out.println("Press 2 to Message");
			System.out.println("Press 3 to go back to main");
			int opt=sc.nextInt();
			int a;
			do{
				System.out.println("Enter option");
				System.out.println("Press 1 to call ");
				System.out.println("Press 2 to Message");
				System.out.println("Press 3 to go back to main");
				switch(opt){
				
				case 1: 
					System.out.println("Calling the contact");
					System.out.println("call ended.....");
					break;
				case 2:
					String msg=sc.next();
					ct.setMessage(msg);
					System.out.println("Message sending......");
					System.out.println(ct.getMessage());	
				}
				System.out.println("1-repeat  0-exit");
				 a=sc.nextInt();
			}while(a==1);
				System.out.println("Thanks.....");
			
		} else{
			System.out.println("Invalid");
		}
	}
}