import { useState } from "react";
import Offcanvas from "react-bootstrap/Offcanvas";
import Logo from "../assets/logo.png";
import SignInModal from "@/components/SignInModal";

const NavBar = () => {
  // const [isVisible, setIsVisible] = useState(false);
  // const [openResponrsiveMenu, setOpenResponsivMenu] = useState(false);
  // const toggleInput = () => {
  //   setIsVisible((prev) => !prev);
  // };
  const [showAddCard, setShowAddCard] = useState(false);

  const [showSingIn, setShowSignIn] = useState(false);
  const [modalShow, setModalShow] = useState(false);

  return (

    <>
      <div className="max-w-full bg-white shadow-md">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <div className="py-[0.7rem] flex gap-3 items-center ">
            <span className="lg:ml-3 text-[13px] cursor-pointer flex gap-2 dd-sm:flex-col items-center border-r pr-3"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-file-earmark-text" viewBox="0 0 16 16">
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5m0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1z" />
            </svg>Track Your Order</span>
            <span className="text-[13px] cursor-pointer  flex gap-2  dd-sm:flex-col items-center"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
              <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10" />
              <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
            </svg>Store Location</span>
          </div>
          <div className="flex h-[30px] px-3 rounded-[6px] cursor-pointer text-[13.5px] gap-3 items-center">
            <span className="lg:hidden text-[13px] cursor-pointer flex gap-2 items-center border-r pr-3"><svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" fill="currentColor" className="bi bi-heart" viewBox="0 0 16 16">
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>Wishlist</span>
            <span onClick={() => setShowSignIn(true)} className="text-[13px]  dd-sm:flex-col cursor-pointer  flex gap-2 items-center"><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="currentColor" className="bi bi-box-arrow-in-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M6 3.5a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 0-1 0v2A1.5 1.5 0 0 0 6.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-8A1.5 1.5 0 0 0 5 3.5v2a.5.5 0 0 0 1 0z" />
              <path fill-rule="evenodd" d="M11.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H1.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708z" />
            </svg>Sign In / Register</span>
          </div>
        </div>
      </div>
      <div className=" w-full bg-[#7EACB5]">
        <div className="max-w-[1300px] lg:pb-2 bg-[#7EACB5] mx-auto lg:px-3">
          {/* responsi */}
          <ResponsivSideBar setModalShow={setModalShow} modalShow={modalShow} showAddCard={showAddCard} setShowAddCard={setShowAddCard} />
          {/* responsive */}
          <div className="lg:hidden flex w-full justify-between items-center pt-2 pb-2 flex-wrap">
            <div className=" min-xl:w-[80%] xl:w-[70%] sm:w-auto flex items-center justify-between">
              <img src={Logo} alt="logo" className="w-36 md:w-32" />
              <div className="relative md:hidden  xl:ml-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  className="bi bi-search cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                </svg>
                <input
                  type="text"
                  placeholder="Find Your Products..."
                  className="min-xl:w-[50rem] xl:w-[40rem] py-[10px] pl-[35px] pr-10 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
                />
                <div className="cursor-pointer absolute right-[0.3rem] bg-[#7EACB5] p-[0.6rem] text-[13px] px-3 rounded-sm text-white top-1/2 transform -translate-y-1/2">
                  SEARCH
                </div>
              </div>
              {/* mobile screen */}
              {/* <div className=" hidden gap-2 md:block py-2 sm:w-full justify-between ">
              {isVisible && (
                <input
                  type="text"
                  placeholder="Find Your Products..."
                  className="w-full py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
                />
              )}
              <svg onClick={toggleInput} xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search " viewBox="0 0 16 16">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
            </div> */}
              {/*End mobile screen */}
            </div>
            <div className="lg:hidden flex min-sm:gap-5 sm:gap-3 items-center">
              <div className="flex items-center">
                <span
                  onClick={() => setShowAddCard(true)}
                  className="relative flex cursor-pointer items-center justify-center px-[15px] py-[11px] sm:px-[12px] sm:py-[10px] bg-white border-r hover:bg-gray-100 focus:outline-none"
                >
                  <span className="absolute top-3 pb-[0.5px] -right-[0.6rem] flex items-center justify-center w-[1.10rem] h-[1.10rem] text-xs font-semibold text-white bg-red-500 rounded-full">
                    4
                  </span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="18"
                    height="18"
                    fill="currentColor"
                    className="bi bi-cart3"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                  </svg>{" "}
                </span>
                <span
                  className="px-[15px] py-[8px] sm:px-[12px] sm:py-[10px] bg-white"
                >
                  $ 790.00
                </span>
              </div>



              <svg
                onClick={() => setModalShow(true)}
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                className="bi bi-list cursor-pointer text-white hidden sm:block"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>

              <SignInModal show={showSingIn} setShow={setShowSignIn} setShowAddCard={setShowAddCard} showAddCard={showAddCard} />
            </div>
          </div>
        </div>

      

      </div>
      <div className="lg:hidden max-w-full bg-white shadow-md">
        <div className="max-w-[1300px] mx-auto flex justify-between items-center">
          <div className="h-[50px] uppercase flex gap-4 items-center ">
            <span className="cursor-pointer w-[200px] pr-2 border-r text-[13px] flex gap-2 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                className="bi bi-list text-gray-500"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
              SHOP BY CATEGORY
              <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" fill="currentColor" className="bi bi-chevron-down ml-auto" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708" />
              </svg>
            </span>
            <span className="text-[13px] cursor-pointer">Home</span>
            <span className="text-[13px] cursor-pointer">All Products</span>
            <span className="text-[13px] cursor-pointer">Promotions</span>
            <span className="text-[13px] cursor-pointer">Category</span>
            <span className="text-[13px] cursor-pointer">Contact US</span>
            <span className="text-[13px] cursor-pointer">About US</span>

          </div>
        </div>
      </div>

    </>
  );
};

