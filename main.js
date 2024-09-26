document.getElementById('myform').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the form from actually submitting

    // Proceed only if the form is valid
    if (this.checkValidity()) {
        grade();  // Call the grade function to calculate the result
    } else {
        // Let the browser show the validation messages
        this.reportValidity();
    }
});



function grade() {

    let fullname = document.getElementById("fullname").value;
    let course1_marks = parseFloat(document.getElementById("course1").value);
    let course2_marks = parseFloat(document.getElementById("course2").value);
    let course3_marks = parseFloat(document.getElementById("course3").value);
    let totalmarks = parseFloat(document.getElementById("totalmarks").value);

    let obtainedmarks = course1_marks + course2_marks + course3_marks;
    let percent = (obtainedmarks / totalmarks) * 100;


    if (percent >= 80 && percent < 100) {
        document.getElementById("mygrade").innerHTML = "A-1 Grade";
        document.getElementById("remarks").innerHTML = "Excellent work! You're demonstrating top-level performance—keep it up!";
    }

    else if (percent >= 70 && percent < 80) {
        document.getElementById("mygrade").innerHTML = "A Grade";
        document.getElementById("remarks").innerHTML = "Well done! You're doing great—continue aiming for excellence.";
    }

    else if (percent >= 60 && percent < 70) {
        document.getElementById("mygrade").innerHTML = "B Grade";
        document.getElementById("remarks").innerHTML = "Good job! Keep working hard to reach even higher levels of success.";
    }

    else if (percent >= 50 && percent < 60) {
        document.getElementById("mygrade").innerHTML = "C Grade";
        document.getElementById("remarks").innerHTML = "You have potential, but more effort is needed to improve your performance.";
    }

    else if (percent < 50) {
        document.getElementById("mygrade").innerHTML = "Fail";
        document.getElementById("remarks").innerHTML = "You need to put in more effort and focus on understanding the material better. Don't give up!";
    }

    else {
        document.getElementById("mygrade").innerHTML = "Invalid";
        document.getElementById("remarks").innerHTML = "Invalid";
    }


    document.getElementById("obtmarks").innerHTML = obtainedmarks;
    document.getElementById("percentage").innerHTML = percent.toFixed(0) + "%";
    document.getElementById("myresult").style.display = "block";
    document.getElementById("myform").style.display = "none";
}