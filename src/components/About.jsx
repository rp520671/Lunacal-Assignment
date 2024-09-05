import React from "react";
import "./About.css";
import { useState, useRef, useEffect } from "react";

const AboutCard = () => {
    const [selectedButton, setSelectedButton] = useState(0);

    const handleButtonClick = (index) => {
        setSelectedButton(index);
    };

    const buttonContainerRef = useRef(null);

    useEffect(() => {
        if (buttonContainerRef.current) {
            const buttons = buttonContainerRef.current.children;
            const activeButton = buttons[selectedButton];
            if (activeButton) {
                buttonContainerRef.current.style.setProperty(
                    "--active-left",
                    `${activeButton.offsetLeft}px`
                );
                buttonContainerRef.current.style.setProperty(
                    "--active-width",
                    `${activeButton.offsetWidth}px`
                );
            }
        }
    }, [selectedButton]);

    const renderContent = () => {
        switch (selectedButton) {
            case 0:
                return (
                    <div className="mdoc text-ellipsi ... mb-2 text-[#969696] text-xl leading-6 overflow-auto ">
                        Hello! I&apos;m Rohan Patil,I'm a software developer passionate about building a modern web application that users love.
                        <br />
                        <br />
                        I was born and raised in Navi Mumbai, Maharashtra, & have been Completed my graduation with B.E in Computer Engineering U.G course from Saraswati College of Engineering affilated with Mumbai University ...
                    </div>
                );
            case 1:
                return (
                    <div className="mdoc text-ellipsi ... mb-2 text-[#969696] text-xl leading-6 overflow-auto ">
                        I have over 5 months of experience in Software Development. I started my career as a Trainee Software Developer and quickly moved up the ranks to become a Full Stack Developer . My key skills include Frontend in ReactJS, Nextjs, AngularJs, Backend in NodeJs, Python, databases in MongoDB, MySQL ,servers and system Engineering. 
                        <br />
                        <br />
                        At Teravista.io, I've led frontend development where I have created master and transaction pages in projects and built strong relationships with senior developers. I'm passionate about working with new techniques and achieving goals.
                    </div>
                );
            case 2:
                return (
                    <div className="mdoc text-ellipsi ... mb-2 text-[#969696] text-xl leading-6 overflow-auto ">
                        Here are some recommended for improving frontend page:
                        <ul>
                        <li>To further enhance this page, consider adding animations for the card expansions to create a smoother user experience.</li>
                         <li> also need to incorporate icons or images in the card titles for visual appeal.</li>
                         <li>Lastly, including more detailed descriptions or links in the expanded content can provide users with deeper insights or additional resources.</li> 
                        </ul>
                        <br />
                        
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="bg-[#363C43]  w-full h-[316px] rounded-[18.89px] shadow-[5.67px_5.67px_3.78px_0px_rgba(0,0,0,0.4)] relative">
            <div className="w-[24px] h-[160px] flex flex-col justify-between items-center absolute top-5 left-3">
                {/* SVG Icons */}
            </div>
            <div className="h-full flex flex-col justify-center items-center pt-10 mx-12 gap-10">
                <div ref={buttonContainerRef} className="bg-[#171717] text-[#A3ADB2] about-header w-full h-16 rounded-3xl flex justify-evenly items-center text-lg font-medium ">
                    {["About Me", "Experiences", "Recommended"].map((label, index) => (
                        <button
                            key={index}
                            className={`relative overflow-hidden text-[#969696] w-full py-3 mx-2 rounded-2xl ${selectedButton === index
                                ? "text-white"
                                : "bg-[#171717]"
                                }`}
                            onClick={() => handleButtonClick(index)}
                        >
                            <span
                                className={`absolute inset-0 bg-gradient-to-r ${selectedButton === index
                                    ? "hidden"
                                    : "from-[#272b2b37] to-[#4b525f3c]"
                                    } -translate-x-full ${selectedButton === index
                                        ? "translate-x-0"
                                        : "group-hover:translate-x-0"
                                    } transition-transform duration-500`}
                            ></span>
                            <span className="relative z-10">{label}</span>
                        </button>
                    ))}
                    <div
                        className="absolute left-0 h-10 rounded-2xl shadow-[0px_20px_50px_10px_rgba(1,_0.5,_0.5,_1)] bg-[#3c414a] transition-transform duration-500"
                        style={{
                            width: `var(--active-width)`,
                            transform: `translateX(var(--active-left))`,
                        }}
                    ></div>
                </div>

                {renderContent()}
            </div>
            <div className="absolute right-1 top-32">
                {/* Additional SVG Icons */}
            </div>
        </div>
    );
};

export default AboutCard;
