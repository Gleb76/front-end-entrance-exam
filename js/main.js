import '../css/style.css'
import javascriptLogo from '../javascript.svg'
import viteLogo from '../public/vite.svg'
import { setupCounter } from './counter.js'

document.querySelector('#app').innerHTML = `
  <div class="top-section">
      <div class="resume-container">
        <img src="resume.jpeg" alt="Profile Photo" class="profile-photo">
        <div class="rounded-box">
          <div class="resume">
            <header class="resume-header">
              <p class="helloToResume">Hello 👋🏻 I'm</p>
              <h1>Gleb Klyha</h1>
              <div class="profession">
                <p>Frontend Developer</p>
              </div>
            </header>
          </div>
        </div>
        <div class="rounded-box-language">
          <div class="languagesBox">
            <header class="language-header">
              <p>Languages</p>
              <div class="languagesLevel">
                <div class="language-item">
                  <span class="language-name">Russian</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar" style="width: 100%"></div>
                    </div>
                  </div>
                </div>
                <div class="language-item">
                  <span class="language-name">English</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar" style="width: 70%"></div>
                    </div>
                  </div>
                </div>
                <div class="language-item">
                  <span class="language-name">Italian</span>
                  <div class="language-progress-container">
                    <div class="language-progress">
                      <div class="language-progress-bar" style="width: 30%"></div>
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
          <h2 class="experience-title">Experience</h2>
          <div class="experience-container">
            <div class="experience-item first-item">
              <div class="experience-date">Jun. 2023 - Present</div>
              <div class="experience-badge">most recent</div>
              <div class="experience-content">
                <div class="role-info">
                  <div class="roleName">Marketing Manager</div>
                  <div class="company-info">
                    <span class="companyName">Pankayam</span>
                    <span class="separator">|</span>
                    <span class="info">Full-time</span>
                  </div>
                </div>
                <ul class="job-description">
                  <li>Strategy development and planning of campaigns that promote the business and generate genuine traffic.</li>
                  <li>SEO Content Creation for Blogs, Website, Social media.</li>
                </ul>
              </div>
            </div>
            
            <div class="experience-item second-item">
              <div class="experience-date">2017 - Present</div>
              <div class="experience-content-wrapper">
                <div class="role-info-wrapper">
                  <div class="role-info-graphic">Graphic / Web designer</div>
                  <div class="type-of-role">Freelance</div>
                </div>
                <ul class="tasks-list">
                  <li>Development of internal projects from scratch, product design of brands</li>
                  <li>Landing page, webapps and hybrid apps</li>
                  <li>Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.</li>
                </ul>
              </div>
            </div>
            
            <div class="experience-item third-item">
              <div class="experience-date">Sep. 2021 - Jun. 2023</div>
              <div class="experience-content-wrapper">
                <div class="role-info-wrapper">
                  <div class="role-info">Legal Assistant</div>
                  <div class="company-info">
                    <span class="experience">Law Firm</span>
                    <span class="separator-experience">|</span>
                    <span class="info-intern">Intern</span>
                  </div>
                </div>
                <ul class="tasks-list">
                  <li>Provide administrative support to lawyer and enhance office effectiveness</li>
                  <li>Handle communication with clients, witnesses etc.</li>
                  <li>Prepare case briefs and summarize depositions, interrogatories and testimony</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        
        <div class="small-box">
          <div class="tools-title">Tools</div>
          <div class="tools-container">
            <div class="tool-box design-box">
              <span class="tool-badge">design</span>
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
              <span class="tool-badge">no-code</span>
              <div class="tools-grid">
                <img src="no-code/noCode1.svg" alt="No-code tool 1" class="tool-icon">
                <img src="no-code/noCode2.svg" alt="No-code tool 2" class="tool-icon">
                <img src="no-code/noCode3.svg" alt="No-code tool 3" class="tool-icon">
                <img src="no-code/noCode4.svg" alt="No-code tool 4" class="tool-icon">
              </div>
            </div>
            
            <div class="tool-box ai-box">
              <span class="tool-badge ai-badge">artificial intelligence</span>
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
              <div class="education-title">Education</div>
              <div class="boxes-container">
                <div class="left-column">
                  <div class="ui-box">
                    <div class="ui-date">2023</div>
                    <div class="design-role">UI/UX</div>
                    <div class="ui-heart">
                      <img src="heart.svg" alt="Heart" width="11" height="9">
                    </div>
                    <div class="skills-container">
                      <span class="skill-tag">#UX</span>
                      <span class="skill-tag">#UI</span>
                      <span class="skill-tag">#research</span>
                      <span class="skill-tag">#DesignSystem</span>
                      <span class="skill-tag">#Ui</span>
                      <span class="skill-tag">#wireframing</span>
                      <span class="skill-tag">#figma</span>
                      <span class="skill-tag">#Ux</span>
                    </div>
                    <div class="course-info">Coursera</div>
                  </div>
                  <div class="graphic-box">
                    <div class="graphic-date">2017</div>
                    <div class="graphic-role">Graphic design</div>
                    <div class="skills-container-graphic">
                      <span class="skill-tag-graphic">#branding</span>
                      <span class="skill-tag-graphic">#web</span>
                      <span class="skill-tag-graphic">#illustration</span>
                      <span class="skill-tag-graphic">#adobe</span>
                    </div>
                    <div class="university-info">Coursera</div>
                  </div>
                </div>
                <div class="law-box">
                  <div class="law-date">2017 - 2022</div>
                  <div class="law-role">Law</div>
                  <div class="skills-container-law">
                    <span class="skill-tag-law">#law</span>
                    <span class="skill-tag-law">#legalStudies</span>
                    <span class="skill-tag-law">#contracts</span>
                    <span class="skill-tag-law">#internationalLaws</span>
                  </div>
                  <div class="university-info">University of Kerala</div>
                </div>
              </div>
            </div>
          </div>

          <div class="right-sections">
            <div class="interests-section">
              <div class="interests-title">Interests</div>
              <div class="interests-container">
                <div class="interest-row">
                  <span class="interest-tag">branding</span>
                  <span class="interest-tag">design</span>
                  <span class="interest-tag">photography</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag">artificial intelligence</span>
                  <span class="interest-tag">illustration</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag">typography</span>
                  <span class="interest-tag">social networks</span>
                </div>
                <div class="interest-row">
                  <span class="interest-tag">research</span>
                  <span class="interest-tag">dron pilot</span>
                  <span class="interest-tag">games</span>
                </div>
              </div>
            </div>
            <div class="chat-section">
              <div class="chat-title">Let´s chat! I´m ready to work on exciting projects</div>
              <div class="chat-mail">srkarthik.designscape@gmail.com</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>

`;
setupCounter(document.querySelector('#counter'))