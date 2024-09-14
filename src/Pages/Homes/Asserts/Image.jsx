import React,{useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Image.css';

function Image() {

    useEffect(() => {
        AOS.init();
      }, [])

    return (
        <div id="about" className='w-full h-[80vh] md:h-[100vh] cvimage flex items-end justify-center'  data-aos="fade-up" data-aos-duration="2000">
            <div className='w-full h-full flex items-end justify-center bg-gray-950 bg-opacity-30'>
                <div className='flex flex-col gap-1 mb-5'>
                    <div className='flex gap-5 justify-center items-center'>

                        <div className='animate-bounce text-gray-200 '>
                            <svg data-aos="fade-up" data-aos-anchor-placement="top-bottom" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="icon" height="1.3em" width="1.3em" xmlns="http://www.w3.org/2000/svg"><path d="M8 3a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-1 0v-2A.5.5 0 0 1 8 3zm4 8a4 4 0 0 1-8 0V5a4 4 0 1 1 8 0v6zM8 0a5 5 0 0 0-5 5v6a5 5 0 0 0 10 0V5a5 5 0 0 0-5-5z"></path></svg>
                        </div>
                        <p className='text-gray-200 text-xl'data-aos="fade-up" data-aos-anchor-placement="top-bottom">SCROLL DOWN</p>
                    </div>
                    <div className='text-gray-200 tracking-widest text-xl text-center' data-aos="fade-up" data-aos-anchor-placement="top-bottom">
                        TO KNOW MORE ABOUT ME
                    </div>


                </div>
            </div>
        </div>

    );
}

export default Image;
