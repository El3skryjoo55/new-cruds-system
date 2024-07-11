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

