const Riding = () => {
  return (
    <div className="h-full">
      <div className="h-1/2">
        <img
          className="w-16 absolute left-5 top-5"
          src="data:image/jpeg;base64,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"
          alt=""
        />
      </div>
      <div className="h-1/2">
        <div className="flex items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1712027307/assets/42/eb85c3-e2dc-4e95-a70d-22ee4f08015f/original/Screenshot-2024-04-01-at-9.08.07p.m..png"
          />
          <div className="text-right">
            <h2 className="text-lg font-medium">Ajeet</h2>
            <h4 className="text-xl font-semibold -mt-2 -mb-1 ">MP04 ZX 1212</h4>
            <p className="text-sm text-gray-600 ">Maruti Suzuki Alto</p>
          </div>
        </div>
        <div className="flex gap-2 justify-between flex-col items-center">
          <div className="w-full mt-5">
            <div className="flex items-center gap-5 p-3 border-b-2 ">
              <i className="text-lg  ri-map-pin-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1  text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3 border-b-2 ">
              <i className="ri-map-pin-user-fill"></i>
              <div>
                <h3 className="text-lg font-medium">562/11-A</h3>
                <p className="text-sm -mt-1  text-gray-600">
                  Kankariya Talab, Bhopal
                </p>
              </div>
            </div>
            <div className="flex items-center gap-5 p-3">
              <i className="ri-cash-line"></i>
              <div>
                <h3 className="text-lg font-medium">₹193.20</h3>
                <p className="text-sm -mt-1  text-gray-600">Cash Cash</p>
              </div>
            </div>
          </div>
        </div>
        <button>Make a Payment</button>
      </div>
    </div>
  );
};

export default Riding;
