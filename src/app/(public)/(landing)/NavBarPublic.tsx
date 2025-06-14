import { Menu } from "lucide-react";
import { Button } from "../../../components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function NavBarPublic() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt="GitCracked Logo"
              width={32}
              height={32}
              className="rounded-md"
            />
            <span className="text-xl font-bold">GitCracked</span>
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full">
            <Menu className="h-5 w-5" />
            <span className="">Toggle menu</span>
          </Button>
        </div>

        {/* Desktop navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link
            href="/#features"
            className="text-sm font-medium hover:text-primary"
          >
            Features
          </Link>
          <Link
            href="/#how-it-works"
            className="text-sm font-medium hover:text-primary"
          >
            How It Works
          </Link>
          <Link
            href="/#testimonials"
            className="text-sm font-medium hover:text-primary"
          >
            Testimonials
          </Link>
          <Link
            href="/#pricing"
            className="text-sm font-medium hover:text-primary"
          >
            Pricing
          </Link>
          <Button asChild>
            <Link href="/pricing">Get Started</Link>
          </Button>
        </nav>
      </div>
    </div>
  );
}
