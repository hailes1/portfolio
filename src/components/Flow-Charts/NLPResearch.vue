<template>
  <div class="flow-chart">
    <vue-mermaid-string :value="diagram" class="flow-chart__mermaid-chart"/>
  </div>
</template>

<script setup>
import VueMermaidString from 'vue-mermaid-string'
import { ref } from 'vue'

const diagram = ref(`
graph TD
    A[Raw Documents] --> B[PRE-PROCESSING]

    B --> B1[Document Parsing]
    B --> B2[Text Cleaning]
    B --> B3[Metadata Extraction]
    B --> B4[Language Detection]
    B --> B5[OCR for Images/PDFs]

    B1 --> C[CHUNKING]
    B2 --> C
    B3 --> C
    B4 --> C
    B5 --> C

    C --> C1[Fixed-Size Chunking]
    C --> C2[Semantic Chunking]
    C --> C3[Recursive Chunking]
    C --> C4[Sentence-Based Chunking]
    C --> C5[Token-Based Chunking]
    C --> C6[Sliding Window Chunking]
    C --> C7[Document Structure Chunking]

    C1 --> D[VECTORIZING]
    C2 --> D
    C3 --> D
    C4 --> D
    C5 --> D
    C6 --> D
    C7 --> D

    D --> D1[Embedding Models]
    D1 --> D1a[OpenAI Ada-002]
    D1 --> D1b[Sentence Transformers]
    D1 --> D1c[BERT-based Models]
    D1 --> D1d[Domain-Specific Models]
    D1 --> D1e[Multilingual Models]

    D --> D2[Dimensionality Reduction]
    D --> D3[Vector Normalization]

    D1a --> E[Vector Database]
    D1b --> E
    D1c --> E
    D1d --> E
    D1e --> E
    D2 --> E
    D3 --> E

    E --> F[SEARCHING/RETRIEVAL]

    F --> F1[Similarity Search Methods]
    F1 --> F1a[Cosine Similarity]
    F1 --> F1b[Euclidean Distance]
    F1 --> F1c[Dot Product]

    F --> F2[Retrieval Strategies]
    F2 --> F2a[Dense Retrieval]
    F2 --> F2b[Sparse Retrieval BM25]
    F2 --> F2c[Hybrid Retrieval]

    F --> F3[Advanced Techniques]
    F3 --> F3a[Query Expansion]
    F3 --> F3b[Query Rewriting]
    F3 --> F3c[Multi-Query Retrieval]
    F3 --> F3d[HyDE Hypothetical Docs]

    F --> F4[Reranking]
    F4 --> F4a[Cross-Encoder Reranking]
    F4 --> F4b[LLM-based Reranking]
    F4 --> F4c[MMR Diversity Reranking]

    F1a --> G[Retrieved Chunks]
    F1b --> G
    F1c --> G
    F2a --> G
    F2b --> G
    F2c --> G
    F3a --> G
    F3b --> G
    F3c --> G
    F3d --> G
    F4a --> G
    F4b --> G
    F4c --> G

    G --> H[LLM GENERATION]

    style B fill:#e1f5ff
    style C fill:#fff4e1
    style D fill:#ffe1f5
    style F fill:#e1ffe1
    style H fill:#ffe1e1
    style J fill:#f5e1ff`)
</script>

<style scoped>
.flow-chart {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh; /* Adjust the height as needed */
}
.flow-chart__mermaid-chart {
  width: 90%;
  height: 90%;
}
</style>
