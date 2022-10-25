import React from 'react';

export default function Tailwind(): React.ReactElement {

  return (
    <>
      {/* <div className="flex"> */}
      <div className="flex dark">
        <div className="flex-auto">
          <div className="m-3 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg flex items-center space-x-4">
            <div className="shrink-0">
              {/* icon from  https://heroicons.com/ */}
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd" />
              </svg>
            </div>
            <div>
              <div className="text-xl font-medium text-black ">ChitChat</div>
              <p className="text-slate-500">You have a new message!</p>
            </div>
          </div>
          <div className="m-3 p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg">
            <div>
              <label className="block">
                <span className="after:content-['*'] after:ml-0.5 after:text-red-500 block text-sm font-medium text-slate-700">Email</span>
                <input type="email" name="email" className="mt-1 px-3 py-2 bg-white border shadow-sm border-slate-300 placeholder-slate-400 focus:outline-none focus:border-sky-500 focus:ring-sky-500 block w-full rounded-md sm:text-sm focus:ring-1" placeholder="you@example.com" />
              </label>
            </div>
            <div>
              <button className='btn'>Bouton</button>
            </div>
          </div>
        </div>
        <div className="flex-auto">
          <div className="bg-white dark:bg-slate-800 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl">
            <div>
              <span className="inline-flex items-center justify-center p-2 bg-indigo-500 rounded-md shadow-lg">
                <svg className="h-6 w-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true"></svg>
              </span>
            </div>
            <h3 className="text-slate-900 dark:text-white mt-5 text-base font-medium tracking-tight">Writes Upside-Down</h3>
            <p className="text-slate-500 dark:text-slate-400 mt-2 text-sm">
    The Zero Gravity Pen can be used to write in any orientation, including upside-down. It even works in outer space.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
