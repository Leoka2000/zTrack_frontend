"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X, ArrowRight } from "lucide-react"

import { Button } from "@/components/ui/button"
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerClose,
} from "@/components/ui/drawer"

import { TransitionLink } from "./utils/TransitionLink"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/stations", label: "Stations" },
  { href: "/products", label: "Products" },
  { href: "/blog", label: "Blog" },
]

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 mx-4 md:mx-60 my-4 bg-neutral-950/40 backdrop-blur-2xl rounded-full border border-neutral-600/10">
      <div className="container mx-auto p-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-14 h-10 bg-[#d7f448] rounded-full flex items-center justify-center">
              <Image
                src="/zanelogo.png"
                alt="Logo"
                width={50}
                height={50}
                className="brightness-0"
                priority
              />
            </div>
            <span className="text-neutral-50 text-2xl font-semibold">
              ZtrackMap
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-neutral-50 hover:text-[#d7f448] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className="hidden md:block">
            <TransitionLink href="/contact">
              <Button className="group text-lg text-slate-900 h-10 w-32 font-semibold rounded-full">
                <span className="mx-1.5">Contact</span>
                <span className="p-1 rounded-full bg-neutral-900 flex items-center justify-center">
                  <ArrowRight
                    className="w-3 h-4 text-neutral-200 transition-transform group-hover:-rotate-45"
                  />
                </span>
              </Button>
            </TransitionLink>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Drawer direction="top">
              <DrawerTrigger asChild>
                <Button size="icon" variant="ghost">
                  <Menu className="text-neutral-50" />
                </Button>
              </DrawerTrigger>

              <DrawerContent className="border-none bg-neutral-950/95 backdrop-blur-xl animate-in slide-in-from-top duration-300">
                <div className="px-6 pt-6 pb-10 space-y-6">
                  {/* Header */}
                  <div className="flex items-center justify-between">
                    <span className="text-neutral-50 text-xl font-semibold">
                      Menu
                    </span>
                    <DrawerClose asChild>
                      <Button size="icon" variant="ghost">
                        <X className="text-neutral-50" />
                      </Button>
                    </DrawerClose>
                  </div>

                  {/* Links */}
                  <div className="flex flex-col gap-5">
                    {navLinks.map((link) => (
                      <DrawerClose asChild key={link.href}>
                        <Link
                          href={link.href}
                          className="text-neutral-50 text-lg hover:text-[#d7f448] transition-colors"
                        >
                          {link.label}
                        </Link>
                      </DrawerClose>
                    ))}
                  </div>

                  {/* CTA */}
                  <DrawerClose asChild>
                    <TransitionLink href="/contact">
                      <Button className="w-full mt-6 text-lg text-slate-900 font-semibold rounded-full">
                        Contact
                      </Button>
                    </TransitionLink>
                  </DrawerClose>
                </div>
              </DrawerContent>
            </Drawer>
          </div>
        </div>
      </div>
    </nav>
  )
}
