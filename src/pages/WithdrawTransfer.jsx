import React from 'react'

function WithdrawTransfer() {
    return (
        <div className="font-inter inline-flex h-[1024px] w-[1440px] resize flex-col items-center gap-y-10 overflow-hidden bg-white px-8 pb-72 pt-8 tracking-[0px]" >
          <div className="flex h-9 items-center justify-between gap-x-[1122px] self-stretch text-sm font-semibold leading-[Symbol(MIXED_VALUE)]" >
            <div className="flex w-40 items-center justify-center self-stretch text-right leading-5 text-slate-700" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-1.5 px-3" >
                <div className="flex h-5 flex-grow items-center justify-between gap-x-2" >
                  <div className="h-5 w-5">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M1.91058 10.5889C1.58514 10.2635 1.58514 9.73586 1.91058 9.41042L5.24392 6.07709C5.56935 5.75165 6.09699 5.75165 6.42243 6.07709C6.74786 6.40252 6.74786 6.93016 6.42243 7.2556L4.51168 9.16634L17.4998 9.16634C17.9601 9.16634 18.3332 9.53944 18.3332 9.99968C18.3332 10.4599 17.9601 10.833 17.4998 10.833L4.51168 10.833L6.42243 12.7438C6.74786 13.0692 6.74786 13.5968 6.42243 13.9223C6.09699 14.2477 5.56935 14.2477 5.24391 13.9223L1.91058 10.5889Z" fill="#2E3A5C"/></svg>
                  </div>
                  <div className="flex-grow self-stretch">Return to home</div>
                </div>
              </div>
            </div>
            <div className="flex w-24 items-center justify-center self-stretch text-center leading-normal text-slate-500" >
              <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-200 bg-white py-2 px-3" >
                <div className="flex h-5 flex-grow items-center justify-center gap-x-1" >
                  <div className="h-4 w-4">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_527_11779)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 7.99908H15.9997C15.9997 7.27701 15.9034 6.57751 15.7241 5.91211H7.65186V7.99908Z" fill="#D80027"/><path d="M7.65186 3.82525H14.8255C14.3358 3.02612 13.7096 2.31978 12.9795 1.73828H7.65186V3.82525Z" fill="#D80027"/><path d="M7.99989 15.9999C9.88268 15.9999 11.6132 15.3491 12.9798 14.2607H3.02002C4.38658 15.3491 6.11711 15.9999 7.99989 15.9999Z" fill="#D80027"/><path d="M1.17398 12.1729H14.8256C15.2188 11.5314 15.5237 10.8301 15.7242 10.0859H0.275391C0.475922 10.8301 0.780828 11.5314 1.17398 12.1729Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_527_11779"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
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
            Transfer Cryptocurrency
          </div>
          <div className="flex w-96 flex-grow items-center justify-center">
            <div className="flex flex-grow flex-col items-end justify-center gap-y-1 self-stretch rounded-xl border border-solid border-gray-300 py-3 px-2.5" >
              <div className="flex h-24 items-center justify-center self-stretch text-left text-sm font-normal leading-5" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-2 self-stretch bg-white pt-1" >
                  <div className="h-5 w-20 text-black">Select Coin</div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-lg border border-solid border-slate-500 p-4" >
                      <div className="flex h-5 flex-grow items-center justify-center gap-x-2" >
                        <div className="h-4 w-4">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 15.33 15.33" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.3333 7.99967C14.3333 11.681 11.348 14.6663 7.66667 14.6663C3.98533 14.6663 1 11.681 1 7.99967C1 4.31834 3.98533 1.33301 7.66667 1.33301C11.348 1.33301 14.3333 4.31834 14.3333 7.99967Z" fill="#FFC107"/><path d="M5.43066 11.1946V4.80566H8.04979C8.81965 4.80566 9.40232 4.95421 9.80034 5.25129C10.1984 5.54837 10.3967 5.98378 10.3967 6.55654C10.3967 6.8696 10.3169 7.14559 10.1584 7.3839C9.99872 7.62221 9.77671 7.79694 9.49208 7.90811C9.81664 7.99053 10.0722 8.15504 10.2594 8.40484C10.4469 8.65273 10.5418 8.95589 10.5418 9.31654C10.5418 9.93051 10.3472 10.3959 9.95783 10.7116C9.56843 11.0272 9.01451 11.1882 8.29448 11.1946H5.43066ZM6.70844 7.36122H8.10218C8.76119 7.35004 9.09182 7.098 9.09182 6.58018C9.09182 6.29076 9.00812 6.08216 8.84105 5.95503C8.67398 5.82789 8.41044 5.764 8.04979 5.764H6.70844V7.36122ZM6.70844 8.31955V10.2362H8.25583C8.56282 10.2362 9.264 10.0864 9.264 9.40279C9.264 8.71918 8.90718 8.32818 8.30566 8.31955H6.70844Z" fill="#FFF8E1"/><path d="M6.38867 3.84668H7.34701V5.4439H6.38867V3.84668ZM7.98589 3.84668H8.94423V5.4439H7.98589V3.84668ZM6.38867 10.555H7.34701V12.1522H6.38867V10.555ZM7.98589 10.555H8.94423V12.1522H7.98589V10.555Z" fill="#FFF8E1"/></svg>
                        </div>
                        <div className="w-12 self-stretch text-black">
                          Bitcoin
                        </div>
                        <div className="w-7 self-stretch text-zinc-800">
                          BTC
                        </div>
                        <div className="ml-52 flex h-5 w-5 flex-grow items-center justify-center self-stretch" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34569 7.27318L8.85789 13.4023C9.49964 14.0063 10.5007 14.0063 11.1424 13.4023L17.6546 7.27318C17.9898 6.95775 18.0058 6.43035 17.6903 6.09521C17.3749 5.76006 16.8475 5.74408 16.5124 6.05951L10.0002 12.1886L3.48797 6.05951C3.15282 5.74408 2.62543 5.76006 2.31 6.09521C1.99457 6.43035 2.01055 6.95775 2.34569 7.27318Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-7 w-40 items-center justify-between gap-x-1 bg-white p-1 text-sm font-normal leading-5" >
                <div className="flex-grow self-stretch text-left text-black">
                  BTC Balance:
                </div>
                <div className="w-16 self-stretch text-right text-slate-500">
                  3.77 BTC
                </div>
              </div>
              <div className="flex h-28 items-end justify-center self-stretch pt-4 text-left text-sm font-normal leading-5" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-2 self-stretch bg-white pt-1" >
                  <div className="h-5 w-24 text-black">Enter Amount</div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch rounded-lg border border-solid border-slate-500 p-4" >
                      <div className="flex h-5 flex-grow items-center justify-center gap-x-2" >
                        <div className="w-7 self-stretch text-black">
                          1.42
                        </div>
                        <div className="w-7 self-stretch text-zinc-800">
                          BTC
                        </div>
                        <div className="ml-64 flex h-5 w-5 flex-grow items-center justify-center self-stretch" >
                          <div className="h-5 w-5">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34569 7.27318L8.85789 13.4023C9.49964 14.0063 10.5007 14.0063 11.1424 13.4023L17.6546 7.27318C17.9898 6.95775 18.0058 6.43035 17.6903 6.09521C17.3749 5.76006 16.8475 5.74408 16.5124 6.05951L10.0002 12.1886L3.48797 6.05951C3.15282 5.74408 2.62543 5.76006 2.31 6.09521C1.99457 6.43035 2.01055 6.95775 2.34569 7.27318Z" fill="#667185"/></svg>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="h-9 self-stretch pt-4 text-left text-sm font-normal leading-5 text-gray-900" >
                Select Network
              </div>
              <div className="flex h-14 items-center justify-center self-stretch text-left text-sm font-normal leading-5 text-black" >
                <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-black bg-white p-4" >
                  <div className="flex h-5 flex-grow items-center justify-between gap-x-52" >
                    <div className="flex-grow self-stretch">
                      Ethereum (ERC20)
                    </div>
                    <div className="h-5 w-5">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M2.34569 7.27318L8.85789 13.4023C9.49964 14.0063 10.5007 14.0063 11.1424 13.4023L17.6546 7.27318C17.9898 6.95775 18.0058 6.43035 17.6903 6.09521C17.3749 5.76006 16.8475 5.74408 16.5124 6.05951L10.0002 12.1886L3.48797 6.05951C3.15282 5.74408 2.62543 5.76006 2.31 6.09521C1.99457 6.43035 2.01055 6.95775 2.34569 7.27318Z" fill="#667185"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-7 w-44 items-center justify-between gap-x-1 bg-white p-1 text-sm font-normal leading-5" >
                <div className="flex-grow self-stretch text-left text-black">
                  Network Fee
                </div>
                <div className="w-20 self-stretch text-right text-slate-500">
                  0.0005 ETH
                </div>
              </div>
              <div className="h-9 self-stretch pt-4 text-left text-sm font-normal leading-5 text-gray-900" >
                Send to
              </div>
              <div className="flex h-14 items-center justify-center self-stretch text-left text-sm font-normal leading-5 text-slate-400" >
                <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-black bg-white p-4" >
                  <div className="flex h-5 flex-grow items-center justify-between gap-x-56" >
                    <div className="w-24 self-stretch">Enter address</div>
                    <div className="h-5 w-5">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.6665 1.66699C9.82555 1.66699 8.33317 3.15938 8.33317 5.00033V6.66699H4.99984C3.15889 6.66699 1.6665 8.15938 1.6665 10.0003V15.0003C1.6665 16.8413 3.15889 18.3337 4.99984 18.3337H8.33317C10.1741 18.3337 11.6665 16.8413 11.6665 15.0003V13.3337H14.9998C16.8408 13.3337 18.3332 11.8413 18.3332 10.0003V5.00033C18.3332 3.15938 16.8408 1.66699 14.9998 1.66699H11.6665ZM11.6665 11.667H14.9998C15.9203 11.667 16.6665 10.9208 16.6665 10.0003V5.00033C16.6665 4.07985 15.9203 3.33366 14.9998 3.33366H11.6665C10.746 3.33366 9.99984 4.07985 9.99984 5.00033V7.11293C10.9962 7.68928 11.6665 8.76652 11.6665 10.0003V11.667ZM3.33317 10.0003C3.33317 9.07985 4.07936 8.33366 4.99984 8.33366H8.33317C9.25365 8.33366 9.99984 9.07985 9.99984 10.0003V15.0003C9.99984 15.9208 9.25365 16.667 8.33317 16.667H4.99984C4.07936 16.667 3.33317 15.9208 3.33317 15.0003V10.0003Z" fill="#667185"/></svg>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-4 flex h-20 items-end justify-center self-stretch rounded-md bg-slate-700 py-4 px-40 text-center text-base font-semibold leading-6 text-white" >
                <div className="h-6 w-16">Continue</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default WithdrawTransfer