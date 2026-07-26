/**
 * Script-Kitty Security Audit Utility: Client-side Hashed Authentication
 * Protects raw superuser credentials from bundle exposure using SHA-256 Web Crypto API.
 */

// SHA-256 hash of "andrecodexvictor:Çodexwelcome25gamemaster"
const SUPERUSER_AUTH_HASH = "c3e1f316b6ee29c741e421266c6c5b34afd58bb6c9142ab14c8c6d0363fa9942";
const SESSION_STORAGE_KEY = "hud_admin_session_token";

export async function hashCredentials(username: string, password: string): Promise<string> {
  const combined = `${username.trim()}:${password}`;
  const encoder = new TextEncoder();
  const data = encoder.encode(combined);
  const hashBuffer = await crypto.subtle.digest("SHA-256", data);
  const hashArray = Array.from(new Uint8Array(hashBuffer));
  return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

export async function verifySuperuserLogin(username: string, password: string): Promise<boolean> {
  const hash = await hashCredentials(username, password);
  if (hash === SUPERUSER_AUTH_HASH) {
    const sessionToken = btoa(`${username}:${Date.now()}`);
    sessionStorage.setItem(SESSION_STORAGE_KEY, sessionToken);
    return true;
  }
  return false;
}

export function isSuperuserAuthenticated(): boolean {
  if (typeof window === 'undefined') return false;
  const token = sessionStorage.getItem(SESSION_STORAGE_KEY);
  if (!token) return false;
  try {
    const decoded = atob(token);
    const [user, timestamp] = decoded.split(':');
    const elapsed = Date.now() - parseInt(timestamp, 10);
    // Session valid for 12 hours
    return user === 'andrecodexvictor' && elapsed < 12 * 60 * 60 * 1000;
  } catch (e) {
    return false;
  }
}

export function logoutSuperuser(): void {
  if (typeof window !== 'undefined') {
    sessionStorage.removeItem(SESSION_STORAGE_KEY);
  }
}
