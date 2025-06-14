import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="GitCracked Logo"
        width={32}
        height={32}
        className="rounded-md"
      />
    </Link>
  );
}
