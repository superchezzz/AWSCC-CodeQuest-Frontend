#include <iostream>

using namespace std;
int main ()

{
 int a, b;



    cout << "Enter First Number: ";
    cin >> a;
    cout << "Enter Second Number: ";
    cin >> b;
    //cout<<a%b<<endl;
    a = abs(a);
    b = abs(b);


            while ((a >= b) || (a < 0))
        {
            if (a > 0 &&  b > 0)
            {
                a = a - b;
            }

            else if (a < 0 && b > 0)
            {
                a = a + b;
                a = a*-1;
            }
            else if ((b == 0) && (a == 0))
{
    cout << "Indeterminate";
}



      }
        cout << "Remainder: " << a << endl;


    system("pause");
    system("cls");
    main();
    return 0;
}
