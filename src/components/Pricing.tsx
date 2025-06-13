"use client";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pricing() {
  const user = false;

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6">
      <div className="flex flex-col items-center justify-center space-y-4 text-center">
        <div className="space-y-2">
          {/* <div className="inline-block rounded-lg bg-purple-100 dark:bg-purple-800/20 px-3 py-1 text-sm text-purple-700 dark:text-purple-300">
            Pricing
          </div> */}
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Choose a plan
          </h2>
          <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Select a plan that fits your interview preparation needs.
          </p>
        </div>
      </div>
      <div className="mx-auto grid max-w-5xl gap-6 py-12 md:grid-cols-2 lg:grid-cols-3">
        {[
          {
            name: "Free",
            price: "$0",
            description: "Try out the platform with limited features",
            features: [
              "10 practice problems",
              "Basic verbal assessment",
              "Limited feedback",
              "Community forum access",
            ],
            link: "/signup",
          },
          {
            name: "Pro",
            price: "$19",
            description: "Perfect for active job seekers",
            features: [
              "Unlimited practice problems",
              "Advanced verbal assessment",
              "Detailed feedback and suggestions",
              "Progress tracking",
              "Mock interview simulations",
            ],
            link: "/signup",
          },
          {
            name: "Team",
            price: "$49",
            description: "For bootcamps and study groups",
            features: [
              "Everything in Pro",
              "Up to 5 team members",
              "Team analytics",
              "Custom problem sets",
              "Interview readiness reports",
              "Priority support",
            ],
            link: "/signup",
          },
        ].map((plan, i) => (
          <Card
            key={i}
            className={`flex flex-col ${
              i === 1
                ? "border-purple-600 dark:border-purple-400 shadow-lg"
                : ""
            }`}
          >
            <CardHeader>
              <CardTitle>{plan.name}</CardTitle>
            </CardHeader>
            <CardDescription className="ml-6">
              {plan.description}
            </CardDescription>
            <CardContent className="flex-1">
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground"> /month</span>
              </div>
              <ul className="space-y-2">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center">
                    <Check className="mr-2 h-4 w-4 text-purple-600 dark:text-purple-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </CardContent>
            <CardFooter>
              {user ? (
                <></>
              ) : (
                <Link href="/signup" className="w-full">
                  <Button
                    className={`w-full cursor-pointer ${
                      i === 1 ? "bg-purple-600 hover:bg-purple-700" : ""
                    }`}
                    variant={i === 1 ? "default" : "outline"}
                  >
                    {i === 0 ? "Sign Up Free" : "Sign in to upgrade"}
                  </Button>
                </Link>
              )}
              
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}
