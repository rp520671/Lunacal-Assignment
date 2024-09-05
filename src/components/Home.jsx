import AboutCard from "./About";
import Gallery from "./GalleryWidget";

export default function Home() {
    return (
        <div className="w-full h-full flex flex-row gap-8 justify-between">
            <div className="hidden lg:block font-semibold w-1/2 bg-[#616161D1] border border-[#96BEE7] rounded-[27px]">
                
            </div>
            <div className="w-full lg:w-1/2 flex flex-col gap-10">
                <AboutCard />
                <div className="px-14">
                    <div className="bg-custom-gradient rounded-sm w-full px-6 h-[4px] shadow-custom"></div>
                </div>

                <Gallery />
                <div className="px-14">
                    <div className="bg-custom-gradient rounded-sm w-full px-6 h-[4px] shadow-custom"></div>
                </div>
            </div>
        </div>
    );
};
