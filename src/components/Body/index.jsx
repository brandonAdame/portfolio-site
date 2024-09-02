import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPython,
  faJava,
  faJs,
  faReact,
  faAws,
} from "@fortawesome/free-brands-svg-icons";

const Body = () => {
  return (
    <div className="flex flex-col items-center mt-14 mb-14">
      <div className="text-5xl text-blue-300">
        <Typewriter
          options={{
            strings: ["Frontend Engineer", "Entrepreneur", "Backend Engineer"],
            autoStart: true,
            loop: true,
          }}
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 overflow-clipped">
        <div className="border rounded-lg w-full max-w-72 mt-5 p-4 bg-white drop-shadow-xl">
          <div className="font-bold mb-2">whoami</div>
          <div>
            <p className="leading-relaxed">
              Hello! my name is Brandon. I’m a freelance web developer and
              backend engineer with 5+ years of experience. I have extensive
              experience developing backend solutions but I love working on
              frontend projects!
            </p>
          </div>
        </div>
        <div className="border rounded-lg w-full max-w-72 mt-5 p-4 bg-white drop-shadow-xl">
          <div className="font-bold mb-2">experience</div>
          <div>
            <ul>
              <li>Senior Fullstack Engineer</li>
              <li>Senior Software Engineer</li>
            </ul>
          </div>
        </div>
        <div className="border rounded-lg w-full max-w-72 mt-5 p-4 bg-white drop-shadow-xl">
          <div className="font-bold mb-2">familiar technologies</div>
          <div className="flex justify-center">
            <div className="grid grid-cols-3 gap-7 text-4xl">
              <div>
                <FontAwesomeIcon icon={faPython} />
              </div>
              <div>
                <FontAwesomeIcon icon={faJava} />
              </div>
              <div>
                <FontAwesomeIcon icon={faJs} />
              </div>
              <div>
                <FontAwesomeIcon icon={faReact} />
              </div>
              <div>
                <FontAwesomeIcon icon={faAws} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
