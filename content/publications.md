---
title: "Publications"
permalink: /publications/
author_profile: true
---

You can also find my publications on my [Google Scholar profile](https://scholar.google.com/citations?user=-sWY5igAAAAJ&hl).

**Total: 23**

{{< themeText >}}In English（英語）{{< /themeText >}}
{{< newline >}}

{{< pubWithImage image="/images/oneruler.png" conference="Preprint" >}}
1. {{< bookOpenIcon "https://arxiv.org/abs/2503.01996" >}}  {{< githubIcon "https://github.com/mungg/OneRuler" >}}  <a href="https://arxiv.org/abs/2503.01996">"One ruler to measure them all: Benchmarking multilingual long-context language models"</a>
<br>
Yekyung Kim, Jenna Russell, <b>Marzena Karpinska</b>, Mohit Iyyer (2025).
{{< /pubWithImage >}}

{{< pubWithImage image="/images/detectors.png" conference="Preprint" >}}
2. {{< bookOpenIcon "https://arxiv.org/abs/2501.15654" >}}  {{< githubIcon "https://github.com/jenna-russell/human_detectors" >}}  <a href="https://arxiv.org/abs/2501.15654">"People who frequently use ChatGPT for writing tasks are accurate and robust detectors of AI-generated text"</a>
<br>
Jenna Russell, <b>Marzena Karpinska</b>, Mohit Iyyer (2025).
{{< /pubWithImage >}}

{{< pubWithImage image="/images/overthink.png" conference="Preprint" >}}
3. {{< bookOpenIcon "https://arxiv.org/abs/2502.02542" >}}  <a href="https://arxiv.org/abs/2502.02542">"OverThink: Slowdown Attacks on Reasoning LLMs"</a>
<br>
Abhinav Kumar, Jaechul Roh, Ali Naseh, <b>Marzena Karpinska</b>, Mohit Iyyer, Amir Houmansadr, Eugene Bagdasarian (2025). 
{{< /pubWithImage >}}


{{< pubWithImage image="/images/nocha.png" conference="EMNLP" >}}
4. {{< bookOpenIcon "https://aclanthology.org/2024.emnlp-main.948/" >}}  {{< githubIcon "https://github.com/marzenakrp/nocha/" >}}  {{< globeIcon "https://novelchallenge.github.io/" >}} <a href="https://aclanthology.org/2024.emnlp-main.948/">"One Thousand and One Pairs: A "novel" challenge for long-context language models"</a>
<br>
<b>Marzena Karpinska</b>, Katherine Thai, Kyle Lo, Tanya Goyal, Mohit Iyyer (2024). 
<!-- <div class="abstract-content" style="display:none;"> -->
<!-- <p>Synthetic long-context LLM benchmarks (e.g., "needle-in-the-haystack") test only surface-level retrieval capabilities, but how well can long-context LLMs retrieve, synthesize, and reason over information across book-length inputs? We address this question by creating NoCha, a dataset of 1,001 minimally different pairs of true and false claims about 67 recently-published English fictional books, written by human readers of those books. In contrast to existing long-context benchmarks, our annotators confirm that the largest share of pairs in NoCha require global reasoning over the entire book to verify. Our experiments show that while human readers easily perform this task, it is enormously challenging for all ten long-context LLMs that we evaluate: no open-weight model performs above random chance (despite their strong performance on synthetic benchmarks), while GPT-4o achieves the highest accuracy at 55.8%. Further analysis reveals that (1) on average, models perform much better on pairs that require only sentence-level retrieval vs. global reasoning; (2) model-generated explanations for their decisions are often inaccurate even for correctly-labeled claims; and (3) models perform substantially worse on speculative fiction books that contain extensive world-building. The methodology proposed in NoCha allows for the evolution of the benchmark dataset and the easy analysis of future models.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/calmqa.png" conference="Preprint" >}}
5. {{< bookOpenIcon "https://arxiv.org/abs/2406.17761" >}}  {{< githubIcon "https://github.com/2015aroras/CaLMQA" >}} {{< globeIcon "https://huggingface.co/datasets/shanearora/CaLMQA" >}}  <a href="https://arxiv.org/abs/2406.17761">"CaLMQA: Exploring culturally specific long-form question answering across 23 languages"</a>
<br>
Shane Arora*, <b>Marzena Karpinska*</b>, Hung-Ting Chen, Ipsita Bhattacharjee, Mohit Iyyer, Eunsol Choi (2024).  *equal contributions
<!-- <div class="abstract-content" style="display:none;">
<p>While long-context large language models (LLMs) can technically summarize book-length documents (>100K tokens), the length and complexity of the documents have so far prohibited evaluations of input-dependent aspects like faithfulness. In this paper, we conduct the first large-scale human evaluation of faithfulness and content selection on LLM-generated summaries of fictional books. Our study mitigates the issue of data contamination by focusing on summaries of books published in 2023 or 2024, and we hire annotators who have fully read each book prior to the annotation task to minimize cost and cognitive burden. We collect FABLES, a dataset of annotations on 3,158 claims made in LLM-generated summaries of 26 books, at a cost of $5.2K USD, which allows us to rank LLM summarizers based on faithfulness: Claude-3-Opus significantly outperforms all closed-source LLMs, while the open-source Mixtral is on par with GPT-3.5-Turbo. An analysis of the annotations reveals that most unfaithful claims relate to events and character states, and they generally require indirect reasoning over the narrative to invalidate. While LLM-based auto-raters have proven reliable for factuality and coherence in other settings, we implement several LLM raters of faithfulness and find that none correlates strongly with human annotations, especially with regard to detecting unfaithful claims. Our experiments suggest that detecting unfaithful claims is an important future direction not only for summarization evaluation but also as a testbed for long-context understanding. Finally, we move beyond faithfulness by exploring content selection errors in book-length summarization: we develop a typology of omission errors related to crucial narrative elements and also identify a systematic over-emphasis on events occurring towards the end of the book.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/esa.png" conference="WMT" >}}
6. {{< bookOpenIcon "https://arxiv.org/abs/2406.11580" >}}  <a href="https://arxiv.org/abs/2406.11580">"Error Span Annotation: A Balanced Approach for Human Evaluation of Machine Translation"</a>
<br>
Tom Kocmi, Vilém Zouhar, Eleftherios Avramidis, Roman Grundkiewicz, <b>Marzena Karpinska</b>, Maja Popović, Mrinmaya Sachan, Mariya Shmatova (2024).
<!-- <div class="abstract-content" style="display:none;">
<p>High-quality Machine Translation (MT) evaluation relies heavily on human judgments. Comprehensive error classification methods, such as Multidimensional Quality Metrics (MQM), are expensive as they are time-consuming and can only be done by experts, whose availability may be limited especially for low-resource languages. On the other hand, just assigning overall scores, like Direct Assessment (DA), is simpler and faster and can be done by translators of any level, but are less reliable. In this paper, we introduce Error Span Annotation (ESA), a human evaluation protocol which combines the continuous rating of DA with the high-level error severity span marking of MQM. We validate ESA by comparing it to MQM and DA for 12 MT systems and one human reference translation (English to German) from WMT23. The results show that ESA offers faster and cheaper annotations than MQM at the same quality level, without the requirement of expensive MQM experts.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}


