import { Image } from "./Image/Image"


export const About = () => {
    return (
        <div className="bg-[var(--background-color-two)] w-full about " id="about">
            <div className="py-24 max-w-[1280px] m-auto">
                <div className="px-8 flex flex-col gap-12">
                    <div className="flex justify-center">
                        <button className="tag">About me</button>
                    </div>
                    <section className="flex gap-12 justify-between">
                        <div className="max-w-[584px] flex justify-center">
                            <div className="w-[440px] h-[520px] relative image-container-2">
                                <div className="w-[400px] h-[480px] absolute left-0 bottom-0 bg-[var(--image-box)] image-box-2 border-[var(--image-border-two)] border-8 "></div>
                                <Image />
                            </div>
                        </div>
                        <div className="max-w-[584px] flex flex-col gap-6 ">
                            <p className="text-3xl font-semibold leading-9 tracking-[-0.6px] text-[var(--secondary-text-color)]">Curious about me? Here you have it:</p>
                            <div className="flex flex-col gap-4">
                                <p className="content">I'm a designer turned full stack developer, passionate about React.js and Node.js. I excel in blending technical and visual aspects to craft exceptional digital products, prioritizing user experience, precise design, and optimized code.</p>
                                <p className="content">Since starting my web development journey in 2015, I've embraced challenges and kept up with the latest tech trends. Now in my early thirties, seven years in, I'm building cutting-edge web apps using Next.js, TypeScript, Nestjs, Tailwindcss, Supabase, and more.</p>
                                <p className="content">With a progressive mindset, I enjoy the entire product development process, from ideation to execution. Off duty, you'll find me on Twitter, tracking startup journeys, or unwinding. Follow me for tech insights and public project updates on Twitter or GitHub.</p>
                                <p className="content">Finally, some quick bits about me.</p>
                                <div className="flex gap-2.5">
                                    <ul className="list-disc list-inside ml-[12px] flex flex-col gap-2.5">
                                        <li className="content">B.E. in Computer Engineering</li>
                                        <li className="content">Full time freelancer</li>
                                    </ul>
                                    <ul className="list-disc list-inside ml-[12px]">
                                        <li className="content">Avid learner</li>
                                    </ul>
                                </div>
                                <p className="content">One last thing, I'm available for freelance work, so feel free to reach out and say hello! I promise I don't bite 😉</p>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        </div>
    )
}

