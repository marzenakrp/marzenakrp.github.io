---
layout: page
title: projects
permalink: /projects/
description: Key research projects I'm working on
nav: true
nav_order: 3
horizontal: true
---

<div class="projects-container">
  <!-- Project 1: NoCha -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/img/publications/nocha_leaderboard.png" alt="NoCha">
    </div>
    <div class="project-content">
      <h2>NoCha</h2>
      <p>Large language models have made huge strides, expanding from handling up to 2k tokens to even 2M tokens. However, evaluating them remains a challenge. It's tough to assess book-length inputs and avoid testing on training data. NoCha addresses this by involving readers who have read recently published novels for entertainment. These readers create true and false claims about the books they read, writing pairs of statements about the same event or character, differing just by the false information included in the false claim. Models then validate these claims using the book as context. The idea is simple, if you know that "Despite her skills as an Apoth, Nusis is unable to reverse engineer the type of portal opened by the reagents key found in Rona's wooden chest." is true, then you know that "By using her skills as an Apoth, Nusis is able to reverse engineer the type of portal opened by the reagents key found in Rona's wooden chest." is false. Yet, this task is tough for current models, and you can see their performance on the <a href='https://novelchallenge.github.io/' target='_blank'>NoCha leaderboard</a>.</p>
      <div class="project-links">
        <a href="https://novelchallenge.github.io/" class="btn btn-sm z-depth-0" role="button" target="_blank">Website</a>
      </div>
    </div>
  </div>

  <!-- Project 2: LitMT -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/img/publications/litmt.png" alt="LitMT">
    </div>
    <div class="project-content">
      <h2>LitMT</h2>
      <p>In LitMT we're looking into how machine translation can help translators and bring new stories to readers. Machine translation can make translators' work easier by reducing their cognitive load (O'Brien, 2012). But there's another side to it—the readers. We've build a <a href='https://www.litmt.org/' target='_blank'>website</a> to share novels that have been translated by machines, including some that haven't been available in other languages before. This project is as much about understanding how readers feel about these translations as it is about the translation process itself. By gathering feedback directly from readers, we hope to make machine translations better and more enjoyable to read. It's an exciting area to explore, and I believe that by getting readers' insight on what works and what doesn't, we can make literature more accessible to everyone, regardless of the language they speak.</p>
      <div class="project-links">
        <a href="https://www.litmt.org/" class="btn btn-sm z-depth-0" role="button" target="_blank">Website</a>
      </div>
    </div>
  </div>


</div>

<style>
  .projects-container {
    display: flex;
    flex-direction: column;
    gap: 30px;
    margin-top: 20px;
  }
  
  .project-card {
    display: flex;
    gap: 25px;
    padding: 25px;
    background-color: var(--global-bg-color);
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;
  }
  
  .project-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0,0,0,0.12);
  }
  
  .project-image {
    flex: 0 0 250px;
  }
  
  .project-image img {
    width: 100%;
    height: 180px;
    object-fit: cover;
    border-radius: 8px;
  }
  
  .project-content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-content h2 {
    margin-top: 0;
    margin-bottom: 15px;
    color: var(--global-theme-color);
    font-size: 1.5rem;
  }
  
  .project-content p {
    margin-bottom: 20px;
    flex: 1;
  }
  
  .project-links {
    display: flex;
    gap: 10px;
  }
  
  .project-links a {
    background-color: var(--global-theme-color);
    color: white;
    padding: 5px 15px;
    text-decoration: none;
    border-radius: 5px;
    font-weight: 500;
    transition: background-color 0.2s ease;
  }
  
  .project-links a:hover {
    background-color: var(--global-hover-color, var(--global-theme-color));
    opacity: 0.9;
  }
  
  @media (max-width: 768px) {
    .project-card {
      flex-direction: column;
    }
    
    .project-image {
      flex: 0 0 auto;
    }
  }
</style>
