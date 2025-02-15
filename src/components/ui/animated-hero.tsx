"use client"
import {  useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect } from "react";
import Link from "next/link";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => ["Business", "Products", "Services"],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2000);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <div className="w-full">
      <div className="container mx-auto">
        <div className="flex gap-8 py-20 lg:py-40  items-center justify-center flex-col">
          <div>
          <Button variant="secondary" size="sm" className="gap-4 border">
  We&apos;re in BETA ⚡ 
</Button>

          </div>
          <div className="flex gap-4 flex-col">
            <h1 className="text-5xl md:text-7xl max-w-4xl text-center font-regular">
              <span className="font-bold text-2xl sm:text-3xl md:text-4xl dark:text-white text-black mb-4">Next-Gen AI Call Agents for Real Conversations</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                &nbsp;
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute text-purple-700 text-5xl"
                    initial={{ opacity: 0, y: "-100" }}
                    transition={{ type: "spring", stiffness: 50 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -150 : 150,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            <p className="text-center max-w-3xl w-full break-words px-4">
  Enhance call management with AI—automate inquiries and outbound calling with ease
</p>

          </div>
          <div className="flex flex-row  gap-3 items-center md:items-start">
  <Button size="lg" className="flex items-center gap-2" variant="outline">
    Jump on a call <PhoneCall className="w-4 h-4" />
  </Button>
  <Link href={"/signup"}>
  <Button size="lg" className="flex items-center gap-2">

    Sign up here <MoveRight className="w-4 h-4" />
    
  </Button>
  </Link>
</div>

        </div>
      </div>
    </div>
  );
}

export { Hero };
