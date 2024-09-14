import React,{useEffect} from 'react';
import Skillsvg from './Skills/undraw_website_u6x8.svg';
import Uline from './Skills/undraw_fun-underline.svg';
import './Skills/Skills.css';
import { TypeAnimation } from 'react-type-animation';
import AOS from 'aos';
import 'aos/dist/aos.css';


function Skills() {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div id='skills' className='w-full h-full md:h-[100vh] bg-white gap-5 md:gap-0 flex flex-wrap border-b border-black'>

      <div className='md:w-1/2 w-full flex justify-center items-center flex-col'>
        <img src={Skillsvg} alt="skills_svg" className='w-[60%] transform -scale-x-100' />
      </div>

      <div className='md:w-1/2 w-full flex justify-center items-start flex-col p-5' >

        <div className='text-4xl w-full md:block flex justify-center flex-col items-center' data-aos="fade-up">
            My Skills <br />
            <img src={Uline} alt="underline" className='w-36 mt-2' data-aos="fade-up"  data-aos-duration="1500" />
        </div>
        

        <div className='flex justify-center w-full'>
          <blockquote class="text-neutral-600 quote text-xl -translate-x-16" data-aos="fade-up"  data-aos-duration="1500">
            “Almost my skills, I learn by myself. <br />  Let me tell you what can i do.”
          </blockquote>
        </div>

        <div className='bg-gray-200 p-4 md:w-[620px] w-full mt-4 flex flex-col gap-2 font-semibold'>
          <div>1. const myTechnicalSkills = [HTML , Tailwind CSS, React, React Native]</div>
          <div>2. const mySoftSkills = [Operating System, UI Design, MS-Office] </div>
          <TypeAnimation
            sequence={[
              '3. Console.log(mySkill:',
              500,
              '3. Console.log(mySkill: [...myTechnicalSkills ,', //  Continuing previous Text
              500,
              '3. Console.log(mySkill: [...myTechnicalSkills , ..mySoftSkills]);',
              500,
              '3. Console.log(mySkill: [...myTechnicalSkills ,',
              500,
              '3. Console.log(mySkill:',
              500,
              '3. ',
              500,
            ]}
            style={{ fontSize: 'default' }}
            repeat={Infinity}
          />
        </div>

        <div className='md:w-[82%] scale-90 md:scale-100 flex gap-5 justify-around mt-10'>

          <div className='w-1/2'>
            <div className='flex justify-start flex-col'>

              <h className='text-lg'> TECHNICAL SKILLS</h>

              <div className='flex flex-col gap-2'>


              <div>
                  <p>React JS</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[80%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p>HTML</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[90%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p>TailwindCSS</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[90%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p> JavaScript</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[70%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

               


              </div>

            </div>
          </div>

          <div className='w-1/2'>
            <div className='flex justify-start flex-col'>

              <h className='text-lg'>SOFT SKILLS</h>

              <div className='flex flex-col gap-2'>

                <div>
                  <p>Operating System</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[70%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p>UI Design</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[90%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p> MS- Office</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[70%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>

                <div>
                  <p> Critical thinking</p>
                  <div className='w-44 border border-black h-5 rounded-full'>
                    <div className='w-[60%] h-full bg-black rounded-full'> sf</div>
                  </div>
                </div>


              </div>

            </div>
          </div>

          

        </div>
      </div>
    </div>
  );
}

export default Skills;
