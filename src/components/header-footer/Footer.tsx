export default function Footer() {
  return (
    <>
   <footer className='w-full h-[50vh] bg-black text-white'>
    <div className='border-b border-white flex justify-between items-center py-10 px-20 font-[font2] text-4xl'>
      <div className=' border-4 rounded-[50px] p-5 hover:border-green-200 hover:text-green-200 transition-all duration-300 cursor-pointer hover:scale-105'>
        Ayush Singh Chouhan
      </div>
      <div className=' border-4 rounded-[50px] p-5 hover:border-green-200 hover:text-green-200 transition-all duration-300 cursor-pointer hover:scale-105'>
        allow me to help you
      </div>
    </div>
    <div>
      <h1>
        contact me: 
      </h1>
      <form action="">
        <div>
          <input type="text" placeholder='name' />
        </div>
        <div>
          <input type="text" placeholder='email' />

        </div>
        <div>
          <textarea name="" id="" placeholder='message'></textarea>
        </div>
        <div>
          <button type='submit'>send</button>
        </div>
      </form>
    </div>
   </footer>
    </>
  )
}
