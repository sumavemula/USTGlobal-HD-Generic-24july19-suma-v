class MethodExample{
	public static int calArea(int side){
	
		int area=side*side;
		return area;
	}
	public static float circleArea(int radius){
		float PI=3.14f;
		float area=PI*radius*radius;
		return area;
	}
	public static float average(int a,int b, int c){
		float avg=(a+b+c)/3f;
		return avg;
	}
	public static float triangleArea(int b,int h){
	
		float area=(b*h)/2f;
		return area;
	}
	public static void main(String[]args){
	
		int a=calArea(10);
		System.out.println("Area of square = "+a);
		float c = circleArea(12);
		System.out.println("Area of circle = "+c);
		float average=average(45,87,65);
		System.out.println("average of three numbers = "+average);
		float t=triangleArea(7,9);
		System.out.println("Area of triangle  = "+t);

	}
}