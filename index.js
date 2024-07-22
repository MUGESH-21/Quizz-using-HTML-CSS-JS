function Aclass(){
    let ans = document.getElementsByClassName("a")
    let btn = document.getElementsByTagName("button")
    ans[0].style.backgroundColor="green";
    btn[0].style.backgroundColor="green";
} 
function Bclass(){
    let ans1 = document.getElementsByClassName("b")
    let btn1 = document.getElementsByTagName("button")
    ans1[0].style.backgroundColor="red";
    btn1[1].style.backgroundColor="red";
    Aclass()
}
function Cclass(){
    let ans1 = document.getElementsByClassName("b")
    let btn1 = document.getElementsByTagName("button")
    ans1[1].style.backgroundColor="red";
    btn1[2].style.backgroundColor="red";
    Aclass()
}
function Dclass(){
    let ans1 = document.getElementsByClassName("b")
    let btn1 = document.getElementsByTagName("button")
    ans1[2].style.backgroundColor="red";
    btn1[3].style.backgroundColor="red";
    Aclass()
}