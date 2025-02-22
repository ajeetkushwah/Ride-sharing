const LocationSearchPanel = (props) => {
  console.log(props);
  // sample Array for location
  const locations = [
    "  24B, Near Kapoor cafe, Sheriyans Coding School,Bhopal",
    "  22B, Near Malhotra  cafe, Sheriyans Coding School,Bhopal",
    "20C, Near Sharma cafe, Sheriyans Coding School,Bhopal",
    "  18A, Near Sinmghania cafe, Sheriyans Coding School,Bhopal",
  ];

  return (
    <div>
      {/* This is a sample Data */}
      {locations.map((elem, index) => {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="flex gap-4 border-2 p-3 border-white active:border-black rounded-xl items-center my-2 justify-start "
          >
            <h2 className="bg-[#eee] h-10 flex items-center justify-center w-16 rounded-full ">
              <i className="ri-map-pin-line "></i>
            </h2>
            <h4 className="font-medium">{elem.trim()}</h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
