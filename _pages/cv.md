---
layout: page
permalink: /cv/
title: cv
nav: true
nav_order: 6
---

You can download a copy of my CV [here](/assets/pdf/cv.pdf).

For a (rather complete) list of publications, please see my [Google Scholar profile](https://scholar.google.com/citations?user=-sWY5igAAAAJ).

<div class="cv-timeline-container">
  <div class="cv-column">
    <h2 class="cv-section-title">EDUCATION</h2>
    <div class="cv-timeline">

      <div class="cv-item">
        <span class="cv-year">2014-2020</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #00356B;">東大</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF TOKYO</strong>
          <p>Ph.D.</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2012-2014</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #00356B;">東大</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF TOKYO</strong>
          <p>Master of Arts</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2011-2012</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #00356B;">東大</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF TOKYO</strong>
          <p>Research Stay</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2008-2010</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #A51E36;">UW</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF WARSAW</strong>
          <p>Master of Arts</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2008-2009</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #1B4D3E;">外大</div>
        <div class="cv-details">
          <strong>TOKYO UNIVERSITY OF FOREIGN STUDIES</strong>
          <p>Research Stay</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2004-2007</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #A51E36;">UW</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF WARSAW</strong>
          <p>Bachelor of Arts</p>
        </div>
      </div>

    </div>
  </div>

  <div class="cv-column">
    <h2 class="cv-section-title">PROFESSIONAL EXPERIENCE</h2>
    <div class="cv-timeline">

      <div class="cv-item">
        <span class="cv-year">Now</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #A6192E;">SFU</div>
        <div class="cv-details">
          <strong>SIMON FRASER UNIVERSITY</strong>
          <p>Assistant Professor</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2024-2026</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #737373;">MS</div>
        <div class="cv-details">
          <strong>MICROSOFT</strong>
          <p>Senior Researcher</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2021-2024</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #881c1c;">UM</div>
        <div class="cv-details">
          <strong>UNIVERSITY OF MASSACHUSETTS AMHERST</strong>
          <p>Postdoctoral Researcher</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2018-2019</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #6B3FA0;">藝大</div>
        <div class="cv-details">
          <strong>TOKYO UNIVERSITY OF THE ARTS</strong>
          <p>Lecturer</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2014-2018</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #0055A4;">NIT</div>
        <div class="cv-details">
          <strong>NIPPON INSTITUTE OF TECHNOLOGY</strong>
          <p>Lecturer</p>
        </div>
      </div>

      <div class="cv-item">
        <span class="cv-year">2014-2020</span>
        <div class="cv-connector"><div class="cv-dot"></div></div>
        <div class="cv-logo" style="background-color: #E85D26;">ILL</div>
        <div class="cv-details">
          <strong>INNOVATIVE LANGUAGE LEARNING</strong>
          <p>Language Specialist</p>
        </div>
      </div>

    </div>
  </div>
</div>

<style>
  .cv-timeline-container {
    display: flex;
    gap: 60px;
    margin-top: 30px;
  }

  .cv-column {
    flex: 1;
  }

  .cv-section-title {
    font-size: 1.1rem;
    font-weight: 700;
    letter-spacing: 2px;
    margin-bottom: 25px;
    color: var(--global-text-color);
  }

  .cv-timeline {
    position: relative;
  }

  .cv-item {
    display: flex;
    align-items: flex-start;
    margin-bottom: 28px;
    position: relative;
  }

  .cv-year {
    min-width: 75px;
    font-size: 0.85rem;
    color: var(--global-text-color-light, #666);
    padding-top: 10px;
    font-weight: 500;
    text-align: right;
    padding-right: 15px;
  }

  .cv-connector {
    display: flex;
    flex-direction: column;
    align-items: center;
    position: relative;
    padding-top: 10px;
    margin-right: 15px;
  }

  .cv-dot {
    width: 8px;
    height: 8px;
    background-color: var(--global-theme-color, #333);
    border-radius: 50%;
    z-index: 1;
  }

  .cv-item:not(:last-child) .cv-connector::after {
    content: '';
    position: absolute;
    top: 22px;
    width: 2px;
    height: calc(100% + 24px);
    background-color: var(--global-divider-color, #ddd);
  }

  .cv-logo {
    width: 48px;
    height: 48px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-weight: 700;
    font-size: 0.8rem;
    flex-shrink: 0;
    margin-right: 12px;
    box-shadow: 0 2px 6px rgba(0,0,0,0.12);
  }

  .cv-details {
    padding-top: 2px;
  }

  .cv-details strong {
    font-size: 0.85rem;
    letter-spacing: 0.5px;
    display: block;
    margin-bottom: 2px;
  }

  .cv-details p {
    margin: 0;
    font-size: 0.85rem;
    color: var(--global-text-color-light, #666);
  }

  @media (max-width: 768px) {
    .cv-timeline-container {
      flex-direction: column;
      gap: 30px;
    }

    .cv-year {
      min-width: 65px;
    }
  }
</style>
