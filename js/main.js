import html2pdf from 'html2pdf.js';


document.getElementById("downloadPdf").addEventListener("click", async function(e) {
  e.preventDefault();
  createRipple(e);
  
  const element = document.getElementById("resume-content");
  if (!element) {
    alert('Элемент для PDF не найден!');
    return;
  }

  const opt = {
    margin: 10,
    filename: "resume_gleb_klyha.pdf",
    image: { 
      type: "jpeg", 
      quality: 0.98 
    },
    html2canvas: { 
      scale: 2,
      logging: true,
      allowTaint: true,
      useCORS: true
    },
    jsPDF: { 
      unit: "mm", 
      format: "a4", 
      orientation: "portrait" 
    }
  };

  try {
    const worker = html2pdf().set(opt).from(element);
    await worker.save();
  } catch (error) {
    console.error("PDF Error:", error);
    alert("Ошибка: " + error.message);
  }
});

function setupEditable() {
  const saveEdit = (element) => {
    try {
      const id = element.dataset.id;
      const key = `resumeText_${id}`;
      sessionStorage.setItem(key, element.textContent);
      element.contentEditable = false;
      element.classList.remove('editing');
      
      if (element.classList.contains('multi-line')) {
        element.innerHTML = element.textContent.replace(/\n/g, '<br>');
      }
    } catch (e) {
      console.error('Storage error:', e);
    }
  };

  document.querySelectorAll('.editable').forEach(element => {
    try {
      const id = element.dataset.id;
      const key = `resumeText_${id}`;
      
      if (sessionStorage.getItem(key)) {
        element.textContent = sessionStorage.getItem(key);
      }
    } catch (e) {
      console.error('Storage read error:', e);
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