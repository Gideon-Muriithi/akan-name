function theInput(){
     var MM = parseInt(document.getElementById("mth").value);
     var DD = parseInt(document.getElementById("dt").value);
     var yy = document.getElementById("yr").value;

   for (var i=0; i<document.userInput.gender.length; i++)  {
   if (document.userInput.gender[i].checked)  {

   checkedValue = document.userInput.gender[i].value;


     }
   }

    var sliceyy = yy.slice(0,2);

    YY = parseInt(sliceyy);
    var forcc = parseInt(yy); //Change year from a string type to an interger.
    var cc =forcc/100; //Create a variable for easy truncation for in a century.
    CC = Math.trunc(cc);
  
   var dayoftheweek =  Math.trunc((((CC/4) -2*CC-1) + ((5*YY/4) ) + ((26*(MM+1)/10)) + DD ) % 7);

   var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
   var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];

   if(dayoftheweek == 0 && checkedValue == "Male"){
     alert("Your Akan Name is " + maleNames[0]);
   }
  else if (dayoftheweek == 0 && checkedValue == "Female") {
    alert("Your Akan Name is " + femaleNames[0]);
   }
   else if (dayoftheweek == 1 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[1]);
   }
   else if (dayoftheweek == 1 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[1]);
   }
   else if (dayoftheweek == 2 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[2]);
   }
   else if (dayoftheweek == 2 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[2]);
   }
   else if (dayoftheweek == 3 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[3]);
   }
   else if (dayoftheweek == 3 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[3]);
   }
   else if (dayoftheweek == 4 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[4]);
   }
   else if (dayoftheweek == 4 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[4]);
   }
   else if (dayoftheweek == 5 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[5]);
   }
   else if (dayoftheweek == 5 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[5]);
   }
   else if (dayoftheweek == 6 && checkedValue == "Male") {
     alert("Your Akan Name is " + maleNames[6]);
   }
   else if (dayoftheweek == 6 && checkedValue == "Female") {
     alert("Your Akan Name is " + femaleNames[6]);
   }

   theInput();
 }
