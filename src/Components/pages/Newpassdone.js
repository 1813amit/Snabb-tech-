import React, { useState } from "react";
import { FaStarOfLife } from "react-icons/fa6";
import img from "../../img/group-afro-americans-working-together (1).png";
import img1 from "../../img/Union.png";
import CTAButton from "../Button";
import PasswordInput from "../Password";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Newpassdone = () => {
  const navigate = useNavigate();

  function signin() {
    navigate("/Signin");
  }
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <>
      {/* section1 */}
      <div className="w-full h-full flex max-[765px]:flex-col ">
        <div className="relative bigcont w-3/5 h-[100%] flex flex-col max-[765px]:w-full max-[765px]:h-3/5">
          <div className="absolute top-4 left-8 flex flex-col">
            <h1 className=" text-white font-bold text-5xl font-Sans my-4">
              Welcome to PANDA
            </h1>
          </div>
          <img src={img} className="w-full h-full object-cover" alt="" />
        </div>

        <div className="w-2/5 h-full flex flex-col items-center max-[765px]:w-full max-[765px]:h-full">
          <div className="mt-2 flex flex-row gap-7 ">
            <CTAButton active={true} linkto={"/"}>
              <div className=" hover:border-b-2 hover:border-rose-900">
                Join Panda
              </div>
              <div className="group-hover:h-1 group-hover:bg-fuchsia-600"></div>
            </CTAButton>
            <div className="font-semibold mt-3">or</div>
            <CTAButton active={false} linkto={"/Signin"}>
              <div className=" hover:border-b-2 hover:border-rose-900">
                Sign in
              </div>
            </CTAButton>
          </div>
          <div className="text-yellow-400 w-[300px] px-3 py-0 border-b border-yellow focus:outline-none focus:border-yellow"></div>

          <div className="relative cont2 w-4/5 pt-6 min-h-full flex flex-col justify-center items-center max-[920px]:h-3/6">
            <div className=""></div>

            <div
              className="box1 px-7 relative flex flex-col justify-start items-center lg:mt-24"
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
              <div className="flex w-full h-3/6 flex-col">
                <h1 className="font-medium text-3xl mt-2 p-4 text-center">
                  Reset password
                </h1>
              </div>

              <div className="w-full h-3/6 max-[765px]:h-2/5 flex flex-col">
                <div className="container mx-auto flex flex-col gap-5 items-center lg:mt-10 justify-center">
                  <PasswordInput />
                  <div className="relative w-full flex justify-center  md:w-2/3 lg:w-1/2 xl:w-full lg:mt-4 mx-auto">
                    <input
                      type={showPassword ? "text" : "password"}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="text-rose-800 xl:w-[250px] px-3 py-2 border-b border-yellow focus:outline-none focus:border-yellow"
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      onClick={togglePasswordVisibility}
                      className="underline cursor-pointer"
                    >
                      {showPassword ? "Hide" : "Show"}
                    </button>
                  </div>

                  <h6
                    className=" text-center items-center mb-6 -ml-20 text-sm mt-5"
                    style={{ color: "rgba(172, 181, 189, 1)" }}
                  >
                    Your password has been reset.
                  </h6>
                </div>
              </div>
            </div>

            <div
              onClick={signin}
              className="border-stone-900 btnal mt-16 rounded-full py-3 w-1/2 ring ring-zinc-200 flex flex-col items-center"
            >
              Sign in
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Newpassdone = () => {

//     const navigate = useNavigate()
//     function signin(){
//         navigate("/Signin")
//     }

//   return (
//     <>
//       {/* section1 */}
//       <div className='w-full h-full flex items-center max-[765px]:flex-col '>
//       <div className='relative w-3/5 h-full flex flex-col max-[765px]:w-full max-[765px]:h-3/5'>
//             <div className='absolute top-4 left-8 flex flex-col'>
//                 <h1 className=' text-white font-bold text-5xl font-Sans my-4'>Welcome to PANDA</h1>
//             </div>
//             <img src={img} className='w-full h-full object-cover' alt="" />
//         </div>
//         <div className='w-2/5 h-full flex flex-col items-center max-[765px]:h-full '>
//         <div className="mt-2 flex flex-row gap-7 ">
//           <CTAButton active={true} linkto={"/"}>
//           <div className=" hover:border-b-2 hover:border-rose-900">
//                 Panda
//         </div>
//           <div className='group-hover:h-1 group-hover:bg-fuchsia-600'></div>
//           </CTAButton>
//          <div className='font-semibold mt-3'>or</div>
//           <CTAButton active={false} linkto={"/Signin"}>
//           <div className=" hover:border-b-2 hover:border-rose-900">
//             signin
//         </div>
//           </CTAButton>
//         </div>
//         <div className='relative w-4/5 p-10 h-full flex flex-col '>
//         <div className=''>

//         </div>

//         <div

//       className=" box1 relative flex flex-col items-center justify-start"
//       style={{
//         width: '400px',
//         // maxWidth: '100%',
//         height: '100%',
//         maxHeight: '502px',
//         border:"1px solid black",
//         borderRadius: '250px 250px 0 0',
//         border:"1px solid rgba(172, 181, 189, 1)"
//       }}
//     >
//      <h1 className='font-semibold text-3xl mt-8 p-4 lg:absolute'>Reset Password</h1>

//      <div className="container mx-auto flex flex-col gap-12 mt-24 items-center justify-center h-screen">
//       <PasswordInput/>
//       <PasswordInput/>

//       <h6 className='text-xs -mt-3 -ml-16' style={{color:"rgba(172, 181, 189, 1)"}}>Your password has been reset.</h6>
//     </div>

//         </div>
//         <button onClick={signin} className="border-stone-900 rounded-full py-3 w-1/2 ring ring-zinc-200 flex flex-col items-center ml-24 mt-16">Signin</button>
//         </div>

//         </div>
//     </div>

//     </>
//   )
// }

export default Newpassdone;
