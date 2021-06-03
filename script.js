// complete function of calculating the interest
function compute()
{
	var amount = document.getElementById("amount").value;
	var rate = document.getElementById("rate").value;
	var years = document.getElementById("years").value;
	var interest = amount * years * rate /100;	 

	var year = new Date().getFullYear()+parseInt(years);

	var reslt = document.getElementById("result").value;

	if(amount<1 && amount==null){
		alert("Please enter a positive number!");
	}

	document.getElementById("result").innerHTML="If you deposit "+amount+",\<br\>at an interest rate of "+rate+"%\<br\>You will receive an amount of "+interest+",\<br\>in the year "+year+"\<br\>"

}

function updateRate() 
{
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
