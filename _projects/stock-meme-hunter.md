---
layout: page
title: Stock-Meme-Hunter
description: A hybrid retrieval and LLM reranking system for discovering hype-driven trading narratives in the A-share market.
img:
importance: 2
category: work
github: https://github.com/zheqing229/Stock-Meme-Hunter
redirect: https://github.com/zheqing229/Stock-Meme-Hunter
---

Stock-Meme-Hunter is a hybrid retrieval and reranking system for uncovering hype-driven trading narratives in the A-share market.

- Proposed a **dual inverted-index framework** that combines **pinyin-based** and **concept-based** retrieval to capture non-semantic associations such as homophones, metaphors, and implicit market signals.
- Designed a **four-stage funnel pipeline**: LLM query understanding, multi-path recall, coarse filtering, and LLM reranking.
- Retrieved the **top 5 most relevant stocks** from a candidate pool while balancing recall quality and reasoning cost.
- Used LLM-based reranking to generate interpretable hype logic chains, making the system useful for event-driven monitoring and speculative narrative analysis.
