import { faCode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="flex justify-center items-center w-full h-28 bg-blue-400">
      <FontAwesomeIcon icon={faCode}  className="pr-2"/>
      <p>by Brandon Adame</p>
    </div>
  );
};

export default Footer;
