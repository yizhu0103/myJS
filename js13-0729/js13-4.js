// 使用name屬性，取得元素內容
let myDrinks= document.getElementsByName('drinks');
console.log(myDrinks);

for(let i=0; i<myDrinks.length; i++){
    console.log(myDrinks[i].value); // 取得每個 drink 的 value); 
}
// 取得勾選項目
// 找到按鈕
let myBtn=document.querySelector('#btn');
// 監聽按鈕是否備按了(click=>左鍵一下的事件)
myBtn.addEventListener('click', function(){
let ArrResult=[]
let ArrResultNot=[]
let myDrinks=document.getElementsByName('drinks');
// 逐一檢查是否被勾選=>checked
for(let i=0; i<myDrinks.length; i++){
    // 有被勾選的項目
    if(myDrinks[i].checked){
        ArrResult.push(myDrinks[i].value);
    }

    // 沒有被勾選
    if(!myDrinks[i].checked){
        ArrResultNot.push(myDrinks[i].value);
    
}
console.log('被勾選:'+ArrResult);
console.log('沒被勾選:'+ArrResultNot);
}});