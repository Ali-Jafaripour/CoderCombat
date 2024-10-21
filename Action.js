


 function toggleText(button) {
    const text = button.previousElementSibling; // انتخاب متن قبل از دکمه
    if (text.style.maxHeight) {
        text.style.maxHeight = null; // مخفی کردن متن
        button.textContent = 'نمایش کامل'; // تغییر متن دکمه
    } else {
        text.style.maxHeight = '1000px'; // نمایش کل متن
        button.textContent = 'پنهان کردن'; // تغییر متن دکمه
    }
}