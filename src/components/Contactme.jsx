import { FigmaIcon } from "./svg/FigmaIcon"
import { CallIcon } from "./svg/CallIcon"
import { CopyIcon } from "./svg/CopyIcon"
import { EmailIcon } from "./svg/EmailIcon"
import { GitHubIcon } from "./svg/GitHubIcon"
import { TwitterIcon } from "./svg/TwitterIcon"

export const Contactme = () => {
    return (
        <div className="bg-[var(--background-color)] w-full contactme" id="contact">
            <div className="py-24 max-w-[1280px] m-auto">
                <div className="px-8 flex flex-col gap-12 items-center">
                    <div className="flex flex-col gap-4 ">
                        <div className="flex justify-center">
                            <button className="tag">Get in touch</button>
                        </div>
                        <div className="flex justify-center max-w-[576px]">
                            <p className="subheading">What’s next? Feel free to reach out to me if you're looking for a developer, have a query, or simply want to connect.</p>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 email">
                        <div className="flex gap-5 items-center justify-center ">
                            <div><EmailIcon /></div>
                            <p className="contact">tom@pinecone.mn</p>
                            <div className="p-1.5"><CopyIcon /></div>
                        </div>
                        <div className="flex gap-5 items-center justify-center">
                            <div><CallIcon /></div>
                            <p className="contact">+976 88112233</p>
                            <div className="p-1.5"><CopyIcon /></div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <p className="content">You may also find me on these platforms!</p>
                        <div className="flex gap-1 justify-center">
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
                </div>
            </div>
        </div>
    )
}