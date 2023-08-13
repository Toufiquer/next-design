import Image from "next/image";
const Hero = () => {
  return (
    <div>
      {" "}
      <Image
        src="/code-1.jpg"
        alt="Vercel Logo"
        className="dark:invert"
        width={1024}
        height={960}
        priority
      />
    </div>
  );
};

export default Hero;
