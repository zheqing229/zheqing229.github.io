---
layout: post
title: TiMem Paper Accepted at ACL Findings 2026
date: 2026-04-06
inline: false
related_posts: false
---

Our paper ["TiMem: Temporal-Hierarchical Memory Consolidation for Long-Horizon Conversational Agents"](https://arxiv.org/abs/2601.02845v1) has been accepted at ACL Findings 2026. TiMem is a temporal-hierarchical memory framework that consolidates fragmented conversations into structured persona profiles, and has been deployed as a main product line at AIGility Cloud(智悦云创).

Abstract: 

Long-horizon conversational agents have to manage ever-growing interaction histories that quickly exceed the finite context windows of large language models (LLMs). Existing memory frameworks provide limited support for temporally structured information across hierarchical levels, often leading to fragmented memories and unstable long-horizon personalization. We present TiMem, a temporal--hierarchical memory framework that organizes conversations through a Temporal Memory Tree (TMT), enabling systematic memory consolidation from raw conversational observations to progressively abstracted persona representations. 

TiMem is characterized by three core properties: 

(1) temporal--hierarchical organization through TMT; 

(2) semantic-guided consolidation that enables memory integration across hierarchical levels without fine-tuning; 

(3) complexity-aware memory recall that balances precision and efficiency across queries of varying complexity.

Under a consistent evaluation setup, TiMem achieves state-of-the-art accuracy on both benchmarks, reaching 75.30% on LoCoMo and 76.88% on LongMemEval-S. It outperforms all evaluated baselines while reducing the recalled memory length by 52.20% on LoCoMo. Manifold analysis indicates clear persona separation on LoCoMo and reduced dispersion on LongMemEval-S. Overall, TiMem treats temporal continuity as a first-class organizing principle for long-horizon memory in conversational agents.

![![TiMem](/assets/img/timem.png)](/assets/img/timem.png)