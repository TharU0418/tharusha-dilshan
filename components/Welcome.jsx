'use client';
import React, { useEffect, useState, useCallback } from 'react';
import { Spotlight } from './ui/Spotlight';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Image from 'next/image';
import headerImg from "../public/images/ME2.png";

function Welcome() {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Tharusha Dilshan"];
  const period = 1000;

  const tick = useCallback(() => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  }, [loopNum, isDeleting, text.length, toRotate, period]);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [tick, delta]);

  return (
    <div className="pb-10 pt-16">
      <Spotlight className="-top-40 -left-10 md:-left-32 md:-top-20 h-screen fixed" fill="white" />
      <Spotlight className="h-[120vh] w-[50vw] top-10 left-full fixed" fill="#c084fc" />
      <Spotlight className="left-80 top-28 h-[80vh] w-[50vw]" fill="#4f46e5" />
      <Spotlight className="right-60 bottom-1 h-[50vh] w-[80vw] fixed" fill="#e879f9" />

      <section className="banner" id="home">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="w-full md:w-1/2 xl:w-8/12">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                    <span className="tagline inline-block font-bold tracking-wide px-2 py-1 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white border border-white border-opacity-50 text-2xl mb-">WELCOME</span>
                    <h1 className="text-6xl font-bold leading-tight mb-5 mt-8">{`Hi! I'm`} <span className="txt-rotate" dataPeriod="1000" data-rotate='[ "Tharusha Dilshan" ]'><span className="wrap">{text}</span></span></h1>
                    <p className="text-gray-400 text-lg leading-6 mb-8">
                      I am a motivated and talented software engineering undergraduate with a strong
                      passion for technology and a commitment to gaining practical experience in the field.
                      I'm excited to use my skills and motivation to advance the technology industry.
                    </p>
                  </div>}
              </TrackVisibility>
            </div>
            <div className="w-full md:w-1/2 xl:w-5/12 mt-10 md:mt-0">
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <Image src={headerImg} alt="Header Img" />
                  </div>}
              </TrackVisibility>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Welcome;
