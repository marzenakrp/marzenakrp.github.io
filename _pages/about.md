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

I plan to take ~1 PhD student every year in the Fall. Please apply through the [standard SFU process](https://www.sfu.ca/fas/study/future-graduates/apply/computing-science.html). There is no need to email me. If you would like to work with me on a project, fill in [this form](https://forms.gle/eauQXmbhTBECEv2d7). SFU students can also join through CMPT 415/416. **Please note that any AI-generated email will be deleted without consideration.**

<details class="faq-inline">
  <summary>More details</summary>
  <div class="faq-inline-body">
    <p class="faq-q">Can you consult on my application or answer my email?</p>
    <p class="faq-a">
      Sadly, no. Due to the volume of emails I receive, I cannot consult on applications or respond to individual emails from prospective students.
      I check the form periodically and will get back to you if there is a good fit.
    </p>
    <p class="faq-q">Master's or PhD?</p>
    <p class="faq-a">
      SFU, like other Canadian universities, offers separate Master's and PhD programs. I may need to prioritize PhD applications and accept Master's
      students only when funding permits. You can also <a href="https://www.sfu.ca/fas/study/future-graduates/programs/phd-computing.html">apply directly to a PhD program</a>.
    </p>
    <p class="faq-q">What is CMPT 415/416?</p>
    <p class="faq-a">
      It is a research course that lets you do a research project for credit over two semesters. You will meet with me weekly and report your progress.
      We work as a team, and while it is a lot of work, it is also a lot of fun. You can also help with research without taking the course if you are
      motivated and serious about it.
    </p>
  </div>
</details>

## about me

I am currently an assistant professor at the [Simon Fraser University](https://www.sfu.ca/) in beautiful Vancouver, Canada. Before that, I was a senior researcher at Microsoft based in Redmond. I did my postdoc at the [Manning College of Information & Computer Sciences](https://www.cics.umass.edu/), University of Massachusetts Amherst working with [Prof. Mohit Iyyer](https://people.cs.umass.edu/~miyyer/).

I hold a Ph.D. from the [Department of Language and Information Sciences](https://www.c.u-tokyo.ac.jp/eng_site/info/academics/grad/lis/) at the University of Tokyo.

## research

My research focuses on natural language processing (NLP) and language models (LMs). Specifically, I am interested in:

- **Detection of AI-generated and AI-translated text**: what characterizes text that is generated or translated by AI, and how well can we distinguish it from human-authored text?
- **Multilingual NLP**: how can we build systems that serve people from diverse linguistic and cultural backgrounds?
- **Machine translation of creative texts**: how can we help more authors be heard without misrepresenting their voice?
- **Long-form text processing**: how well can models process long-form input, and how can we evaluate long-form output?

## media

{% include about-media.liquid %}

## news

{% include about-news.liquid %}
