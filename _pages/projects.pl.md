---
layout: page
title: projekty
permalink: /pl/projects/
lang: pl
lang_ref: projects
description: Wybrane projekty badawcze, nad którymi pracuję
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
      <p>Duże modele językowe dokonały ogromnego postępu — od obsługi 2 tysięcy tokenów aż po nawet 2 miliony. Ich ocena pozostaje jednak wyzwaniem: trudno testować model na wejściach o długości całej książki, jednocześnie unikając przeciekania danych treningowych. NoCha rozwiązuje ten problem, angażując czytelników, którzy dla przyjemności przeczytali świeżo wydane powieści. Czytelnicy ci tworzą prawdziwe i fałszywe twierdzenia o książkach, formułując je parami: dwa zdania dotyczące tego samego wydarzenia lub bohatera, różniące się jedynie fałszywą informacją w wersji nieprawdziwej. Modele weryfikują następnie te twierdzenia, mając książkę jako kontekst. Pomysł jest prosty: jeśli wiesz, że „Despite her skills as an Apoth, Nusis is unable to reverse engineer the type of portal opened by the reagents key found in Rona's wooden chest." jest prawdą, to wiesz też, że „By using her skills as an Apoth, Nusis is able to reverse engineer the type of portal opened by the reagents key found in Rona's wooden chest." jest fałszem. Mimo to dla obecnych modeli zadanie to pozostaje trudne — wyniki można zobaczyć w <a href='https://novelchallenge.github.io/' target='_blank'>rankingu NoCha</a>.</p>
      <div class="project-links">
        <a href="https://novelchallenge.github.io/" class="btn btn-sm z-depth-0" role="button" target="_blank">Strona projektu</a>
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
      <p>W projekcie LitMT badamy, w jaki sposób tłumaczenie maszynowe może wspierać tłumaczy i przybliżać czytelnikom nowe historie. Tłumaczenie maszynowe może ułatwiać pracę tłumaczy, redukując obciążenie poznawcze (O'Brien, 2012) — ale jest też druga strona: czytelnicy. Stworzyliśmy <a href='https://www.litmt.org/' target='_blank'>stronę</a>, na której dzielimy się powieściami przetłumaczonymi maszynowo, w tym takimi, które wcześniej nie były dostępne w innych językach. Projekt dotyczy w równym stopniu zrozumienia, jak czytelnicy odbierają takie tłumaczenia, jak i samego procesu translacji. Zbierając informacje zwrotne bezpośrednio od czytelników, mamy nadzieję uczynić tłumaczenia maszynowe lepszymi i przyjemniejszymi w odbiorze. To fascynujący obszar badań — wierzę, że dzięki opiniom czytelników o tym, co działa, a co nie, możemy uczynić literaturę bardziej dostępną dla wszystkich, niezależnie od języka, którym mówią.</p>
      <div class="project-links">
        <a href="https://www.litmt.org/" class="btn btn-sm z-depth-0" role="button" target="_blank">Strona projektu</a>
      </div>
    </div>
  </div>

  <!-- Project 3: HCI-MT -->
  <div class="project-card">
    <div class="project-image">
      <img src="/assets/img/publications/hci-mt.png" alt="HCI-MT">
    </div>
    <div class="project-content">
      <h2>HCI-MT</h2>
      <p>W tym projekcie sprawdzamy, jak systemy NLP mogą pomagać tłumaczom pracować lepiej i szybciej. Potencjał tych narzędzi jest duży, ale ich włączenie w codzienny warsztat tłumacza wcale nie jest oczywiste. Pracujemy z tłumaczami literatury, badając ich sposób korzystania z tych technologii. Naszym celem jest zrozumienie, jak wykorzystać te systemy najefektywniej, by wspierać wysoką jakość przekładu przy jednoczesnej oszczędności czasu.</p>
      <div class="project-links">
        <a href="https://arxiv.org/abs/2506.13468" class="btn btn-sm z-depth-0" role="button" target="_blank">Artykuł</a>
      </div>
    </div>
  </div>

</div>

{% include styles/projects.liquid %}
