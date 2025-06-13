'use client';
import { useAuth } from '@/lib/auth/authContext';

export default function AppPage() {
  const { user, logout } = useAuth();

  if (!user) return <div>Redirecting...</div>; // You can improve this with useRouter later

  return (
    <div className="p-6">
      <h1 className="text-2xl mb-4">Welcome, {user.email}</h1>
      <button
        onClick={logout}
        className="bg-red-600 text-white px-4 py-2 rounded"
      >
        Sign Out
      </button>
    </div>
  );
}