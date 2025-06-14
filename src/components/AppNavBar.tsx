"use client";

import { useAuth } from "@/lib/auth/authContext";
import Logo from "./Logo";
import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { CircleFadingArrowUp, Menu } from "lucide-react";

export default function NavBar() {
  const { user, logout } = useAuth();

  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full px-4 md:px-6 flex h-16 items-center justify-between">
        {/* Left side - Logo and Navigation Links */}
        <div className="flex items-center gap-8">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo1.png"
              alt="GitCracked Logo"
              width={32}
              height={32}
              className="rounded-md"
            /> 
          </Link>
          
          {/* Desktop navigation links */}
          <nav className="hidden md:flex items-center gap-6">
            <Link
              href="/dashboard"
              className="text-sm font-medium hover:text-primary"
            >
              Dashboard
            </Link>
            <Link
              href="/problems"
              className="text-sm font-medium hover:text-primary"
            >
              Problems
            </Link>
          </nav>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Right side - Action Buttons */}
        <div className="hidden md:flex items-center gap-4">
          <Button asChild>
            <Link href="/upgrade">
              <CircleFadingArrowUp />
              <span>Upgrade</span>
            </Link>
          </Button>
          <Button
            asChild
            onClick={logout}
            className="cursor-pointer bg-red-500 hover:bg-red-400"
          >
            <span>Profile Section</span>
          </Button>
        </div>
      </div>
    </div>
  );
}