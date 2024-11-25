import Link from 'next/link';
import { FcGoogle } from 'react-icons/fc';

export default function SignIn() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-900 dark:to-black">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Sign In</h2>
        
        <form className="space-y-6">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-200">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-white dark:bg-zinc-700 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          <div className="flex items-center justify-between">
            <Link href="/auth/forgot-password" className="text-sm text-blue-600 hover:text-blue-500">
              Forgot password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Sign In
          </button>
        </form>

        <div className="mt-6">
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300 dark:border-zinc-600"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white dark:bg-zinc-800 text-gray-500">Or continue with</span>
            </div>
          </div>

          <button
            className="mt-6 w-full flex items-center justify-center gap-3 py-2 px-4 border border-gray-300 dark:border-zinc-600 rounded-md shadow-sm bg-white dark:bg-zinc-700 hover:bg-gray-50 dark:hover:bg-zinc-600"
          >
            <FcGoogle className="w-5 h-5" />
            <span className="text-gray-700 dark:text-gray-200">Sign in with Google</span>
          </button>
        </div>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Don't have an account?{' '}
          <Link href="/auth/signup" className="font-medium text-blue-600 hover:text-blue-500">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
}