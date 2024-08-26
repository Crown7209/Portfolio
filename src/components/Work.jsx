import { Image1 } from "./Image/Image1"
import { Image2 } from "./Image/Image2"
import { Image3 } from "./Image/Image3"
import { WorkBox, WorkBox2 } from "./WorkBox"

export const Work = () => {
    return (
        <div className="bg-[var(--background-color)] w-full work" id="work">
            <div className="py-24 max-w-[1280px] m-auto">
                <div className="px-8 flex flex-col gap-12 items-center">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center">
                            <button className="tag">Work</button>
                        </div>
                        <div className="flex justify-center">
                            <p className="subheading">Some of the noteworthy projects I have built:</p>
                        </div>
                    </div>
                    <div>
                        <WorkBox image={<Image1 />} title={"UBCab"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} />
                    </div>
                    <div>
                        <WorkBox2 image={<Image2 />} title={"Mentorhub"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} />
                    </div>
                    <div>
                        <WorkBox image={<Image3 />} title={"iToim"} text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec urna ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae."} />
                    </div>
                </div>
            </div>
        </div>
    )
} 