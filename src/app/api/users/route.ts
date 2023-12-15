import { prisma } from "@/utils/connect";
import { NextResponse } from "next/server";

// CREATE USER
export const POST = async () => {
  try {
    const categories = await prisma.category.findMany();
    return new NextResponse(JSON.stringify(categories), { status: 200 });
  } catch (err) {
    console.log(err);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }),
      { status: 200 }
    );
  }
};


// export const POST = async (req) => {
//   try {
//     // Extract the user data from the request body
//     const { username, email, password } = await req.body();

//     // Hash the password before storing it
//     const hashedPassword = await bcrypt.hash(password, 10); // 10 is the recommended salt rounds

//     // Create the user using Prisma
//     const user = await prisma.user.create({
//       username,
//       email,
//       hashedPassword,
//     });

//     // Return a success response with the user data (excluding password)
//     return new NextResponse(JSON.stringify({ user }), { status: 201 });
//   } catch (err) {
//     console.error(err);

//     // Handle specific errors appropriately (e.g., email already exists)
//     if (err.code === 'P2002') { // Prisma error code for unique constraint violation
//       return new NextResponse(JSON.stringify({ message: 'Email already exists' }), { status: 409 });
//     } else {
//       return new NextResponse(JSON.stringify({ message: 'Something went wrong' }), { status: 500 });
//     }
//   }
// };