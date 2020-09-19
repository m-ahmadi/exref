#include <stdio.h>
#include <string.h>
 
struct BOOK {
	char title[50];
	char author[50];
	float price;
} book3;


int main() {
	struct BOOK book1;
	struct BOOK book2;
	
	struct BOOK * gholam;
	gholam = &book2;
	
	strcpy( book1.title, "The Lord of the Rings");
	strcpy( book1.author, "J. R. R. Tolkien");
	book1.price = 24.99;
	
	strcpy( book2.title, "A Song of Ice and Fire");
	strcpy( book2.author, "George R. R. Martin"); 
	book2.price = 19.99;
	
	strcpy( book3.title, "The Blade Itself ");
	strcpy( book3.author, "Joe Abercrombie"); 
	book3.price = 17.50;
	
	struct BOOK book4 = {
		"Gardens of the Moon",
		"Steven Erikson",
		5.44
	};
	
	struct BOOK book5 = {
		.price = 7.99,
		.author = "Patrick Rothfuss",
		.title = "The Name of the Wind"
	};
	
	struct BOOK book6 = {
		.title = "The Black Company",
		.author = "Glen Cook"
	};
	
	printf( "Book 1: \"%s\" by %s (Only $%.2f)\n",    book1.title, book1.author, book1.price );
	printf( "Book 2: \"%s\" by %s (Only $%.2f)\n",    book2.title, book2.author, book2.price );
	printf( "Book 3: \"%s\" by %s (Only $%.2f)\n",    book3.title, book3.author, book3.price );
	printf( "Book 4: \"%s\" by %s (Only $%.2f)\n",    book4.title, book4.author, book4.price );
	printf( "Book 5: \"%s\" by %s (Only $%.2f)\n",    book5.title, book5.author, book5.price );
	printf( "Book 6: \"%s\" by %s (Not Available)\n", book6.title, book6.author              );
	
	printf( "\n\n Best Book: \"%s\" by %s ($%.2f)\n", gholam->title, gholam->author, gholam->price);
	getchar();
	return 0;
}