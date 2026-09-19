"use client";

import { useState } from "react";
import { loginAdmin } from "@/app/actions/auth";
import { Lock } from "lucide-react";

export default function LoginPage() {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    
    const result = await loginAdmin(formData);
    if (result?.error) {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="max-w-md w-full bg-white rounded-2xl shadow-lg p-8 border border-gray-100">
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-brand-green/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <Lock className="text-brand-green" size={24} />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">Admin Panel</h1>
          <p className="text-gray-500 mt-2 text-sm">Enter your password to access the dashboard.</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-3 text-gray-900 focus:outline-none focus:ring-2 focus:ring-brand-green focus:border-transparent"
              placeholder="••••••••"
            />
          </div>

          {error && (
            <div className="text-red-500 text-sm font-medium text-center bg-red-50 py-2 rounded-md">
              {error}
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-brand-green text-white font-bold py-3 rounded-lg hover:bg-brand-green-dark transition-colors"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}