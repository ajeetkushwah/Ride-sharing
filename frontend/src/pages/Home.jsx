import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef = useRef(null);

  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState(false);

  const submitHandler = (e) => {
    e.preventDefault();
  };
  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, {
          height: "70%",
          padding: 24,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
        });
      } else {
        gsap.to(panelRef.current, {
          height: "0%",
          padding: 0,
        });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(
    function () {
      if (vehiclePanel) {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehiclePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehiclePanel]
  );

  useGSAP(
    function () {
      if (confirmRidePanel) {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(confirmRidePanelRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [confirmRidePanel]
  );

  useGSAP(
    function () {
      if (vehicleFound) {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(vehicleFoundRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [vehicleFound]
  );

  useGSAP(
    function () {
      if (waitingForDriver) {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(0)",
        });
      } else {
        gsap.to(waitingForDriverRef.current, {
          transform: "translateY(100%)",
        });
      }
    },
    [waitingForDriver]
  );
  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5"
        src="data:image/jpeg;base64,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"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* Image for temporary  */}
        <img
          className="h-full w-full object-cover"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className=" flex flex-col justify-end h-screen absolute top-0 w-full ">
        <div className="h-[30%] bg-white p-5 relative">
          <h5
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute opacity-0 top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-line"></i>
          </h5>
          <h4 className="text-3xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[50%] left-10 bg-gray-900 rounded-full"></div>
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={pickup}
              onChange={(e) => {
                setPickup(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a pick-up location"
            />
            <input
              onClick={() => {
                setPanelOpen(true);
              }}
              value={destination}
              onChange={(e) => {
                setDestination(e.target.value);
              }}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="  bg-white h-[0]">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanel={setVehiclePanel}
          />
        </div>
      </div>
      <div
        ref={vehiclePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-10 pt-12"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanel={setVehiclePanel}
        />
      </div>
      <div
        ref={confirmRidePanelRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>
      <div
        ref={vehicleFoundRef}
        className="fixed w-full z-10 bottom-0 translate-y-full  bg-white px-3 py-6 pt-12"
      >
        <LookingForDriver setVehicleFound={setVehicleFound} />
      </div>
      <div
        ref={waitingForDriverRef}
        className="fixed w-full z-10 bottom-0   bg-white px-3 py-6 pt-12"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
