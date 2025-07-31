import "../css/style.css";
import html2pdf from 'html2pdf.js';

document.querySelector("#app").innerHTML = `
  <button id="downloadPdf" class="download-btn">Скачать PDF</button>
  <div id="resume-content">
    <div class="top-section">
      <div class="resume-container">
        <img src="resume.jpeg" alt="Profile Photo" class="profile-photo">
        <div class="rounded-box">
          <div class="resume">
            <header class="resume-header">
              <p class="helloToResume editable" data-id="hello">Hello 👋🏻 I'm</p>
              <h1 class="editable" data-id="name">Gleb Klyha</h1>
              <div class="profession">
                <p class="editable" data-id="position">Frontend Developer</p>
              </div>
            </header>
          </div>
        </div>
        <div class="rounded-box-language">
          <div class="languagesBox">
            <header class="language-header">
              <p class="editable" data-id="languages-title">Languages</p>
              <div class="languagesLevel">
                <div class="language-item">
                  <span class="language-name editable" data-id="lang1-name">Russian</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar editable" data-id="lang1-progress" style="width: 100%"></div>
                    </div>
                  </div>
                </div>
                <div class="language-item">
                  <span class="language-name editable" data-id="lang2-name">English</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar editable" data-id="lang2-progress" style="width: 70%"></div>
                    </div>
                  </div>
                </div>
                <div class="language-item">
                  <span class="language-name editable" data-id="lang3-name">Italian</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar editable" data-id="lang3-progress" style="width: 30%"></div>
                    </div>
                  </div>
                </div>
              </div>
            </header>
          </div>
        </div>
      </div>
    </div>

    <div class="main-content">
      <div class="experience-section">
        <div class="large-box">
          <h2 class="experience-title editable" data-id="exp-title">Experience</h2>
          <div class="experience-container">
            <div class="experience-item first-item">
              <div class="experience-date editable" data-id="exp1-date">Jun. 2023 - Present</div>
              <div class="experience-badge editable" data-id="exp1-badge">most recent</div>
              <div class="experience-content">
                <div class="role-info">
                  <div class="roleName editable" data-id="exp1-position">Marketing Manager</div>
                  <div class="company-info">
                    <span class="companyName editable" data-id="exp1-company">Pankayam</span>
                    <span class="separator">|</span>
                    <span class="info editable" data-id="exp1-type">Full-time</span>
                  </div>
                </div>
                <ul class="job-description">
                  <li><span class="editable multi-line" data-id="exp1-desc1">Strategy development and planning of campaigns that promote the business and generate genuine traffic</span></li>
                  <li><span class="editable multi-line" data-id="exp1-desc2">SEO Content Creation for Blogs, Website, Social media</span></li>
                </ul>
              </div>
            </div>
            
            <div class="experience-item second-item">
              <div class="experience-date editable" data-id="exp2-date">2017 - Present</div>
              <div class="experience-content-wrapper">
                <div class="role-info-wrapper">
                  <div class="role-info-graphic editable" data-id="exp2-position">Graphic / Web designer</div>
                  <div class="type-of-role editable" data-id="exp2-type">Freelance</div>
                </div>
                <ul class="tasks-list">
                  <li><span class="editable multi-line" data-id="exp2-desc1">Development of internal projects from scratch, product design of brands</span></li>
                  <li><span class="editable multi-line" data-id="exp2-desc2">Landing page, webapps and hybrid apps</span></li>
                  <li><span class="editable multi-line" data-id="exp2-desc3">Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</span></li>
                </ul>
              </div>
            </div>
            
            <div class="experience-item third-item">
              <div class="experience-date editable" data-id="exp3-date">Sep. 2021 - Jun. 2023</div>
              <div class="experience-content-wrapper">
                <div class="role-info-wrapper">
                  <div class="role-info editable" data-id="exp3-position">Legal Assistant</div>
                  <div class="company-info">
                    <span class="experience editable" data-id="exp3-company">Law Firm</span>
                    <span class="separator-experience">|</span>
                    <span class="info-intern editable" data-id="exp3-type">Intern</span>
                  </div>
                </div>
                <ul class="tasks-list">
                  <li><span class="editable multi-line" data-id="exp3-desc1">Provide administrative support to lawyer and enhance office effectiveness</span></li>
                  <li><span class="editable multi-line" data-id="exp3-desc2">Handle communication with clients, witnesses etc.</span></li>
                  <li><span class="editable multi-line" data-id="exp3-desc3">Prepare case briefs and summarize depositions, interrogatories and testimony</span></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="small-box">
          <div class="tools-title editable" data-id="tools-title">Tools</div>
          <div class="tools-container">
            <div class="tool-box design-box">
              <span class="tool-badge editable" data-id="design-badge">design</span>
              <div class="tools-grid">
                <img src="design/design1.svg" alt="Design tool 1" class="tool-icon">
                <img src="design/design2.svg" alt="Design tool 2" class="tool-icon">
                <img src="design/design3.svg" alt="Design tool 3" class="tool-icon">
                <img src="design/design4.svg" alt="Design tool 4" class="tool-icon">
                <img src="design/design5.svg" alt="Design tool 5" class="tool-icon">
                <img src="design/design6.svg" alt="Design tool 6" class="tool-icon">
              </div>
            </div>
            
            <div class="tool-box no-code-box">
              <span class="tool-badge editable" data-id="nocode-badge">no-code</span>
              <div class="tools-grid">
                <img src="no-code/noCode1.svg" alt="No-code tool 1" class="tool-icon">
                <img src="no-code/noCode2.svg" alt="No-code tool 2" class="tool-icon">
                <img src="no-code/noCode3.svg" alt="No-code tool 3" class="tool-icon">
                <img src="no-code/noCode4.svg" alt="No-code tool 4" class="tool-icon">
              </div>
            </div>
            
            <div class="tool-box ai-box">
              <span class="tool-badge ai-badge editable" data-id="ai-badge">artificial intelligence</span>
              <div class="tools-grid">
                <img src="artifical/artifical1.svg" alt="AI tool 1" class="tool-icon">
                <img src="artifical/artifical2.svg" alt="AI tool 2" class="tool-icon">
                <img src="artifical/artifical3.svg" alt="AI tool 3" class="tool-icon">
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="bottom-section">
        <div class="education-container">
          <div class="education-section">
            <div class="education-box">
              <div class="education-title editable" data-id="education-title">Education</div>
              <div class="boxes-container">
                <div class="left-column">
                  <div class="ui-box">
                    <div class="ui-date editable" data-id="edu1-date">2023</div>
                    <div class="design-role editable" data-id="edu1-course">UI/UX</div>
                    <div class="ui-heart">
                      <img src="heart.svg" alt="Heart" width="11" height="9">
                    </div>
                    <div class="skills-container">
                      <span class="skill-tag editable" data-id="edu1-skill1">#UX</span>
                      <span class="skill-tag editable" data-id="edu1-skill2">#UI</span>
                      <span class="skill-tag editable" data-id="edu1-skill3">#research</span>
                      <span class="skill-tag editable" data-id="edu1-skill4">#DesignSystem</span>
                      <span class="skill-tag editable" data-id="edu1-skill5">#Ui</span>
                      <span class="skill-tag editable" data-id="edu1-skill6">#wireframing</span>
                      <span class="skill-tag editable" data-id="edu1-skill7">#figma</span>
                      <span class="skill-tag editable" data-id="edu1-skill8">#Ux</span>
                    </div>
                    <div class="course-info editable" data-id="edu1-provider">Coursera</div>
                  </div>
                  <div class="graphic-box">
                    <div class="graphic-date editable" data-id="edu2-date">2017</div>
                    <div class="graphic-role editable" data-id="edu2-course">Graphic design</div>
                    <div class="skills-container-graphic">
                      <span class="skill-tag-graphic editable" data-id="edu2-skill1">#branding</span>
                      <span class="skill-tag-graphic editable" data-id="edu2-skill2">#web</span>
                      <span class="skill-tag-graphic editable" data-id="edu2-skill3">#illustration</span>
                      <span class="skill-tag-graphic editable" data-id="edu2-skill4">#adobe</span>
                    </div>
                    <div class="university-info editable" data-id="edu2-provider">Coursera</div>
                  </div>
                </div>
                <div class="law-box">
                  <div class="law-date editable" data-id="edu3-date">2017 - 2022</div>
                  <div class="law-role editable" data-id="edu3-course">Law</div>
                  <div class="skills-container-law">
                    <span class="skill-tag-law editable" data-id="edu3-skill1">#law</span>
                    <span class="skill-tag-law editable" data-id="edu3-skill2">#legalStudies</span>
                    <span class="skill-tag-law editable" data-id="edu3-skill3">#contracts</span>
                    <span class="skill-tag-law editable" data-id="edu3-skill4">#internationalLaws</span>
                  </div>
                  <div class="university-info editable" data-id="edu3-provider">University of Kerala</div>
                </div>
              </div>
            </div>
          </div>

          <div class="right-sections">
            <div class="interests-section">
              <div class="interests-title editable" data-id="interests-title">Interests</div>
              <div class="interests-container">
                <div class="interest-row">
                  <span class="interest-tag editable" data-id="interest1">branding</span>
                  <span class="interest-tag editable" data-id="interest2">design</span>
                  <span class="interest-tag editable" data-id="interest3">photography</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag editable" data-id="interest4">artificial intelligence</span>
                  <span class="interest-tag editable" data-id="interest5">illustration</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag editable" data-id="interest6">typography</span>
                  <span class="interest-tag editable" data-id="interest7">social networks</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag editable" data-id="interest8">research</span>
                  <span class="interest-tag editable" data-id="interest9">dron pilot</span>
                  <span class="interest-tag editable" data-id="interest10">games</span>
                </div>
              </div>
            </div>
            <div class="chat-section">
              <div class="chat-title editable multi-line" data-id="chat-title">Let´s chat! I´m ready to work on exciting projects</div>
              <div class="chat-mail editable" data-id="chat-email">srkarthik.designscape@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
`;

