<div align="center">

# 📬 India Post Investment Management System

[![Next.js](https://img.shields.io/badge/Next.js-15-black?style=for-the-badge&logo=nextdotjs)](https://nextjs.org/)
[![Node.js](https://img.shields.io/badge/Node.js-v20-green?style=for-the-badge&logo=nodedotjs)](https://nodejs.org/)
[![MongoDB](https://img.shields.io/badge/MongoDB-Database-47A248?style=for-the-badge&logo=mongodb)](https://www.mongodb.com/)
[![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-3.0-06B6D4?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)

<img src="https://media.giphy.com/media/L8K62iTDkzGX6/giphy.gif" width="180" alt="Post Office Logo GIF"/>

<h3>✨ Secure • Smart • Simple Savings Dashboard ✨</h3>

<p align="center">
  A state-of-the-art wealth management and tracking portal customized for India Post RD (Recurring Deposit) portfolios. Features secure admin modules, automated maturity trackers, and real-time visualization.
</p>

---
🔑 **Admin Login** • 📊 **RD Tracking (60/120 Months)** • 💬 **Live Feedback** • 📂 **Excel/JSON Import**
---

</div>

<br />

## 🌟 Key Features

<table>
  <tr>
    <td width="50%">
      <h4>👤 Customer Dashboard</h4>
      <ul>
        <li>Real-time progress bars for savings.</li>
        <li>Instant download/view of RD schemes.</li>
        <li>Direct integration with WhatsApp & Dialers.</li>
      </ul>
    </td>
    <td width="50%">
      <h4>🔐 Secure Admin Portal</h4>
      <ul>
        <li>Token-based secure authentication.</li>
        <li>Bulk upload accounts via Excel/JSON.</li>
        <li>Direct customer database manipulation.</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td width="50%">
      <h4>📈 Advanced RD Tracker</h4>
      <ul>
        <li>Dynamic 60 / 120-month duration engine.</li>
        <li>Auto-calculates due dates and maturity amounts.</li>
        <li>Tracks premium defaults & late penalties.</li>
      </ul>
    </td>
    <td width="50%">
      <h4>💬 Interactive Feedback</h4>
      <ul>
        <li>Direct channel for users to report bugs or request features.</li>
        <li>Live admin panel review & approval workflow.</li>
      </ul>
    </td>
  </tr>
</table>

---

## 🖥️ Interactive Dashboard Preview

<div align="center">
  <img src="https://media.giphy.com/media/QssGEmpkyEOhBCb7e1/giphy.gif" width="70%"/>
  <p><i>Real-time transactional analytical interface with modern UI elements.</i></p>
</div>

---

## 🛠️ Tech Stack & Ecosystem

```mermaid
graph TD
  A[Client - Next.js] -->|JWT Auth Request| B[Server - Express.js]
  B -->|Mongoose ODM| C[(Database - MongoDB)]
  A -->|UI styling| D[Tailwind CSS]