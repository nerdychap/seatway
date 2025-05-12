import { SignIn } from "@clerk/nextjs";
import SignInWrapper from './sign-in-wrapper';

export default function SignInPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] py-12 animate-fade-in">
      <div className="relative z-10 w-full max-w-md">
        <div className="absolute -top-6 -left-6 w-24 h-24 bg-primary/10 rounded-full blur-xl animate-pulse-subtle"></div>
        <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/10 rounded-full blur-xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <SignInWrapper />
      </div>
    </div>
  );
}

// This is required for Next.js static export
export function generateStaticParams() {
  return [
    { "sign-in": [] },
    { "sign-in": ["sso-callback"] },
    { "sign-in": ["factor-one"] },
    { "sign-in": ["factor-two"] },
    { "sign-in": ["verify"] }
  ];
}