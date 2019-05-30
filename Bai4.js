var a = parseInt(prompt("So thu nhat:"));
var b = parseInt(prompt("So thu hai:"));
var c = parseInt(prompt("So thu ba:"));
if(a>b&&a>c)
{
    alert("So lon nhat:"+a);
}
else if(b>a&&b>c)
{
    alert("So lon nhat:"+b);
}
else
{
    alert("So lon nhat:"+c);
}