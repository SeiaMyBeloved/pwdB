var iAge;
        var sMF;

        iAge = prompt("Please enter your age in years.", 0);
        sMF = prompt("Are you a (M)ale or (F)emale?", "M");

        if(iAge > 20){
            if(sMF == "M"){
                alert("You're a male over 20 years of age");
            }else{
                alert("You're a female over 20 years of age");
            }
        }else{
            if(sMF == "M"){
                alert("You're a male under the age of 21");
            }else{
                alert("You're a female under the age of 21");
            }
        }