document.getElementById("downloadPdf").addEventListener("click", function(e) {
  createRipple(e); // Create ripple effect on click
  
  const element = document.getElementById("resume-content");
  const opt = {
    margin: 10,
    filename: "resume_gleb_klyha.pdf",
    image: {
      type: "jpeg",
      quality: 0.98,
    },
    html2canvas: {
      scale: 2,
      useCORS: true,
      logging: true,
    },
    jsPDF: {
      unit: "mm",
      format: "a4",
      orientation: "portrait",
    },
  };

  html2pdf()
    .set(opt)
    .from(element)
    .save()
    .catch((error) => {
      console.error("Ошибка при генерации PDF:", error);
      alert(
        "Произошла ошибка при генерации PDF. Проверьте консоль для деталей.",
      );
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
  document.querySelectorAll(".experience-item").forEach((item) => {
    item.addEventListener("click", createRipple);
  });

  document.querySelectorAll(".tool-box").forEach((box) => {
    box.addEventListener("click", createRipple);
  });

  document
    .querySelectorAll(".ui-box, .law-box, .graphic-box")
    .forEach((box) => {
      box.addEventListener("click", createRipple);
    });

  document.querySelectorAll(".interest-tag").forEach((tag) => {
    tag.addEventListener("click", createRipple);
  });

  const chatSection = document.querySelector(".chat-section");
  if (chatSection) {
    chatSection.addEventListener("click", createRipple);
  }
}

setupRippleEffects();
setupEditable();
