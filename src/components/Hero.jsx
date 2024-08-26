import { Image4 } from "./Image/Image4"
import { FigmaIcon } from "./svg/FigmaIcon"
import { GitHubIcon } from "./svg/GitHubIcon"
import { LocationIcon } from "./svg/LocationIcon"
import { TwitterIcon } from "./svg/TwitterIcon"
// import { TwitterIcon } from "./svg/TwitterIcon"

export const Hero = () => {
    return (
        <div className="bg-[var(--background-color)] w-full hero">
            <div className="pb-24 pt-[165px] max-w-[1280px] m-auto">
                <div className="px-8 flex justify-between">
                    <div className="max-w-[600px] flex flex-col gap-12">
                        <div className="flex flex-col gap-2">
                            <p className="tom text-6xl font-bold leading-[72px] tracking-[-1.2px] text-[var(--secondary-text-color)] font-text">Hi, I'm Tom 👋</p>
                            <p className="content">I specialize in full stack development, particularly with React.js and Node.js. My main goal is to create exceptional digital experiences that are fast, visually appealing, and accessible to everyone. With over 7 years of experience in web development, I continue to find joy in crafting innovative solutions and designs.</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <div className="flex gap-x-2">
                                <LocationIcon />
                                <p className="content">Ulaanbaatar, Mongolia</p>
                            </div>
                            <div className="flex gap-2">
                                <div className="w-6 h-6 flex justify-center items-center">
                                    <div className="bg-[#10B981] w-2 h-2 rounded-full "></div>
                                </div>
                                <p className="content">Available for new projects</p>
                            </div>
                        </div>
                        <div className="flex">
                            <a href="https://github.com/" className="p-1.5 flex rounded-lg hover:bg-[var(--zuraas)] active:bg-[var(--image-box)]">
                                <GitHubIcon />
                            </a>
                            <a href="https://x.com/" className="p-1.5 flex rounded-lg hover:bg-[var(--zuraas)] active:bg-[var(--image-box)]">
                                <TwitterIcon />
                            </a>
                            <a href="https://www.figma.com/" className="p-1.5 flex rounded-lg hover:bg-[var(--zuraas)] active:bg-[var(--image-box)]">
                                <FigmaIcon />
                            </a>
                        </div>
                    </div>
                    <div className="flex items-center justify-center">
                        <div className="w-[320px] h-[360px] relative image-container-1">
                            <div className="w-[280px] h-[320px] border-8 border-[var(--background-color)] absolute right-0 bottom-0 bg-[var(--image-box)] image-box"></div>
                            <Image4 />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}