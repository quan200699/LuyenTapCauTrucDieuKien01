var money = eval(prompt("Doanh so:"));
if(money>=5000000)
{
    alert("Tien hoa hong:"+money*0.2);
}
else if(money>=1000000&&money<5000000)
{
    alert("Tien hoa hong:"+money*0.1);
}
else
{
    alert("Tien hoa hong: 0");
}