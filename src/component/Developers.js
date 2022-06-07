import React from 'react';
//import { Col, Row } from "react-bootstrap";

const Developers = (props) => {
  return (
    <div>
      <div className="py-12 px-8  xl:py-12 xl:pl-16 xl:pr-9 ">
        <div className='flex flex-col lg:flex-row text-white px-2 lg: justify-between  mx-5 mt-1 ' >
          <div
            className="flex flex-col items-start  justify-center text-left  "
          >
            <p className="heading text-primary uppercase font-medium text-xl lg:text-2xl mb-1">Developers</p>
            <p className="title-line text-3xl xl:text-4xl  text-white uppercase font-medium mb-2">
               Boon For Web3 <span className='span text-primary'>Developers</span>
            </p>

            <p className="content text-secondary w-4/6 mt-3 mb-6 font-normal">
              Designed to assist developers with simple integration into new and
              existing infrastructure, the USDAO protocol is suitable for
              multiple usage cases and novel new business solutions.
            </p>
          </div>

          <div className='   relative '>
            <div className="wrapper m-6 w-full">
              <div className="someclass">
                <a
                  href="#"
                  target="_blank" rel="noreferrer"
                  className="doc-icon-wrap"
                >
                  <div className="inner-part doc">
                    <svg
                      width="38"
                      height="42"
                      viewBox="0 0 38 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M10.2708 0.166504H27.7312C34.1667 0.166504 37.75 3.87484 37.75 10.229V31.7498C37.75 38.2082 34.1667 41.8332 27.7312 41.8332H10.2708C3.9375 41.8332 0.25 38.2082 0.25 31.7498V10.229C0.25 3.87484 3.9375 0.166504 10.2708 0.166504ZM10.8333 9.87484V9.854H17.0604C17.9583 9.854 18.6875 10.5832 18.6875 11.4769C18.6875 12.3957 17.9583 13.1248 17.0604 13.1248H10.8333C9.93542 13.1248 9.20833 12.3957 9.20833 11.4998C9.20833 10.604 9.93542 9.87484 10.8333 9.87484ZM10.8333 22.5415H27.1667C28.0625 22.5415 28.7917 21.8123 28.7917 20.9165C28.7917 20.0207 28.0625 19.2894 27.1667 19.2894H10.8333C9.93542 19.2894 9.20833 20.0207 9.20833 20.9165C9.20833 21.8123 9.93542 22.5415 10.8333 22.5415ZM10.8333 32.0623H27.1667C27.9979 31.979 28.625 31.2686 28.625 30.4373C28.625 29.5832 27.9979 28.8748 27.1667 28.7915H10.8333C10.2083 28.729 9.60417 29.0207 9.27083 29.5623C8.9375 30.0832 8.9375 30.7707 9.27083 31.3123C9.60417 31.8332 10.2083 32.1457 10.8333 32.0623Z"
                        fill="white"
                      />
                    </svg>

                    <p>Documentation</p>
                  </div>
                </a>
                {/* <a
                  href="#"
                  target="_blank" rel="noreferrer"
                  class="doc-icon-wrap"
                >
                  <div class="inner-part">
                    <svg
                      width="42"
                      height="42"
                      viewBox="0 0 42 42"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M24.0202 6.1671H30.416C38.1035 6.1671 41.8535 10.2713 41.8327 18.6879V28.8338C41.8327 36.8754 36.8744 41.8338 28.8119 41.8338H13.166C5.14518 41.8338 0.166016 36.8754 0.166016 28.8129V13.1671C0.166016 4.5421 3.99935 0.167104 11.5618 0.167104H14.8535C16.7931 0.14627 18.6035 1.0421 19.791 2.56294L21.6244 5.00044C22.2077 5.7296 23.0827 6.1671 24.0202 6.1671ZM11.3535 27.8546H30.6452C31.4993 27.8546 32.1868 27.1463 32.1868 26.2921C32.1868 25.4171 31.4993 24.7296 30.6452 24.7296H11.3535C10.4785 24.7296 9.79102 25.4171 9.79102 26.2921C9.79102 27.1463 10.4785 27.8546 11.3535 27.8546Z"
                        fill="white"
                      />
                    </svg>

                    <p> Developer Kits </p>
                  </div>
                </a> */}
              </div>
              <div className="someclass">
                <div className="doc-icon-empty-wrap">
                  <div className="inner-part"></div>
                </div>
                <a
                  href="https://github.com/andreyscott/crypto"
                  target="_blank" rel="noreferrer"
                  className="doc-icon-wrap"
                >
                  <div className="inner-part">
                    <svg
                      width="50"
                      height="50"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M25.0534 4.1665C14.8595 4.1652 6.16967 11.5581 4.53755 21.6205C2.90544 31.6829 8.81296 41.4435 18.4846 44.6644C19.5263 44.8519 19.8992 44.2123 19.8992 43.6623C19.8992 43.1686 19.8826 41.8603 19.8763 40.1207C14.0951 41.3707 12.8742 37.3332 12.8742 37.3332C12.4936 36.0768 11.6754 34.9984 10.568 34.2936C8.69297 33.004 10.7117 33.0332 10.7117 33.0332C12.0465 33.2162 13.2212 34.007 13.893 35.1748C14.4616 36.2087 15.4196 36.9727 16.554 37.297C17.6885 37.6213 18.9055 37.4791 19.9346 36.9019C20.0313 35.8478 20.5003 34.8625 21.2576 34.1228C16.6451 33.5998 11.7951 31.8165 11.7951 23.8519C11.7695 21.7919 12.5344 19.8005 13.9326 18.2873C13.2999 16.4942 13.3744 14.5274 14.1409 12.7873C14.1409 12.7873 15.8846 12.2269 19.8534 14.9144C23.2572 13.9811 26.8495 13.9811 30.2534 14.9144C34.2242 12.2248 35.9659 12.7873 35.9659 12.7873C36.7359 14.5266 36.8104 16.4948 36.1742 18.2873C37.5775 19.8003 38.3418 21.797 38.3076 23.8603C38.3076 31.8457 33.4534 33.5998 28.8242 34.1144C29.8228 35.1354 30.3349 36.536 30.2305 37.9603C30.2305 40.7394 30.2055 42.9811 30.2055 43.6623C30.2055 44.2186 30.5763 44.8644 31.6367 44.6603C41.3044 41.4339 47.2056 31.6727 45.5701 21.613C43.9346 11.5533 35.2452 4.16417 25.0534 4.1665Z"
                        fill="white"
                      />
                    </svg>

                    <p>Source Code</p>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Developers