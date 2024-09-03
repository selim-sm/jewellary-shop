import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/router";

const slug = () => {
  const dynamicRoute = useRouter();
  let pageName = dynamicRoute.query.slug;

  return (
    <>
      <title>{pageName}</title>
    </>
  );
};

export default slug;
