"use strict";
// ===============================
// TUGAS PRAKTIK PBPB 1 – NIM: 051308666
// ===============================
Object.defineProperty(exports, "__esModule", { value: true });
const nim = "051308666";
// Helper untuk memastikan NIM valid
function getNim() {
    if (!nim || nim.length < 3) {
        console.log("NIM tidak valid.");
        return "000000000";
    }
    return nim;
}
// ===============================
// SOAL 1 – Pola Segitiga
// ===============================
function soal1() {
    console.log("=== SOAL 1: POLA SEGITIGA ===");
    const n = getNim();
    const tinggi = parseInt(n.charAt(n.length - 1)); // digit terakhir
    for (let i = 1; i <= tinggi; i++) {
        let baris = "";
        for (let j = 1; j <= i; j++) {
            baris += j + " ";
        }
        console.log(baris);
    }
    console.log();
}
// ===============================
// SOAL 2 – Deret Aritmatika
// ===============================
function soal2() {
    console.log("=== SOAL 2: DERET ARITMATIKA ===");
    const n = getNim();
    const start = parseInt(n.slice(-2)); // 2 digit terakhir
    const beda = parseInt(n.charAt(n.length - 3)) + 1; // digit ke-3 dari belakang + 1
    let current = start;
    for (let i = 0; i < 10; i++) {
        console.log(current);
        current += beda;
    }
    console.log();
}
// ===============================
// SOAL 3 – Bilangan Prima
// ===============================
function soal3() {
    console.log("=== SOAL 3: BILANGAN PRIMA ===");
    const n = getNim();
    const batas = parseInt(n.slice(-2)) + 10; // 2 digit terakhir + 10
    function isPrime(x) {
        if (x < 2)
            return false;
        for (let i = 2; i <= Math.sqrt(x); i++) {
            if (x % i === 0)
                return false;
        }
        return true;
    }
    for (let i = 1; i <= batas; i++) {
        if (isPrime(i)) {
            console.log(i);
        }
    }
    console.log();
}
// ===============================
// PANGGIL SEMUA SOAL
// ===============================
soal1();
soal2();
soal3();
//# sourceMappingURL=soaltugas.js.map