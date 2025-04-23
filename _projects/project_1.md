---
layout: page
title: NoCha - A Novel Challenge for Long-context LLMs
description: Benchmark for evaluating multi-hop reasoning over long texts
img: assets/img/previews/1001pairs.jpg
importance: 1
category: research
---

**NoCha** (A Novel Challenge) measures how well long-context language models can verify claims written about fictional books. It contains 1001 _narrative minimal pairs_ written about recently-published novels, where one claim is true and the other is false. Given the book text and a claim, a model is instructed to verify whether the claim is true or false.

## Design

We created NoCha by interleaving two full novels into a single document, with comprehension questions requiring reasoning across both novels. This forces models to identify relevant information from distinct narratives while ignoring substantial irrelevant content.

In contrast to existing long-context benchmarks, our annotators confirm that the largest share of pairs in NoCha require global reasoning over the entire book to verify.

## Findings

Our experiments show that while human readers easily perform this task, it is enormously challenging for all ten long-context LLMs that we evaluate:

- No open-weight model performs above random chance (despite their strong performance on synthetic benchmarks)
- GPT-4o achieves the highest accuracy at 55.8%

Further analysis reveals that:

1. Models perform much better on pairs that require only sentence-level retrieval vs. global reasoning
2. Model-generated explanations for their decisions are often inaccurate even for correctly-labeled claims
3. Models perform substantially worse on speculative fiction books that contain extensive world-building

## Resources

- [Paper on arXiv](https://arxiv.org/abs/2406.16264)
- [NoCha Website](https://marzenakrp.github.io/novelchallenge.github.io/)
- [GitHub Repository](https://github.com/marzenakrp/nocha/)
