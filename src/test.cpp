#include<bits/stdc++.h>
using namespace std;
int main(){
    vector<int> temp = {1,3,5,6,6,8,9,10};
    auto x = upper_bound(temp.begin(),temp.end(),0);
    auto y = lower_bound(temp.begin(),temp.end(),0);
    cout<<*x<< "\t"<<*y<<"\n";
    return 0;
}