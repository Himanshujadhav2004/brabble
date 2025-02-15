"use client"

// import { LoginForm } from "@/components/login-form"
import { SignForm } from "@/components/signup";
import Image from "next/image"
import Link from "next/link"
import Lottie from 'lottie-react';

import { useEffect, useState } from "react";
import { GridPatternCard,GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";



export default function SingupPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/SignUpAnimation.json") // Ensure it's inside `public/`
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);
  return (
    
    <div className="grid min-h-svh lg:grid-cols-2">
       
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
        <Link href="/" className="text-lg font-semibold hover:opacity-80">
            {/* <div className="flex h-6 w-6 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <GalleryVerticalEnd className="size-4" />
            </div> */}
    
          <Image src="/assets/logo.png" alt="Logo" width={150} height={100} />
        </Link>
        
        </div>
   
        <div className="flex flex-1 items-center justify-center">
       
          <div className="w-full max-w-xs">
          
            <SignForm />
           
          </div>
          
        </div>
      
      </div>
      <GridPatternCard>
      <GridPatternCardBody>
      <div className="relative hidden bg-background lg:flex items-center justify-center h-full">
      <GridPatternCard>
      <GridPatternCardBody>
  <Lottie animationData={animationData} style={{ height: "600px" }} loop={false} />
  </GridPatternCardBody>
</GridPatternCard>
</div>
</GridPatternCardBody>
</GridPatternCard>
   
    </div>
  )
}
