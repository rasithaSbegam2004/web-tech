function calculateSGPA() {
    // Define a grade-point mapping
    const gradePoints = {
      'A': 10,
      'B': 8,
      'C': 6,
      'D': 4,
      'E': 2,
      'F': 0
    };
  
    // Collect grades and credits from input fields
    let grades = [document.getElementById('grade1').value.toUpperCase(),
                  document.getElementById('grade2').value.toUpperCase(),
                  document.getElementById('grade3').value.toUpperCase()];
  
    let credits = [parseFloat(document.getElementById('credit1').value),
                   parseFloat(document.getElementById('credit2').value),
                   parseFloat(document.getElementById('credit3').value)];
  
    // Initialize variables for the SGPA calculation
    let totalGradePoints = 0;
    let totalCredits = 0;
  
    // Calculate grade points based on input
    for (let i = 0; i < grades.length; i++) {
      const grade = grades[i];
      const credit = credits[i];
  
      if (grade in gradePoints && !isNaN(credit)) {
        totalGradePoints += gradePoints[grade] * credit;
        totalCredits += credit;
      } else {
        alert("Please enter valid grades (A, B, C, D, E, F) and credits.");
        return;
      }
    }
  
    // Calculate SGPA and display the result
    const sgpa = (totalCredits > 0) ? (totalGradePoints / totalCredits).toFixed(2) : 0;
    document.getElementById("sgpa-output").textContent = `Your SGPA is: ${sgpa}`;
  }
  