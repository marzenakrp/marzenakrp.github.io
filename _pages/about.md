---
layout: about
title: about
permalink: /
subtitle: Assistant Professor at Simon Fraser University

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

## prospective students

Please fill in [this form](https://forms.gle/eauQXmbhTBECEv2d7) if you are interested in working with me. I have already given all offers for Fall 2026, but may consider hiring more students for later dates. SFU students are welcomed to sign up for research through CMPT 415/416.

## about me

I am currently an assistant professor at the [Simon Fraser University](https://www.sfu.ca/) in beautiful Vancouver, Canada. Before that, I was a senior researcher at Microsoft based in Redmond. I did my postdoc at the [Manning College of Information & Computer Sciences](https://www.cics.umass.edu/), University of Massachusetts Amherst working with [Prof. Mohit Iyyer](https://people.cs.umass.edu/~miyyer/).

I hold a Ph.D. from the [Department of Language and Information Sciences](https://www.c.u-tokyo.ac.jp/eng_site/info/academics/grad/lis/) at the University of Tokyo.

## research

I am interested in **how well natural language processing (NLP) systems handle long-form content**, both as input and output. My work includes areas like machine translation of creative texts, story generation, summarizing long texts, verifying claims about book-length content, and multilingual long-form question answering.

## media

<div class="media-box">
  <p class="media-legend"><span class="media-pill media-pill-mentions media-pill--tiny">mentions</span> refers to our findings <span class="media-legend-sep">·</span> <span class="media-pill media-pill-discusses media-pill--tiny">discusses</span> features our work</p>
  <ul class="media-list">
    <li><span class="media-source">FUTURISM</span><div class="media-item-body"><a class="media-article-link" href="https://futurism.com/artificial-intelligence/analysis-new-york-times-ai-articles" target="_blank" rel="noopener noreferrer">Study: New York Times Has Published Extensive AI-Generated Articles</a><a class="media-pill media-pill-mentions" href="https://arxiv.org/abs/2510.18774" target="_blank" rel="noopener noreferrer">Mentions our paper</a></div></li>
    <li><span class="media-source">THE ATLANTIC</span><div class="media-item-body"><a class="media-article-link" href="https://www.theatlantic.com/culture/2026/03/how-ai-creeping-new-york-times/686528/" target="_blank" rel="noopener noreferrer">How AI Is Creeping Into The New York Times</a><a class="media-pill media-pill-discusses" href="https://arxiv.org/abs/2510.18774" target="_blank" rel="noopener noreferrer">Discusses our paper</a></div></li>
    <li><span class="media-source">WSJ</span><div class="media-item-body"><a class="media-article-link" href="https://www.wsj.com/business/media/an-ai-upheaval-is-coming-for-media-this-journalist-is-already-all-in-3511d951" target="_blank" rel="noopener noreferrer">An AI Upheaval Is Coming for Media. This Journalist Is Already All In</a><a class="media-pill media-pill-mentions" href="https://arxiv.org/abs/2510.18774" target="_blank" rel="noopener noreferrer">Mentions our paper</a></div></li>
    <li><span class="media-source">PRESS GAZETTE</span><div class="media-item-body"><a class="media-article-link" href="https://pressgazette.co.uk/north-america/study-claims-9-of-us-newspaper-articles-at-least-partly-ai-generated/" target="_blank" rel="noopener noreferrer">Study claims 9% of US newspaper articles at least partly AI generated</a><a class="media-pill media-pill-discusses" href="https://arxiv.org/abs/2510.18774" target="_blank" rel="noopener noreferrer">Discusses our paper</a></div></li>
    <li><span class="media-source">FORBES</span><div class="media-item-body"><a class="media-article-link" href="https://www.forbes.com/sites/dereknewton/2025/04/21/study-shows-experienced-humans-can-spot-text-created-by-ai/" target="_blank" rel="noopener noreferrer">Study Shows Experienced Humans Can Spot Text Created By AI</a><a class="media-pill media-pill-discusses" href="https://arxiv.org/abs/2501.15654" target="_blank" rel="noopener noreferrer">Discusses our paper</a></div></li>
    <li><span class="media-source">THE ECONOMIST</span><div class="media-item-body"><a class="media-article-link" href="https://www.economist.com/science-and-technology/2024/07/31/gpt-claude-llama-how-to-tell-which-ai-model-is-best" target="_blank" rel="noopener noreferrer">GPT, Claude, Llama? How to tell which AI model is best</a><a class="media-pill media-pill-mentions" href="https://arxiv.org/abs/2406.16264" target="_blank" rel="noopener noreferrer">Mentions our paper</a></div></li>
    <li><span class="media-source">TECH CRUNCH</span><div class="media-item-body"><a class="media-article-link" href="https://techcrunch.com/2024/06/29/geminis-data-analyzing-abilities-arent-as-good-as-google-claims/" target="_blank" rel="noopener noreferrer">Gemini's data-analyzing abilities aren't as good as Google claims</a><a class="media-pill media-pill-discusses" href="https://arxiv.org/abs/2406.16264" target="_blank" rel="noopener noreferrer">Discusses our paper</a></div></li>
    <li><span class="media-source">SLATOR</span><div class="media-item-body"><a class="media-article-link" href="https://slator.com/in-literary-translation-humans-prefer-humans-and-machines-prefer-machines/" target="_blank" rel="noopener noreferrer">In Literary Translation, Humans Prefer Humans and Machines Prefer Machines</a><a class="media-pill media-pill-discusses" href="https://aclanthology.org/2022.emnlp-main.672/" target="_blank" rel="noopener noreferrer">Discusses our paper</a></div></li>
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

  .media-legend {
    font-size: 0.8rem;
    color: var(--global-text-color-light, #666);
    margin: 10px 0 6px 0;
    line-height: 1.6;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 0.25rem 0.45rem;
  }

  .media-legend-sep {
    opacity: 0.55;
    margin: 0 0.1rem;
  }

  .media-item-body {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-wrap: wrap;
    align-items: baseline;
    gap: 0.45rem 0.65rem;
  }

  .media-pill {
    display: inline-block;
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.02em;
    padding: 0.28em 0.85em;
    border-radius: 999px;
    line-height: 1.3;
    flex-shrink: 0;
    text-decoration: none !important;
    cursor: pointer;
    transition: filter 0.15s ease, box-shadow 0.15s ease;
    box-sizing: border-box;
  }

  a.media-pill:hover {
    filter: brightness(1.06);
    box-shadow: 0 1px 4px rgba(0, 0, 0, 0.12);
  }

  .media-pill--tiny {
    font-size: 0.68rem;
    padding: 0.15em 0.55em;
    vertical-align: middle;
    cursor: default;
    pointer-events: none;
  }

  .media-pill-mentions {
    background: #f1f5f9;
    color: #334155;
    border: 1.5px solid #cbd5e1;
  }

  .media-pill-discusses {
    background: #dbeafe;
    color: #1e40af;
    border: 1.5px solid #93c5fd;
  }

  html[data-theme="dark"] .media-pill-mentions {
    background: #334155;
    color: #e2e8f0;
    border-color: #475569;
  }

  html[data-theme="dark"] .media-pill-discusses {
    background: #1e3a5f;
    border-color: #3b82f6;
    color: #93c5fd;
  }

  html[data-theme="dark"] a.media-pill:hover {
    box-shadow: 0 1px 6px rgba(0, 0, 0, 0.35);
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
  
  .media-list a.media-article-link {
    text-decoration: none;
    color: var(--global-text-color);
    font-weight: 500;
  }

  .media-list a.media-article-link:hover {
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
    .media-item-body {
      flex-direction: column;
      align-items: flex-start;
    }
  }
</style>

## news

<div class="news-box">
  <ul class="news-list">
    <li><span class="news-date">Jan 2026</span> Started as an assistant professor at Simon Fraser University in Vancouver, Canada.</li>
    <li><span class="news-date">Oct 2025</span> New <a href="https://arxiv.org/abs/2510.18774" target="_blank">paper</a> on AI-generated text in US news articles is out</li>
    <li><span class="news-date">Aug 2025</span> Papers on <a href="https://arxiv.org/abs/2506.13468" target="_blank">interdisciplinary approach to MT</a>, <a href="https://arxiv.org/abs/2505.22945" target="_blank">cross-lingual memorization</a>, and <a href="https://arxiv.org/abs/2505.20276" target="_blank">quantization effects on long-context tasks</a> accepted to EMNLP 2025 🎉</li>
    <li><span class="news-date">Jul 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2503.01996">work</a>&nbsp;on multilingual long-context processing was accepted to COLM 🎉</li>
    <li><span class="news-date">Jun 2025</span>&nbsp;<a href="https://arxiv.org/abs/2506.13468">Preprint</a>&nbsp;on interdisciplinary approach to machine translation is out</li>
    <li><span class="news-date">Jun 2025</span> Serving as a Senior Area Chair at EMNLP</li>
    <li><span class="news-date">May 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2505.22945">preprint</a>&nbsp;on cross-lingual memorization is out</li>
    <li><span class="news-date">May 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2505.20276">preprint</a>&nbsp;on the effect of quantization on long-context tasks is out</li>
    <li><span class="news-date">May 2025</span> Our works on&nbsp;<a href="https://arxiv.org/abs/2501.15654">AI-generated text</a>&nbsp;and&nbsp;<a href="https://arxiv.org/abs/2406.17761">multilingual long-form QA</a>&nbsp;were accepted to ACL 🎉</li>
    <li><span class="news-date">Mar 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2503.01996">preprint</a>&nbsp;on multilingual long-context processing is out</li> 
    <li><span class="news-date">Jan 2025</span> Our&nbsp;<a href="https://arxiv.org/abs/2501.15654">preprint</a>&nbsp;on machine generated text detection is out</li> 
    <li><span class="news-date">Jan 2025</span> New&nbsp;<a href="https://arxiv.org/abs/2502.02542">preprint</a>&nbsp;on slow-down attacks on reasoning models is out</li> 
    <li><span class="news-date">Nov 2024</span> Recognized as an outstanding AC at EMNLP 2024</li> 
    <li><span class="news-date">Sep 2024</span>&nbsp;<a href="https://arxiv.org/abs/2406.16264">NoCha</a>&nbsp;was accepted to EMNLP 2024 🎉</li> 
    <li><span class="news-date">Sep 2024</span>&nbsp;<a href="https://arxiv.org/abs/2406.11580">ESA</a>&nbsp;was accepted to WMT 2024 🎉</li>
    <li><span class="news-date">Aug 2024</span> Presented our work on the evaluation of long-context language models at UNSW</li> 
    <li><span class="news-date">Jul 2024</span> Presented our work on the evaluation of long-context language models at RMIT</li> 
    <li><span class="news-date">Jul 2024</span> Presented our work on the evaluation of long-context language models at the University of Melbourne</li> 
    <li><span class="news-date">Jul 2024</span>&nbsp;<a href="https://arxiv.org/abs/2404.01261">FABLES</a>&nbsp;was accepted to COLM 2024 🎉</li>
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.16264">preprint</a>&nbsp;on LONG-CONTEXT processing capabilities of language models is out</li> 
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.17761">preprint</a>&nbsp;on MULTI-LINGUAL/CULTURAL performance of language models is out</li>
    <li><span class="news-date">Jun 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2406.11580">preprint</a>&nbsp;on more robust evaluation for machine translation is out</li>
    <li><span class="news-date">Apr 2024</span> Our&nbsp;<a href="https://arxiv.org/abs/2404.01261">preprint</a>&nbsp;on faithfulness in book-length summaries is out</li>
    <li><span class="news-date">Mar 2024</span>&nbsp;<a href="https://arxiv.org/abs/1908.11443">NarrativeTime</a>&nbsp;was accepted to LREC-COLING 2024 🎉</li>
    <li><span class="news-date">Dec 2023</span> Presented&nbsp;<a href="https://aclanthology.org/2023.wmt-1.41/">our work</a>&nbsp;at WMT in Singapore.</li>
    <li><span class="news-date">Nov 2023</span> Launched&nbsp;<a href="https://litmt.org">litmt.org</a>, a platform for sharing machine-translated world literature.</li>
    <li><span class="news-date">May 2023</span> Virtual talk at Instituto Superior Técnico & Unbabel Seminar on translation with Large Language Models.</li>
    <li><span class="news-date">Apr 2023</span> Virtual talk at Microsoft MT Reading Group on translation with Large Language Models.</li>
    <li><span class="news-date">Jan 2023</span> Virtual talk at Polish Academy of Sciences on Evaluation of Long-form Text Generation.</li>
    <li><span class="news-date">Dec 2022</span> Presented&nbsp;<a href="https://aclanthology.org/2022.emnlp-main.649.pdf">our work</a>&nbsp;on diagnosing automatic evaluation metrics at EMNLP in Abu Dhabi.</li>
    <li><span class="news-date">Dec 2022</span> Presented&nbsp;<a href="https://aclanthology.org/2022.emnlp-main.672.pdf">our work</a>&nbsp;on document-level MT at EMNLP in Abu Dhabi.</li>
    <li><span class="news-date">Nov 2022</span> <a href="https://slator.com/in-literary-translation-humans-prefer-humans-and-machines-prefer-machines/" target="_blank">Slator</a> on literary MT and our <a href="https://aclanthology.org/2022.emnlp-main.672/" target="_blank">PAR3</a> work</li>
  </ul>
</div>

<style>
  .news-box {
    max-height: min(720px, 70vh);
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
    display: block;
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
    display: inline;
    white-space: normal;
  }
  
  .news-list a:hover {
    text-decoration: underline;
  }
  
  /* Mobile responsiveness */
  @media (max-width: 768px) {
    .news-list li {
      display: block;
    }
    
    .news-date {
      display: block;
      margin-bottom: 5px;
      margin-right: 0;
      min-width: auto;
    }
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
    .news-date {
      margin-bottom: 5px;
    }
  }
</style>


