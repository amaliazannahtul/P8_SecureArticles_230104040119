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
![1000286869](https://github.com/user-attachments/assets/f84e6dad-7107-4ca7-a4b3-0d9bcd517a90)
![1000281423](https://github.com/user-attachments/assets/77d8662a-5ea1-4855-b069-e2a85886c651)
![1000281422](https://github.com/user-attachments/assets/cded09b2-0b88-4696-819a-bf1f5d73b6e9)
![1000281420](https://github.com/user-attachments/assets/4221df82-acc8-4b07-90b3-e6841ed3cfe4)
![1000281415](https://github.com/user-attachments/assets/9b14fa3d-1b2b-423a-a069-96873dbc9ef3)
![1000281414](https://github.com/user-attachments/assets/8d216dda-c564-4330-8bc9-e1065643052a)
 

## Catatan Akhir
Project ini menitikberatkan pada perancangan arsitektur, dokumentasi API, serta penerapan konsep keamanan dan observability sesuai standar Web Service Engineering dan siap dikembangkan ke tahap implementasi backend penuh.
