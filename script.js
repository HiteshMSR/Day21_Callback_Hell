let div1=document.createElement("div");
div1.className="container";
div1.setAttribute("id","myDiv");
document.body.append(div1);

function callback(){
    func10();
    setTimeout(()=>div1.innerHTML="Welcome to GUVI",11000);
}
function func10(){
    func9()
    setTimeout(()=>div1.innerHTML="1",10000);
}
function func9(){
    func8();
    setTimeout(()=>div1.innerHTML="2",9000);
}
function func8(){
    func7();
    setTimeout(()=>div1.innerHTML="3",8000);
}
function func7(){
    func6();
    setTimeout(()=>div1.innerHTML="4",7000);
}
function func6(){
    func5();
    setTimeout(()=>div1.innerHTML="5",6000);
}
function func5(){
    func4();
    setTimeout(()=>div1.innerHTML="6",5000);
}
function func4(){
    func3();
    setTimeout(()=>div1.innerHTML="7",4000);
}
function func3(){
    func2()
    setTimeout(()=>div1.innerHTML="8",3000);
}
function func2(){
    func1();
    setTimeout(()=>div1.innerHTML="9",2000);
}
function func1(){
    setTimeout(()=>div1.innerHTML="10",1000);
}
callback();

