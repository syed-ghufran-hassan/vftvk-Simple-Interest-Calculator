
function handleSubmit(event)
{
    event.preventDefault();
    
    var p = document.getElementById("principal").value;
    
    if(p<=0) {
        
        document.getElementById("simpleintrest").innerHTML = ": " + " :  " + "Value of Principal Cannot be or zero negative";
        alert("Value cannot be negative or zero")
    }
    else if (p>0){

    
        var r = document.getElementById("rate").value;
    var t = document.getElementById("time").value;
    var r1 = r/100;
    var t1 = t/12;
    var si = p*r1*t1;
    document.getElementById("simpleintrest").innerHTML = ": " + " :  " + si;
    }
    
}

function handleChange(){
    
    var r = document.getElementById("rate").value;
    document.getElementById("change").innerHTML = r+"%";

}
