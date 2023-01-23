import Image from "next/image"

export default function Footer() {
    return (
        <footer>
            <div className="w-full bg-[#1D1D1D] flex flex-col items-center px-6 font-nunito">
                <Image
                    className="mt-11 mb-10"
                    src='/logo-main.png'
                    width='75'
                    height='24'
                />
                <div className="flex gap-4 mb-8">
                    <Image
                        src='/Subtract.png'
                        width='32'
                        height='32'
                    />
                    <Image
                        src='/instagram.png'
                        width='32'
                        height='32'
                    />
                    <Image
                        src='/tik_tok.png'
                        width='32'
                        height='32'
                    />
                    <Image
                        src='/facebook.png'
                        width='32'
                        height='32'
                    />
                </div>
                <p className="text-[#BCBCBC] text-[12px] leading-4 mb-10 text-center">Бүтээгдэхүүний бүх хэсэг оюуны өмчөөр <br /> хамгаалагдсан. <br /><br /> ХАЙБОРГ ХХК ©2023 БҮХ ЭРХ ХУУЛИАР<br /> ХАМГААЛАГДСАН</p>
            </div>
        </footer>
    )
}