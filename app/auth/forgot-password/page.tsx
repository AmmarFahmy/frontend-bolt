import Link from 'next/link';

export default function ForgotPassword() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-zinc-200 to-white dark:from-zinc-900 dark:to-black">
      <div className="bg-white dark:bg-zinc-800 p-8 rounded-xl shadow-xl w-full max-w-md">
        <h2 className="text-3xl font-bold text-center mb-8 dark:text-white">Reset Password</h2>
        
        <p className="text-center text-gray-600 dark:text-gray-400 mb-8">
          Enter your email address and we'll send you a temporary password to reset your account.
        </p>

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

          <button
            type="submit"
            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Send Reset Link
          </button>
        </form>

        <p className="mt-8 text-center text-sm text-gray-600 dark:text-gray-400">
          Remember your password?{' '}
          <Link href="/auth/signin" className="font-medium text-blue-600 hover:text-blue-500">
            Sign in
          </Link>
        </p>
      </div>
    </div>
  );
}