//the theme
document.addEventListener('DOMContentLoaded', function() {
    const themeButton = document.getElementById('themeButton');
    const body = document.body;

    // تحديد الثيم المبدئي بناءً على إعدادات المستخدم السابقة أو الثيم الافتراضي
    const currentTheme = localStorage.getItem('theme') || 'light';
    body.classList.add(currentTheme + '-theme');
    themeButton.classList.add(currentTheme);

    // تغيير الثيم عند الضغط على الزر
    themeButton.addEventListener('click', function() {
        if (body.classList.contains('light-theme')) {
            body.classList.remove('light-theme');
            body.classList.add('dark-theme');
            themeButton.classList.remove('light');
            themeButton.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-theme');
            body.classList.add('light-theme');
            themeButton.classList.remove('dark');
            themeButton.classList.add('light');
            localStorage.setItem('theme', 'light');
        }
    });
});
// start working..
// calling tags.* 
let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');
let submit = document.getElementById('submit');
let search = document.getElementById('search');
let searchtitle = document.getElementById('searchtitle');
let searchcategory = document.getElementById('searchcategory');

// get total

function gettotal(){
    if(price.value || taxes.value || ads.value != ''){
        let result = (+price.value + +taxes.value + +ads.value) - +discount.value;
        total.innerHTML = result;
        total.style.background = 'green';
    }else{
        total.innerHTML = '';
        total.style.background = 'red';
    }
}


// creat product

let datapro;
if (localStorage.product != null){
    datapro = JSON.parse(localStorage.product)
}else{
    datapro =[];
}

submet.onclick =function() {
    let newpro = {
        title:title.value,
        price:price.value,
        taxes:taxes.value,
        ads:ads.value,
        discount:discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }

    if(changer === 'Create'){
        if(newpro.count > 1){
            for(let i = 0; i < newpro.count; i++){
                datapro.push(newpro);
            }
        }else{
            datapro.push(newpro);
        }
    }else{
        datapro[jo] = newpro;
        changer = 'Create';
        submet.innerHTML = 'Create';
        count.style.display = 'block';
    }
}

// save it in the local storage
// clear inputs
// read 
// count 
// delete (delete all) 
// update 
// search 
// clean data 
