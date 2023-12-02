import Image from "next/image";
import React from "react";
import { ProductTypes } from "@/types";
import { featuredProducts } from "@/data";


const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  if (!res.ok) {
    throw new Error("Failed!");
  }
  return res.json();
};

const Featured = async () => {

  // const featuredProducts:ProductTypes[] = await getData();
  return (
    <div className="w-screen overflow-x-scroll text-blue-500">
      {/* WRAPPER */}
      <div className="w-max flex">
        {/* SINGLE ITEM */}
        {featuredProducts.map((item) => (
          <div
            key={item.id}
            className="w-screen h-[60vh] flex flex-col items-center justify-around p-4 hover:bg-fuchsia-50 transition-all duration-300 md:w-[50vw] xl:w-[33vw] xl:h-[90vh]"
          >
            {/* IMAGE CONTAINER */}
            {item.img && (
              <div className="relative flex-1 w-full hover:rotate-[60deg] transition-all duration-500">
                <Image src={item.img} alt="" fill className="object-contain" />
              </div>
            )}
            {/* TEXT CONTAINER */}
            <div className="flex-1 flex flex-col gap-4 items-center justify-center text-center">
              <h1 className="text-xl font-bold uppercase xl:text-2xl 2xl:text-3xl">
                {item.title}
              </h1>
              <p className="p-4 2xl:p-8">{item.desc}</p>
              <span className="text-xl font-bold">${item.price}</span>
              <button className="bg-blue-500 text-white p-2 rounded-md">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Featured;


/*

*/

/*
# Environment variables declared in this file are automatically made available to Prisma.
# See the documentation for more detail: https://pris.ly/d/prisma-schema#accessing-environment-variables-from-the-schema

# Prisma supports the native connection string format for PostgreSQL, MySQL, SQLite, SQL Server, MongoDB and CockroachDB.
# See the documentation for all the connection string options: https://pris.ly/d/connection-strings

NEXTAUTH_URL =http://localhost:3000
NEXTAUTH_URL_INTERNAL =http://localhost:3000
DATABASE_URL="postgresql://postgres:emmy1599@localhost:5432/postgres?schema=public"
NEXTAUTH_SECRET="password"
GOOGLE_CLIENT_ID=531374619769-b2cn7vaj4btu1n4knklurd3ksj1iouqf.apps.googleusercontent.com
GOOGLE_CLIENT_SECRET=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
*/