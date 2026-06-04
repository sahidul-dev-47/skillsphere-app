# SkillSphere 🚀

### A robust full-stack Online Course Platform built with the MERN stack and Next.js.
[![Live Demo](https://img.shields.io/badge/demo-live-green)](https://skillsphere-app-l97u.vercel.app/)
[![GitHub Client](https://img.shields.io/badge/repo-client-blue)](https://github.com/sahidul-dev-47/skillsphere-app)

SkillSphere is a comprehensive Learning Management System (LMS) designed to bridge the gap between students and quality education. It provides an intuitive interface for discovering courses, managing learning progress, and handling media-rich user profiles [1, 2].

---

## 🧐 Problem it Solves
Managing online learning often involves fragmented tools and slow user experiences. SkillSphere solves this by providing a unified, high-performance platform where users can browse curriculum details, manage their personal credentials, and experience seamless navigation through optimized server-side rendering and database management [2, 3].

**Target Users:** Independent learners, students, and educators.

---

## 🛠️ Tech Stack

| Layer | Technology |
| :--- | :--- |
| **Frontend** | React.js, Next.js, Tailwind CSS, Framer Motion |
| **Backend** | Node.js, Express.js |
| **Database** | MongoDB |
| **Authentication** | Better-Auth (JWT & OAuth) |
| **Deployment** | Vercel |
| **Tools** | Git, GitHub, Vercel |

---

## ✨ Main Features

- **Interactive Course Catalog:** Dynamic discovery interface featuring comprehensive detail pages with full curriculum breakdowns [1, 2].
- **Personalized Student Dashboard:** A 'My Profile' area for authenticated users to update personal credentials and manage learning paths [1, 2].
- **Real-time Media Management:** Integrated Cloudinary support for secure, instant profile picture and media uploads [1, 2].
- **Optimized Data Flow:** Advanced MongoDB schema design and global state management for seamless navigation and data integrity [1, 2].

---




---

## ⚙️ Setup & Installation

### Setup Commands
```bash
# Clone the repository
git clone https://github.com/sahidul-dev-47/skillsphere-app

# Install dependencies
npm install

# Run the development server
npm run dev
Environment Variables Needed
Create a .env file in the root directory and add:
NEXT_PUBLIC_API_URL= (Your backend API endpoint)
MONGODB_URI= (Your MongoDB connection string)
BETTER_AUTH_SECRET= (Your authentication secret key)
CLOUDINARY_URL= (Your Cloudinary configuration)

--------------------------------------------------------------------------------
🚧 Known Limitations & Future Improvements
Known Limitations:
Real-time video streaming is currently limited to cloud storage bandwidth.
Payment gateway integration is currently in a sandbox/testing state.
Future Improvements:
Implementation of a dedicated Instructor Role for course creation.
Progressive Web App (PWA) support for offline learning.
Advanced search filters for course categories and difficulty levels.

--------------------------------------------------------------------------------
👤 Author
Sahidul Islam
Portfolio: my-portfolio-chi-rust.vercel.app
LinkedIn: sahidul-islam-
GitHub: sahidul-dev-47

---

### **2. Repository Description (GitHub Sidebar)**
Full-stack Online Course Platform (LMS) built with Next.js, Node.js, and MongoDB. Features role-based auth, Cloudinary integration, and a dynamic student dashboard.

---

### **3. GitHub Topics (10-15)**
`nextjs` `mern-stack` `reactjs` `mongodb` `tailwindcss` `learning-management-system` `cloudinary` `jwt-auth` `fullstack-developer` `web-development` `responsive-design` `frontend-developer` `rest-api` `javascript`

---

### **4. LinkedIn Post Preview**
🚀 **Excited to share my latest project: SkillSphere!**

I’ve just completed a major milestone in my journey as a Full-stack Developer. SkillSphere is a MERN-stack Online Course Platform that focuses on speed, security, and a seamless user experience.

Key Highlights:
✅ Full CRUD functionality for course management.
✅ Secure authentication using Better-Auth.
✅ Real-time media uploads via Cloudinary.
✅ Responsive UI built with Tailwind CSS and Next.js.

Check out the live demo here: https://skillsphere-app-l97u.vercel.app/

#FullStack #MERN #NextJS #WebDevelopment #ProgrammingHero #ReactJS #Hiring

---

### **5. Final Checklist Before Publishing**
- [ ] **Assets:** Create an `./assets/readme/` folder in your repo and upload your screenshots (`home.png`, `dashboard.png`).
- [ ] **Credentials:** If you want recruiters to test the dashboard without signing up, add "Demo User" and "Demo Admin" emails/passwords to the README.
- [ ] **API Endpoints:** If you have a separate backend repo, list the primary routes (e.g., `POST /api/auth/signup`) in the README.
- [ ] **Environment Variables:** Ensure you **never** commit your actual `.env` file to GitHub; keep only the `.env.example` format [4].
