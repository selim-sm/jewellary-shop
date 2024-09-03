import { Divider } from "@nextui-org/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import ToggleBtn from "./ToggleBtn";

const Display = () => {
  return (
    <>
      <div id="product" className="container mx-auto px-3">
        {/* 1st ************************** */}
        <div className="pt-20 flex justify-center gap-3 lg:gap-28">
          <div className="relative">
            <img src="/bestseller-2.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹28000</div>
            </div>
            <Link href={"demo/Colection1"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="">
            <Divider orientation="vertical" />
          </div>
          <div className="relative">
            <img src="/colection-1.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹66000</div>
            </div>

            <Link href={"demo/Colection2"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        {/* 1st ************end************** */}

        {/* 2nd ************************** */}
        <div className="pt-20 flex justify-center gap-3 lg:gap-28">
          <div className="relative">
            <img src="/bestseller-8.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹50000</div>
            </div>
            <Link href={"demo/Colection3"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="">
            <Divider orientation="vertical" />
          </div>
          <div className="relative">
            <img src="/colection-3.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹36000</div>
            </div>
            <Link href={"demo/Colection4"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        {/* 2nd ************end************** */}
        {/* 3rd ************************** */}
        <div className="pt-20 flex justify-center gap-3 lg:gap-28">
          <div className="relative">
            <img src="/colection-4.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹75000</div>
            </div>
            <Link href={"demo/Colection5"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="">
            <Divider orientation="vertical" />
          </div>
          <div className="relative">
            <img src="/colection-8.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹50000</div>
            </div>
            <Link href={"demo/Colection6"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        {/* 3rd ************end************** */}

        {/* 4th ************************** */}
        <div className="pt-20 pb-10 flex justify-center gap-3 lg:gap-28">
          <div className="relative">
            <img src="/colection-9.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹38000</div>
            </div>
            <Link href={"demo/Colection7"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
          <div className="">
            <Divider orientation="vertical" />
          </div>
          <div className="relative">
            <img src="/colection-7.webp" className="w-[25rem]" alt="" />
            <div className="">
              <ToggleBtn />
            </div>
            <div className="flex justify-between">
              <div className="lg:ps-4 text-gray-500">Lorem ipsum dolor.</div>
              <div className="font-semibold lg:text-[1.15rem]">₹90000</div>
            </div>
            <Link href={"demo/Colection8"}>
              <div className="flex justify-center gap-1 items-center text-center py-2 bg-gradient-to-r from-[#f83939] to-[#A00000] text-white rounded-xl mt-5">
                Add To Cart <ArrowRight />
              </div>
            </Link>
          </div>
        </div>
        {/* 4th ************end************** */}
      </div>
    </>
  );
};

export default Display;
