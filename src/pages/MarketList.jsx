import React from 'react'
import NavigationBar from '../components/NavigationBar';

function MarketList() {
    return (
      <>
          <NavigationBar />
        <div className="font-inter inline-flex h-[1028px] w-[1440px] resize flex-row overflow-hidden tracking-[0px]" >
          <div className="flex h-full w-full items-start overflow-clip bg-gray-50" >
            <div className="relative mr-0 flex flex-grow items-center justify-end self-stretch pb-36 pl-80 pr-10 pt-28" >
              <div className="absolute right-0 top-1 flex h-16 w-[1168px] items-center justify-center" >
                <div className="flex flex-grow items-end justify-center self-stretch bg-white pb-4 pl-10 pr-11 pt-5" >
                  <div className="flex h-9 flex-grow items-center justify-center">
                    <div className="h-6 w-5 pb-1">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.41072 12.4664C4.08529 12.7918 4.08529 13.3195 4.41072 13.6449C4.73616 13.9703 5.2638 13.9703 5.58923 13.6449L8.38979 10.8443L9.47287 11.7289C9.8132 12.0068 10.3109 11.9727 10.6101 11.651L13.3357 8.72103L14.392 9.84781C14.7068 10.1836 15.2342 10.2006 15.5699 9.8858C15.9057 9.57103 15.9227 9.04366 15.6079 8.7079L13.9413 6.93013C13.7833 6.76167 13.5626 6.6663 13.3317 6.66674C13.1008 6.66719 12.8804 6.76343 12.7232 6.93249L9.92196 9.94378L8.86042 9.07686C8.52905 8.80623 8.04658 8.83052 7.74406 9.13304L4.41072 12.4664Z" fill="#2E3A5C"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16665 2.5C2.3257 2.5 0.833313 3.99239 0.833313 5.83333V14.1667C0.833313 16.0076 2.3257 17.5 4.16665 17.5H15.8333C17.6743 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99239 17.6743 2.5 15.8333 2.5H4.16665ZM2.49998 5.83333C2.49998 4.91286 3.24617 4.16667 4.16665 4.16667H15.8333C16.7538 4.16667 17.5 4.91286 17.5 5.83333V14.1667C17.5 15.0871 16.7538 15.8333 15.8333 15.8333H4.16665C3.24617 15.8333 2.49998 15.0871 2.49998 14.1667V5.83333Z" fill="#2E3A5C"/></svg>
                    </div>
                    <div className="h-6 w-12 pl-1 pb-1 text-left text-sm font-medium leading-5 text-slate-700" >
                      Market
                    </div>
                    <div className="h-6 w-5 pb-1 text-left text-sm font-medium leading-5 text-slate-400" >
                      /
                    </div>
                    <div className="ml-96 flex w-24 flex-grow items-center justify-center self-stretch text-center text-sm font-semibold leading-normal text-slate-500" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-200 bg-white py-2 px-3" >
                        <div className="flex h-5 flex-grow items-center justify-center gap-x-1" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_313_3264)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 8.00005H15.9997C15.9997 7.27799 15.9034 6.57849 15.7241 5.91309H7.65186V8.00005Z" fill="#D80027"/><path d="M7.65186 3.82574H14.8255C14.3358 3.02661 13.7096 2.32027 12.9795 1.73877H7.65186V3.82574Z" fill="#D80027"/><path d="M7.99977 15.9999C9.88255 15.9999 11.6131 15.3491 12.9796 14.2607H3.0199C4.38646 15.3491 6.11699 15.9999 7.99977 15.9999Z" fill="#D80027"/><path d="M1.17398 12.1734H14.8256C15.2188 11.5319 15.5237 10.8306 15.7242 10.0864H0.275391C0.475922 10.8306 0.780828 11.5319 1.17398 12.1734Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_313_3264"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                          </div>
                          <div className="flex-grow self-stretch pl-1">
                            ENG
                          </div>
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92259 11.4226C8.76631 11.5789 8.55435 11.6667 8.33333 11.6667C8.11232 11.6667 7.90036 11.5789 7.74408 11.4226L2.74408 6.42259C2.41864 6.09715 2.41864 5.56951 2.74408 5.24408C3.06951 4.91864 3.59715 4.91864 3.92259 5.24408L8.33333 9.65482L12.7441 5.24408C13.0695 4.91864 13.5972 4.91864 13.9226 5.24408C14.248 5.56951 14.248 6.09715 13.9226 6.42259L8.92259 11.4226Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-8 w-8 items-center justify-end pl-8">
                      <div className="flex w-0 items-center justify-center self-stretch" >
                        <div className="h-8 w-0">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 0 32" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1 0V32" stroke="#E4E7EC"/></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-16 items-center justify-center self-stretch pl-8 pb-0.5 text-center text-[10px] font-semibold leading-[normal] text-white" >
                      <div className="flex h-8 w-8 flex-col items-end justify-center pr-0.5" >
                        <div className="flex w-3.5 flex-grow items-center justify-center" >
                          <div className="-mr-0.5 h-4 w-4 rounded-full bg-slate-700 py-0.5 px-1" >
                            4
                          </div>
                        </div>
                        <div className="flex h-3.5 items-end justify-center self-stretch" >
                          <div className="h-7 w-7">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1668 3.50016C15.1668 2.85583 14.6444 2.3335 14.0001 2.3335C13.3558 2.3335 12.8334 2.85583 12.8334 3.50016V5.25016C12.8334 5.28252 12.8348 5.31457 12.8373 5.34626C9.52476 5.89986 7.00011 8.77903 7.00011 12.2489V16.9168C7.00011 17.5004 6.52165 18.5124 5.99805 19.4451C5.26127 20.7576 5.3962 22.34 6.80283 22.8755C8.21756 23.4142 10.4806 23.9168 14.0001 23.9168C17.5196 23.9168 19.7827 23.4142 21.1974 22.8755C22.604 22.34 22.7389 20.7576 22.0022 19.4451C21.4786 18.5124 21.0001 17.5004 21.0001 16.9168V12.2494C21.0001 8.77958 18.4755 5.89997 15.1629 5.34627C15.1655 5.31458 15.1668 5.28252 15.1668 5.25016V3.50016Z" fill="#667185"/><path d="M10.4069 24.8788C10.4504 24.9168 10.503 24.9612 10.5643 25.0102C10.7396 25.1505 10.9901 25.3323 11.3067 25.5132C11.935 25.8722 12.8641 26.2502 14.0001 26.2502C15.1362 26.2502 16.0652 25.8722 16.6935 25.5132C17.0101 25.3323 17.2606 25.1505 17.436 25.0102C17.4972 24.9612 17.5498 24.9168 17.5934 24.8788C16.5733 25.0059 15.3838 25.0835 14.0001 25.0835C12.6164 25.0835 11.427 25.0059 10.4069 24.8788Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-16 items-center justify-end self-stretch pl-7" >
                      <div className="h-9 w-9 rounded-full">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="18" fill="#A6A7BC" fill-opacity="0.5"/><path d="M18 17C20.2091 17 22 15.2091 22 13C22 10.7909 20.2091 9 18 9C15.7909 9 14 10.7909 14 13C14 15.2091 15.7909 17 18 17Z" fill="#2E3A5C"/><path d="M11.3057 24C9.64905 26.6701 15.1327 28 18 28C20.8673 28 26.3509 26.6701 24.6943 24C23.4486 21.9921 20.9288 20 18 20C15.0712 20 12.5514 21.9921 11.3057 24Z" fill="#2E3A5C"/></svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute inset-x-0 top-0 flex h-1 items-center justify-center" >
                <div className="flex flex-grow self-stretch">
                  <div className="h-full w-full -scale-x-100 bg-slate-700" />
                </div>
              </div>
              <div className="relative flex flex-grow flex-col items-center justify-between gap-y-3 self-stretch" >
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
                            <div className="flex-grow self-stretch">
                              Search
                            </div>
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
                          <div className="flex-grow self-stretch">
                            24h change
                          </div>
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5892 2.74408C10.4329 2.5878 10.221 2.5 9.99996 2.5C9.77895 2.5 9.56698 2.5878 9.4107 2.74408L4.4107 7.74408C4.08527 8.06952 4.08527 8.59715 4.4107 8.92259C4.73614 9.24803 5.26378 9.24803 5.58921 8.92259L9.99996 4.51184L14.4107 8.92259C14.7361 9.24803 15.2638 9.24803 15.5892 8.92259C15.9147 8.59715 15.9147 8.06952 15.5892 7.74408L10.5892 2.74408Z" fill="#667185"/><path d="M10.5892 18.0893C10.4329 18.2455 10.221 18.3333 9.99996 18.3333C9.77895 18.3333 9.56698 18.2455 9.4107 18.0893L4.4107 13.0893C4.08527 12.7638 4.08527 12.2362 4.4107 11.9107C4.73614 11.5853 5.26378 11.5853 5.58921 11.9107L9.99996 16.3215L14.4107 11.9107C14.7361 11.5853 15.2638 11.5853 15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0893L10.5892 18.0893Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
                        <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                          <div className="flex-grow self-stretch">
                            Volume (24h)
                          </div>
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.5892 2.74408C10.4329 2.5878 10.221 2.5 9.99996 2.5C9.77895 2.5 9.56698 2.5878 9.4107 2.74408L4.4107 7.74408C4.08527 8.06952 4.08527 8.59715 4.4107 8.92259C4.73614 9.24803 5.26378 9.24803 5.58921 8.92259L9.99996 4.51184L14.4107 8.92259C14.7361 9.24803 15.2638 9.24803 15.5892 8.92259C15.9147 8.59715 15.9147 8.06952 15.5892 7.74408L10.5892 2.74408Z" fill="#667185"/><path d="M10.5892 18.0893C10.4329 18.2455 10.221 18.3333 9.99996 18.3333C9.77895 18.3333 9.56698 18.2455 9.4107 18.0893L4.4107 13.0893C4.08527 12.7638 4.08527 12.2362 4.4107 11.9107C4.73614 11.5853 5.26378 11.5853 5.58921 11.9107L9.99996 16.3215L14.4107 11.9107C14.7361 11.5853 15.2638 11.5853 15.5892 11.9107C15.9147 12.2362 15.9147 12.7638 15.5892 13.0893L10.5892 18.0893Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                      <div className="flex w-36 items-center justify-center self-stretch bg-gray-50 py-3 px-6" >
                        <div className="flex h-5 flex-grow items-center justify-between gap-x-1" >
                          <div className="flex-grow self-stretch">
                            Market Cap
                          </div>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_11193)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_11193" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_11193"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_11193" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_10695)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_10695" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_10695"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_10695" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_10709)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_10709" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_10709"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_10709" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_5845)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_5845" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_5845"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_5845" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_6295)"><path d="M24 46.25L29.1244 41.25L31.3206 46.25L38.3971 35.25L42.0574 41.25L44.4976 35.25L46.4498 41.25L49.866 29.75L57.1866 41.25L59.8708 35.25H64.2632L69.1435 23.75H71.8278L74.756 46.25L78.6603 52.75L80.6124 59.75L88.4211 46.25H91.5933L97.9378 23.75L103.794 38.25L105.502 29.75L108.919 35.25L116.727 12.25L121.12 46.25L126 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_6295" x="16" y="8.92871" width="118" height="64.3799" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_6295"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_6295" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_6309)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_6309" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_6309"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_6309" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_10724)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_10724" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_10724"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_10724" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_2046)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_2046" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_2046"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_2046" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 150 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="150" height="72" fill="white"/><g filter="url(#filter0_d_763_10218)"><path d="M24 12.25H29.044L32.4066 23.6302H37.7308L39.6923 35.0104H44.7233L46.6969 40.9479L51.7418 30.5573L56.2253 40.9479L57.9066 35.0104L62.6703 33.0312L64.7061 23.6302L70.2363 35.0104L73.3187 45.8958H78.3626L85.3681 37.9792L89.1295 45.8958H92.3366L100.22 54.8021L103.302 48.3698H108.346L109.852 35.0104L115.912 50.349L119.835 54.8021L126 59.75" stroke="#D80027" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_10218" x="16" y="8.25" width="118" height="63.5" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0.847059 0 0 0 0 0 0 0 0 0 0.152941 0 0 0 0.3 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_10218"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_10218" result="shape"/></filter></defs></svg>
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
                    <div className="flex h-px items-center justify-center self-stretch" >
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
              </div>
              <div className="absolute bottom-24 right-96 flex h-9 w-72 items-center justify-center gap-x-1 text-center text-sm font-normal leading-5" >
                <div className="h-9 w-9 rounded-md">
                  <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="36" height="36" rx="6" fill="#2E3A5C"/><path d="M14.5974 19.1424C13.9934 18.5007 13.9934 17.4996 14.5974 16.8579L20.7265 10.3457C21.042 10.0105 21.5694 9.99457 21.9045 10.31C22.2397 10.6254 22.2556 11.1528 21.9402 11.488L15.8111 18.0002L21.9402 24.5124C22.2556 24.8475 22.2396 25.3749 21.9045 25.6903C21.5694 26.0058 21.042 25.9898 20.7265 25.6546L14.5974 19.1424Z" fill="white"/></svg>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white py-0.5 px-2 text-slate-400" >
                  <div className="w-2 self-stretch">1</div>
                </div>
                <div className="h-6 w-6 rounded-md bg-white py-0.5 px-2 text-slate-400" >
                  2
                </div>
                <div className="flex h-6 w-6 items-center justify-center text-black" >
                  <div className="flex h-6 w-6 items-center justify-center rounded-md border border-solid border-slate-700 bg-white py-px px-1.5" >
                    <div className="flex-grow self-stretch">3</div>
                  </div>
                </div>
                <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white py-2 px-1.5 text-slate-400" >
                  <div className="flex h-2.5 flex-grow items-center justify-center" >
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
          </div>
        </div>
      </>
      );
}

export default MarketList