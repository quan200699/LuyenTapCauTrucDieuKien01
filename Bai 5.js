var kt = parseInt(prompt("Diem kiem tra:"));
var giuaky = parseInt(prompt("Diem giua ky:"));
var cuoiky = parseInt(prompt("Diem cuoi ky"));
var avg = (kt+giuaky*2+cuoiky**3)/6;
if(avg>=8.0)
{
    alert("Xep loai gioi");
}
else if(avg>=6.5&&avg<8)
{
    alert("Xep loai kha");
}
else if(avg>=5&&avg<6.5)
{
    alert("Xep loai trung binh");
}
else
{
    alert("Xep loai kem");
}