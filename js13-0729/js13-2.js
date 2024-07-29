// 使用類別名稱
let mySubjects=document.getElementsByClassName('subject');
console.log(mySubjects);

for (let i=0; i<mySubjects.length;i++){
    console.log(mySubjects.item(i).textContent);
    console.log(mySubjects[i].textContent);
}

// 顯示指定的內容=>html
console.log(mySubjects['html'].textContent);//[裡面放id且不能有空白]