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
        
        <div 
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/ h-0.5 bg-[#d7f448]"
          style={{
            boxShadow: '0 10px 80px 10px rgba(215, 244, 72, 0.8), 0 20px 60px 5px rgba(215, 244, 72, 0.6), 0 30px 100px 0px rgba(215, 244, 72, 0.4)',
            filter: 'blur(0.5px)'
          }}
        />
      </div>
    </div>
  );
}