import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';
import ContentViewer from 'ui-component/ContentViewer';

// Template HTML with placeholders
const homePageCustomHtmlTemplate = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>API Gateway - AI Model Hub</title> 
  <style>
    /* Color Variables - Based on project palette */
    :root { /* Light Theme */ --primary-lighter: #F0F7FF; --primary-light: #60B8FF; --primary-main: #1E88E5; --primary-dark: #1565C0; --primary-gradient: linear-gradient(90deg, #1E88E5, #1565C0); --secondary-lighter: #F6F0FF; --secondary-light: #B4A1FF; --secondary-main: #673AB7; --secondary-dark: #5E35B1; --secondary-gradient: linear-gradient(90deg, #673AB7, #5E35B1); --success-lighter: #E6F8F1; --success-light: #81C784; --success-main: #4CAF50; --success-dark: #388E3C; --warning-lighter: #FFF8E1; --warning-light: #FFD54F; --warning-main: #FFC107; --warning-dark: #FFA000; --error-lighter: #FFEBEE; --error-light: #E57373; --error-main: #F44336; --error-dark: #D32F2F; --grey-50: #FAFAFA; --grey-100: #F5F5F5; --grey-200: #EEEEEE; --grey-300: #E0E0E0; --grey-500: #9E9E9E; --grey-700: #616161; --grey-900: #212121; --background-paper: #FFFFFF; --background-default: #F8F9FA; --text-primary: #212121; --text-secondary: #616161; --divider: rgba(0, 0, 0, 0.09); }
    .dark-mode { /* Dark Theme Variables */ --primary-lighter: #60B8FF; --primary-light: #42A5F5; --primary-main: #1E88E5; --primary-dark: #1565C0; --secondary-lighter: #B4A1FF; --secondary-light: #9575CD; --secondary-main: #673AB7; --secondary-dark: #5E35B1; --success-lighter: #81C784; --success-light: #66BB6A; --success-main: #4CAF50; --success-dark: #388E3C; --warning-lighter: #FFD54F; --warning-light: #FFCA28; --warning-main: #FFC107; --warning-dark: #FFA000; --background-paper: #1A223F; --background-default: #111936; --text-primary: #FFFFFF; --text-secondary: rgba(255, 255, 255, 0.7); --divider: rgba(255, 255, 255, 0.12); }
    #custom-html-root-for-styling { background: var(--background-default); color: var(--text-primary); min-height: 100vh; overflow-x: hidden; transition: background 0.3s ease, color 0.3s ease; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif; }
    #custom-html-root-for-styling * { margin: 0; padding: 0; box-sizing: border-box; }
    #custom-html-root-for-styling .container { max-width: 1200px; margin: 0 auto; padding: 40px 20px; }
    #custom-html-root-for-styling .hero { text-align: center; padding: 80px 20px 60px; }
    #custom-html-root-for-styling .hero h1 { font-size: 3.5rem; margin-bottom: 20px; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; font-weight: 700; }
    #custom-html-root-for-styling .hero p { font-size: 1.2rem; max-width: 700px; margin: 0 auto 40px; color: var(--text-secondary); line-height: 1.6; }
    #custom-html-root-for-styling .cta-button { background: var(--primary-gradient); color: white; border: none; padding: 15px 30px; font-size: 1rem; font-weight: 600; border-radius: 50px; cursor: pointer; transition: all 0.3s ease; box-shadow: 0 4px 15px rgba(30, 136, 229, 0.3); }
    #custom-html-root-for-styling .cta-button:hover { transform: translateY(-2px); box-shadow: 0 6px 20px rgba(30, 136, 229, 0.4); }
    #custom-html-root-for-styling .section-title { font-size: 2.2rem; margin-bottom: 40px; text-align: center; color: var(--text-primary); }
    #custom-html-root-for-styling .models-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-bottom: 80px; }
    #custom-html-root-for-styling .card { overflow: visible; width: 190px; height: 254px; }
    #custom-html-root-for-styling .content { width: 100%; height: 100%; transform-style: preserve-3d; transition: transform 300ms; box-shadow: 0px 10px 30px rgba(0, 0, 0, 0.08), 0px 0px 1px rgba(0, 0, 0, 0.1); border-radius: 12px; background: linear-gradient( 135deg, var(--background-paper), var(--grey-100) ); }
    #custom-html-root-for-styling .front, #custom-html-root-for-styling .back { background: linear-gradient( 145deg, var(--background-paper), var(--grey-100) ); position: absolute; width: 100%; height: 100%; backface-visibility: hidden; -webkit-backface-visibility: hidden; border-radius: 12px; overflow: hidden; }
    .dark-mode #custom-html-root-for-styling .content { box-shadow: 0px 0px 15px 2px rgba(0, 0, 0, 0.35); }
    .dark-mode #custom-html-root-for-styling .front, .dark-mode #custom-html-root-for-styling .back { background: linear-gradient( 145deg, rgba(30, 33, 40, 0.85), rgba(26, 29, 35, 0.95) ); color: white; }
    #custom-html-root-for-styling .back { width: 100%; height: 100%; justify-content: center; display: flex; align-items: center; overflow: hidden; }
    #custom-html-root-for-styling .back::before { position: absolute; content: " "; display: block; width: 160px; height: 160%; background: linear-gradient( 90deg, transparent, rgba(30, 136, 229, 0.3), rgba(30, 136, 229, 0.4), rgba(30, 136, 229, 0.3), transparent ); animation: rotation_481 5000ms infinite linear; }
    .dark-mode #custom-html-root-for-styling .back::before { background: linear-gradient( 90deg, transparent, rgba(30, 136, 229, 0.7), rgba(30, 136, 229, 0.8), rgba(30, 136, 229, 0.7), transparent ); }
    #custom-html-root-for-styling .back-content { position: absolute; width: 99%; height: 99%; background: linear-gradient( 145deg, var(--background-paper), var(--grey-100) ); border-radius: 12px; color: var(--text-primary); display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 30px; }
    .dark-mode #custom-html-root-for-styling .back-content { background: linear-gradient( 145deg, rgba(30, 33, 40, 0.9), rgba(26, 29, 35, 0.99) ); color: white; }
    #custom-html-root-for-styling .card:hover .content { transform: rotateY(180deg); }
    @keyframes rotation_481 { 0% { transform: rotateZ(0deg); } 100% { transform: rotateZ(360deg); } }
    #custom-html-root-for-styling .front { transform: rotateY(180deg); color: var(--text-primary); }
    #custom-html-root-for-styling .front .front-content { position: absolute; width: 100%; height: 100%; padding: 10px; display: flex; flex-direction: column; justify-content: space-between; }
    #custom-html-root-for-styling .badges-container { display: flex; gap: 10px; }
    #custom-html-root-for-styling .front-content .badge { background-color: rgba(255, 255, 255, 0.7); padding: 2px 10px; border-radius: 10px; backdrop-filter: blur(2px); width: fit-content; display: flex; align-items: center; gap: 5px; font-size: 0.7rem;}
    .dark-mode #custom-html-root-for-styling .front-content .badge { background-color: rgba(0, 0, 0, 0.2); }
    #custom-html-root-for-styling .dot { display: inline-block; width: 8px; height: 8px; border-radius: 50%; box-shadow: 0 0 4px rgba(0, 0, 0, 0.1); }
    #custom-html-root-for-styling .green-dot { background-color: var(--success-main); }
    #custom-html-root-for-styling .yellow-dot { background-color: var(--warning-main); }
    #custom-html-root-for-styling .blue-dot { background-color: var(--primary-main); }
    #custom-html-root-for-styling .purple-dot { background-color: var(--secondary-main); }
    #custom-html-root-for-styling .description { box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.05); width: 100%; padding: 10px; background-color: rgba(255, 255, 255, 0.7); backdrop-filter: blur(5px); border-radius: 8px; display: flex; flex-direction: column; gap: 18px; }
    .dark-mode #custom-html-root-for-styling .description { box-shadow: 0px 0px 10px 2px rgba(0, 0, 0, 0.2); background-color: rgba(19, 21, 26, 0.5); }
    #custom-html-root-for-styling .item { padding: 8px; border-radius: 8px; background: linear-gradient( 145deg, var(--background-paper), var(--grey-100) ); min-height: 45px; display: flex; flex-direction: column; justify-content: center; }
    .dark-mode #custom-html-root-for-styling .item { background: linear-gradient( 145deg, rgba(40, 44, 52, 0.5), rgba(32, 35, 42, 0.3) ); }
    #custom-html-root-for-styling .title { font-size: 11px; max-width: 100%; display: flex; justify-content: space-between; align-items: center; }
    #custom-html-root-for-styling .title p { width: 85%; margin: 0; color: var(--text-primary); }
    #custom-html-root-for-styling .card-footer { color: var(--text-secondary); margin-top: 5px; font-size: 8px; margin-bottom: 0; }
    #custom-html-root-for-styling .front .img { position: absolute; width: 100%; height: 100%; object-fit: cover; object-position: center; }
    #custom-html-root-for-styling .circle { width: 90px; height: 90px; border-radius: 50%; background-color: rgba(30, 136, 229, 0.3); position: relative; filter: blur(15px); animation: floating 2600ms infinite linear; }
    .dark-mode #custom-html-root-for-styling .circle { background-color: rgba(30, 136, 229, 0.6); }
    #custom-html-root-for-styling #bottom { background-color: rgba(30, 136, 229, 0.2); left: 50px; top: 0px; width: 150px; height: 150px; animation-delay: -800ms; }
    .dark-mode #custom-html-root-for-styling #bottom { background-color: rgba(30, 136, 229, 0.5); }
    #custom-html-root-for-styling #right { background-color: rgba(103, 58, 183, 0.15); left: 160px; top: -80px; width: 30px; height: 30px; animation-delay: -1800ms; }
    .dark-mode #custom-html-root-for-styling #right { background-color: rgba(103, 58, 183, 0.4); }
    @keyframes floating { 0% { transform: translateY(0px); } 50% { transform: translateY(10px); } 100% { transform: translateY(0px); } }
    #custom-html-root-for-styling .features-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin-bottom: 80px; }
    #custom-html-root-for-styling .feature-card { position: relative; display: flex; align-items: center; justify-content: center; width: 320px; padding: 2px; border-radius: 24px; overflow: hidden; line-height: 1.6; transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1); }
    #custom-html-root-for-styling .feature-content { display: flex; flex-direction: column; align-items: flex-start; gap: 24px; padding: 34px; border-radius: 22px; color: var(--text-primary); overflow: hidden; background: var(--background-paper); transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1); }
    #custom-html-root-for-styling .feature-content .heading { font-weight: 700; font-size: 24px; line-height: 1.3; z-index: 1; transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1); color: var(--text-primary); }
    #custom-html-root-for-styling .feature-content .para { z-index: 1; opacity: 0.8; font-size: 16px; transition: all 0.48s cubic-bezier(0.23, 1, 0.32, 1); color: var(--grey-900); font-weight: 500; line-height: 1.6; }
    .dark-mode #custom-html-root-for-styling .feature-content .para { color: var(--text-secondary); }
    #custom-html-root-for-styling .feature-card::before { content: ""; position: absolute; height: 160%; width: 160%; border-radius: inherit; background: var(--primary-gradient); transform-origin: center; animation: moving 4.8s linear infinite paused; transition: all 0.88s cubic-bezier(0.23, 1, 0.32, 1); }
    #custom-html-root-for-styling .feature-card:hover::before { animation-play-state: running; z-index: -1; width: 20%; }
    #custom-html-root-for-styling .feature-card:hover .feature-content .heading, #custom-html-root-for-styling .feature-card:hover .feature-content .para { color: #000000; }
    .dark-mode #custom-html-root-for-styling .feature-card:hover .feature-content .heading, .dark-mode #custom-html-root-for-styling .feature-card:hover .feature-content .para { color: #FFFFFF; }
    #custom-html-root-for-styling .feature-card:hover { box-shadow: 0rem 6px 13px rgba(30, 136, 229, 0.1), 0rem 24px 24px rgba(30, 136, 229, 0.09), 0rem 55px 33px rgba(30, 136, 229, 0.05), 0rem 97px 39px rgba(30, 136, 229, 0.01), 0rem 152px 43px rgba(30, 136, 229, 0); scale: 1.05; }
    @keyframes moving { 0% { transform: rotate(0); } 100% { transform: rotate(360deg); } }
    #custom-html-root-for-styling .providers-section { text-align: center; margin-bottom: 80px; }
    #custom-html-root-for-styling .providers-container { display: flex; flex-wrap: wrap; justify-content: center; gap: 30px; margin: 0 auto; max-width: 1000px; }
    #custom-html-root-for-styling .provider-card { max-width: 350px; width: 100%; padding: 30px; border-radius: 16px; border: 1px solid var(--divider); background: var(--background-paper); box-shadow: 2px 4px 16px 0px rgba(0, 0, 0, 0.05); transition: all 0.3s ease; }
    #custom-html-root-for-styling .provider-card:hover { transform: translateY(-5px); box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1); }
    #custom-html-root-for-styling .logo-container { height: 200px; border-radius: 12px; background: var(--grey-100); display: flex; align-items: center; justify-content: center; margin-bottom: 20px; position: relative; overflow: hidden; }
    #custom-html-root-for-styling .logo-container::before { content: ''; position: absolute; width: 100%; height: 100%; background: radial-gradient(50% 50% at 50% 50%, rgba(30, 136, 229, 0.1) 0%, transparent 100%); mask-image: radial-gradient(50% 50% at 50% 50%, white 0%, transparent 100%); -webkit-mask-image: radial-gradient(50% 50% at 50% 50%, white 0%, transparent 100%); }
    #custom-html-root-for-styling .logo-grid { display: flex; flex-wrap: wrap; justify-content: center; align-items: center; gap: 20px; }
    #custom-html-root-for-styling .logo-item { width: 50px; height: 50px; border-radius: 50%; background: rgba(255, 255, 255, 0.05); box-shadow: 0px 0px 8px 0px rgba(30, 136, 229, 0.25) inset, 0px 32px 24px -16px rgba(0, 0, 0, 0.2); display: flex; align-items: center; justify-content: center; transition: all 0.3s ease; }
    #custom-html-root-for-styling .logo-item.large { width: 70px; height: 70px; }
    #custom-html-root-for-styling .logo-item:hover { transform: scale(1.1); }
    #custom-html-root-for-styling .provider-card h3 { font-size: 20px; font-weight: 600; margin: 15px 0; color: var(--text-primary); }
    #custom-html-root-for-styling .provider-card p { font-size: 14px; color: var(--text-secondary); line-height: 1.6; }
    #custom-html-root-for-styling .animated-line { height: 150px; width: 1px; position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); background: linear-gradient(to bottom, transparent, var(--primary-main), transparent); animation: moveUpDown 2s infinite; }
    @keyframes moveUpDown { 0%, 100% { height: 100px; top: 50%; } 50% { height: 150px; top: 45%; } }
    .dark-mode #custom-html-root-for-styling svg { filter: brightness(1.8); }
    @media (max-width: 768px) { #custom-html-root-for-styling .hero h1 { font-size: 2.5rem; } #custom-html-root-for-styling .features-container, #custom-html-root-for-styling .models-container, #custom-html-root-for-styling .providers-container { flex-direction: column; align-items: center; } #custom-html-root-for-styling .feature-card { width: 100%; max-width: 340px; } }
  </style>
</head>
<body>
  <div id="custom-html-root-for-styling">
    <div class="container">
      <section class="hero"><h1>{{HOME_HERO_TITLE}}</h1><p>{{HOME_HERO_DESCRIPTION}}</p><button class="cta-button">{{HOME_HERO_CTA}}</button></section>
      <section><h2 class="section-title">{{HOME_MODELS_TITLE}}</h2>
        <div class="models-container">
          <div class="card"><div class="content"><div class="back"><div class="back-content"><img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/claude-color.svg" alt="Claude" width="50px" height="50px"/><strong>Anthropic</strong></div></div><div class="front"><div class="img"><div class="circle"></div><div class="circle" id="right"></div><div class="circle" id="bottom"></div></div><div class="front-content"><div class="badges-container"><small class="badge"><span class="dot green-dot"></span>{{HOME_MODELS_BADGES_LATEST}}</small><small class="badge"><span class="dot yellow-dot"></span>{{HOME_MODELS_BADGES_POPULAR}}</small></div><div class="description"><div class="item latest-item"><div class="title"><p class="title"><strong>claude-sonnet-4-20250514</strong></p><span class="dot green-dot"></span></div><p class="card-footer">200K Context &nbsp; | &nbsp; 64K Max Output</p></div><div class="item popular-item"><div class="title"><p class="title"><strong>claude-3-7-sonnet-20250219</strong></p><span class="dot yellow-dot"></span></div><p class="card-footer">200K Context &nbsp; | &nbsp; 64K Max Output</p></div></div></div></div></div></div>
          <div class="card"><div class="content"><div class="back"><div class="back-content"><img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/openai.svg" alt="OpenAI" width="50px" height="50px"/><strong>OpenAI</strong></div></div><div class="front"><div class="img"><div class="circle"></div><div class="circle" id="right"></div><div class="circle" id="bottom"></div></div><div class="front-content"><div class="badges-container"><small class="badge"><span class="dot green-dot"></span>{{HOME_MODELS_BADGES_LATEST}}</small><small class="badge"><span class="dot yellow-dot"></span>{{HOME_MODELS_BADGES_POPULAR}}</small></div><div class="description"><div class="item latest-item"><div class="title"><p class="title"><strong>gpt-4o</strong></p><span class="dot green-dot"></span></div><p class="card-footer">128K Context &nbsp; | &nbsp; 4K Max Output</p></div><div class="item popular-item"><div class="title"><p class="title"><strong>gpt-4-turbo</strong></p><span class="dot yellow-dot"></span></div><p class="card-footer">128K Context &nbsp; | &nbsp; 4K Max Output</p></div></div></div></div></div></div>
          <div class="card"><div class="content"><div class="back"><div class="back-content"><img src="https://registry.npmmirror.com/@lobehub/icons-static-svg/latest/files/icons/gemini-color.svg" alt="Google" width="50px" height="50px"/><strong>Google</strong></div></div><div class="front"><div class="img"><div class="circle"></div><div class="circle" id="right"></div><div class="circle" id="bottom"></div></div><div class="front-content"><div class="badges-container"><small class="badge"><span class="dot green-dot"></span>{{HOME_MODELS_BADGES_POPULAR}}</small><small class="badge"><span class="dot yellow-dot"></span>{{HOME_MODELS_BADGES_POPULAR}}</small></div><div class="description"><div class="item latest-item"><div class="title"><p class="title"><strong>gemini-1.5-pro</strong></p><span class="dot green-dot"></span></div><p class="card-footer">1M Context &nbsp; | &nbsp; 8K Max Output</p></div><div class="item popular-item"><div class="title"><p class="title"><strong>gemini-1.5-flash</strong></p><span class="dot yellow-dot"></span></div><p class="card-footer">1M Context &nbsp; | &nbsp; 8K Max Output</p></div></div></div></div></div></div>
        </div>
      </section>
      <section><h2 class="section-title">{{HOME_FEATURES_TITLE}}</h2>
        <div class="features-container">
          <div class="feature-card"><div class="feature-content"><p class="heading">{{HOME_FEATURES_UNIFIED_API_HEADING}}</p><p class="para">{{HOME_FEATURES_UNIFIED_API_PARAGRAPH}}</p></div></div>
          <div class="feature-card"><div class="feature-content"><p class="heading">{{HOME_FEATURES_COST_EFFICIENCY_HEADING}}</p><p class="para">{{HOME_FEATURES_COST_EFFICIENCY_PARAGRAPH}}</p></div></div>
          <div class="feature-card"><div class="feature-content"><p class="heading">{{HOME_FEATURES_RELIABLE_UPTIME_HEADING}}</p><p class="para">{{HOME_FEATURES_RELIABLE_UPTIME_PARAGRAPH}}</p></div></div>
        </div>
      </section>
      <section class="providers-section"><h2 class="section-title">{{HOME_PROVIDERS_TITLE}}</h2>
        <div class="providers-container">
          <div class="provider-card"><div class="logo-container"><div class="logo-grid"><div class="logo-item"><svg class="h-4 w-4" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none"><path fill="url(#prefix__paint0_radial_980_20147)" d="M16 8.016A8.522 8.522 0 008.016 16h-.032A8.521 8.521 0 000 8.016v-.032A8.521 8.521 0 007.984 0h.032A8.522 8.522 0 0016 7.984v.032z"></path><defs><radialGradient gradientTransform="matrix(16.1326 5.4553 -43.70045 129.2322 1.588 6.503)" gradientUnits="userSpaceOnUse" r="1" cy="0" cx="0" id="prefix__paint0_radial_980_20147"><stop stop-color="#9168C0" offset=".067"></stop><stop stop-color="#5684D1" offset=".343"></stop><stop stop-color="#1BA1E3" offset=".672"></stop></radialGradient></defs></svg></div><div class="logo-item large"><svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" class="h-6 w-6" viewBox="0 0 24 24" stroke-width="0" fill="currentColor" stroke="currentColor"><path d="M9.75 14a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Zm4.5 0a.75.75 0 0 1 .75.75v2.5a.75.75 0 0 1-1.5 0v-2.5a.75.75 0 0 1 .75-.75Z"></path><path d="M12 2c2.214 0 4.248.657 5.747 1.756.136.099.268.204.397.312.584.235 1.077.546 1.474.952.85.869 1.132 2.037 1.132 3.368 0 .368-.014.733-.052 1.086l.633 1.478.043.022A4.75 4.75 0 0 1 24 15.222v1.028c0 .529-.309.987-.565 1.293-.28.336-.636.653-.966.918a13.84 13.84 0 0 1-1.299.911l-.024.015-.006.004-.039.025c-.223.135-.45.264-.68.386-.46.245-1.122.571-1.941.895C16.845 21.344 14.561 22 12 22c-2.561 0-4.845-.656-6.479-1.303a19.046 19.046 0 0 1-1.942-.894 14.081 14.081 0 0 1-.535-.3l-.144-.087-.04-.025-.006-.004-.024-.015a13.16 13.16 0 0 1-1.299-.911 6.913 6.913 0 0 1-.967-.918C.31 17.237 0 16.779 0 16.25v-1.028a4.75 4.75 0 0 1 2.626-4.248l.043-.022.633-1.478a10.195 10.195 0 0 1-.052-1.086c0-1.331.282-2.498 1.132-3.368.397-.406.89-.717 1.474-.952.129-.108.261-.213.397-.312C7.752 2.657 9.786 2 12 2Zm-8 9.654v6.669a17.59 17.59 0 0 0 2.073.98C7.595 19.906 9.686 20.5 12 20.5c2.314 0 4.405-.594 5.927-1.197a17.59 17.59 0 0 0 2.073-.98v-6.669l-.038-.09c-.046.061-.095.12-.145.177-.793.9-2.057 1.259-3.782 1.259-1.59 0-2.738-.544-3.508-1.492a4.323 4.323 0 0 1-.355-.508h-.344a4.323 4.323 0 0 1-.355.508C10.704 12.456 9.555 13 7.965 13c-1.725 0-2.989-.359-3.782-1.259a3.026 3.026 0 0 1-.145-.177Zm6.309-1.092c.445-.547.708-1.334.851-2.301.057-.357.087-.718.09-1.079v-.031c-.001-.762-.166-1.26-.43-1.568l-.008-.01c-.341-.391-1.046-.689-2.533-.529-1.505.163-2.347.537-2.824 1.024-.462.473-.705 1.18-.705 2.32 0 .605.044 1.087.135 1.472.092.384.231.672.423.89.365.413 1.084.75 2.657.75.91 0 1.527-.223 1.964-.564.14-.11.268-.235.38-.374Zm2.504-2.497c.136 1.057.403 1.913.878 2.497.442.545 1.134.938 2.344.938 1.573 0 2.292-.337 2.657-.751.384-.435.558-1.151.558-2.361 0-1.14-.243-1.847-.705-2.319-.477-.488-1.318-.862-2.824-1.025-1.487-.161-2.192.139-2.533.529-.268.308-.437.808-.438 1.578v.02c.002.299.023.598.063.894Z"></path></svg></div><div class="logo-item"><svg class="h-4 w-4" viewBox="0 0 512 512" clip-rule="evenodd" fill-rule="evenodd" image-rendering="optimizeQuality" text-rendering="geometricPrecision" shape-rendering="geometricPrecision" xmlns="http://www.w3.org/2000/svg"><rect ry="105.042" rx="104.187" height="512" width="512" fill="#CC9B7A"></rect><path d="M318.663 149.787h-43.368l78.952 212.423 43.368.004-78.952-212.427zm-125.326 0l-78.952 212.427h44.255l15.932-44.608 82.846-.004 16.107 44.612h44.255l-79.126-212.427h-45.317zm-4.251 128.341l26.91-74.701 27.083 74.701h-53.993z" fill-rule="nonzero" fill="#1F1F1E"></path></svg></div></div><div class="animated-line"></div></div><h3>{{HOME_PROVIDERS_LEADING_HEADING}}</h3><p>{{HOME_PROVIDERS_LEADING_PARAGRAPH}}</p></div>
          <div class="provider-card"><div class="logo-container"><div class="logo-grid"><div class="logo-item large"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 28 28" width="28" class="h-8 w-8"><path fill="currentColor" d="M26.153 11.46a6.888 6.888 0 0 0-.608-5.73 7.117 7.117 0 0 0-3.29-2.93 7.238 7.238 0 0 0-4.41-.454 7.065 7.065 0 0 0-2.41-1.742A7.15 7.15 0 0 0 12.514 0a7.216 7.216 0 0 0-4.217 1.346 7.061 7.061 0 0 0-2.603 3.539 7.12 7.12 0 0 0-2.734 1.188A7.012 7.012 0 0 0 .966 8.268a6.979 6.979 0 0 0 .88 8.273 6.89 6.89 0 0 0 .607 5.729 7.117 7.117 0 0 0 3.29 2.93 7.238 7.238 0 0 0 4.41.454 7.061 7.061 0 0 0 2.409 1.742c.92.404 1.916.61 2.923.604a7.215 7.215 0 0 0 4.22-1.345 7.06 7.06 0 0 0 2.605-3.543 7.116 7.116 0 0 0 2.734-1.187 7.01 7.01 0 0 0 1.993-2.196 6.978 6.978 0 0 0-.884-8.27Zm-10.61 14.71c-1.412 0-2.505-.428-3.46-1.215.043-.023.119-.064.168-.094l5.65-3.22a.911.911 0 0 0 .464-.793v-7.86l2.389 1.36a.087.087 0 0 1 .046.065v6.508c0 2.952-2.491 5.248-5.257 5.248ZM4.062 21.354a5.17 5.17 0 0 1-.635-3.516c.042.025.115.07.168.1l5.65 3.22a.928.928 0 0 0 .928 0l6.898-3.93v2.72a.083.083 0 0 1-.034.072l-5.711 3.255a5.386 5.386 0 0 1-4.035.522 5.315 5.315 0 0 1-3.23-2.443ZM2.573 9.184a5.283 5.283 0 0 1 2.768-2.301V13.515a.895.895 0 0 0 .464.793l6.897 3.93-2.388 1.36a.087.087 0 0 1-.08.008L4.52 16.349a5.262 5.262 0 0 1-2.475-3.185 5.192 5.192 0 0 1 .527-3.98Zm19.623 4.506-6.898-3.93 2.388-1.36a.087.087 0 0 1 .08-.008l5.713 3.255a5.28 5.28 0 0 1 2.054 2.118 5.19 5.19 0 0 1-.488 5.608 5.314 5.314 0 0 1-2.39 1.742v-6.633a.896.896 0 0 0-.459-.792Zm2.377-3.533a7.973 7.973 0 0 0-.168-.099l-5.65-3.22a.93.93 0 0 0-.928 0l-6.898 3.93V8.046a.083.083 0 0 1 .034-.072l5.712-3.251a5.375 5.375 0 0 1 5.698.241 5.262 5.262 0 0 1 1.865 2.28c.39.92.506 1.93.335 2.913ZM9.631 15.009l-2.39-1.36a.083.083 0 0 1-.046-.065V7.075c.001-.997.29-1.973.832-2.814a5.297 5.297 0 0 1 2.231-1.935 5.382 5.382 0 0 1 5.659.72 4.89 4.89 0 0 0-.168.093l-5.65 3.22a.913.913 0 0 0-.465.793l-.003 7.857Zm1.297-2.76L14 10.5l3.072 1.75v3.5L14 17.499l-3.072-1.75v-3.5Z"></path></svg></div><div class="logo-item"><svg class="h-6 w-6" viewBox="0 0 287.56 191" xmlns="http://www.w3.org/2000/svg" data-name="Layer 1" id="Layer_1"><defs><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" y2="91.45" x2="260.34" y1="101.45" x1="62.34" id="linear-gradient"><stop stop-color="#0064e1" offset="0"></stop><stop stop-color="#0064e1" offset="0.4"></stop><stop stop-color="#0073ee" offset="0.83"></stop><stop stop-color="#0082fb" offset="1"></stop></linearGradient><linearGradient gradientUnits="userSpaceOnUse" gradientTransform="matrix(1, 0, 0, -1, 0, 192)" y2="126" x2="41.42" y1="53" x1="41.42" id="linear-gradient-2"><stop stop-color="#0082fb" offset="0"></stop><stop stop-color="#0064e0" offset="1"></stop></linearGradient></defs><path d="M31.06,126c0,11,2.41,19.41,5.56,24.51A19,19,0,0,0,S3.19,160c8.1,0,15.51-2,29.79-21.76,11.44-15.83,24.92-38,34-52l15.36-23.6c10.67-16.39,23-34.61,37.18-47C181.07,5.6,193.54,0,206.09,0c21.07,0,41.14,12.21,56.5,35.11,16.81,25.08,25,56.67,25,89.27,0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191V160c17.63,0,22-16.2,22-34.74,0-26.42-6.16-55.74-19.73-76.69-9.63-14.86-22.11-23.94-35.84-23.94-14.85,0-26.8,11.2-40.23,31.17-7.14,10.61-14.47,23.54-22.7,38.13l-9.06,16c-18.2,32.27-22.81,39.62-31.91,51.75C84.74,183,71.12,191,53.19,191c-21.27,0-34.72-9.21-43-23.09C3.34,156.6,0,141.76,0,124.85Z" fill="#0081fb"></path><path d="M24.49,37.3C38.73,15.35,59.28,0,82.85,0c13.65,0,27.22,4,41.39,15.61,15.5,12.65,32,33.48,52.63,67.81l7.39,12.32c17.84,29.72,28,45,33.93,52.22,7.64,9.26,13,12,19.94,12,17.63,0,22-16.2,22-34.74l27.4-.86c0,19.38-3.82,33.62-10.32,44.87C271,180.13,258.72,191,238.13,191c-12.8,0-24.14-2.78-36.68-14.61-9.64-9.08-20.91-25.21-29.58-39.71L146.08,93.6c-12.94-21.62-24.81-37.74-31.68-45C107,40.71,97.51,31.23,82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78Z" fill="url(#linear-gradient)"></path><path d="M82.35,31.23c-12.27,0-22.69,8.61-31.41,21.78C38.61,71.62,31.06,99.34,31.06,126c0,11,2.41,19.41,5.56,24.51L10.14,167.91C3.34,156.6,0,141.76,0,124.85,0,94.1,8.44,62.05,24.49,37.3,38.73,15.35,59.28,0,82.85,0Z" fill="url(#linear-gradient-2)"></path></svg></div></div><div class="animated-line"></div></div><h3>{{HOME_PROVIDERS_OPENSOURCE_HEADING}}</h3><p>{{HOME_PROVIDERS_OPENSOURCE_PARAGRAPH}}</p></div>
        </div>
      </section>
    </div>
  </div>
</body>
</html>
`; // End of homePageCustomHtmlTemplate

const Home = () => {
  const theme = useTheme();
  const { t } = useTranslation();
  const isDarkMode = theme.palette.mode === 'dark';
  const wrapperClassName = isDarkMode ? 'dark-mode' : '';

  // Replace placeholders with translated strings
  let finalHtmlContent = homePageCustomHtmlTemplate;
  const translations = {
    '{{HOME_HERO_TITLE}}': t('home.hero.title'),
    '{{HOME_HERO_DESCRIPTION}}': t('home.hero.description'),
    '{{HOME_HERO_CTA}}': t('home.hero.cta'),
    '{{HOME_MODELS_TITLE}}': t('home.models.title'),
    '{{HOME_MODELS_BADGES_LATEST}}': t('home.models.badges.latest'),
    '{{HOME_MODELS_BADGES_POPULAR}}': t('home.models.badges.popular'),
    '{{HOME_MODELS_BADGES_FASTEST}}': t('home.models.badges.fastest'),
    '{{HOME_MODELS_BADGES_MULTIMODAL}}': t('home.models.badges.multimodal'),
    '{{HOME_FEATURES_TITLE}}': t('home.features.title'),
    '{{HOME_FEATURES_UNIFIED_API_HEADING}}': t('home.features.unified_api.heading'),
    '{{HOME_FEATURES_UNIFIED_API_PARAGRAPH}}': t('home.features.unified_api.paragraph'),
    '{{HOME_FEATURES_COST_EFFICIENCY_HEADING}}': t('home.features.cost_efficiency.heading'),
    '{{HOME_FEATURES_COST_EFFICIENCY_PARAGRAPH}}': t('home.features.cost_efficiency.paragraph'),
    '{{HOME_FEATURES_RELIABLE_UPTIME_HEADING}}': t('home.features.reliable_uptime.heading'),
    '{{HOME_FEATURES_RELIABLE_UPTIME_PARAGRAPH}}': t('home.features.reliable_uptime.paragraph'),
    '{{HOME_PROVIDERS_TITLE}}': t('home.providers.title'),
    '{{HOME_PROVIDERS_LEADING_HEADING}}': t('home.providers.leading.heading'),
    '{{HOME_PROVIDERS_LEADING_PARAGRAPH}}': t('home.providers.leading.paragraph'),
    '{{HOME_PROVIDERS_OPENSOURCE_HEADING}}': t('home.providers.opensource.heading'),
    '{{HOME_PROVIDERS_OPENSOURCE_PARAGRAPH}}': t('home.providers.opensource.paragraph'),
  };

  for (const placeholder in translations) {
    // Use a loop with a RegExp for global replacement (g flag) to replace all occurrences
    finalHtmlContent = finalHtmlContent.replace(new RegExp(placeholder.replace(/[\{\}]/g, '\\$&'), 'g'), translations[placeholder]);
  }

  // Also translate the page <title> if it's part of your i18n setup, 
  // though this won't be directly in ContentViewer. 
  // You might need a useEffect to update document.title
  // Example: 
  // useEffect(() => {
  //   document.title = t('home.pageTitleKey', 'API Gateway - AI Model Hub'); // Provide a default if key not found
  // }, [t]);


  return (
    <Box className={wrapperClassName}>
      <ContentViewer
        content={finalHtmlContent}
        containerStyle={{
          minHeight: 'calc(100vh - 136px)',
        }}
      />
    </Box>
  );
};

export default Home;