{{< pubWithImage image="/images/fables.png" conference="COLM" >}}
7. {{< bookOpenIcon "https://arxiv.org/abs/2404.01261" >}}  {{< githubIcon "https://github.com/mungg/FABLES" >}} <a href="https://arxiv.org/abs/2404.01261">"FABLES: Evaluating faithfulness and content selection in book-length summarization"</a>
<br>
Yekyung Kim, Yapei Chang, <b>Marzena Karpinska</b>, Aparna Garimella, Varun Manjunatha, Kyle Lo, Tanya Goyal, Mohit Iyyer (2024). (accepted to COLM 2024)
<!-- <div class="abstract-content" style="display:none;">
<p>While long-context large language models (LLMs) can technically summarize book-length documents (>100K tokens), the length and complexity of the documents have so far prohibited evaluations of input-dependent aspects like faithfulness. In this paper, we conduct the first large-scale human evaluation of faithfulness and content selection on LLM-generated summaries of fictional books. Our study mitigates the issue of data contamination by focusing on summaries of books published in 2023 or 2024, and we hire annotators who have fully read each book prior to the annotation task to minimize cost and cognitive burden. We collect FABLES, a dataset of annotations on 3,158 claims made in LLM-generated summaries of 26 books, at a cost of $5.2K USD, which allows us to rank LLM summarizers based on faithfulness: Claude-3-Opus significantly outperforms all closed-source LLMs, while the open-source Mixtral is on par with GPT-3.5-Turbo. An analysis of the annotations reveals that most unfaithful claims relate to events and character states, and they generally require indirect reasoning over the narrative to invalidate. While LLM-based auto-raters have proven reliable for factuality and coherence in other settings, we implement several LLM raters of faithfulness and find that none correlates strongly with human annotations, especially with regard to detecting unfaithful claims. Our experiments suggest that detecting unfaithful claims is an important future direction not only for summarization evaluation but also as a testbed for long-context understanding. Finally, we move beyond faithfulness by exploring content selection errors in book-length summarization: we develop a typology of omission errors related to crucial narrative elements and also identify a systematic over-emphasis on events occurring towards the end of the book.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/aurora.png" conference="Preprint" >}}
8. {{< bookOpenIcon "https://arxiv.org/abs/2404.00399" >}}  {{< globeIcon "https://huggingface.co/collections/aurora-m/aurora-m-models-65fdfdff62471e09812f5407" >}} <a href="https://arxiv.org/abs/2404.00399"> "Aurora-M: The First Open Source Multilingual Language Model Red-teamed according to the U.S. Executive Order" </a>
<br>
Taishi Nakamura, Mayank Mishra, Simone Tedeschi, Yekun Chai, Jason T Stillerman, ..., Sampo Pyysalo (2024). 
<!-- <div class="abstract-content" style="display:none;"> -->
<!-- <p>Pretrained language models underpin several AI applications, but their high computational cost for training limits accessibility. Initiatives such as BLOOM and StarCoder aim to democratize access to pretrained models for collaborative community development. However, such existing models face challenges: limited multilingual capabilities, continual pretraining causing catastrophic forgetting, whereas pretraining from scratch is computationally expensive, and compliance with AI safety and development laws. This paper presents Aurora-M, a 15B parameter multilingual open-source model trained on English, Finnish, Hindi, Japanese, Vietnamese, and code. Continually pretrained from StarCoderPlus on 435 billion additional tokens, Aurora-M surpasses 2 trillion tokens in total training token count. It is the first open-source multilingual model fine-tuned on human-reviewed safety instructions, thus aligning its development not only with conventional red-teaming considerations, but also with the specific concerns articulated in the Biden-Harris Executive Order on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence. Aurora-M is rigorously evaluated across various tasks and languages, demonstrating robustness against catastrophic forgetting and outperforming alternatives in multilingual settings, particularly in safety evaluations. To promote responsible open-source LLM development, Aurora-M and its variants are released.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
 {{< /pubWithImage >}}

