import PropTypes from "prop-types";

const LocationSearchPanel = (props) => {
  const location = [
    "123 Main Street, Downtown, Cityville.",
    "124 Main Street, Downtown, Cityville.",
    "125 Main Street, Downtown, Cityville.",
    "126 Main Street, Downtown, Cityville.",
  ];

  return (
    <div>
      {location.map(function (address, index) {
        return (
          <div
            onClick={() => {
              props.setVehiclePanel(true);
              props.setPanelOpen(false);
            }}
            key={index}
            className="location-item border-2 p-3 rounded-xl border-gray-100 active:border-black flex items-center gap-3 mb-2 justify-start"
          >
            <h3 className="location-icon bg-gray-100 text-2xl font-extrabold h-10 w-12 flex items-center justify-center rounded-full">{`>`}</h3>
            <h4 className="location-address font-medium text-lg">{address}</h4>
          </div>
        );
      })}
    </div>
  );
};

LocationSearchPanel.propTypes = {
  setVehiclePanel: PropTypes.func.isRequired,
  setPanelOpen: PropTypes.func.isRequired,
};

export default LocationSearchPanel;
