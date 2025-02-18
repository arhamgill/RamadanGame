import Image from "next/image";
import Link from "next/link";

export default function Home() {
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

        {/* Navbarr */}
        <div className="relative flex justify-between items-center mx-auto max-w-[1425px] px-[46px] py-4">
          <h2 className="text-brown text-[60px] z-[2]">فـكّـر</h2>
          <h1 className="text-brown text-[96px] absolute left-1/2 top-1/2 mt-4 -translate-x-1/2 -translate-y-1/2 z-[2]">
            فوازير رمضان
          </h1>
          <div className="h-[32px] w-[205px] text-white bg-brown text-[26px] text-center rounded-[20px] z-[2]">
            خروج
          </div>
        </div>
        {/* Subheading */}
        <p className="text-center text-[40px] text-beige mt-2 z-[2] relative">
          جاوب أسرع، اكسب اكثر
        </p>

        {/* Game rules */}
        <div className="flex flex-col justify-center mx-auto max-w-[1200px] gap-3 mt-8 pr-10 z-[2] relative">
          <div className="flex gap-4 items-center">
            {/* 1 */}
            <div className="h-3 w-3 rounded-full bg-brown"></div>
            <p className="text-brown text-[32px]">
              فوازير رمضان مسابقة يوميَّة تقدّمها شركة فكر خلال شهر رمضان الكريم
              و تعتمد على السرعة ف الإجابة.
            </p>
          </div>
          {/* 2 */}
          <div className="flex gap-4 items-center">
            <div className="h-3 w-3 rounded-full bg-brown"></div>
            <p className="text-brown text-[32px]">
              يحصل المستخدم على ١ د.ك على كل إجابة صحيحة بشرط ان يكون في المركز
              الاول.
            </p>
          </div>
          {/* 3 */}
          <div className="flex gap-4 items-center">
            <div className="h-3 w-3 rounded-full bg-brown"></div>
            <p className="text-brown text-[32px]">
              يتم اختيار اكثر شخص حقق ربح خلال ٢٤ ساعه ( الساعه ١١:٥٩ م ) من كل
              يوم ويتم بعدها تصفير الأرصدة.
            </p>
          </div>
        </div>
        {/* Bottom part */}
        <div className="flex mx-auto max-w-[1300px] mt-14 relative z-[2] gap-16 items-center justify-center">
          <div className="flex flex-col justify-center items-center rounded-[46px] bg-cream h-[185px] w-[180px] gap-0">
            <span className="text-brown text-[16px] leading-none">
              المركز الأول
            </span>
            <span className="text-beige text-[35px] leading-none">Naseer</span>
            <span className="text-brown text-[36px] leading-none">٢٣ د.ك</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[46px] bg-cream h-[185px] w-[180px] gap-0">
            <span className="text-brown text-[16px] leading-none">
              المركز الأول
            </span>
            <span className="text-beige text-[35px] leading-none">Naseer</span>
            <span className="text-brown text-[36px] leading-none">٢٣ د.ك</span>
          </div>
          {/* form part */}
          <div className="flex justify-center flex-col gap-3 -mt-8">
            <h1 className="text-beige text-[36px]">ادخل اسم المستخدم للدخول</h1>
            <input
              type="text"
              placeholder="اسم المستخدم"
              className="w-[350px] h-[40px] bg-cream rounded-[6px] border placeholder:text-[24px] placeholder:text-center outline-none focus:outline-none focus:border-brown px-4 text-center"
            />
            <Link href="/question-page">
              <div className="w-[350px] h-[40px] text-[24px] bg-brown rounded-[9px] text-white flex items-center justify-center cursor-pointer hover:bg-brown/90 transition-colors">
                دخول
              </div>
            </Link>
          </div>

          <div className="flex flex-col justify-center items-center rounded-[46px] bg-cream h-[185px] w-[180px] gap-0">
            <span className="text-brown text-[16px] leading-none">
              المركز الأول
            </span>
            <span className="text-beige text-[35px] leading-none">Naseer</span>
            <span className="text-brown text-[36px] leading-none">٢٣ د.ك</span>
          </div>
          <div className="flex flex-col justify-center items-center rounded-[46px] bg-cream h-[185px] w-[180px] gap-0">
            <span className="text-brown text-[16px] leading-none">
              المركز الأول
            </span>
            <span className="text-beige text-[35px] leading-none">Naseer</span>
            <span className="text-brown text-[36px] leading-none">٢٣ د.ك</span>
          </div>
        </div>
      </div>
    </>
  );
}