{{< pubWithImage image="/images/nt.png" conference="LREC-COLING" >}}
9. {{< bookOpenIcon "https://arxiv.org/abs/1908.11443" >}}  {{< githubIcon "https://github.com/text-machine-lab/nt" >}} <a href="https://arxiv.org/abs/1908.11443">"NarrativeTime: Dense Temporal Annotation on a Timeline"</a>
<br>
Anna Rogers, <b>Marzena Karpinska</b>, Ankita Gupta, Vladislav Lialin, Gregory Smelkov, Anna Rumshisky (2024).  <i>The 2024 Joint International Conference on Computiational Linguistics, Language, Resources and Evaluation.</i> 
<!-- <div class="abstract-content" style="display:none;">
<p>For the past decade, temporal annotation has been sparse: only a small portion of event pairs in a text was annotated. We present NarrativeTime, the first timeline-based annotation framework that achieves full coverage of all possible TLinks. To compare with the previous SOTA in dense temporal annotation, we perform full re-annotation of TimeBankDense corpus, which shows comparable agreement with a significant increase in density. We contribute TimeBankNT corpus (with each text fully annotated by two expert annotators), extensive annotation guidelines, open-source tools for annotation and conversion to TimeML format, baseline results, as well as quantitative and qualitative analysis of inter-annotator agreement.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
 {{< /pubWithImage >}}

{{< pubWithImage image="/images/mt_para2.png" conference="WMT" >}}
10.  {{< bookOpenIcon "https://aclanthology.org/2023.wmt-1.41" >}}  {{< githubIcon "https://github.com/marzenakrp/LiteraryTranslation" >}} <a href="https://aclanthology.org/2023.wmt-1.41">"Large language models effectively leverage document-level context for literary translation, but critical errors persist"</a>
<br>
<b>Marzena Karpinska</b> and Mohit Iyyer (2023).  <i>Proceedings of the Eighth Conference on Machine Translation.</i>
<!-- <div class="abstract-content" style="display:none;">
<p>Large language models (LLMs) are competitive with the state of the art on a wide range of sentence-level translation datasets. However, their ability to translate paragraphs and documents remains unexplored because evaluation in these settings is costly and difficult. We show through a rigorous human evaluation that asking the GPT-3.5 (text-davinci-003) LLM to translate an entire literary paragraph (e.g., from a novel) at once results in higher-quality translations than standard sentence-by-sentence translation across 18 linguistically-diverse language pairs (e.g., translating into and out of Japanese, Polish, and English). Our evaluation, which took approximately 350 hours of effort for annotation and analysis, is conducted by hiring translators fluent in both the source and target language and asking them to provide both span-level error annotations as well as preference judgments of which system’s translations are better. We observe that discourse-level LLM translators commit fewer mistranslations, grammar errors, and stylistic inconsistencies than sentence-level approaches. With that said, critical errors still abound, including occasional content omissions, and a human translator’s intervention remains necessary to ensure that the author’s voice remains intact. We publicly release our dataset and error annotations to spur future research on the evaluation of document-level literary translation.</p>
</div>
<button class="abstract-toggle">Abstract</button>  -->
 {{< /pubWithImage >}}

