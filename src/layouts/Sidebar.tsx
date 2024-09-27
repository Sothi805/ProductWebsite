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
    <div className=" w-full bg-[#7EACB5]">
      <div className="max-w-[1000px] bg-[#7EACB5] mx-auto lg:px-[30px] md:px-[15px]">
        <div className=" flex w-full justify-between items-center pt-2 pb-2 flex-wrap">
          <div className=" w-[65%] sm:w-auto flex items-center justify-between">
            <img src={Logo} alt="logo" className="w-36 md:w-32" />
            <div className="relative md:hidden">
              <input
                type="text"
                placeholder="Find Your Products..."
                className="w-80 py-2 pl-3 pr-10 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500"
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-search cursor-pointer absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                viewBox="0 0 16 16"
              >
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
              </svg>
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
          <div className="flex min-sm:gap-5 sm:gap-3 items-center">
            <button
              onClick={() => setShowAddCard(true)}
              className="relative flex items-center justify-center px-[15px] py-[12px] sm:px-[12px] sm:py-[10px] bg-white rounded-md shadow-md hover:bg-gray-100 focus:outline-none"
            >
              <span className="absolute top-1 right-0 flex items-center justify-center w-4 h-4 text-xs font-semibold text-white bg-red-500 rounded-full">
                4
              </span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-cart3"
                viewBox="0 0 16 16"
              >
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l.84 4.479 9.144-.459L13.89 4zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
              </svg>{" "}
            </button>

            <button
              className="bg-red-500 border border-red-500 rounded-md shadow-md box-border text-white cursor-pointer inline-block font-sans text-base outline-none min-sm:px-4 min-sm:py-[7px] sm:px-[7px] sm:py-[5px] sm:text-[14px] text-center select-none transition-opacity duration-200 hover:bg-transparent"
              onClick={() => setShowSignIn(true)}
            >
              Log In
            </button>

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

            <SignInModal show={showSingIn} setShow={setShowSignIn} />
          </div>
        </div>
      </div>
      <div className="max-w-[1350px] mx-auto bg-white lg:px-4 shadow-lg sm:hidden">
        <div className="max-w-[1000px] mx-auto flex justify-between items-center">
          <div className="h-[50px] flex gap-3 items-center ">
            <span className="cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="25"
                height="25"
                fill="currentColor"
                className="bi bi-list"
                viewBox="0 0 16 16"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
                />
              </svg>
            </span>
            <span className="text-[14.5px] cursor-pointer">Options</span>
            <span className="text-[14.5px] cursor-pointer">All Products</span>
            <span className="text-[14.5px] cursor-pointer">Promotions</span>
            <span className="text-[14.5px] cursor-pointer">Category</span>
            <span className="text-[14.5px] cursor-pointer">Blog</span>
          </div>
          <div className="flex border h-[30px] px-3 rounded-[6px] cursor-pointer text-[13.5px] gap-3 items-center">
            <span>View Favorites</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143q.09.083.176.171a3 3 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15" />
            </svg>
          </div>
        </div>
      </div>

      <>
        <Offcanvas
          show={modalShow}
          onHide={() => setModalShow(false)}
          // className="max-w-[90%]"
        >
          <div className="offcanvas-header flex justify-between border-b py-[10px]">
            <img src={Logo} alt="logo" className="w-[100px]" />
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
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
      <>
        <Offcanvas
          show={showAddCard}
          onHide={() => setShowAddCard(false)}
          placement="end"
          name="end"
          // className="max-w-[90%]"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title>Offcanvas</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            Some text as placeholder. In real life you can have the elements you
            have chosen. Like, text, images, lists, etc.
          </Offcanvas.Body>
        </Offcanvas>
      </>
    </div>
  );
};

export default NavBar;
