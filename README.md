# mentoring11-batch7
Docker and CI

Docker ==> (virtualisasi app node.js)

USE CASE

1. Ada repository di github, aplikasi sudah bisa dijalankan. Ada engineer mau clone repo tersebut.

    Kondisi PC / Machine / Laptop
        - Belum install node.js
        - Belum install postgres
        - Belum install sequelize
        - Belum install express


Case 1 -> Clone tanpa docker

    - Install node.js
    - Install postgres
    - Install sequelize
    - Install express
    - clone repo
    - setup .env
    - Baru jalankan aplikasi

Case 2 -> Clone dijalankan pakai docker

    - clone repo
    - setup .env
    - docker compose up -> menjalankan container
    - Baru jalankan aplikasi.

Kegunaan Unit Testing

    - Memastikan API berfungsi dengan baik (Automatic API testing)


CI / CD (continuous integration and continuous deployment.)

CI => continuous integration

- Menjalankan unit testing secara otomatis
- Kalau testing sudah OK 100%, baru bisa dirilis


CD => continuous deployment
- apply code terbaru ke cloud server (instance)





