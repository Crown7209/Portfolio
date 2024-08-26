export const SkillBox = ({ iconComponent, text }) => {
    return (
        <div className="flex flex-col gap-2 items-center justify-center">
            {iconComponent}
            <p className="skill-text">{text}</p>
        </div>
    )
}