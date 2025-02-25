import { useState } from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {
  const [otp, setOtp] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <div className="h-screen">
      <h5
        className="p-1 text-center w-[93%] absolute top-0  "
        onClick={() => {
          props.setRidePopupPanel(false);
        }}
      >
        <i className="text-xl text-gray-200  ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confirm this ride to Start
      </h3>
      <div className="flex items-center justify-between p-3 border-2 border-yellow-400  rounded-lg mt-3 ">
        <div className="flex items-center gap-3 ">
          <img
            className="h-10 rounded-full object-cover w-10"
            src="  data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQA1wMBIgACEQEDEQH/xAAbAAACAgMBAAAAAAAAAAAAAAAAAQIDBAUGB//EADcQAAEDAgQDBgQEBgMAAAAAAAEAAgMEEQUSITEGQVETImFxgZEUQqGxIzJSwQckM2JygsLR8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACERAQEBAAMAAgEFAAAAAAAAAAABAgMRMRIhBBMiMjNB/9oADAMBAAIRAxEAPwDHAUrJAWUgF8h9MwFIBIBSAQMbqQCLJgaKoYTQApAIgTsiyaBJ2spW8Vz2P8RDD3mmo2CapBBcDs0eJWs5ur1Et69b9C448WVdQctLSxRuLb5nPz/9LVV/E2KXdFDUandzQAB4BdP0NMXlzHo6F5nTcQYxRsZPLVOmvqWSAEDwXa8P45HizCx0RhqGjvMJuPMFTXHrK53NNwBdFkwghc20Uk0WUBZMBMBSAVAApAIsmEEgFMKICmERIIQE1RoAEwmEwsNgKYCQCmEAApBFlIKp2QCkEBNEFkwEBS5KjV8SVj6HCZZYnBr3WY1x5Em1153h1DU4tU1FDA1zpnkEEHb/ACcut44neRQULHZWzvc95HRtrD3P0XXcK4VBQYcwxxNbJJq91u87zK9GL8M9uWs/PXTlsN/h32cLWVlXlNu8IQRf1WyPA2Gxkuu9xHJdo4Oto2yxnhzszSSDyS61WpjEed4pwRC2N5gnkbf5XG4Whw99Tw3jEZmc74d7g2Q7jL19N16hVRuyEZfouZxzD/iqWaLICSNNFmcl8rWuLNnc9dCwhzA5tiCLgjmgrU8KTyS4LC2b+pCTE702+lluFys6q/4hZMDVSQoAJhATQMJhJMIJhSCiFJETCEgUKjSAKQCQUgsNpNCkkFKyBgJ2QApAKskFMBFkKgsmiydkHN43R/G8UYRCTYOZJr5Ft10ON4lUYfEymwuK8oG1r2CwMRpZ24/gtSInZA+SMvGoFwDr7Lo63DY66IiV0gFvkcW39l2nkSf65Olx3iB+JRxVtRDCy4/CDWm/nuQuzqprU7ZbAX5BaSl4Qw2GtfUwRZS85nBzidb30vtr0W3ro2iBt7kXtcJb9r1Hm+KVlVilZNU0+IGnpYnFvaSOyNBHIczseSyuHnYh8W34qoZU07tWyNNwfYLOdgcTHVVI27qeo78kZOl9dQff6rY4fhUNDLBJCwjI3Ja+hHiFe4nVVYTC2CbEWM2+LOn+rVsLLXUT5IcTxCOaNzWyVGZkhsGm7Wiw6nQrZrlr0nhWQhCyoCaV0XQSTUApBBMJqF08yCYQkCkiNWFIJAKQWW0gpBIJhBIKQSFlKyrITsiyYVAhNCLG0mdDFQU8MMbG5SHuOwF3b+K2MNstuQC5nE6kR4HVOJtLDHmZr+YAg2+i2lBXMnjjOYWkbdhvuF1lZ0yalx7fs4RoBmcb29FpK7FaptI4mjpy9jSTGJQ6wB0zEbeanUvrqmrqmiKVtK05QYyGl22t+m618mHx09LJFHSAmZuVxklJNvNWRrMtYGGzVVRjXbCB0dMadndc8OAfrfKemoXXU8YdvbRcLFTYhhL2Mw+CeRma5DyHNA3sD1XYDEYoqZjiQx7oS+zuVlZ6zu/XUctV1c1fxLWUcHdbTTQuzB2wa65uOW5XQ7brV4A1slK6sMcbXTvc7M3dwLiQXHrrtyWzXLd+27ZZJAhCFhlEoCZSJCB3RmUSVElRUy5AcqsyA5DpkByFRmQh0pAUgEgEwipBOyQUkDG6kEgpAKsmAmEk0AhCFRXPEyeJ8UrQ5jwWuHgVzuDvnwvEYsOrnZWteRTTk6OHJvmumV8+GwYrhvYTtuLnK4btPIhbxfvpK28EhexuXW3Na7GKOeZ7Hx1Do2374ABvouErsQ4g4We5jy+opM3dkLVh1P8AEGqmYAGkHfZdfhb4x+pJ69Hp2u7NrHuDsvMjdcVxFNPU447D4JDLJKA12UaRx8/uVhUHEmM4wBSUbCztHDPMB+Rt912jMIpsOgbJEC6aQgSSuNy5S/thL2hBEyCJkcYs1gsArbI2SXB0CRTKjfVQCiVJRcosRJUSUFVuKKC5Bd4qu6g5yC3P4oWPmKEGYFIKIU7IGE0gpAIGE0k1WejTSQ5zWNLnEBo1JJ2QNJxDWlxIDRqSdAAuaxbjTD6MuipP5qYc26Rt8zz9FxeMY7XYsbVNS4RcoWDKz25+q744da9ctcsz49BixWTFsSdh+BPjcIxmnqntzNYL2s0cz9PNdhRs7OHITe2lyvIOAcWjwvGmCdwZBUt7GRxNg08j7/deysGTSwW7j43pM7+U7UT0kcwLJmtc0jouVruDKE1Pax5WgnVuUWXXym43WrdWv+KbD2V2c33TxpdT0UFJSxsiAvsQBa6yqqATURaXFh3Dm7hUtu6cH5RoFVxLjFNg+GOkmP4jm/hx8yVLO08cXBxfT09TNSYk0h0Mro+3ib3XAHcjcel10dNUQ1UYkppWSs/Uw3Xjs7nSSkvvcklxHUq+kq5aOQSUk80TxzZpfzHMea3rgnX05znsr19C4rDONyC1mJw5m85ohr6t5+i62ir6Svj7SjnZK3+06+o5Lza49Z9ds7zrxkJFMqLiubpFbhqqnK1xVTzoiqnuVLipPVZUaAKErpIfTYBTCiFIKspKSipBAwmkuU4+xN9LSxUNO9zZajvPLTYhg5ep+y1jPyvUZ3r4ztdxFxbTYcH09C5tRWbG2rI/M8z4LhcQxXE8RP8AOVUsrf0XytH+o0WG5hDb2t4DkoWt1Xvxx5x48OuTWjII0ISQgLo5rG5mk3a4jyXY8Ncd1eFQtpa1hq6dv5butJGOlzuPNcVc9T7pW53JKlkvqy2ePYH8e4FPAbS1MUh+R8Dvu24WI7ivA2EPkrpSd8scDyT62t9V5XmcPnPugvd+orH6WXSc2pHo1f8AxEiaHMwqlebbSVFhb0BK4zFcXrMUqTUVc755HaE7Bo6AcgtVfzKYv5LczIzd2+rrOGtjr1SueaG7bpOF+S0wl3uhsrKWaSnnbLE58b27OabELG52191NjC5waLkk2Aup136T68eiYLxVHO1sOIkRybCYDuu8+i6UEOFxqDsV5JTG7ZIyLuaLW630XpHDkzpMPbE9xL4dNebbafuvJz8Uk+Uevh5bf21sSqHrIcqHryvSx3qlxV0hWM8qNC6FXdCL03AUlEKQRkwpBRCkFUPWy8x4wrRU47UOHeZEREPTf6kr0avqBR0M9U4i0MZfrzI2/ZePz5n5nPeHPcSXG+56r1fjZ+7Xm/I19SLHluVzcg2vuqiLtB8EMdmN+rVeGDIO8B5r2PIxxbm26RLeTPqrXssdCD5KuyCCkMtvyi/VSDL/ADNQ4W0QQNuTQo2Ura7geaeUfqb7oF3f0J6HZtkihovzA80EgbFW3aR+QKrLb52q6IXQQDbu0asuhjDZJJnAFsTCfXkpwwA21GvisiaH4fBqo3Gdzmj0ugxMHe11Q5z2C7hf1uP/AH0XYcKVX8w0X7r4Izb/ACzW+wXHYYRFTTykatYQPNdDw+9rK9zWuHcZHGPRpP7qanebGs3rUru36aLHeQrHP0v1WO9y+VX0p9qZDqsZ5HRXSnxCxXusstwFyFVm1QiuhQhNVgJhJSuqjneOqnsMDMYIHbytZ6DU/ZebPO56Ltf4i1F5KKlvs10p8NgP+S4txLdeey+hwTrDw8972ra61h0WWw3YFiOe/cFZMLrxDXVdnFMhVEaq1ryNGmyHPcdygpQmQlneBodEESgHRDnuOhSAQNJWhztrqDyTuUEeayINSqW6HQ2WXA5+bdBsaNt+V1k1sTZ6aena4B72aNvqXN1FvZVUh0zc1RjlZ2LKaRhAe2S9wNTYIrWRyhtM1rjYf1H+XIfZbnhwyGrOcagFzz/e7l7ALRQzukc+WQkgHO7bU8guhwKMsIDj33NMsnmdB9ArEdwyS8LD4KqRyhFJaFoHRVSyL5XNOuSx9TiveZUJXLGe5OV6x3yEbFc3VLOhUGQoVR2SLJoRgkBCFUed8a/icQy5tcsTGjwFr/uVzr2gMdqU0L6XH/GPncn8qxzsrY25diU0LownJ3dkmHNuhCC0xt8VRMA12iEIIM1NlcI2hJCBKQaCEkIJdmPFXwDVCEGwjuGCxK0+PXMsdydG6e6EIK6YaU7eTySfey67DWDtap2tw8NHgALBCFYOhbpTMWM8oQvmfk/2vpfj/wBbHkCxZNDohC4uyoC7tUIQtD//2Q=="
            alt=""
          />
          <h2 className="text-lg font-medium">Ajeet Singh</h2>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
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
        <div className="mt-6 w-full">
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <input
              value={otp}
              onChange={(e) => setOtp(e.target.value)}
              className="bg-[#eee] px-6 py-4 font-mono  text-lg rounded-lg w-full mt-3 "
              type="text"
              placeholder="Enter OTP"
            />
            <Link
              to={"/captain-riding"}
              className="w-full text-lg flex justify-center mt-5 bg-green-500 text-white font-semibold rounded-lg p-2"
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setConfirmRidePopupPanel(false);
                props.setRidePopupPanel(false);
              }}
              className="w-full text-lg mt-4 bg-red-500  text-white font-semibold rounded-lg p-2"
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
