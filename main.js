const backToTopButton = document.getElementById('back-to-top');

// وظيفة الانتقال إلى الأعلى عند الضغط على الزر
backToTopButton.addEventListener('click', () => {
    document.querySelector('body').scrollIntoView({
        behavior: 'smooth'
    });
});




function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    if (sidebar.style.width === "100%") {
        sidebar.style.width = "0";
        main.style.marginLeft = "0";
    } else {
        sidebar.style.width = "100%";
        main.style.marginLeft = "100%";
    }
}
