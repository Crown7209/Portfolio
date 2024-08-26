import { FooterIcon } from "./svg/FooterIcon"

export const Footer = () => {
    return (
        <div className="bg-[var(--background-color-two)]  w-full footer">
            <div className="py-6 max-w-[1280px] m-auto">
                <div className="px-8 flex justify-center items-center gap-2">
                    <FooterIcon />
                    <p className="footer-text">2024 | Greetings with ❤️️ from Ulaanbaatar</p>
                </div>
            </div>
        </div>
    )
}
