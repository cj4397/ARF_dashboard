import { useState } from "react";

export function Welcome() {
  const[extended, setExtended] = useState(false);
  return (
    <div className="flex justify-center content-center items-center w-full h-screen">
    <div className="flex flex-col justify-center rounded-md bg-cyan-500 shadow-sm overflow-hidden w-[350px] h-[500px] m-auto">  	
		

			<div className={`${extended? "h-[10%]": "h-[90%]"}  w-full flex flex-col items-center transition-all duration-500`}>
    <button className={`${extended? "text-sm text-blue-600": "text-4xl text-blue-900"} text-center cursor-pointer transition-all duration-500 pt-5 pb-3`} onClick={()=>{setExtended(false)}}> Signup</button>

				{/* <form className={`${extended? "hidden": "h-full"} w-full flex flex-col items-center pt-8`}>
					 <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
					<input type="email" name="email" placeholder="Email" />
					<input type="password" name="pswd" placeholder="Password" />
				</form> */}
				<form className={`${extended? "hidden": "h-full"} bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4`}>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
        Email
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email"/>
    </div>
    <div className="mb-4">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="******************"/>
      <p className="text-red-500 text-xs italic">Please create a password.</p>
    </div>
    <div className="flex items-center justify-between">
      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
        Sign In
      </button>
      <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Forgot Password?
      </a>
    </div>
  </form>
			</div>


			<div className={`${ extended? "h-[90%] rounded-t-[95px]":"h-[15%] rounded-t-[20px]"} flex flex-col items-center bg-blue-800 transition-all duration-500 `}>
    <button type="button" className=  {`${extended? "text-4xl text-cyan-400": "text-sm text-cyan-600"} cursor-pointer h-fit w-fit transition-all duration 500 pt-5`} onClick={()=>{setExtended(true)}}> Login</button>

				<form className={`${ extended? "h-full":"hidden"} flex flex-col items-center pt-8`}>
				<div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="username">
        Username
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="username" type="text" placeholder="Username"/>
    </div>
				<div className="mb-4">
      <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="password">
        Password
      </label>
      <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-300 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Password"/>
    </div>
    <div className="flex items-center justify-between"> 
        <a className="inline-block align-baseline font-bold text-sm text-cyan-600 hover:text-cyan-300" href="#">
        Forgot Password?
      </a>
      </div>
				</form>
			</div>
	</div>
  </div>
  )
}

