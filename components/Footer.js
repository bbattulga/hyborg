import Image from "next/image"
import Link from "next/link"

export default function Footer() {
    return (
        <footer className="block lg:hidden">
            <div className="w-full bg-[#1D1D1D] flex flex-col items-center px-6 font-nunito">
                <img className="mt-11 mb-10" src={"./Logo1.svg"} />
                <div className="flex gap-4 mb-8">
                    <a href="mailto: hyborgworld@gmail.com" target='_blank'><img src={"./Email.svg"} /></a>
                    <a href="https://www.instagram.com/hyb_org/" target="_blank"><img src={"./Instagram.svg"} /></a>
                    <a href="https://www.tiktok.com/@hyborg.world" target="_blank"><img src={"./Tiktok.svg"} /></a>
                    <a href="https://www.facebook.com/hyb0rg" target="_blank"><img src={"./Facebook.svg"} /></a>
                </div>
                <p className="text-[#BCBCBC] text-[12px] leading-4 mb-10 text-center">Бүтээгдэхүүний бүх хэсэг оюуны өмчөөр <br /> хамгаалагдсан. <br /><br /> ХАЙБОРГ ХХК ©2023 БҮХ ЭРХ ХУУЛИАР<br /> ХАМГААЛАГДСАН</p>
            </div >
        </footer >
    )
}