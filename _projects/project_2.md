---
layout: page
title: Large Language Models for Literary Translation
description: Investigating how LLMs use document-level context in literary translations
img: assets/img/previews/1001pairs.jpg
importance: 2
category: research
---

This project examines the capabilities and limitations of large language models for literary translation, with a specific focus on how they leverage document-level context.

### Research Questions
- How well do LLMs perform on literary translation compared to traditional MT systems?
- Can LLMs maintain consistency in character names, narration style, and discourse markers?
- What are the persistent issues in LLM-based literary translation?

### Key Findings
Our research revealed that models like GPT-4 successfully leverage surrounding context to maintain consistency in translations. However, several challenges remain:
- Mistranslation of culture-specific references
- Hallucination of content not present in the original text
- Over-reliance on context, sometimes to the detriment of accuracy
- Degradation of translation quality with increased prompt length

### Context Window Utilization
We found that GPT-4 can correctly leverage contextual information at distances of up to 100K characters, but begins to struggle at distances greater than 50K tokens.

### Publication
This research is published in our paper "Large language models effectively leverage document-level context for literary translation, but critical errors persist" at WMT 2023. 