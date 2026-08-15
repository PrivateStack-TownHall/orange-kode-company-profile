# Orange Kode - Web Profile Company

## Overview

**Orange Kode Web Profile Company** adalah website resmi untuk menampilkan informasi mengenai program bootcamp, kursus, dan layanan edukasi teknologi yang disediakan oleh **Orange Kode**.

Website ini berfungsi sebagai:

- Company profile
- Landing page untuk bootcamp dan kursus
- Platform publikasi artikel edukasi seputar web development
- Media promosi untuk menarik calon peserta bootcamp

Website ini dibangun menggunakan **Next.js** untuk memaksimalkan **SEO, performance, dan scalability**, sehingga konten seperti artikel dapat terindeks dengan baik oleh mesin pencari.

---

## Tech Stack

Berikut teknologi utama yang digunakan dalam project ini.

### Core Framework

- **Next.js** – React framework untuk SSR dan SEO
- **React** – Library untuk membangun user interface
- **Node.js** – Runtime environment

### Styling

- **TailwindCSS** – Utility-first CSS framework
- **PostCSS**
- **Autoprefixer**

### UI & Animation

- **Framer Motion** – Animation library
- **Lucide React** – Icon library

### Utility

- **clsx** – Conditional className utility

### SEO

- **next-seo** – SEO management untuk Next.js

### Content

- **MDX / Markdown** (opsional) – Untuk artikel konten

---

## Project Structure

```bash
src
│
├── app                # Next.js routing (App Router)
├── components         # Reusable UI components
├── sections           # Page sections (Hero, Courses, CTA, dll)
├── features           # Feature-based modules (articles)
├── data               # Static data
├── lib                # Utilities dan helper
├── assets             # Images dan icons
└── styles             # Global styling
```

---

## Installation

Clone repository:

```bash
git clone https://github.com/your-username/orangekode-profile.git
```

Masuk ke folder project:

```bash
cd orangekode-profile
```

Install dependencies:

```bash
npm install
```

---

## Running the Project

Menjalankan project di mode development:

```bash
npm run dev
```

Aplikasi akan berjalan di:

```
http://localhost:3000
```

---

## Build Production

Untuk membuat build production:

```bash
npm run build
```

Menjalankan build production:

```bash
npm start
```

---

## Features

Website ini memiliki beberapa fitur utama:

- Company profile
- Bootcamp & course information
- Instructor profile
- Testimonials
- FAQ
- Articles / educational content
- Contact page

---

## Author

Developed by **Orange Kode**
