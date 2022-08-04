import React from 'react';
import Button from '../components/general/Button';
import TextInputGroup from '../components/layout/TextInputGroup';

const ForgotPassword = () => {
  return (
    <div className='flex items-center p-0'>
        <div className='first-col'>

        </div>

        <div className='second-col'>
            <div className='content ml-20 flex flex-col justify-center'>
                <div className='texts flex flex-col h-auto'>
                    <h2 className='not-italic'>
                        Forgot Password?
                    </h2>
                    <p className='not-italic text-base'>
                        Oops! <br/>
                        Don’t worry, we’ll help you get back in.
                    </p>
                </div>
                <div className='flex flex-col h-auto'>
                    <form >
                        <TextInputGroup
                        label='Enter your email address'
                        placeholder='johndoe@example.com'
                        name='email'
                        type='email'
                        />
                    </form>
                    <Button name='Send password recovery link'/>
                </div>
            </div>
        </div>
    </div>
  );
}

export default ForgotPassword;