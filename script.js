let tab = "";
for (i=1; i<=10; i++)
{
    tab += i + "\t";
    for (j=1; j<=10; j++)
    {
        if (j != 1) {
            tab += (i * j) + "\t";
        }
    }
    tab += "\n";
}
console.log(tab);
