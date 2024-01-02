import React from 'react'

function NewListings() {
    return (
        <div className="font-inter inline-flex h-[1845px] w-[1440px] resize flex-row overflow-hidden" >
          <div className="flex h-full w-full items-end overflow-clip bg-gray-50 pb-96" >
            <div className="relative flex flex-grow items-end justify-end self-stretch pl-80 pr-10 pt-28" >
              <div className="absolute right-0 top-1 flex h-16 w-[1168px] items-center justify-center tracking-[0px]" >
                <div className="flex flex-grow items-end justify-center self-stretch bg-white pb-4 pl-10 pr-11 pt-5" >
                  <div className="flex h-9 flex-grow items-center justify-center">
                    <div className="h-6 w-5 pb-1">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9123 1.98757C10.7645 1.18416 9.2369 1.18416 8.08917 1.98757L2.35786 5.99949C1.39234 6.67535 0.855489 7.81083 0.94588 8.98592L1.5334 16.6236C1.6442 18.0641 2.94937 19.1111 4.37959 18.9068L7.02093 18.5294C8.25255 18.3535 9.16738 17.2987 9.16738 16.0545V15C9.16738 14.5398 9.54047 14.1667 10.0007 14.1667C10.4609 14.1667 10.834 14.5398 10.834 15V16.0545C10.834 17.2987 11.7489 18.3535 12.9805 18.5294L15.6218 18.9068C17.0521 19.1111 18.3572 18.0641 18.468 16.6236L19.0555 8.98592C19.1459 7.81083 18.6091 6.67535 17.6436 5.99949L11.9123 1.98757ZM9.04494 3.35296C9.61881 2.95125 10.3826 2.95125 10.9565 3.35296L16.6878 7.36488C17.1706 7.70281 17.439 8.27055 17.3938 8.85809L16.8063 16.4958C16.7693 16.976 16.3343 17.3249 15.8575 17.2568L13.2162 16.8795C12.8057 16.8209 12.5007 16.4693 12.5007 16.0545V15C12.5007 13.6193 11.3814 12.5 10.0007 12.5C8.62 12.5 7.50071 13.6193 7.50071 15V16.0545C7.50071 16.4693 7.19577 16.8209 6.78523 16.8795L4.14388 17.2568C3.66715 17.3249 3.23209 16.976 3.19515 16.4958L2.60764 8.85809C2.56244 8.27055 2.83087 7.70281 3.31363 7.36488L9.04494 3.35296Z" fill="#2E3A5C"/></svg>
                    </div>
                    <div className="h-6 w-11 pl-1 pb-1 text-left text-sm font-medium leading-5 text-slate-700" >
                      Home
                    </div>
                    <div className="h-6 w-5 pb-1 text-left text-sm font-medium leading-5 text-slate-400" >
                      /
                    </div>
                    <div className="ml-96 flex w-24 flex-grow items-center justify-center self-stretch text-center text-sm font-semibold leading-normal text-slate-500" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-200 bg-white py-2 px-3" >
                        <div className="flex h-5 flex-grow items-center justify-center gap-x-1" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_406_11319)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 8.00005H15.9997C15.9997 7.27799 15.9034 6.57849 15.7241 5.91309H7.65186V8.00005Z" fill="#D80027"/><path d="M7.65186 3.82574H14.8255C14.3358 3.02661 13.7096 2.32027 12.9795 1.73877H7.65186V3.82574Z" fill="#D80027"/><path d="M7.99989 16.0001C9.88268 16.0001 11.6132 15.3494 12.9798 14.261H3.02002C4.38658 15.3494 6.11711 16.0001 7.99989 16.0001Z" fill="#D80027"/><path d="M1.17398 12.1733H14.8256C15.2188 11.5317 15.5237 10.8305 15.7242 10.0863H0.275391C0.475922 10.8305 0.780828 11.5317 1.17398 12.1733Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_406_11319"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
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
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1669 3.50004C15.1669 2.85571 14.6446 2.33337 14.0002 2.33337C13.3559 2.33337 12.8336 2.85571 12.8336 3.50004V5.25004C12.8336 5.2824 12.8349 5.31445 12.8375 5.34614C9.52488 5.89974 7.00023 8.7789 7.00023 12.2488V16.9167C7.00023 17.5003 6.52177 18.5122 5.99817 19.445C5.26139 20.7574 5.39633 22.3398 6.80295 22.8754C8.21768 23.4141 10.4807 23.9167 14.0002 23.9167C17.5198 23.9167 19.7828 23.4141 21.1975 22.8754C22.6041 22.3398 22.7391 20.7574 22.0023 19.445C21.4787 18.5122 21.0002 17.5003 21.0002 16.9167V12.2493C21.0002 8.77946 18.4756 5.89985 15.163 5.34615C15.1656 5.31446 15.1669 5.2824 15.1669 5.25004V3.50004Z" fill="#667185"/><path d="M10.407 24.8787C10.4506 24.9167 10.5032 24.9611 10.5644 25.0101C10.7397 25.1503 10.9903 25.3321 11.3068 25.513C11.9352 25.8721 12.8642 26.2501 14.0003 26.2501C15.1363 26.2501 16.0653 25.8721 16.6937 25.513C17.0103 25.3321 17.2608 25.1503 17.4361 25.0101C17.4973 24.9611 17.5499 24.9167 17.5935 24.8787C16.5734 25.0057 15.3839 25.0834 14.0003 25.0834C12.6166 25.0834 11.4271 25.0057 10.407 24.8787Z" fill="#667185"/></svg>
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
              <div className="relative flex flex-grow flex-col items-center justify-end self-stretch pt-48" >
                <div className="flex h-14 items-center justify-center self-stretch text-left text-sm font-medium leading-5 tracking-[0px]" >
                  <div className="flex flex-grow flex-col items-center justify-end gap-y-4 self-stretch border border-solid border-gray-200 pr-[807px] pt-4" >
                    <div className="flex w-64 flex-grow items-center justify-center gap-x-8" >
                      <div className="w-14 self-stretch text-slate-700">
                        Gainers
                      </div>
                      <div className="w-11 self-stretch text-slate-700">
                        Losers
                      </div>
                      <div className="flex-grow self-stretch text-slate-700">
                        New Listings
                      </div>
                    </div>
                    <div className="flex h-px w-72 items-center justify-center">
                      <div className="w-20 self-stretch bg-gray-200" />
                      <div className="w-20 self-stretch bg-gray-200" />
                      <div className="flex-grow self-stretch bg-slate-700" />
                    </div>
                  </div>
                </div>
                <div className="flex h-96 items-center justify-center self-stretch pt-3 tracking-[0px]" >
                  <div className="flex flex-grow flex-col items-center justify-center self-stretch rounded-xl border border-solid border-gray-200" >
                    <div className="flex h-11 items-center justify-center self-stretch text-xs font-medium leading-normal text-slate-700" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-left" >
                        <div className="h-4 flex-grow">Name</div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-left" >
                        <div className="h-4 flex-grow">Price</div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-center" >
                        <div className="h-4 flex-grow">24h change</div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-left" >
                        <div className="h-4 flex-grow">Since Listing</div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-left" >
                        <div className="h-4 flex-grow">Volume (24h)</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch bg-gray-50 py-3.5 px-6 text-left" >
                        <div className="h-4 flex-grow">24H Trend</div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
                        <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1475 2.4322C11.156 0.855933 8.84297 0.855932 7.85155 2.4322L6.24415 4.98782C6.12658 5.17475 5.93802 5.31146 5.71662 5.36551L2.76117 6.08697C0.946382 6.52999 0.212469 8.71814 1.43315 10.1497L3.39517 12.4506C3.53918 12.6195 3.60945 12.8354 3.59361 13.0523L3.37443 16.0538C3.23772 17.9262 5.12794 19.2565 6.85047 18.5641L9.67046 17.4305C9.88127 17.3458 10.1177 17.3458 10.3286 17.4305L13.1485 18.5641C14.8711 19.2565 16.7613 17.9262 16.6246 16.0538L16.4054 13.0523C16.3896 12.8354 16.4598 12.6195 16.6038 12.4506L18.5659 10.1497C19.7865 8.71815 19.0526 6.52999 17.2378 6.08697L14.2824 5.36551C14.061 5.31146 13.8724 5.17475 13.7549 4.98782L12.1475 2.4322ZM9.26236 3.31955C9.60023 2.78237 10.3988 2.78237 10.7367 3.31955L12.344 5.87517C12.6942 6.43184 13.2486 6.82876 13.8871 6.98463L16.8426 7.7061C17.4719 7.85972 17.6995 8.59697 17.2977 9.06826L15.3356 11.3692C14.9088 11.8698 14.6952 12.5173 14.7432 13.1737L14.9623 16.1752C15.0069 16.7851 14.3797 17.2627 13.7702 17.0177L10.9502 15.8841C10.3405 15.639 9.65855 15.639 9.04884 15.8841L6.22885 17.0177C5.61929 17.2627 4.99214 16.7851 5.03668 16.1752L5.25585 13.1737C5.30378 12.5173 5.09025 11.8698 4.66337 11.3692L2.70135 9.06826C2.29947 8.59697 2.52711 7.85972 3.15642 7.7061L6.11187 6.98463C6.7504 6.82876 7.30484 6.43184 7.65496 5.87517L9.26236 3.31955Z" fill="#D0D5DD"/></svg>
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
                      <div className="flex w-32 items-center justify-center self-stretch bg-white py-6 pl-6 pr-7 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">45%</div>
                        </div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-white p-6 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">1200%</div>
                        </div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
                        <div className="h-5 flex-grow">$24,567,990.09</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch" >
                        <div className="h-20 w-56">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="72" fill="white"/><g filter="url(#filter0_d_763_9920)"><path d="M24 46.25L32.6411 41.25L36.3445 46.25L48.2775 35.25L54.4498 41.25L58.5646 35.25L61.8565 41.25L67.6172 29.75L79.9617 41.25L84.488 35.25H91.8947L100.124 23.75H104.651L109.589 46.25L116.172 52.75L119.464 59.75L132.632 46.25H137.981L148.679 23.75L158.555 38.25L161.435 29.75L167.196 35.25L180.364 12.25L187.77 46.25L196 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_9920" x="16" y="6.49707" width="188" height="65.9836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_9920"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_9920" result="shape"/></filter></defs></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
                        <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1475 2.4322C11.156 0.855933 8.84297 0.855932 7.85155 2.4322L6.24415 4.98782C6.12658 5.17475 5.93802 5.31146 5.71662 5.36551L2.76117 6.08697C0.946382 6.52999 0.212469 8.71814 1.43315 10.1497L3.39517 12.4506C3.53918 12.6195 3.60945 12.8354 3.59361 13.0523L3.37443 16.0538C3.23772 17.9262 5.12794 19.2565 6.85047 18.5641L9.67046 17.4305C9.88127 17.3458 10.1177 17.3458 10.3286 17.4305L13.1485 18.5641C14.8711 19.2565 16.7613 17.9262 16.6246 16.0538L16.4054 13.0523C16.3896 12.8354 16.4598 12.6195 16.6038 12.4506L18.5659 10.1497C19.7865 8.71815 19.0526 6.52999 17.2378 6.08697L14.2824 5.36551C14.061 5.31146 13.8724 5.17475 13.7549 4.98782L12.1475 2.4322ZM9.26236 3.31955C9.60023 2.78237 10.3988 2.78237 10.7367 3.31955L12.344 5.87517C12.6942 6.43184 13.2486 6.82876 13.8871 6.98463L16.8426 7.7061C17.4719 7.85972 17.6995 8.59697 17.2977 9.06826L15.3356 11.3692C14.9088 11.8698 14.6952 12.5173 14.7432 13.1737L14.9623 16.1752C15.0069 16.7851 14.3797 17.2627 13.7702 17.0177L10.9502 15.8841C10.3405 15.639 9.65855 15.639 9.04884 15.8841L6.22885 17.0177C5.61929 17.2627 4.99214 16.7851 5.03668 16.1752L5.25585 13.1737C5.30378 12.5173 5.09025 11.8698 4.66337 11.3692L2.70135 9.06826C2.29947 8.59697 2.52711 7.85972 3.15642 7.7061L6.11187 6.98463C6.7504 6.82876 7.30484 6.43184 7.65496 5.87517L9.26236 3.31955Z" fill="#D0D5DD"/></svg>
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
                      <div className="flex w-32 items-center justify-center self-stretch bg-white py-6 pl-6 pr-7 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">45%</div>
                        </div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-white p-6 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">1200%</div>
                        </div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
                        <div className="h-5 flex-grow">$24,567,990.09</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch" >
                        <div className="h-20 w-56">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="72" fill="white"/><g filter="url(#filter0_d_763_5666)"><path d="M24 46.25L32.6411 41.25L36.3445 46.25L48.2775 35.25L54.4498 41.25L58.5646 35.25L61.8565 41.25L67.6172 29.75L79.9617 41.25L84.488 35.25H91.8947L100.124 23.75H104.651L109.589 46.25L116.172 52.75L119.464 59.75L132.632 46.25H137.981L148.679 23.75L158.555 38.25L161.435 29.75L167.196 35.25L180.364 12.25L187.77 46.25L196 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_5666" x="16" y="6.49707" width="188" height="65.9836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_5666"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_5666" result="shape"/></filter></defs></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
                        <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1475 2.4322C11.156 0.855933 8.84297 0.855932 7.85155 2.4322L6.24415 4.98782C6.12658 5.17475 5.93802 5.31146 5.71662 5.36551L2.76117 6.08697C0.946382 6.52999 0.212469 8.71814 1.43315 10.1497L3.39517 12.4506C3.53918 12.6195 3.60945 12.8354 3.59361 13.0523L3.37443 16.0538C3.23772 17.9262 5.12794 19.2565 6.85047 18.5641L9.67046 17.4305C9.88127 17.3458 10.1177 17.3458 10.3286 17.4305L13.1485 18.5641C14.8711 19.2565 16.7613 17.9262 16.6246 16.0538L16.4054 13.0523C16.3896 12.8354 16.4598 12.6195 16.6038 12.4506L18.5659 10.1497C19.7865 8.71815 19.0526 6.52999 17.2378 6.08697L14.2824 5.36551C14.061 5.31146 13.8724 5.17475 13.7549 4.98782L12.1475 2.4322ZM9.26236 3.31955C9.60023 2.78237 10.3988 2.78237 10.7367 3.31955L12.344 5.87517C12.6942 6.43184 13.2486 6.82876 13.8871 6.98463L16.8426 7.7061C17.4719 7.85972 17.6995 8.59697 17.2977 9.06826L15.3356 11.3692C14.9088 11.8698 14.6952 12.5173 14.7432 13.1737L14.9623 16.1752C15.0069 16.7851 14.3797 17.2627 13.7702 17.0177L10.9502 15.8841C10.3405 15.639 9.65855 15.639 9.04884 15.8841L6.22885 17.0177C5.61929 17.2627 4.99214 16.7851 5.03668 16.1752L5.25585 13.1737C5.30378 12.5173 5.09025 11.8698 4.66337 11.3692L2.70135 9.06826C2.29947 8.59697 2.52711 7.85972 3.15642 7.7061L6.11187 6.98463C6.7504 6.82876 7.30484 6.43184 7.65496 5.87517L9.26236 3.31955Z" fill="#D0D5DD"/></svg>
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
                      <div className="flex w-32 items-center justify-center self-stretch bg-white py-6 pl-6 pr-7 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">45%</div>
                        </div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-white p-6 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">1200%</div>
                        </div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
                        <div className="h-5 flex-grow">$24,567,990.09</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch" >
                        <div className="h-20 w-56">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="72" fill="white"/><g filter="url(#filter0_d_763_5119)"><path d="M24 46.25L32.6411 41.25L36.3445 46.25L48.2775 35.25L54.4498 41.25L58.5646 35.25L61.8565 41.25L67.6172 29.75L79.9617 41.25L84.488 35.25H91.8947L100.124 23.75H104.651L109.589 46.25L116.172 52.75L119.464 59.75L132.632 46.25H137.981L148.679 23.75L158.555 38.25L161.435 29.75L167.196 35.25L180.364 12.25L187.77 46.25L196 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_5119" x="16" y="6.49707" width="188" height="65.9836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_5119"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_5119" result="shape"/></filter></defs></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
                        <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1475 2.4322C11.156 0.855933 8.84297 0.855932 7.85155 2.4322L6.24415 4.98782C6.12658 5.17475 5.93802 5.31146 5.71662 5.36551L2.76117 6.08697C0.946382 6.52999 0.212469 8.71814 1.43315 10.1497L3.39517 12.4506C3.53918 12.6195 3.60945 12.8354 3.59361 13.0523L3.37443 16.0538C3.23772 17.9262 5.12794 19.2565 6.85047 18.5641L9.67046 17.4305C9.88127 17.3458 10.1177 17.3458 10.3286 17.4305L13.1485 18.5641C14.8711 19.2565 16.7613 17.9262 16.6246 16.0538L16.4054 13.0523C16.3896 12.8354 16.4598 12.6195 16.6038 12.4506L18.5659 10.1497C19.7865 8.71815 19.0526 6.52999 17.2378 6.08697L14.2824 5.36551C14.061 5.31146 13.8724 5.17475 13.7549 4.98782L12.1475 2.4322ZM9.26236 3.31955C9.60023 2.78237 10.3988 2.78237 10.7367 3.31955L12.344 5.87517C12.6942 6.43184 13.2486 6.82876 13.8871 6.98463L16.8426 7.7061C17.4719 7.85972 17.6995 8.59697 17.2977 9.06826L15.3356 11.3692C14.9088 11.8698 14.6952 12.5173 14.7432 13.1737L14.9623 16.1752C15.0069 16.7851 14.3797 17.2627 13.7702 17.0177L10.9502 15.8841C10.3405 15.639 9.65855 15.639 9.04884 15.8841L6.22885 17.0177C5.61929 17.2627 4.99214 16.7851 5.03668 16.1752L5.25585 13.1737C5.30378 12.5173 5.09025 11.8698 4.66337 11.3692L2.70135 9.06826C2.29947 8.59697 2.52711 7.85972 3.15642 7.7061L6.11187 6.98463C6.7504 6.82876 7.30484 6.43184 7.65496 5.87517L9.26236 3.31955Z" fill="#D0D5DD"/></svg>
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
                      <div className="flex w-32 items-center justify-center self-stretch bg-white py-6 pl-6 pr-7 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">45%</div>
                        </div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-white p-6 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">1200%</div>
                        </div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
                        <div className="h-5 flex-grow">$24,567,990.09</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch" >
                        <div className="h-20 w-56">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="72" fill="white"/><g filter="url(#filter0_d_763_5684)"><path d="M24 46.25L32.6411 41.25L36.3445 46.25L48.2775 35.25L54.4498 41.25L58.5646 35.25L61.8565 41.25L67.6172 29.75L79.9617 41.25L84.488 35.25H91.8947L100.124 23.75H104.651L109.589 46.25L116.172 52.75L119.464 59.75L132.632 46.25H137.981L148.679 23.75L158.555 38.25L161.435 29.75L167.196 35.25L180.364 12.25L187.77 46.25L196 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_5684" x="16" y="6.49707" width="188" height="65.9836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_5684"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_5684" result="shape"/></filter></defs></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="flex h-20 items-center justify-center self-stretch text-sm leading-5" >
                      <div className="flex w-80 items-center justify-center self-stretch bg-white py-4 px-6 text-left" >
                        <div className="flex h-10 flex-grow items-center justify-between gap-x-3" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M12.1475 2.4322C11.156 0.855933 8.84297 0.855932 7.85155 2.4322L6.24415 4.98782C6.12658 5.17475 5.93802 5.31146 5.71662 5.36551L2.76117 6.08697C0.946382 6.52999 0.212469 8.71814 1.43315 10.1497L3.39517 12.4506C3.53918 12.6195 3.60945 12.8354 3.59361 13.0523L3.37443 16.0538C3.23772 17.9262 5.12794 19.2565 6.85047 18.5641L9.67046 17.4305C9.88127 17.3458 10.1177 17.3458 10.3286 17.4305L13.1485 18.5641C14.8711 19.2565 16.7613 17.9262 16.6246 16.0538L16.4054 13.0523C16.3896 12.8354 16.4598 12.6195 16.6038 12.4506L18.5659 10.1497C19.7865 8.71815 19.0526 6.52999 17.2378 6.08697L14.2824 5.36551C14.061 5.31146 13.8724 5.17475 13.7549 4.98782L12.1475 2.4322ZM9.26236 3.31955C9.60023 2.78237 10.3988 2.78237 10.7367 3.31955L12.344 5.87517C12.6942 6.43184 13.2486 6.82876 13.8871 6.98463L16.8426 7.7061C17.4719 7.85972 17.6995 8.59697 17.2977 9.06826L15.3356 11.3692C14.9088 11.8698 14.6952 12.5173 14.7432 13.1737L14.9623 16.1752C15.0069 16.7851 14.3797 17.2627 13.7702 17.0177L10.9502 15.8841C10.3405 15.639 9.65855 15.639 9.04884 15.8841L6.22885 17.0177C5.61929 17.2627 4.99214 16.7851 5.03668 16.1752L5.25585 13.1737C5.30378 12.5173 5.09025 11.8698 4.66337 11.3692L2.70135 9.06826C2.29947 8.59697 2.52711 7.85972 3.15642 7.7061L6.11187 6.98463C6.7504 6.82876 7.30484 6.43184 7.65496 5.87517L9.26236 3.31955Z" fill="#D0D5DD"/></svg>
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
                      <div className="flex w-32 items-center justify-center self-stretch bg-white py-6 pl-6 pr-7 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">45%</div>
                        </div>
                      </div>
                      <div className="flex w-32 items-center justify-center self-stretch bg-white p-6 text-right font-medium text-green-800" >
                        <div className="flex h-6 flex-grow items-center justify-between gap-x-0.5 rounded-xl bg-green-50 py-0.5 pl-2 pr-3" >
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.52843 1.52851C7.78878 1.26816 8.21089 1.26816 8.47124 1.52851L11.1379 4.19518C11.3983 4.45553 11.3983 4.87764 11.1379 5.13799C10.8776 5.39834 10.4554 5.39834 10.1951 5.13799L8.6665 3.60939V13.9999C8.6665 14.3681 8.36803 14.6666 7.99984 14.6666C7.63165 14.6666 7.33317 14.3681 7.33317 13.9999V3.60939L5.80457 5.13799C5.54423 5.39834 5.12212 5.39834 4.86177 5.13799C4.60142 4.87764 4.60142 4.45553 4.86177 4.19518L7.52843 1.52851Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">1200%</div>
                        </div>
                      </div>
                      <div className="flex w-44 items-center justify-center self-stretch bg-white py-7 px-6 text-left font-normal text-slate-700" >
                        <div className="h-5 flex-grow">$24,567,990.09</div>
                      </div>
                      <div className="flex w-56 items-center justify-center self-stretch" >
                        <div className="h-20 w-56">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 220 72" fill="none" xmlns="http://www.w3.org/2000/svg"><rect width="220" height="72" fill="white"/><g filter="url(#filter0_d_763_5226)"><path d="M24 46.25L32.6411 41.25L36.3445 46.25L48.2775 35.25L54.4498 41.25L58.5646 35.25L61.8565 41.25L67.6172 29.75L79.9617 41.25L84.488 35.25H91.8947L100.124 23.75H104.651L109.589 46.25L116.172 52.75L119.464 59.75L132.632 46.25H137.981L148.679 23.75L158.555 38.25L161.435 29.75L167.196 35.25L180.364 12.25L187.77 46.25L196 29.75" stroke="#00A650" stroke-width="2" stroke-linecap="round"/></g><defs><filter id="filter0_d_763_5226" x="16" y="6.49707" width="188" height="65.9836" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB"><feFlood flood-opacity="0" result="BackgroundImageFix"/><feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/><feOffset dy="4"/><feGaussianBlur stdDeviation="3.5"/><feComposite in2="hardAlpha" operator="out"/><feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0.65098 0 0 0 0 0.313726 0 0 0 0.31 0"/><feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_763_5226"/><feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_763_5226" result="shape"/></filter></defs></svg>
                        </div>
                      </div>
                    </div>
                    <div className="flex h-px items-center justify-center self-stretch" >
                      <div className="w-80 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-32 self-stretch bg-gray-200" />
                      <div className="w-44 self-stretch bg-gray-200" />
                      <div className="w-56 self-stretch bg-gray-200" />
                    </div>
                    <div className="h-px self-stretch bg-gray-100" />
                  </div>
                </div>
                <div className="flex h-0 items-end justify-center self-stretch pb-0" >
                  <div className="flex h-40 flex-grow items-center justify-center gap-x-5" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-xl bg-green-600" >
                      <div className="bg-bbb-text-bbbtext-bbbadge-bg-balance-card flex flex-grow flex-col items-start justify-center gap-y-1.5 self-stretch bg-cover bg-center py-7 pr-72" >
                        <div className="h-4 w-32 pl-6 text-left text-xs font-medium leading-normal tracking-[0px] text-white" >
                          Available Balance
                        </div>
                        <div className="flex w-52 flex-grow pl-6 pt-2.5 text-left" >
                          <span>
                            <span className="text-[32px] font-semibold leading-10 tracking-[-0.32px] text-white" >
                              $ 140,000
                            </span>
                            <span className="text-xl font-medium leading-6 tracking-wide text-blue-50" >
                              .00
                            </span>
                          </span>
                        </div>
                        <div className="ml-6 flex h-4 w-20 items-center justify-between gap-x-0.5 rounded-full bg-green-50 px-1 text-right text-xs font-medium leading-normal tracking-[0px] text-green-800" >
                          <div className="h-3 w-3">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.55123 1.64645C6.74649 1.45118 7.06308 1.45118 7.25834 1.64645L9.25834 3.64645C9.4536 3.84171 9.4536 4.15829 9.25834 4.35355C9.06308 4.54882 8.74649 4.54882 8.55123 4.35355L7.40479 3.20711V11C7.40479 11.2761 7.18093 11.5 6.90479 11.5C6.62864 11.5 6.40479 11.2761 6.40479 11V3.20711L5.25834 4.35355C5.06308 4.54882 4.74649 4.54882 4.55123 4.35355C4.35597 4.15829 4.35597 3.84171 4.55123 3.64645L6.55123 1.64645Z" fill="#036B26"/></svg>
                          </div>
                          <div className="flex-grow self-stretch">5.26%</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-72 items-center justify-center self-stretch" >
                      <div className="flex flex-grow flex-col items-center justify-between gap-y-16 self-stretch rounded-xl border border-solid border-gray-200 bg-white p-4" >
                        <div className="flex h-6 items-center justify-center gap-x-2 self-stretch tracking-[0px]" >
                          <img
                            className="h-6 w-6 rounded-full object-cover object-center"
                            src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/b9129fa108e434939ea871cadb654f0d72b9412b.webp"
                           />
                          <div className="w-12 self-stretch text-left text-sm font-medium leading-5 text-slate-700" >
                            PROPC
                          </div>
                          <div className="flex h-4 flex-grow items-center justify-end pl-28 text-right text-xs font-normal leading-normal text-slate-400" >
                            <div className="w-7 self-stretch">24 H</div>
                          </div>
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87626 5.81876L7.08602 10.7221C7.59942 11.2053 8.40026 11.2053 8.91366 10.7221L14.1234 5.81876C14.3915 5.56642 14.4043 5.1445 14.152 4.87639C13.8996 4.60827 13.4777 4.59548 13.2096 4.84783L7.99984 9.75113L2.79008 4.84783C2.52197 4.59548 2.10005 4.60827 1.84771 4.87638C1.59536 5.1445 1.60815 5.56642 1.87626 5.81876Z" fill="#667185"/></svg>
                          </div>
                        </div>
                        <div className="flex h-8 items-end justify-center gap-x-3 self-stretch" >
                          <div className="flex-grow self-stretch text-left text-[32px] font-bold leading-8 tracking-[-0.32px] text-gray-900" >
                            $2.38
                          </div>
                          <div className="flex h-4 w-14 items-center justify-between gap-x-0.5 rounded-full bg-green-50 px-1 text-right text-xs font-medium leading-normal tracking-[0px] text-green-800" >
                            <div className="h-3 w-3">
                              <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.64645 1.64645C5.84171 1.45118 6.15829 1.45118 6.35355 1.64645L8.35355 3.64645C8.54882 3.84171 8.54882 4.15829 8.35355 4.35355C8.15829 4.54882 7.84171 4.54882 7.64645 4.35355L6.5 3.20711V11C6.5 11.2761 6.27614 11.5 6 11.5C5.72386 11.5 5.5 11.2761 5.5 11V3.20711L4.35355 4.35355C4.15829 4.54882 3.84171 4.54882 3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645L5.64645 1.64645Z" fill="#036B26"/></svg>
                            </div>
                            <div className="flex-grow self-stretch">
                              5.26%
                            </div>
                          </div>
                          <div className="h-5 w-16 pl-12">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55728 2.87592C9.22193 1.81919 10.7777 1.81919 11.4424 2.87592L13.0498 5.43154C13.2836 5.80334 13.6551 6.07015 14.0851 6.17511L17.0405 6.89657C18.2626 7.19489 18.7434 8.6576 17.9321 9.60901L15.9701 11.9099C15.6846 12.2447 15.5427 12.6764 15.5746 13.1131L15.7938 16.1146C15.8844 17.3557 14.6257 18.2597 13.4597 17.7909L10.6397 16.6574C10.2294 16.4925 9.77024 16.4925 9.35998 16.6574L6.53999 17.7909C5.37394 18.2597 4.11526 17.3557 4.20589 16.1146L4.42506 13.1131C4.45694 12.6764 4.31504 12.2447 4.0296 11.9099L2.06758 9.60901C1.2563 8.6576 1.73708 7.19489 2.95913 6.89657L5.91457 6.17511C6.34454 6.07015 6.71604 5.80334 6.94989 5.43154L8.55728 2.87592Z" fill="#F0D802"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex w-72 items-center justify-center self-stretch" >
                      <div className="flex flex-grow flex-col items-center justify-between gap-y-16 self-stretch rounded-xl border border-solid border-gray-200 bg-white p-4" >
                        <div className="flex h-6 items-center justify-center gap-x-2 self-stretch tracking-[0px]" >
                          <img
                            className="h-6 w-6 rounded-full object-cover object-center"
                            src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/9ff7da8f7bb09a662714fa6cf86e64c3c4e692f2.webp"
                           />
                          <div className="w-6 self-stretch text-left text-sm font-medium leading-5 text-slate-700" >
                            RIO
                          </div>
                          <div className="flex h-4 flex-grow items-center justify-end pl-32 text-right text-xs font-normal leading-normal text-slate-400" >
                            <div className="w-7 self-stretch">24 H</div>
                          </div>
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.87626 5.81876L7.08602 10.7221C7.59942 11.2053 8.40026 11.2053 8.91366 10.7221L14.1234 5.81876C14.3915 5.56642 14.4043 5.1445 14.152 4.87639C13.8996 4.60827 13.4777 4.59548 13.2096 4.84783L7.99984 9.75113L2.79008 4.84783C2.52197 4.59548 2.10005 4.60827 1.84771 4.87638C1.59536 5.1445 1.60815 5.56642 1.87626 5.81876Z" fill="#667185"/></svg>
                          </div>
                        </div>
                        <div className="flex h-8 items-end justify-center gap-x-3 self-stretch" >
                          <div className="flex-grow self-stretch text-left text-[32px] font-bold leading-8 tracking-[-0.32px] text-gray-900" >
                            $0.6895
                          </div>
                          <div className="flex h-4 w-14 items-center justify-between gap-x-0.5 rounded-full bg-green-50 px-1 text-right text-xs font-medium leading-normal tracking-[0px] text-green-800" >
                            <div className="h-3 w-3">
                              <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.64645 1.64645C5.84171 1.45118 6.15829 1.45118 6.35355 1.64645L8.35355 3.64645C8.54882 3.84171 8.54882 4.15829 8.35355 4.35355C8.15829 4.54882 7.84171 4.54882 7.64645 4.35355L6.5 3.20711V11C6.5 11.2761 6.27614 11.5 6 11.5C5.72386 11.5 5.5 11.2761 5.5 11V3.20711L4.35355 4.35355C4.15829 4.54882 3.84171 4.54882 3.64645 4.35355C3.45118 4.15829 3.45118 3.84171 3.64645 3.64645L5.64645 1.64645Z" fill="#036B26"/></svg>
                            </div>
                            <div className="flex-grow self-stretch">
                              5.26%
                            </div>
                          </div>
                          <div className="h-5 w-8 pl-3">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.55728 2.87592C9.22193 1.81919 10.7777 1.81919 11.4424 2.87592L13.0498 5.43154C13.2836 5.80334 13.6551 6.07015 14.0851 6.17511L17.0405 6.89657C18.2626 7.19489 18.7434 8.6576 17.9321 9.60901L15.9701 11.9099C15.6846 12.2447 15.5427 12.6764 15.5746 13.1131L15.7938 16.1146C15.8844 17.3557 14.6257 18.2597 13.4597 17.7909L10.6397 16.6574C10.2294 16.4925 9.77024 16.4925 9.35998 16.6574L6.53999 17.7909C5.37394 18.2597 4.11526 17.3557 4.20589 16.1146L4.42506 13.1131C4.45694 12.6764 4.31504 12.2447 4.0296 11.9099L2.06758 9.60901C1.2563 8.6576 1.73708 7.19489 2.95913 6.89657L5.91457 6.17511C6.34454 6.07015 6.71604 5.80334 6.94989 5.43154L8.55728 2.87592Z" fill="#F0D802"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex h-16 items-end justify-center self-stretch pt-10 font-semibold tracking-[0px]" >
                  <div className="flex h-6 flex-grow items-center justify-center gap-x-1.5" >
                    <div className="w-36 self-stretch text-left text-lg leading-6 text-gray-900" >
                      Featured Listings
                    </div>
                    <div className="flex h-4 flex-grow items-center justify-end pl-[869px] text-right text-sm leading-5 text-slate-700" >
                      <div className="w-10 self-stretch">See all</div>
                    </div>
                    <div className="h-4 w-4">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16.67 16.67" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M11.5021 9.95195C12.0054 9.41716 12.0054 8.58295 11.5021 8.04816L6.39448 2.62133C6.13162 2.34204 5.69212 2.32873 5.41283 2.59158C5.13355 2.85444 5.12023 3.29394 5.38309 3.57323L10.4907 9.00006L5.38309 14.4269C5.12023 14.7062 5.13355 15.1457 5.41283 15.4085C5.69212 15.6714 6.13162 15.6581 6.39448 15.3788L11.5021 9.95195Z" fill="#2E3A5C"/></svg>
                    </div>
                  </div>
                </div>
                <div className="flex flex-grow items-end justify-center self-stretch pt-5 tracking-[0px]" >
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
                        <div className="flex h-12 items-end justify-center self-stretch pt-1 text-left text-xs font-normal leading-[normal] text-black" >
                          <div className="flex h-full w-full items-start justify-center overflow-clip bg-white px-4" >
                            <div className="h-20 flex-grow">
                              Detox Digital Coin has identified the first in a series of an additional 20 behavioral health centers (BHCs) for acquisition in prime US locations earmarked for renting to qualified substance use disorder and recovery facilitators.
                            </div>
                          </div>
                        </div>
                        <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
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
                              <div className="w-14 self-stretch text-left">
                                PROPC
                              </div>
                              <div className="w-12 self-stretch text-right">
                                $2.03
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
                              <div className="w-10 self-stretch text-right">
                                4.5%
                              </div>
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
                        <div className="mt-1 h-12 self-stretch bg-white px-4 text-left text-xs font-normal leading-[normal] text-black" >
                          We are expanding this environmentally sustainable luxury resort that is home to lush rain forests and pristine beaches.
                        </div>
                        <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
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
                                $600K
                              </div>
                              <div className="w-9 self-stretch text-right">
                                7.2%
                              </div>
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
                        <div className="bg-image-3 flex-grow self-stretch bg-cover bg-center" />
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
                        <div className="mt-1 h-12 self-stretch bg-white px-4 text-left text-xs font-normal leading-[normal] text-black" >
                          We are expanding this environmentally sustainable luxury resort that is home to lush rain forests and pristine beaches.
                        </div>
                        <div className="flex h-16 items-center justify-center self-stretch leading-[normal]" >
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
                              <div className="w-8 self-stretch text-right">
                                $1.7
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
                              <div className="w-10 self-stretch text-right">
                                6.2%
                              </div>
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
                </div>
              </div>
              <div className="absolute left-0 top-1 flex h-[1024px] w-72 items-center justify-center text-left text-sm leading-5 tracking-[0px]" >
                <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch rounded-b-xl border-b border-r border-solid border-gray-300 bg-white pb-12 pt-6" >
                  <div className="flex h-14 items-center justify-center self-stretch" >
                    <div className="h-14 w-72 rounded">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 272 52" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_763_5732)"><mask id="mask0_763_5732" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="24" y="8" width="107" height="36"><path d="M130.2 8H24V44H130.2V8Z" fill="white"/></mask><g mask="url(#mask0_763_5732)"><path d="M33.9863 14.5406C33.9863 17.9344 31.7526 21.0765 28.9949 20.4474C26.2373 19.7588 24 15.4912 24 12.9398C24 10.3883 26.2337 8.23184 28.9949 8.01514C31.7491 8.02562 33.9863 11.1398 33.9863 14.5406Z" fill="#2E3A5C"/><path d="M47.1232 11.8073C47.1232 13.9184 44.8894 16.6376 42.1282 17.8679C39.3706 19.0982 37.1333 17.4101 37.1333 14.0792C37.1333 10.7483 39.367 7.88228 42.1282 8.01859C44.8859 8.1549 47.1232 9.71024 47.1232 11.8073Z" fill="#2E3A5C"/><path d="M60.2638 12.9397C60.2638 15.8302 58.0301 15.9735 55.2689 15.285C52.5112 14.6558 50.2739 13.3871 50.2739 11.339C50.2739 9.29081 52.5077 8.0011 55.2689 8.01508C58.0265 7.79838 60.2638 9.9409 60.2638 12.9397Z" fill="#2E3A5C"/><path d="M33.9863 28.7903C33.9863 31.5095 31.7526 34.1378 28.9949 33.3864C26.2373 32.7398 24 28.1926 24 25.4279C24 22.6633 26.2337 22.8275 28.9949 23.4357C31.7491 24.1697 33.9863 26.0151 33.9863 28.7903Z" fill="#2E3A5C"/><path d="M47.1232 23.0407C47.1232 25.732 44.8894 29.0069 42.1282 30.3526C39.3706 31.6982 37.1333 30.5658 37.1333 27.8186C37.1333 25.0714 39.367 21.7965 42.1282 20.5033C44.8859 19.2101 47.1232 20.3355 47.1232 23.0407Z" fill="#2E3A5C"/><path d="M60.2638 25.4279C60.2638 28.1017 58.0301 27.9654 55.2689 27.3223C52.5112 26.5743 50.2739 24.7883 50.2739 22.0621C50.2739 19.3359 52.5077 16.8368 55.2689 17.5638C58.0265 18.172 60.2638 22.6423 60.2638 25.4279Z" fill="#2E3A5C"/><path d="M33.9863 40.464C33.9863 42.5086 31.7526 43.8018 28.9949 43.7913C26.2373 44.008 24 41.862 24 38.8632C24 35.8644 26.2337 35.8329 28.9949 36.518C31.7491 37.1506 33.9863 38.4158 33.9863 40.464Z" fill="#2E3A5C"/><path d="M47.1232 37.7308C47.1232 41.0757 44.8894 43.9277 42.1282 43.7913C39.3706 43.6515 37.1333 42.0962 37.1333 40.0026C37.1333 37.9091 39.367 35.1724 42.1282 33.9421C44.8859 32.7083 47.1232 34.3999 47.1232 37.7308Z" fill="#2E3A5C"/><path d="M60.2638 38.8632C60.2638 41.3063 58.0301 43.5746 55.2689 43.7913C52.5112 43.7809 50.2739 40.6633 50.2739 37.266C50.2739 33.8687 52.5077 30.7301 55.2689 31.3627C58.0265 32.0512 60.2638 36.3153 60.2638 38.8667" fill="#2E3A5C"/><path d="M71.7899 44.0046V39.4225H66.887V44.0046H66.3843V35.2074H66.887V38.9157H71.7899V35.2074H72.3032V44.0046H71.7899Z" fill="#2E3A5C"/><path d="M82.8736 42.8617C82.0169 43.7075 80.9124 44.1304 79.5672 44.1304C78.222 44.1304 77.1211 43.7145 76.2715 42.8757C75.4148 42.0299 74.9829 40.9394 74.9829 39.6112C74.9829 38.2831 75.4077 37.1961 76.2573 36.3572C77.114 35.5114 78.2185 35.0885 79.5672 35.0885C80.9159 35.0885 82.0098 35.5044 82.8736 36.3433C83.7302 37.1891 84.1586 38.2796 84.1586 39.6112C84.1586 40.9429 83.7338 42.0264 82.8736 42.8652M82.5125 36.7137C81.7443 35.9588 80.7637 35.5813 79.5637 35.5813C78.3636 35.5813 77.4078 35.9588 76.6432 36.7137C75.875 37.4687 75.4962 38.4369 75.4962 39.6112C75.4962 40.7856 75.8714 41.7468 76.6325 42.4947C77.3972 43.2496 78.3742 43.6271 79.5672 43.6271C80.7602 43.6271 81.7443 43.2601 82.516 42.5192C83.2736 41.7712 83.6524 40.8031 83.6524 39.6112C83.6524 38.4194 83.2736 37.4617 82.516 36.7137" fill="#2E3A5C"/><path d="M86.8174 44.0046V35.2074H87.3165V43.5013H89.8299V44.0046H86.8174Z" fill="#2E3A5C"/><path d="M98.1664 42.6765C97.416 43.5642 96.4389 44.0046 95.2353 44.0046H92.2617V35.2074H95.2353C96.4318 35.2074 97.4053 35.6548 98.1523 36.539C98.8567 37.3674 99.2107 38.3879 99.2107 39.5938C99.2107 40.7996 98.8638 41.8377 98.1629 42.6765M97.7912 36.8816C97.1398 36.0952 96.2902 35.7002 95.2318 35.7002H92.7609V43.5013H95.2318C96.1451 43.5013 96.9381 43.1657 97.6142 42.4913C98.3364 41.7678 98.701 40.8031 98.701 39.5938C98.701 38.5208 98.3965 37.6156 97.7912 36.8816Z" fill="#2E3A5C"/><path d="M101.922 35.2074H101.423V44.0046H101.922V35.2074Z" fill="#2E3A5C"/><path d="M104.765 36.539V44.0046H104.27V35.1444L110.918 42.8477V35.2073H111.431V44.1549L104.765 36.539Z" fill="#2E3A5C"/><path d="M122.093 42.7883C121.237 43.683 120.097 44.1303 118.684 44.1303C117.272 44.1303 116.238 43.7144 115.392 42.8721C114.535 42.0298 114.104 40.9393 114.104 39.6077C114.104 38.276 114.532 37.2135 115.392 36.3677C116.256 35.5114 117.353 35.085 118.684 35.085C120.281 35.085 121.538 35.6896 122.454 36.8954L122.04 37.2065C121.24 36.123 120.122 35.5778 118.684 35.5778C117.513 35.5778 116.536 35.9622 115.767 36.7242C114.992 37.4896 114.606 38.4508 114.606 39.6112C114.606 40.7716 114.985 41.7362 115.75 42.4947C116.532 43.2496 117.513 43.627 118.684 43.627C119.937 43.627 120.953 43.2146 121.718 42.3828C122.299 41.7607 122.631 41.0512 122.716 40.2648H119.771V39.758H123.276C123.276 40.9603 122.883 41.9704 122.093 42.7918" fill="#2E3A5C"/><path d="M128.533 43.9346C128.207 44.0499 127.825 44.1059 127.382 44.1059C126.019 44.1059 125.141 43.4663 124.752 42.1941L125.262 42.0228C125.552 43.0783 126.26 43.6026 127.382 43.6026C128.026 43.6026 128.529 43.4453 128.894 43.1342C129.269 42.8162 129.457 42.3443 129.457 41.7292C129.457 41.1455 129.237 40.6597 128.791 40.2752C128.678 40.1704 128.501 40.0515 128.257 39.9152C128.016 39.7859 127.708 39.6356 127.336 39.4748C126.628 39.1603 126.143 38.8911 125.888 38.6605C125.456 38.2935 125.237 37.8042 125.237 37.1925C125.237 36.5808 125.456 36.095 125.899 35.728C126.327 35.3471 126.862 35.1583 127.492 35.1583C128.54 35.1583 129.283 35.5463 129.715 36.3187L129.227 36.5284C129.06 36.2593 128.862 36.0566 128.625 35.9238C128.334 35.742 127.959 35.6546 127.488 35.6546C127.018 35.6546 126.589 35.7909 126.267 36.0601C125.917 36.3467 125.743 36.7242 125.743 37.1925C125.743 37.6119 125.927 37.9789 126.295 38.29C126.501 38.4542 126.915 38.6779 127.538 38.9541C127.931 39.1253 128.267 39.2966 128.55 39.4678C128.834 39.6356 129.064 39.8069 129.237 39.9781C129.719 40.4465 129.959 41.0337 129.959 41.7292C129.959 42.8476 129.481 43.5816 128.526 43.9346" fill="#2E3A5C"/><path d="M71.4857 24.9211C71.4857 27.2384 70.4661 27.2384 70.0838 27.2384C69.4325 27.2384 68.9793 26.9518 68.643 26.3401L68.3528 25.8159L66.4766 26.9797L66.7244 27.4411C67.4394 28.7518 68.5793 29.4194 70.1121 29.4194C71.7441 29.4194 73.6982 28.6469 73.6982 24.9735V8.0011H71.4892V24.9211H71.4857Z" fill="#2E3A5C"/><path d="M87.773 24.0578C87.773 25.0434 87.4048 25.8089 86.6472 26.3926C85.9322 26.9483 85.0224 27.2314 83.9498 27.2314C82.8771 27.2314 81.9497 26.9588 81.2487 26.417C80.5124 25.8473 80.1549 25.0749 80.1549 24.0578V8.0011H77.9707V24.0578C77.9707 25.7285 78.576 27.0776 79.7832 28.0702C80.8947 28.9615 82.2966 29.4159 83.9498 29.4159C85.6029 29.4159 87.0579 28.972 88.1199 28.0947C89.3553 27.0881 89.9819 25.732 89.9819 24.0578V8.0011H87.773V24.0578Z" fill="#2E3A5C"/><path d="M108.033 23.7607L94.4214 8.0011V29.6361H96.5596V13.8345L110.199 29.6361V8.0011H108.033V23.7607Z" fill="#2E3A5C"/><path d="M121.839 8.0011L113.647 29.4159H115.888L118.033 23.953H125.665L127.786 29.4159H130.051L121.835 8.0011H121.839ZM124.794 21.793H118.883L121.835 13.8065L124.791 21.793H124.794Z" fill="#2E3A5C"/></g></g><defs><clipPath id="clip0_763_5732"><rect width="106.2" height="36" fill="white" transform="translate(24 8)"/></clipPath></defs></svg>
                    </div>
                  </div>
                  <div className="flex h-9 w-60 items-center justify-center font-normal text-slate-400" >
                    <div className="flex flex-grow items-center self-stretch rounded-md border border-solid border-gray-300 bg-white py-2 pl-3 pr-40" >
                      <div className="flex h-5 flex-grow items-center justify-between gap-x-2" >
                        <div className="h-5 w-5">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.58317 1.66663C5.21092 1.66663 1.6665 5.21104 1.6665 9.58329C1.6665 13.9555 5.21092 17.5 9.58317 17.5C11.4691 17.5 13.2011 16.8405 14.5609 15.7396L16.9106 18.0892C17.236 18.4147 17.7637 18.4147 18.0891 18.0892C18.4145 17.7638 18.4145 17.2361 18.0891 16.9107L15.7394 14.5611C16.8404 13.2012 17.4998 11.4692 17.4998 9.58329C17.4998 5.21104 13.9554 1.66663 9.58317 1.66663ZM3.33317 9.58329C3.33317 6.13151 6.13139 3.33329 9.58317 3.33329C13.035 3.33329 15.8332 6.13151 15.8332 9.58329C15.8332 13.0351 13.035 15.8333 9.58317 15.8333C6.13139 15.8333 3.33317 13.0351 3.33317 9.58329Z" fill="#667185"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">Search</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex h-14 items-end justify-center self-stretch rounded bg-zinc-400/30 py-3 px-4 font-medium text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.9123 1.98757C10.7645 1.18416 9.2369 1.18416 8.08917 1.98757L2.35786 5.99949C1.39234 6.67535 0.855489 7.81083 0.94588 8.98592L1.5334 16.6236C1.6442 18.0641 2.94937 19.1111 4.37959 18.9068L7.02093 18.5294C8.25255 18.3535 9.16738 17.2987 9.16738 16.0545V15C9.16738 14.5398 9.54047 14.1667 10.0007 14.1667C10.4609 14.1667 10.834 14.5398 10.834 15V16.0545C10.834 17.2987 11.7489 18.3535 12.9805 18.5294L15.6218 18.9068C17.0521 19.1111 18.3572 18.0641 18.468 16.6236L19.0555 8.98592C19.1459 7.81083 18.6091 6.67535 17.6436 5.99949L11.9123 1.98757ZM9.04494 3.35296C9.61881 2.95125 10.3826 2.95125 10.9565 3.35296L16.6878 7.36488C17.1706 7.70281 17.439 8.27055 17.3938 8.85809L16.8063 16.4958C16.7693 16.976 16.3343 17.3249 15.8575 17.2568L13.2162 16.8795C12.8057 16.8209 12.5007 16.4693 12.5007 16.0545V15C12.5007 13.6193 11.3814 12.5 10.0007 12.5C8.62 12.5 7.50071 13.6193 7.50071 15V16.0545C7.50071 16.4693 7.19577 16.8209 6.78523 16.8795L4.14388 17.2568C3.66715 17.3249 3.23209 16.976 3.19515 16.4958L2.60764 8.85809C2.56244 8.27055 2.83087 7.70281 3.31363 7.36488L9.04494 3.35296Z" fill="#2E3A5C"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Home</div>
                    </div>
                  </div>
                  <div className="flex h-6 w-56 items-end justify-center pt-1 font-normal text-slate-700" >
                    <div className="flex flex-grow items-center justify-between gap-x-3 self-stretch" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.41091 12.4664C4.08547 12.7918 4.08547 13.3195 4.41091 13.6449C4.73634 13.9703 5.26398 13.9703 5.58942 13.6449L8.38997 10.8443L9.47305 11.7289C9.81338 12.0068 10.311 11.9727 10.6103 11.651L13.3359 8.72103L14.3922 9.84781C14.707 10.1836 15.2344 10.2006 15.5701 9.8858C15.9059 9.57103 15.9229 9.04366 15.6081 8.7079L13.9414 6.93013C13.7835 6.76167 13.5628 6.6663 13.3319 6.66674C13.101 6.66719 12.8806 6.76343 12.7233 6.93249L9.92214 9.94378L8.86061 9.07686C8.52923 8.80623 8.04677 8.83052 7.74424 9.13304L4.41091 12.4664Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16683 2.5C2.32588 2.5 0.833496 3.99239 0.833496 5.83333V14.1667C0.833496 16.0076 2.32588 17.5 4.16683 17.5H15.8335C17.6744 17.5 19.1668 16.0076 19.1668 14.1667V5.83333C19.1668 3.99239 17.6744 2.5 15.8335 2.5H4.16683ZM2.50016 5.83333C2.50016 4.91286 3.24636 4.16667 4.16683 4.16667H15.8335C16.754 4.16667 17.5002 4.91286 17.5002 5.83333V14.1667C17.5002 15.0871 16.754 15.8333 15.8335 15.8333H4.16683C3.24635 15.8333 2.50016 15.0871 2.50016 14.1667V5.83333Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Market</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-end justify-center pt-4 font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_763_5792)"><path d="M8.82139 0.916992C8.36116 0.916992 7.98806 1.29009 7.98806 1.75033C7.98806 2.21056 8.36116 2.58366 8.82139 2.58366H10.3451L1.16107 11.7677C0.835633 12.0931 0.835633 12.6207 1.16107 12.9462C1.48651 13.2716 2.01414 13.2716 2.33958 12.9462L11.5236 3.76217V5.28586C11.5236 5.7461 11.8967 6.11919 12.3569 6.11919C12.8172 6.11919 13.1903 5.7461 13.1903 5.28586V1.75033C13.1903 1.29009 12.8172 0.916992 12.3569 0.916992H8.82139Z" fill="black"/><path d="M18.8387 8.23222C19.1642 7.90678 19.1642 7.37915 18.8387 7.05371C18.5133 6.72827 17.9857 6.72827 17.6602 7.05371L8.47622 16.2377V14.714C8.47622 14.2538 8.10313 13.8807 7.64289 13.8807C7.18265 13.8807 6.80956 14.2538 6.80956 14.714V18.2496C6.80956 18.7098 7.18265 19.0829 7.64289 19.0829H11.1784C11.6387 19.0829 12.0118 18.7098 12.0118 18.2496C12.0118 17.7893 11.6387 17.4162 11.1784 17.4162H9.65473L18.8387 8.23222Z" fill="black"/></g><defs><clipPath id="clip0_763_5792"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                      </div>
                      <div className="flex-grow self-stretch">Trade</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-end justify-center pt-4 font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.35381 2.5C2.86965 2.5 1.6665 3.70314 1.6665 5.1873V14.1667C1.6665 16.0076 3.15889 17.5 4.99984 17.5H14.9998C16.8408 17.5 18.3332 16.0076 18.3332 14.1667V8.7963C18.3332 6.9557 16.842 5.46296 15.0007 5.46296H12.4079C12.3747 5.41405 12.3364 5.35183 12.293 5.27427C12.1756 5.06429 12.0614 4.81759 11.9304 4.53459C11.8993 4.46744 11.8672 4.39822 11.834 4.32699C11.6747 3.98558 11.4816 3.58459 11.2581 3.26646C11.0726 3.00239 10.6672 2.5 10.0113 2.5H4.35381ZM10.4062 5.2098C10.4442 5.29197 10.4835 5.37702 10.5238 5.46296H3.33317V5.1873C3.33317 4.62362 3.79012 4.16667 4.35381 4.16667H9.85146C9.86383 4.18236 9.87814 4.20148 9.89437 4.22458C10.0215 4.40559 10.1584 4.67764 10.3237 5.03184C10.3504 5.08899 10.3779 5.14863 10.4062 5.2098ZM4.99984 15.8333C4.07936 15.8333 3.33317 15.0871 3.33317 14.1667V7.12963H12.065C12.0672 7.12968 12.0694 7.12971 12.0716 7.12974C12.0811 7.12987 12.0906 7.12983 12.1001 7.12963H15.0007C15.9208 7.12963 16.6665 7.87547 16.6665 8.7963V9.16667H14.9998C13.6191 9.16667 12.4998 10.286 12.4998 11.6667C12.4998 13.0474 13.6191 14.1667 14.9998 14.1667H16.6665C16.6665 15.0871 15.9203 15.8333 14.9998 15.8333H4.99984ZM14.1665 11.6667C14.1665 11.2064 14.5396 10.8333 14.9998 10.8333H16.6665V12.5H14.9998C14.5396 12.5 14.1665 12.1269 14.1665 11.6667ZM9.79266 4.10269C9.79267 4.10227 9.79611 4.10471 9.80296 4.1113C9.79607 4.10641 9.79265 4.10312 9.79266 4.10269Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Assets</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-end justify-center pt-4 font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1166 8.45418C10.3518 8.27777 10.4082 7.94834 10.2452 7.7037C10.0512 7.41283 9.63969 7.37208 9.39249 7.61927L8.92243 8.08934C8.59699 8.41477 8.06935 8.41477 7.74392 8.08934C7.41848 7.7639 7.41848 7.23626 7.74392 6.91083L8.21398 6.44076C9.20487 5.44987 10.8546 5.61322 11.6319 6.7792C12.2857 7.75983 12.0595 9.08037 11.1166 9.78751L11.0761 9.81785C10.9232 9.93257 10.8332 10.1126 10.8332 10.3038L10.8332 10.4167C10.8332 10.877 10.4601 11.2501 9.99984 11.2501C9.5396 11.2501 9.1665 10.877 9.1665 10.4167L9.1665 10.3038C9.1665 9.58801 9.50351 8.91399 10.0761 8.48452L10.1166 8.45418Z" fill="black"/><path d="M9.1665 12.9167C9.1665 13.377 9.5396 13.7501 9.99984 13.7501C10.4601 13.7501 10.8332 13.377 10.8332 12.9167C10.8332 12.4565 10.4601 12.0834 9.99984 12.0834C9.5396 12.0834 9.1665 12.4565 9.1665 12.9167Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.6665 10.0001C1.6665 5.39771 5.39746 1.66675 9.99984 1.66675C14.6022 1.66675 18.3332 5.39771 18.3332 10.0001C18.3332 14.6025 14.6022 18.3334 9.99984 18.3334C5.39746 18.3334 1.6665 14.6025 1.6665 10.0001ZM9.99984 3.33341C6.31794 3.33341 3.33317 6.31818 3.33317 10.0001C3.33317 13.682 6.31794 16.6667 9.99984 16.6667C13.6817 16.6667 16.6665 13.682 16.6665 10.0001C16.6665 6.31818 13.6817 3.33341 9.99984 3.33341Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">FAQs</div>
                    </div>
                  </div>
                  <div className="mt-3 h-3.5 self-stretch bg-gray-100" />
                  <div className="flex w-56 flex-grow items-end justify-center pt-96 font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.00045 17.5001L7.50045 2.50008M12.5004 17.5001L15.0004 2.50007M3.33378 6.66674L17.5004 6.66674M2.50043 13.3334L16.6671 13.3334" stroke="#101928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Logout</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex h-[-40px] w-0 items-center pr-0 text-left tracking-[0px]" >
              <div className="ml-[-1128px] flex h-[-40px] w-[1088px] items-start justify-center" >
                <div className="flex h-80 flex-grow items-center justify-between gap-x-9" >
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow flex-col items-start justify-center gap-y-3.5 self-stretch rounded-xl border border-solid border-gray-300 bg-white py-11 pl-9 pr-11" >
                      <div className="h-5 w-52 pl-2.5 text-xl font-bold leading-5 text-black" >
                        Join Our Community
                      </div>
                      <div className="flex h-16 items-end justify-center self-stretch pt-3 text-sm font-normal leading-[normal] text-black" >
                        <div className="flex flex-grow items-center justify-center self-stretch border-b border-solid border-gray-300 py-2.5" >
                          <div className="flex flex-grow self-stretch">
                            <span>
                              The  Juna Global Community is home to millions of users from 200+
                              <br />
                              countries with support 20+ languages.
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex h-9 w-36 items-end justify-center pt-5 text-sm font-normal leading-[normal] text-black" >
                        <div className="h-4 flex-grow pl-2.5">
                          English Community
                        </div>
                      </div>
                      <div className="h-11 w-80">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 316 44" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_406_11545)"><path d="M34 22C34 28.63 28.63 34 22 34C15.37 34 10 28.63 10 22C10 15.37 15.37 10 22 10C28.63 10 34 15.37 34 22Z" fill="url(#paint0_linear_406_11545)"/><path d="M19.8002 27.5C19.4102 27.5 19.4802 27.35 19.3402 26.98L18.2002 23.22L25.2802 18.8L26.1102 19.02L25.4202 20.9L19.8002 27.5Z" fill="#C8DAEA"/><path d="M19.7998 27.5C20.0998 27.5 20.2298 27.36 20.3998 27.2C20.6598 26.95 23.9998 23.7 23.9998 23.7L21.9498 23.2L20.0498 24.4L19.7998 27.4V27.5Z" fill="#A9C9DD"/><path d="M19.9999 24.44L24.8399 28.01C25.3899 28.31 25.7899 28.16 25.9299 27.5L27.8999 18.22C28.0999 17.41 27.5899 17.05 27.0599 17.29L15.4999 21.75C14.7099 22.07 14.7199 22.51 15.3599 22.7L18.3299 23.63L25.1999 19.3C25.5199 19.1 25.8199 19.21 25.5799 19.43L19.9999 24.44Z" fill="url(#paint1_linear_406_11545)"/></g><g clip-path="url(#clip1_406_11545)"><path d="M50.689 16.1936L59.3561 27.7796H61.3187L52.6516 16.1936H50.689Z" fill="black"/><path d="M55.9865 10.1318C49.4393 10.1318 44.1318 15.4393 44.1318 21.9865C44.1318 28.5337 49.4393 33.8412 55.9865 33.8412C62.5337 33.8412 67.8412 28.5337 67.8412 21.9865C67.8412 15.4393 62.5337 10.1318 55.9865 10.1318ZM58.8928 28.7052L54.947 23.4294L50.0634 28.7052H48.8081L54.3861 22.6794L48.8432 15.2678H53.1153L56.7492 20.1267L61.2466 15.2678H62.5019L57.31 20.8769L63.1649 28.7052H58.8928Z" fill="black"/></g><g clip-path="url(#clip2_406_11545)"><path d="M90 34C96.6274 34 102 28.6274 102 22C102 15.3726 96.6274 10 90 10C83.3726 10 78 15.3726 78 22C78 28.6274 83.3726 34 90 34Z" fill="#FF4500"/><path d="M97.9827 22.1144C97.9827 21.1416 97.196 20.3691 96.2374 20.3691C95.7654 20.3691 95.336 20.555 95.0214 20.8555C93.8198 19.9971 92.1744 19.4392 90.3432 19.3678L91.1443 15.6195L93.748 16.1774C93.7768 16.8355 94.3203 17.3648 94.9928 17.3648C95.6795 17.3648 96.2374 16.807 96.2374 16.12C96.2374 15.4334 95.6795 14.8755 94.9928 14.8755C94.5064 14.8755 94.0771 15.1616 93.8768 15.5766L90.9728 14.9614C90.887 14.947 90.8011 14.9614 90.7438 15.0043C90.6723 15.0472 90.6294 15.1187 90.6152 15.2046L89.728 19.3819C87.8683 19.4392 86.1944 19.9971 84.9784 20.8699C84.6638 20.5694 84.2344 20.3835 83.7624 20.3835C82.7896 20.3835 82.0171 21.1702 82.0171 22.1288C82.0171 22.844 82.4462 23.4448 83.0472 23.7168C83.0184 23.8883 83.0043 24.06 83.0043 24.2462C83.0043 26.9355 86.1374 29.1246 90 29.1246C93.8627 29.1246 96.9958 26.9499 96.9958 24.2462C96.9958 24.0744 96.9814 23.8883 96.9528 23.7168C97.5536 23.4448 97.9827 22.8296 97.9827 22.1144ZM85.9942 23.359C85.9942 22.6723 86.552 22.1144 87.239 22.1144C87.9256 22.1144 88.4835 22.6723 88.4835 23.359C88.4835 24.0456 87.9256 24.6038 87.239 24.6038C86.552 24.6179 85.9942 24.0456 85.9942 23.359ZM92.9614 26.6638C92.103 27.5222 90.472 27.5795 90 27.5795C89.5136 27.5795 87.8827 27.5078 87.0384 26.6638C86.9099 26.535 86.9099 26.3347 87.0384 26.2059C87.1672 26.0774 87.3675 26.0774 87.4963 26.2059C88.04 26.7496 89.1846 26.9355 90 26.9355C90.8155 26.9355 91.9742 26.7496 92.5035 26.2059C92.6323 26.0774 92.8326 26.0774 92.9614 26.2059C93.0758 26.3347 93.0758 26.535 92.9614 26.6638ZM92.7323 24.6179C92.0456 24.6179 91.4878 24.06 91.4878 23.3734C91.4878 22.6867 92.0456 22.1288 92.7323 22.1288C93.4192 22.1288 93.9771 22.6867 93.9771 23.3734C93.9771 24.0456 93.4192 24.6179 92.7323 24.6179Z" fill="white"/></g><g clip-path="url(#clip3_406_11545)"><path fill-rule="evenodd" clip-rule="evenodd" d="M124 34C130.627 34 136 28.6274 136 22C136 15.3726 130.627 10 124 10C117.373 10 112 15.3726 112 22C112 28.6274 117.373 34 124 34Z" fill="#FF0002"/><path fill-rule="evenodd" clip-rule="evenodd" d="M122.348 24.0899L122.347 19.5625L126.67 21.834L122.348 24.0899ZM131.84 18.778C131.84 18.778 131.683 17.6677 131.204 17.1787C130.595 16.5367 129.913 16.5337 129.601 16.4964C127.362 16.3333 124.003 16.3333 124.003 16.3333H123.996C123.996 16.3333 120.638 16.3333 118.399 16.4964C118.086 16.5337 117.405 16.5367 116.796 17.1787C116.316 17.6677 116.16 18.778 116.16 18.778C116.16 18.778 116 20.0822 116 21.3858V22.6085C116 23.9126 116.16 25.2163 116.16 25.2163C116.16 25.2163 116.316 26.3266 116.796 26.8156C117.405 27.4576 118.204 27.4375 118.56 27.5044C119.84 27.6283 124 27.6666 124 27.6666C124 27.6666 127.362 27.6615 129.601 27.4984C129.913 27.4606 130.595 27.4576 131.204 26.8156C131.683 26.3266 131.84 25.2163 131.84 25.2163C131.84 25.2163 132 23.9126 132 22.6085V21.3858C132 20.0822 131.84 18.778 131.84 18.778Z" fill="white"/></g><path d="M168.5 22C168.5 16.201 163.799 11.5 158 11.5C152.201 11.5 147.5 16.201 147.5 22C147.5 27.799 152.201 32.5 158 32.5C163.799 32.5 168.5 27.799 168.5 22Z" fill="#1275B1"/><path d="M155.464 17.2691C155.464 17.97 154.856 18.5382 154.107 18.5382C153.358 18.5382 152.75 17.97 152.75 17.2691C152.75 16.5682 153.358 16 154.107 16C154.856 16 155.464 16.5682 155.464 17.2691Z" fill="white"/><path d="M152.936 19.4712H155.255V26.5001H152.936V19.4712Z" fill="white"/><path d="M158.99 19.4711H156.67V26.5H158.99C158.99 26.5 158.99 24.2872 158.99 22.9037C158.99 22.0732 159.273 21.2391 160.404 21.2391C161.683 21.2391 161.675 22.3259 161.669 23.1678C161.662 24.2683 161.68 25.3914 161.68 26.5H164V22.7903C163.98 20.4216 163.363 19.3301 161.332 19.3301C160.126 19.3301 159.379 19.8776 158.99 20.3729V19.4711Z" fill="white"/><path d="M202.5 22C202.5 19.2152 201.394 16.5445 199.425 14.5754C197.455 12.6063 194.785 11.5 192 11.5C189.356 11.4976 186.808 12.4927 184.866 14.2866C182.924 16.0805 181.73 18.5412 181.523 21.177C181.315 23.8129 182.11 26.4299 183.748 28.5053C185.386 30.5807 187.747 31.9617 190.359 32.3725V25.0345H187.695V22H190.36V19.687C190.36 17.056 191.928 15.601 194.326 15.601C195.475 15.601 196.677 15.8065 196.677 15.8065V18.391H195.352C194.047 18.391 193.642 19.201 193.642 20.0305V22H196.554L196.089 25.0345H193.641V32.3725C196.111 31.9814 198.36 30.7219 199.984 28.8204C201.608 26.919 202.5 24.5005 202.5 22Z" fill="#1877F2"/><path d="M196.087 25.0346L196.552 22.0001H193.641V20.0306C193.641 19.2011 194.046 18.3911 195.351 18.3911H196.675V15.8051C196.675 15.8051 195.474 15.5996 194.325 15.5996C191.925 15.5996 190.359 17.0546 190.359 19.6856V22.0001H187.695V25.0346H190.36V32.3726C191.448 32.5437 192.555 32.5437 193.642 32.3726V25.0346H196.087Z" fill="white"/><path d="M232 11.5H220C217.515 11.5 215.5 13.5147 215.5 16V28C215.5 30.4853 217.515 32.5 220 32.5H232C234.485 32.5 236.5 30.4853 236.5 28V16C236.5 13.5147 234.485 11.5 232 11.5Z" fill="url(#paint2_radial_406_11545)"/><path d="M232 11.5H220C217.515 11.5 215.5 13.5147 215.5 16V28C215.5 30.4853 217.515 32.5 220 32.5H232C234.485 32.5 236.5 30.4853 236.5 28V16C236.5 13.5147 234.485 11.5 232 11.5Z" fill="url(#paint3_radial_406_11545)"/><path d="M232 11.5H220C217.515 11.5 215.5 13.5147 215.5 16V28C215.5 30.4853 217.515 32.5 220 32.5H232C234.485 32.5 236.5 30.4853 236.5 28V16C236.5 13.5147 234.485 11.5 232 11.5Z" fill="url(#paint4_radial_406_11545)"/><path d="M231.25 17.875C231.25 18.4963 230.746 19 230.125 19C229.504 19 229 18.4963 229 17.875C229 17.2537 229.504 16.75 230.125 16.75C230.746 16.75 231.25 17.2537 231.25 17.875Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M226 25.75C228.071 25.75 229.75 24.0711 229.75 22C229.75 19.929 228.071 18.25 226 18.25C223.929 18.25 222.25 19.929 222.25 22C222.25 24.0711 223.929 25.75 226 25.75ZM226 24.25C227.243 24.25 228.25 23.2427 228.25 22C228.25 20.7573 227.243 19.75 226 19.75C224.757 19.75 223.75 20.7573 223.75 22C223.75 23.2427 224.757 24.25 226 24.25Z" fill="white"/><path fill-rule="evenodd" clip-rule="evenodd" d="M218.5 21.7C218.5 19.1798 218.5 17.9196 218.99 16.957C219.422 16.1103 220.11 15.4219 220.957 14.9905C221.92 14.5 223.18 14.5 225.7 14.5H226.3C228.82 14.5 230.08 14.5 231.043 14.9905C231.89 15.4219 232.578 16.1103 233.01 16.957C233.5 17.9196 233.5 19.1798 233.5 21.7V22.3C233.5 24.8202 233.5 26.0804 233.01 27.0429C232.578 27.8897 231.89 28.5781 231.043 29.0095C230.08 29.5 228.82 29.5 226.3 29.5H225.7C223.18 29.5 221.92 29.5 220.957 29.0095C220.11 28.5781 219.422 27.8897 218.99 27.0429C218.5 26.0804 218.5 24.8202 218.5 22.3V21.7ZM225.7 16H226.3C227.585 16 228.458 16.0012 229.133 16.0563C229.791 16.1101 230.127 16.2074 230.362 16.327C230.926 16.6146 231.385 17.0735 231.673 17.638C231.793 17.8726 231.89 18.2089 231.944 18.8666C231.999 19.5417 232 20.4151 232 21.7V22.3C232 23.5849 231.999 24.4583 231.944 25.1334C231.89 25.7911 231.793 26.1274 231.673 26.362C231.385 26.9264 230.926 27.3854 230.362 27.673C230.127 27.7925 229.791 27.89 229.133 27.9437C228.458 27.9988 227.585 28 226.3 28H225.7C224.415 28 223.542 27.9988 222.867 27.9437C222.209 27.89 221.873 27.7925 221.638 27.673C221.074 27.3854 220.615 26.9264 220.327 26.362C220.207 26.1274 220.11 25.7911 220.056 25.1334C220.001 24.4583 220 23.5849 220 22.3V21.7C220 20.4151 220.001 19.5417 220.056 18.8666C220.11 18.2089 220.207 17.8726 220.327 17.638C220.615 17.0735 221.074 16.6146 221.638 16.327C221.873 16.2074 222.209 16.1101 222.867 16.0563C223.542 16.0012 224.415 16 225.7 16Z" fill="white"/><g clip-path="url(#clip4_406_11545)"><path fill-rule="evenodd" clip-rule="evenodd" d="M271.473 21.7383C271.473 28.0263 266.376 33.1237 260.088 33.1237C253.801 33.1237 248.704 28.0263 248.704 21.7383C248.704 15.4504 253.801 10.353 260.088 10.353C266.376 10.353 271.473 15.4504 271.473 21.7383ZM262.823 17.5083C264.407 18.0522 265.566 18.8665 265.338 20.382C265.173 21.4918 264.556 22.0285 263.735 22.2164C264.861 22.8002 265.245 23.908 264.888 25.2475C264.211 27.1752 262.603 27.3375 260.463 26.9346L259.943 29.0067L258.689 28.695L259.202 26.6506C258.877 26.5701 258.544 26.484 258.202 26.3922L257.687 28.4466L256.435 28.1348L256.953 26.0583L254.427 25.4233L255.05 23.9925C255.05 23.9925 255.975 24.2367 255.962 24.2189C256.317 24.3064 256.475 24.0758 256.537 23.9228L257.945 18.2984C257.961 18.0329 257.869 17.6984 257.361 17.5717C257.38 17.5581 256.45 17.346 256.45 17.346L256.783 16.0113L259.313 16.6356L259.828 14.5826L261.081 14.8944L260.577 16.9068C260.915 16.9829 261.253 17.0605 261.583 17.1424L262.083 15.1428L263.337 15.4546L262.823 17.5083ZM259.822 20.9329C260.677 21.1595 262.536 21.6524 262.86 20.36C263.191 19.0377 261.384 18.6384 260.5 18.4429C260.4 18.4207 260.311 18.4011 260.239 18.3832L259.615 20.8789C259.674 20.8936 259.744 20.9122 259.822 20.9329ZM258.855 24.9512C259.878 25.2207 262.116 25.8102 262.472 24.3862C262.836 22.9301 260.667 22.4451 259.608 22.2085C259.49 22.1821 259.385 22.1587 259.3 22.1375L258.611 24.8881C258.681 24.9054 258.763 24.927 258.855 24.9512Z" fill="#F7931A"/></g><path d="M294 11.5C288.202 11.5 283.5 16.2016 283.5 22C283.5 27.7984 288.202 32.5 294 32.5C299.798 32.5 304.5 27.7984 304.5 22C304.5 16.2016 299.798 11.5 294 11.5ZM300 17.4461L299.044 18.3625C298.959 18.4258 298.92 18.5289 298.936 18.6297V25.3727C298.92 25.4758 298.959 25.5789 299.044 25.6398L299.981 26.5563V26.7602H295.275V26.5656L296.243 25.6258C296.339 25.5297 296.339 25.5016 296.339 25.3586V19.9023L293.644 26.7367H293.28L290.145 19.9023V24.4844C290.116 24.6766 290.184 24.8711 290.32 25.0094L291.581 26.5352V26.7391H288V26.5352L289.261 25.0094C289.327 24.9408 289.377 24.8575 289.405 24.7664C289.434 24.6752 289.441 24.5786 289.425 24.4844V19.1875C289.441 19.0398 289.385 18.8969 289.273 18.7961L288.152 17.4461V17.2422H291.633L294.319 23.1367L296.684 17.2469H300V17.4461Z" fill="black"/><defs><linearGradient id="paint0_linear_406_11545" x1="25.517" y1="13.793" x2="19.517" y2="27.7928" gradientUnits="userSpaceOnUse"><stop stop-color="#37AEE2"/><stop offset="1" stop-color="#1E96C8"/></linearGradient><linearGradient id="paint1_linear_406_11545" x1="22.899" y1="22.3755" x2="25.399" y2="26.3755" gradientUnits="userSpaceOnUse"><stop stop-color="#EFF7FC"/><stop offset="1" stop-color="white"/></linearGradient><radialGradient id="paint2_radial_406_11545" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(223 27.25) rotate(-55.3758) scale(19.1397)"><stop stop-color="#B13589"/><stop offset="0.79309" stop-color="#C62F94"/><stop offset="1" stop-color="#8A3AC8"/></radialGradient><radialGradient id="paint3_radial_406_11545" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(222.25 33.25) rotate(-65.1363) scale(16.9457)"><stop stop-color="#E0E8B7"/><stop offset="0.444662" stop-color="#FB8A2E"/><stop offset="0.71474" stop-color="#E2425C"/><stop offset="1" stop-color="#E2425C" stop-opacity="0"/></radialGradient><radialGradient id="paint4_radial_406_11545" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(214.375 12.25) rotate(-8.1301) scale(29.1682 6.23877)"><stop offset="0.156701" stop-color="#406ADC"/><stop offset="0.467799" stop-color="#6A45BE"/><stop offset="1" stop-color="#6A45BE" stop-opacity="0"/></radialGradient><clipPath id="clip0_406_11545"><rect width="24" height="24" fill="white" transform="translate(10 10)"/></clipPath><clipPath id="clip1_406_11545"><rect width="24" height="24" fill="white" transform="translate(44 10)"/></clipPath><clipPath id="clip2_406_11545"><rect width="24" height="24" fill="white" transform="translate(78 10)"/></clipPath><clipPath id="clip3_406_11545"><rect width="24" height="24" fill="white" transform="translate(112 10)"/></clipPath><clipPath id="clip4_406_11545"><rect width="24" height="24" fill="white" transform="translate(248 10)"/></clipPath></defs></svg>
                      </div>
                      <div className="flex h-7 w-48 items-end justify-end pl-2.5 pt-2 text-sm font-medium leading-5 text-green-600" >
                        <div className="flex flex-grow items-center justify-between gap-x-2.5 self-stretch" >
                          <div className="flex-grow self-stretch">
                            View all 20+ languages
                          </div>
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7.99992H14M14 7.99992L9.33333 3.33325M14 7.99992L9.33333 12.6666" stroke="#00A650" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow flex-col items-start justify-center gap-y-7 self-stretch rounded-xl border border-solid border-gray-300 bg-white py-11 px-9" >
                      <div className="h-5 w-56 text-xl font-bold leading-5 text-black" >
                        24/7 Customer Service
                      </div>
                      <div className="flex h-14 items-center justify-center self-stretch text-base font-normal leading-[normal] text-black" >
                        <div className="flex flex-grow items-center justify-center self-stretch border-b border-solid border-gray-300 py-2.5" >
                          <div className="flex-grow self-stretch">
                            Your questions, answered. Contact Juna customer support with your questions at any time.
                          </div>
                        </div>
                      </div>
                      <div className="flex w-40 flex-grow items-end justify-center pt-28 text-sm font-medium leading-5 text-green-600" >
                        <div className="flex h-5 flex-grow items-center justify-between gap-x-2.5 pl-2.5" >
                          <div className="flex-grow self-stretch">
                            Juna Help Center
                          </div>
                          <div className="h-4 w-4">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2 7.99992H14M14 7.99992L9.33333 3.33325M14 7.99992L9.33333 12.6666" stroke="#00A650" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default NewListings