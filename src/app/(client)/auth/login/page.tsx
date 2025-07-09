'use client';

import AuthForm from '@/components/client/AuthForm';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = (email: string, password: string) => {
    // Simulate successful login
    console.log('Logging in with', email, password);

    // Redirect to /home
    router.push('/home');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center">
      <AuthForm type="login" onSubmit={handleLogin} />
    </div>
  );
}
