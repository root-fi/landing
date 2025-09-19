import { BaseIcon } from "@/shared/ui/BaseIcon";

export default function Home() {
  return (
    <div className="">
      <div className="relative w-full h-[600px] overflow-hidden flex justify-center">
        <video
          className="absolute top-0 w-full max-w-[1920px] h-[900px] left-0 object-cover -z-10"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/video/001.mp4" type="video/mp4" />
          Ваш браузер не поддерживает видео.
        </video>
        <div className="absolute p-[140px_0] top-0 w-full max-w-[1280px] h-full left-[auto] object-cover -z-10 flex flex-col gap-10">
          <h1
            className="block text-center font-montserrat font-bold text-[64px] leading-[78px] 
    bg-gradient-to-b from-white to-[#ADFFFF] 
    bg-clip-text text-white 
    [text-shadow:0px_0px_6px_rgba(16,237,237,0.4),0px_0px_40px_#10EDED]"
          >
            NEXT-GENERATION
            <br /> DEFI TRADING & YIELD PLATFORM
          </h1>
          <span className="block text-center text-[20px] leading-[32px] font-medium">
            Maximize Yield. Minimize Complexity.
          </span>
          <div className="m-[0_auto] w-full max-w-[800px] h-[60px] bg-[linear-gradient(90deg,rgba(0,0,0,0)_0%,rgba(0,0,0,0.5)_50%,rgba(0,0,0,0)_100%)] flex gap-[56px] items-center justify-center">
            <div className="flex items-center gap-2">
              <BaseIcon icon="Trade" size={27} />
              <span className="text-l-regular">Trade</span>
            </div>
            <div>1</div>
            <div>1</div>
          </div>
        </div>
      </div>
    </div>
  );
}
