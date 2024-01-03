import React from 'react'
import NavigationBar from '../components/NavigationBar';

function JunaBlog() {

  const imageUrl = 'https://s3-alpha-sig.figma.com/img/d6d6/424b/34747ff3f31945c5bd4d70cd8af7d09a?Expires=1705276800&Signature=Z-oubLOJ6EMAcgqNbwUIPmFRVeRndXNFU0PR~fUieP8K9nGk1XPfen8U9q7XI1n4KtDmNFXj0wNAyjwXbOwh8o7ExuDEFINA9FUzTN2-3SO5jju-WaxfZwH8FUboF5N37E3t6ii8mBtzYyBXuu5eDI89bJiR8832o1Ltn9-shwaSmeJjAHGS7qwwzIXf1Xpk1j3D~JdwkK7-r8LX4SmSF6TUEFv7zlnfBbn7fpCrnY64YPxSXlBr3BfgNm8rP5Im2ngScZOtvcuilRp3zVwRrqvrgSWU9YxuHS2qXq11bOr3y2clg7-3tNyWHeHIjLMSkvsLe0qKaLRfBsPwjxEIUQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl1 = 'https://s3-alpha-sig.figma.com/img/cb48/b9b0/c8d96de180ff961f4b9cbdbdc04e494a?Expires=1705276800&Signature=KxRVUwtdhvL51u-J8qiNqdYI6flBuD277LZ4zVgKZWKqNqwVaJjOnSapz4dW6EANMGwtdkjLIg-3yCy9o-JO2PBnQlu8Jm0GDRPKb4UgxiJLeE9zR1ldBAV0Zlxy-Ts1Z6Kf8hf5GCjd3dojnqGFmSOuSh270pJvZEj7cjwGZC7hRDoEf0h6CkvtFKgXlGiSeP2dLrn1v1FQI61~ga2uLFInfWqQzYo3sNrWcgWydx6-LH3Sx4dLbgQ9H91HRrye5UbVKfvuQrsmmTFWPYixtMlKRrp1I-lHQO3XffBrkpLDUbmXXv70V1ChY421hLGnf9-D~qjx6FsKX0SVL4c4nA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl2 = 'https://s3-alpha-sig.figma.com/img/e181/c169/d1fc66cbf2618d7925dd4b867fd17c60?Expires=1705276800&Signature=DlMI9eAA9KM9K2swnjNswyP3YvJGGJaD~KTb~hIflGIUv6q6WyWc5niH-FUKMFou07eviuo9YF0BdQSKhmQIVzyF~jWX28M-vZeBhGJCogGNaJJJeA8JCtMET46Xf5RT8a9N07iBlfRM-gbVARpvX7JDGwRHkWSZ7wwO1Hg4kwK3PmmFFHUyiqKhLOVb0vxZTMwQM8rUQxGrTWtepdu5ijDhnoRxRXV8Z1G1-YqI4RcRYRsELivklOlrJaswBKa48L9a5dVwDRl9QzEazDOuKPVTrMNlwsPJ5cRbRWXiE1AEZMwpg20-drY~ObY1GUZcvY4l6xPzEk0vU82q3~iBGA__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';
  const imageUrl3 = 'https://s3-alpha-sig.figma.com/img/7afc/3c65/d84462509ee96d9312d504e99284a348?Expires=1705276800&Signature=PjrhCBC6LSdAlEg9XJynLf6C~I43imbeHv61TviJkf01pzRW6~ykGF3O00SGx46N1ibLCn7tIf4~9qk6VwAXon6Q5Oyv8Ec24meN12ZA7bhaGuxLXUagiHsQYw~OcXJKBh5FGHTITyr3T-uI2C4903Zg~R78XgQA2L9mEPNM88MRWsZIgUk4X~9hHqrjQCgqdpZKx3N4O2Gwjm77Guf0g5Xkz4HC-wzQfafPOmB2Nr8IcClL7Y4fWrw4F8M6NBOiChvjEdjfBZ~Prr795t6xnlHYYOj7O2JOKr6KXOilYHBpJPC8hTe7iuzX87NXN9HKx~82Amx3QMFIfQT63g0k2g__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4';

  const divStyle = {
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: 'cover',
    width: '50%', // Set the desired width
    height: '60%', // Set the desired height
  };

  const divStyle1 = {
    backgroundImage: `url(${imageUrl1})`,
    backgroundSize: 'cover',
    width: '50%', // Set the desired width
    height: '60%', // Set the desired height
  };

  const divStyle2 = {
    backgroundImage: `url(${imageUrl2})`,
    backgroundSize: 'cover',
    width: '50%', // Set the desired width
    height: '60%', // Set the desired height
  };

  const divStyle3 = {
    backgroundImage: `url(${imageUrl3})`,
    backgroundSize: 'cover',
    width: '50%', // Set the desired width
    height: '60%', // Set the desired height
  };

    return (
      <>
        <div className="font-inter inline-flex h-[1353px] w-[1440px] resize flex-row overflow-hidden tracking-[0px]" >
          <div className="flex h-full w-full items-start overflow-clip bg-gray-50 pb-20" >
            <div className="relative mr-0 flex flex-grow items-start justify-end self-stretch pl-80 pr-10 pt-28" >
              <div className="absolute right-0 top-1 flex h-16 w-[1168px] items-center justify-center" >
                <div className="flex flex-grow items-start justify-center self-stretch bg-white pb-4 pl-10 pr-11 pt-5" >
                  <div className="flex h-9 flex-grow items-center justify-center">
                    <div className="h-6 w-5 pb-1">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.912 1.98733C10.7643 1.18391 9.23666 1.18391 8.08893 1.98733L2.35761 5.99925C1.3921 6.67511 0.855245 7.81058 0.945636 8.98567L1.53315 16.6234C1.64396 18.0638 2.94913 19.1108 4.37934 18.9065L7.02069 18.5292C8.25231 18.3532 9.16713 17.2984 9.16713 16.0543V14.9998C9.16713 14.5396 9.54023 14.1665 10.0005 14.1665C10.4607 14.1665 10.8338 14.5396 10.8338 14.9998V16.0543C10.8338 17.2984 11.7486 18.3532 12.9802 18.5292L15.6216 18.9065C17.0518 19.1108 18.357 18.0639 18.4678 16.6234L19.0553 8.98568C19.1457 7.81059 18.6088 6.67511 17.6433 5.99925L11.912 1.98733ZM9.0447 3.35271C9.61856 2.95101 10.3824 2.95101 10.9562 3.35271L16.6876 7.36463C17.1703 7.70256 17.4387 8.2703 17.3935 8.85785L16.806 16.4955C16.7691 16.9757 16.334 17.3247 15.8573 17.2566L13.2159 16.8793C12.8054 16.8206 12.5005 16.469 12.5005 16.0543V14.9998C12.5005 13.6191 11.3812 12.4998 10.0005 12.4998C8.61976 12.4998 7.50047 13.6191 7.50047 14.9998V16.0543C7.50047 16.469 7.19553 16.8206 6.78499 16.8793L4.14364 17.2566C3.6669 17.3247 3.23184 16.9757 3.19491 16.4955L2.60739 8.85785C2.5622 8.2703 2.83062 7.70256 3.31338 7.36463L9.0447 3.35271Z" fill="#2E3A5C"/></svg>
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
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_436_10550)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0"/><path d="M7.65186 7.99908H15.9997C15.9997 7.27701 15.9034 6.57751 15.7241 5.91211H7.65186V7.99908Z" fill="#D80027"/><path d="M7.65186 3.82525H14.8255C14.3358 3.02612 13.7096 2.31978 12.9795 1.73828H7.65186V3.82525Z" fill="#D80027"/><path d="M7.99965 15.9989C9.88243 15.9989 11.613 15.3481 12.9795 14.2598H3.01978C4.38634 15.3481 6.11687 15.9989 7.99965 15.9989Z" fill="#D80027"/><path d="M1.17398 12.1729H14.8256C15.2188 11.5314 15.5237 10.8301 15.7242 10.0859H0.275391C0.475922 10.8301 0.780828 11.5314 1.17398 12.1729Z" fill="#D80027"/><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4"/></g><defs><clipPath id="clip0_436_10550"><rect width="16" height="16" fill="white"/></clipPath></defs></svg>
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
                      <div className="flex h-8 w-8 flex-col items-start justify-center pr-0.5" >
                        <div className="flex w-3.5 flex-grow items-center justify-center" >
                          <div className="-mr-0.5 h-4 w-4 rounded-full bg-slate-700 py-0.5 px-1" >
                            4
                          </div>
                        </div>
                        <div className="flex h-3.5 items-start justify-center self-stretch" >
                          <div className="h-7 w-7">
                            <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1667 3.50065C15.1667 2.85632 14.6443 2.33398 14 2.33398C13.3557 2.33398 12.8333 2.85632 12.8333 3.50065V5.25065C12.8333 5.28301 12.8346 5.31506 12.8372 5.34675C9.52464 5.90035 6.99999 8.77951 6.99999 12.2494V16.9173C6.99999 17.5009 6.52153 18.5128 5.99793 19.4456C5.26115 20.7581 5.39608 22.3404 6.80271 22.876C8.21743 23.4147 10.4805 23.9173 14 23.9173C17.5195 23.9173 19.7825 23.4147 21.1973 22.876C22.6039 22.3404 22.7388 20.7581 22.0021 19.4456C21.4784 18.5128 21 17.5009 21 16.9173V12.2499C21 8.78007 18.4753 5.90046 15.1628 5.34676C15.1653 5.31507 15.1667 5.28301 15.1667 5.25065V3.50065Z" fill="#667185"/><path d="M10.4068 24.8793C10.4503 24.9173 10.5029 24.9617 10.5642 25.0107C10.7395 25.1509 10.99 25.3327 11.3066 25.5137C11.9349 25.8727 12.8639 26.2507 14 26.2507C15.1361 26.2507 16.0651 25.8727 16.6934 25.5137C17.01 25.3327 17.2605 25.1509 17.4358 25.0107C17.4971 24.9617 17.5497 24.9173 17.5932 24.8793C16.5732 25.0064 15.3837 25.084 14 25.084C12.6163 25.084 11.4268 25.0064 10.4068 24.8793Z" fill="#667185"/></svg>
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
              <div className="absolute left-0 top-1 flex h-[1024px] w-72 items-center justify-center text-left text-sm leading-5" >
                <div className="flex flex-grow flex-col items-center justify-center gap-y-3 self-stretch rounded-b-xl border-b border-r border-solid border-gray-300 bg-white pb-12 pt-6" >
                  <div className="flex h-14 items-center justify-center self-stretch" >
                    <div className="h-14 w-72 rounded">
                      <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 272 52" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_752_3108)"><mask id="mask0_752_3108" style={{"maskType":"luminance"}} maskUnits="userSpaceOnUse" x="24" y="8" width="107" height="36"><path d="M130.2 8H24V44H130.2V8Z" fill="white"/></mask><g mask="url(#mask0_752_3108)"><path d="M33.9863 14.5411C33.9863 17.9348 31.7526 21.077 28.9949 20.4479C26.2373 19.7593 24 15.4917 24 12.9403C24 10.3888 26.2337 8.23232 28.9949 8.01562C31.7491 8.02611 33.9863 11.1403 33.9863 14.5411Z" fill="#2E3A5C"/><path d="M47.1234 11.8071C47.1234 13.9182 44.8897 16.6374 42.1285 17.8677C39.3708 19.098 37.1335 17.4098 37.1335 14.0789C37.1335 10.7481 39.3673 7.88203 42.1285 8.01834C44.8861 8.15465 47.1234 9.70999 47.1234 11.8071Z" fill="#2E3A5C"/><path d="M60.2638 12.9397C60.2638 15.8302 58.0301 15.9735 55.2689 15.285C52.5112 14.6558 50.2739 13.3871 50.2739 11.339C50.2739 9.29081 52.5077 8.0011 55.2689 8.01508C58.0265 7.79838 60.2638 9.9409 60.2638 12.9397Z" fill="#2E3A5C"/><path d="M33.9863 28.7899C33.9863 31.5091 31.7526 34.1375 28.9949 33.386C26.2373 32.7394 24 28.1922 24 25.4276C24 22.6629 26.2337 22.8272 28.9949 23.4353C31.7491 24.1693 33.9863 26.0147 33.9863 28.7899Z" fill="#2E3A5C"/><path d="M47.1234 23.0401C47.1234 25.7314 44.8897 29.0063 42.1285 30.352C39.3708 31.6976 37.1335 30.5652 37.1335 27.818C37.1335 25.0708 39.3673 21.7958 42.1285 20.5026C44.8861 19.2094 47.1234 20.3349 47.1234 23.0401Z" fill="#2E3A5C"/><path d="M60.2638 25.4272C60.2638 28.101 58.0301 27.9646 55.2689 27.3215C52.5112 26.5736 50.2739 24.7876 50.2739 22.0613C50.2739 19.3351 52.5077 16.8361 55.2689 17.5631C58.0265 18.1712 60.2638 22.6415 60.2638 25.4272Z" fill="#2E3A5C"/><path d="M33.9863 40.4641C33.9863 42.5088 31.7526 43.8019 28.9949 43.7914C26.2373 44.0081 24 41.8622 24 38.8633C24 35.8645 26.2337 35.833 28.9949 36.5181C31.7491 37.1507 33.9863 38.4159 33.9863 40.4641Z" fill="#2E3A5C"/><path d="M47.1234 37.731C47.1234 41.0759 44.8897 43.9279 42.1285 43.7916C39.3708 43.6518 37.1335 42.0965 37.1335 40.0029C37.1335 37.9093 39.3673 35.1726 42.1285 33.9423C44.8861 32.7085 47.1234 34.4002 47.1234 37.731Z" fill="#2E3A5C"/><path d="M60.2638 38.8636C60.2638 41.3067 58.0301 43.575 55.2689 43.7917C52.5112 43.7812 50.2739 40.6636 50.2739 37.2663C50.2739 33.8691 52.5077 30.7304 55.2689 31.363C58.0265 32.0516 60.2638 36.3156 60.2638 38.8671" fill="#2E3A5C"/><path d="M71.7901 44.0042V39.4222H66.8872V44.0042H66.3845V35.207H66.8872V38.9153H71.7901V35.207H72.3034V44.0042H71.7901Z" fill="#2E3A5C"/><path d="M82.8738 42.8611C82.0171 43.7069 80.9127 44.1298 79.5675 44.1298C78.2223 44.1298 77.1213 43.7138 76.2717 42.8751C75.415 42.0293 74.9832 40.9388 74.9832 39.6106C74.9832 38.2825 75.408 37.1955 76.2576 36.3566C77.1142 35.5108 78.2187 35.0879 79.5675 35.0879C80.9162 35.0879 82.0101 35.5038 82.8738 36.3426C83.7305 37.1885 84.1588 38.279 84.1588 39.6106C84.1588 40.9423 83.734 42.0258 82.8738 42.8646M82.5127 36.7131C81.7446 35.9582 80.764 35.5807 79.5639 35.5807C78.3639 35.5807 77.4081 35.9582 76.6434 36.7131C75.8752 37.4681 75.4965 38.4362 75.4965 39.6106C75.4965 40.785 75.8717 41.7461 76.6328 42.4941C77.3974 43.249 78.3745 43.6265 79.5675 43.6265C80.7604 43.6265 81.7446 43.2595 82.5163 42.5186C83.2738 41.7706 83.6526 40.8025 83.6526 39.6106C83.6526 38.4188 83.2738 37.4611 82.5163 36.7131" fill="#2E3A5C"/><path d="M86.8174 44.0042V35.207H87.3165V43.5009H89.8299V44.0042H86.8174Z" fill="#2E3A5C"/><path d="M98.1664 42.6762C97.416 43.5638 96.4389 44.0042 95.2353 44.0042H92.2617V35.207H95.2353C96.4318 35.207 97.4053 35.6544 98.1523 36.5387C98.8567 37.367 99.2107 38.3876 99.2107 39.5934C99.2107 40.7992 98.8638 41.8373 98.1629 42.6762M97.7912 36.8812C97.1398 36.0948 96.2902 35.6998 95.2318 35.6998H92.7609V43.5009H95.2318C96.1451 43.5009 96.9381 43.1654 97.6142 42.4909C98.3364 41.7674 98.701 40.8027 98.701 39.5934C98.701 38.5204 98.3965 37.6152 97.7912 36.8812Z" fill="#2E3A5C"/><path d="M101.922 35.207H101.423V44.0042H101.922V35.207Z" fill="#2E3A5C"/><path d="M104.765 36.5391V44.0047H104.27V35.1445L110.918 42.8478V35.2074H111.431V44.155L104.765 36.5391Z" fill="#2E3A5C"/><path d="M122.093 42.7892C121.237 43.6839 120.097 44.1313 118.684 44.1313C117.272 44.1313 116.238 43.7154 115.392 42.8731C114.535 42.0308 114.104 40.9403 114.104 39.6087C114.104 38.277 114.532 37.2145 115.392 36.3687C116.256 35.5123 117.353 35.0859 118.684 35.0859C120.281 35.0859 121.538 35.6906 122.454 36.8964L122.04 37.2075C121.24 36.124 120.122 35.5788 118.684 35.5788C117.513 35.5788 116.536 35.9632 115.767 36.7252C114.992 37.4906 114.606 38.4518 114.606 39.6122C114.606 40.7725 114.985 41.7372 115.75 42.4956C116.532 43.2505 117.513 43.628 118.684 43.628C119.937 43.628 120.953 43.2156 121.718 42.3838C122.299 41.7617 122.631 41.0522 122.716 40.2657H119.771V39.7589H123.276C123.276 40.9613 122.883 41.9714 122.093 42.7927" fill="#2E3A5C"/><path d="M128.533 43.9345C128.207 44.0498 127.825 44.1057 127.382 44.1057C126.019 44.1057 125.141 43.4661 124.752 42.1939L125.262 42.0227C125.552 43.0782 126.26 43.6024 127.382 43.6024C128.026 43.6024 128.529 43.4452 128.894 43.1341C129.269 42.8161 129.457 42.3442 129.457 41.7291C129.457 41.1454 129.237 40.6596 128.791 40.2751C128.678 40.1702 128.501 40.0514 128.257 39.9151C128.016 39.7858 127.708 39.6355 127.336 39.4747C126.628 39.1601 126.143 38.891 125.888 38.6603C125.456 38.2933 125.237 37.804 125.237 37.1924C125.237 36.5807 125.456 36.0949 125.899 35.7279C126.327 35.3469 126.862 35.1582 127.492 35.1582C128.54 35.1582 129.283 35.5462 129.715 36.3186L129.227 36.5283C129.06 36.2592 128.862 36.0565 128.625 35.9236C128.334 35.7419 127.959 35.6545 127.488 35.6545C127.018 35.6545 126.589 35.7908 126.267 36.0599C125.917 36.3466 125.743 36.724 125.743 37.1924C125.743 37.6118 125.927 37.9788 126.295 38.2899C126.501 38.4541 126.915 38.6778 127.538 38.9539C127.931 39.1252 128.267 39.2965 128.55 39.4677C128.834 39.6355 129.064 39.8067 129.237 39.978C129.719 40.4464 129.959 41.0335 129.959 41.7291C129.959 42.8475 129.481 43.5815 128.526 43.9345" fill="#2E3A5C"/><path d="M71.4857 24.922C71.4857 27.2392 70.4661 27.2392 70.0838 27.2392C69.4325 27.2392 68.9793 26.9526 68.643 26.341L68.3528 25.8167L66.4766 26.9806L66.7244 27.442C67.4394 28.7526 68.5793 29.4202 70.1121 29.4202C71.7441 29.4202 73.6982 28.6478 73.6982 24.9744V8.00195H71.4892V24.922H71.4857Z" fill="#2E3A5C"/><path d="M87.7732 24.0587C87.7732 25.0443 87.405 25.8097 86.6475 26.3934C85.9324 26.9491 85.0226 27.2323 83.95 27.2323C82.8774 27.2323 81.9499 26.9596 81.249 26.4179C80.5127 25.8482 80.1551 25.0757 80.1551 24.0587V8.00195H77.9709V24.0587C77.9709 25.7293 78.5763 27.0785 79.7834 28.0711C80.895 28.9623 82.2968 29.4167 83.95 29.4167C85.6032 29.4167 87.0581 28.9728 88.1201 28.0956C89.3556 27.0889 89.9822 25.7328 89.9822 24.0587V8.00195H87.7732V24.0587Z" fill="#2E3A5C"/><path d="M108.032 23.7616L94.4211 8.00195V29.6369H96.5593V13.8354L110.199 29.6369V8.00195H108.032V23.7616Z" fill="#2E3A5C"/><path d="M121.839 8.00195L113.647 29.4167H115.888L118.033 23.9538H125.665L127.786 29.4167H130.051L121.835 8.00195H121.839ZM124.794 21.7938H118.883L121.835 13.8074L124.791 21.7938H124.794Z" fill="#2E3A5C"/></g></g><defs><clipPath id="clip0_752_3108"><rect width="106.2" height="36" fill="white" transform="translate(24 8)"/></clipPath></defs></svg>
                    </div>
                  </div>
                  <div className="flex h-9 w-60 items-center justify-center font-normal text-slate-400" >
                    <div className="flex flex-grow items-center self-stretch rounded-md border border-solid border-gray-300 bg-white py-2 pl-3 pr-40" >
                      <div className="flex h-5 flex-grow items-center justify-between gap-x-2" >
                        <div className="h-5 w-5">
                          <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M9.58342 1.66602C5.21116 1.66602 1.66675 5.21043 1.66675 9.58268C1.66675 13.9549 5.21116 17.4993 9.58342 17.4993C11.4694 17.4993 13.2013 16.8399 14.5612 15.739L16.9108 18.0886C17.2363 18.414 17.7639 18.414 18.0893 18.0886C18.4148 17.7632 18.4148 17.2355 18.0893 16.9101L15.7397 14.5604C16.8406 13.2006 17.5001 11.4686 17.5001 9.58268C17.5001 5.21043 13.9557 1.66602 9.58342 1.66602ZM3.33341 9.58268C3.33341 6.1309 6.13164 3.33268 9.58342 3.33268C13.0352 3.33268 15.8334 6.1309 15.8334 9.58268C15.8334 13.0345 13.0352 15.8327 9.58342 15.8327C6.13164 15.8327 3.33341 13.0345 3.33341 9.58268Z" fill="#667185"/></svg>
                        </div>
                        <div className="flex-grow self-stretch">Search</div>
                      </div>
                    </div>
                  </div>
                  <div className="mt-2 flex h-14 items-start justify-center self-stretch rounded bg-zinc-400/30 py-3 px-4 font-medium text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M11.912 1.98733C10.7643 1.18391 9.23666 1.18391 8.08893 1.98733L2.35761 5.99925C1.3921 6.67511 0.855245 7.81058 0.945636 8.98567L1.53315 16.6234C1.64396 18.0638 2.94913 19.1108 4.37934 18.9065L7.02069 18.5292C8.25231 18.3532 9.16713 17.2984 9.16713 16.0543V14.9998C9.16713 14.5396 9.54023 14.1665 10.0005 14.1665C10.4607 14.1665 10.8338 14.5396 10.8338 14.9998V16.0543C10.8338 17.2984 11.7486 18.3532 12.9802 18.5292L15.6216 18.9065C17.0518 19.1108 18.357 18.0639 18.4678 16.6234L19.0553 8.98568C19.1457 7.81059 18.6088 6.67511 17.6433 5.99925L11.912 1.98733ZM9.0447 3.35271C9.61856 2.95101 10.3824 2.95101 10.9562 3.35271L16.6876 7.36463C17.1703 7.70256 17.4387 8.2703 17.3935 8.85785L16.806 16.4955C16.7691 16.9757 16.334 17.3247 15.8573 17.2566L13.2159 16.8793C12.8054 16.8206 12.5005 16.469 12.5005 16.0543V14.9998C12.5005 13.6191 11.3812 12.4998 10.0005 12.4998C8.61976 12.4998 7.50047 13.6191 7.50047 14.9998V16.0543C7.50047 16.469 7.19553 16.8206 6.78499 16.8793L4.14364 17.2566C3.6669 17.3247 3.23184 16.9757 3.19491 16.4955L2.60739 8.85785C2.5622 8.2703 2.83062 7.70256 3.31338 7.36463L9.0447 3.35271Z" fill="#2E3A5C"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Home</div>
                    </div>
                  </div>
                  <div className="flex h-6 w-56 items-start justify-center pt-1 font-normal text-slate-700" >
                    <div className="flex flex-grow items-center justify-between gap-x-3 self-stretch" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M4.41066 12.4664C4.08523 12.7918 4.08523 13.3195 4.41066 13.6449C4.7361 13.9703 5.26374 13.9703 5.58917 13.6449L8.38972 10.8443L9.47281 11.7289C9.81314 12.0068 10.3108 11.9727 10.6101 11.651L13.3356 8.72103L14.392 9.84781C14.7067 10.1836 15.2341 10.2006 15.5699 9.8858C15.9056 9.57103 15.9226 9.04366 15.6079 8.7079L13.9412 6.93013C13.7833 6.76167 13.5625 6.6663 13.3316 6.66674C13.1007 6.66719 12.8804 6.76343 12.7231 6.93249L9.9219 9.94378L8.86036 9.07686C8.52899 8.80623 8.04652 8.83052 7.744 9.13304L4.41066 12.4664Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M4.16658 2.5C2.32564 2.5 0.833252 3.99239 0.833252 5.83333V14.1667C0.833252 16.0076 2.32564 17.5 4.16658 17.5H15.8333C17.6742 17.5 19.1666 16.0076 19.1666 14.1667V5.83333C19.1666 3.99239 17.6742 2.5 15.8333 2.5H4.16658ZM2.49992 5.83333C2.49992 4.91286 3.24611 4.16667 4.16658 4.16667H15.8333C16.7537 4.16667 17.4999 4.91286 17.4999 5.83333V14.1667C17.4999 15.0871 16.7537 15.8333 15.8333 15.8333H4.16658C3.24611 15.8333 2.49992 15.0871 2.49992 14.1667V5.83333Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Market</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-start justify-center  font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_752_3168)"><path d="M8.82139 0.917969C8.36116 0.917969 7.98806 1.29106 7.98806 1.7513C7.98806 2.21154 8.36116 2.58464 8.82139 2.58464H10.3451L1.16107 11.7686C0.835633 12.0941 0.835633 12.6217 1.16107 12.9472C1.48651 13.2726 2.01414 13.2726 2.33958 12.9472L11.5236 3.76315V5.28684C11.5236 5.74707 11.8967 6.12017 12.3569 6.12017C12.8172 6.12017 13.1903 5.74707 13.1903 5.28684V1.7513C13.1903 1.29107 12.8172 0.917969 12.3569 0.917969H8.82139Z" fill="black"/><path d="M18.8387 8.2332C19.1642 7.90776 19.1642 7.38012 18.8387 7.05469C18.5133 6.72925 17.9857 6.72925 17.6602 7.05469L8.47622 16.2387V14.715C8.47622 14.2548 8.10313 13.8817 7.64289 13.8817C7.18265 13.8817 6.80956 14.2548 6.80956 14.715V18.2505C6.80956 18.7108 7.18265 19.0839 7.64289 19.0839H11.1784C11.6387 19.0839 12.0118 18.7108 12.0118 18.2505C12.0118 17.7903 11.6387 17.4172 11.1784 17.4172H9.65473L18.8387 8.2332Z" fill="black"/></g><defs><clipPath id="clip0_752_3168"><rect width="20" height="20" fill="white"/></clipPath></defs></svg>
                      </div>
                      <div className="flex-grow self-stretch">Trade</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-start justify-center  font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.35405 2.5C2.8699 2.5 1.66675 3.70314 1.66675 5.1873V14.1667C1.66675 16.0076 3.15913 17.5 5.00008 17.5H15.0001C16.841 17.5 18.3334 16.0076 18.3334 14.1667V8.7963C18.3334 6.9557 16.8422 5.46296 15.0009 5.46296H12.4081C12.3749 5.41405 12.3366 5.35183 12.2932 5.27427C12.1758 5.06429 12.0616 4.81759 11.9306 4.53459C11.8995 4.46744 11.8675 4.39822 11.8342 4.32699C11.6749 3.98558 11.4819 3.58459 11.2583 3.26646C11.0728 3.00239 10.6675 2.5 10.0115 2.5H4.35405ZM10.4065 5.2098C10.4444 5.29197 10.4837 5.37702 10.5241 5.46296H3.33341V5.1873C3.33341 4.62362 3.79037 4.16667 4.35405 4.16667H9.85171C9.86408 4.18236 9.87838 4.20148 9.89461 4.22458C10.0218 4.40559 10.1586 4.67764 10.3239 5.03184C10.3506 5.08899 10.3782 5.14863 10.4065 5.2098ZM5.00008 15.8333C4.07961 15.8333 3.33341 15.0871 3.33341 14.1667V7.12963H12.0652C12.0674 7.12968 12.0696 7.12971 12.0718 7.12974C12.0813 7.12987 12.0909 7.12983 12.1004 7.12963H15.0009C15.921 7.12963 16.6667 7.87547 16.6667 8.7963V9.16667H15.0001C13.6194 9.16667 12.5001 10.286 12.5001 11.6667C12.5001 13.0474 13.6194 14.1667 15.0001 14.1667H16.6667C16.6667 15.0871 15.9206 15.8333 15.0001 15.8333H5.00008ZM14.1667 11.6667C14.1667 11.2064 14.5398 10.8333 15.0001 10.8333H16.6667V12.5H15.0001C14.5398 12.5 14.1667 12.1269 14.1667 11.6667ZM9.7929 4.10269C9.79291 4.10227 9.79636 4.10471 9.8032 4.1113C9.79631 4.10641 9.79289 4.10312 9.7929 4.10269Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Assets</div>
                    </div>
                  </div>
                  <div className="flex h-9 w-56 items-start justify-center  font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10.1168 8.45344C10.3521 8.27703 10.4085 7.9476 10.2454 7.70297C10.0515 7.4121 9.63993 7.37134 9.39274 7.61854L8.92267 8.0886C8.59723 8.41404 8.0696 8.41404 7.74416 8.0886C7.41872 7.76317 7.41872 7.23553 7.74416 6.91009L8.21422 6.44003C9.20511 5.44914 10.8548 5.61249 11.6321 6.77847C12.2859 7.7591 12.0597 9.07963 11.1168 9.78678L11.0764 9.81712C10.9234 9.93184 10.8334 10.1119 10.8334 10.3031L10.8334 10.416C10.8334 10.8763 10.4603 11.2494 10.0001 11.2493C9.53984 11.2493 9.16675 10.8763 9.16675 10.416L9.16675 10.3031C9.16675 9.58728 9.50376 8.91326 10.0764 8.48379L10.1168 8.45344Z" fill="black"/><path d="M9.16675 12.916C9.16675 13.3763 9.53984 13.7493 10.0001 13.7493C10.4603 13.7493 10.8334 13.3763 10.8334 12.916C10.8334 12.4558 10.4603 12.0827 10.0001 12.0827C9.53984 12.0827 9.16675 12.4558 9.16675 12.916Z" fill="black"/><path fill-rule="evenodd" clip-rule="evenodd" d="M1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935ZM10.0001 3.33268C6.31818 3.33268 3.33341 6.31745 3.33341 9.99935C3.33341 13.6812 6.31818 16.666 10.0001 16.666C13.682 16.666 16.6667 13.6812 16.6667 9.99935C16.6667 6.31745 13.682 3.33268 10.0001 3.33268Z" fill="black"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">FAQs</div>
                    </div>
                  </div>
                  <div className="mt-3 h-3.5 self-stretch bg-gray-100" />
                  <div className="flex w-56 flex-grow items-start justify-center pt-96 font-normal text-slate-700" >
                    <div className="flex h-5 flex-grow items-center justify-between gap-x-3" >
                      <div className="h-5 w-5">
                        <svg width="100%" height="100%" style={{"overflow":"visible"}} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M5.0002 17.5006L7.5002 2.50056M12.5002 17.5006L15.0002 2.50056M3.33354 6.66723L17.5002 6.66723M2.50018 13.3339L16.6668 13.3339" stroke="#101928" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
                      </div>
                      <div className="flex-grow self-stretch">Logout</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="relative flex flex-grow items-center justify-center self-stretch" >
                <div className="flex flex-grow flex-col items-start justify-center gap-y-2.5 self-stretch rounded-xl bg-white px-2.5 pb-2.5 pt-8" >
                  <div className="h-5 w-96 pl-2.5 text-left text-[32px] font-bold leading-5 text-black" >
                    Check out Our Juna Blog
                  </div>
                  <div className="mt-12 flex h-72 items-start justify-between gap-x-10 self-stretch rounded-xl bg-white pl-7 pr-11  pb-7" >
                    <div className="bg-bitcoin-credit-card-pos-terminal_15500393851 h-48 w-72 bg-cover bg-center" style={divStyle} />
                    <div className="flex flex-grow flex-col items-start justify-between gap-y-8 self-stretch pl-2.5" >
                      <div className="flex h-20 w-44 items-center leading-[normal]" >
                        <div className="-ml-2.5 flex w-48 flex-col items-center justify-between gap-y-2.5 self-stretch bg-white p-2.5" >
                          <div className="flex-grow self-stretch text-center text-2xl font-semibold leading-[normal] text-black" >
                            CryptoInsights
                          </div>
                          <div className="h-5 self-stretch text-left text-base font-normal leading-[normal] text-slate-600" >
                            15 Dec 2023
                          </div>
                        </div>
                      </div>
                      <div className="flex-grow self-stretch text-left text-base font-normal leading-5 text-black" >
                        Welcome to "CryptoInsights," your go-to source for staying informed in the fast-paced world of cryptocurrencies. In this dedicated blog section, we are committed to providing you with regular and insightful updates on market trends, in-depth price analyses, and comprehensive market reports. Our team of seasoned analysts at CryptoInsights diligently examines the intricate
                      </div>
                    </div>
                  </div>
                  <div className="flex h-64 items-center justify-center self-stretch rounded-xl bg-white pl-7 pr-11  " >
                    <div className="flex flex-grow items-start justify-between gap-x-10 self-stretch pb-px" >
                      <div className="bg-bitcoin-credit-card-pos-terminal_ h-48 w-72 bg-cover bg-center" style={divStyle1}/>
                      <div className="flex flex-grow flex-col items-start justify-between gap-y-8 self-stretch pl-2.5" >
                        <div className="flex h-20 w-44 items-center leading-[normal]" >
                          <div className="-ml-2.5 flex w-48 flex-col items-center justify-between gap-y-2.5 self-stretch bg-white p-2.5" >
                            <div className="flex-grow self-stretch text-center text-2xl font-semibold leading-[normal] text-black" >
                              CryptoInsights
                            </div>
                            <div className="h-5 self-stretch text-left text-base font-normal leading-[normal] text-slate-600" >
                              15 Dec 2023
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow self-stretch text-left text-base font-normal leading-5 text-black" >
                          Welcome to "CryptoInsights," your go-to source for staying informed in the fast-paced world of cryptocurrencies. In this dedicated blog section, we are committed to providing you with regular and insightful updates on market trends, in-depth price analyses, and comprehensive market reports. Our team of seasoned analysts at CryptoInsights diligently examines the intricate
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-64 items-center justify-center self-stretch rounded-xl bg-white pl-7 pr-11  " >
                    <div className="flex flex-grow items-start justify-between gap-x-10 self-stretch pb-px" >
                      <div className="bg-bitcoin-credit-card-pos-terminal_0 h-48 w-72 bg-cover bg-center" style={divStyle2}/>
                      <div className="flex flex-grow flex-col items-start justify-between gap-y-8 self-stretch pl-2.5" >
                        <div className="flex h-20 w-44 items-center leading-[normal]" >
                          <div className="-ml-2.5 flex w-48 flex-col items-center justify-between gap-y-2.5 self-stretch bg-white p-2.5" >
                            <div className="flex-grow self-stretch text-center text-2xl font-semibold leading-[normal] text-black" >
                              CryptoInsights
                            </div>
                            <div className="h-5 self-stretch text-left text-base font-normal leading-[normal] text-slate-600" >
                              15 Dec 2023
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow self-stretch text-left text-base font-normal leading-5 text-black" >
                          Welcome to "CryptoInsights," your go-to source for staying informed in the fast-paced world of cryptocurrencies. In this dedicated blog section, we are committed to providing you with regular and insightful updates on market trends, in-depth price analyses, and comprehensive market reports. Our team of seasoned analysts at CryptoInsights diligently examines the intricate
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex h-64 items-center justify-center self-stretch rounded-xl bg-white pl-7 pr-11  " >
                    <div className="flex flex-grow items-start justify-between gap-x-10 self-stretch pb-px" >
                      <div className="bg-bitcoin-credit-card-pos-terminal_1 h-48 w-72 bg-cover bg-center" style={divStyle3} />
                      <div className="flex flex-grow flex-col items-start justify-between gap-y-8 self-stretch pl-2.5" >
                        <div className="flex h-20 w-44 items-center leading-[normal]" >
                          <div className="-ml-2.5 flex w-48 flex-col items-center justify-between gap-y-2.5 self-stretch bg-white p-2.5" >
                            <div className="flex-grow self-stretch text-center text-2xl font-semibold leading-[normal] text-black" >
                              CryptoInsights
                            </div>
                            <div className="h-5 self-stretch text-left text-base font-normal leading-[normal] text-slate-600" >
                              15 Dec 2023
                            </div>
                          </div>
                        </div>
                        <div className="flex-grow self-stretch text-left text-base font-normal leading-5 text-black" >
                          Welcome to "CryptoInsights," your go-to source for staying informed in the fast-paced world of cryptocurrencies. In this dedicated blog section, we are committed to providing you with regular and insightful updates on market trends, in-depth price analyses, and comprehensive market reports. Our team of seasoned analysts at CryptoInsights diligently examines the intricate
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
      );
}

export default JunaBlog