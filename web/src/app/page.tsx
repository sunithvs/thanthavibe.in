import Image from "next/image";
import AnimatedThanthaVibe from "./components/AnimatedThanthaVibe";

export default function Home() {
  return (
    <div 
      className="min-h-screen w-full p-2 font-[family-name:var(--font-geist-sans)]"
      style={{
        backgroundImage: "url('/thantha_vibe_bg.svg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat"
      }}
    >
      <AnimatedThanthaVibe />
    </div>
  );
}
