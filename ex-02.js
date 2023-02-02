function soma (){
    var nun1 = document.getElementById("n1").value;
    var nun2 = document.getElementById("n2").value;
    var res= document.getElementById("res");
    nun1 = parseInt(nun1);
    nun2 = parseInt(nun2);
    res.innerHTML=nun1+nun2;
}