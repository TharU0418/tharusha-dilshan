import { FaLocationArrow } from "react-icons/fa6";
import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Spline from "@splinetool/react-spline";

const Footer = () => {
  return (
    <footer className="w-full relative" id="contact">
      {/* background grid */}
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <img
          src="images/footer-grid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>

      <div className="flex flex-col items-center">
        <div className="flex flex-col md:flex-row items-center">
          <div className="xl:w-6/12">
            <a href="mailto:tharushadil11@gmail.com">
              <MagicButton
                title="Email Me"
                icon={<FaLocationArrow />}
                position="right"
                className="ml-28"
              />
            </a>
          </div>
          <div className="w-full hidden sm:block">
            <Spline
              className="spline 
                md:spline-824 
                sm:spline-100 
                xs:spline-200 
                xxs:spline-375
                mr-10"
              scene="https://prod.spline.design/ZCJFcd6hmEDt89SB/scene.splinecode"
            />
          </div>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center">
        <p className="md:text-base text-sm md:font-normal font-light">
          <ul>
            <li>Tharusha Dilshan</li>
            <li>0740662095</li>
          </ul>
        </p>

        <div className="flex items-center">
          {socialMedia.map((info) => (
            <div
              key={info.id}
              className="w-10 h-10 mr-2 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <img src={info.img} alt="icons" width={20} height={20} />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
