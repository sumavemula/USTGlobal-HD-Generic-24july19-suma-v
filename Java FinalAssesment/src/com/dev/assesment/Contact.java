package com.dev.assesment;

public class Contact {
private String name;
private int number;
private String group;
private String message;
public String getMessage() {
	return message;
}
public void setMessage(String message) {
	this.message = message;
}
@Override
public String toString() {
	return "Contact [name=" + name + ", number=" + number + ", group=" + group
			+ "]";
}
public String getName() {
	return name;
}
public void setName(String name) {
	this.name = name;
}
public int getNumber() {
	return number;
}
public void setNumber(int number) {
	this.number = number;
}
public String getGroup() {
	return group;
}
public void setGroup(String group) {
	this.group = group;
}

}
