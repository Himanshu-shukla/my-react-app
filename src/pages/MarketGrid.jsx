import React from 'react'

function MarketGrid() {
    return (
        <div className="font-inter inline-flex h-[1889px] w-[1088px] resize flex-col items-center gap-y-6 overflow-hidden tracking-[0px]" >
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
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.16675 1.6665C5.02461 1.6665 1.66675 5.02437 1.66675 9.1665C1.66675 13.3086 5.02461 16.6665 9.16675 16.6665C10.9376 16.6665 12.5651 16.0528 13.8482 15.0264L16.9108 18.0891C17.2363 18.4145 17.7639 18.4145 18.0893 18.0891C18.4148 17.7637 18.4148 17.236 18.0893 16.9106L15.0267 13.8479C16.053 12.5649 16.6667 10.9373 16.6667 9.1665C16.6667 5.02437 13.3089 1.6665 9.16675 1.6665ZM3.33341 9.1665C3.33341 5.94484 5.94509 3.33317 9.16675 3.33317C12.3884 3.33317 15.0001 5.94484 15.0001 9.1665C15.0001 12.3882 12.3884 14.9998 9.16675 14.9998C5.94509 14.9998 3.33341 12.3882 3.33341 9.1665Z" fill="#667185"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Search</div>
                    </div>
                  </div>
                </div>
                <div className="flex w-16 items-center justify-end self-stretch pl-3" >
                  <div className="h-14 w-14 rounded-md">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect x="0.75" y="0.75" width="54.5" height="54.5" rx="5.25" fill="white"/><rect x="0.75" y="0.75" width="54.5" height="54.5" rx="5.25" stroke="#2E3A5C" stroke-width="1.5"/><path d="M37.5 20H23.5" stroke="#2E3A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.5 28H23.5" stroke="#2E3A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><path d="M37.5 36H23.5" stroke="#2E3A5C" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 18.75)" fill="#2E3A5C"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 26.75)" fill="#2E3A5C"/><circle cx="1.25" cy="1.25" r="1.25" transform="matrix(-1 0 0 1 20.5 34.75)" fill="#2E3A5C"/></svg>
                  </div>
                </div>
                <div className="flex w-16 items-center justify-end self-stretch pl-3" >
                  <div className="h-14 w-14 rounded-md">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 56 56" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="56" height="56" rx="6" fill="#2E3A5C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M20 27.5C18.6193 27.5 17.5 26.3807 17.5 25V20C17.5 18.6193 18.6193 17.5 20 17.5H25C26.3807 17.5 27.5 18.6193 27.5 20V25C27.5 26.3807 26.3807 27.5 25 27.5H20ZM19.5 25C19.5 25.2761 19.7239 25.5 20 25.5L25 25.5C25.2761 25.5 25.5 25.2761 25.5 25V20C25.5 19.7239 25.2761 19.5 25 19.5L20 19.5C19.7239 19.5 19.5 19.7239 19.5 20L19.5 25Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M17.5 36C17.5 37.3807 18.6193 38.5 20 38.5H25C26.3807 38.5 27.5 37.3807 27.5 36V31C27.5 29.6193 26.3807 28.5 25 28.5H20C18.6193 28.5 17.5 29.6193 17.5 31V36ZM20 36.5C19.7239 36.5 19.5 36.2761 19.5 36L19.5 31C19.5 30.7239 19.7239 30.5 20 30.5H25C25.2761 30.5 25.5 30.7239 25.5 31V36C25.5 36.2761 25.2761 36.5 25 36.5H20Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 36C28.5 37.3807 29.6193 38.5 31 38.5H36C37.3807 38.5 38.5 37.3807 38.5 36V31C38.5 29.6193 37.3807 28.5 36 28.5H31C29.6193 28.5 28.5 29.6193 28.5 31V36ZM31 36.5C30.7239 36.5 30.5 36.2761 30.5 36V31C30.5 30.7239 30.7239 30.5 31 30.5H36C36.2761 30.5 36.5 30.7239 36.5 31V36C36.5 36.2761 36.2761 36.5 36 36.5H31Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M28.5 25C28.5 26.3807 29.6193 27.5 31 27.5H36C37.3807 27.5 38.5 26.3807 38.5 25V20C38.5 18.6193 37.3807 17.5 36 17.5H31C29.6193 17.5 28.5 18.6193 28.5 20V25ZM31 25.5C30.7239 25.5 30.5 25.2761 30.5 25V20C30.5 19.7239 30.7239 19.5 31 19.5L36 19.5C36.2761 19.5 36.5 19.7239 36.5 20V25C36.5 25.2761 36.2761 25.5 36 25.5L31 25.5Z" fill="white"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-center gap-x-9 self-stretch" >
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-44 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="flex-grow self-stretch text-center text-base font-semibold leading-[normal] text-black" >
                      Detox Digital Coin
                    </div>
                    <div className="h-4 w-20 text-left text-xs font-normal leading-[normal] text-slate-600" >
                      United States
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-56 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">PROPC</div>
                      <div className="w-12 self-stretch text-right">
                        $2.03
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $1.34M
                      </div>
                      <div className="w-10 self-stretch text-right">4.5%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-0 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-64 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-48 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      Red Frog Beach Portfolio
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Isla Bastimentos, Bocas del Toro, Panama
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-48 flex-grow items-center justify-between gap-x-28 text-left text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch">$frOGI</div>
                      <div className="h-5 w-5">$1</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">$600K</div>
                      <div className="w-9 self-stretch text-right">7.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-1 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-48 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-28 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      AirBC Premium
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Fort Lauderdale, Florida, USA
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $AirBC
                      </div>
                      <div className="w-8 self-stretch text-right">$1.7</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-20 text-base font-semibold leading-[normal] text-black" >
                      <div className="flex-grow self-stretch text-left">
                        $$244.49K
                      </div>
                      <div className="w-10 self-stretch text-right">6.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-center gap-x-9 self-stretch" >
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-44 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="flex-grow self-stretch text-center text-base font-semibold leading-[normal] text-black" >
                      Detox Digital Coin
                    </div>
                    <div className="h-4 w-20 text-left text-xs font-normal leading-[normal] text-slate-600" >
                      United States
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-56 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">PROPC</div>
                      <div className="w-12 self-stretch text-right">
                        $2.03
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $1.34M
                      </div>
                      <div className="w-10 self-stretch text-right">4.5%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-0 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-64 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-48 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      Red Frog Beach Portfolio
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Isla Bastimentos, Bocas del Toro, Panama
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-48 flex-grow items-center justify-between gap-x-28 text-left text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch">$frOGI</div>
                      <div className="h-5 w-5">$1</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">$600K</div>
                      <div className="w-9 self-stretch text-right">7.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-1 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-48 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-28 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      AirBC Premium
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Fort Lauderdale, Florida, USA
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $AirBC
                      </div>
                      <div className="w-8 self-stretch text-right">$1.7</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-20 text-base font-semibold leading-[normal] text-black" >
                      <div className="flex-grow self-stretch text-left">
                        $$244.49K
                      </div>
                      <div className="w-10 self-stretch text-right">6.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-grow items-center justify-center gap-x-9 self-stretch" >
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-44 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="flex-grow self-stretch text-center text-base font-semibold leading-[normal] text-black" >
                      Detox Digital Coin
                    </div>
                    <div className="h-4 w-20 text-left text-xs font-normal leading-[normal] text-slate-600" >
                      United States
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-56 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">PROPC</div>
                      <div className="w-12 self-stretch text-right">
                        $2.03
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $1.34M
                      </div>
                      <div className="w-10 self-stretch text-right">4.5%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-0 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-64 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-48 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      Red Frog Beach Portfolio
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Isla Bastimentos, Bocas del Toro, Panama
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-48 flex-grow items-center justify-between gap-x-28 text-left text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch">$frOGI</div>
                      <div className="h-5 w-5">$1</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">$600K</div>
                      <div className="w-9 self-stretch text-right">7.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-grow items-center justify-center self-stretch" >
              <div className="flex flex-grow flex-col items-start gap-y-4 self-stretch rounded-xl border border-solid border-gray-300 bg-white pb-5" >
                <div className="bg-image-1 flex-grow self-stretch bg-cover bg-center" />
                <div className="flex h-11 w-48 items-center justify-center leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white px-4" >
                    <div className="w-28 flex-grow text-left text-base font-semibold leading-[normal] text-black" >
                      AirBC Premium
                    </div>
                    <div className="h-4 self-stretch text-center text-xs font-normal leading-[normal] text-slate-600" >
                      Fort Lauderdale, Florida, USA
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-1 leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-24 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Token Name
                      </div>
                      <div className="w-16 self-stretch text-right">
                        Token Price
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-28 text-base font-semibold leading-[normal] text-black" >
                      <div className="w-14 self-stretch text-left">
                        $AirBC
                      </div>
                      <div className="w-8 self-stretch text-right">$1.7</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-20 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="flex-grow self-stretch text-left">
                        24 Hour Change
                      </div>
                      <div className="w-20 self-stretch text-right">
                        Volume (24h)
                      </div>
                    </div>
                    <div className="flex flex-grow items-start justify-between gap-x-28 self-stretch text-right" >
                      <div className="flex w-16 items-center justify-between gap-x-0.5 self-stretch rounded-xl bg-green-50 py-0.5 pl-2 pr-3 text-xs font-medium leading-5 text-green-800" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52868 1.52876C7.78903 1.26841 8.21114 1.26841 8.47149 1.52876L11.1382 4.19543C11.3985 4.45577 11.3985 4.87788 11.1382 5.13823C10.8778 5.39858 10.4557 5.39858 10.1953 5.13823L8.66675 3.60964V14.0002C8.66675 14.3684 8.36827 14.6668 8.00008 14.6668C7.63189 14.6668 7.33341 14.3684 7.33341 14.0002V3.60964L5.80482 5.13823C5.54447 5.39858 5.12236 5.39858 4.86201 5.13823C4.60166 4.87788 4.60166 4.45577 4.86201 4.19543L7.52868 1.52876Z" fill="#036B26"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">45%</div>
                      </div>
                      <div className="h-5 w-16 text-base font-semibold leading-[normal] text-black" >
                        $24.56M
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
                  <div className="flex flex-grow flex-col items-start justify-between gap-y-2 self-stretch bg-white py-2.5 pl-4 pr-20" >
                    <div className="flex h-4 items-center justify-between gap-x-28 self-stretch text-xs font-normal leading-[normal] text-slate-600" >
                      <div className="w-16 self-stretch text-left">
                        Market Cap
                      </div>
                      <div className="flex-grow self-stretch text-right">
                        Projected APR
                      </div>
                    </div>
                    <div className="flex w-52 flex-grow items-center justify-between gap-x-20 text-base font-semibold leading-[normal] text-black" >
                      <div className="flex-grow self-stretch text-left">
                        $$244.49K
                      </div>
                      <div className="w-10 self-stretch text-right">6.2%</div>
                    </div>
                  </div>
                </div>
                <div className="flex h-12 w-80 items-end justify-end pl-4 pt-3.5 text-center text-sm font-semibold leading-5" >
                  <div className="flex flex-grow items-center justify-between gap-x-5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-md bg-slate-700 py-2 px-14 text-white" >
                      <div className="h-5 w-10">Trade</div>
                    </div>
                    <div className="flex flex-grow items-center justify-center self-stretch text-slate-600" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-12" >
                        <div className="h-5 flex-grow">Details</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex h-9 w-72 items-center justify-center gap-x-1 text-center text-sm font-normal leading-5" >
            <div className="h-9 w-9 rounded-md">
              <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="6" fill="#2E3A5C"/><path d="M14.5973 19.1424C13.9933 18.5007 13.9933 17.4996 14.5973 16.8579L20.7264 10.3457C21.0418 10.0105 21.5692 9.99457 21.9044 10.31C22.2395 10.6254 22.2555 11.1528 21.9401 11.488L15.811 18.0002L21.9401 24.5124C22.2555 24.8475 22.2395 25.3749 21.9044 25.6903C21.5692 26.0058 21.0418 25.9898 20.7264 25.6546L14.5973 19.1424Z" fill="white"/></svg>
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
              <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="6" fill="#2E3A5C"/><path d="M21.4025 19.1424C22.0065 18.5007 22.0065 17.4996 21.4025 16.8579L15.2734 10.3457C14.958 10.0105 14.4306 9.99457 14.0955 10.31C13.7603 10.6254 13.7443 11.1528 14.0598 11.488L20.1889 18.0002L14.0598 24.5124C13.7443 24.8475 13.7603 25.3749 14.0955 25.6903C14.4306 26.0058 14.958 25.9898 15.2734 25.6546L21.4025 19.1424Z" fill="white"/></svg>
            </div>
          </div>
        </div>
      );
}

export default MarketGrid