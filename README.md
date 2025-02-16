# Eduflow-Nexus - Web2 Frontend 🌐  

**Modern, Accessible Interfaces for Campus Innovation**  

This repository hosts the **frontend** of Eduflow-Nexus’s campus life platform. Built with React, Next.js, and Tailwind CSS, it delivers intuitive interfaces for peer-to-peer tutoring, AI-powered canvas tools, and seamless academic management.  

*Deployed on Vercel • Designed for tablets, stylus, and touch gestures • Actively developed during a 30-hour hackathon!*  

---

## 🎯 Project Overview  

**Goal**: Create a responsive, student-centric interface to democratize access to AI-driven academic tools.  
**Current Focus**: Enhancing real-time collaboration for tutoring and canvas workflows.  

---

## 🚀 Key Features  

### **1. Peer-to-Peer Tutoring Dashboard**  
- **Interactive Q&A**: Post questions with tags (e.g., AI/ML), earn reputation points via upvotes, and connect with tutors.  
- **Use Case**: Students gain visibility by solving challenges; professors scout talent via reputation scores.  
- **UI**: Tag-based filtering, real-time chat, and progress tracking.  
- **Business Model**: Freemium access; institutions pay for "challenge creation" tools to recruit interns.  

### **2. Realtime Canvas with AI Integration**  
- **How It Works**:  
  - Draw schemas/structure → Send to `ai-backend` via `/generate-content` API.  
  - Get AI-generated code, diagrams, or explanations embedded alongside notes.  
- **UI**: Touch/stylus support, gesture controls, and collaborative whiteboarding.  

### **3. Academic ChatBot Widget**  
- **UI**: Floating widget with OAuth-powered session management.  
- **Use Case**: “Show me scholarships for CS students” → Instant, college-specific answers.  

### **4. Responsive & Inclusive Design**  
- **Features**:  
  - Tablet/stylus optimization for note-taking.  
  - Keyboard shortcuts (e.g., `Ctrl + Z` for Undo).  
  - Light-mode-only (dark mode in roadmap).  

---

## 🛠️ Tech Stack  
- **Framework**: React + Next.js (App Router).  
- **Styling**: Tailwind CSS + shadcn UI components.  
- **State**: Context API + Convex for real-time data.  
- **Auth**: NextAuth with OAuth (Google/GitHub/Linkedin).  
- **APIs**: Integrated with `ai-backend` endpoints (e.g., `/generate-notes`, `/extract-text`).  

---

## 📌 Business Impact  
| Feature                | Revenue Strategy                         | Target Audience          |  
|------------------------|------------------------------------------|--------------------------|  
| Tutoring Dashboard     | Freemium challenges, recruitment licenses | Universities, Employers |  
| Canvas Tools           | Tiered subscriptions for advanced AI     | STEM students, Educators|  
| ChatBot Widget         | Custom branding for institutions         | College admins          |  

---

## 🗺️ Roadmap  
- **Phase 1**: Expand touch gestures (pinch-zoom, advanced swipe navigation).  
- **Phase 2**: Build institutional dashboards for analytics.  
- **Phase 3**: Launch PWA for offline access. 

---

**Open Source • Hackathon-Built • Touch-First Design**  

🔗 **AI Backend Repository**: [ai-backend](https://github.com/CodeRelay-dotenv/ai-backend)  
*“Bridging ideas and innovation through intuitive interfaces.”*  
