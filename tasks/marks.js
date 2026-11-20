function calculateGrade() {
  let subjects = 5;
  let marks = [];
  let total = 0;

  // Step 1: Take marks input for 5 subjects
  for (let i = 1; i <= subjects; i++) {
    let mark = Number(prompt(`Enter marks for Subject ${i} (out of 100):`));
    marks.push(mark);
    total += mark;
  }

  // Step 2: Calculate percentage
  let percentage = total / subjects;

  // Step 3: Determine grade
  let grade;
  if (percentage >= 90) {
    grade = "A+";
  } else if (percentage >= 75) {
    grade = "A";
  } else if (percentage >= 60) {
    grade = "B";
  } else if (percentage >= 40) {
    grade = "C";
  } else {
    grade = "Fail";
  }

  // Step 4: Display result
  console.log("Marks Entered: " + marks);
  console.log("Total Marks: " + total + "/500");
  console.log("Percentage: " + percentage.toFixed(2) + "%");
  console.log("Grade: " + grade);

  alert(`Total: ${total}/500\nPercentage: ${percentage.toFixed(2)}%\nGrade: ${grade}`);
}

calculateGrade();