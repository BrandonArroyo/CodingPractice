#include <iostream>
#include <string>

using namespace std;
int isUniqueChar(string s);
int main(){
	string s;
	s = "abcdefghijklmnopqrstuvwxyz";
	 if(isUniqueChar(s)) cout<<"yes";
	 else cout<<"false";
	return 0;

}

void reverse(char* s){

	int checker = 0;
	cout <<"first checker"<<checker<<endl;
	for(int i = 0; i< s.length() ;++i){
		int val = s[i] - 'a';
		cout <<"val"<<val<<endl;
		
		if((checker & (1 << val)) > 0){
			cout << "this;"<<(checker & (1 << val))<<endl ;
			return false;

		}
		checker |= (1 <<val);
		int test = (1 <<val);
		cout<< "what does this do:" << val <<"and"<<test<<endl;
		cout<< "checker new value:"<< checker<<endl;
	}
	return true;

}