import { Link } from "react-router-dom";
import RynoImage from "../../assets/Ryno.jpg";

function Landing() {
  return (
    <>
      <div className="bg-[#5a0404] flex flex-col md:flex-row md:justify-center gap-4 md:gap-4 lg:gap-10 px-4 md:px-6 lg:px-10 py-6 md:py-8 max-w-full overflow-x-hidden">
        <div className="bg-[#121212] w-full md:w-1/2 lg:w-1/3 rounded-[30px] shadow-[0_2px_4px_white] self-center p-4 md:p-6">
          <div className="text-center">
            <h1 className="text-white text-2xl lg:text-3xl mb-4 ">
              Welcome to Ryno's Portfolio
            </h1>
            <img
              src={RynoImage}
              alt="Icon"
              className="w-48 md:w-64 lg:w-72 mx-auto rounded-[20px] shadow-[0_2px_4px_white] mt-4 mb-6"
            />
          </div>
        </div>

        <div className="bg-[#121212] w-full md:w-1/2 lg:w-2/3 rounded-[30px] shadow-[0_2px_4px_white] self-center p-4 md:p-6">
          <h1 className="text-white text-2xl text-center mb-6">Bio</h1>
          <div className="bg-[#f8ede3] rounded-lg overflow-hidden">
            <div className="text-center p-2 text-shadow-sm/40">
              <span className="text-[#8a0000] font-bold underline block mb-1 text-xl">
                Full Name:
              </span>
              <p className="text-lg">Ryno Erasmus</p>
            </div>

            <div className="text-center p-2 text-shadow-sm/40">
              <span className="text-[#8a0000] font-bold underline block mb-1 text-xl">
                Contact Number:
              </span>
              <p className="text-lg">079 799 6040</p>
            </div>

            <div className="text-center p-2 text-shadow-sm/40">
              <span className="text-[#8a0000] font-bold underline block mb-1 text-xl">
                Email:
              </span>
              <p className="text-sm sm:text-base lg:text-lg wrap-break-word">
                rynoerasmus1306@gmail.com
              </p>
            </div>

            <div className="text-center p-2 text-shadow-sm/40">
              <span className="text-[#8a0000] font-bold underline block mb-1 text-xl">
                Nationality:
              </span>
              <p className="text-lg">South African</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 md:gap-2 justify-center items-center mt-10">
            <a
              href={`${import.meta.env.BASE_URL}Ryno_CV.pdf`}
              target="_blank"
              className="min-w-26 px-5 h-14 text-center bg-[#FF0000] text-shadow-sm/40 text-white rounded-[20px] flex items-center justify-center hover:bg-fuchsia-600"
            >
              Download CV
            </a>
            <Link
              to={"/contact"}
              className="min-w-26 px-5 h-14 text-center bg-[#FF0000] text-shadow-sm/40 text-white rounded-[20px] flex items-center justify-center hover:bg-green-600"
            >
              Hire Me
            </Link>
            <a
              href="https://www.linkedin.com/in/ryno-erasmus-044527268/"
              className="min-w-26 px-5 h-14 text-center bg-[#FF0000] text-shadow-sm/40 text-white rounded-[20px] flex items-center justify-center hover:bg-fuchsia-600"
              target="_blank"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Landing;
