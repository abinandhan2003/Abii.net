import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Abi from './abii.png';


function About() {
    
    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div className='w-full md:h-[100vh] h-full py-10 md:py-0 flex justify-center items-center'>
            <div className='flex justify-center items-center flex-col w-[90%] md:w-[700px]'>
               
               <img src={Abi} alt="Abi_image" className='rounded-full w-40'/>

                <div className='mt-5'>
                <p className='leading-relaxed' data-aos="fade-up" data-aos-duration="1500">Hello everyone, my name is Abi, who is passionate about coding and UI design. Let's talk about my background. I'm a self-taught developer who started learning front-end skills and coding for several projects in a year.</p>
                <br />
                <p className='leading-relaxed' data-aos="fade-up" data-aos-duration="1500">During that time, I practice number of projects in Tailwindcss and React JS. And got a lot of good feedback from my audience. That motivated me a lot. I found my passion through each project and want to create even more amazing ones. That keeps me always learning to improve my skills.</p>
                <br />
                <p data-aos="fade-up" data-aos-duration="1500">You can see more about my projects and skills below.</p>
                </div>
        
                <div className='text-end w-full mt-5leading-relaxed'>
                    <p className='font-semibold' data-aos="fade-up" data-aos-duration="1500">Abi Nandhan</p> 
                    <p data-aos="fade-up" data-aos-duration="1500">9092312162</p>
                    <p data-aos="fade-up" data-aos-duration="1500"> abinandhan77@gmail.com</p>
                    <p data-aos="fade-up" data-aos-duration="1500">Chennai</p>
                </div>

            </div>

        </div>
    );
}

export default About;
