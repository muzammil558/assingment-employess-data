// Tab functionality
document.addEventListener("DOMContentLoaded", function () {
  const tabBtns = document.querySelectorAll(".tab-btn");
  const tabPanes = document.querySelectorAll(".tab-pane");

  tabBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const tabId = this.getAttribute("data-tab");
      tabBtns.forEach((b) => b.classList.remove("active"));
      tabPanes.forEach((p) => p.classList.remove("active"));
      this.classList.add("active");
      document.getElementById(tabId).classList.add("active");
    });
  });

  // Photo upload functionality
  const photoPlaceholder = document.getElementById("photoPlaceholder");
  const photoInput = document.getElementById("photoInput");

  photoPlaceholder.addEventListener("click", function () {
    photoInput.click();
  });

  photoInput.addEventListener("change", function (e) {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = function (e) {
        photoPlaceholder.innerHTML = `<img src="${e.target.result}" alt="Employee Photo" style="width: 100%; height: 100%; object-fit: cover;">`;
      };
      reader.readAsDataURL(file);
    }
  });

  // Calculate net salary
  const basicSalary = document.getElementById("basicSalary");
  const allowances = document.getElementById("allowances");
  const deductions = document.getElementById("deductions");
  const netSalary = document.getElementById("netSalary");

  function calculateNetSalary() {
    const basic = parseFloat(basicSalary.value) || 0;
    const allow = parseFloat(allowances.value) || 0;
    const deduct = parseFloat(deductions.value) || 0;
    netSalary.value = basic + allow - deduct;
  }

  basicSalary.addEventListener("input", calculateNetSalary);
  allowances.addEventListener("input", calculateNetSalary);
  deductions.addEventListener("input", calculateNetSalary);

  // Search functionality
  const searchBtn = document.querySelector(".search-btn");
  searchBtn.addEventListener("click", function () {
    const searchValue = document.getElementById("employee-search").value;
    if (searchValue) {
      alert(`Searching for employee: ${searchValue}`);
      // Add your search logic here
    }
  });

  // Form submission
  const addNewBtn = document.querySelector(".btn-primary");
  const updateBtn = document.querySelector(".btn-secondary");

  addNewBtn.addEventListener("click", function () {
    alert("Add New Employee functionality would be implemented here");
  });

  updateBtn.addEventListener("click", function () {
    alert("Update Employee functionality would be implemented here");
  });
});
