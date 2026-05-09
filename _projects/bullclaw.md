---
layout: page
title: BullClaw
description: A multilingual financial report generation system built on LLM-based multi-agent workflows.
img:
importance: 1
category: work
github: https://github.com/zheqing229/BullClaw.git
redirect: https://github.com/zheqing229/BullClaw.git
---

BullClaw is a multilingual financial report generation system designed for large-scale earnings analysis with LLM-based multi-agent workflows.

- Built a stateful **LangGraph** workflow with specialized retrieval, extraction, writing, and compilation agents.
- Supported automated analysis of financial reports from **8 major global exchanges** in **4 languages**, addressing long-context bottlenecks in LLM pipelines.
- Introduced **Sirchmunk (Agentic Search)** as the core RAG engine and combined it with structured Markdown chunking to form an "extract, calculate, then explain" workflow.
- Reduced numerical hallucinations in cross-lingual and cross-period financial reasoning.
- Ranked **3rd overall** on [OpenFinArena / FinDocResearch](https://openfinarena.com/fin-doc-research), while placing **1st in the U.S. market** and **2nd in Mainland China**, outperforming strong baselines such as DeepSeek-v3.2.
- Added CLI-based batch execution and checkpoint recovery for more robust large-scale generation.
