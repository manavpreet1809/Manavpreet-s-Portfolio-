export const projects = [
  {
    id: 1,
    title: 'AVA HealthLink RAG Search Evaluation',
    category: 'AI / Healthcare',
    type: 'work',
    featured: true,
    github: null,
    demo: null,
    problem:
      'Alberta Health Link 811 triage nurses rely on AVA, AHS\'s internal RAG assistant, to quickly find relevant clinical resources from a pool of 1,000+. The problem: baseline vector search returned semantically similar documents, but not always the most clinically correct ones. Nurses needed the right answer in the top result, not just a close one.',
    description:
      'Designed and evaluated a cross-encoder reranker to improve top-ranked document retrieval inside AVA\'s production search workflow, increasing the chance that the most relevant clinical resource surfaces at position #1 or #2, not buried at #8.',
    highlights: [
      'Built reranker evaluation pipelines using Python, PyTorch, and Hugging Face Transformers, achieving a 56% relative lift in top-3 retrieval performance vs. baseline vector search in proof-of-concept testing.',
      'Integrated AVA\'s existing vector search API to retrieve top-25 candidate documents per query, then measured whether cross-encoder reranking could consistently move expected clinical resources into the top-3 results.',
      'Benchmarked MiniLM and BGE-reranker-base on retrieval accuracy, latency, and model size to identify the lightest reranker that delivered meaningful relevance gains within production constraints.',
      'Collaborated with the AI Integration team to validate that reranker outputs were clinically meaningful, not just metrically better.',
    ],
    technologies: ['Python', 'PyTorch', 'Hugging Face', 'RAG', 'Vector Search', 'Cross-Encoder Reranking'],
  },
  {
    id: 2,
    title: 'Chronic Disease Forecasting with TabPFN',
    category: 'ML / Research',
    type: 'research',
    featured: true,
    github: null,
    demo: null,
    problem:
      'Alberta Health Services needed a more reliable way to anticipate where chronic disease burden was growing, so resource allocation decisions could be proactive rather than reactive. The challenge: multi-year longitudinal health datasets are noisy, heterogeneous, and require careful validation before any model output can be trusted.',
    description:
      'Applied machine learning to forecast chronic disease trends from longitudinal health data, producing actionable insights for AHS resource planning, while building the data infrastructure to make those insights reproducible and trustworthy.',
    highlights: [
      'Applied TabPFN-based models to multi-year longitudinal health datasets to surface chronic disease trends and produce forecasts used to inform AHS resource allocation recommendations.',
      'Built Power BI dashboards to translate model outputs into visual trend reports accessible to non-technical decision-makers and operational staff.',
      'Wrote SQL queries to extract and validate structured datasets, ensuring data feeding into models was clean, consistent, and analysis-ready.',
      'Conducted data quality assessments, detecting inaccuracies, missing entries, and duplicates, to maintain database integrity and prevent unreliable reporting from propagating into decisions.',
    ],
    technologies: ['Python', 'TabPFN', 'pandas', 'NumPy', 'scikit-learn', 'Matplotlib', 'Power BI', 'SQL'],
  },
  {
    id: 3,
    title: 'Online Multiplayer Game Platform',
    category: 'Full-Stack',
    type: 'project',
    featured: false,
    github: 'https://github.com/manavpreet1809/seng300-202601-pg-3-Online-Multiplayer-Game-',
    demo: null,
    problem:
      'As part of a Software Engineering course, a 25-person team needed to design and ship a production-grade multiplayer gaming platform from scratch, with real user authentication, matchmaking, lobby management, and live turn-based gameplay, while operating under Agile/Scrum constraints that mirror an industry product team.',
    description:
      'Built a full-stack online multiplayer gaming platform using Python (FastAPI), React.js, and MongoDB, supporting user authentication, profile management, matchmaking, lobby-based game rooms, and live turn-based gameplay across a 4-month development cycle.',
    highlights: [
      'Led automated testing across the stack, writing pytest backend test suites and Jest frontend tests to validate matchmaking, lobby management, turn progression, and game-end handling.',
      'Built end-to-end integration tests covering full user flows (login → lobby → matchmaking → turn → game-end) to catch regressions before merges and keep the main branch deployable throughout development.',
      'Extended beyond QA into feature work: built FastAPI endpoints for room/lobby lifecycle and turn progression on the backend, and React components for lobby and in-game UI on the frontend.',
      'Produced UML class and use case diagrams to align cross-sub-team architecture decisions across 25 contributors.',
      'Practiced industry-style Git workflows: feature branches, pull requests, peer code reviews, and incremental merges under Scrum.',
    ],
    technologies: ['Python', 'FastAPI', 'React.js', 'MongoDB', 'pytest', 'Jest', 'Git'],
  },
  {
    id: 4,
    title: 'Sleep Tracker App',
    category: 'Software / Java',
    type: 'project',
    featured: false,
    github: 'https://github.com/manavpreet1809/Sleep-Tracker',
    demo: null,
    problem:
      'Most people track sleep duration but ignore the lifestyle factors, caffeine, exercise, screen time, that actually drive sleep quality. The goal was to build a tool that logs both, persists the data reliably offline, and surfaces meaningful correlations so users can act on patterns rather than just observe them.',
    description:
      'Built a Java-based sleep tracking application that logs nightly duration, quality ratings, and lifestyle factors, persisting 30+ structured data points per entry to CSV for offline-first analysis with rolling averages and correlation insights.',
    highlights: [
      'Architected the backend around MVC with abstract base classes for sleep entries and lifestyle factors, so new tracking metrics can be added without modifying existing analysis logic, a deliberate design choice to reduce future change surface.',
      'Implemented a 7-day rolling average engine and correlation analysis between lifestyle inputs (caffeine, exercise, screen time) and sleep quality scores, giving users actionable trend data.',
      'Persisted 30+ data points per entry to CSV for offline-first access, handling edge cases including malformed rows, leap-year date handling, and concurrent file access.',
      'Achieved 85%+ unit test coverage with JUnit across edge cases, catching 12+ bugs before integration, including silent data corruption from malformed CSV rows that would have been invisible at runtime.',
    ],
    technologies: ['Java', 'JUnit', 'CSV', 'MVC', 'GitHub'],
  },
]
