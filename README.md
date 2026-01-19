# Final Project – Quality Assurance (QA)

## 📌 Deskripsi Proyek

Repositori ini berisi **Final Project Quality Assurance** yang berfokus pada **Automation Testing menggunakan Cypress**. Project ini dibuat sebagai bagian dari pembelajaran QA untuk mengimplementasikan proses pengujian aplikasi web secara end‑to‑end (E2E).

Tujuan utama project ini adalah:

* Menerapkan automation testing menggunakan Cypress
* Membuat skenario pengujian yang terstruktur
* Memastikan fitur aplikasi berjalan sesuai kebutuhan
* Menjadi portofolio QA Automation

---

## 🧪 Scope Pengujian

Beberapa fitur yang diuji dalam project ini meliputi:

* Login (valid & invalid)
* Logout
* Fitur utama aplikasi setelah login
* Validasi UI & URL

> Catatan: Aplikasi yang digunakan merupakan aplikasi demo untuk keperluan pembelajaran.

---

## 🛠 Tools & Teknologi

* **JavaScript**
* **Cypress** (End‑to‑End Testing)
* **Node.js & NPM**
* **Visual Studio Code**

---

## 📂 Struktur Folder

```
final-project-qa/
├── cypress/
│   ├── e2e/            # Test cases automation
│   ├── fixtures/       # Test data
│   ├── support/        # Custom commands & config
├── cypress.config.js   # Konfigurasi Cypress
├── package.json
├── README.md
```

---

## 🚀 Cara Menjalankan Project

### 1️⃣ Clone Repository

```bash
git clone https://github.com/tinnytoon8/final-project-qa.git
cd final-project-qa
```

### 2️⃣ Install Dependencies

```bash
npm install
```

### 3️⃣ Menjalankan Cypress

#### Open Cypress UI

```bash
npx cypress open
```

#### Run Cypress via CLI

```bash
npx cypress run
```

---

## 📑 Test Case Documentation
Dokumentasi test case manual dibuat menggunakan Google Sheet dan mencakup:
- Positive & negative scenario
- Validasi UI & URL
- Edge case pada fitur login

👉 [https://docs.google.com/spreadsheets/d/12wAHohpt9NTFfRYsp2vK8hJwvCIYex6HhnmfPKGN3xY/edit?usp=drive_link](https://docs.google.com/spreadsheets/d/12wAHohpt9NTFfRYsp2vK8hJwvCIYex6HhnmfPKGN3xY/edit?usp=drive_link)

Automation testing pada repository ini dikembangkan berdasarkan test case tersebut.

---

## ⭐ Catatan
Project ini dibuat untuk tujuan pembelajaran dan portofolio QA.
Fokus utama project ini adalah menerapkan QA mindset, yaitu:
- Test case sebagai dasar automation
- Coverage yang jelas
- Dokumentasi yang rapi dan mudah dipahami
