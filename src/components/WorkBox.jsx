import { ShareIcon } from "./svg/ShareIcon"

export const WorkBox = ({ image, title, text, }) => {
    return (
        <div className="flex shadow-md rounded-xl max-w-[1152px] bg-[var(--experience-box)] work-box">
            <div className="p-12 rounded-l-xl bg-[var(--work-box)] border-r border-[var(--zuraas)]">
                {image}
            </div>
            <div className="p-12 rounded-r-xl flex flex-col gap-6 max-w-[576px]">
                <p className="title">{title}</p>
                <p className="content">{text}</p>
                <div className="flex gap-2 flex-wrap self-stretch">
                    <span className="tag">React</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">Typescript</span>
                    <span className="tag">Nest.js</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">Tailwindcss</span>
                    <span className="tag">Figma</span>
                    <span className="tag">Cypress</span>
                    <span className="tag">Storybook</span>
                    <span className="tag">Git</span>
                </div>
                <div className="p-1.5">
                    <ShareIcon />
                </div>
            </div>
        </div>
    )
}

export const WorkBox2 = ({ image, title, text }) => {
    return (
        <div className="flex shadow-md rounded-xl max-w-[1152px] bg-[var(--experience-box)] work-box-reverse">
            <div className="p-12 rounded-r-xl flex flex-col gap-6 max-w-[576px]">
                <p className="title">{title}</p>
                <p className="content">{text}</p>
                <div className="flex gap-2 flex-wrap self-stretch">
                    <span className="tag">React</span>
                    <span className="tag">Next.js</span>
                    <span className="tag">Typescript</span>
                    <span className="tag">Nest.js</span>
                    <span className="tag">PostgreSQL</span>
                    <span className="tag">Tailwindcss</span>
                    <span className="tag">Figma</span>
                    <span className="tag">Cypress</span>
                    <span className="tag">Storybook</span>
                    <span className="tag">Git</span>
                </div>
                <div className="p-1.5">
                    <ShareIcon />
                </div>
            </div>
            <div className="p-12 rounded-r-xl bg-[var(--work-box)] border-l border-[var(--zuraas)]">
                {image}
            </div>
        </div>
    )
}