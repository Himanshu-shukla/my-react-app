import btnIcon from "../assets/buttonicon@2x.png"
import juna from "../assets/juna-holding-2--transparent-1@2x.png"
import iconRight from "../assets/iconright@2x.png"
import IconEyeSlash from "../assets/icon--eyeslash@2x.png"
import rectangle from "../assets/rectangle-6@2x.png"
import walletIcon from "../assets/vuesaxlinearemptywallet@2x.png"
import usFlag from "../assets/us-flag@2x.png"
import { Link } from 'react-router-dom';
import './LogIn.css'

const Login = () => {
  return (
    <div className="font-inter inline-flex h-[1024px] w-[1440px] resize flex-col items-center gap-y-1 overflow-hidden border border-solid border-gray-300 bg-white px-8 pb-44 pt-8" >
      <div className="flex h-10 items-start justify-between gap-x-[1160px] self-stretch text-center text-sm font-semibold leading-normal tracking-[0px] text-slate-500" >
        <div className="flex w-28 items-center justify-center self-stretch">
          <div className="h-10 w-28">
            <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 118 40" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_248_653)"><mask id="mask0_248_653" style={{ "maskType": "luminance" }} maskUnits="userSpaceOnUse" x="0" y="0" width="118" height="40"><path d="M118 0H0V40H118V0Z" fill="white" /></mask><g mask="url(#mask0_248_653)"><path d="M11.0959 7.26726C11.0959 11.0381 8.614 14.5294 5.54993 13.8304C2.48587 13.0653 0 8.32358 0 5.48862C0 2.65368 2.48193 0.257561 5.54993 0.0167847C8.61007 0.0284352 11.0959 3.48863 11.0959 7.26726Z" fill="#2E3A5C" /><path d="M25.6926 4.23037C25.6926 6.576 23.2106 9.59736 20.1426 10.9644C17.0786 12.3313 14.5927 10.4556 14.5927 6.75464C14.5927 3.05366 17.0746 -0.130808 20.1426 0.0206479C23.2067 0.172104 25.6926 1.90026 25.6926 4.23037Z" fill="#2E3A5C" /><path d="M40.2931 5.48858C40.2931 8.70023 37.8112 8.85946 34.7432 8.09441C31.6791 7.39538 29.1932 5.98567 29.1932 3.70996C29.1932 1.43423 31.6752 0.00121828 34.7432 0.0167522C37.8072 -0.224024 40.2931 2.15656 40.2931 5.48858Z" fill="#2E3A5C" /><path d="M11.0959 23.1003C11.0959 26.1216 8.614 29.042 5.54993 28.2071C2.48587 27.4886 0 22.4362 0 19.3643C0 16.2925 2.48193 16.475 5.54993 17.1508C8.61007 17.9663 11.0959 20.0168 11.0959 23.1003Z" fill="#2E3A5C" /><path d="M25.6926 16.7119C25.6926 19.7022 23.2106 23.341 20.1426 24.8362C17.0786 26.3313 14.5927 25.0731 14.5927 22.0207C14.5927 18.9682 17.0746 15.3294 20.1426 13.8925C23.2067 12.4556 25.6926 13.7061 25.6926 16.7119Z" fill="#2E3A5C" /><path d="M40.2931 19.3643C40.2931 22.3352 37.8112 22.1838 34.7432 21.4692C31.6791 20.6381 29.1932 18.6537 29.1932 15.6245C29.1932 12.5954 31.6752 9.81871 34.7432 10.6265C37.8072 11.3022 40.2931 16.2692 40.2931 19.3643Z" fill="#2E3A5C" /><path d="M11.0959 36.0711C11.0959 38.343 8.614 39.7798 5.54993 39.7682C2.48587 40.0089 0 37.6245 0 34.2925C0 30.9604 2.48193 30.9255 5.54993 31.6866C8.61007 32.3896 11.0959 33.7954 11.0959 36.0711Z" fill="#2E3A5C" /><path d="M25.6926 33.0342C25.6926 36.7507 23.2106 39.9196 20.1426 39.7681C17.0786 39.6128 14.5927 37.8847 14.5927 35.5585C14.5927 33.2323 17.0746 30.1915 20.1426 28.8245C23.2067 27.4536 25.6926 29.3332 25.6926 33.0342Z" fill="#2E3A5C" /><path d="M40.2931 34.2925C40.2931 37.007 37.8112 39.5274 34.7432 39.7682C31.6791 39.7565 29.1932 36.2925 29.1932 32.5178C29.1932 28.743 31.6752 25.2556 34.7432 25.9585C37.8072 26.7236 40.2931 31.4614 40.2931 34.2964" fill="#2E3A5C" /><path d="M53.1 40.005V34.9139H47.6523V40.005H47.0938V30.2304H47.6523V34.3508H53.1V30.2304H53.6703V40.005H53.1Z" fill="#2E3A5C" /><path d="M65.4153 38.7352C64.4634 39.675 63.2362 40.1449 61.7415 40.1449C60.2469 40.1449 59.0236 39.6827 58.0796 38.7508C57.1277 37.811 56.6479 36.5993 56.6479 35.1236C56.6479 33.6478 57.1199 32.4401 58.0639 31.508C59.0157 30.5682 60.2429 30.0983 61.7415 30.0983C63.2401 30.0983 64.4555 30.5605 65.4153 31.4925C66.3671 32.4323 66.8431 33.644 66.8431 35.1236C66.8431 36.6032 66.3711 37.8071 65.4153 38.7391M65.0141 31.9042C64.1605 31.0653 63.071 30.6459 61.7376 30.6459C60.4042 30.6459 59.3422 31.0653 58.4926 31.9042C57.6391 32.743 57.2182 33.8187 57.2182 35.1236C57.2182 36.4284 57.6351 37.4964 58.4808 38.3275C59.3304 39.1662 60.416 39.5856 61.7415 39.5856C63.0671 39.5856 64.1605 39.1779 65.018 38.3546C65.8597 37.5236 66.2806 36.4478 66.2806 35.1236C66.2806 33.7993 65.8597 32.7352 65.018 31.9042" fill="#2E3A5C" /><path d="M69.797 40.005V30.2304H70.3516V39.4458H73.1443V40.005H69.797Z" fill="#2E3A5C" /><path d="M82.4073 38.5294C81.5734 39.5157 80.4878 40.005 79.1505 40.005H75.8465V30.2304H79.1505C80.4799 30.2304 81.5616 30.7275 82.3915 31.71C83.1743 32.6304 83.5676 33.7644 83.5676 35.1042C83.5676 36.444 83.1821 37.5974 82.4033 38.5294M81.9903 32.0906C81.2666 31.2168 80.3226 30.778 79.1465 30.778H76.4011V39.4458H79.1465C80.1613 39.4458 81.0424 39.073 81.7937 38.3236C82.5961 37.5197 83.0012 36.4478 83.0012 35.1042C83.0012 33.9119 82.6629 32.9061 81.9903 32.0906Z" fill="#2E3A5C" /><path d="M86.5805 30.2304H86.0259V40.005H86.5805V30.2304Z" fill="#2E3A5C" /><path d="M89.739 31.7099V40.0051H89.1883V30.1604L96.5751 38.7197V30.2303H97.1455V40.172L89.739 31.7099Z" fill="#2E3A5C" /><path d="M108.993 38.6537C108.041 39.6478 106.774 40.1449 105.205 40.1449C103.635 40.1449 102.487 39.6827 101.547 38.7469C100.595 37.811 100.115 36.5993 100.115 35.1197C100.115 33.6401 100.591 32.4595 101.547 31.5197C102.507 30.5682 103.726 30.0945 105.205 30.0945C106.979 30.0945 108.375 30.7663 109.394 32.1061L108.934 32.4517C108.045 31.2479 106.802 30.642 105.205 30.642C103.903 30.642 102.817 31.0692 101.964 31.9158C101.102 32.7663 100.674 33.8343 100.674 35.1236C100.674 36.4129 101.095 37.4847 101.944 38.3275C102.813 39.1662 103.903 39.5856 105.205 39.5856C106.597 39.5856 107.726 39.1274 108.576 38.2032C109.221 37.5119 109.591 36.7236 109.685 35.8498H106.412V35.2867H110.306C110.306 36.6226 109.87 37.7449 108.993 38.6576" fill="#2E3A5C" /><path d="M116.147 39.9274C115.786 40.0555 115.361 40.1177 114.869 40.1177C113.355 40.1177 112.379 39.407 111.947 37.9934L112.513 37.8031C112.836 38.9759 113.622 39.5584 114.869 39.5584C115.585 39.5584 116.143 39.3837 116.549 39.0381C116.966 38.6847 117.174 38.1604 117.174 37.4769C117.174 36.8284 116.93 36.2886 116.435 35.8614C116.309 35.7449 116.112 35.6129 115.841 35.4614C115.573 35.3177 115.231 35.1507 114.818 34.9721C114.031 34.6226 113.492 34.3235 113.209 34.0672C112.729 33.6595 112.485 33.1158 112.485 32.4362C112.485 31.7565 112.729 31.2167 113.221 30.809C113.697 30.3857 114.291 30.176 114.991 30.176C116.155 30.176 116.981 30.607 117.461 31.4653L116.918 31.6983C116.733 31.3993 116.513 31.174 116.25 31.0264C115.927 30.8245 115.51 30.7274 114.987 30.7274C114.464 30.7274 113.988 30.8789 113.63 31.1779C113.241 31.4964 113.048 31.9158 113.048 32.4362C113.048 32.9022 113.252 33.3099 113.662 33.6556C113.89 33.8381 114.35 34.0866 115.042 34.3934C115.479 34.5837 115.852 34.774 116.167 34.9643C116.482 35.1507 116.737 35.341 116.93 35.5313C117.465 36.0517 117.733 36.7041 117.733 37.4769C117.733 38.7197 117.202 39.5351 116.14 39.9274" fill="#2E3A5C" /><path d="M52.7617 18.8012C52.7617 21.376 51.6289 21.376 51.2041 21.376C50.4804 21.376 49.9769 21.0576 49.6033 20.3779L49.2807 19.7954L47.1961 21.0886L47.4714 21.6012C48.2659 23.0576 49.5325 23.7993 51.2356 23.7993C53.0489 23.7993 55.2201 22.9411 55.2201 18.8595V0.00123596H52.7657V18.8012H52.7617Z" fill="#2E3A5C" /><path d="M70.859 17.842C70.859 18.9372 70.4499 19.7877 69.6082 20.4362C68.8137 21.0537 67.8028 21.3682 66.611 21.3682C65.4192 21.3682 64.3887 21.0653 63.6099 20.4634C62.7917 19.8304 62.3945 18.9721 62.3945 17.842V0.00123596H59.9676V17.842C59.9676 19.6983 60.6402 21.1974 61.9815 22.3003C63.2165 23.2906 64.7741 23.7954 66.611 23.7954C68.4479 23.7954 70.0645 23.3022 71.2445 22.3275C72.6172 21.209 73.3134 19.7022 73.3134 17.842V0.00123596H70.859V17.842Z" fill="#2E3A5C" /><path d="M93.3695 17.5119L78.2458 0.00123596V24.0401H80.6215V6.4828L95.7767 24.0401V0.00123596H93.3695V17.5119Z" fill="#2E3A5C" /><path d="M108.709 0.00123596L99.6077 23.7954H102.098L104.481 17.7255H112.961L115.317 23.7954H117.835L108.706 0.00123596H108.709ZM111.994 15.3255H105.425L108.706 6.45173L111.99 15.3255H111.994Z" fill="#2E3A5C" /></g></g><defs><clipPath id="clip0_248_653"><rect width="118" height="40" fill="white" /></clipPath></defs></svg>
          </div>
        </div>
        <div className="flex h-9 w-24 items-center justify-center">
          <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-200 bg-white py-2 px-3" >
            <div className="flex h-5 flex-grow items-center justify-center gap-x-1" >
              <div className="h-4 w-4">
                <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><g clip-path="url(#clip0_233_787)"><path d="M8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z" fill="#F0F0F0" /><path d="M7.65186 8.00001H15.9997C15.9997 7.27795 15.9034 6.57845 15.7241 5.91304H7.65186V8.00001Z" fill="#D80027" /><path d="M7.65186 3.82569H14.8255C14.3358 3.02657 13.7096 2.32022 12.9795 1.73872H7.65186V3.82569Z" fill="#D80027" /><path d="M7.99977 16C9.88255 16 11.6131 15.3493 12.9796 14.2609H3.0199C4.38646 15.3493 6.11699 16 7.99977 16Z" fill="#D80027" /><path d="M1.17398 12.1733H14.8256C15.2188 11.5318 15.5237 10.8305 15.7242 10.0863H0.275391C0.475922 10.8305 0.780828 11.5318 1.17398 12.1733Z" fill="#D80027" /><path d="M3.70575 1.24931H4.43478L3.75666 1.74197L4.01569 2.53912L3.33759 2.04647L2.6595 2.53912L2.88325 1.85047C2.28619 2.34781 1.76287 2.9305 1.33162 3.57975H1.56522L1.13356 3.89334C1.06631 4.00553 1.00181 4.1195 0.94 4.23516L1.14612 4.86956L0.761563 4.59016C0.665969 4.79269 0.578531 4.99978 0.499938 5.21119L0.727031 5.91019H1.56522L0.887094 6.40284L1.14612 7.2L0.468031 6.70734L0.0618437 7.00247C0.0211875 7.32928 0 7.66216 0 8H8C8 3.58175 8 3.06087 8 0C6.41963 0 4.94641 0.458438 3.70575 1.24931ZM4.01569 7.2L3.33759 6.70734L2.6595 7.2L2.91853 6.40284L2.24041 5.91019H3.07859L3.33759 5.11303L3.59659 5.91019H4.43478L3.75666 6.40284L4.01569 7.2ZM3.75666 4.07241L4.01569 4.86956L3.33759 4.37691L2.6595 4.86956L2.91853 4.07241L2.24041 3.57975H3.07859L3.33759 2.78259L3.59659 3.57975H4.43478L3.75666 4.07241ZM6.88525 7.2L6.20716 6.70734L5.52906 7.2L5.78809 6.40284L5.10997 5.91019H5.94816L6.20716 5.11303L6.46616 5.91019H7.30434L6.62622 6.40284L6.88525 7.2ZM6.62622 4.07241L6.88525 4.86956L6.20716 4.37691L5.52906 4.86956L5.78809 4.07241L5.10997 3.57975H5.94816L6.20716 2.78259L6.46616 3.57975H7.30434L6.62622 4.07241ZM6.62622 1.74197L6.88525 2.53912L6.20716 2.04647L5.52906 2.53912L5.78809 1.74197L5.10997 1.24931H5.94816L6.20716 0.452156L6.46616 1.24931H7.30434L6.62622 1.74197Z" fill="#0052B4" /></g><defs><clipPath id="clip0_233_787"><rect width="16" height="16" fill="white" /></clipPath></defs></svg>
              </div>
              <div className="flex-grow self-stretch pl-1">ENG</div>
              <div className="h-4 w-4">
                <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8.92259 11.4226C8.76631 11.5789 8.55435 11.6667 8.33333 11.6667C8.11232 11.6667 7.90036 11.5789 7.74408 11.4226L2.74408 6.42259C2.41864 6.09715 2.41864 5.56951 2.74408 5.24408C3.06951 4.91864 3.59715 4.91864 3.92259 5.24408L8.33333 9.65482L12.7441 5.24408C13.0695 4.91864 13.5972 4.91864 13.9226 5.24408C14.248 5.56951 14.248 6.09715 13.9226 6.42259L8.92259 11.4226Z" fill="#667185" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-32 w-22 items-end justify-center pt-24 text-center text-[28px] font-semibold leading-tight tracking-[-0.32px] text-gray-900" >
        <div className="h-9 flex-grow">Log In</div>
      </div>
      <div className="h-7 w-90 pt-1 text-center text-base font-normal leading-normal tracking-[0px] text-slate-500" >
        Enter your credentials to access your account
      </div>
      <div className="flex h-14 w-96 items-end justify-center pt-9 text-left text-sm font-medium leading-normal tracking-[0px] text-gray-900" >
        <div className="h-5 flex-grow">EMAIL ADDRESS</div>
      </div>
      <div className="flex h-14 w-96 items-center justify-center text-left text-sm font-normal leading-normal tracking-[0px] text-gray-900" >
        <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-slate-700 bg-white p-4" >
          <div className="flex h-5 flex-grow items-center justify-center gap-x-0.5" >
            <input className="w-36 self-stretch" type="text" placeholder="example@email.com" style={{ outline: "none" }}></input>
            <div className="w-px self-stretch bg-blue-200" />
            <div className="ml-52 flex h-5 w-5 flex-grow items-center justify-center self-stretch" >
              <div className="h-5 w-5">
                <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M15.8336 18C17.6745 18 19.1669 16.5076 19.1669 14.6667V7.18557C19.1672 7.17283 19.1672 7.16005 19.1669 7.14725V6.33333C19.1669 4.49238 17.6745 3 15.8336 3H4.16693C2.32598 3 0.833596 4.49238 0.833596 6.33333V7.14726C0.833299 7.16005 0.833301 7.17282 0.833596 7.18556V14.6667C0.833596 16.5076 2.32598 18 4.16693 18H15.8336ZM2.50026 14.6667C2.50026 15.5871 3.24645 16.3333 4.16693 16.3333H15.8336C16.7541 16.3333 17.5003 15.5871 17.5003 14.6667V8.39753L11.2382 10.9023C10.4435 11.2202 9.557 11.2202 8.76229 10.9023L2.50026 8.39753V14.6667ZM10.6192 9.35488L17.5003 6.60247V6.33333C17.5003 5.41286 16.7541 4.66667 15.8336 4.66667H4.16693C3.24645 4.66667 2.50026 5.41286 2.50026 6.33333V6.60247L9.38128 9.35488C9.77863 9.51382 10.2219 9.51382 10.6192 9.35488Z" fill="#667185" /></svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 w-96 items-end justify-center pt-5 text-left text-sm font-medium leading-normal tracking-[0px] text-gray-900" >
        <div className="h-5 flex-grow">PASSWORD</div>
      </div>
      <div className="flex h-14 w-96 items-center justify-center text-left text-sm font-normal leading-normal tracking-[0px] text-slate-400" >
        <div className="flex flex-grow items-center justify-center self-stretch rounded-md border border-solid border-gray-300 bg-white p-4 [box-shadow:_0px_3px_2px_-2px_rgba(0,_0,_0,_0.06),_0px_5px_3px_-2px_rgba(0,_0,_0,_0.02)]" >
          <div className="flex h-5 flex-grow items-center justify-between gap-x-60" >
            <input className="w-28 self-stretch" type="password" placeholder="Enter Password" style={{ outline: "none" }}></input>
            <div className="h-5 w-5">
              <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M17.2558 3.24408C17.5812 3.56951 17.5812 4.09715 17.2558 4.42259L3.92243 17.7559C3.59699 18.0814 3.06935 18.0814 2.74391 17.7559C2.41848 17.4305 2.41848 16.9028 2.74391 16.5774L16.0772 3.24408C16.4027 2.91864 16.9303 2.91864 17.2558 3.24408Z" fill="#667185" /><path d="M13.1661 4.9767C12.2275 4.53469 11.1692 4.25 9.99982 4.25C7.54641 4.25 5.58214 5.50308 4.18616 6.83307C2.78698 8.16611 1.87909 9.64973 1.5197 10.2915C1.28418 10.7121 1.25613 11.2143 1.44946 11.6603C1.58447 11.9718 1.81407 12.4544 2.15249 13.0143C2.39053 13.4082 2.90282 13.5346 3.29671 13.2965C3.69061 13.0585 3.81695 12.5462 3.57891 12.1523C3.30672 11.7019 3.11784 11.3124 3.00328 11.0537C3.34141 10.4578 4.14221 9.17693 5.33581 8.03975C6.56871 6.86513 8.14153 5.91667 9.99982 5.91667C10.6682 5.91667 11.2997 6.03937 11.8916 6.25116L13.1661 4.9767Z" fill="#667185" /><path d="M14.7419 8.11491C15.8924 9.23288 16.6657 10.4709 16.9964 11.0537C16.8818 11.3124 16.6929 11.7019 16.4207 12.1523C16.1827 12.5462 16.309 13.0585 16.7029 13.2965C17.0968 13.5346 17.6091 13.4082 17.8472 13.0143C18.1856 12.4544 18.4152 11.9718 18.5502 11.6603C18.7435 11.2143 18.7155 10.7121 18.4799 10.2915C18.1298 9.66625 17.259 8.24193 15.9206 6.93629L14.7419 8.11491Z" fill="#667185" /><path d="M9.99984 7.16667C10.3027 7.16667 10.598 7.19898 10.8825 7.26034L9.16762 8.97519C8.45638 9.2262 7.8927 9.78987 7.6417 10.5011L5.92684 12.216C5.86548 11.9315 5.83317 11.6362 5.83317 11.3333C5.83317 9.03215 7.69865 7.16667 9.99984 7.16667Z" fill="#667185" /><path d="M9.99984 13.8333C9.70744 13.8333 9.42677 13.7831 9.16597 13.6909L7.9151 14.9418C8.52828 15.2968 9.24033 15.5 9.99984 15.5C12.301 15.5 14.1665 13.6345 14.1665 11.3333C14.1665 10.5738 13.9633 9.86177 13.6083 9.24859L12.3574 10.4995C12.4496 10.7603 12.4998 11.0409 12.4998 11.3333C12.4998 12.714 11.3805 13.8333 9.99984 13.8333Z" fill="#667185" /></svg>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-10 w-96 items-end justify-center pt-5 text-sm font-medium leading-normal tracking-[0px]" style={{ width: '25rem' }} >
        <div className="flex h-5 flex-grow items-center justify-center " >
          <div className="flex h-5 w-5 items-center justify-center">
            <div className="h-5 w-5 rounded border-[1.5px] border-solid border-gray-300 bg-white" />
          </div>
          <div className="w-60 self-stretch text-left text-gray-900" style={{ width: "13rem" }}>
            Remember me for 30 days
          </div>
          <div className="w-60 flex flex-grow items-center justify-end self-stretch  text-right text-slate-700" >
            <div className="flex items-center self-stretch [justify-content:end]" >
              Forgot Password?
            </div>
            <div className="flex h-3 w-3 items-center">
              <div className="ml-[-146px] w-40 self-stretch rounded-lg bg-white/0" />
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-20 w-96 items-end justify-center pt-7 text-center text-base font-semibold leading-normal tracking-[0px] text-white" style={{ width: '25rem' }}>
        <div className="flex flex-grow items-center justify-center self-stretch rounded-lg bg-slate-700 py-4 px-32 [box-shadow:_0px_3px_2px_-2px_rgba(0,_0,_0,_0.06),_0px_5px_3px_-2px_rgba(0,_0,_0,_0.02)]" >
          <div className="h-6 flex-grow">Log into Account</div>
        </div>
      </div>
      <div className="flex h-11 w-96 items-end justify-center pt-6 text-center text-sm font-normal leading-normal tracking-[0px] text-slate-500" style={{ width: '25rem' }} >
        <div className="flex h-5 flex-grow items-center justify-center">
          <div className="flex h-0.5 flex-grow items-center justify-center pt-px" >
            <div className="h-px flex-grow bg-gray-100" />
          </div>
          <div className="flex w-0 items-center self-stretch pr-0">
            <div className="ml-[-216.5px] w-8 self-stretch bg-white px-2">
              Or
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-20 w-96 items-end justify-center pt-6 text-right text-base font-semibold leading-normal tracking-[0px] text-slate-700" style={{ width: '25rem' }}>
        <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-gray-300 bg-white py-4 px-24" >
          <div className="flex h-6 flex-grow items-center justify-between gap-x-4" >
            <img
              className="h-5 w-5 object-cover object-center"
              src="https://uortjlczjmucmpaqqhqm.supabase.co/storage/v1/object/public/firejet-converted-images/images/e121e126b45cd58fd8fcc69bf2b6c53109f89ea8.webp"
            />
            <div className="flex-grow self-stretch">
              Continue with Google
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-20 w-96 items-end justify-center pt-5 text-right text-base font-semibold leading-normal tracking-[0px] text-slate-700" style={{ width: '25rem' }} >
        <div className="flex flex-grow items-center justify-center self-stretch rounded-md border-[1.5px] border-solid border-gray-300 bg-white py-4 px-24" >
          <div className="flex h-6 flex-grow items-center justify-between gap-x-4" >
            <div className="h-6 w-6">
              <svg width="100%" height="100%" style={{ "overflow": "visible" }} preserveAspectRatio="none" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M18.54 14.05C18.12 14.46 17.88 15.05 17.94 15.68C18.03 16.76 19.02 17.55 20.1 17.55H22V18.74C22 20.81 20.31 22.5 18.24 22.5H6.76C4.69 22.5 3 20.81 3 18.74V12.01C3 9.94001 4.69 8.25 6.76 8.25H18.24C20.31 8.25 22 9.94001 22 12.01V13.45H19.98C19.42 13.45 18.91 13.67 18.54 14.05Z" stroke="#2E3A5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M3 12.91V8.34004C3 7.15004 3.73 6.09 4.84 5.67L12.78 2.67C14.02 2.2 15.35 3.12003 15.35 4.45003V8.25002" stroke="#2E3A5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M23.0588 14.4702V16.5302C23.0588 17.0802 22.6188 17.5302 22.0588 17.5502H20.0988C19.0188 17.5502 18.0288 16.7602 17.9388 15.6802C17.8788 15.0502 18.1188 14.4602 18.5388 14.0502C18.9088 13.6702 19.4188 13.4502 19.9788 13.4502H22.0588C22.6188 13.4702 23.0588 13.9202 23.0588 14.4702Z" stroke="#2E3A5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /><path d="M7.5 12.5H14.5" stroke="#2E3A5C" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" /></svg>
            </div>
            <div className="flex-grow self-stretch">
              Continue with Wallet
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-12 w-60 items-end justify-center pt-5 text-sm leading-normal tracking-[0px]" >
        <div className="flex h-7 flex-grow items-center justify-center">
          <div className="h-5 flex-grow text-left font-normal text-slate-500">
            Are you new here?
          </div>
          <div className="w-32 self-stretch rounded-lg bg-white/0 py-1 px-2 text-center font-medium text-slate-700" >
            <Link to="/signup" className="text-slate-700">
              Create Account
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
