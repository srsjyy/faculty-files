import "boxicons/css/boxicons.min.css";

// MODIFICATION: The component now accepts an optional `className` for custom styling.
const Footer = ({
  textColor = "text-white",
  iconColor = "text-white",
  spanColor,
  className = "", // ADDITION: It accepts an optional className prop for custom styles.
}) => {
  const handleEmailClick = () => {
    window.location.href = "mailto:cvsubacoor.itcs@cvsu.edu.ph";
  };

  const handleMapClick = () => {
    window.open(
      "https://www.google.com/maps/place/Cavite+State+University+-+Bacoor+Campus/@14.4127705,120.9813495,17z/data=!3m1!4b1!4m6!3m5!1s0x3397d22f4810979f:0xaf0dae4457b7d498!8m2!3d14.4127705!4d120.9813495!16s%2Fg%2F11cjm9nmwv?entry=ttu&g_ep=EgoyMDI1MDcyNy4wIKXMDSoASAFQAw%3D%3D",
      "_blank"
    );
  };

  const handleFacebookClick = () => {
    window.open("https://www.facebook.com/cvsubacoordcs1819", "_blank");
  };

  return (
    // MODIFICATION: The default classes for layout (`flex`, `py-6`, `border-t`) are now permanently here.
    // The parent's `className` is ADDED to the end to allow for customization like background color.
    <footer
      className={`flex flex-col items-center justify-center text-sm mt-1 py-6 border-t border-gray-700 font-funnel ${className}`}
    >
      <p className={`mb-3 ${textColor}`}>
        © {new Date().getFullYear()}{" "}
        <span className={spanColor}>
          Department of Computer Studies CvSU-Bacoor
        </span>
        . All rights reserved.
      </p>
      <div className="flex gap-4">
        <i
          className={`bx bx-envelope text-xl cursor-pointer hover:scale-110 transition ${iconColor}`}
          title="Email us"
          onClick={handleEmailClick}
        ></i>
        <i
          className={`bx bx-map text-xl cursor-pointer hover:scale-110 transition ${iconColor}`}
          title="Visit us"
          onClick={handleMapClick}
        ></i>
        <i
          className={`bx bxl-facebook text-xl cursor-pointer hover:scale-110 transition ${iconColor}`}
          title="Facebook"
          onClick={handleFacebookClick}
        ></i>
      </div>
    </footer>
  );
};

export default Footer;
