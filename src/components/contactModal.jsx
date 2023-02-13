import { React, useRef } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactModal({ closeModal }) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        process.env.REACT_APP_SERVICE_ID,
        process.env.REACT_APP_TEMPLATE_ID,
        form.current,
        process.env.REACT_APP_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert('Message Sent');
          e.target.reset();
        },
        (error) => {
          alert('Message not sent, please try again');
        }
      );
  };

  return (
    <div className='modalBackground'>
      <div className='fixed inset-0 z-10 overflow-y-auto items-center'>
        <div
          className='fixed inset-0 w-full h-full bg-black opacity-40'
          onClick={() => closeModal(false)}
        ></div>
        <div className='flex items-center min-h-screen px-4 py-8'>
          <div className='relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg'>
            <div className='mt-3 sm:flex'>
              <div className='mt-2 text-center sm:ml-4 sm:text-left'>
                <h4 className='text-lg font-medium text-gray-800'>
                  Contact Me
                </h4>
                <form
                  className='mt-2 text-[15px] leading-relaxed text-gray-500'
                  ref={form}
                  onSubmit={sendEmail}
                >
                  <div className='row col px-1'>
                    <div className='border-2 my-2'>
                      <input
                        type='text'
                        name='name'
                        placeholder='Full Name'
                        required
                      />
                    </div>
                    <div className='border-2 my-2'>
                      <input
                        type='email'
                        name='email'
                        placeholder='Email Address'
                        required
                      />
                    </div>
                    <div className='border-2 my-2'>
                      <input
                        type='tel'
                        name='phone'
                        placeholder='Phone #'
                        required
                      />
                    </div>
                    <div className='border-2 my-2'>
                      <textarea name='message' placeholder='Message' required />
                    </div>

                    <div className='items-center gap-2 mt-3 sm:flex'>
                      <button
                        className='w-full mt-2 p-2.5 flex-1 text-white bg-teal-500 hover:text-teal-500 hover:bg-white rounded-md outline-none ring-offset-2 ring-teal-500 focus:ring-2'
                        type='submit'
                        value='Send'
                      >
                        Submit
                      </button>
                    </div>
                  </div>
                </form>
                <button
                  className='w-full mt-2 p-2.5 flex-1 text-white bg-red-600 hover:text-red-600 hover:bg-white rounded-md outline-none ring-offset-2 ring-red-600 focus:ring-2'
                  onClick={() => closeModal(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
