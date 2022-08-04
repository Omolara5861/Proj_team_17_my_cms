import { useState } from "react";
import { faEyeSlash, faEye } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextInputGroup from '../components/layout/TextInputGroup';
import  Button  from "../components/general/Button";

// import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import "../index.css";
// import { FaGoogle } from "react-icons/fa";

const SignUp = () => {
  const [open, setOpen] = useState(false);

  const toggle = () => {
    setOpen(!open);
  };
  return (
    <div className="h  flex">
      
     
      <div className="   w-1/2   ">
        
          
          <div className="text-center  mb-12 mt-10 font-semibold  text-5xl">
              Sign Up
          </div>
        
        <div className="flex items-center justify-center flex-col">
        
        <form action="submit" method="post">
          
            <TextInputGroup
                        label='Name'
                        placeholder='John Doe'
                        name='name'
            />

          <TextInputGroup
                        label='Username'
                        placeholder='johndoe'
                        name='username'
            />

          <TextInputGroup
                        label='Email'
                        placeholder='johndoe@example.com'
                        name='email'
                        type='email'
            />
            <p class="invisible peer-invalid:visible text-red-700 font-light">
                Please enter a valid email address
            </p>

          <div class=" mx-auto relative">
            <div className="w-full">
              <TextInputGroup
                        label='Password'
                        placeholder='*********'
                        name='password'
                        type={open === false ? "password" : "text"}
            />
            </div>

            <div className=" text-2xl absolute top-10 right-5">
            
              {open === false ? (
                <FontAwesomeIcon icon={faEye} onClick={toggle} />
              ) : (
                <FontAwesomeIcon icon={faEyeSlash} onClick={toggle} />
              )}
            </div>
          </div>
          <Button name="Sign Up"/>
        </form>
        
<div className="flex items-center justify-center flex-col">
        <div className="pt-3">
          <p>Already have an account? <a href="/signin">Log In</a></p>
        </div>

        <p className="mt-8 mb-8">OR</p>
        
        <div className="mb-12">
          <p className="mb-3">continue with:</p>
          <div className="flex items-center gap-9">
          <div className="w-8 h-8 bg-gray-400 rounded-full">
         
          </div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          <div className="w-8 h-8 bg-gray-400 rounded-full"></div>
          </div>
        </div>
      </div>

      
      </div>
      </div>
      <div className="bg-gray-400 w-2/4  bg-uu"></div>
    </div>
  );
};

export default SignUp;
