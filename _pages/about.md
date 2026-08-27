---
layout: about
title: about
permalink: /
lang: en
lang_ref: about
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

{% include about-typing.liquid %}
{% include styles/about.liquid %}

## prospective students

<details class="faq-inline">
  <summary>I plan to take ~1 PhD student every year in the Fall.</summary>
  <div class="faq-inline-body">
    <p class="faq-a">
      You should apply through the <a href="https://www.sfu.ca/fas/study/future-graduates/apply/computing-science.html">standard SFU application process</a> and there is no need to
      notify me by email about your application. Please note that I <strong>cannot</strong> consult on your application due to the volume of emails I
      receive.
    </p>
    <p class="faq-a">
      SFU, like other Canadian universities, offers separate Master's and PhD programs. I may need to prioritize PhD applications and accept Master's students only
      when funding permits. You can also <a href="https://www.sfu.ca/fas/study/future-graduates/programs/phd-computing.html">apply directly to a PhD program</a>.
    </p>
  </div>
</details>

<details class="faq-inline">
  <summary>
    If you would like to work with me on a project please fill in
    <a href="https://forms.gle/eauQXmbhTBECEv2d7" onclick="event.stopPropagation()">this form</a>.
  </summary>
  <div class="faq-inline-body">
    <p class="faq-a">
      I am checking it periodically and will get back to you if there is a good fit. Sadly, I cannot respond to individual emails from prospective
      students due to the volume I receive.
    </p>
  </div>
</details>

<details class="faq-inline">
  <summary>SFU students are welcome to sign up for research through CMPT 415/416.</summary>
  <div class="faq-inline-body">
    <p class="faq-q">What is CMPT 415/416?</p>
    <p class="faq-a">
      This is ultimately the same class, which allows you to do research project for credits for two semesters. You will be expected to meet with me once
      a week and report your progress. We will be working as a team and while it may be a lot of work it is also a lot of fun.
    </p>
    <p class="faq-q">Can I help with research without taking CMPT 415/416?</p>
    <p class="faq-a">Yes, you can if you are motivated and serious about it.</p>
  </div>
</details>

**Important**: If you are sending me an email anyway please do NOT generate it. **Generated emails will be deleted without consideration.**

## about me

I am currently an assistant professor at the [Simon Fraser University](https://www.sfu.ca/) in beautiful Vancouver, Canada. Before that, I was a senior researcher at Microsoft based in Redmond. I did my postdoc at the [Manning College of Information & Computer Sciences](https://www.cics.umass.edu/), University of Massachusetts Amherst working with [Prof. Mohit Iyyer](https://people.cs.umass.edu/~miyyer/).

I hold a Ph.D. from the [Department of Language and Information Sciences](https://www.c.u-tokyo.ac.jp/eng_site/info/academics/grad/lis/) at the University of Tokyo.

## research

I am interested in **how well natural language processing (NLP) systems handle long-form content**, both as input and output. My work includes areas like machine translation of creative texts, story generation, summarizing long texts, verifying claims about book-length content, and multilingual long-form question answering.

## media

{% include about-media.liquid %}

## news

{% include about-news.liquid %}
