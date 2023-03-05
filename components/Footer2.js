import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from 'react'

export default function Footer2() {

    const [disableSendBtn, setDisableSendBtn] = useState(true);
    const [email, setEmail] = useState('');
    const [emailErr, setEmailErr] = useState('');
    const validEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    const validate = () => {
        !validEmail.test(email) && email !== "" ? setEmailErr('Invalid email') : setEmailErr('')
    }
    const toggleDisable = () => {
        validEmail.test(email) ? setDisableSendBtn(false) : setDisableSendBtn(true)
    }
    const onChangeEmail = (e) => {
        setEmail(e.target.value)
    }

    const submitEmail = async (e) => {
        e.preventDefault();

        setTimeout(() => {
            setEmail('');
        }, 150);

        const form = {
            email,
        }

        const response = await fetch('../api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        })

        const content = await response.json();

    }

    useEffect(() => {
        validate();
        toggleDisable();
    }, [email])

    return (
        <footer className="hidden lg:block">
            <div className="grid grid-cols-2 w-full bg-[#1D1D1D] ">
                <div className="max-w-[500px] mx-auto flex flex-col items-center px-6 font-nunito">
                    <img className="mt-11 mb-10" src={"./Logo1.svg"} />
                    <div className="flex gap-4 mb-8">
                        <a href="mailto: hyborgworld@gmail.com" target='_blank'><img src={"./Email.svg"} /></a>
                        <a href="https://www.instagram.com/hyb_org/" target="_blank"><img src={"./Instagram.svg"} /></a>
                        <a href="https://www.tiktok.com/@hyborg.world" target="_blank"><img src={"./Tiktok.svg"} /></a>
                        <a href="https://www.facebook.com/hyb0rg" target="_blank"><img src={"./Facebook.svg"} /></a>
                    </div>
                    <p className="text-[#BCBCBC] text-[12px] leading-4 mb-10 text-center">Бүтээгдэхүүний бүх хэсэг оюуны өмчөөр <br /> хамгаалагдсан. <br /><br /> ХАЙБОРГ ХХК ©2023 БҮХ ЭРХ ХУУЛИАР<br /> ХАМГААЛАГДСАН</p>
                </div >
                <div className='max-w-[500px] mx-auto bg-[#1D1D1D] rounded-xl p-5 mb-4 lg:mt-6'>
                    <h1 className='text-white text-[24px] leading-7 font-bold mb-4'>New product <br />Waitlist coming soon</h1>
                    <p className='text-[#AAAAAA] text-[14px] leading-4 mb-4'>Бидний шинэ бүтээгдэхүүнүүдийн мэдээллийг цаг алдалгүй авахыг хүсвэл имэйл хаягаа бидэнд үлдээгээрэй.</p>
                    <div>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            value={email}
                            onChange={onChangeEmail}
                            className={`text-white border rounded-2xl py-3 w-full px-4 bg-inherit placeholder-[#3E3E3E] ${!validEmail.test(email) && email !== '' ?
                                'border-red-400' : 'border-[#454545]'
                                }
                                `}
                            placeholder='Имэйл хаяг' />
                        <div className='text-red-400 mt-1'>{emailErr}</div>
                        <button onClick={!disableSendBtn ? submitEmail : null} type='submit' className={`flex justify-center text-white mt-5 gap-3 py-3 w-full duration-150 rounded-2xl ${disableSendBtn
                            ? 'bg-[#CD5152]/30' : 'bg-[#CD5152] active:scale-95'
                            }`}>
                            <span className='text-[16px]'>Илгээх</span>
                        </button>
                    </div>
                </div>
            </div>
        </footer >
    )
}