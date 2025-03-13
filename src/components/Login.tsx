//import React, { useState } from "react";

const Login: React.FC = () => {
  return (
    <div className="body-bg min-h-screen flex flex-col items-center pt-10 bg-gray-300">
      <div className="skewed"></div>
      <header className="relative z-10 mt-0">
        <img src="/kd5_white.svg" alt="KD-Lab Logo" className="mx-auto w-20" />
      </header>

  <div class="max-w-md w-full bg-white rounded-xl shadow-2xl p-8 relative z-11">
    <h2 class="text-2xl font-bold text-gray-899 mb-6 text-center">Sign In</h2>
    
    <form class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input 
          type="email" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="your@email.com"
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input 
          type="password" 
          class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 outline-none transition-all"
          placeholder="••••••••"
        />
      </div>

      <div class="flex items-center justify-between">
        <label class="flex items-center">
          <input type="checkbox" class="rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"/>
          <span class="ml-2 text-sm text-gray-600">Remember me</span>
        </label>
        <a href="#" class="text-sm text-indigo-600 hover:text-indigo-500">Forgot password?</a>
      </div>

      <button class="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 rounded-lg transition-colors">
        Sign In
      </button>
    </form>

    <div class="mt-6 text-center text-sm text-gray-600">
      Don't have an account? 
      <a href="#" class="text-indigo-600 hover:text-indigo-500 font-medium">Sign up</a>
    </div>

</div>



     </div>
  );
};

export default Login;