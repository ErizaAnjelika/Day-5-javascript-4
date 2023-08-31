//matriks
// function nilaiTertinggiMatriks(matriks) {
//     let nilaiTertinggi = matriks[0][0];

//     for (let i = 0; i < matriks.length; i++) {
//         for (let j = 0; j < matriks[i].length; j++) {
//             if (matriks[i][j] > nilaiTertinggi) {
//                 nilaiTertinggi = matriks[i][j];
//             }
//         }
//     }
//     return nilaiTertinggi;
// }

// const matriks = [
//     [-3,-7,-2],
//     [-9,-1,-6],
//     [-4,-5,-8]
// ];

// console.log(nilaiTertinggiMatriks(matriks)); 


// function nilaiTertinggiMatriks(matriks) {
//     return Math.max(...matriks.flat());
// }

// const matriks = [
//     [3,7,2],
//     [9,1,6],
//     [4,5,8]
// ];

// console.log(nilaiTertinggiMatriks(matriks)); 

//method push()

// const buah = ['jeruk', 'pisang'];
// buah.push('semangka');
// console.log(buah)


// const buah = ['jeruk', 'pisang'];
// buah.unshift('semangka');
// console.log(buah)

// const buah = ['jeruk', 'pisang'];
// buah.shift();
// console.log(buah);

// const buah = ['jeruk', 'pisang'];
// buah.pop();
// console.log(buah);


// const buah = ['jeruk', 'pisang','semangka', 'jambu','pepaya','kiwi'];
// const newBuah = buah.slice(3,4)
// console.log(newBuah);
// let result =[];
// for (let i = 0; i < buah.length; i++) {
//     if (buah[i] === "semangka") {
//         result.push(buah[i]);
//     }else if (buah[i] === "jambu" ){
//         result.push(buah[i]);
//     }
// }

// console.log(result);
// const siswa =[
//     {name:"Andi",grade:7.5},
//     {name:"Ardi",grade:9},
//     {name:"Ahmad",grade:7},
//     {name:"Anang",grade:6},
//     {name:"Amir",grade:8}
// ]
    // for (let i = 0; i < buah.length; i++) {
    //     if (buah[i] === "semangka") {
    //        console.log(true);
    //     }
    // }


// let cari = "Amir, Anang";
// const newCari = cari.split(',');
// //console.log(cari.split(','));
// function cariSiswa(){
// for (let i = 0; i < siswa.length; i++) {
//     for (let j = 0; j < newCari.length; j++) {
//         if (siswa[i].name === newCari[j]) {
//         console.log(true);
//         }
//     }   
//     }
// }
// cariSiswa();

// const matrix =[
//     [1,2,3],
//     [4,3,5],
//     [7,8,9],
// ];
//  console.log(matrix[0][0]);

//object
// const person = {
//     name :"John",
//     age : 30,
//     city : "New York"
// };

// delete person.city
// console.log(person);

// const guru ={
//     nama:"lala",
//     usia: 27,
// };
// const siswa ={
//     nama:'tini',
//     usia: 9,
// };

// function sayHai() {
//     console.log(`hello nama saya ${this.nama}`)
// }

// guru.sayHai = sayHai;
// siswa.sayHai = sayHai;

// console.log(guru);

const siswa1 ={
    nama : "lala",
    kelas : "3A",
    showSiswa:function(){
        console.log(`Nama : ${this.nama}, Kelas: ${this.kelas}`);
    },
};
const siswa2 ={
    nama : "tini",
    kelas : "2C",
    showSiswa:function(){
        console.log(`Nama : ${this.nama}, Kelas: ${this.kelas}`);
    },
};

function Siswa(nama, kelas) {
    this.name = nama;
    this.kelas = kelas;
}

const siswa3 = new Siswa("beli", "3c");

const today = new Date().getDate();
console.log(today)

