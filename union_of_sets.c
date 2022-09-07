#include <stdio.h>
int main()
{
int a[10], b[10], c = 0, n1, n2, i, j;
printf("Enter SetA size : ");
scanf("%d",&n1);
printf("\nEnter SetB size : ");
scanf("%d",&n2);
printf("\nEnter SetA elements : ");
for(i = 0;i < n1;i++)
scanf("%d",&a[i]);
printf("\nEnter SetB elements : ");
for(i = 0;i < n2;i++)
scanf("%d",&b[i]);
printf("\nUnion: { ");
for(i = 0;i < n1;i++)
printf("%d, ",a[i]);
for(i = 0;i < n2;i++)
{
for(j = 0;j < n1;j++)
{
if(b[i] == a[j])
{
c = 1;
}
}
if(c == 0)
{
printf("%d, ",b[i]);

}
c = 0;
}
printf(" }");
return 0;
}