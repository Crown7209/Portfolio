import { SkillBox } from "./SkillBox";
import {
    JavascriptIcon,
    TypescriptIcon,
    ReactIcon,
    NextjsIcon,
    NodejsIcon,
    ExpressjsIcon,
    NestjsIcon,
    SocketioIcon,
    PostgresqlIcon,
    MongoDBIcon,
    SassIcon,
    TailwindCSSIcon,
    FigmaIcon,
    CypressIcon,
    StorybookIcon,
    GitIcon
} from "./Icons/Icons";


export const Skills = () => {
    return (
        <div className="bg-[var(--background-color)] w-full skills">
            <div className="py-24 max-w-[1280px] m-auto">
                <div className="px-8 flex flex-col gap-12">
                    <div className="flex flex-col gap-4">
                        <div className="flex justify-center">
                            <button className="tag">Skills</button>
                        </div>
                        <div className="flex justify-center">
                            <p className="subheading">The skills, tools and technologies I am really good at:</p>
                        </div>
                    </div>
                    <div className="grid-icon">
                        <SkillBox iconComponent={<JavascriptIcon />} text={"Javascript"} />
                        <SkillBox iconComponent={<TypescriptIcon />} text={"Typescript"} />
                        <SkillBox iconComponent={<ReactIcon />} text={"React"} />
                        <SkillBox iconComponent={<NextjsIcon />} text={"Nextjs"} />
                        <SkillBox iconComponent={<NodejsIcon />} text={"Node.js"} />
                        <SkillBox iconComponent={<ExpressjsIcon />} text={"Express.js"} />
                        <SkillBox iconComponent={<NestjsIcon />} text={"Nest.js"} />
                        <SkillBox iconComponent={<SocketioIcon />} text={"Socket.io"} />
                        <SkillBox iconComponent={<PostgresqlIcon />} text={"PostgreSQL"} />
                        <SkillBox iconComponent={<MongoDBIcon />} text={"MongoDB"} />
                        <SkillBox iconComponent={<SassIcon />} text={"Sass/Scss"} />
                        <SkillBox iconComponent={<TailwindCSSIcon />} text={"TailwindCSS"} />
                        <SkillBox iconComponent={<FigmaIcon />} text={"Figma"} />
                        <SkillBox iconComponent={<CypressIcon />} text={"Cypress"} />
                        <SkillBox iconComponent={<StorybookIcon />} text={"Storybook"} />
                        <SkillBox iconComponent={<GitIcon />} text={"Git"} />
                    </div>
                </div>
            </div>
        </div>
    )
}