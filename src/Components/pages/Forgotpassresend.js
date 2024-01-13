import React from "react";
import { FaStarOfLife } from "react-icons/fa6";
import { Link } from "react-router-dom";
import img from "../../img/group-afro-americans-working-together (1).png";
import "../style.css";
import img1 from "../../img/Union.png";

import CTAButton from "../Button";
import PasswordInput from "../Password";
import EmailInput from "../Email";
import CheckboxComponent from "../Checkbox";
import { useNavigate } from "react-router-dom";
import "../style.css";

const Forgotpassresend = () => {
  const navigate = useNavigate();
  function Forgotpassresend() {
    navigate("/resetmypassword");
  }

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
              <div className=" hover:border-b-4 hover:border-rose-900">
                Join Panda
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
              className="box1 relative flex flex-col justify-start items-center lg:mt-16"
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
                  Forgot Password
                </h1>
              </div>
              <div className="w-full h-3/6 max-[765px]:h-2/5 flex flex-col px-7">
                <div className="container mx-auto flex flex-col lg:mt-12 ">
                  <EmailInput />
                  <h6
                    className="text-xs mt-1 lg:mt-4 lg:mb-9 mb-1 flex text-center justify-center leading-5"
                    style={{ color: "rgba(172, 181, 189, 1)" }}
                  >
                    Your password reset link has been sent to your email
                    address. Check your email and click on the link to reset
                    your password.
                  </h6>
                </div>
              </div>
            </div>
            <h6
              className="text-lg mt-5 mb-1  hover:cursor-pointer flex text-center justify-center text-sm "
              style={{ color: "rgba(172, 181, 189, 1)" }}
            >
              Didn’t get the password reset link?
            </h6>
            <div
              onClick={Forgotpassresend}
              className="border-stone-900 btnal mt-5 hover:cursor-pointer rounded-full py-3 w-1/2 ring ring-zinc-300 flex flex-col items-center"
            >
              Resend Link
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

// const Forgotpassresend = () => {

//     const navigate = useNavigate()
//     function resendlink(){
//         navigate("/resetmypassword")
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

//         <div className='w-2/5 h-full flex flex-col items-center max-[765px]:w-full max-[765px]:h-full '>
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
//      <h1 className='font-semibold text-3xl mt-8 p-4 lg:absolute'>Forgot Password</h1>

//      <div className="container mx-auto">
//       <EmailInput />
//       <h6 className='text-[8.2px] mt-4 w-full' style={{color:"rgba(172, 181, 189, 1)"}}>Your password reset link has been sent to your email address.Check your email and click on the link to reset your password.</h6>
//     </div>

//         </div>
//         <h6 className='text-xs mt-6 w-full ml-20' style={{color:"rgba(172, 181, 189, 1)"}}>Didn’t get the password reset link?</h6>
//         <button onClick={resendlink} className="border-stone-900 rounded-full py-3 w-1/2 ring ring-zinc-200 flex flex-col items-center ml-20 mt-6">Resend Link</button>
//         </div>

//         </div>
//     </div>

//     </>
//   )
// }

export default Forgotpassresend;
