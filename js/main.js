import "../css/base.css";
import "../css/components/header.css";
import "../css/components/experience.css";
import "../css/components/tools.css";
import "../css/components/education.css";
import "../css/components/interests.css";
import "../css/utilities.css";
import html2pdf from 'html2pdf.js';


document.getElementById("downloadPdf").addEventListener("click", function(e) {
  createRipple(e);
  
  const element = document.getElementById("resume-content");
  const opt = {
    margin: 10,
    filename: "resume_gleb_klyha.pdf",
    image: { type: "jpeg", quality: 0.98 },
    html2canvas: { scale: 2, useCORS: true, logging: true },
    jsPDF: { unit: "mm", format: "a4", orientation: "portrait" },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .catch((error) => {
      console.error("Ошибка при генерации PDF:", error);
      alert("Произошла ошибка при генерации PDF. Проверьте консоль для деталей.");
    });
});

function setupEditable() {
  const saveEdit = (element) => {
    const id = element.dataset.id;
    const key = `resumeText_${id}`;
    localStorage.setItem(key, element.textContent);
    element.contentEditable = false;
    element.classList.remove('editing');
    
    if (element.classList.contains('multi-line')) {
      element.innerHTML = element.textContent.replace(/\n/g, '<br>');
    }
  };

  document.querySelectorAll('.editable').forEach(element => {
    const id = element.dataset.id;
    const key = `resumeText_${id}`;

    if (localStorage.getItem(key)) {
      element.textContent = localStorage.getItem(key);
    }

    element.addEventListener('dblclick', () => {
      element.contentEditable = true;
      element.classList.add('editing');
      
      if (element.classList.contains('multi-line')) {
        element.innerHTML = element.innerHTML.replace(/<br>/g, '\n');
      }

      const range = document.createRange();
      range.selectNodeContents(element);
      const sel = window.getSelection();
      sel.removeAllRanges();
      sel.addRange(range);
    });

    element.addEventListener('blur', () => saveEdit(element));

    element.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        saveEdit(element);
      }
      
      if (e.key === 'Enter' && e.shiftKey && element.classList.contains('multi-line')) {
        document.execCommand('insertLineBreak');
        e.preventDefault();
      }
    });
  });
}

function createRipple(event) {
  const button = event.currentTarget;
  const circle = document.createElement("span");
  const diameter = Math.max(button.clientWidth, button.clientHeight);
  const radius = diameter / 2;

  circle.style.width = circle.style.height = `${diameter}px`;
  circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
  circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
  circle.classList.add("ripple");

  const ripple = button.getElementsByClassName("ripple")[0];
  if (ripple) {
    ripple.remove();
  }

  button.appendChild(circle);
}

function setupRippleEffects() {
  document.querySelectorAll(".experience-item, .tool-box, .ui-box, .law-box, .graphic-box, .interest-tag").forEach((item) => {
    item.addEventListener("click", createRipple);
  });

  const chatSection = document.querySelector(".chat-section");
  if (chatSection) {
    chatSection.addEventListener("click", createRipple);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  setupRippleEffects();
  setupEditable();
});