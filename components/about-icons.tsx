import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import Image from "next/image";

export function AboutIcons() {
  return (
    <div className="w-full flex flex-col md:flex-row gap-3">
      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center space-y-4">
          <div className="relative w-full  h-52">
            <Image
              src="/about-card-img1.avif"
              alt="agrosentinels-icon"
              fill
              className="w-full px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col items-start">
       <div className="space-y-2 text-start">
            <div className="text-7xl font-bold text-neutral-900">+50%</div>
            <CardTitle className="text-4xl text-neutral-900">
              AI CHARGING ADOPTION
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[25rem]">
            Pioneering intelligent systems for faster, smarter power delivery.   smarter power delivery.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center ">
          <div className="relative w-full  h-52">
            <Image
              src="/about-card-img2.avif"
              alt="agrosentinels-icon"
              fill
              className="w-full px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col mb-6 ml-6 items-start">
          <div className="space-y-2 text-start">
            
            <div className="text-7xl font-bold text-neutral-900">+16,211</div>
            <CardTitle className="text-4xl text-neutral-900">
              AI CHARGING ADOPTION
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[25rem]">
            Pioneering intelligent systems for faster, smarter power delivery.   smarter power delivery.
          </CardDescription>
        </CardContent>
      </Card>

      
    </div>
  );
}
