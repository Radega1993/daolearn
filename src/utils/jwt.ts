export const decodeToken = (token: string): any => {
    try {
        const payload = token.split(".")[1];
        return JSON.parse(atob(payload));
    } catch (err) {
        console.error("Error al decodificar el token:", err);
        return null;
    }
};

export const isTokenExpired = (token: string): boolean => {
    const decoded = decodeToken(token);
    if (!decoded) return true;

    const now = Date.now() / 1000;
    return decoded.exp < now;
};
