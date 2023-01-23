import Image from "next/image"

export default function Loader() {
    return (
        <>
            <div className="w-full h-screen bg-[#0B0B0B] relative">
                <Image
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    src='/logo.png'
                    width='163'
                    height='48'
                />
                <div className="absolute bottom-12 left-10 right-10">
                    <button className="py-4 w-full bg-[#CD5152]/10 rounded">
                        <span className="text-[14px] text-white text-bold">Уншиж байна...</span>
                    </button>
                </div>
            </div>
        </>
    )
}