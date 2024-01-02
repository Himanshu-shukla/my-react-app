import React from 'react'

function WithdrawTransferConfirmation() {
    return (
        <div className="font-inter inline-flex h-[1024px] w-[1440px] resize flex-col items-center gap-y-10 overflow-hidden bg-white px-8 pb-96 pt-8 tracking-[0px]" >
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
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_527_11841)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 7.99908H15.9997C15.9997 7.27701 15.9034 6.57751 15.7241 5.91211H7.65186V7.99908Z" fill="#D80027"/><path d="M7.65186 3.82525H14.8255C14.3358 3.02612 13.7096 2.31978 12.9795 1.73828H7.65186V3.82525Z" fill="#D80027"/><path d="M7.99989 15.9999C9.88268 15.9999 11.6132 15.3491 12.9798 14.2607H3.02002C4.38658 15.3491 6.11711 15.9999 7.99989 15.9999Z" fill="#D80027"/><path d="M1.17398 12.1729H14.8256C15.2188 11.5314 15.5237 10.8301 15.7242 10.0859H0.275391C0.475922 10.8301 0.780828 11.5314 1.17398 12.1729Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_527_11841"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
                  </div>
                  <div className="flex-grow self-stretch pl-1">ENG</div>
                  <div className="h-4 w-4">
                    <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92259 11.4226C8.76631 11.5789 8.55435 11.6667 8.33333 11.6667C8.11232 11.6667 7.90036 11.5789 7.74408 11.4226L2.74408 6.42259C2.41864 6.09715 2.41864 5.56951 2.74408 5.24408C3.06951 4.91864 3.59715 4.91864 3.92259 5.24408L8.33333 9.65482L12.7441 5.24408C13.0695 4.91864 13.5972 4.91864 13.9226 5.24408C14.248 5.56951 14.248 6.09715 13.9226 6.42259L8.92259 11.4226Z" fill="#667185"/></svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="h-5 w-72 text-center text-2xl font-bold leading-5 text-black" >
            Transfer Cryptocurrency
          </div>
          <div className="flex w-96 flex-grow items-center justify-center">
            <div className="flex flex-grow flex-col items-center justify-center gap-y-6 self-stretch rounded-xl border border-solid border-gray-300 p-3" >
              <div className="flex flex-grow items-center justify-center self-stretch text-base leading-6" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-6 self-stretch bg-white pt-2.5" >
                  <div className="h-6 w-44 pl-2.5 text-left font-semibold text-black" >
                    Security Verification
                  </div>
                  <div className="flex flex-grow items-center justify-center self-stretch" >
                    <div className="flex flex-grow flex-col items-start justify-between gap-y-1 self-stretch border-t border-b border-solid border-gray-300 py-1.5 px-3" >
                      <div className="flex w-72 flex-grow items-center justify-center bg-white p-2.5" >
                        <div className="flex h-6 flex-grow items-center justify-center gap-x-1" >
                          <div className="w-24 self-stretch text-left font-medium text-gray-300" >
                            Withdraw to:
                          </div>
                          <div className="flex w-8 items-center justify-end self-stretch pl-2" >
                            <div className="h-6 w-6">
                              <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 16.9688V21.9844L18.1406 13.3125L12 16.9688Z" fill="#3C3C3B"/><path d="M12 1.92188L18.1406 12.1406L12 15.7969L5.8125 12.1406" fill="#343434"/><path d="M12 1.92188V9.32812L5.8125 12.1406M5.8125 13.3125L12 16.9688V21.9844" fill="#8C8C8C"/><path d="M12 9.32812V15.7969L18.1406 12.1406" fill="#141414"/><path d="M5.8125 12.1406L12 9.32812V15.7969" fill="#393939"/></svg>
                            </div>
                          </div>
                          <div className="flex-grow self-stretch text-right font-normal text-black" >
                            Ethereum ERC20
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-grow items-center justify-center self-stretch bg-white p-2.5" >
                        <div className="flex h-6 flex-grow items-center justify-center gap-x-1" >
                          <div className="w-28 self-stretch text-left font-medium text-gray-300" >
                            You will receive
                          </div>
                          <div className="w-20 self-stretch pl-2 text-center font-normal text-black" >
                            1.002 BTC
                          </div>
                          <div className="flex-grow self-stretch text-right font-normal text-gray-300" >
                            (Fee: 0.0005ETH)
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-24 items-center justify-center self-stretch bg-white" >
                <div className="flex flex-grow flex-col items-start justify-end gap-y-2 self-stretch bg-white pt-1" >
                  <div className="h-5 w-40 text-left text-sm font-normal leading-5 text-black" >
                    Email Verification Code
                  </div>
                  <div className="flex flex-grow items-center justify-between gap-x-2.5 self-stretch" >
                    <div className="flex flex-grow items-center justify-center self-stretch text-left text-sm font-normal leading-5 text-gray-300" >
                      <div className="flex flex-grow items-center self-stretch rounded-lg border border-solid border-slate-500 bg-white py-4 pl-4 pr-24" >
                        <div className="h-5 flex-grow">
                          Enter 6 digit code
                        </div>
                      </div>
                    </div>
                    <div className="flex w-32 items-center justify-center self-stretch text-center text-base font-semibold leading-6 text-slate-700" >
                      <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-slate-700 bg-white py-4 px-6" >
                        <div className="h-6 flex-grow">Send code</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex h-14 items-center justify-center self-stretch rounded-md bg-slate-700 py-4 px-40 text-center text-base font-semibold leading-6 text-white" >
                <div className="h-6 w-14">Submit</div>
              </div>
            </div>
          </div>
        </div>
      );
}

export default WithdrawTransferConfirmation