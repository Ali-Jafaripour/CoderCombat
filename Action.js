 // Intersection Observer for SVGs
 const svgs = document.querySelectorAll('.hidden-svg');

 const observerOptions = {
     threshold: 0.1
 };

 const observer = new IntersectionObserver((entries, observer) => {
     entries.forEach(entry => {
         if (entry.isIntersecting) {
             entry.target.classList.add('visible-svg');
             observer.unobserve(entry.target); // پس از ظاهر شدن، نظارت را متوقف می‌کند
         }
     });
 }, observerOptions);

 svgs.forEach(svg => {
     observer.observe(svg);
 });



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