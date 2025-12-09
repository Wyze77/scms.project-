# Student Campus Management System (SCMS)

A Centralized, Client-Side Web Platform for Campus Communication

[cite_start]The **Student Campus Management System (SCMS)** is a lightweight, fully client-side web platform designed to consolidate essential campus information into a single centralized interface[cite: 18]. [cite_start]Unlike traditional systems requiring backends, SCMS runs entirely in the browser using HTML, CSS, and JavaScript, leveraging the `localStorage` API for data persistence[cite: 28, 29].

---

## 👥 Authors

* [cite_start]**Syna Sokunketana** - Institution of Digital Technology, CADT [cite: 2-3]
* [cite_start]**Linh Rathhenry** - Institution of Digital Technology, CADT [cite: 7-8]
* [cite_start]**Kim Ang Kheang** - Cambodia Academy of Digital Technology                   (MENTOR) [cite: 12-13]

---

## 🚀 Key Features

[cite_start]SCMS provides structured modules for managing campus life, ensuring persistent user data across sessions[cite: 19, 60]:

* [cite_start]**📢 Announcements Module:** Browse categorized updates, search by keyword, filter by type (Academic, Emergency, etc.), and save important notices [cite: 68-69].
* **📅 Events Module:** View upcoming event details (date, location, capacity) and register for events. [cite_start]The system tracks availability and user registration status [cite: 72-73].
* **🤝 Clubs Module:** Explore student clubs, view membership stats, and join communities. [cite_start]"Joined" status is remembered persistently[cite: 75].
* [cite_start]**🏠 Dashboard:** A personalized hub displaying your saved announcements, registered events, joined clubs, and last visited page [cite: 77-82].
* [cite_start]**🌗 Dark/Light Mode:** A global theme toggle that persists your preference[cite: 83].

---

## 🛠️ Technology Stack

[cite_start]This project demonstrates that a complete, stateful system can be built without a backend[cite: 20]:
* [cite_start]**HTML5:** Semantic structure for all pages[cite: 36].
* [cite_start]**CSS3:** Modular styling with a custom design system (Variables, Flexbox, Grid) and TailwindCSS (via CDN) for utility classes[cite: 43].
* [cite_start]**JavaScript (ES6+):** Modular architecture using ES Modules (`import`/`export`) for logic and state management[cite: 51].
* [cite_start]**LocalStorage API:** Acts as a client-side database to store user preferences and data [cite: 59-60].

---

## 📂 Project Architecture

[cite_start]The project follows a strict modular architecture to ensure maintainability [cite: 34-58]:

```text
scms/
├── index.html              # Home / Landing Page
├── dashboard.html          # User Dashboard (Personalized View)
├── announcements.html      # Announcements Module
├── events.html             # Events & Registration Module
├── clubs.html              # Clubs & Membership Module
│
├── assets/
│   ├── css/
│   │   ├── global.css      # Core variables, typography, layout
│   │   ├── components.css  # Shared UI (Navbar, Footer, Cards, Modals)
│   │   ├── dashboard.css   # Page-specific styles
│   │   ├── announcements.css
│   │   ├── events.css
│   │   └── clubs.css
│   │
│   ├── js/
│   │   ├── app.js          # Main entry point (Theme, Global Init)
│   │   ├── core/           # Core Logic Layer
│   │   │   ├── storage.js  # LocalStorage wrapper
│   │   │   ├── components.js # UI Renderers (Nav, Modal, Toast)
│   │   │   └── utils.js    # Helper functions ($ selector, etc.)
│   │   └── pages/          # Page Controller Layer
│   │       ├── dashboard.js
│   │       ├── announcements.js
│   │       ├── events.js
│   │       └── clubs.js
│   │
│   └── img/                # SVG Icons and Assets
│
└── data/
    └── mock-data.js        # Static JSON data for the application
⚙️ Installation & Usage
Since SCMS is client-side only, no server installation (Node.js, Python, PHP) is required.

Download the project folder.

Open the index.html file in any modern web browser (Chrome, Edge, Firefox).

Navigate through the system. Your data (saved items, theme preference) will automatically be saved to your browser's Local Storage.

Note: For the best experience with ES Modules, it is recommended to run this using a local server like "Live Server" in VS Code, though it works directly in most modern browsers.

🔮 Future Roadmap
To expand SCMS into a production-ready system, the following enhancements are proposed:
-Backend Integration: Connect to Firebase or a REST API for real-time data.
-User Authentication: Secure login for students and admins.
-Admin Panel: Allow staff to create/edit announcements and events.
-Accessibility: Improve ARIA labels and screen reader support.
