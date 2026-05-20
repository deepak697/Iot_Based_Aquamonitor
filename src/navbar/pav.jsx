



const Pav = () => (
  <div>
    <div className="w3-top">
      <div className="w3-bar w3-black w3-card">
        <a
          className="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-left"
          href="javascript:void(0)" onClick='myFunction()'
          title="Toggle Navigation Menu"
        >
          <i className="fa fa-bars"></i>
        </a>
        <a href="#!" className="w3-bar-item w3-button w3-padding-large">
          <i className="fa fa-commerce">SMART AQUACULTURE</i>
        </a>
        <a href="#!" className="w3-bar-item w3-button w3-padding-large w3-hide-small">HOME</a>
        <div className="w3-dropdown-hover w3-hide-small">
          <button className="w3-padding-large w3-button" title="More">
            MORE <i className="fa fa-caret-down"></i>
          </button>
          <div className="w3-dropdown-content w3-bar-block w3-card-4">
            <a href="#!" className="w3-bar-item w3-button">Fish Feed</a>
            <a href="#!" className="w3-bar-item w3-button">Water Monitoring</a>
            <a href="#!" className="w3-bar-item w3-button">Alerts</a>
          </div>
        </div>
        <a href="#contact" className="w3-bar-item w3-button w3-padding-large w3-hide-small">SIGN IN</a>

      </div>
    </div>
  </div>
);

export default Pav;
