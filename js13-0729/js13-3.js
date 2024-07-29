// 取得ID#p1
console.log(document.getElementById('p1').textContent);
console.log(document.querySelector('#p1').textContent);

// 取得li中的p
// let myP=document.querySelector('li>p');
let myP=document.querySelectorAll('li>div>p');
console.log(myP);
console.log(myP[0].textContent);

// 取得li的子元素中的div下的p
let myDivP= document.querySelectorAll('li>div>p');
console.log(myDivP[1].textContent);