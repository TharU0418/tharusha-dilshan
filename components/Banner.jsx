'use client';

import { useState, useEffect } from "react";
// import headerImg from "../assets/img/header-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Spline from "@splinetool/react-spline";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2 xl:w-7/12">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline inline-block font-bold tracking-wide px-2 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white border border-white border-opacity-50 text-xl mb-4">Welcome to my Portfolio</span>
                  <h1 className="text-5xl font-bold leading-tight mb-5">{`Hi! I'm Judy`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Web Developer", "Web Designer", "UI/UX Designer" ]'><span className="wrap">{text}</span></span></h1>
                  <p className="text-gray-400 text-lg leading-6 mb-6">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                  <button onClick={() => console.log('connect')} className="flex items-center text-white font-bold text-xl mt-12">
                    Let’s Connect
                  </button>
                </div>}
            </TrackVisibility>
          </div>
          <div className="w-full md:w-1/2 xl:w-5/12 mt-8 md:mt-0">
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  {/* <img src={headerImg} alt="Header Img" className="animate-bounce" /> */}
                  <Spline
            className="spline 
                    md:spline-1024 
                    sm:spline-800 
                    xs:spline-600 
                    xxs:spline-375"
            scene="https://prod.spline.design/ZCJFcd6hmEDt89SB/scene.splinecode" 
            //scene="https://prod.spline.design/CpQVbZ2c-IQ-iwbK/scene.splinecode" 
                />
                </div>}
            </TrackVisibility>
          </div>
        </div>
      </div>
    </section>
  )
}
