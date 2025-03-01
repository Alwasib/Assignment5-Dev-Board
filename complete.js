document.getElementById("message1").style.display="none";
document.getElementById("message2").style.display="none";
document.getElementById("message3").style.display="none";
document.getElementById("message4").style.display="none";
document.getElementById("message5").style.display="none";
document.getElementById("message6").style.display="none";
 
document.getElementById("complete1").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message1").style.display="block";
   document.getElementById("complete1").disabled=true;
   document.getElementById("complete1").style.backgroundColor="gray";
   document.getElementById("complete1").style.opacity=0.4;
   
})
document.getElementById("complete2").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message2").style.display="block";
    document.getElementById("complete2").disabled=true;
    document.getElementById("complete2").style.backgroundColor="gray";
   document.getElementById("complete2").style.opacity=0.4;
    
})

document.getElementById("complete3").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message3").style.display="block";
    document.getElementById("complete3").disabled=true;
    document.getElementById("complete3").style.backgroundColor="gray";
   document.getElementById("complete3").style.opacity=0.4;
   
})
document.getElementById("complete4").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message4").style.display="block";
   
        document.getElementById("complete4").disabled=true;
        document.getElementById("complete4").style.backgroundColor="gray";
   document.getElementById("complete4").style.opacity=0.4;
      
})
document.getElementById("complete5").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message5").style.display="block";
    document.getElementById("complete5").disabled=true;
    document.getElementById("complete5").style.backgroundColor="gray";
   document.getElementById("complete5").style.opacity=0.4;
   
})
document.getElementById("complete6").addEventListener('click',function(event){
    event.preventDefault();
    alert("Board updated successfully");
    const val1=document.getElementById("value1").innerText;
    const v1=parseFloat(val1);
    const val2=document.getElementById("value2").innerText;
    const v2=parseFloat(val2);
    const sum=v1+1;
    const sub=v2-1;
    if(sub===0)
    {
        alert("congrates!!! You have complete all the current task");
    }
    document.getElementById("value1").innerText=sum;
    document.getElementById("value2").innerText=sub;
    document.getElementById("message6").style.display="block";
    document.getElementById("complete6").disabled=true;
    document.getElementById("complete6").style.backgroundColor="gray";
   document.getElementById("complete6").style.opacity=0.4;
    
})
