package com.dev.abstraction;

import java.io.Serializable ;
import java.rmi.Remote;

public interface Abs extends Serializable, Cloneable, Remote{

	void display();
	
	//void show();
}

