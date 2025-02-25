import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const [finishRidePanel, setFinishRidePanel] = useState(false);
  const finishRidePanelRef = useRef(null);

  useGSAP(() => {
    if (finishRidePanel) {
      gsap.to(finishRidePanelRef.current, {
        y: 0,
      });
    } else {
      gsap.to(finishRidePanelRef.current, {
        y: "100%",
      });
    }
  }, [finishRidePanel]);

  return (
    <div className="h-screen relative">
      <div className="fixed p-6 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://freelogopng.com/images/all_img/1659761100uber-logo-png.png"
          alt=""
        />
        <Link
          to="/captain-home"
          className=" h-10 w-10 bg-white flex items-center justify-center rounded-full"
        >
          <i className=" text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>
      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div
        className="h-1/5  p-6 flex items-center justify-between  bg-yellow-300 relative "
        onClick={() => {
          setFinishRidePanel(true);
        }}
      >
        <h5
          className="p-1 text-center w-[93%] absolute top-0  "
          onClick={() => {}}
        >
          <i className="text-xl text-gray-200  ri-arrow-down-wide-fill"></i>
        </h5>
        <h4 className="text-xl font-semibold">4 Km away</h4>
        <button className=" bg-green-500 text-white font-semibold rounded-lg p-3 px-8">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRidePanelRef}
        className=" fixed w-full z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12"
      >
        {" "}
        <FinishRide setFinishRidePanel={setFinishRidePanel}/>
      </div>
    </div>
  );
};

export default CaptainRiding;
