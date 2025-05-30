import React from 'react';
// Removed unused imports
// import { showError } from 'utils/common';
// import { API } from 'utils/api';
// import BaseIndex from './baseIndex';
import { Box } from '@mui/material';
import { useTranslation } from 'react-i18next';
import ContentViewer from 'ui-component/ContentViewer';

const Home = () => {
  const { t } = useTranslation();

  // Modified HTML content without the internal theme toggle button and script,
  // and without the initial 'light-mode' class on <html>.
  // It relies on the parent application applying the 'dark-mode' class for dark theme.
  // CSS variables moved to the body selector for better compatibility with ContentViewer
  const rawHtmlContent = `
<!DOCTYPE html>
<html lang="${t('language')}"> <!-- Use i18n language code -->
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Gateway - AI Model Hub</title>
  <style>
    /* Color Variables - Based on project palette */
    body {
      /* Light Theme (default) */
      --primary-lighter: #F0F7FF;
      --primary-light: #60B8FF;
      --primary-main: #1E88E5;
      --primary-dark: #1565C0;
      --primary-gradient: linear-gradient(90deg, #1E88E5, #1565C0);
      
      --secondary-lighter: #F6F0FF;
      --secondary-light: #B4A1FF;
      --secondary-main: #673AB7;
      --secondary-dark: #5E35B1;
      --secondary-gradient: linear-gradient(90deg, #673AB7, #5E35B1);
      
      --success-lighter: #E6F8F1;
      --success-light: #81C784;
      --success-main: #4CAF50;
      --success-dark: #388E3C;
      
      --warning-lighter: #FFF8E1;
      --warning-light: #FFD54F;
      --warning-main: #FFC107;
      --warning-dark: #FFA000;
      
      --error-lighter: #FFEBEE;
      --error-light: #E57373;
      --error-main: #F44336;
      --error-dark: #D32F2F;
      
      --grey-50: #FAFAFA;
      --grey-100: #F5F5F5;
      --grey-200: #EEEEEE;
      --grey-300: #E0E0E0;
      --grey-500: #9E9E9E;
      --grey-700: #616161;
      --grey-900: #212121;
      
      --background-paper: #FFFFFF;
      --background-default: #F8F9FA;
      --text-primary: #212121;
      --text-secondary: #616161;
      --divider: rgba(0, 0, 0, 0.09);

      /* Apply default body styles here as well */
      background: var(--background-default);
      color: var(--text-primary);
      min-height: 100vh;
      overflow-x: hidden;
      transition: background 0.3s ease;
    }
    
    /* Dark Theme */
    /* Apply dark mode variables when a parent has dark-mode class */
    .dark-mode body {
      --primary-lighter: #60B8FF;
      --primary-light: #42A5F5;
      --primary-main: #1E88E5;
      --primary-dark: #1565C0;
      
      --secondary-lighter: #B4A1FF;
      --secondary-light: #9575CD;
      --secondary-main: #673AB7;
      --secondary-dark: #5E35B1;
      
      --success-lighter: #81C784;
      --success-light: #66BB6A;
      --success-main: #4CAF50;
      --success-dark: #388E3C;
      
      --warning-lighter: #FFD54F;
      --warning-light: #FFCA28;
      --warning-main: #FFC107;
      --warning-dark: #FFA000;
      
      --background-paper: rgb(27,29,35);
      --background-default: rgb(19,21,26);
      --text-primary: #FFFFFF;
      --text-secondary: rgba(255, 255, 255, 0.7);
      --divider: rgba(255, 255, 255, 0.12);
    }

    /* Dark mode specific card styles */
    .dark-mode .content {
      box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.35);
    }

    .dark-mode .front,
    .dark-mode .back {
      background: linear-gradient(
        145deg,
        rgba(27, 29, 35, 0.85),
        rgba(27, 29, 35, 0.95)
      );
      color: white;
    }

    .dark-mode .back::before {
      background: linear-gradient(
        90deg,
        transparent,
        rgba(30, 136, 229, 0.7),
        rgba(30, 136, 229, 0.8),
        rgba(30, 136, 229, 0.7),
        transparent
      );
    }

    .dark-mode .back-content {
      background: linear-gradient(
        145deg,
        rgba(27, 29, 35, 0.9),
        rgba(27, 29, 35, 0.99)
      );
      color: white;
    }

    .dark-mode .front-content .badge {
      background-color: rgba(0, 0, 0, 0.2);
    }

    .dark-mode .description {
      box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2);
      background-color: rgba(19, 21, 26, 0.5);
    }

    .dark-mode .item {
      background: linear-gradient(
        145deg,
        rgba(27, 29, 35, 0.5),
        rgba(27, 29, 35, 0.3)
      );
    }

    .dark-mode .title p {
      color: white;
    }

    .dark-mode .card-footer {
      color: rgba(255, 255, 255, 0.6);
    }

    .dark-mode .circle {
      background-color: rgba(30, 136, 229, 0.6);
    }

    .dark-mode #bottom {
      background-color: rgba(30, 136, 229, 0.5);
    }

    .dark-mode #right {
      background-color: rgba(103, 58, 183, 0.15);
      left: 160px;
      top: -80px;
      width: 30px;
      height: 30px;
      animation-delay: -1800ms;
    }

    @keyframes floating {
      0% {
        transform: translateY(0px);
      }

      50% {
        transform: translateY(10px);
      }

      100% {
        transform: translateY(0px);
      }
    }
    
    /* Feature Card - Component 2 */
    .features-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      margin-bottom: 80px;
    }
    
    .feature-card {
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      width: 320px;
      padding: 2px;
      border-radius: 24px;
      overflow: hidden;
      line-height: 1.6;
      transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .feature-content {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 24px;
      padding: 34px;
      border-radius: 22px;
      color: var(--text-primary);
      overflow: hidden;
      background: var(--background-paper);
      transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .feature-content .heading {
      font-weight: 700;
      font-size: 24px;
      line-height: 1.3;
      z-index: 1;
      transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
      color: var(--text-primary);
    }

    .feature-content .para {
      z-index: 1;
      opacity: 0.8;
      font-size: 16px;
      transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1);
      color: var(--grey-900); /* Fix for light mode readability */
      font-weight: 500; /* Make text slightly bolder */
      line-height: 1.6;
    }

    .dark-mode .feature-content .para {
      color: var(--text-secondary);
    }

    .feature-card::before {
      content: "";
      position: absolute;
      height: 160%;
      width: 160%;
      border-radius: inherit;
      background: var(--primary-gradient);
      transform-origin: center;
      animation: moving 4.8s linear infinite paused;
      transition: all 0.88s cubic-bezier(0.23, 1, 0.32, 1);
    }

    .feature-card:hover::before {
      animation-play-state: running;
      z-index: -1;
      width: 20%;
    }

    .feature-card:hover .feature-content .heading,
    .feature-card:hover .feature-content .para {
      color: #000000;
    }

    .dark-mode .feature-card:hover .feature-content .heading,
    .dark-mode .feature-card:hover .feature-content .para {
      color: #FFFFFF;
    }

    .feature-card:hover {
      box-shadow: 0rem 6px 13px rgba(30, 136, 229, 0.1),
        0rem 24px 24px rgba(30, 136, 229, 0.09),
        0rem 55px 33px rgba(30, 136, 229, 0.05),
        0rem 97px 39px rgba(30, 136, 229, 0.01), 
        0rem 152px 43px rgba(30, 136, 229, 0);
      scale: 1.05;
    }

    @keyframes moving {
      0% {
        transform: rotate(0);
      }

      100% {
        transform: rotate(360deg);
      }
    }
    
    /* Providers Section - Component 3 */
    .providers-section {
      text-align: center;
      margin-bottom: 80px;
    }
    
    .providers-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      gap: 30px;
      margin: 0 auto;
      max-width: 1000px;
    }
    
    .provider-card {
      max-width: 350px;
      width: 100%;
      padding: 30px;
      border-radius: 16px;
      border: 1px solid var(--divider);
      background: var(--background-paper);
      box-shadow: 2px 4px 16px 0px rgba(0, 0, 0, 0.05);
      transition: all 0.3s ease;
    }
    
    .provider-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }
    
    .logo-container {
      height: 200px;
      border-radius: 12px;
      background: var(--grey-100);
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
      position: relative;
      overflow: hidden;
    }
    
    .dark-mode .logo-container {
      background: rgba(19, 21, 26, 0.7);
    }
    
    .logo-container::before {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: radial-gradient(50% 50% at 50% 50%, rgba(30, 136, 229, 0.1) 0%, transparent 100%);
      mask-image: radial-gradient(50% 50% at 50% 50%, white 0%, transparent 100%);
      -webkit-mask-image: radial-gradient(50% 50% at 50% 50%, white 0%, transparent 100%);
    }
    
    .logo-grid {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      gap: 20px;
    }
    
    .logo-item {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.05);
      box-shadow: 0px 0px 8px 0px rgba(30, 136, 229, 0.25) inset, 0px 32px 24px -16px rgba(0, 0, 0, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.3s ease;
    }
    
    .logo-item.large {
      width: 70px;
      height: 70px;
    }
    
    .logo-item:hover {
      transform: scale(1.1);
    }
    
    .provider-card h3 {
      font-size: 20px;
      font-weight: 600;
      margin: 15px 0;
      color: var(--text-primary);
    }
    
    .provider-card p {
      font-size: 14px;
      color: var(--text-secondary);
      line-height: 1.6;
    }
    
    .animated-line {
      height: 150px;
      width: 1px;
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: linear-gradient(to bottom, transparent, var(--primary-main), transparent);
      animation: moveUpDown 2s infinite;
    }
    
    @keyframes moveUpDown {
      0%, 100% {
        height: 100px;
        top: 50%;
      }
      50% {
        height: 150px;
        top: 45%;
      }
    }
    
    /* Dark mode adjustments for SVGs */
    .dark-mode svg {
      filter: brightness(1.8);
    }
    
    /* Global Styles */
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    }
    
    /* Responsive Styles */
    @media (max-width: 768px) {
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .features-container, .models-container, .providers-container {
        flex-direction: column;
        align-items: center;
      }
      
      .feature-card {
        width: 100%;
        max-width: 340px;
      }
    }
  </style>
</head>
<body>
  <div class="container">
    <!-- Hero Section -->
    <section class="hero">
      <h1>${t('home.hero.title')}</h1>
      <p>${t('home.hero.description')}</p>
      <button class="cta-button">${t('home.hero.cta')}</button>
    </section>
    
    <!-- Models Section -->
    <section>
      <h2 class="section-title">${t('home.models.title')}</h2>
      <div class="models-container">
        <!-- Model Card 1 - Claude -->
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img
                  src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/claude-color.svg"
                  alt="Claude"
                  width="50px"
                  height="50px"
                />
                <strong>Anthropic</strong> <!-- Provider name, not translated -->
              </div>
            </div>
            <div class="front">
              <div class="img">
                <div class="circle"></div>
                <div class="circle" id="right"></div>
                <div class="circle" id="bottom"></div>
              </div>

              <div class="front-content">
                <div class="badges-container">
                  <small class="badge"><span class="dot green-dot"></span>${t('home.models.badges.latest')}</small>
                  <small class="badge"><span class="dot yellow-dot"></span>${t('home.models.badges.popular')}</small>
                </div>
                <div class="description">
                  <div class="item latest-item">
                    <div class="title">
                      <p class="title">
                        <strong>claude-sonnet-4-20250514</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot green-dot"></span>
                    </div>
                    <p class="card-footer">
                      200K Context &nbsp; | &nbsp; 64K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                  <div class="item popular-item">
                    <div class="title">
                      <p class="title">
                        <strong>claude-3-7-sonnet-20250219</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot yellow-dot"></span>
                    </div>
                    <p class="card-footer">
                      200K Context &nbsp; | &nbsp; 64K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Model Card 2 - GPT-4o -->
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img
                  src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg"
                  alt="OpenAI"
                  width="50px"
                  height="50px"
                />
                <strong>OpenAI</strong> <!-- Provider name, not translated -->
              </div>
            </div>
            <div class="front">
              <div class="img">
                <div class="circle"></div>
                <div class="circle" id="right"></div>
                <div class="circle" id="bottom"></div>
              </div>

              <div class="front-content">
                <div class="badges-container">
                  <small class="badge"><span class="dot green-dot"></span>${t('home.models.badges.latest')}</small>
                  <small class="badge"><span class="dot yellow-dot"></span>${t('home.models.badges.popular')}</small>
                </div>
                <div class="description">
                  <div class="item latest-item">
                    <div class="title">
                      <p class="title">
                        <strong>gpt-4o</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot green-dot"></span>
                    </div>
                    <p class="card-footer">
                      128K Context &nbsp; | &nbsp; 4K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                  <div class="item popular-item">
                    <div class="title">
                      <p class="title">
                        <strong>gpt-4-turbo</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot yellow-dot"></span>
                    </div>
                    <p class="card-footer">
                      128K Context &nbsp; | &nbsp; 4K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Model Card 3 - Gemini -->
        <div class="card">
          <div class="content">
            <div class="back">
              <div class="back-content">
                <img
                  src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gemini-color.svg"
                  alt="Google"
                  width="50px"
                  height="50px"
                />
                <strong>Google</strong> <!-- Provider name, not translated -->
              </div>
            </div>
            <div class="front">
              <div class="img">
                <div class="circle"></div>
                <div class="circle" id="right"></div>
                <div class="circle" id="bottom"></div>
              </div>

              <div class="front-content">
                <div class="badges-container">
                  <small class="badge"><span class="dot green-dot"></span>${t('home.models.badges.latest')}</small>
                  <small class="badge"><span class="dot yellow-dot"></span>${t('home.models.badges.popular')}</small>
                </div>
                <div class="description">
                  <div class="item latest-item">
                    <div class="title">
                      <p class="title">
                        <strong>gemini-1.5-pro</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot green-dot"></span>
                    </div>
                    <p class="card-footer">
                      1M Context &nbsp; | &nbsp; 8K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                  <div class="item popular-item">
                    <div class="title">
                      <p class="title">
                        <strong>gemini-1.5-flash</strong> <!-- Model name, not translated -->
                      </p>
                      <span class="dot yellow-dot"></span>
                    </div>
                    <p class="card-footer">
                      1M Context &nbsp; | &nbsp; 8K MaxOutput <!-- Technical spec, not translated -->
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Features Section -->
    <section>
      <h2 class="section-title">${t('home.features.title')}</h2>
      <div class="features-container">
        <!-- Feature 1 -->
        <div class="feature-card">
          <div class="feature-content">
            <p class="heading">${t('home.features.unified_api.heading')}</p>
            <p class="para">
              ${t('home.features.unified_api.paragraph')}
            </p>
          </div>
        </div>
        
        <!-- Feature 2 -->
        <div class="feature-card">
          <div class="feature-content">
            <p class="heading">${t('home.features.cost_efficiency.heading')}</p>
            <p class="para">
              ${t('home.features.cost_efficiency.paragraph')}
            </p>
          </div>
        </div>
        
        <!-- Feature 3 -->
        <div class="feature-card">
          <div class="feature-content">
            <p class="heading">${t('home.features.reliable_uptime.heading')}</p>
            <p class="para">
              ${t('home.features.reliable_uptime.paragraph')}
            </p>
          </div>
        </div>
      </div>
    </section>
    
    <!-- Providers Section -->
    <section class="providers-section">
      <h2 class="section-title">${t('home.providers.title')}</h2>
      <div class="providers-container">
        <!-- Provider Card 1 -->
        <div class="provider-card">
          <div class="logo-container">
            <div class="logo-grid">
              <div class="logo-item">
                <svg class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
                  <path fill="url(#prefix__paint0_radial_980_20147)" d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"></path>
                  <defs>
                    <radialGradient gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="prefix__paint0_radial_980_20147">
                      <stop stop-color="#9168C0" offset=".067"></stop>
                      <stop stop-color="#5684D1" offset=".343"></stop>
                      <stop stop-color="#1BA1E3" offset=".672"></stop>
                    </radialGradient>
                  </defs>
                </svg>
              </div>
              <div class="logo-item large">
                <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="h-6 w-6" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor">
                  <path d="M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"></path>
                  <path d="M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633
                  <path d="M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633 1.478.043.022A4.75 4.75 0 0 1 24 15.222v1.028c0 .529-.309.987-.565 1.293-.28.336-.636.653-.966.918a13.84 13.84 0 0 1-1.299.911l-.024.015-.006.004-.039.025c-.223.135-.45.264-.68.386-.46.245-1.122.571-1.941.895C16.845 21.344 14.561 22 12 22c-2.561 0-4.845-.656-6.479-1.303a19.046 19.046 0 0 1-1.942-.894 14.081 14.081 0 0 1-.535-.3l-.144-.087-.04-.025-.006-.004-.024-.015a13.16 13.16 0 0 1-1.299-.911 6.913 6.913 0 0 1-.967-.918C.31 17.237 0 16.779 0 16.25v-1.028a4.75 4.75 0 0 1 2.626-4.248l.043-.022.633-1.478a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.498 1.132-3.368.397-.406.89-.717 1.474-.952.129-.108.261-.213.397-.312C7.752 2.657 9.786 2 12 2Zm-8 9.654v6.669a17.59 17.59 0 0 0 2.073.98C7.595 19.906 9.686 20.5 12 20.5c2.314 0 4.405-.594 5.927-1.197a17.59 17.59 0 0 0 2.073-.98v-6.669l-.038-.09c-.046.061-.095.12-.145.177-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.544-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.344a4.323 4.323 0 0 1-.355.508C10.704 12.456 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a3.026 3.026 0 0 1-.145-.177Zm6.309-1.092c.445-.547.708-1.334.851-2.301.057-.357.087-.718.09-1.079v-.031c-.001-.762-.166-1.26-.43-1.568l-.008-.01c-.341-.391-1.046-.689-2.533-.529-1.505.163-2.347.537-2.824 1.024-.462.473-.705 1.18-.705 2.32 0 .605.044 1.087.135 1.472.092.384.231.672.423.89.365.413 1.084.75 2.657.75.91 0 1.527-.223 1.964-.564.14-.11.268-.235.38-.374Zm2.504-2.497c.136 1.057.403 1.913.878 2.497.442.545 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.151.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.318-.862-2.824-1.025-1.487-.161-2.192.139-2.533.529-.268.308-.437.808-.438 1.578v.02c.002.299.023.598.063.894Z"></path>
                </svg>
              </div>
              <div class="logo-item">
                <svg class="h-6 w-6" viewBox="0 0 287.56 191" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" id="Layer_1">
                  <defs>
                    <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" y2="91.45" x2="260.34" y1="101.45" x1="62.34" id="linear-gradient">
                      <stop stop-color="#0064e1" offset="0"></stop>
                      <stop stop-color="#0064e1" offset="0.4"></stop>
                      <stop stop-color="#0073ee" offset="0.83"></stop>
                      <stop stop-color="#0082fb" offset="1"></stop>
                    </linearGradient>
                    <linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" y2="126" x2="41.42" y1="53" x1="41.42" id="linear-gradient-2">
                      <stop stop-color="#0082fb" offset="0"></stop>
                      <stop stop-color="#0064e0" offset="1"></stop>
                    </linearGradient>
                  </defs>
                  <path d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,53.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" fill="#0081fb"></path>
                  <path d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" fill="url(#linear-gradient)"></path>
                  <path d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" fill="url(#linear-gradient-2)"></path>
                </svg>
              </div>
            </div>
            <div class="animated-line"></div>
          </div>
          <h3>${t('home.providers.opensource.heading')}</h3>
          <p>${t('home.providers.opensource.paragraph')}</p>
        </div>
      </div>
    </section>
  </div>
</body>
</html>
`;

  // The ContentViewer component will render the HTML string.
  // We don't need the loading or error states from the original API fetch.
  return (
    <Box>
      <ContentViewer
        content={rawHtmlContent}
        // Removed loading and errorMessage props as they were tied to API fetch
        containerStyle={{ minHeight: 'calc(100vh - 136px)' }}
        contentStyle={{ fontSize: 'larger' }}
      />
    </Box>
  );
};

export default Home;
