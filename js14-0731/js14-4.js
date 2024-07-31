// 使用name屬性，取得元素內容
let myDrinks = document.getElementsByName('drinks');
// console.log(myDrinks);

// for(let i=0; i<myDrinks.length; i++){
//     console.log(myDrinks[i].value); // 取得每個 drink 的 value); 
// }
// 取得勾選項目
// 找到按鈕
let myBtn = document.querySelector('#btn');
// 監聽按鈕是否備按了(click=>左鍵一下的事件)
myBtn.addEventListener('click', function () {
    let ArrResult = []
    let ArrResultNot = []
    let myDrinks = document.getElementsByName('drinks');
    // 逐一檢查是否被勾選=>checked
    for (let i = 0; i < myDrinks.length; i++) {
        // 有被勾選的項目
        if (myDrinks[i].checked) {
            ArrResult.push(myDrinks[i].value);
        }

        // 沒有被勾選
        if (!myDrinks[i].checked) {
            ArrResultNot.push(myDrinks[i].value);

        }

    }
    console.log('被勾選:' + ArrResult);
    console.log('沒被勾選:' + ArrResultNot);
    // 取得顯示資料的位置
    
// 被勾選
let str1='';
if(ArrResult.length>0){
str1='<div><ul id="sel">被勾選的項目';
// 被選取的li
for(let i=0;i<ArrResult.length;i++) {
str1=str1+`<li>${ArrResult[i]}</li>`
}
str1=str1+'</ul></div>';
}

// 沒被勾選
let str2='';
if(ArrResultNot.length>0){
str2='<div><ul id="notsel">沒被勾選的項目';
// 被選取的li
for(let i=0;i<ArrResultNot.length;i++) {
str2=str2+`<li>${ArrResultNot[i]}</li>`
}
str2=str2+'</ul></div>';
}


let getDiv=document.getElementById('showData');
getDiv.innerHTML=str1;
getDiv.innerHTML=getDiv.innerHTML+str2;

    // 給值
    // getDiv.textContent='ArrResult';
    // getDiv.innerHTML='<li>'+ArrResult+'</li>';//有包含html標籤用innerHTML
    // getDiv.innerHTML=getDiv.innerHTML+'test';
});
