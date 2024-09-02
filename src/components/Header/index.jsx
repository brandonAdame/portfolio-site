import Typewriter from "typewriter-effect";
import darkmode from "../../assets/darkmode.svg";

const Header = (props) => {
  const { isDark, setIsDark } = props;

  return (
    <div className="flex justify-center text-4xl">
      <div className="flex justify-between w-full max-w-5xl p-7">
        <div className="text-blue-600/80 flex dark:text-white">
          Brandon Adame
        </div>
        <div className="flex items-center">
          <button className="mr-5" onClick={() => setIsDark(!isDark)}>
            <img src={darkmode} alt="" />
          </button>

          <button className="bg-blue-600/80 text-white text-2xl px-4 rounded-lg">
            Resume
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
