import Image from "next/image";
import Link from "next/link";

export default function QuestionPage() {
  return (
    <>
      <div className="font-[Lalezar] var(--font-lalezar) w-full h-[100vh] bg-cream relative">
        {/* Curve image */}
        <Image
          src="/Curve.png"
          alt="Curve background"
          width={1879}
          height={1228}
          className="absolute -bottom-2 left-0 w-full z-[1]"
        />

        {/* Navbar */}
        <div className="relative flex justify-between items-center mx-auto max-w-[1425px] px-[46px] py-4">
          <h2 className="text-brown text-[60px] z-[2]">فـكّـر</h2>
          <h1 className="text-brown text-[128px] absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 z-[2]">
            3
          </h1>
          <Link
            href="/"
            className="h-[32px] w-[205px] text-white bg-brown text-[26px] text-center rounded-[20px] z-[2] cursor-pointer hover:bg-brown/90 transition-colors"
          >
            خروج
          </Link>

          {/* score */}
          <div className="flex flex-col gap-1 text-[48px] items-center justify-center absolute left-[6%] -bottom-[100%]">
            <p className="text-beige leading-none">رصيدك</p>
            <p className="text-brown">١.٤٠٠ د.ك</p>
          </div>
        </div>

        {/* Question */}
        <p className="text-center text-[48px] text-beige mt-6 z-[2] relative">
          كم عدد سور القرآن الكريم{" "}
        </p>
        {/* Options */}
        <div className="flex gap-10 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[2]">
          <div className="flex items-center justify-center rounded-[46px] text-[24px] text-brown bg-cream w-[132px] h-[132px] shadow-2xl">
            ١١٨ سورة
          </div>
          <div className="flex items-center justify-center rounded-[46px] text-[24px] text-brown bg-cream w-[132px] h-[132px] shadow-2xl">
            ١١٨ سورة
          </div>{" "}
          <div className="flex items-center justify-center rounded-[46px] text-[24px] text-brown bg-cream w-[132px] h-[132px] shadow-2xl">
            ١١٨ سورة
          </div>{" "}
          <div className="flex items-center justify-center rounded-[46px] text-[24px] text-brown bg-cream w-[132px] h-[132px] shadow-2xl">
            ١١٨ سورة
          </div>
        </div>

        {/* Ad */}
        <div className="flex gap-12 absolute bottom-[10%] left-1/2 -translate-x-1/2 z-[2]">
          <div className="flex items-center justify-center rounded-[43px] text-[36px] text-beige bg-cream w-[175px] h-[175px] shadow-xl">
            Ad
          </div>
          <div className="flex items-center justify-center rounded-[43px] text-[36px] text-beige bg-cream w-[175px] h-[175px] shadow-xl">
            Ad
          </div>
          <div className="flex items-center justify-center rounded-[43px] text-[36px] text-beige bg-cream w-[175px] h-[175px] shadow-xl">
            Ad
          </div>
        </div>
      </div>
    </>
  );
}
