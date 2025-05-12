import SignUpWrapper from './sign-up-wrapper';

export default function SignUpPage() {
  return (
    <div className="flex justify-center items-center min-h-[calc(100vh-4rem)] py-12 animate-fade-in">
      <div className="relative z-10 w-full max-w-md">
        <div className="absolute -top-6 -right-6 w-24 h-24 bg-secondary/10 rounded-full blur-xl animate-pulse-subtle"></div>
        <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-xl animate-pulse-subtle" style={{ animationDelay: "1s" }}></div>
        <SignUpWrapper />
      </div>
    </div>
  );
}

// This is required for Next.js static export
export function generateStaticParams() {
  return [
    { "sign-up": [] },
    { "sign-up": ["sso-callback"] },
    { "sign-up": ["factor-one"] },
    { "sign-up": ["factor-two"] },
    { "sign-up": ["continue"] },
    { "sign-up": ["verify"] },
    { "sign-up": ["verify-email-address"] }
  ];
}