const readlineSync = require("readline-sync")

while (true) {
    let tutup = false
    console.log("Inputkan nilai,ketik q jika sudah selesai!")
    let angka = {}
    while (true) {
        let input = readlineSync.question("")
        if (input == "q") {
            break
        } else if (input == "x") {
            tutup = true
            break
        } else {
            angka[parseFloat(input)] = input >= 75 ? "Lulus" : "Tidak Lulus"
        }
    }
    console.log("Nilai Tertinggi : " + Object.keys(angka).sort((a, b) => b - a)[0] + "\nNilai Terendah : " + Object.keys(angka).sort((a, b) => b - a)[Object.keys(angka).length - 1] + "\nRata-Rata : " + eval(Object.keys(angka).join("+")) / Object.keys(angka).length + "\nUrutan nilai : ")
    Object.keys(angka).forEach(function(value) {
        console.log(value + " : " + angka[value])
    })
    if (readlineSync.question("Hitung lagi ? (ketik y jika ya dan n jika tidak(keluar dari program)") == "n") {
        break
    } else {
        continue
    }

}