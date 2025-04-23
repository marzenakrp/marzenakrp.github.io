---
layout: about
title: about
permalink: /about/
subtitle: Senior Researcher at Microsoft

profile:
  align: right
  image: prof_pic.jpg
  image_circular: false # crops the image to make it circular
  more_info: >
    <div class="typing-container">
      <span id="typed-text"></span><span class="cursor">&nbsp;</span>
    </div>

selected_papers: false # includes a list of papers marked as "selected={true}"
social: true # includes social icons at the bottom of the page

announcements:
  enabled: false # includes a list of news items
  scrollable: true # adds a vertical scroll bar if there are more than 3 news items
  limit: 5 # leave blank to include all the news in the `_news` folder

latest_posts:
  enabled: false # includes a list of the newest posts
---

<script>
  document.addEventListener('DOMContentLoaded', function() {
    const words =["hello!", "cześć!", "你好！", "こんにちは*(^o^)*", "halo!", "👋😀", "hola!", "bonjour💕", "안녕하세요^o^", "hallo", "ciao!", "привет", "مرحبا"];
    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 150;
    const typedTextElement = document.getElementById('typed-text');

    function type() {
      const currentWord = words[wordIndex];
      
      if (isDeleting) {
        // Deleting
        typedTextElement.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
        typingSpeed = 80;
      } else {
        // Typing
        typedTextElement.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
        typingSpeed = 150;
      }

      // Change direction if word is complete
      if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        typingSpeed = 1000; // Pause before deleting
      } 
      // Move to next word if deletion is complete
      else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        typingSpeed = 500; // Pause before typing next word
      }

      setTimeout(type, typingSpeed);
    }

    // Start the typing animation
    type();
  });
</script>

<style>
  .typing-container {
    display: inline-block;
    margin-top: 10px;
    font-family: monospace;
    font-size: 1.1rem;
  }
  
  .cursor {
    display: inline-block;
    width: 8px;
    background-color: var(--global-text-color);
    animation: blink 1s infinite;
  }
  
  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
</style>

## research

I am interested in **how well natural language processing (NLP) systems handle long-form content**, both as input and output. My work includes areas like machine translation of creative texts, story generation, summarizing long texts, verifying claims about book-length content, and multilingual long-form question answering. I am also interested in exploring how modern language models can assist professionals such as writers or literary translators.

## about me

