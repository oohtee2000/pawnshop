'use client';

import AuthForm from '@/components/client/AuthForm';

export default function SignupPage() {
  const handleSignup = (email: string, password: string, name?: string) => {
    // TODO: Signup logic here
    console.log('Signing up with', email, password, name);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-purple-100 flex items-center justify-center">
      <AuthForm type="signup" onSubmit={handleSignup} />
    </div>
  );
}
