const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});



function redirectToSignup() {
    window.location.href = "signup.html";
  }

  function updateContent(buttonId, imagePath) {
    
    document.querySelectorAll('.tabBtn').forEach(btn => btn.classList.remove('bg-blue-400'));
    
   
    const btn = document.getElementById(buttonId);
    btn.classList.add('bg-blue-400');
    
   
    document.getElementById('contentImage').src = imagePath;
}


document.getElementById('payrollBtn').addEventListener('click', function() {
    updateContent('payrollBtn', './assets/exp1.webp');
});

document.getElementById('expensesBtn').addEventListener('click', function() {
    updateContent('expensesBtn', './assets/exp2.webp');
});

document.getElementById('vatBtn').addEventListener('click', function() {
    updateContent('vatBtn', './assets/exp3.webp');
});

document.getElementById('reportingBtn').addEventListener('click', function() {
    updateContent('reportingBtn', './assets/exp4.webp');
});



document.addEventListener('DOMContentLoaded', function () {
  const tabs = document.querySelectorAll('.tab');
  const contents = document.querySelectorAll('.content');

  tabs.forEach(tab => {
      tab.addEventListener('click', function () {
          tabs.forEach(t => {
              t.classList.remove('text-blue-600');
              t.classList.add('text-gray-600');
          });
          contents.forEach(c => c.classList.add('hidden'));

          
          tab.classList.remove('text-gray-600');
          tab.classList.add('text-blue-600');

          const contentId = `${tab.id.split('-')[0]}-content`;
          document.getElementById(contentId).classList.remove('hidden');
      });
  });
});
