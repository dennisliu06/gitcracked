import AuthForm from "@/components/AuthForm";

export default function Login() {
  return(
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-full max-w-md">
        <h1 className="text-2xl mb-4">Login</h1>
        <AuthForm type="login" />
      </div>
    </div>
  )
}