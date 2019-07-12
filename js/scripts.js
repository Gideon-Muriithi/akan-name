function theInput(){
     var birthday = document.getElementById("input_id").value;
     //var gender = document.getElementById("display").value;
     //var gender1 = document.getElementById("display1").value;
     var foo = birthday.toString();
     var arr = foo.split("/");
     var DD = alert(arr[2]);


    //alert(gender)2

  }


theInput();
/*theInput();
var YY = ;
var CC = (YY/100).toFixed(2);
var MM = ;
var DD = ;
var dayoftheweek =  ( (CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD )%7;*/