I am currently a senior researcher at Microsoft based in Redmond. I did my postdoc at the [Manning College of Information & Computer Sciences](https://www.cics.umass.edu/), University of Massachusetts Amherst working with [Prof. Mohit Iyyer](https://people.cs.umass.edu/~miyyer/).

I hold a Ph.D. from the [Department of Language and Information Sciences](https://www.c.u-tokyo.ac.jp/eng_site/info/academics/grad/lis/) at the University of Tokyo.

## media

<div class="media-box">
  <ul class="media-list">
    <li><span class="media-source">FORBES</span> <a href="https://www.forbes.com/sites/dereknewton/2025/04/21/study-shows-experienced-humans-can-spot-text-created-by-ai/" target="_blank">Study Shows Experienced Humans Can Spot Text Created By AI</a></li>
    <li><span class="media-source">THE ECONOMIST</span> <a href="https://www.economist.com/science-and-technology/2024/07/31/gpt-claude-llama-how-to-tell-which-ai-model-is-best" target="_blank">GPT, Claude, Llama? How to tell which AI model is best</a></li>
    <li><span class="media-source">TECH CRUNCH</span> <a href="https://techcrunch.com/2024/06/29/geminis-data-analyzing-abilities-arent-as-good-as-google-claims/" target="_blank">Gemini's data-analyzing abilities aren't as good as Google claims</a></li>
  </ul>
</div>

<style>
  .media-box {
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    padding: 5px 15px;
    background-color: var(--global-bg-color);
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    margin-top: 10px;
    margin-bottom: 20px;
  }
  
  .media-list {
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
  }
  
  .media-list li {
    padding: 12px 0;
    border-bottom: 1px solid var(--global-divider-color);
    line-height: 1.5;
    display: flex;
    align-items: baseline;
  }
  
  .media-list li:last-child {
    border-bottom: none;
  }
  
  .media-source {
    color: var(--global-theme-color);
    font-weight: 600;
    min-width: 120px;
    margin-right: 15px;
    font-size: 0.9rem;
  }
  
  .media-list a {
    text-decoration: none;
    color: var(--global-text-color);
    font-weight: 500;
  }
  
  .media-list a:hover {
    text-decoration: underline;
    color: var(--global-theme-color);
  }
  
  @media (max-width: 576px) {
    .media-list li {
      flex-direction: column;
    }
    .media-source {
      margin-bottom: 5px;
    }
  }
</style>

## news

<div class="news-box">
  <ul class="news-list">
    <li><span class="news-date">Mar 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2503.01996">preprint</a>&nbsp;on multilingual long-context processing is out!</li> 
    <li><span class="news-date">Jan 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2501.15654">preprint</a>&nbsp;on machine generated text detection is out!</li> 
    <li><span class="news-date">Jan 2025</span> New&nbsp;<a href="https://arxiv.org/abs/2502.02542">preprint</a>&nbsp;on slow-down attacks on reasoning models is out!</li> 
    <li><span class="news-date">Nov 2024</span> Recognized as an outstanding AC at EMNLP 2024</li> 
    <li><span class="news-date">Sep 2024</span>&nbsp;<a href="https://arxiv.org/abs/2406.16264">NoCha</a>&nbsp;was accepted to EMNLP 2024!</li> 
    <li><span class="news-date">Sep 2024</span>&nbsp;<a href="https://arxiv.org/abs/2406.11580">ESA</a>&nbsp;was accepted to WMT 2024!</li>
    <li><span class="news-date">Aug 2024</span> Presented our work on the evaluation of long-context language models at UNSW</li> 
    <li><span class="news-date">Jul 2024</span> Presented our work on the evaluation of long-context language models at RMIT</li> 
    <li><span class="news-date">Jul 2024</span> Presented our work on the evaluation of long-context language models at the University of Melbourne</li> 
    <li><span class="news-date">Jul 2024</span>&nbsp;<a href="https://arxiv.org/abs/2404.01261">FABLES</a>&nbsp;was accepted to COLM 2024!</li>
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.16264">preprint</a>&nbsp;on LONG-CONTEXT processing capabilities of language models is out!</li> 
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.17761">preprint</a>&nbsp;on MULTI-LINGUAL/CULTURAL performance of language models is out!</li>
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.11580">preprint</a>&nbsp;on more robust evaluation for machine translation is out!</li>
    <li><span class="news-date">Apr 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2404.01261">preprint</a>&nbsp;on faithfulness in book-length summaries is out!</li>
    <li><span class="news-date">Mar 2024</span>&nbsp;<a href="https://arxiv.org/abs/1908.11443">NarrativeTime</a>&nbsp;was accepted to LREC-COLING 2024!</li>
    <li><span class="news-date">Dec 2023</span> Presented&nbsp;<a href="https://aclanthology.org/2023.wmt-1.41/">our work</a>&nbsp;at WMT in Singapore.</li>
    <li><span class="news-date">Nov 2023</span> Launched&nbsp;<a href="https://litmt.org">litmt.org</a>, a platform for sharing machine-translated world literature.</li>
    <li><span class="news-date">May 2023</span> Virtual talk at Instituto Superior Técnico & Unbabel Seminar on translation with Large Language Models.</li>
    <li><span class="news-date">Apr 2023</span> Virtual talk at Microsoft MT Reading Group on translation with Large Language Models.</li>
    <li><span class="news-date">Jan 2023</span> Virtual talk at Polish Academy of Sciences on Evaluation of Long-form Text Generation.</li>
    <li><span class="news-date">Dec 2022</span> Presented&nbsp;<a href="https://aclanthology.org/2022.emnlp-main.649.pdf">our work</a>&nbsp;on diagnosing automatic evaluation metrics at EMNLP in Abu Dhabi.</li>
    <li><span class="news-date">Dec 2022</span> Presented&nbsp;<a href="https://aclanthology.org/2022.emnlp-main.672.pdf">our work</a>&nbsp;on document-level MT at EMNLP in Abu Dhabi.</li>
  </ul>
</div>

<style>
  .news-box {
    max-height: 400px;
    overflow-y: auto;
    border: 1px solid var(--global-divider-color);
    border-radius: 10px;
    padding: 5px 15px;
    background-color: var(--global-bg-color);
    box-shadow: 0 2px 10px rgba(0,0,0,0.08);
    margin-top: 10px;
  }
  
  .news-list {
    list-style-type: none;
    padding-left: 0;
    margin-top: 5px;
  }
  
  .news-list li {
    padding: 12px 0;
    border-bottom: 1px solid var(--global-divider-color);
    line-height: 1.5;
    display: flex;
    align-items: baseline;
  }
  
  .news-list li:last-child {
    border-bottom: none;
  }
  
  .news-date {
    color: var(--global-theme-color);
    font-weight: 600;
    min-width: 80px;
    margin-right: 15px;
    font-size: 0.9rem;
  }
  
  .news-list a {
    text-decoration: none;
    color: var(--global-theme-color);
    font-weight: 500;
  }
  
  .news-list a:hover {
    text-decoration: underline;
  }
  
  /* Customized scrollbar */
  .news-box::-webkit-scrollbar {
    width: 6px;
  }
  
  .news-box::-webkit-scrollbar-track {
    background: rgba(0,0,0,0.05);
    border-radius: 8px;
  }
  
  .news-box::-webkit-scrollbar-thumb {
    background: var(--global-theme-color);
    opacity: 0.5;
    border-radius: 8px;
  }
  
  .news-box::-webkit-scrollbar-thumb:hover {
    opacity: 0.7;
  }
  
  @media (max-width: 576px) {
    .news-list li {
      flex-direction: column;
    }
    .news-date {
      margin-bottom: 5px;
    }
  }
</style>
