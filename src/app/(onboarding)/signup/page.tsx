import AuthForm from "@/components/AuthForm";

export default function SignUp() {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4">Sign Up</h1>
        <AuthForm type="signup" />
      </div>
    </div>
  )
}