{{< pubWithImage image="/images/dipper.png" conference="NeurIPS" >}}
11. {{< bookOpenIcon "https://arxiv.org/abs/2303.13408" >}}  {{< githubIcon "https://github.com/martiansideofthemoon/ai-detection-paraphrases" >}} <a href="https://arxiv.org/abs/2303.13408">"Paraphrasing evades detectors of AI-generated text, but retrieval is an effective defense"</a>
<br>
Kalpesh Krishna, Yixiao Song, <b>Marzena Karpinska</b>, John Wieting, Mohit Iyyer (2023). <i>Thirty-seventh Annual Conference on Neural Information Processing Systems.</i> 
<!-- <div class="abstract-content" style="display:none;">
<p>The rise in malicious usage of large language models, such as fake content creation and academic plagiarism, has motivated the development of approaches that identify AI-generated text, including those based on watermarking or outlier detection. However, the robustness of these detection algorithms to paraphrases of AI-generated text remains unclear. To stress test these detectors, we build a 11B parameter paraphrase generation model (DIPPER) that can paraphrase paragraphs, condition on surrounding context, and control lexical diversity and content reordering. Using DIPPER to paraphrase text generated by three large language models (including GPT3.5-davinci-003) successfully evades several detectors, including watermarking, GPTZero, DetectGPT, and OpenAI's text classifier. For example, DIPPER drops detection accuracy of DetectGPT from 70.3% to 4.6% (at a constant false positive rate of 1%), without appreciably modifying the input semantics.
To increase the robustness of AI-generated text detection to paraphrase attacks, we introduce a simple defense that relies on retrieving semantically-similar generations and must be maintained by a language model API provider. Given a candidate text, our algorithm searches a database of sequences previously generated by the API, looking for sequences that match the candidate text within a certain threshold. We empirically verify our defense using a database of 15M generations from a fine-tuned T5-XXL model and find that it can detect 80% to 97% of paraphrased generations across different settings while only classifying 1% of human-written sequences as AI-generated. We open-source our models, code and data.</p>
</div>
<button class="abstract-toggle">Abstract</button>  -->
{{< /pubWithImage >}}


