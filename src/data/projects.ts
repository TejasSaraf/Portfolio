export interface BlogSection {
  title: string
  paragraphs: string[]
}

export interface Metric {
  value: string
  label: string
}

export type Category = 'Voice AI' | 'Streaming' | 'On-device ML' | 'Infrastructure'

export interface Project {
  id: string
  title: string
  subtitle: string
  period: string
  link?: string
  emoji: string
  bgColor: string
  bgColor2: string
  heroBgColor: string
  heroBgColor2: string
  cardDesc: string
  award?: string
  cardAward?: string
  categories: Category[]
  stack: string[]
  metrics: Metric[]
  blogOverview: string
  blogSections: BlogSection[]
}

export const projects: Project[] = [
  {
    id: 'freightvoice',
    title: 'FreightVoice',
    subtitle: 'Finalist – Y-Combinator Voice Agents Hackathon',
    period: 'Apr 2026 – May 2026',
    link: '#',
    emoji: '🎙️',
    bgColor: '#d1fae5',
    bgColor2: '#6ee7b7',
    heroBgColor: '#059669',
    heroBgColor2: '#065f46',
    award: 'YC Hackathon Finalist',
    cardAward: 'YC Finalist',
    cardDesc:
      'AI-native self-improving voice agent for freight broker carrier coordination, cutting call latency to 0.5s.',
    categories: ['Voice AI', 'Streaming'],
    stack: [
      'Python',
      'FastAPI',
      'Pipecat',
      'vLLM',
      'Nemotron-3-Super-120B',
      'AWS SageMaker',
      'AWS ECR',
      'Twilio TwiML',
      'Nvidia ASR',
      'Cekura MCP',
      'WebSocket',
      'React',
      'WebRTC',
    ],
    metrics: [
      { value: '0.5s', label: 'End-to-end call latency' },
      { value: 'Self-improving', label: 'Eval loop via Cekura MCP' },
      { value: 'YC Finalist', label: 'Voice Agents Hackathon' },
    ],
    blogOverview:
      'FreightVoice is an AI-native voice agent built to automate carrier coordination calls for freight brokers. Developed as a finalist project at the Y-Combinator Voice Agents Hackathon, it combines a real-time Pipecat voice pipeline, vLLM-served NVIDIA Nemotron-3-Super-120B inference, and a self-improving eval loop powered by Cekura MCP — achieving sub-500ms end-to-end call latency.',
    blogSections: [
      {
        title: 'The Problem',
        paragraphs: [
          'Freight brokers handle hundreds of repetitive carrier coordination calls daily — confirming load availability, negotiating rates, and updating shipment status. While these conversations follow predictable patterns, they require natural-sounding speech and fast responses. Even a 1–2 second response delay makes an agent sound robotic and erodes caller trust.',
          'The core challenge was building a voice agent that could handle these calls end-to-end with human-like responsiveness, and critically — one that continuously improves its own performance without manual prompt engineering between deployments.',
        ],
      },
      {
        title: 'Real-Time Voice Pipeline',
        paragraphs: [
          'The pipeline was built on Pipecat, an open-source framework for composable real-time voice AI. Incoming audio from Twilio is streamed to Nvidia ASR for transcription, then routed to a vLLM-served Nemotron-3-Super-120B instance running on AWS SageMaker for response generation, then synthesized back to speech via Nvidia TTS — all connected over WebSockets with sub-500ms p95 latency.',
          'To keep inference consistently hot, the LLM container image was packaged via AWS ECR and deployed on ECS with a persistent warm GPU instance. Pipecat handles backpressure, interruption detection, and conversation turn-taking natively, so the dialogue flow feels natural even over Twilio\'s compressed audio codec.',
        ],
      },
      {
        title: 'Self-Improving Eval Loop with Cekura MCP',
        paragraphs: [
          'The standout feature of FreightVoice is its closed-loop self-improvement mechanism. After every call, Cekura MCP automatically scores agent performance across rubrics including task completion, tone appropriateness, negotiation effectiveness, and factual accuracy. These structured scores are fed back into the system prompt context for subsequent calls.',
          'Over 50+ simulated calls during testing, this mechanism demonstrated measurable prompt quality improvement without any human relabeling — the agent learned to handle edge cases like off-script carrier questions more gracefully with each iteration.',
        ],
      },
      {
        title: 'Hackathon Outcome',
        paragraphs: [
          'FreightVoice reached the finalist round of the Y-Combinator Voice Agents Hackathon, competing against hundreds of global submissions. Judges highlighted the self-improving eval loop as a particularly novel contribution to the voice AI space — most production voice systems require expensive human feedback loops, while Cekura MCP enables fully automated improvement cycles at scale.',
        ],
      },
    ],
  },
  {
    id: 'instamind',
    title: 'instaMIND.tech',
    subtitle: 'On-Device Multi-Agent Security Surveillance',
    period: 'Mar 2026 – May 2026',
    link: '#',
    emoji: '🧠',
    bgColor: '#ede9fe',
    bgColor2: '#c4b5fd',
    heroBgColor: '#7c3aed',
    heroBgColor2: '#3b0764',
    award: 'Google DeepMind × InstaLILY AI Hackathon',
    cardAward: 'DeepMind Hackathon',
    cardDesc:
      'On-device video intelligence for security surveillance with <100ms P95 detection using C++/OpenCV and fine-tuned Gemma 3.',
    categories: ['On-device ML', 'Infrastructure'],
    stack: [
      'PyTorch',
      'Gemma 3',
      'C++',
      'PEFT/QLoRA',
      'Unsloth',
      'llama.cpp',
      'LangChain',
      'WebRTC',
      'OpenCV',
      'Python',
      'React',
      'FastAPI',
      'Supabase',
      'YOLOv8',
      'Pillow',
    ],
    metrics: [
      { value: '<100ms', label: 'P95 incident detection latency' },
      { value: '2×', label: 'Faster Gemma 3 fine-tuning with Unsloth' },
      { value: '160ms', label: 'Voice agent chunk processing' },
    ],
    blogOverview:
      'instaMIND.tech is an on-device multi-agent security surveillance platform built for the Google DeepMind × InstaLILY AI Hackathon. It detects security incidents from live video in under 100ms P95 using a C++/OpenCV frame pipeline fused with a fine-tuned Gemma 3 vision model — all running entirely on-device without cloud dependency.',
    blogSections: [
      {
        title: 'The Problem',
        paragraphs: [
          'Traditional cloud-based surveillance systems introduce multi-second latency in incident detection, making them unsuitable for real-time security response. Privacy regulations also make cloud-based video analysis unacceptable in many enterprise and residential deployments.',
          'The challenge was to build a complete video intelligence pipeline that runs on edge hardware, detects incidents in real time, and integrates a voice alerting system — all within the constraints of a single device without internet dependency.',
        ],
      },
      {
        title: 'On-Device Video Intelligence',
        paragraphs: [
          'The video processing pipeline was written in C++ using OpenCV for frame capture and preprocessing, combined with YOLOv8 for fast object and person detection. Gemma 3, running via llama.cpp for quantized on-device inference, handles the semantic understanding layer — determining whether detected objects or events constitute a genuine security incident requiring alerting.',
          'The pipeline achieves under 100ms P95 latency by keeping all computation local, using 4-bit quantized weights, and parallelizing frame analysis across CPU cores with minimal memory copying between pipeline stages.',
        ],
      },
      {
        title: 'Training Optimization: 2× Faster Fine-Tuning',
        paragraphs: [
          'Fine-tuning Gemma 3 for security-specific incident recognition required rebuilding the training stack for hardware efficiency. By combining Unsloth (which patches PyTorch training ops for 2× memory efficiency), QLoRA 4-bit quantization via PEFT, and Flash Attention 2, the fine-tuning process ran at twice the speed of a standard PEFT setup at equal accuracy.',
          'This made it practical to fine-tune on a custom security incident dataset within the hackathon time constraint, producing a domain-adapted model without renting expensive GPU clusters.',
        ],
      },
      {
        title: 'Multimodal Voice Agent for Alerts',
        paragraphs: [
          'A voice agent was integrated using Gemma 3n 4B — a multimodal model that processes voice and vision in a single model pass, eliminating the need for separate STT and TTS components. Audio is processed in 160ms chunks over WebRTC, and alert notifications are dispatched via Twilio and email through Supabase edge functions.',
          'This unified architecture is significantly lighter than typical voice pipelines and enables the agent to verbally describe what it sees in the video feed while simultaneously issuing alerts — without the latency overhead of two separate model calls.',
        ],
      },
    ],
  },
  {
    id: 'fundteez',
    title: 'Fundteez.com',
    subtitle: 'Fundraising Platform for Top US Clients',
    period: 'Nov 2025 – May 2026',
    link: '#',
    emoji: '💰',
    bgColor: '#dbeafe',
    bgColor2: '#93c5fd',
    heroBgColor: '#2563eb',
    heroBgColor2: '#0e7490',
    cardDesc:
      'Production fundraising platform with 100% uptime on AWS ECS, Stripe Connect 50/50 revenue splits, and 50% faster deployments via CDK.',
    categories: ['Infrastructure', 'Streaming'],
    stack: [
      'React',
      'TypeScript',
      'Node.js',
      'Express',
      'PostgreSQL',
      'MongoDB',
      'Redis',
      'AWS ECS Fargate',
      'AWS CDK',
      'Stripe Connect',
      'Docker',
      'JWT (RS256)',
      'RDS',
      'SQS',
    ],
    metrics: [
      { value: '100%', label: 'Production uptime' },
      { value: '50%', label: 'Faster deployments via AWS CDK' },
      { value: '50/50', label: 'Revenue splits via Stripe Connect' },
    ],
    blogOverview:
      'Fundteez.com is a production fundraising platform serving top US nonprofit clients. It handles donation processing, campaign management, and automated revenue distribution — running on a fully containerized AWS infrastructure with zero-downtime deployments and Stripe Connect-enforced 50/50 gross revenue splits.',
    blogSections: [
      {
        title: 'Platform Overview',
        paragraphs: [
          'Fundteez serves as a white-label fundraising engine for nonprofit organizations, enabling them to run donation campaigns with custom branding, real-time analytics, and automated fund disbursement. The platform handles everything from donor-facing checkout flows to back-office reporting and reconciliation.',
          'The stack is a MERN-based application with a TypeScript React frontend, Node.js/Express API backend, and PostgreSQL with MongoDB for structured and document data respectively. Redis handles session management and rate limiting on payment-sensitive endpoints.',
        ],
      },
      {
        title: 'Infrastructure: Zero-Downtime on AWS ECS Fargate',
        paragraphs: [
          'All backend services are containerized and deployed on AWS ECS Fargate, removing the need to manage EC2 instances. Each service runs behind an Application Load Balancer with health-check-based rolling updates, achieving 100% uptime across the platform operating period. The domain is on Route 53 with SSL termination at the ALB, and static assets are served via S3 with CloudFront.',
          'VPC network segmentation ensures the database tier (RDS) is never exposed to the public internet. SQS queues decouple webhook processing from the main API, preventing payment event backlogs from affecting user-facing response times.',
        ],
      },
      {
        title: 'Payment Reliability with Stripe Connect',
        paragraphs: [
          'Payment processing used Stripe Connect with server-side checkout sessions and a full webhook pipeline. Webhook events are verified with Stripe signatures and idempotency keys to prevent double-processing — ensuring every transaction has a single source of truth regardless of network failures or client retries.',
          'The 50/50 gross revenue split between Fundteez and the nonprofit client is enforced at the Stripe level via connected account transfers, removing any risk of manual reconciliation errors and giving both parties real-time payout visibility in their respective Stripe dashboards.',
        ],
      },
      {
        title: 'CI/CD Automation with AWS CodePipeline + CDK',
        paragraphs: [
          'Deployment automation was built with AWS CodePipeline and AWS CDK, defining the entire infrastructure as TypeScript code. A commit to main triggers a CodeBuild stage for container image builds and integration tests, followed by a CodeDeploy stage performing blue/green ECS deployments — reducing deployment turnaround time by 50% compared to manual ECS task definition updates.',
        ],
      },
    ],
  },
  {
    id: 'clinsearch',
    title: 'ClinSearch',
    subtitle: 'Vivpro.ai Clinical Trials Hackathon',
    period: 'Jan 2026 – Feb 2026',
    link: '#',
    emoji: '🔬',
    bgColor: '#ffe4e6',
    bgColor2: '#fda4af',
    heroBgColor: '#e11d48',
    heroBgColor2: '#881337',
    award: 'Vivpro.ai Hackathon',
    cardAward: 'Vivpro.ai Hackathon',
    cardDesc:
      'Clinical NLP pipeline for natural-language search over 1,000+ NIH trials with LLM entity extraction, reducing missed matches by 30%.',
    categories: ['Infrastructure'],
    stack: [
      'Python',
      'FastAPI',
      'React',
      'Elasticsearch',
      'AWS OpenSearch',
      'LangChain',
      'LangGraph',
      'LLM',
      'RAG',
      'Docker',
      'TypeScript',
      'ETL',
    ],
    metrics: [
      { value: '1,000+', label: 'NIH clinical trials indexed' },
      { value: '30%', label: 'Fewer missed matches on queries' },
    ],
    blogOverview:
      'ClinSearch is a full-stack clinical trial search application that lets medical researchers and patients query over 1,000+ NIH clinical trials using plain natural language. It combines LLM-based entity extraction with a tuned Elasticsearch bool query to significantly outperform keyword search — reducing missed matches by 30% on phase/condition-specific queries.',
    blogSections: [
      {
        title: 'The Problem',
        paragraphs: [
          "ClinicalTrials.gov provides access to thousands of NIH-registered studies, but its search interface is purely keyword-based. A researcher looking for \"trials for aggressive breast cancer patients over 50 with prior chemo\" would get poor results without knowing specific protocol terms like \"HER2+\", \"metastatic\", or exact eligibility identifiers.",
          'ClinSearch was built to bridge this gap — enabling natural-language queries that are semantically understood and translated into precise, structured Elasticsearch queries against a curated trial index.',
        ],
      },
      {
        title: 'ETL Pipeline & Data Architecture',
        paragraphs: [
          'A custom ETL pipeline in Python fetches, parses, and normalizes clinical trial records from the NIH ClinicalTrials.gov API. Over 1,000 trials were indexed into Elasticsearch (deployed as AWS OpenSearch) with structured fields for phase, condition, intervention, eligibility criteria, sponsor, and status.',
          'The normalization step is critical: raw trial data uses inconsistent terminology — "Phase 2", "PHASE II", "phase 2/3" — so a preprocessing layer maps all variants to canonical forms to ensure consistent faceted filtering and accurate relevance scoring.',
        ],
      },
      {
        title: 'LLM-Enhanced Search with Entity Extraction',
        paragraphs: [
          'When a user submits a natural-language query, LangChain orchestrates an entity extraction step using an LLM to identify medical entities: condition, phase, intervention type, patient demographics, and geographic constraints. These entities are mapped to Elasticsearch field values and composed into a tuned bool query with field-specific relevance boosting.',
          'The tuned bool query uses a combination of must, should, and filter clauses with boosting on condition and phase fields — outperforming simple multi-match queries by 30% on recall for phase/condition-specific searches. LangGraph manages multi-turn refinement, letting users iteratively filter results with follow-up natural language queries.',
        ],
      },
      {
        title: 'Hackathon Result',
        paragraphs: [
          'ClinSearch was awarded Runner-up in the Intelligent Clinical Trials Search Track at the Vivpro.ai Hackathon. Judges recognized the LLM entity extraction + Elasticsearch hybrid approach as a production-ready pattern that meaningfully improves trial discoverability for patients and researchers who lack deep medical vocabulary.',
        ],
      },
    ],
  },
  {
    id: 'opusai',
    title: 'Opusai.live',
    subtitle: 'AI Assistant for Ophthalmology – ScarletHacks 2026',
    period: 'Apr 2026 – May 2026',
    link: '#',
    emoji: '👁️',
    bgColor: '#ffedd5',
    bgColor2: '#fdba74',
    heroBgColor: '#ea580c',
    heroBgColor2: '#92400e',
    award: 'ScarletHacks 2026',
    cardAward: 'ScarletHacks 2026',
    cardDesc:
      'Local AI diagnostic assistant reducing Diabetic Retinopathy screening from weeks to <8s using fine-tuned PaliGemma 2 3B with QLoRA 4-bit.',
    categories: ['On-device ML'],
    stack: [
      'Python',
      'PyTorch',
      'HuggingFace Transformers',
      'PaliGemma 2 3B',
      'QLoRA',
      'LoRA',
      'Ollama',
      'FastAPI',
      'Uvicorn',
      'React',
      'TypeScript',
      'Pillow',
    ],
    metrics: [
      { value: '<8s', label: 'DR screening (was weeks)' },
      { value: '4×', label: 'VRAM reduction via QLoRA 4-bit' },
      { value: '100%', label: 'On-device — no patient data leaves' },
    ],
    blogOverview:
      'Opusai.live is a local AI diagnostic assistant for ophthalmologists that reduces Diabetic Retinopathy (DR) screening turnaround from weeks to under 8 seconds. It runs entirely on-premise using a fine-tuned PaliGemma 2 3B model with QLoRA 4-bit quantization trained on the IDRiD dataset — no cloud, no patient data leaving the device.',
    blogSections: [
      {
        title: 'The Problem',
        paragraphs: [
          'Diabetic Retinopathy is the leading cause of preventable blindness among working-age adults worldwide, yet screening is severely bottlenecked by ophthalmologist availability. Fundus images taken in clinics routinely wait weeks before a specialist reviews them — during which time the disease can progress to irreversible stages.',
          'The goal was to build a local AI assistant that could immediately analyze fundus images for DR signs, provide grading output, and integrate into existing clinical workflows — without any cloud dependency that would create HIPAA compliance exposure.',
        ],
      },
      {
        title: 'Fine-Tuning PaliGemma 2 3B on IDRiD',
        paragraphs: [
          "PaliGemma 2 3B (Google's vision-language model) was fine-tuned on the IDRiD (Indian Diabetic Retinopathy Image Dataset), which contains 516 labeled fundus photographs with pixel-level lesion annotations and disease grading labels across five severity levels.",
          'QLoRA 4-bit quantization was applied during fine-tuning using the PEFT library, reducing VRAM usage by 4× compared to full-precision LoRA fine-tuning — making it practical to train on a single consumer GPU. The resulting model maintains diagnostic accuracy on the IDRiD held-out test set while running inference in under 8 seconds per image on standard clinical workstation hardware.',
        ],
      },
      {
        title: 'Local Inference Stack',
        paragraphs: [
          'The fine-tuned model is served locally via Ollama, which handles model loading, quantized inference, and a simple HTTP API without requiring a GPU runtime setup from the clinician. FastAPI exposes a diagnostic endpoint that accepts fundus image uploads, preprocesses them with Pillow (resize, normalize, CLAHE contrast enhancement for retinal features), runs inference via Ollama, and returns a structured grading report.',
          'The React + TypeScript frontend provides a clean clinical interface for image upload, real-time inference progress, and structured severity output. The entire stack runs offline on clinic hardware — patient images never leave the local network.',
        ],
      },
      {
        title: 'Clinical Impact',
        paragraphs: [
          'By compressing screening turnaround from weeks to under 8 seconds, Opusai.live enables point-of-care DR screening in primary care and optometry settings where ophthalmologists are not on-site. The system was demonstrated at ScarletHacks 2026, receiving recognition for its privacy-first approach to AI-assisted medical diagnosis using fully local inference.',
        ],
      },
    ],
  },
]
