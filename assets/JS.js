 
	function sum(){
		var x;
 
if($("#io").val()>0){

 
 	
			switch($("#from").val()){
         case "USD":

			if (($("#to").val()=="INR")) {

				x=66.71*$("#io").val() ;
		$("#io1").val(x);
			} else if (($("#to").val()=="GBP"))
			 {
			 	x=0.77*$("#io").val() ;
		$("#io1").val(x);
			 }else if (($("#to").val()=="CAD")) {
			 	x=1.32*$("#io").val() ;
		$("#io1").val(x);
			 }

			 break;


			 case "INR":

			 if (($("#to").val()=="USD")) {

				x=0.015*$("#io").val() ;
		$("#io1").val(x);
			} else if (($("#to").val()=="GBP"))
			 {
			 	x=0.012*$("#io").val() ;
		$("#io1").val(x);
			 }else if (($("#to").val()=="CAD")) {
			 	x=0.020*$("#io").val() ;
		$("#io1").val(x);
			 }

			 break;

			 case "GBP":

			  if (($("#to").val()=="USD")) {

				x=1.30*$("#io").val() ;
		$("#io1").val(x);
			} else if (($("#to").val()=="INR"))
			 {
			 	x=86.49*$("#io").val() ;
		$("#io1").val(x);
			 }else if (($("#to").val()=="CAD")) {
			 	x=1.71*$("#io").val() ;
		$("#io1").val(x);
			 }
             break;

             case "CAD":
             if (($("#to").val()=="USD")) {

				x=0.76*$("#io").val() ;
		$("#io1").val(x);
			} else if (($("#to").val()=="INR"))
			 {
			 	x=50.65*$("#io").val() ;
		$("#io1").val(x);
			 }else if (($("#to").val()=="GBP")) {
			 	x=0.59*$("#io").val() ;
		$("#io1").val(x);
			 }
             break;
}
}else if($("#io").val()<0) {alert("You are kidding. Amount can't be a negative value. Please enter a positive value");}
 

if(($("#from").val()=="Select")||($("#to").val()=="Select")||($("#from").val()==$("#to").val())){

	 alert("Please Select the Currency");
}


 }