{{< pubWithImage image="/images/report.png" conference="ACL: Report" >}}
12. {{< bookOpenIcon "https://aclanthology.org/2023.acl-long.911/" >}} <a href="https://aclanthology.org/2023.acl-long.911/">"Program Chairs’ Report on Peer Review at ACL 2023"</a> [<i>responsible for data analysis</i>]
<br>
Anna Rogers, <b>Marzena Karpinska</b>, Jordan Boyd-Graber, Naoaki Okazaki (2023). <i>Proceedings of the 61st Annual Meeting of the Association for Computational Linguistics (Volume 1: Long Papers)</i>, xl–lxxv.
<!-- <div class="abstract-content" style="display:none;">
<p>We present a summary of the efforts to improve conference peer review that were implemented at ACL’23. This includes work with the goal of improving review quality, clearer workflow and decision support for the area chairs, as well as our efforts to improve paper-reviewer matching for various kinds of non- mainstream NLP work, and improve the overall incentives for all participants of the peer review process. We present analysis of the factors affecting peer review, identify the most problematic issues that the authors complained about, and provide suggestions for the future chairs. We hope that publishing such reports would (a) improve transparency in decision-making, (b) help the people new to the field to understand how the *ACL conferences work, (c) provide useful data for the future chairs and workshop organizers, and also academic work on peer review, and (d) provide useful context for the final program, as a source of information for meta-research on the structure and trajectory of the field of NLP.</p>
</div>
<button class="abstract-toggle">Abstract</button>  -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/demetr.png" conference="EMNLP" >}}
13.  {{< bookOpenIcon "https://aclanthology.org/2022.emnlp-main.649.pdf" >}}  {{< githubIcon "https://github.com/marzenakrp/demetr" >}} <a href="https://aclanthology.org/2022.emnlp-main.649.pdf">"DEMETR: Diagnosing Evaluation Metrics for Translation"</a>
<br>
<b>Marzena Karpinska</b>, Nishant Raj, Katherine Thai, Yixiao Song, Ankita Gupta, and Mohit Iyyer (2022). <i>Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing.</i>
<!-- <div class="abstract-content" style="display:none;">
<p>While machine translation evaluation metrics based on string overlap (e.g., BLEU) have their limitations, their computations are transparent: the BLEU score assigned to a particular candidate translation can be traced back to the presence or absence of certain words. The operations of newer learned metrics (e.g., BLEURT, COMET), which leverage pretrained language models to achieve higher correlations with human quality judgments than BLEU, are opaque in comparison. In this paper, we shed light on the behavior of these learned metrics by creating DEMETR, a diagnostic dataset with 31K English examples (translated from 10 source languages) for evaluating the sensitivity of MT evaluation metrics to 35 different linguistic perturbations spanning semantic, syntactic, and morphological error categories. All perturbations were carefully designed to form minimal pairs with the actual translation (i.e., differ in only one aspect). We find that learned metrics perform substantially better than string-based metrics on DEMETR. Additionally, learned metrics differ in their sensitivity to various phenomena (e.g., BERTScore is sensitive to untranslated words but relatively insensitive to gender manipulation, while COMET is much more sensitive to word repetition than to aspectual changes). We publicly release DEMETR to spur more informed future development of machine translation evaluation metrics.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/par3.png" conference="EMNLP" >}}
14. {{< bookOpenIcon "https://aclanthology.org/2022.emnlp-main.672.pdf" >}}  {{< githubIcon "https://github.com/katherinethai/par3" >}} <a href="https://aclanthology.org/2022.emnlp-main.672.pdf"> "Exploring Document-Level Literary Machine Translation with Parallel Paragraphs from World Literature" </a>
<br>
Katherine Thai*, <b>Marzena Karpinska*</b>, Kalpesh Krishna, William Ray, Moira Inghilleri, John Wieting, and Mohit Iyyer (2022).  <i>Proceedings of the 2022 Conference on Empirical Methods in Natural Language Processing.</i>  *equal contributions
<!-- <div class="abstract-content" style="display:none;">
<p>Literary translation is a culturally significant task, but it is bottlenecked by the small number of qualified literary translators relative to the many untranslated works published around the world. Machine translation (MT) holds potential to complement the work of human translators by improving both training procedures and their overall efficiency. Literary translation is less constrained than more traditional MT settings since translators must balance meaning equivalence, readability, and critical interpretability in the target language. This property, along with the complex discourse-level context present in literary texts, also makes literary MT more challenging to computationally model and evaluate. To explore this task, we collect a dataset (Par3) of non-English language novels in the public domain, each aligned at the paragraph level to both human and automatic English translations. Using Par3, we discover that expert literary translators prefer reference human translations over machine-translated paragraphs at a rate of 84%, while state-of-the-art automatic MT metrics do not correlate with those preferences. The experts note that MT outputs contain not only mistranslations, but also discourse-disrupting errors and stylistic inconsistencies. To address these problems, we train a post-editing model whose output is preferred over normal MT output at a rate of 69% by experts. We publicly release Par3 to spur future research into literary MT.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/ezcoref.png" conference="EMNLP" >}}
15. {{< bookOpenIcon "https://arxiv.org/abs/2210.07188" >}}  {{< githubIcon "https://github.com/gnkitaa/ezCoref" >}} <a href="https://arxiv.org/abs/2210.07188"> "ezCoref: Towards Unifying Annotation Guidelines for Coreference Resolution"</a>
<br>
Ankita Gupta, <b>Marzena Karpinska</b>, Wenlong Zhao, Kalpesh Krishna, Jack Merullo, Luke Yeh, Mohit Iyyer, and Brendan O'Connor (2022).  <i>Findings of the Association for Computational Linguistics: EACL 2023.</i> 
<!-- <div class="abstract-content" style="display:none;">
<p>Large-scale, high-quality corpora are critical for advancing research in coreference resolution. However, existing datasets vary in their definition of coreferences and have been collected via complex and lengthy guidelines that are curated for linguistic experts. These concerns have sparked a growing interest among researchers to curate a unified set of guidelines suitable for annotators with various backgrounds. In this work, we develop a crowdsourcing-friendly coreference annotation methodology, ezCoref, consisting of an annotation tool and an interactive tutorial. We use ezCoref to re-annotate 240 passages from seven existing English coreference datasets (spanning fiction, news, and multiple other domains) while teaching annotators only cases that are treated similarly across these datasets. Surprisingly, we find that reasonable quality annotations were already achievable (>90% agreement between the crowd and expert annotations) even without extensive training. On carefully analyzing the remaining disagreements, we identify the presence of linguistic cases that our annotators unanimously agree upon but lack unified treatments (e.g., generic pronouns, appositives) in existing datasets. We propose the research community should revisit these phenomena when curating future unified annotation guidelines.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/cognates.png" conference="COLING" >}}
16. {{< bookOpenIcon "https://aclanthology.org/2022.coling-1.13/" >}} <a href="https://aclanthology.org/2022.coling-1.13/">"Revisiting Statistical Laws of Semantic Shift in Romance Cognates"</a>
<br>
Yoshifumi Kawasaki, Maëlys Salingre, <b>Marzena Karpinska</b>, Hiroya Takamura, and Ryo Nagata (2022). <i>The 29th International Conference on Computational Linguistics.</i>
<!-- <div class="abstract-content" style="display:none;">
<p>This article revisits statistical relationships across Romance cognates between lexical semantic shift and six intra-linguistic variables, such as frequency and polysemy. Cognates are words that are derived from a common etymon, in this case, a Latin ancestor. Despite their shared etymology, some cognate pairs have experienced semantic shift. The degree of semantic shift is quantified using cosine distance between the cognates’ corresponding word embeddings. In the previous literature, frequency and polysemy have been reported to be correlated with semantic shift; however, the understanding of their effects needs revision because of various methodological defects. In the present study, we perform regression analysis under improved experimental conditions, and demonstrate a genuine negative effect of frequency and positive effect of polysemy on semantic shift. Furthermore, we reveal that morphologically complex etyma are more resistant to semantic shift and that the cognates that have been in use over a longer timespan are prone to greater shift in meaning. These findings add to our understanding of the historical process of semantic change.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/mturk.png" conference="EMNLP" >}}
17. {{< bookOpenIcon "https://aclanthology.org/2021.emnlp-main.97/" >}} <a href="https://aclanthology.org/2021.emnlp-main.97/">"The Perils of Using Mechanical Turk to Evaluate Open-Ended Text Generation"</a>
<br>
<b>Marzena Karpinska</b>, Nader Akoury, and Mohit Iyyer (2021). <i>Proceedings of the 2021 Conference on Empirical Methods in Natural Language Processing.</i>
<!-- <div class="abstract-content" style="display:none;">
<p>Recent text generation research has increasingly focused on open-ended domains such as story and poetry generation. Because models built for such tasks are difficult to evaluate automatically, most researchers in the space justify their modeling choices by collecting crowdsourced human judgments of text quality (e.g., Likert scores of coherence or grammaticality) from Amazon Mechanical Turk (AMT). In this paper, we first conduct a survey of 45 open-ended text generation papers and find that the vast majority of them fail to report crucial details about their AMT tasks, hindering reproducibility. We then run a series of story evaluation experiments with both AMT workers and English teachers and discover that even with strict qualification filters, AMT workers (unlike teachers) fail to distinguish between model-generated text and human-generated references. We show that AMT worker judgments improve when they are shown model-generated output alongside human-generated references, which enables the workers to better calibrate their ratings. Finally, interviews with the English teachers provide deeper insights into the challenges of the evaluation process, particularly when rating model-generated text.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/bias.png" conference="ICPhS" >}}
18. {{< bookOpenIcon "https://www.internationalphoneticassociation.org/icphs-proceedings/ICPhS2019/papers/ICPhS_3740.pdf" >}} <a href="https://www.internationalphoneticassociation.org/icphs-proceedings/ICPhS2019/papers/ICPhS_3740.pdf">“How accented do Caucasian-looking vs. Asian-looking native speakers sound to a Japanese listener?”</a>
<br>
<b>Marzena Karpinska</b> (2019). <i>Proceedings of the The International Congress of Phonetic Sciences.</i> Melbourne, Australia: ICPhS.
<!-- <div class="abstract-content" style="display:none;">
<p>Speech perception involves the integration of acoustic features with socioindexical information (e.g., speaker’s ethnicity). English speakers, for instance, may rate English utterances produced by a native speaker as more accented if they believe the speaker to be Asian than if they believe the speaker to be Caucasian. This study investigates whether Japanese speakers will similarly rate English utterances as more accented when made to believe that the speaker was Asian-looking. Forty-eight participants rated the accentedness (9-point Likert-scale) of a set of sentences spoken by native English speakers. Sixteen listeners were made to believe the speakers were Caucasian, sixteen that the speakers were Asian, and sixteen
were assigned to the audio-only condition. The results indicate no effect of ethnicity on accent rating by the non-native raters. Hence, non-native (Japanese) speakers may be less influenced by the speaker’s perceived ethnicity when evaluating the level of English accent as spoken by native speakers.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/emoji2.png" conference="Routledge" >}}
19. {{< bookOpenIcon "https://www.routledge.com/Emoticons-Kaomoji-and-Emoji-The-Transformation-of-Communication-in-the/Giannoulis-Wilde/p/book/9780367785215" >}} <a href="https://www.routledge.com/Emoticons-Kaomoji-and-Emoji-The-Transformation-of-Communication-in-the/Giannoulis-Wilde/p/book/9780367785215">“Emoticons: Digital Lingua Franca or a Culture-Specific Product Leading to Misunderstandings?”</a>
<br>
<b>Marzena Karpinska</b>, Paula Kurzawska, and Katarzyna Rozanska (2019).  <i>Emoticons, Kaomoji, and Emoji: The Transformation of Communication in the Digital Age (Routledge Research in Language and Communication).</i> Ed. by E. Giannoulis and Lukas R.A. Wilde.
<!-- <div class="abstract-content" style="display:none;">
<p>In the past two decades, the constant development and popularization of the internet, as well as the emergence of smartphones and other mobile devices, triggered the emergence of new ways of communication. Among
these, we can distinguish (1) instant messaging (IM)—a tool enabling individuals to communicate using their phones, laptops, or other devices—and (2) social media—various platforms facilitating communication between individuals or between an individual and a larger group. This shift to digital communication created a need for nonverbal (or nontextual) cues to overcome limitations of computer-mediated communication (CMC). Park, Baek, and Cha (2014, 466) point out that such nonverbal cues account for up to 93% of everyday communication. Although on-paper communication (e.g., letters or postcards) has existed for centuries, it has never required a constant, dialogue-like exchange of utterances. Thus, one could convey one’s emotions only by writing about them. In contrast, communication in the digital age requires a quick and effective exchange of information, leaving little space for lengthy messages—but plenty of room for misinterpretation. Moreover, the emergence of internet forums and social networking services created a previously nonexistent opportunity to talk to people one would not have encountered otherwise. This makes any interpretation of textual messages increasingly difficult, since it is based on previous knowledge about the respective interlocutor. Digital pictograms and ideograms like emoticons, and later emoji (encompassing smileys as well as ideograms), were a natural answer to the basic
human need for instantaneous, confusion-free, effective communication, since these new forms of digital exchange turned out to be largely bereft of traditional nonverbal cues. Ptaszynski et al. (2010, 46) explain that emoticons “are virtual representations of body language and their main function is similar—namely to convey information about the speaker’s emotional state”. Accordingly, emoticons are considered representations of body language in a textual form. Sanderson described the very first emoticons (also called ‘smileys’) as “a sequence of ordinary characters you can find on your computer keyboard” (Sanderson 1993, 1).</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/kyoyo2.png" conference="KJEE" >}}
20. {{< bookOpenIcon "https://repository.dl.itc.u-tokyo.ac.jp/record/2000978/files/KJEE10_049-065.pdf" >}} <a href="https://repository.dl.itc.u-tokyo.ac.jp/record/2000978/files/KJEE10_049-065.pdf">"The Discourse of Kyōyō and English Education in Japan"</a>
<br>
Kimie Yamamura, Ryo Gakutani, <b>Marzena Karpinska</b>, Tetsuro Tanojiri, and Tom Gally (2019). <i>Komaba Journal of English Education.</i> Department of English Language, The University of Tokyo, Komaba.
<!-- <div class="abstract-content" style="display:none;">
<p>Among the many controversies that have raged about English education in Japan (Kawasumi, 1978), one of the most fundamental has been about whether the teaching of English in schools should be for practical purposes or for fostering the students’ intellect, character, and general knowledge. Advocates of practical applications, called jitsuyō in Japanese, emphasize English’s usefulness in education, work, and personal life, and they point to the language’s growing role as an international lingua franca. Supporters of the second approach, while not denying the practical uses of the language for some, say that, in Japanese educational contexts, most students would be better served if their instruction in English is positioned as part of a broad, liberal education, or kyōyō. 
This controversy is not new. As described below and in Gally (2018), this confl ict between jitsuyō and kyōyō can be seen in disputes about the need for English education that fl ared in the 1920s and 1970s. Although this debate has not been completely resolved, there has been a widespread perception, probably justifi ed, that kyōyō has largely given way to jitsuyō as the primary motivation for teaching and learning English in Japan. This increased emphasis on practical applications of the language can be seen in several areas, including the reduced focus on literature in university language classes and the adoption of “communication” as a central concept in government-directed Englishlanguage curricula. In areas other than English language education, however, kyōyō has maintained a strong presence, as can be seen by the incorporation of ethics education (dōtoku kyōiku) into standard school curricula and the many books and
magazines published in recent years that promise to foster the kyōyō of adults. And despite the disbanding of liberal arts departments at many public universities in the early 1990s, several continue to have major divisions with kyōyō in their names, including Saitama University and the University of Tokyo. Interestingly, Akita International University and the School of International Liberal Studies at Waseda University, both established in 2004, include kyōyō in their Japanese names while teaching all of their classes in English. Nevertheless, while the term kyōyō has been frequently used in different educational contexts, the continuity in the different meanings of kyōyō has rarely been discussed. The disputes about English education, even the one between jitsuyō and kyōyō, have tended to be discussed fragmentally, as if the meaning of kyōyō is unique to a specifi c time and context. In this paper, drawing on Foucault’s concept of discours, which we here call “discourse,” we attempt to explore how the meanings of kyōyō have been used to justify statements about who needs to learn English in Japan from a broader perspective. Our focus is on how the evolving meanings of kyōyō share a certain consistency and similarity. In the process, we reveal that the discourse of kyōyō functions in part as resistance to the profit - and efficiency-driven perspectives of policies at the national level.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/subchar.png" conference="RelNLP" >}}
21.  {{< bookOpenIcon "http://aclweb.org/anthology/W18-2905" >}}  {{< globeIcon "https://vecto.space/projects/jBATS/" >}} <a href="http://aclweb.org/anthology/W18-2905">“Subcharacter Information in Japanese Embeddings: When Is It Worth It?”</a>
<br>
<b>Marzena Karpinska</b>, Bofang Li, Anna Rogers, and Aleksandr Drozd (2018). <i>Proceedings of the Workshop on the Relevance of Linguistic Structure in Neural Architectures for NLP.</i> Melbourne, Australia: ACL, pp. 28–37.
<!-- <div class="abstract-content" style="display:none;">
<p>Languages with logographic writing systems present a difficulty for traditional character-level models. Leveraging the subcharacter information was recently shown to be beneficial for a number of intrinsic and extrinsic tasks in Chinese. We examine whether the same strategies could be applied for Japanese, and contribute a new analogy dataset for this language.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< pubWithImage image="/images/vowels.png" conference="ICPhS" >}}
22.  {{< bookOpenIcon "https://www.internationalphoneticassociation.org/icphs-proceedings/ICPhS2015/Papers/ICPHS0264.pdf" >}} <a href="https://www.internationalphoneticassociation.org/icphs-proceedings/ICPhS2015/Papers/ICPHS0264.pdf">“Vowel perception by listeners from different English dialects”</a>
<br>
<b>Marzena Karpinska</b>, Shodai Uchida, and Izabelle Grenon (2015). <i>Proceedings of the The International Congress of Phonetic Sciences.</i> Glasgow, Scotland: ICPhS.
<!-- <div class="abstract-content" style="display:none;">
<p>Native English listeners from North America rely primarily on changes in formants, not vowel duration, when perceiving the vowel contrast in the minimal pair <i>bit</i> and <i>beat</i> manipulated from a Canadian English sample. In this paper, we evaluated which cue do native English listeners from other regions use when perceiving the same North American vowel contrast. For this purpose, we used the same task and stimuli as in the study with North American listeners. Our results indicate that listeners from the UK, New Zealand, Ireland and Singapore used primarily changes in formants, a pattern similar to listeners from North America. Australian listeners, however, relied primarily on vowel duration rather than formants. The reaction time results suggest that the difference between Australian listeners and other listeners may be due to differences in the characteristics of vowels in Australian English versus North American English.</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

