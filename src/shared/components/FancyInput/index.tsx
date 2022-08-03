import { BsFillArrowRightCircleFill } from 'react-icons/bs'

export const FancyInput = () => {
  return (
    <div className=" p-3 border border-primary rounded-full w-[500px] relative flex justify-between transition-[flex] duration-300">
      <input className='border-transparent peer focus:border-transparent focus:ring-0 focus:outline-none w-100 flex-1 order-2'
       placeholder='Nhập số điện thoại của bạn' />
      <button className="fancy-button flex items-center p-2 rounded-full bg-primary text-white order-1 peer-focus:order-3 transition-[flex]">
        <span className='button-label pl-3 pr-5'>Submit</span>
        <BsFillArrowRightCircleFill size={40} className="fill-white"/>
      </button>
    </div>
  )
}