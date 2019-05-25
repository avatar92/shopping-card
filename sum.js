var x=0; 
var y=0; 
var z=0;  
function add1()
{   
    
    var a=document.getElementById('val1').innerHTML;
    a++;
    document.getElementById('val1').innerHTML=  a; 
    var a1= document.getElementById('prod1').innerHTML=  a*50;
    x=parseInt(a*50);    
    document.getElementById('totalSum1').innerHTML=x+y+z;  
}
function mine1()
{
    var b=document.getElementById('val1').innerHTML;
    if (b>0) {  
        b--; 
        document.getElementById('val1').innerHTML=b; 
        document.getElementById('prod1').innerHTML=  b*50;
        x=parseInt(b*50)
        document.getElementById('totalSum1').innerHTML=x+y+z;
    }else if (b<0){
        document.getElementById('val1').innerHTML='0';
        document.getElementById('prod1').innerHTML=  '0'; 
        document.getElementById('totalSum1').innerHTML=0;
    }        
    
}
function add2()
{
    var a=document.getElementById('val2').innerHTML;
    a++;
    document.getElementById('val2').innerHTML=  a; 
    document.getElementById('prod2').innerHTML=  a*60;
    y=parseInt(a*60)
    document.getElementById('totalSum1').innerHTML=x+y+z;
}
function mine2()
{
    var b=document.getElementById('val2').innerHTML;
    if (b>0) {  
        b--; 
        document.getElementById('val2').innerHTML=b; 
        document.getElementById('prod2').innerHTML=  b*60;
        y=parseInt(b*60);
        document.getElementById('totalSum1').innerHTML=x+y+z;
    }else if (b<0){
        document.getElementById('val2').innerHTML='0';
        document.getElementById('prod2').innerHTML=  '0';
        document.getElementById('totalSum1').innerHTML=0; 
    }        

}
function add3()
{
    var a=document.getElementById('val3').innerHTML;
    a++;
    document.getElementById('val3').innerHTML=  a; 
    document.getElementById('prod3').innerHTML=  a*70;
    z=parseInt(a*70)
    document.getElementById('totalSum1').innerHTML=x+y+z;
}
function mine3()
{
    var b=document.getElementById('val3').innerHTML;
    if (b>0) {  
        b--; 
        document.getElementById('val3').innerHTML=b; 
        document.getElementById('prod3').innerHTML=  b*70;
        z=parseInt(b*70);
        document.getElementById('totalSum1').innerHTML=x+y+z;
    }else if (b<0){
        document.getElementById('val3').innerHTML='0';
        document.getElementById('prod3').innerHTML=  '0';
        document.getElementById('totalSum1').innerHTML=0; 
    }        

}
