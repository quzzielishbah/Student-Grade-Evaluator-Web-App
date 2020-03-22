function eval() {
    var evaluation = document.querySelector("#evaluation");
    var evaluation1 = document.querySelector("#evaluation1");
    var evaluation2 = document.querySelector("#evaluation2");
    var evaluation3 = document.querySelector("#evaluation3");
    var evaluation4 = document.querySelector("#evaluation4");
    var rank = document.querySelector("#rank");
    var math = document.getElementById("math").value;
    var science = document.getElementById("science").value;
    var english = document.getElementById("english").value;
    var filipino = document.getElementById("filipino").value;
    var pe = document.getElementById("pe").value;

    //math
    if(math >=90 && math <=100)
    {
        evaluation.textContent = "Excellent";
        evaluation.style.color = "green";
    }
    else if(math >=80 && math<=89)
    {
        evaluation.textContent = "Good";
        evaluation.style.color = "blue";
    }
    else if(math >=70 && math <=79)
    {
        evaluation.textContent = "Average";
        evaluation.style.color = "darkgoldenrod";
    }
    else if(math >=60 && math <=69)
    {
        evaluation.textContent = "Poor";
        evaluation.style.color = "orangered";
    }
    else if(math >=0 && math <=59)
    {
        evaluation.textContent = "Fail";
        evaluation.style.color = "red";
    }
    else
    {
        evaluation.textContent = "Undefined";
    }

    //science
    if(science >=90 && science <=100)
    {
        evaluation1.textContent = "Excellent";
        evaluation1.style.color = "green";
    }
    else if(science >=80 && science<=89)
    {
        evaluation1.textContent = "Good";
        evaluation1.style.color = "blue";
    }
    else if(science >=70 && science <=79)
    {
        evaluation1.textContent = "Average";
        evaluation1.style.color = "darkgoldenrod";
    }
    else if(science >=60 && science <=69)
    {
        evaluation1.textContent = "Poor";
        evaluation1.style.color = "orangered";
    }
    else if(science >=0 && science <=59)
    {
        evaluation1.textContent = "Fail";
        evaluation1.style.color = "red";
    }
    else
    {
        evaluation1.textContent = "Undefined";
    }

    //english
    if(english >=90 && english <=100)
    {
        evaluation2.textContent = "Excellent";
        evaluation2.style.color = "green";
    }
    else if(english >=80 && english<=89)
    {
        evaluation2.textContent = "Good";
        evaluation2.style.color = "blue";
    }
    else if(english >=70 && english <=79)
    {
        evaluation2.textContent = "Average";
        evaluation2.style.color = "darkgoldenrod";
    }
    else if(english >=60 && english <=69)
    {
        evaluation2.textContent = "Poor";
        evaluation2.style.color = "orangered";
    }
    else if(english >=0 && english <=59)
    {
        evaluation2.textContent = "Fail";
        evaluation2.style.color = "red";
    }
    else
    {
        evaluation2.textContent = "Undefined";
    }

    //filipino
    if(filipino >=90 && filipino <=100)
    {
        evaluation3.textContent = "Excellent";
        evaluation3.style.color = "green";
    }
    else if(filipino >=80 && filipino<=89)
    {
        evaluation3.textContent = "Good";
        evaluation3.style.color = "blue";
    }
    else if(filipino >=70 && filipino <=79)
    {
        evaluation3.textContent = "Average";
        evaluation3.style.color = "darkgoldenrod";
    }
    else if(filipino >=60 && filipino <=69)
    {
        evaluation3.textContent = "Poor";
        evaluation3.style.color = "orangered";
    }
    else if(filipino >=0 && filipino <=59)
    {
        evaluation3.textContent = "Fail";
        evaluation3.style.color = "red";
    }
    else
    {
        evaluation3.textContent = "Undefined";
    }

    //pe
    if(pe >=90 && pe <=100)
    {
        evaluation4.textContent = "Excellent";
        evaluation4.style.color = "green";
    }
    else if(pe >=80 && pe<=89)
    {
        evaluation4.textContent = "Good";
        evaluation4.style.color = "blue";
    }
    else if(pe >=70 && pe <=79)
    {
        evaluation4.textContent = "Average";
        evaluation4.style.color = "darkgoldenrod";
    }
    else if(pe >=60 && pe <=69)
    {
        evaluation4.textContent = "Poor";
        evaluation4.style.color = "orangered";
    }
    else if(pe >=0 && pe <=59)
    {
        evaluation4.textContent = "Fail";
        evaluation4.style.color = "red";
    }
    else
    {
        evaluation4.textContent = "Undefined";
    }

    //rank
    if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Top Honor Student";
    }
    //repeater
    else if((math >=0 && math <=50) && (science >=0 && science <=59) && (english >=0 && english <=59) && (filipino >=0 && filipino <=59) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Repeater";
    }

    else if((math >=60 && math <=69) && (science >=60 && science <=69) && (english >=60 && english <=69) && (filipino >=60 && filipino <=69) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Repeater";
    }

    //0-50
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //60-69
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //70-79
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=59) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //80-89
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //60-69 and 80-89
    else if((math >=60 && math <=69) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //80-89 and 60-69
    else if((math >=80 && math <=89) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //60-69 and 70-79
    else if((math >=60 && math <=69) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //70-79 and 60-69
    else if((math >=70 && math <=79) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //0-59 and 70-79
    else if((math >=0 && math <=59) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //0-59 and 80-89
    else if((math >=0 && math <=59) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //70-79 and 0-59
    else if((math >=70 && math <=79) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //80-89 and 0-59
    else if((math >=80 && math <=89) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //0-59 and 60-69
    else if((math >=0 && math <=59) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //60-69 and 0-59
    else if((math >=60 && math <=69) && (science >=0 && science <=59) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=60 && english <=69) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=0 && filipino <=59) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=60 && math <=69) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=60 && science <=69) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=0 && pe<=59))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=0 && english <=59) && (filipino >=90 && filipino <=100) && (pe >=60 && pe<=69))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=0 && math <=59) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=60 && filipino <=69) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //70-79 and 80-89
    else if((math >=70 && math <=79) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    //80-89 and 70-79
    else if((math >=80 && math <=89) && (science >=70 && science <=79) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=80 && english <=89) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=70 && filipino <=79) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=80 && math <=89) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student";
    }
    else if((math >=90 && math <=100) && (science >=80 && science <=89) && (english >=90 && english <=100) && (filipino >=90 && filipino <=100) && (pe >=70 && pe<=79))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=90 && math <=100) && (science >=90 && science <=100) && (english >=70 && english <=79) && (filipino >=90 && filipino <=100) && (pe >=80 && pe<=89))
    {
        rank.textContent = "Second Honorable Student"; 
    }
    else if((math >=70 && math <=79) && (science >=90 && science <=100) && (english >=90 && english <=100) && (filipino >=80 && filipino <=89) && (pe >=90 && pe<=100))
    {
        rank.textContent = "Second Honorable Student"; 
    }

    else
    {
        rank.textContent = "None";
    }

} 