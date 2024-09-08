// Get form elements
const resumeForm = document.getElementById('resumeForm') as HTMLFormElement;
const resumeOutput = document.getElementById('resumeOutput') as HTMLDivElement;

const outputName = document.getElementById('outputName') as HTMLSpanElement;
const outputEmail = document.getElementById('outputEmail') as HTMLSpanElement;
const outputPhone = document.getElementById('outputPhone') as HTMLSpanElement;
const outputEducation = document.getElementById('outputEducation') as HTMLParagraphElement;
const outputExperience = document.getElementById('outputExperience') as HTMLParagraphElement;
const outputSkills = document.getElementById('outputSkills') as HTMLParagraphElement;

// Event listener for form submission
resumeForm.addEventListener('submit', function(event: Event) {
  event.preventDefault();

  // Fetch form values
  const name = (document.getElementById('name') as HTMLInputElement).value;
  const email = (document.getElementById('email') as HTMLInputElement).value;
  const phone = (document.getElementById('phone') as HTMLInputElement).value;
  const education = (document.getElementById('education') as HTMLTextAreaElement).value;
  const experience = (document.getElementById('experience') as HTMLTextAreaElement).value;
  const skills = (document.getElementById('skills') as HTMLTextAreaElement).value;

  // Display resume with form values
  outputName.textContent = name;
  outputEmail.textContent = email;
  outputPhone.textContent = phone;
  outputEducation.textContent = education;
  outputExperience.textContent = experience;
  outputSkills.textContent = skills;

  // Show resume section
  resumeOutput.style.display = 'block';
});
