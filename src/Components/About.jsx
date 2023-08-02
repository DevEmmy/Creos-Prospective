import Button from '@/AtomicComponents/Button'
import Footer from '@/AtomicComponents/Footer'
import NavBar from '@/AtomicComponents/NavBar'
import PictureTextDivider from '@/AtomicComponents/PictureTextDivider'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const About = () => {
  return (
    <>
        <NavBar active={1}/>

          <PictureTextDivider imageUrl={"/about-1.jpeg"} bgColor="bg-primary6" imageClassNames={"w-[100%] rounded-[1.5em] margin-auto object-cover h-[100%]"} imageContainerClassNames={"h-[674px] p-[10px] bg-white rounded-[1.8em]"} imageFirst={true}>
            <div className='flex flex-col gap-3'>
              <p className="text-[1em] font-[600]">
                About Us
              </p>

              <h3 className="text-[1.6em] font-[700] text-primary1">
                Unleashing Curiosity and Empowering Young Minds
              </h3>

              <p className="text-[1.0em]">
              Welcome to CuriousKidz, an innovative educational method that bridges the gap between conventional education and the exciting world of STEAM (Science, Technology, Engineering, Arts, and Mathematics).
              </p>

              <p className="text-[1.0em]">
                At CuriousKidz, we believe that every young mind holds boundless potential, waiting to be unleashed through curiosity, creativity, and problem-solving skills.
              </p>

              <div className='flex gap-3 items-center text-[0.8em] font-[700] sm:flex-col sm:items-start'>
                <Button className={"flex items-center gap-1 rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"}>
                  Enroll now <FaArrowRight />
                </Button>

                <Button className={"flex items-center gap-1 rounded-full px-[2.5em] py-[0.9em] text-primary1 bg-transparent border-primary1 border-2 sm:w-full sm:justify-center"}>
                  Login as a guest
                </Button>
              </div>
            </div>
          </PictureTextDivider>

          <PictureTextDivider imageUrl={"/about-2.png"} bgColor={"bg-transparent"} imageFirst={false}>
              <div className="flex flex-col gap-3">
              <h3 className="text-primary1 font-[700] text-[1.6em]">
                Our Vision
              </h3>

              <p className='text-0.9em'>
                Our vision is to empower young learners in Nigeria and beyond with the tools they need to excel in rare and high-paying disciplines.
              </p>

              <p className='text-0.9em'>
                The STEAM program at CuriousKidz is meticulously designed to engage young minds in conventional education settings, while simultaneously igniting a passion for innovation and exploration.
              </p>
              </div>
          </PictureTextDivider>

          <div className='bg-[#FAFAFA]'>
          <PictureTextDivider imageUrl={"/about-3.png"} bgColor={"bg-transparent"} imageFirst={true}>
              <div className="flex flex-col gap-3">
              <h3 className="text-primary1 font-[700] text-[1.6em]">
                Overcoming Chalenges
              </h3>

              <p className='text-0.9em'>
              In Nigeria, we recognize two major factors that hinder the progress of the STEM/STEAM program: cost and limited engaging environments. Creating enriching experiences like acoustically friendly music labs, fully tooled technical workshops, and 3D printers can be expensive. 
              </p>

              <p className='text-0.9em'>
                  These resources are often readily available in developed societies, making it easier for children in those regions to explore fields like aerospace, astronomy, robotics, computer programming, and systems theory.
              </p>

              <Button className={"flex items-center w-fit gap-1 rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"}>
                  Enroll now <FaArrowRight />
                </Button>
              </div>
          </PictureTextDivider>
          </div>

          <PictureTextDivider imageUrl={"/about-4.png"} bgColor={"bg-transparent"} imageFirst={false}>
              <div className="flex flex-col gap-3">
              <h3 className="text-primary1 font-[700] text-[1.6em]">
                Feeling Curiousity, Curbing Boredom
              </h3>

              <p className='text-0.9em'>
                  We understand that traditional instructional methods can leave young minds feeling bored and disconnected from their studies. To address this, CuriousKidz leverages mediums like TV, movies, and the internet – platforms that naturally captivate children's attention. 
              </p>

              <p className='text-0.9em'>
                  We firmly believe that by incorporating these mediums into the learning process, we can create an engaging, research-based, peer-to-peer learning environment.
              </p>
              </div>
          </PictureTextDivider>

          <div className='bg-[#FAFAFA]'>
          <PictureTextDivider imageUrl={"/about-5.png"} imageFirst={true}>
            <div className='flex flex-col gap-3'>
              <h3 className="text-primary1 font-[700] text-[1.6em]">
                Nuturing a Passion for Knowledge
              </h3>

              <p className="text-[1.0em]">
                Our platform is specifically designed to drive creativity, encourage self-driven research, and instill a thirst for advanced sciences and arts.
              </p>

              <p className="text-[1.0em]">
                By seamlessly integrating real-world applications and purpose-driven knowledge from conventional subjects, we create a dynamic educational experience that empowers students to flourish academically and personally.
              </p>

            </div>
          </PictureTextDivider>

          <PictureTextDivider imageUrl={"/about-6.png"} imageFirst={false}>
            <div className='flex flex-col gap-3'>
              <h3 className="text-primary1 font-[700] text-[1.6em]">
                Our Commitment
              </h3>

              <p className="text-[1.0em]">
              Welcome to CuriousKidz, an innovative educational method that bridges the gap between conventional education and the exciting world of STEAM (Science, Technology, Engineering, Arts, and Mathematics).
              </p>

              <p className="text-[1.0em]">
                At CuriousKidz, we believe that every young mind holds boundless potential, waiting to be unleashed through curiosity, creativity, and problem-solving skills.
              </p>

              <div className='flex gap-3 items-center text-[0.8em] font-[700] sm:flex-col'>
                <Button className={"flex items-center gap-1 rounded-full px-[2.5em] py-[1em] text-white bg-primary1 sm:w-full sm:justify-center"}>
                  Enroll now <FaArrowRight />
                </Button>

                <Button className={"flex items-center gap-1 rounded-full px-[2.5em] py-[0.9em] text-primary1 bg-transparent border-primary1 border-2 sm:w-full sm:justify-center"}>
                  Login as a guest
                </Button>
              </div>
            </div>
          </PictureTextDivider>
          </div>

        <Footer />
    </>
  )
}

export default About