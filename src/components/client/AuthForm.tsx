'use client';

import { useState } from 'react';

interface AuthFormProps {
  type: 'login' | 'signup';
  onSubmit: (email: string, password: string, name?: string) => void;
}

export default function AuthForm({ type, onSubmit }: AuthFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password, name);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-8 shadow-lg rounded-xl w-full max-w-md mx-auto"
    >
      <h2 className="text-2xl font-bold text-center text-gray-800">
        {type === 'login' ? 'Welcome Back' : 'Create an Account'}
      </h2>

      {type === 'signup' && (
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
          <input
            type="text"
            required
            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          required
          className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-200"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        {type === 'login' ? 'Login' : 'Sign Up'}
      </button>

      {type === 'login' ? (
        <p className="text-sm text-center mt-2">
          Don’t have an account?{' '}
          <a href="/auth/signup" className="text-blue-600 hover:underline">Sign up</a>
        </p>
      ) : (
        <p className="text-sm text-center mt-2">
          Already have an account?{' '}
          <a href="/auth/login" className="text-blue-600 hover:underline">Login</a>
        </p>
      )}
    </form>
  );
}
