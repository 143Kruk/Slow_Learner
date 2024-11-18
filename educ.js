
function setCookie(name, value, days) {
    const expires = new Date(Date.now() + days * 864e5).toUTCString();
    document.cookie = `${name}=${encodeURIComponent(value)}; expires=${expires}; path=/`;
}


function getCookie(name) {
    return document.cookie.split('; ').reduce((r, c) => {
        const [key, v] = c.split('=');
        return key === name ? decodeURIComponent(v) : r;
    }, '');
}


function showCookieConsentBanner() {
    const banner = document.getElementById('cookieConsentBanner');
    banner.style.display = 'flex'; 
}


window.onload = function() {
    if (!getCookie('cookieConsent')) {
        showCookieConsentBanner(); 
    }
};


document.getElementById('acceptCookies').addEventListener('click', function() {
    setCookie('cookieConsent', 'accepted', 365); 
    document.getElementById('cookieConsentBanner').style.display = 'none';
});

document.getElementById("acceptCookies").addEventListener("click", () => {
    document.getElementById("cookieConsentBanner").style.display = "none";
});



function fetchCourseData() {
    fetch('courses.xml') 
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, "text/xml");
            const courses = xmlDoc.getElementsByTagName("course");
            let coursesContent = '';

            for (let i = 0; i < courses.length; i++) {
                const title = courses[i].getElementsByTagName("title")[0].textContent;
                const description = courses[i].getElementsByTagName("description")[0].textContent;
                coursesContent += `<div class="course-item">
                                    <h3>${title}</h3>
                                    <p>${description}</p>
                                   </div>`;
            }

            document.getElementById('coursesList').innerHTML = coursesContent;
        })
        .catch(error => console.error('Error fetching course data:', error));
}


document.addEventListener("DOMContentLoaded", function() {
    fetchCourseData();
});



