import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export function ProductShowcase() {
  return (
    <div className="absolute left-1/2 top-[10rem] -translate-x-1/2 -translate-y-1/2 w-[120vh]">
      <div className="relative h-[40rem] w-full">
        <Image
          src="/sensor.jpg"
          alt="agrosentinels-icon"
          fill
          className="object-cover rounded-xl"
        />
      </div>
    </div>
  );
}