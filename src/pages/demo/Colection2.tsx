import { formSchema, SchemaType } from "@/utils/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  ButtonGroup,
  Button,
  Input,
  Divider,
  Select,
  SelectItem,
} from "@nextui-org/react";
import { Minus, Plus } from "lucide-react";
import { useRouter } from "next/router";
import { useState } from "react";
import { useForm } from "react-hook-form";
const Colection2 = () => {
  const [count, setCount] = useState(1);
  const [price, setPrice] = useState(66000);

  const increment = () => {
    setCount(count + 1);
    setPrice(price + 66000);
  };

  const decrement = () => {
    setCount(count > 1 ? count - 1 : 1);
    setPrice(count > 1 ? price - 66000 : 66000);
  };
  const router = useRouter();

  const {
    handleSubmit,
    register,
    reset,
    formState: { errors, isValid },
  } = useForm<SchemaType>({ resolver: zodResolver(formSchema) });

  const sendData = (fdata: SchemaType) => {
    console.log(fdata);
    reset();
    router.push("/demo/Thank");
    alert("Thanks for purchasing");
  };
  return (
    <>
      <div className="bg-[#f9e3e3]">
        <div className="container mx-auto px-5">
          <div className="lg:flex justify-between gap-5 py-10 w-full">
            <div className="lg:flex items-center gap-10 border-2 bg-white rounded-xl p-8 h-fit">
              <div className="flex justify-center pb-5 lg:pb-0">
                <img src="/bestseller-8.webp" className="rounded-2xl" alt="" />
              </div>
              <div className="">
                <div className="flex gap-10 items-center">
                  <div className="text-gray-500">
                    Lorem ipsum dolor sit amet consectetur elit.
                  </div>
                  {/* <div className="font-semibold">30% OFF</div> */}
                </div>
                <div className="pt-7 pb-5">
                  price <span className="font-bold text-2xl">₹66000/-</span> off
                  - 4500/-
                </div>
                <div className="flex justify-between items-center pb-5">
                  <div className="">Gross Weight</div>
                  <div className="font-bold">100 gram</div>
                </div>
                <div className="lg:flex justify-between items-center gap-8">
                  <div className="">Quantity:</div>
                  <ButtonGroup className="border-2 rounded-lg border-blue-500">
                    <Button
                      className="bg-white"
                      startContent={<Minus />}
                      onPress={decrement}
                    ></Button>
                    <Button className="bg-white">{count}</Button>
                    <Button
                      className="bg-white"
                      startContent={<Plus />}
                      onPress={increment}
                    ></Button>
                  </ButtonGroup>
                </div>
              </div>
            </div>

            {/* 1st end****************************** */}

            <div className="lg:w-[50%] bg-white rounded-xl p-8 mt-10 lg:mt-0">
              <form onSubmit={handleSubmit(sendData)} noValidate>
                <div className="">Full Name</div>
                <div className="">
                  <Input
                    type="name"
                    required
                    {...register("name")}
                    placeholder="Enter your name"
                    errorMessage={errors.name?.message}
                    isInvalid={!!errors.name?.message}
                  />
                </div>
                <div className="pt-3">Email</div>
                <div className="pb-3">
                  <Input
                    type="email"
                    placeholder="Enter your email"
                    required
                    {...register("email")}
                    errorMessage={errors.email?.message}
                    isInvalid={!!errors.email?.message}
                  />
                </div>
                <div className="">Phone Number</div>
                <div className="pb-3">
                  <Input
                    type="number"
                    placeholder="Enter your number"
                    required
                    {...register("number")}
                    errorMessage={errors.number?.message}
                    isInvalid={!!errors.number?.message}
                  />
                </div>
                <div className="">Address</div>
                <div className="text-black w-full pb-3">
                  <Select
                    required
                    {...register("address")}
                    errorMessage={errors.address?.message}
                    isInvalid={!!errors.address?.message}
                    label={"Your Current Location"}
                  >
                    <SelectItem key={"Kolkata"}>Kolkata</SelectItem>
                    <SelectItem key={"Barasat"}>Barasat</SelectItem>
                    <SelectItem key={"Rajarhat"}>Rajarhat</SelectItem>
                  </Select>
                </div>
                <div className="flex gap-10 py-2">
                  <div className="">price ({count} item)</div>
                  <div className="">{price}</div>
                </div>
                <div className="flex gap-10 pb-3">
                  <div className="">Delivery Charge</div>
                  <div className="text-blue-500">Free</div>
                </div>
                <Divider />
                <div className="flex gap-10 ">
                  <div className="">Total Amount</div>
                  <div className="font-bold text-xl">{price}/-</div>
                </div>
                <div className="mt-10">
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#f83939] to-[#A00000] font-bold text-center bg-red-600 py-2 rounded-xl text-white"
                  >
                    Buy Now
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* 2nd end****************************** */}

      {/* recomend sec***************************** */}
      {/* recomend sec****************end************* */}
    </>
  );
};

export default Colection2;
