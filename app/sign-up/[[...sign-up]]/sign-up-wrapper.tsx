'use client';

import { SignUp } from "@clerk/nextjs";
import { useSearchParams } from "next/navigation";

export default function SignUpWrapper() {
  const searchParams = useSearchParams();
  const redirectUrl = searchParams.get('redirect_url') || '/';
  
  return (
    <SignUp 
      appearance={{
        elements: {
          formButtonPrimary: 'bg-primary hover:bg-primary/90 text-white transition-all duration-300 rounded-md',
          card: 'shadow-lg rounded-md border border-gray-200 hover-lift',
          headerTitle: 'text-2xl font-bold text-center bg-gradient-to-r from-secondary to-primary bg-clip-text text-transparent',
          headerSubtitle: 'text-center text-muted-foreground',
          formFieldLabel: 'text-foreground font-medium',
          formFieldInput: 'border-input focus:ring-2 focus:ring-primary/20 transition-all duration-300 rounded-md',
          footerActionLink: 'text-primary hover:text-primary/80 font-medium',
          identityPreview: 'border border-input bg-muted/30 rounded-md',
          identityPreviewText: 'text-foreground',
          identityPreviewEditButton: 'text-primary hover:text-primary/80',
          formResendCodeLink: 'text-primary hover:text-primary/80',
          formFieldAction: 'text-primary hover:text-primary/80',
          otpCodeFieldInput: 'border-input focus:ring-2 focus:ring-primary/20 rounded-md',
        }
      }}
      redirectUrl={redirectUrl}
      afterSignUpUrl={redirectUrl}
      signInUrl={`/sign-in?redirect_url=${encodeURIComponent(redirectUrl)}`}
    />
  );
}