var subject, totalQuestions, numCorrect, percentScore;

function testResults(){
    subject = document.getElementById("subject").value;
    totalQuestions = document.getElementById("numberOfQuestions").value;
    numCorrect = document.getElementById("numberCorrect").value;

    percentScore =  numCorrect/totalQuestions*100;
    percentScore = percentScore.toFixed(2);

    //grades
    var GradeA = 90;
    var GradeB = 80;
    var GradeC = 70;
    var GradeD = 60;

    switch(true){
        case percentScore >= GradeA:
            document.getElementById("testResults").innerHTML = "A"
            document.getElementById("testMessage").innerHTML = `WAOW YOU GOT THE **A** PLUS!!1! EXACTLY ${percentScore}%. UR THE BEST`
            break;

        case percentScore >= GradeB:
            document.getElementById("testResults").innerHTML = "B"
            document.getElementById("testMessage").innerHTML = `WAOW YOU GOT THE **B**!!1! EXACTLY ${percentScore}%. UR AWESOMESAUCE`
            break;
        
        case percentScore >= GradeC:
            document.getElementById("testResults").innerHTML = "C"
            document.getElementById("testMessage").innerHTML = `WAOW YOU GOT THE **C**!!1! EXACTLY ${percentScore}%. UR MODERATLEY OKAY`
            break;

        case percentScore >= GradeD:
            document.getElementById("testResults").innerHTML = "D"
            document.getElementById("testMessage").innerHTML = `WAOW YOU GOT THE **D**!!1! EXACTLY ${percentScore}%. UR PASSING THE CLASS AT LEAST`
            break;

        case percentScore < GradeD:
            document.getElementById("testResults").innerHTML = "F"
            document.getElementById("testMessage").innerHTML = `...exactly ${percentScore}%, huh? Get out. Leave my class, I never want to see your godforsaken soul ever again. `
            break;

        default:
            alert("This is the default!!!!!!111!111111!!!!!!111!1");

    }
    
}


//ToDo - this goes inside the testResults() function
    //? In the function you will need to set the value of the variables: subject, totalQUestions and numbCorrect.
    //* Think document.getElementById().value;

//ToDo - this goes inside the testResults() function
    //? calculate percentScore by dividing numCorrect by totalQuestions... multiply by 100, so it's 96 instead of .96
    //* limit (fix) the percentScore to two decimal spots so that it's 96.27 rather than 96.274382333333333

//ToDo - this goes inside the testResults() function
    //? Create 4 local variables. Minimum scores for an A, B, C & D (note letter grade F witll be anything less than a D. ) 

//ToDo - this goes inside the testResults() function
    //! Add Switch Statement that checks the condition of the grade. For each grade change the out of the html id's of "testResults" and "testMessage".
    //? note you are just checking to see if a condition is true... so you may want to start with switch(true){}

  
//ToDo - New Function
// Create a function called clearResults() that resets the forms values. 
