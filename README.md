# P8_SecureArticles_230104040119

# Praktikum 8 – Secure & Observable RESTful API (Web Service Engineering)

Repository ini merupakan hasil Praktikum 8 mata kuliah Web Service Engineering dengan fokus pada perancangan Secure & Observable RESTful API menggunakan pendekatan design-first. Resource utama yang digunakan adalah Articles dengan dukungan autentikasi JWT, Role-Based Access Control (RBAC), hardening API, serta observability.

## Tujuan Praktikum
- Merancang RESTful API sesuai 7 RESTful Principles
- Mendesain sistem autentikasi JWT (access token & refresh token)
- Menerapkan Role-Based Access Control (admin dan user)
- Menerapkan security hardening pada API
- Menyediakan observability (health check dan correlation-id)
- Menyusun dokumentasi OpenAPI yang siap digunakan untuk integrasi

## Teknologi dan Tools
OpenAPI 3.0, JWT Authentication, Role-Based Access Control (RBAC), RESTful API Design, HTTP Client (Mobile), GitHub Repository

## RESTful Principles yang Diterapkan
1. Resource-Oriented dengan endpoint /api/articles
2. Stateless menggunakan JWT pada setiap request
3. Proper HTTP Methods (GET, POST, PUT, DELETE)
4. Proper HTTP Status Codes
5. Layered System
6. Cacheability pada endpoint GET Articles
7. Uniform Interface

## Endpoint Authentication
POST /api/auth/register (Public) – Registrasi user baru  
POST /api/auth/login (Public) – Login dan mendapatkan access token  
POST /api/auth/refresh (Public) – Refresh access token  
POST /api/auth/logout (JWT) – Logout dan invalidate token  
GET /api/auth/me (JWT) – Mengambil profil user  

## Endpoint Articles (CRUD + RBAC)
GET /api/articles (Public) – List articles dengan pagination  
POST /api/articles (user/admin) – Create article  
PUT /api/articles/{id} (owner/admin) – Update article  
DELETE /api/articles/{id} (admin) – Delete article  

## Security dan Hardening
JWT Authentication (access & refresh token), Role-Based Access Control, Input Validation, Rate Limiting pada endpoint login, Security Headers, Error Hygiene, dan penggunaan environment variable untuk konfigurasi sensitif.

## Observability
Health Check Endpoint (/health), penggunaan Correlation-ID pada setiap request, dan pencatatan request secara terstruktur (konseptual).

## Dokumentasi API
Dokumentasi API dibuat menggunakan OpenAPI Specification dan tersedia pada endpoint /docs.

## Evidence Pengujian
Screenshot Register User, Screenshot Login User, Screenshot Create Article, Screenshot List Articles (Pagination), Screenshot Update atau Delete Article, Screenshot Health Check, dan Screenshot Header Correlation-ID.

## Catatan Akhir
Project ini menitikberatkan pada perancangan arsitektur, dokumentasi API, serta penerapan konsep keamanan dan observability sesuai standar Web Service Engineering dan siap dikembangkan ke tahap implementasi backend penuh.
