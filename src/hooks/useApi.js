export const API_BASE = import.meta.env.VITE_API_URL || "http://localhost:5000/api";

export async function apiRequest(path, options = {}) {
  const role = path.startsWith("/admin") ? "admin" : path.startsWith("/student") ? "student" : null;
  const token = role ? localStorage.getItem(`token_${role}`) || localStorage.getItem("token") : localStorage.getItem("token");

  const response = await fetch(`${API_BASE}${path}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...(token ? { Authorization: `Bearer ${token}` } : {}),
      ...(options.headers || {}),
    },
  });

  const payload = await response.json().catch(() => ({}));

  if (!response.ok) {
    throw new Error(payload.message || "Request failed");
  }

  return payload.data ?? payload;
}
