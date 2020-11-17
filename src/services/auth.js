export const isAuthenticated = () => localStorage.getItem("token") !== null;

export const userIsProfessional = () => localStorage.getItem("tipo") === "profissional";