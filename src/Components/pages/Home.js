import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from "../../img/group-afro-americans-working-together (1).png";
import img1 from "../../img/Union.png";
import CTAButton from "../Button";
import PasswordInput from "../Password";
import EmailInput from "../Email";
import CheckboxComponent from "../Checkbox";
import "../style.css";
const Home = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      {/* section1 */}
      <div className="w-full h-full flex max-[765px]:flex-col ">
        <div className="relative bigcont w-3/5 h-[100%] flex flex-col max-[765px]:w-full max-[765px]:h-3/5">
          <div className="absolute top-4 left-8 flex flex-col">
            <h1 className=" text-white font-bold text-5xl my-4 font-kyivtype">
              Welcome to PANDA
            </h1>
          </div>
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="w-2/5 h-full flex flex-col items-center max-[765px]:w-full max-[765px]:h-full">
          <div className="mt-2 flex flex-row gap-7 ">
            <CTAButton active={true} linkto={"/"}>
              <div className=" hover:border-b-4 hover:border-rose-900  ">
                Join PANDA
              </div>
              <div className="group-hover:h-1 group-hover:bg-fuchsia-600"></div>
            </CTAButton>
            <div className="font-semibold mt-3">or</div>
            <CTAButton active={false} linkto={"/Signin"}>
              <div className=" hover:border-b-4 hover:border-rose-900">
                Sign in
              </div>
            </CTAButton>
          </div>
          <div className="text-yellow-400 w-[300px] px-3 py-0 border-b border-yellow focus:outline-none focus:border-yellow"></div>
          <div className="relative cont2 w-4/5 pt-6 min-h-full flex flex-col justify-center items-center max-[920px]:h-3/6">
            <div className=""></div>

            <div
              className="box1 relative flex flex-col justify-start items-center lg:mt-9"
              style={{
                border: "1px solid black",
                // top: '0px',
                // left: '50%', // Center horizontally
                // transform: 'translateX(-50%)',
                borderRadius: "250px 250px 0 0",
                border: "1px solid rgba(172, 181, 189, 1)",
              }}
            >
              <img src={img1} alt="" />

              <div className="flex w-full h-3/6 flex-col lg:-mt-9">
                <h1 className="font-medium text-3xl mt-20 p-4 text-center">
                  Create Your free account
                </h1>
                <h2 className="font-medium text-xl pb-4 text-center">
                  Takes less than{" "}
                  <span style={{ color: "rgba(169, 84, 84, 1)" }}>
                    5 minutes{" "}
                  </span>
                  ...
                </h2>
              </div>
              <div className="w-full h-3/6 max-[765px]:h-2/5 flex flex-col lg:mt-7">
                <div className="container mx-auto flex flex-col">
                  <EmailInput />
                  <h6
                    className="text-xs mt-1 mb-1 flex text-center items-start justify-center"
                    style={{ color: "rgba(172, 181, 189, 1)" }}
                  >
                    This email address already exists.{" "}
                    <span className="underline">Sign in</span>
                  </h6>
                </div>
                <div className="container mx-auto flex flex-col gap-5 items-center justify-center lg:mt-7">
                  <PasswordInput />
                  <PasswordInput />
                </div>
              </div>
            </div>
            <div>
              <CheckboxComponent />
            </div>

            <div className="lg:mt-20 border-stone-900 btnall rounded-full py-3 w-1/2 ring ring-zinc-200 flex flex-col items-center">
              Join PANDA
            </div>
          </div>

          <div className="lg:mt-9 flex fh3 flex-col items-center w-96 text-center mb-2">
            <h3>
              By clicking on "Create an account", you agree to our terms of use
              and privacy policy.
            </h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
