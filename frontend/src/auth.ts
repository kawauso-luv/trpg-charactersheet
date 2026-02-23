export function isLoggedIn(): boolean {
    return !!localStorage.getItem('userID');
}