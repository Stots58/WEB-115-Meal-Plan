document.getElementById("myButton").addEventListener('click', myWindow)

function myWindow(event){
    event.preventDefault();
    const errorMsg = document.querySelector('.error-msg'); // Select the error message element from css.
    
    // Get values from input fields in html.
    Name = document.getElementById("myInput1").value;
    Email = document.getElementById("myInput2").value;
    Height = document.getElementById("myInput3").value;
    Age = document.getElementById("myInput4").value;
    Weight = document.getElementById("myInput5").value;
    Goal = document.getElementById("myInput11").value;

    // Get values for the meals in html.
    Breakfast = document.getElementById("myInput6").value;
    Snack1 = document.getElementById("myInput7").value;
    Lunch = document.getElementById("myInput8").value;
    Snack2 = document.getElementById("myInput9").value;
    Dinner = document.getElementById("myInput10").value;

    // Email validation using regex.
    const regex = /^[\w\-\.]+@([\w-]+\.)+[\w-]{2,}$/gm;
    
    if(regex.test(Email)){ // If statement to validate email.
        errorMsg.style.display = 'none'; // Hide the error message

        // Create the HTML content to display in the new window
        myText = ("<html>\n<head>\n<title>Welcome</title>\n</head>\n<body>\n");
        
        // Loop to generate meal plan for each day
        for(let i = 1; i < 8; i++){
            myText += (`Day ${i} <br>` + Name + "<br>" + Email + "<br>" + Height + "<br>" + Age + "<br>" + Weight + "<br>" + Breakfast + "<br>" + Snack1 + "<br>" + Lunch + "<br>" + Snack2 + "<br>" + Dinner + '<br>' + Goal + '<hr>');
        }
        
        myText += ("</body>\n</html>");
        
        // Add buttons for clearing, downloading and printing the file
        myText += "<br><button onclick='clearContent()'>Clear</button>\n</body>\n</html>";
        myText += "<br><button onclick='downloadFile()'>Download</button>\n";
        myText += "<br><button onclick='printContent()'>Print</button>\n</body>\n</html>";

    
        // Open a new window to display the content
        flyWindow = window.open('about:blank','myPop','width=400,height=200,left=200,top=200');
        flyWindow.document.write(myText); // Write the generated HTML content to the new window

        // Function to clear the content in the new window
        flyWindow.clearContent = function(){
            flyWindow.document.body.innerHTML = "<html><body><button onclick='clearContent()'>Clear</button></body></html>";
        }

        // Function to download the content as a file
        flyWindow.downloadFile = function(){
            const blob = new Blob([myText], {type: 'text/html'});
            const link = document.createElement('a');
            link.href = URL.createObjectURL(blob);
            link.download = 'pinkyDinky.html';
            link.click();
        }

        // Function to print the content as a file
        flyWindow.printContent = function(){
            window.print()
        }
    }
    else{ // If the email is not valid
        errorMsg.style.display = 'block'; // Show the error message
    }
}
// 123@gmail.com
