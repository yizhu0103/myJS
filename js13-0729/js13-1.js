// // 取得元素結點
// // 根據id屬性
let myjs= document.getElementById('js');
// console.log(typeof myjs);
console.log(myjs.textContent);
console.log(document.querySelector('#js').textContent);

// // 根據html屬性
// let myli=document.getElementsByTagName('li');
// console.log(myli);

// // 取出css
// console.log(myli.item(1).textContent);
// console.log(myli[1].textContent);/* 項目 */

// /* 顯示所有的li */
// for(let i=0; i<myli.length; i++){
//     console.log(myli.item(i).textContent);
//     console.log(myli[i].textContent);
// }


console.log('-----querSelector----');
console.log(document.querySelector('h1'));
console.log(document.querySelector('h1').textContent);
console.log('----getElementsByTagName---');
console.log(document.getElementsByTagName('h1'));
console.log(document.getElementsByTagName('h1').item(0).textContent);
console.log(document.getElementsByTagName('h1')[0].textContent);

