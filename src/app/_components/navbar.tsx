import { Menu } from "lucide-react";
import { Button } from "../../components/ui/button";
import Link from "next/link";

export default function NavBar() {
  return (
    <div className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="w-full max-w-screen-xl mx-auto px-4 md:px-6 flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <div className="relative h-8 w-8 overflow-hidden rounded-full bg-gradient-to-br from-purple-500 to-pink-600">
              <div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                G
              </div>
            </div>
            <span className="text-xl font-bold">GreetCode</span>
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