export default NavBar;

const ResponsivSideBar = ({ setModalShow, modalShow,setShowAddCard,showAddCard }: any) => {
  return (
    <div>
      <div className="min-lg:hidden lg:flex justify-between items-center">
        <div onClick={() => setModalShow(true)} className="cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="30"
            height="30"
            fill="currentColor"
            className="bi bi-list text-white"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
            />
          </svg>
        </div>
        <div>
          <img src={Logo} className="w-[10rem] sm:w-[8rem]" alt="" />
        </div>
        <div className="flex gap-3 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" fill="currentColor" className="text-white bi bi-heart" viewBox="0 0 16 16">
            <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
          </svg>
          <svg
          onClick={() => setShowAddCard(true)}
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="23"
            fill="currentColor"
            className="bi text-white bi-cart3 cursor-pointer"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
        </div>
      </div>
      <div className="min-lg:hidden bg-red-500">
        <div className="relative lg:block min-lg:hidden">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-search cursor-pointer absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"
            viewBox="0 0 16 16"
          >
            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
          <input
            type="text"
            placeholder="Find Your Products..."
            className="w-full py-[10px] pl-[35px] pr-10 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500"
          />
          <div className="cursor-pointer absolute right-[0.3rem] bg-[#7EACB5] p-[0.6rem] text-[13px] px-3 rounded-sm text-white top-1/2 transform -translate-y-1/2">
            SEARCH
          </div>
        </div>
      </div>
      <>
        <Offcanvas
          show={modalShow}
          onHide={() => setModalShow(false)}
          className="max-w-[90%]"
        >
          <div className="offcanvas-header flex justify-between border-b py-[10px]">
            <img src={Logo} alt="logo" className="w-[110px]" />
            <button
              type="button"
              className="text-gray-400"
              onClick={() => setModalShow(false)}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
          <Offcanvas.Body>
            <div className="flex flex-col justify-start">
              <span className="p-2 border-b border-slate-50 text-lg text-gray-500 hover:bg-slate-200 rounded-md transition-all duration-300 cursor-pointer">Option</span>
              <span className="p-2 border-b border-slate-50 text-lg text-gray-500 hover:bg-slate-200 rounded-md transition-all duration-300 cursor-pointer">All Product</span>
              <span className="p-2 border-b border-slate-50 text-lg text-gray-500 hover:bg-slate-200 rounded-md transition-all duration-300 cursor-pointer">Promotion</span>
              <span className="p-2 border-b border-slate-50 text-lg text-gray-500 hover:bg-slate-200 rounded-md transition-all duration-300 cursor-pointer">Category</span>
              <span className="p-2 border-b border-slate-50 text-lg text-gray-500 hover:bg-slate-200 rounded-md transition-all duration-300 cursor-pointer">Blog</span>
            </div>
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
          <Offcanvas
            show={showAddCard}
            onHide={() => setShowAddCard(false)}
            placement="end"
            name="end"
            className="max-w-[90%]"
          >
            <div className="text-lg border-b w-full p-4 font-bold flex gap-3 items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>
              Your Shopping Card
              {/* <span
                className="text-sm text-red-500"
                onClick={() => setShowAddCard(false)}
              >
                X
              </span> */}
              <button
                type="button"
                className="text-gray-400 ml-auto"
                onClick={() => setShowAddCard(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="25"
                  height="25"
                  fill="currentColor"
                  className="bi bi-x"
                  viewBox="0 0 16 16"
                >
                  <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                </svg>
              </button>
            </div>

            <Offcanvas.Body>
              <div>
                {[].length === 0 ? (
                  <div className="w-full h-[20rem] flex flex-col items-center gap-3 justify-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="40"
                      height="40"
                      fill="currentColor"
                      className="bi bi-cart-x"
                      viewBox="0 0 16 16"
                    >
                      <path d="M7.354 5.646a.5.5 0 1 0-.708.708L7.793 7.5 6.646 8.646a.5.5 0 1 0 .708.708L8.5 8.207l1.146 1.147a.5.5 0 0 0 .708-.708L9.207 7.5l1.147-1.146a.5.5 0 0 0-.708-.708L8.5 6.793z" />
                      <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1zm3.915 10L3.102 4h10.796l-1.313 7zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0m7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
                    </svg>
                    <h1>No Card Available Now</h1>
                  </div>
                ) : (
                  [].map(() => <div>a</div>)
                )}
              </div>
            </Offcanvas.Body>
          </Offcanvas>

        </>
    </div>

  )
}