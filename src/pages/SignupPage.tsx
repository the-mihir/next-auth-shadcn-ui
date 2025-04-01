
import { SignupForm } from "@/components/SignupForm";

export default function SignupPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center p-4">
      <div className="w-full max-w-md animate-in slide-in">
        <SignupForm />
      </div>
    </div>
  );
}
