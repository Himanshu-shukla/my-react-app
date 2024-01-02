import React from 'react'

function Deposit() {
    return (
        <div className="font-inter inline-flex h-[1024px] w-[1440px] resize flex-col items-center gap-y-10 overflow-hidden bg-white px-8 pb-64 pt-8 tracking-[0px]" >
          <div className="flex h-9 items-center justify-between gap-x-[1122px] self-stretch text-sm font-semibold leading-[Symbol(MIXED_VALUE)]" >
            <div className="flex w-40 items-center justify-center self-stretch text-right leading-5 text-slate-700" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-3" >
                <div className="flex h-5 flex-grow items-center justify-between gap-x-2" >
                  <div className="h-5 w-5">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.91083 10.5889C1.58539 10.2635 1.58539 9.73586 1.91083 9.41042L5.24416 6.07709C5.5696 5.75165 6.09723 5.75165 6.42267 6.07709C6.74811 6.40252 6.74811 6.93016 6.42267 7.2556L4.51193 9.16634L17.5001 9.16634C17.9603 9.16634 18.3334 9.53944 18.3334 9.99968C18.3334 10.4599 17.9603 10.833 17.5001 10.833L4.51193 10.833L6.42267 12.7438C6.74811 13.0692 6.74811 13.5968 6.42267 13.9223C6.09723 14.2477 5.5696 14.2477 5.24416 13.9223L1.91083 10.5889Z" fill="#2E3A5C"/></svg>
                  </div>
                  <div className="flex-grow self-stretch">Return to home</div>
                </div>
              </div>
            </div>
            <div className="flex w-24 items-center justify-center self-stretch text-center leading-normal text-slate-500" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-200 bg-white py-2 px-3" >
                <div className="flex h-5 flex-grow items-center justify-center gap-x-1" >
                  <div className="h-4 w-4">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_527_11563)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 7.99908H15.9997C15.9997 7.27701 15.9034 6.57751 15.7241 5.91211H7.65186V7.99908Z" fill="#D80027"/><path d="M7.65186 3.82525H14.8255C14.3358 3.02612 13.7096 2.31978 12.9795 1.73828H7.65186V3.82525Z" fill="#D80027"/><path d="M7.99965 15.9999C9.88243 15.9999 11.613 15.3491 12.9795 14.2607H3.01978C4.38634 15.3491 6.11687 15.9999 7.99965 15.9999Z" fill="#D80027"/><path d="M1.17398 12.1729H14.8256C15.2188 11.5314 15.5237 10.8301 15.7242 10.0859H0.275391C0.475922 10.8301 0.780828 11.5314 1.17398 12.1729Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_527_11563"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                  </div>
                  <div className="flex-grow self-stretch pl-1">ENG</div>
                  <div className="h-4 w-4">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92259 11.4226C8.76631 11.5789 8.55435 11.6667 8.33333 11.6667C8.11232 11.6667 7.90036 11.5789 7.74408 11.4226L2.74408 6.42259C2.41864 6.09715 2.41864 5.56951 2.74408 5.24408C3.06951 4.91864 3.59715 4.91864 3.92259 5.24408L8.33333 9.65482L12.7441 5.24408C13.0695 4.91864 13.5972 4.91864 13.9226 5.24408C14.248 5.56951 14.248 6.09715 13.9226 6.42259L8.92259 11.4226Z" fill="#667185"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-6 w-72 pt-0.5 text-center text-2xl font-bold leading-5 text-black" >
            Deposit Cryptocurrency
          </div>
          <div className="flex w-96 flex-grow items-center justify-center">
            <div className="flex flex-grow flex-col items-center justify-center gap-y-5 self-stretch rounded-xl border border-solid border-gray-300 py-3 px-2.5" >
              <div className="flex h-24 items-center justify-center self-stretch text-left text-sm font-normal leading-5" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-2 self-stretch bg-white pt-1" >
                  <div className="h-5 w-20 text-black">Select Coin</div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-lg border border-solid border-slate-500 p-4" >
                      <div className="flex h-5 flex-grow items-center justify-center gap-x-2" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 15.33 15.33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3333 7.99967C14.3333 11.681 11.348 14.6663 7.66667 14.6663C3.98533 14.6663 1 11.681 1 7.99967C1 4.31834 3.98533 1.33301 7.66667 1.33301C11.348 1.33301 14.3333 4.31834 14.3333 7.99967Z" fill="#FFC107"/><path d="M5.43066 11.1946V4.80566H8.04979C8.81965 4.80566 9.40232 4.95421 9.80034 5.25129C10.1984 5.54837 10.3967 5.98378 10.3967 6.55654C10.3967 6.8696 10.3169 7.14559 10.1584 7.3839C9.99872 7.62221 9.77671 7.79694 9.49208 7.90811C9.81664 7.99053 10.0722 8.15504 10.2594 8.40484C10.4469 8.65273 10.5418 8.95589 10.5418 9.31654C10.5418 9.93051 10.3472 10.3959 9.95783 10.7116C9.56843 11.0272 9.01451 11.1882 8.29448 11.1946H5.43066ZM6.70844 7.36122H8.10218C8.76119 7.35004 9.09182 7.098 9.09182 6.58018C9.09182 6.29076 9.00812 6.08216 8.84105 5.95503C8.67398 5.82789 8.41044 5.764 8.04979 5.764H6.70844V7.36122ZM6.70844 8.31955V10.2362H8.25583C8.56282 10.2362 9.264 10.0864 9.264 9.40279C9.264 8.71918 8.90718 8.32818 8.30566 8.31955H6.70844Z" fill="#FFF8E1"/><path d="M6.38892 3.84668H7.34725V5.4439H6.38892V3.84668ZM7.98614 3.84668H8.94447V5.4439H7.98614V3.84668ZM6.38892 10.555H7.34725V12.1522H6.38892V10.555ZM7.98614 10.555H8.94447V12.1522H7.98614V10.555Z" fill="#FFF8E1"/></svg>
                        </div>
                        <div className="w-12 self-stretch text-black">
                          Bitcoin
                        </div>
                        <div className="w-7 self-stretch text-zinc-800">
                          BTC
                        </div>
                        <div className="ml-52 flex h-5 w-5 flex-grow items-center justify-center self-stretch" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34545 7.27318L8.85765 13.4023C9.4994 14.0063 10.5004 14.0063 11.1422 13.4023L17.6544 7.27318C17.9895 6.95775 18.0055 6.43035 17.6901 6.09521C17.3747 5.76006 16.8473 5.74408 16.5121 6.05951L9.99992 12.1886L3.48773 6.05951C3.15258 5.74408 2.62518 5.76006 2.30975 6.09521C1.99432 6.43035 2.01031 6.95775 2.34545 7.27318Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-24 items-center justify-center self-stretch text-left text-sm font-normal leading-5" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-2 self-stretch bg-white pt-1" >
                  <div className="h-5 w-24 text-black">Select Network</div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-lg border border-solid border-slate-500 p-4" >
                      <div className="flex h-5 flex-grow items-center justify-center gap-x-2" >
                        <div className="w-16 self-stretch text-black">
                          Ethereum
                        </div>
                        <div className="w-14 self-stretch text-zinc-800">
                          (ERC20)
                        </div>
                        <div className="ml-48 flex h-5 w-5 flex-grow items-center justify-center self-stretch" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34545 7.27318L8.85765 13.4023C9.4994 14.0063 10.5004 14.0063 11.1422 13.4023L17.6544 7.27318C17.9895 6.95775 18.0055 6.43035 17.6901 6.09521C17.3747 5.76006 16.8473 5.74408 16.5121 6.05951L9.99992 12.1886L3.48773 6.05951C3.15258 5.74408 2.62518 5.76006 2.30975 6.09521C1.99432 6.43035 2.01031 6.95775 2.34545 7.27318Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-grow items-center justify-center self-stretch text-sm leading-5" >
                <div className="flex flex-grow flex-col items-center gap-y-5 self-stretch rounded-xl border border-solid border-gray-300 bg-white px-5 pb-5 pt-3" >
                  <div className="h-52 w-52">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 207 207" fill="none" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"><rect width="207" height="207" fill="white"/><rect x="10" y="10" width="187" height="187" rx="8" fill="url(#pattern-522:12014-0)"/><defs><pattern id="pattern-522:12014-0" patternContentUnits="objectBoundingBox" width="1" height="1"><use xlinkHref="#image0_522_12014" transform="translate(-0.0802139 -0.101604) scale(0.00392157)"/></pattern><image id="image0_522_12014" width="300" height="300" xlinkHref="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/SVG_IMAGE_522:12014_0.webp"/></defs></svg>
                  </div>
                  <div className="flex h-5 items-center justify-between gap-x-2.5 self-stretch" >
                    <div className="flex-grow self-stretch text-left font-normal text-black" >
                      1NTmomQ4aipipDchHKH6Ju5eBnhyy5y2uy
                    </div>
                    <div className="w-9 self-stretch text-right font-medium text-slate-700" >
                      Copy
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-14 self-stretch rounded-md bg-slate-700 py-4 px-24 text-center text-base font-semibold leading-6 text-white" >
                Save and Share Address
              </div>
            </div>
          </div>
        </div>
      );
}

export default Deposit