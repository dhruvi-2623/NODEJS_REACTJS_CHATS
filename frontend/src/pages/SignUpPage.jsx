import React, { useState } from 'react'
import { useAuthStore } from '../store/useAuthStore';
import { MessagesSquare } from 'lucide-react';

const SignUpPage = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
  });

  const {SignUpPage, isSigningUp} = useAuthStore();

  const validateForm = ()=>{

  }
  const handleSubmit= ()=>{

  }
  return (
    <div className="min-h-screen grid lg:grid-cols-2">
      <div className="flex flex-col justify-center p-6 sm:p-12">
        <div className="w-full max-w-md space-y-8">
          <div className="text-center mb-8">
            <div className="flex flex-col item-center gap-2 group">
              <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center">
               <MessagesSquare className='size-6 text-primary'/>

              </div>
              <h1 className='text-2xl font-bold mt-2'>Create Account</h1>
              <p className='text-base-content/60'>Get Started with your free Account </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SignUpPage