import React from 'react';
import './Home.css'

const Home = () => {
  return (
    <div className="font-inter inline-flex h-[819px] w-[1088px] resize flex-col items-center gap-y-3 overflow-hidden tracking-[0px]" >
      <div className="flex h-14 items-center justify-center self-stretch text-left text-sm leading-5" >
        <div className="flex flex-grow items-center justify-center self-stretch border border-solid border-gray-200" >
          <div className="flex flex-grow items-end justify-center self-stretch" >
            <div className="flex h-9 w-20 flex-col items-center justify-between gap-y-4 font-medium text-slate-700" >
              <div className="w-14 flex-grow">Gainers</div>
              <div className="h-px self-stretch bg-slate-700" />
            </div>
            <div className="flex h-9 w-20 flex-col items-center justify-between gap-y-4 font-medium text-slate-700" >
              <div className="w-11 flex-grow">Losers</div>
              <div className="h-px self-stretch bg-gray-200" />
            </div>
            <div className="flex h-9 w-28 flex-col items-center justify-between gap-y-4 font-medium text-slate-700" >
              <div className="w-20 flex-grow">New Listings</div>
              <div className="h-px self-stretch bg-gray-200" />
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch pl-96 font-normal text-slate-400" >
              <div className="flex flex-grow items-center self-stretch rounded-md border border-solid border-gray-300 bg-white py-4 pl-4 pr-40" >
                <div className="flex h-5 flex-grow items-center justify-between gap-x-2" >
                  <div className="h-5 w-5">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16663 1.6665C5.02449 1.6665 1.66663 5.02437 1.66663 9.1665C1.66663 13.3086 5.02449 16.6665 9.16663 16.6665C10.9375 16.6665 12.565 16.0528 13.848 15.0264L16.9107 18.0891C17.2361 18.4145 17.7638 18.4145 18.0892 18.0891C18.4147 17.7637 18.4147 17.236 18.0892 16.9106L15.0265 13.8479C16.0529 12.5649 16.6666 10.9373 16.6666 9.1665C16.6666 5.02437 13.3088 1.6665 9.16663 1.6665ZM3.33329 9.1665C3.33329 5.94484 5.94497 3.33317 9.16663 3.33317C12.3883 3.33317 15 5.94484 15 9.1665C15 12.3882 12.3883 14.9998 9.16663 14.9998C5.94497 14.9998 3.33329 12.3882 3.33329 9.1665Z" fill="#667185"/></svg>
                  </div>
                  <div className="flex-grow self-stretch">Search</div>
                </div>
              </div>
            </div>
            <div className="flex w-16 items-center justify-end self-stretch pl-3" >
              <div className="h-14 w-14 rounded-md">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="6" fill="#2E3A5C"/><path d="M37.5 20H23.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.5 28H23.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.5 36H23.5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 18.75)" fill="white"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 26.75)" fill="white"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 34.75)" fill="white"/></svg>
              </div>
            </div>
            <div className="flex w-16 items-center justify-end self-stretch pl-3" >
              <div className="h-14 w-14 rounded-md">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="54.5" height="54.5" rx="5.25" fill="white"/><rect x="0.75" y="0.75" width="54.5" height="54.5" rx="5.25" stroke="#2E3A5C" stroke-width="1.5"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 27.5C18.6193 27.5 17.5 26.3807 17.5 25V20C17.5 18.6193 18.6193 17.5 20 17.5H25C26.3807 17.5 27.5 18.6193 27.5 20V25C27.5 26.3807 26.3807 27.5 25 27.5H20ZM19.5 25C19.5 25.2761 19.7239 25.5 20 25.5L25 25.5C25.2761 25.5 25.5 25.2761 25.5 25V20C25.5 19.7239 25.2761 19.5 25 19.5L20 19.5C19.7239 19.5 19.5 19.7239 19.5 20L19.5 25Z" fill="#2E3A5C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 36C17.5 37.3807 18.6193 38.5 20 38.5H25C26.3807 38.5 27.5 37.3807 27.5 36V31C27.5 29.6193 26.3807 28.5 25 28.5H20C18.6193 28.5 17.5 29.6193 17.5 31V36ZM20 36.5C19.7239 36.5 19.5 36.2761 19.5 36L19.5 31C19.5 30.7239 19.7239 30.5 20 30.5H25C25.2761 30.5 25.5 30.7239 25.5 31V36C25.5 36.2761 25.2761 36.5 25 36.5H20Z" fill="#2E3A5C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 36C28.5 37.3807 29.6193 38.5 31 38.5H36C37.3807 38.5 38.5 37.3807 38.5 36V31C38.5 29.6193 37.3807 28.5 36 28.5H31C29.6193 28.5 28.5 29.6193 28.5 31V36ZM31 36.5C30.7239 36.5 30.5 36.2761 30.5 36V31C30.5 30.7239 30.7239 30.5 31 30.5H36C36.2761 30.5 36.5 30.7239 36.5 31V36C36.5 36.2761 36.2761 36.5 36 36.5H31Z" fill="#2E3A5C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 25C28.5 26.3807 29.6193 27.5 31 27.5H36C37.3807 27.5 38.5 26.3807 38.5 25V20C38.5 18.6193 37.3807 17.5 36 17.5H31C29.6193 17.5 28.5 18.6193 28.5 20V25ZM31 25.5C30.7239 25.5 30.5 25.2761 30.5 25V20C30.5 19.7239 30.7239 19.5 31 19.5L36 19.5C36.2761 19.5 36.5 19.7239 36.5 20V25C36.5 25.2761 36.2761 25.5 36 25.5L31 25.5Z" fill="#2E3A5C"/></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-grow items-center justify-center self-stretch" >
        <div className="flex flex-grow flex-col items-center justify-center self-stretch rounded-xl border border-solid border-gray-200" >
          <div className="flex h-11 items-center justify-center self-stretch text-left text-xs font-medium leading-normal text-slate-700" >
            <div className="flex w-56 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6" >
              <div className="h-4 flex-grow">Name</div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                <div className="flex-grow self-stretch">Price</div>
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5893 2.74408C10.433 2.5878 10.221 2.5 10 2.5C9.77901 2.5 9.56704 2.5878 9.41076 2.74408L4.41076 7.74408C4.08533 8.06952 4.08533 8.59715 4.41076 8.92259C4.7362 9.24803 5.26384 9.24803 5.58928 8.92259L10 4.51184L14.4108 8.92259C14.7362 9.24803 15.2638 9.24803 15.5893 8.92259C15.9147 8.59715 15.9147 8.06952 15.5893 7.74408L10.5893 2.74408Z" fill="#667185"/><path d="M10.5893 18.0893C10.433 18.2455 10.221 18.3333 10 18.3333C9.77901 18.3333 9.56704 18.2455 9.41076 18.0893L4.41076 13.0893C4.08533 12.7638 4.08533 12.2362 4.41076 11.9107C4.7362 11.5853 5.26384 11.5853 5.58928 11.9107L10 16.3215L14.4108 11.9107C14.7362 11.5853 15.2638 11.5853 15.5893 11.9107C15.9147 12.2362 15.9147 12.7638 15.5893 13.0893L10.5893 18.0893Z" fill="#667185"/></svg>
                </div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                <div className="flex-grow self-stretch">24h change</div>
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5892 2.74408C10.4329 2.5878 10.221 2.5 9.99996 2.5C9.77895 2.5 9.56698 2.5878 9.4107 2.74408L4.4107 7.74408C4.08527 8.06952 4.08527 8.59715 4.4107 8.92259C4.73614 9.24803 5.26378 9.24803 5.58921 8.92259L9.99996 4.51184L14.4107 8.92259C14.7361 9.24803 15.2638 9.24803 15.5892 8.92259C15.9147 8.59715 15.9147 8.06952 15.5892 7.74408L10.5892 2.74408Z" fill="#667185"/><path d="M10.5892 18.0893C10.4329 18.2455 10.221 18.3333 9.99996 18.3333C9.77895 18.3333 9.56698 18.2455 9.4107 18.0893L4.4107 13.0893C4.08527 12.7638 4.08527 12.2362 4.4107 11.9107C4.73614 11.5853 5.26378 11.5853 5.58921 11.9107L9.99996 16.3215L14.4107 11.9107C14.7361 11.5853 15.2638 11.5853 15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0893L10.5892 18.0893Z" fill="#667185"/></svg>
                </div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                <div className="flex-grow self-stretch">Volume (24h)</div>
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5892 2.74408C10.4329 2.5878 10.221 2.5 9.99996 2.5C9.77895 2.5 9.56698 2.5878 9.4107 2.74408L4.4107 7.74408C4.08527 8.06952 4.08527 8.59715 4.4107 8.92259C4.73614 9.24803 5.26378 9.24803 5.58921 8.92259L9.99996 4.51184L14.4107 8.92259C14.7361 9.24803 15.2638 9.24803 15.5892 8.92259C15.9147 8.59715 15.9147 8.06952 15.5892 7.74408L10.5892 2.74408Z" fill="#667185"/><path d="M10.5892 18.0893C10.4329 18.2455 10.221 18.3333 9.99996 18.3333C9.77895 18.3333 9.56698 18.2455 9.4107 18.0893L4.4107 13.0893C4.08527 12.7638 4.08527 12.2362 4.4107 11.9107C4.73614 11.5853 5.26378 11.5853 5.58921 11.9107L9.99996 16.3215L14.4107 11.9107C14.7361 11.5853 15.2638 11.5853 15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0893L10.5892 18.0893Z" fill="#667185"/></svg>
                </div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                <div className="flex-grow self-stretch">Market Cap</div>
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5892 2.74408C10.4329 2.5878 10.221 2.5 9.99996 2.5C9.77895 2.5 9.56698 2.5878 9.4107 2.74408L4.4107 7.74408C4.08527 8.06952 4.08527 8.59715 4.4107 8.92259C4.73614 9.24803 5.26378 9.24803 5.58921 8.92259L9.99996 4.51184L14.4107 8.92259C14.7361 9.24803 15.2638 9.24803 15.5892 8.92259C15.9147 8.59715 15.9147 8.06952 15.5892 7.74408L10.5892 2.74408Z" fill="#667185"/><path d="M10.5892 18.0893C10.4329 18.2455 10.221 18.3333 9.99996 18.3333C9.77895 18.3333 9.56698 18.2455 9.4107 18.0893L4.4107 13.0893C4.08527 12.7638 4.08527 12.2362 4.4107 11.9107C4.73614 11.5853 5.26378 11.5853 5.58921 11.9107L9.99996 16.3215L14.4107 11.9107C14.7361 11.5853 15.2638 11.5853 15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0893L10.5892 18.0893Z" fill="#667185"/></svg>
                </div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6" >
              <div className="h-4 flex-grow">24H Trend</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6" >
              <div className="h-4 flex-grow">Action</div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-green-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52862 1.52876C7.78896 1.26841 8.21108 1.26841 8.47142 1.52876L11.1381 4.19543C11.3984 4.45577 11.3984 4.87788 11.1381 5.13823C10.8777 5.39858 10.4556 5.39858 10.1953 5.13823L8.66669 3.60964V14.0002C8.66669 14.3684 8.36821 14.6668 8.00002 14.6668C7.63183 14.6668 7.33335 14.3684 7.33335 14.0002V3.60964L5.80476 5.13823C5.54441 5.39858 5.1223 5.39858 4.86195 5.13823C4.6016 4.87788 4.6016 4.45577 4.86195 4.19543L7.52862 1.52876Z" fill="#036B26"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$27.53B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_11193)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_11193" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_11193"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_11193" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-green-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52862 1.52876C7.78896 1.26841 8.21108 1.26841 8.47142 1.52876L11.1381 4.19543C11.3984 4.45577 11.3984 4.87788 11.1381 5.13823C10.8777 5.39858 10.4556 5.39858 10.1953 5.13823L8.66669 3.60964V14.0002C8.66669 14.3684 8.36821 14.6668 8.00002 14.6668C7.63183 14.6668 7.33335 14.3684 7.33335 14.0002V3.60964L5.80476 5.13823C5.54441 5.39858 5.1223 5.39858 4.86195 5.13823C4.6016 4.87788 4.6016 4.45577 4.86195 4.19543L7.52862 1.52876Z" fill="#036B26"/></svg>
                </div>
                <div className="flex-grow self-stretch">00%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$90.40B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_10695)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_10695" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_10695"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_10695" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-green-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52862 1.52876C7.78896 1.26841 8.21108 1.26841 8.47142 1.52876L11.1381 4.19543C11.3984 4.45577 11.3984 4.87788 11.1381 5.13823C10.8777 5.39858 10.4556 5.39858 10.1953 5.13823L8.66669 3.60964V14.0002C8.66669 14.3684 8.36821 14.6668 8.00002 14.6668C7.63183 14.6668 7.33335 14.3684 7.33335 14.0002V3.60964L5.80476 5.13823C5.54441 5.39858 5.1223 5.39858 4.86195 5.13823C4.6016 4.87788 4.6016 4.45577 4.86195 4.19543L7.52862 1.52876Z" fill="#036B26"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$73.99B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_10709)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_10709" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_10709"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_10709" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-green-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52862 1.52876C7.78896 1.26841 8.21108 1.26841 8.47142 1.52876L11.1381 4.19543C11.3984 4.45577 11.3984 4.87788 11.1381 5.13823C10.8777 5.39858 10.4556 5.39858 10.1953 5.13823L8.66669 3.60964V14.0002C8.66669 14.3684 8.36821 14.6668 8.00002 14.6668C7.63183 14.6668 7.33335 14.3684 7.33335 14.0002V3.60964L5.80476 5.13823C5.54441 5.39858 5.1223 5.39858 4.86195 5.13823C4.6016 4.87788 4.6016 4.45577 4.86195 4.19543L7.52862 1.52876Z" fill="#036B26"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$37.00B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_5845)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_5845" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_5845"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_5845" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-green-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52862 1.52876C7.78896 1.26841 8.21108 1.26841 8.47142 1.52876L11.1381 4.19543C11.3984 4.45577 11.3984 4.87788 11.1381 5.13823C10.8777 5.39858 10.4556 5.39858 10.1953 5.13823L8.66669 3.60964V14.0002C8.66669 14.3684 8.36821 14.6668 8.00002 14.6668C7.63183 14.6668 7.33335 14.3684 7.33335 14.0002V3.60964L5.80476 5.13823C5.54441 5.39858 5.1223 5.39858 4.86195 5.13823C4.6016 4.87788 4.6016 4.45577 4.86195 4.19543L7.52862 1.52876Z" fill="#036B26"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.51B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_6295)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_6295" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_6295"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_6295" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-red-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-rose-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1381 11.8049L8.47142 14.4716C8.21108 14.7319 7.78896 14.7319 7.52862 14.4716L4.86195 11.8049C4.6016 11.5446 4.6016 11.1224 4.86195 10.8621C5.1223 10.6017 5.54441 10.6017 5.80476 10.8621L7.33335 12.3907V2.00016C7.33335 1.63197 7.63183 1.3335 8.00002 1.3335C8.36821 1.3335 8.66669 1.63197 8.66669 2.00016V12.3907L10.1953 10.8621C10.4556 10.6017 10.8777 10.6017 11.1381 10.8621C11.3984 11.1224 11.3984 11.5446 11.1381 11.8049Z" fill="#9E0A05"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.51B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_6309)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_6309" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_6309"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_6309" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-red-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-rose-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1381 11.8049L8.47142 14.4716C8.21108 14.7319 7.78896 14.7319 7.52862 14.4716L4.86195 11.8049C4.6016 11.5446 4.6016 11.1224 4.86195 10.8621C5.1223 10.6017 5.54441 10.6017 5.80476 10.8621L7.33335 12.3907V2.00016C7.33335 1.63197 7.63183 1.3335 8.00002 1.3335C8.36821 1.3335 8.66669 1.63197 8.66669 2.00016V12.3907L10.1953 10.8621C10.4556 10.6017 10.8777 10.6017 11.1381 10.8621C11.3984 11.1224 11.3984 11.5446 11.1381 11.8049Z" fill="#9E0A05"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.51B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_10724)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_10724" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_10724"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_10724" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-red-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-rose-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1381 11.8049L8.47142 14.4716C8.21108 14.7319 7.78896 14.7319 7.52862 14.4716L4.86195 11.8049C4.6016 11.5446 4.6016 11.1224 4.86195 10.8621C5.1223 10.6017 5.54441 10.6017 5.80476 10.8621L7.33335 12.3907V2.00016C7.33335 1.63197 7.63183 1.3335 8.00002 1.3335C8.36821 1.3335 8.66669 1.63197 8.66669 2.00016V12.3907L10.1953 10.8621C10.4556 10.6017 10.8777 10.6017 11.1381 10.8621C11.3984 11.1224 11.3984 11.5446 11.1381 11.8049Z" fill="#9E0A05"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.51B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_2046)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_2046" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_2046"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_2046" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
            <div className="flex w-56 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
              <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                <div className="h-5 w-5">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1476 2.4322C11.1562 0.855933 8.84315 0.855932 7.85173 2.4322L6.24434 4.98782C6.12676 5.17475 5.93821 5.31146 5.7168 5.36551L2.76136 6.08697C0.946565 6.52999 0.212652 8.71814 1.43333 10.1497L3.39535 12.4506C3.53936 12.6195 3.60963 12.8354 3.59379 13.0523L3.37462 16.0538C3.2379 17.9262 5.12812 19.2565 6.85065 18.5641L9.67064 17.4305C9.88145 17.3458 10.1179 17.3458 10.3287 17.4305L13.1487 18.5641C14.8713 19.2565 16.7615 17.9262 16.6248 16.0538L16.4056 13.0523C16.3898 12.8354 16.46 12.6195 16.604 12.4506L18.566 10.1497C19.7867 8.71815 19.0528 6.52999 17.238 6.08697L14.2826 5.36551C14.0612 5.31146 13.8726 5.17475 13.755 4.98782L12.1476 2.4322ZM9.26254 3.31955C9.60041 2.78237 10.399 2.78237 10.7368 3.31955L12.3442 5.87517C12.6944 6.43184 13.2488 6.82876 13.8873 6.98463L16.8428 7.7061C17.4721 7.85972 17.6997 8.59697 17.2978 9.06826L15.3358 11.3692C14.9089 11.8698 14.6954 12.5173 14.7433 13.1737L14.9625 16.1752C15.0071 16.7851 14.3799 17.2627 13.7704 17.0177L10.9504 15.8841C10.3406 15.639 9.65873 15.639 9.04902 15.8841L6.22903 17.0177C5.61948 17.2627 4.99233 16.7851 5.03686 16.1752L5.25603 13.1737C5.30396 12.5173 5.09043 11.8698 4.66356 11.3692L2.70153 9.06826C2.29966 8.59697 2.52729 7.85972 3.15661 7.7061L6.11205 6.98463C6.75059 6.82876 7.30502 6.43184 7.65515 5.87517L9.26254 3.31955Z" fill="#D0D5DD"/></svg>
                </div>
                <div className="flex flex-grow flex-col items-center justify-center self-stretch" >
                  <div className="flex-grow self-stretch font-medium text-gray-900" >
                    PROPC
                  </div>
                  <div className="flex-grow self-stretch font-normal text-slate-600" >
                    Propchain
                  </div>
                </div>
              </div>
            </div>
            <div className="flex w-32 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$2.03</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-6 pl-6 pr-14 text-right font-medium text-red-800" >
              <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-rose-50 py-0.5 pl-2 pr-3" >
                <div className="h-4 w-4">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.1381 11.8049L8.47142 14.4716C8.21108 14.7319 7.78896 14.7319 7.52862 14.4716L4.86195 11.8049C4.6016 11.5446 4.6016 11.1224 4.86195 10.8621C5.1223 10.6017 5.54441 10.6017 5.80476 10.8621L7.33335 12.3907V2.00016C7.33335 1.63197 7.63183 1.3335 8.00002 1.3335C8.36821 1.3335 8.66669 1.63197 8.66669 2.00016V12.3907L10.1953 10.8621C10.4556 10.6017 10.8777 10.6017 11.1381 10.8621C11.3984 11.1224 11.3984 11.5446 11.1381 11.8049Z" fill="#9E0A05"/></svg>
                </div>
                <div className="flex-grow self-stretch">45%</div>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.56M</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
              <div className="h-5 flex-grow">$24.51B</div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch" >
              <div className="h-20 w-36">
                <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_734_10218)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_734_10218" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_734_10218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_734_10218" result="shape"/></filter></defs></svg>
              </div>
            </div>
            <div className="flex w-36 items-center justify-center self-stretch bg-white py-7 pl-6 pr-9 font-semibold" >
              <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                <div className="flex-grow self-stretch text-left text-slate-700" >
                  Trade
                </div>
                <div className="flex-grow self-stretch text-right text-slate-400" >
                  Detail
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-px items-center justify-center self-stretch">
            <div className="w-56 self-stretch bg-gray-200" />
            <div className="w-32 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
            <div className="w-36 self-stretch bg-gray-200" />
          </div>
          <div className="h-px self-stretch bg-gray-100" />
        </div>
      </div>
      <div className="flex h-9 w-72 items-center justify-center gap-x-1 text-center text-sm font-normal leading-5" >
        <div className="h-9 w-9 rounded-md">
          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="6" fill="#2E3A5C"/><path d="M14.5974 19.1424C13.9934 18.5007 13.9934 17.4996 14.5974 16.8579L20.7265 10.3457C21.042 10.0105 21.5694 9.99457 21.9045 10.31C22.2397 10.6254 22.2556 11.1528 21.9402 11.488L15.8111 18.0002L21.9402 24.5124C22.2556 24.8475 22.2396 25.3749 21.9045 25.6903C21.5694 26.0058 21.042 25.9898 20.7265 25.6546L14.5974 19.1424Z" fill="white"/></svg>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white py-0.5 px-2 text-slate-400" >
          <div className="w-2 self-stretch">1</div>
        </div>
        <div className="h-6 w-6 rounded-md bg-white py-0.5 px-2 text-slate-400" >
          2
        </div>
        <div className="flex h-6 w-6 items-center justify-center text-black">
          <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-slate-700 bg-white py-px px-1.5" >
            <div className="flex-grow self-stretch">3</div>
          </div>
        </div>
        <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white py-2 px-1.5 text-slate-400" >
          <div className="flex h-2.5 flex-grow items-center justify-center">
            <div className="flex h-2.5 w-3 items-center justify-center">
              ...
            </div>
          </div>
        </div>
        <div className="h-6 w-6 rounded-md bg-white py-0.5 px-1 text-slate-400" >
          12
        </div>
        <div className="h-6 w-6 rounded-md bg-white py-0.5 px-1 text-slate-400" >
          13
        </div>
        <div className="h-6 w-6 rounded-md bg-white py-0.5 px-1 text-slate-400" >
          14
        </div>
        <div className="h-9 w-9 rounded-md">
          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="6" fill="#2E3A5C"/><path d="M21.4027 19.1424C22.0067 18.5007 22.0067 17.4996 21.4027 16.8579L15.2735 10.3457C14.9581 10.0105 14.4307 9.99457 14.0956 10.31C13.7604 10.6254 13.7444 11.1528 14.0599 11.488L20.189 18.0002L14.0599 24.5124C13.7444 24.8475 13.7604 25.3749 14.0956 25.6903C14.4307 26.0058 14.9581 25.9898 15.2735 25.6546L21.4027 19.1424Z" fill="white"/></svg>
        </div>
      </div>
    </div>
  );
};

export default Home;