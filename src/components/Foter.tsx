import { Divider } from "@nextui-org/react";
import { Copyright } from "lucide-react";
import Link from "next/link";

const Foter = () => {
  return (
    <>
      <div className="bg-[#f9e3e3]">
        <div className="container mx-auto px-6">
          <div className="py-20 lg:flex justify-between text-center lg:text-start lg:gap-5 text-[#240505]">
            <div className="">
              <div className="flex justify-center pb-3">
                <img src="/logo.png" alt="" />
              </div>
              <div className="lg:w-[30rem]">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Assumenda fugit beatae expedita officia sed in tenetur officiis,
                hic quae, labore aliquid fugiat. Temporibus quam architecto
                soluta commodi consequuntur maiores culpa!
              </div>
            </div>

            <div className="pt-10 lg:pt-0">
              <div className="text-2xl font-bold pt-3">Get In Touch</div>
              <Link href={"mailto:selimmondal619@gmail.com"}>
                <div className="py-4">selimmondal619@gmail.com</div>
              </Link>
              <div className="flex gap-5 justify-center lg:justify-normal">
                {/* facebook */}
                <Link
                  href={
                    "https://www.facebook.com/people/Selim-Mondal/100034003773920/"
                  }
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-facebook hover:stroke-cyan-400"
                  >
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                  </svg>
                </Link>
                {/* facebook */}
                {/* insta */}
                <Link href={"https://www.instagram.com/selimmondal372/?hl=en"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-instagram hover:stroke-cyan-400"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
                  </svg>
                </Link>
                {/* insta */}
                {/* inbox */}
                <Link href={"mailto:selimmondal619@gmail.com"}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-mail-plus hover:stroke-cyan-400"
                  >
                    <path d="M22 13V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12c0 1.1.9 2 2 2h8" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                    <path d="M19 16v6" />
                    <path d="M16 19h6" />
                  </svg>
                </Link>
                {/* inbox */}
                {/* linkdin */}
                <Link
                  href={"https://www.linkedin.com/in/selim-mondal-3718572a0/"}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    className="lucide lucide-linkedin hover:stroke-cyan-400"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </Link>
                {/* linkdin */}
              </div>
            </div>
          </div>
          <div className="pt-10">
            <Divider className="bg-white" />
          </div>
          <div className="text-[#240505] flex justify-center gap-1 pt-3 pb-5">
            <Copyright /> 2024 Jewellery Shop. All rights reserved
          </div>
        </div>
      </div>
    </>
  );
};

export default Foter;
