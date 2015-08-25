#include <iostream>
#include <string>
#include <stack>
using namespace std;
void reverse(char* s);
int main(){
	char* s = "string";
	reverse(s);
	return 0;

}

void reverse(char* s){
	stack <char> r;
	char* i;

	for(i = s ; *i; ++i){
		char a = *i ;
		r.push(a);
	}
	while ( !r.empty()){
		char  a = r.top();
		r.pop();
		cout <<a ;
	}

}