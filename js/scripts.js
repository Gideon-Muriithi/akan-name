function theInput(){
     var MM = parseInt(document.getElementById("mth").value);
     var DD = parseInt(document.getElementById("dt").value);
     var yy = document.getElementById("yr").value;
     var gender = document.getElementById("man").value;
     var gender1 = document.getElementById("woman").value;
     //alert(MM);
     //alert(DD);
    // alert(YY);
    var sliceyy = yy.slice(0,2);
    //alert(sliceyy);
    YY = parseInt(sliceyy);
    var forcc = parseInt(yy); //Change year from a string type to an interger.
    var cc =forcc/100; //Create a variable for easy truncation for in a century.
    CC = Math.trunc(cc);
    //alert(CC);
   var dayoftheweek =  (((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7;
   var weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
   var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
   theInput();
 }
