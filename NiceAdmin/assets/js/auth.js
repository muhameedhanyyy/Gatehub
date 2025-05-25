// auth.js
document.addEventListener('DOMContentLoaded', async () => {
    authenticateUser();
});

async function authenticateUser() {
    // 1. Retrieve token
    const tokenString = localStorage.getItem('token');

    if (!tokenString) {
        console.error("No token found - redirecting to login");
        redirectToLogin();
        return;
    }

    // 2. Parse and validate token
    let token;
    try {
        const tokenObj = JSON.parse(tokenString);
        token = tokenObj?.result || tokenObj?.token || tokenObj;

        if (!token) throw new Error("Parsed token is empty");
    } catch (e) {
        token = tokenString; // Assume it's a raw token string if parsing fails
    }

    if (!token || typeof token !== 'string') {
        console.error("Invalid token format:", token);
        localStorage.removeItem('token');
        redirectToLogin();
        return;
    }

    console.log("Token verified:", token.slice(0, 20) + "...");
    return token; // Pass the token for further use
}

function redirectToLogin() {
    window.location.href = '../../pages-login.html';
}
