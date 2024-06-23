'use client'
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGoogle,FaGithub } from "react-icons/fa";

const page = () => {


    const handleLogin= async() => {

    }

  return (
    <div>
      <div className="container px-24 mx-auto py-24">
        <div className="grid grid-cols-2 items-center gap-12">
          <div>
            <Image
              src={"/assets/images/login/login.svg"}
              height={540}
              width={540}
              alt="logo image"
            ></Image>
          </div>
          <div className="border-2 rounded-2xl p-12">
          <h4 className="text-3xl font-semibold text-primary text-center mb-12">Sign In</h4>
           <form onSubmit={handleLogin} action="">
           <label htmlFor="">Email</label> <br />
            <input
              type="email"
              name='email'
              placeholder="Your Email Here"
              className="mt-2 input input-bordered w-full"
            />
            <label htmlFor="">Password</label> <br />
            <input
              type="password"
              name='password'
              placeholder="Your Password"
              className="mt-2 input input-bordered w-full"
            />
            <button type="submit" className="btn btn-primary mt-6 w-full">Sign In</button>
           </form>
            <div>
              <h2 className="mt-6 text-center font-semibold text-xl">Or Sign in With</h2>
              <div className="flex items-center justify-center gap-4 mt-4">
                <button className="btn btn-outline text-xl hover:text-blue-400"><FaGoogle></FaGoogle></button>
                <button className="btn btn-outline text-xl"><FaGithub></FaGithub></button>
                
              </div>
              <h2 className="mt-6 text-center font-semibold">not have account ? <Link href='/signup' className="text-primary font-semibold text-xl">Sign Up</Link></h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default page;
