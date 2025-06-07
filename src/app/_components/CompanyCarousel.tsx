"use client";

import { useEffect, useLayoutEffect, useRef, useState } from "react";
import Image from "next/image";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay"


const companies = [
  { name: "Stripe", logo: "/company_logos/strip.png" },
  { name: "Microsoft", logo: "/company_logos/microsoft.png" },
  { name: "Google", logo: "/company_logos/google.webp" },
  { name: "LinkedIn", logo: "/company_logos/linkedin.png" },
  { name: "Atlassian", logo: "/company_logos/atlassian.png" },
  { name: "IBM", logo: "/company_logos/ibm.png" },
  { name: "DoorDash", logo: "/company_logos/doordash.png" },
  { name: "Snap Inc.", logo: "/company_logos/snapchat.png" },
  { name: "Adobe", logo: "/company_logos/adobe.png" },
  { name: "PayPal", logo: "/company_logos/paypal.png" },
  { name: "Goldman Sachs", logo: "/company_logos/goldman.png" },
  { name: "Canva", logo: "/company_logos/canva.png" },
  { name: "Airbnb", logo: "/company_logos/airbnb.png" },
  
];

export function CompanyCarousel() {
  const [isHovered, setIsHovered] = useState(false);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useLayoutEffect(() => {
    if (!scrollerRef.current) return;
    // measure full width of *one* set of logos
    const full = scrollerRef.current.scrollWidth;
    setWidth(full);
  }, []);

  return (
    <Carousel
      plugins={[Autoplay({delay: 2000, stopOnInteraction: false})]}
    >
      <CarouselContent>
        {/* First set of logos */}
        {companies.map((company, index) => (
          <div
            key={`company-${index}`}
            className="flex items-center justify-center min-w-[120px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300 w-full"
          >
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
            />
          </div>
        ))}

        {/* Duplicate set for seamless looping */}
        {companies.map((company, index) => (
          <div
            key={`company-duplicate-${index}`}
            className="flex items-center justify-center min-w-[120px] grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition-all duration-300"
          >
            <Image
              src={company.logo || "/placeholder.svg"}
              alt={`${company.name} logo`}
              width={120}
              height={40}
              className="h-10 w-auto object-contain"
              priority
            />
          </div>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
