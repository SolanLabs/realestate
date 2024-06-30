import { curve, heroBackground, robot } from "../assets";
import Button from "./Button";
import Section from "./Section";
import { BackgroundCircles, BottomLine, Gradient } from "./design/Hero";
import { heroIcons } from "../constants";
import { ScrollParallax } from "react-just-parallax";
import { useRef } from "react";
import Generating from "./Generating";
import Notification from "./Notification";
import CompanyLogos from "./CompanyLogos";

// const Hero = () => {
//   const parallaxRef = useRef(null);

//   return (
//     <Section
//       className="pt-[12rem] -mt-[5.25rem]"
//       crosses
//       crossesOffset="lg:translate-y-[5.25rem]"
//       customPaddings
//       id="hero"
//     >
//       <div className="container relative" ref={parallaxRef}>
//         <div className="relative z-1 max-w-[62rem] mx-auto text-center mb-[3.875rem] md:mb-20 lg:mb-[6.25rem]">
//           <h1 className="h1 mb-6">
//             Explore the Possibilities of&nbsp;AI&nbsp;Chatting with {` `}
//             <span className="inline-block relative">
//               Brainwave{" "}
//               <img
//                 src={curve}
//                 className="absolute top-full left-0 w-full xl:-mt-2"
//                 width={624}
//                 height={28}
//                 alt="Curve"
//               />
//             </span>
//           </h1>
//           <p className="body-1 max-w-3xl mx-auto mb-6 text-n-2 lg:mb-8">
//             Unleash the power of AI within Brainwave. Upgrade your productivity
//             with Brainwave, the open AI chat app.
//           </p>
//           <Button href="/pricing" white>
//             Get started
//           </Button>
//         </div>
//         <div className="relative max-w-[23rem] mx-auto md:max-w-5xl xl:mb-24">
//           <div className="relative z-1 p-0.5 rounded-2xl bg-conic-gradient">
//             <div className="relative bg-n-8 rounded-[1rem]">
//               <div className="h-[1.4rem] bg-n-10 rounded-t-[0.9rem]" />

//               <div className="aspect-[33/40] rounded-b-[0.9rem] overflow-hidden md:aspect-[688/490] lg:aspect-[1024/490]">
//                 <img
//                   src={robot}
//                   className="w-full scale-[1.7] translate-y-[8%] md:scale-[1] md:-translate-y-[10%] lg:-translate-y-[23%]"
//                   width={1024}
//                   height={490}
//                   alt="AI"
//                 />

//                 <Generating className="absolute left-4 right-4 bottom-5 md:left-1/2 md:right-auto md:bottom-8 md:w-[31rem] md:-translate-x-1/2" />

//                 <ScrollParallax isAbsolutelyPositioned>
//                   <ul className="hidden absolute -left-[5.5rem] bottom-[7.5rem] px-1 py-1 bg-n-9/40 backdrop-blur border border-n-1/10 rounded-2xl xl:flex">
//                     {heroIcons.map((icon, index) => (
//                       <li className="p-5" key={index}>
//                         <img src={icon} width={24} height={25} alt={icon} />
//                       </li>
//                     ))}
//                   </ul>
//                 </ScrollParallax>

//                 <ScrollParallax isAbsolutelyPositioned>
//                   <Notification
//                     className="hidden absolute -right-[5.5rem] bottom-[11rem] w-[18rem] xl:flex"
//                     title="Code generation"
//                   />
//                 </ScrollParallax>
//               </div>
//             </div>

//             <Gradient />
//           </div>
//           <div className="absolute -top-[54%] left-1/2 w-[234%] -translate-x-1/2 md:-top-[46%] md:w-[138%] lg:-top-[104%]">
//             <img
//               src={heroBackground}
//               className="w-full"
//               width={1440}
//               height={1800}
//               alt="hero"
//             />
//           </div>

//           <BackgroundCircles />
//         </div>

//         <CompanyLogos className="hidden relative z-10 mt-20 lg:block" />
//       </div>

//       <BottomLine />
//     </Section>
//   );
// };

const HeroNew = () => {
  return (
    <section className="pt-12 bg-blue-50">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center justify-between">
        <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
            Find your perfect <br />
            <span className="text-teal-500">dream home</span>
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Dictum at tempor commodo ullamcorper. Mauris vitae ultricies leo integer malesuada nunc vel risus commodo.
          </p>
        </div>
        <div className="lg:w-1/2 flex justify-center lg:justify-end">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <img
              src="/path-to-your-image.png" // Make sure to place your image in the public folder or provide the correct path
              alt="Modern house"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 mt-8">
        <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/3">
            <p className="text-2xl font-bold text-gray-800">2,000+</p>
            <p className="text-gray-600">Satisfied and happy clients</p>
          </div>
          <div className="text-center md:text-left mb-4 md:mb-0 md:w-1/3">
            <p className="text-2xl font-bold text-gray-800">57</p>
            <p className="text-gray-600">Professional agents</p>
          </div>
          <div className="text-center md:text-left md:w-1/3">
            <p className="text-2xl font-bold text-gray-800">8,500+</p>
            <p className="text-gray-600">Properties ready for living</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroNew;


// export default Hero;
