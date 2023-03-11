import React from "react";
import bg from "../../Images/aboutImgs/BG.png";
import img from "../../Images/aboutImgs/IMG.png";
import aboutImg from "../../Images/aboutImgs/1.png";
import qualities from "../../Images/aboutImgs/Qualities.png";
import tree from "../../Images/aboutImgs/Tree.png";
import Newsletter from "../../Components/newsletter/newsletter";
import Footer from "../../Components/footer/footer";
import Nav from "../../Components/nav/nav";
const about = () => {
  return (
    <>
      {/* <Nav /> */}
      <div
        style={{ backgroundImage: `url(${bg})` }}
        className="flex flex-col-reverse sm:flex-row gap-10 sm:gap-0 lg:gap-20 xl:gap-40 bg-no-repeat w-full h-[750px] sm:h-[750px] bg-cover bg-center justify-end sm:justify-center items-center"
      >
        <div className="flex flex-col gap-4 md:self-start ml-5 sm:w-[426px] text-white sm:mb-28 md:mb-0  md:mt-40">
          <p>HOME/ABOUT US</p>
          <p className="md:text-[40px] md:leading-[60px] font-bold text-[20px] ">
            Great service,  Professional support
          </p>

          <p className="text-[15px] sm:text-[16px]">
            CoinBase is a platform for trading your bitcoin and giftcard at the
            best rate, why not give us a trial.
          </p>
        
        </div>
       
      <img src={img} alt=""className='w-auto  h-[250px] md:h-[300px] lg:h-[405px] mt-10 sm:mt-0  sm:mb-36' />

      </div>

      <div className="flex justify-center items-center flex-col">
        <p className="text-[18px] font-bold text-transparent w-[70%] lg:w-[30%] text-center bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text">
          “Morbi sagittis ultricies ex, a tempus lorem suscipit non. Donec
          semper leo ut lobortis condimentum. Orci varius natoque penatibus et
          magnis”
        </p>
        <img src="Line.png" className="my-4" alt="" />
        <p className="mb-10">Ramon Ridwan • CEO CoinBase</p>
        <div className="w-[80%] text-center h-[792px] gap-10  border border-solid border-pink-500 rounded-xl flex flex-col justify-center items-center">
          <img src={aboutImg} alt="" />

          <p className="flex items-center flex-col text-transparent font-bold text-[28px] bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text">
            About CoinBase{" "}
            <img src="Line.png" className="w-[50px] mt-3" alt="" />
          </p>

          <p className="w-[75%] md:w-1/2 ">
            CoinBase is an online site and a p2admin platform that allows users
            to buy, sell and/ or exchange digital and fiat assets safely. Owned
            and managed by CoinBase Business Services established and
            Incoperated in Nigeria.
          </p>
          <img src={qualities} alt="" className="w-[75%] md:w-auto " />
        </div>
      </div>
      <p className=" flex justify-center items-center flex-col text-transparent  text-center bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text mt-10 ml-[3.7%]">
        Our history <img src="Line.png" className="w-[50px] mt-3" alt="" />
      </p>
      <div className="flex justify-center items-center mt-10 w-full ">
        <div className="flex flex-col gap-10 sm:gap-52 items-end w-[50%] mr-3 sm:mr-10 ">
          <div className="w-[70%] flex flex-col text-justify    ">
            <p className=" font-bold text-transparent self-end mr-2 bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text">
              May 2019
            </p>

            <p className="text-[12px] sm:text-[16px]">
              Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
              Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex
              rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec
              vestibulum nibh.uspendisse
            </p>
          </div>
          <div className="w-[70%] flex flex-col text-justify  ">
            <p className="font-bold text-transparent self-end mr-2 bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text">
              May 2019
            </p>
            <p className="text-[12px] sm:text-[16px]">
              Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
              Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex
              rutrum. Nulla facilisi. Cras ullamcorper pellentesque orci, nec
              vestibulum nibh.uspendisse
            </p>
          </div>
        </div>
        <img src={tree} alt="" className="h-auto " />
        <div className="w-[47%] ml-3 sm:ml-10">
          <p className=" text-transparent  font-bold bg-gradient-to-br from-pink-500 to-indigo-900 bg-clip-text">
            May 2019
          </p>
          <p className=" w-[70%] text-[12px] sm:text-[16px]">
            Ut enim mi, mattis at sollicitudin rhoncus, rhoncus eget sem.
            Curabitur aliquam tellus eu nisl suscipit, at vestibulum ex rutrum.
            Nulla facilisi. Cras ullamcorper pellentesque orci, nec vestibulum
            nibh.uspendisse
          </p>
        </div>
      </div>
      <div className="flex  flex-col   gap-5 ">
        <div className="flex flex-col items-center gap-4 ml-[3.7%] justify-center">

        <p className="text-transparent bg-gradient-to-br  from-pink-500 to-indigo-900 bg-clip-text  mt-5 ">Meet the team  <img src="Line.png" alt=""className="mt-2 m-auto  w-[50px] " /></p>
       
        <p className="w-[90%] sm:w-[55%] ">
          Meet the team that makes the process of this system fast and painless
          as possible to provide you with good result{" "}
        </p>
        </div>
        <div className="mt-5 flex justify-center items-center flex-col relative mb-20">
          <div className="flex justify-center gap-20 w-full mt-32 ">
            <div className="w-[30%] lg:w-[299px] bg-gray-400 z-10 h-[233px] rounded-lg "></div>
            <div className="w-[30%] lg:w-[299px] h-[233px] z-10 bg-gray-400 rounded-lg  "></div>
          </div>
          <div className="shadow-md absolute bg-gradient-to-b z-20 from-pink-500 to-indigo-900  top-[25.5%]  rounded-xl w-[50%] sm:w-[299px] h-[299px]   ">
            <span className="text-white flex justify-start ml-4 pb-1 h-full items-end">CEO <br />
Amanda Roth</span>
          </div>

          <div className="hidden sm:block w-[20%] z-5 top-[43%] absolute bg-gray-400 z-10  right-[5%] lg:right-[10%] 2xl:right-[20%]  h-[185px] rounded-lg "></div>
          <div className=" hidden sm:block w-[20%] h-[185px] z-5 top-[43%] absolute left-[5%] lg:left-[10%] 2xl:left-[20%]  bg-gray-400 rounded-lg  "></div>
        </div>
      </div>
      <Newsletter height={"fit"}></Newsletter>
      <Footer></Footer>
    </>
  );
};

export default about;
