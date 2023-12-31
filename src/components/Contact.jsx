import React from 'react'

const Contact = () => {
  return (
    <div id='contact' className='max-w-[1040px] bg-[#252525] m-auto md:pl-20 p-4 py-16'>
      <h1 className='py-4 text-4xl font-bold text-center text-[white]'>Contact</h1>
      <form action="https://getform.io/f/035c0451-6afd-4bf2-b7d7-fd0300a147fc" method='POST' encType="multipart/form-data">
        <div className="grid md:grid-cols-2 gab-4 w-full py-2">
          <div className="flex flex-col">
            <label className='uppercase text-sm text-[white] py-2'>Name</label>
            <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' name="name"/>
          </div>
        </div>
        <div className='flex flex-col'>
          <label className='uppercase text-[white] text-sm py-2'>Phone Number</label>
          <input className='border-2  rounded-lg p-3 flex border-gray-300' type="text" name="phone"/>
        </div>
        <div className="flex flex-col py-2">
          <label className='uppercase text-[white] text-sm py-2'>Email</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="email" name="email"/>
        </div>
        <div className="flex flex-col py-2">
          <label className='uppercase text-[white] text-sm py-2'>Subject</label>
          <input className='border-2 rounded-lg p-3 flex border-gray-300' type="text" name="subject"/>
        </div>
        <div className='flex flex-col py-2'>
          <label className='uppercase text-[white] text-sm py-2'>Message</label>
          <textarea className="border-2 rounded-lg p-3 border-gray-300" rows="10" name="message"></textarea>
        </div>
        <button className='bg-[#330066] text-gray-100 mt-4 w-full p-4 '>
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact