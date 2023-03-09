import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className=' w-full h-screen bg-[#f0ecf0] flex justify-center items-center pt-20  '>
        <form method='POST' action="https://getform.io/f/74e1d4da-cf3b-44ad-bdad-6f9075e46e3b" className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-1 '>
                <p className='text-4xl font-bold inline border-b-4 border-[#f17667] text-[#8892b0]'>Contact</p>
                <p className='text-[#8892b0] py-4'>// Submit the form below or shoot me an email. - roa.alisonn@gmail.com</p>
            </div>
            <input className='bg-[#ffffff] text-[#8892b0] p-2' type="text" placeholder='Name' name='name' />
            <input className='my-4 p-2 bg-[#ffffff]' type="email" placeholder='Email' name='email' />
            <textarea className='bg-[#ffffff] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 bg-[#f17667] hover:bg-[#b04e55] hover:border-[#b04e55] px-4 py-3 my-8 mx-auto flex items-center'>Let's Collaborate</button>
        </form>
    </div>
  )
}

export default Contact