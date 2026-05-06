const buttons = document.querySelectorAll(".nav-btn");
const pages = document.querySelectorAll(".page");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const pageId = button.dataset.page;

    buttons.forEach((btn) => btn.classList.remove("active"));
    pages.forEach((page) => page.classList.remove("active"));

    button.classList.add("active");
    document.getElementById(pageId).classList.add("active");
  });
});

document.getElementById("loginBtn").addEventListener("click", () => {
  const selectedRole = document.getElementById("roleSelect").value;
  buttons.forEach((btn) => btn.classList.remove("active"));
  pages.forEach((page) => page.classList.remove("active"));

  document.querySelector(`[data-page="${selectedRole}"]`).classList.add("active");
  document.getElementById(selectedRole).classList.add("active");
});

document.getElementById("submitBtn").addEventListener("click", () => {
  const fileInput = document.getElementById("fileInput");
  const message = document.getElementById("submissionMessage");

  if (!fileInput.files.length) {
    message.textContent = "Please select a source code file before submitting.";
    message.style.background = "#fee2e2";
    message.style.color = "#991b1b";
    message.classList.remove("hidden");
    return;
  }

  const allowedExtensions = [".py", ".java", ".cpp", ".js", ".cs"];
  const fileName = fileInput.files[0].name.toLowerCase();
  const isValid = allowedExtensions.some((extension) => fileName.endsWith(extension));

  if (!isValid) {
    message.textContent = "Invalid file format. Allowed formats: .py, .java, .cpp, .js, .cs";
    message.style.background = "#fee2e2";
    message.style.color = "#991b1b";
    message.classList.remove("hidden");
    return;
  }

  message.textContent = "Submission received successfully. Plagiarism analysis is queued.";
  message.style.background = "#dcfce7";
  message.style.color = "#166534";
  message.classList.remove("hidden");
});
