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
    <section  className="w-full flex flex-col md:flex-row gap-3">
      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center space-y-4">
          <div className="relative w-full  h-52">
            <Image
              src="/about-card-img1.avif"
              alt="solar-charging-icon"
              fill
              className="w-full md:px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start md:pl-10 md:pb-0 pl-10 pb-10 flex flex-col items-start">
          <div className="space-y-2 text-start">
            <div className="text-7xl grotesk font-bold text-neutral-900">
              +2 MO
            </div>
            <CardTitle className="text-4xl grotesk mb-4 text-neutral-900">
              SOLAR ENDURANCE
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[15rem]">
            Advanced NB-IoT communication coupled with solar charging for
            extended, worry-free pasture seasons.
          </CardDescription>
        </CardContent>
      </Card>

      <Card className="flex-1  rounded-3xl bg-gray-50">
        <CardHeader className="items-center ">
          <div className="relative w-full  h-52">
            <Image
              src="/about-card-img2.avif"
              alt="herd-safety-icon"
              fill
              className="w-full md:px-32"
            />
          </div>
        </CardHeader>
        <CardContent className="text-start flex flex-col mb-6 ml-6 items-start">
          <div className="space-y-2 text-start">
            <div className="text-7xl font-bold grotesk  text-neutral-900">
              100%
            </div>
            <CardTitle className="text-4xl grotesk mb-4 text-neutral-900">
              FLOCK SECURITY
            </CardTitle>
          </div>
          <CardDescription className=" text-lg w-[15rem]">
            Real-time alerts for straying or theft, ensuring every cow, sheep,
            and goat is exactly where they belong.
          </CardDescription>
        </CardContent>
      </Card>
    </section>
  );
}
