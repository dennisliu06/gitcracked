"use client";

import AuthForm from "@/components/AuthForm";
import { Button } from "@/components/ui/button";
import { supabase } from "@/lib/supabase";

export default function SignUp() {
  const onClick = async () => {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: "github",
    });

    if (error) {
      console.log(error);
      return;
    }
    console.log(data);
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4">Sign Up</h1>
        <AuthForm type="signup" />
        <Button onClick={onClick}>GitHub</Button>
      </div>
    </div>
  );
}
