"use client";

import Link from "next/link";

export default function SellerLoginPage() {
  return (
    <main className="min-h-screen flex bg-[#F5F7FF] overflow-hidden">
      
      {/* LEFT – LOGIN FORM */}
      <div className="w-full lg:w-[45%] flex items-center justify-center px-8">
        <div className="w-full max-w-md">

          {/* TITLE */}
          <h1 className="text-3xl font-semibold text-gray-900 mb-2">
            Welcome to Seller Panel
          </h1>
          <p className="text-sm text-gray-500 mb-8">
            Manage your store, products, and orders seamlessly.
          </p>

          {/* EMAIL */}
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* PASSWORD */}
          <div className="mb-2">
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-lg border border-gray-300 px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* FORGOT */}
          <div className="text-right mb-6">
            <Link
              href="/forgot-password"
              className="text-sm text-blue-600 hover:underline"
            >
              Forgot Password?
            </Link>
          </div>

          {/* SIGN IN */}
          <button className="w-full rounded-lg bg-blue-600 py-3 text-white font-medium hover:bg-blue-700 transition">
            Sign In
          </button>

          {/* SOCIAL LOGIN */}
          <div className="flex items-center gap-4 mt-6">
            <span className="text-sm text-gray-500">Login with</span>

            <button className="h-10 w-10 rounded-full border bg-white flex items-center justify-center hover:shadow">
              <img src="/google.svg" className="h-5 w-5" alt="Google" />
            </button>

            <button className="h-10 w-10 rounded-full border bg-white flex items-center justify-center hover:shadow">
              <img src="/facebook.svg" className="h-5 w-5" alt="Facebook" />
            </button>
          </div>

          {/* REGISTER */}
          <p className="mt-8 text-sm text-gray-600">
            Don&apos;t have an Account?{" "}
            <Link href="/sellerauth/register" className="text-blue-600 font-medium">
              Register Now
            </Link>
          </p>
        </div>
      </div>

      {/* RIGHT – CURVED BACKGROUND + INFO + IMAGE */}
<div className="hidden lg:flex w-[55%] relative overflow-hidden">

  {/* CURVED BLUE PANEL */}
  <div className="absolute inset-0 bg-gradient-to-br from-blue-500 via-indigo-500 to-blue-600 rounded-l-[140px]" />

  {/* SOFT GLOW EFFECTS */}
  <div className="absolute top-24 right-24 h-72 w-72 rounded-full bg-white/20 blur-3xl" />
  <div className="absolute bottom-24 left-24 h-64 w-64 rounded-full bg-indigo-300/30 blur-3xl" />

  {/* CONTENT WRAPPER */}
  <div className="relative z-10 w-full flex items-center justify-between px-16">

    {/* LEFT INFO */}
    <div className="max-w-sm text-white">
      <h2 className="text-3xl font-semibold leading-tight mb-4">
        Grow your business with Nirmatri
      </h2>

      <p className="text-white/80 mb-6 text-sm">
        Everything you need to manage, sell, and scale your handcrafted products —
        all in one place.
      </p>

      <ul className="space-y-4 text-sm">
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />
          Manage products & inventory
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />
          Track orders & deliveries
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />
          View sales & performance insights
        </li>
        <li className="flex items-center gap-3">
          <span className="h-2 w-2 rounded-full bg-white" />
          Secure & fast seller payouts
        </li>
      </ul>
    </div>

    {/* RIGHT IMAGE */}
    <img
      src="/user.png"
      alt="Seller Login Illustration"
      className="max-w-[480px] w-full h-auto drop-shadow-2xl translate-y-4"
    />
  </div>
</div>

    </main>
  );
}
