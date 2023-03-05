bool grep = true;
int[] employees = new int[increment];
Console.WriteLine("Enter new employee");
employees[0]= Convert.ToInt32(Console.ReadLine());
int invrement = 1;
do
{
    string employee = Console.ReadLine();
    int size =Convert.ToInt32(employee);
    Console.WriteLine("Do you want continue?");
    string answer = Console.ReadLine();
    if (answer == "yes")
    {
        grep = true;
    Array.Resize(ref employees, employees.Length + 1);
        employees[increment] = Convert.ToInt32(Console.ReadLine());
        increment++;
           

    }
    else if (answer == "no")
    {
        grep = false;
        Console.WriteLine("exiting");
    }
}
while (grep);
for(int i = 0;i<increment;i++)
    Console.WriteLine("employment[i")





