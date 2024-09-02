import { MoonIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

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
            <MoonIcon
              className={clsx(
                "size-6",
                !isDark ? " text-blue-gray-300-500" : "text-white"
              )}
            />
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
