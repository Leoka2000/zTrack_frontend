import Link from "next/link";
import { Button } from "./ui/button";
import { ArrowBigRight, ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 mx-60 my-4   z-50 bg-neutral-950/70  rounded-full ">
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-[#d7f448] text-neutral-900 hover:bg-[#c3e13f] rounded-full flex items-center justify-center">
              <Image
                src="/as-logo-small.png"
                alt="Logo"
                width={32}
                height={32}
                className="mr-0.5"
                priority
              />
            </div>
            <span className="text-neutral-200 text-2xl font-semibold">
              VoltHaus
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className="text-neutral-300 hover:text-[#d7f448] transition-colors"
            >
              Home
            </Link>
            <Link
              href="/about"
              className="text-neutral-300 hover:text-[#d7f448]  transition-colors"
            >
              About Us
            </Link>
            <Link
              href="/stations"
              className="text-neutral-300 hover:text-[#d7f448]  transition-colors"
            >
              Stations
            </Link>
            <Link
              href="/products"
              className="text-neutral-300 hover:text-[#d7f448]  transition-colors"
            >
              Products
            </Link>
            <Link
              href="/blog"
              className="text-neutral-300 hover:text-[#d7f448]  transition-colors"
            >
              Blog
            </Link>
          </div>

          <Button className="group text-lg text-slate-900 h-10 w-32 font-semibold rounded-full transition-colors">
            <span className="mx-1.5">Contact</span>

            <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
              <ArrowRight
                size={48}
                strokeWidth={1.75}
                className="w-3 h-4 text-neutral-200 transition-transform duration-300 group-hover:-rotate-45"
              />
            </span>
          </Button>
        </div>
      </div>
    </nav>
  );
}
