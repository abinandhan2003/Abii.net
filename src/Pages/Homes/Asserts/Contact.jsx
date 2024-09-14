import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Contact() {

    useEffect(() => {
        AOS.init();
    }, [])

    return (
        <div className='w-full h-full p-5 flex justify-center items-center' id='contact' >


            <div className='md:w-[60%] w-full mt-10'>
                <div className='text-3xl text-center text-gray-600' data-aos="fade-up" data-aos-duration="1500">GET IN TOUCH</div>

                <div className='mt-10' data-aos="fade-up" data-aos-duration="1500">
                    <div> Thank you for your interest in my portfolio.</div>
                </div>

                <div className='mt-10' data-aos="fade-up" data-aos-duration="1500">Hope you like all of what I bring my unique value to your need. I look forward to the opportunity of working with you one day and I thank you for taking the time to browse through my CV and project.</div>

                <div className='mt-10' data-aos="fade-up" data-aos-duration="1500">
                    Please fill in the form below to get in touch. I can’t wait to get to know you!
                </div>

                <div className='mt-10' data-aos="fade-up" data-aos-duration="1500">
                    Abi Nandhan
                </div>

                <div className='mt-2' data-aos="fade-up" data-aos-duration="1500">
                    +91 9092312162
                </div>

                <div className='w-full flex justify-center items-center'>

                    <form 

                    action="https://formsubmit.co/abinandhan77@gmail.com" method="POST"
                    
                    className='h-[350px] w-96 mt-10' data-aos="fade-up" data-aos-duration="1500">
                        <div className='text-center' > HAY ABI, MY NAME IS</div>
                        <input type="text" name="name" className='w-full h-7 border border-black mt-2'></input>

                        <div className='text-center mt-2'> MY EMAIL ADDRESS IS</div>
                        <input type="email" name="email" className='w-full h-7 border border-black mt-2'></input>

                        <div className='text-center'> MY MESSAGE TO YOU</div>
                        <textarea type="text" name="content" className='w-full h-24 resize-y border border-black mt-2'></textarea>

                        <div className='w-full flex justify-center items-center'>
                            <button  type="submit" className='bg-black text-white mb-10 flex justify-center items-center py-3 px-2 mt-2'>
                                SEND MESSAGE
                            </button>
                        </div>


                    </form>
                </div>


            </div>

        </div>
    );
}

export default Contact;