{{< themeText >}}In Japanese（日本語）{{< /themeText >}}
{{< newline >}}

{{< pubWithImage image="/images/cognates_ja.png" conference="ANLP" >}}
23. {{< bookOpenIcon "https://drive.google.com/file/d/1wxueg9KaHlwsu_hNUxcpNnuKleK6Bryb/view?usp=sharing" >}} {{< awardIcon "https://drive.google.com/file/d/1efWHNXb-xBfTEUfO19iUwOsgsLZQxIW6/view?usp=sharing" >}} <a href="https://drive.google.com/file/d/1wxueg9KaHlwsu_hNUxcpNnuKleK6Bryb/view?usp=sharing">分散表現を用いたロマンス語同源語動詞の意味変化の分析 (Analysis of Semantic Shift in Romance Cognate Verbs Using Word Embeddings) </a>
<br>
Kawasaki Yoshifumi, Maëlys Salingre, <b>Marzena Karpinska</b>, Takamura Hiroya, Nagata Ryo (2022). <i>Proceedings of the 28th Annual Conference of the Association for Natural Language Processing.</i> Hamamatsu, Japan. (committee award for novelty)
<!-- <div class="abstract-content" style="display:none;">
<p>ロマンス語とは,ラテン語から派生した姉妹言語の総称である。ロマンス諸語には,語源を共有する同源語が数多く存在するが,意味や用法が異なるものもある。本稿では,ロマンス語のうち仏伊西の動詞に焦点を絞り,意味変化の大きさと,言語内要因の関係を統計的に分析した。意味変化の大きさは単語の分散表現で測定した。分析の結果,意味変化の大きさには,ロマンス語の頻度,ラテン語の多義性,ロマンス語の単語長が影響することが判明した。</p>
</div>
<button class="abstract-toggle">Abstract</button> -->
{{< /pubWithImage >}}

