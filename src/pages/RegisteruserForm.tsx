import { UserRegisterForm } from "../components/UserRegisterForm";
import { Toaster } from "@/components/ui/toaster";

export const RegisteruserForm = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-md mx-auto">
        <h1 className="text-2xl font-bold mb-6">Create an Account</h1>
        <UserRegisterForm />
      </div>
      <Toaster />
    </div>
  )
};
