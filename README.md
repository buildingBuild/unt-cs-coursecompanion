<h2 align="center"> 🎓 UNT CS CourseCompanion </h2>

**UNT CS CourseCompanion** helps Computer Science students at the University of North Texas make smarter course decisions.  
It’s a provides a chatbot where you can ask about any CSCE class — difficulty, professors, workload — and get grounded answers built on real student feedback curated from multiple sources such as rate my professor and classes,reddit and surveys.

## Live Link

- Coming Soon

## ✨ Features

- Powered by **RAG (Retrieval-Augmented Generation)** — combines live retrieval with reasoning for grounded answers.
- Learns from **RateMyProfessor**, **RateMyClass**, and **Reddit** student feedback.
- Integrates **syllabus and catalog text** for structured, factual context.
- Summarizes **workload, difficulty, and teaching style** from real student experiences.
- Maintains a live **Recently Asked** feed showing trending course questions.
- Runs **locally with Ollama** or connects to an external model API — no dependency on cloud systems.

## 🛠 Tech Stack

- **React** — frontend
- **Node.js + Express** — backend
- **Python** - worker service for embeddings data ingestion, and Chroma indexing
- **Ollama / external API** — query handling and reasoning
- **ChromaDB** — vector search for reviews and syllabus data
- **PostgreSQL** - for structured data
