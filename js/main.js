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
    <div class="job-description">
      Strategy development and planning of campaigns that promote the business and generate genuine traffic. SEO Content Creation for Blogs, Website, Social media.
    </div>
  </div>
</div>
        <div class="experience-item second-item"></div>
        <div class="experience-item third-item"></div>
      </div>
    </div>
    <div class="small-box">
    </div>
  </div>
`;
setupCounter(document.querySelector('#counter'))