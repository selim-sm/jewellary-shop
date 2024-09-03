import { Button } from "@nextui-org/react";
import Link from "next/link";

const Thank = () => {
  return (
    <>
      <div className="bg-[#f9e3e3] flex justify-center items-center">
        <div className="text-red-600 py-40">
          <div className="">
            <div className="animate-pulse flex justify-center">
              <img src="/checked (1).png" alt="" />
            </div>
            <div className="text-4xl font-bold pt-14 pb-10">
              {" "}
              Thanks for purchasing
            </div>
          </div>
          <div className="gap-5 flex justify-center">
            <Link href={"/"}>
              <Button className="bg-white font-semibold">Home</Button>
            </Link>
            <Link href={"/"}>
              <Button className="bg-white font-semibold">Go To favorite</Button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Thank;
