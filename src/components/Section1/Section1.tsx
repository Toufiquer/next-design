import Image from "next/image";
import Navbar from "../Navbar/Navbar";
import Link from "next/link";

const Section1 = () => {
  return (
    <div className="bg-[#2B63D9] min-h-screen w-full">
      <Navbar></Navbar>
      <div className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <Image
            src="/hero.png"
            alt="Img Logo"
            width={600}
            height={90}
            priority
          />
          <div>
            <h1 className="text-5xl font-bold">Your Supercharged</h1>
            <p className="py-6">
              We&apos;ve been told it is not possible to overachieve our
              customers expectation. We have not reinvented the wheel, we
              decided to build upon it.
            </p>
            <Link
              href="/"
              className="btn mx-2 bg-[#2464ee] border-0 text-white hover:bg-[#407bfa]"
            >
              Get Started
            </Link>
            <div className="mt-12">
              <small>Who supports us</small>
              <Image
                src="/logo2.png"
                alt="Img Logo"
                width={600}
                height={30}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
