"use client";

import { SignForm } from "@/components/signup";
import Image from "next/image";
import Link from "next/link";
import dynamic from "next/dynamic"; // Import dynamic for SSR disable
import { useEffect, useState } from "react";
import { GridPatternCard, GridPatternCardBody } from "@/components/ui/card-with-grid-ellipsis-pattern";

// Disable SSR for Lottie
const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

export default function SignupPage() {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    fetch("/assets/SignUpAnimation.json") // Ensure this file is inside `public/`
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error("Failed to load animation:", err));
  }, []);

  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      {/* Left Section */}
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex justify-center gap-2 md:justify-start">
          <Link href="/" className="text-lg font-semibold hover:opacity-80">
            <Image src="/assets/logo.png" alt="Logo" width={150} height={100} />
          </Link>
        </div>
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <SignForm />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <GridPatternCard>
        <GridPatternCardBody>
          <div className="relative hidden bg-background lg:flex items-center justify-center h-full">
            <GridPatternCard>
              <GridPatternCardBody>
                {animationData && (
                  <Lottie animationData={animationData} style={{ height: "600px" }} loop={false} />
                )}
              </GridPatternCardBody>
            </GridPatternCard>
          </div>
        </GridPatternCardBody>
      </GridPatternCard>
    </div>
  );
}
