var sophut = parseInt(prompt("So phut:"));
var money;
if(sophut>=30000)
{
    money = sophut*1.2;
}
else if(sophut>=10000&&sophut<30000)
{
    money = sophut*1.15;
}
else
{
    money = sophut*1.1;
}
alert("So tien:"+money);