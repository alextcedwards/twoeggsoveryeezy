import { useEffect } from "react";
import { connect } from "react-redux";
import { fetchData } from "../store";

import Kanye from "../images/Kanye.jpg";

const Quote = (props) => {
  console.log(props);
  const { fetchData } = props;

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleClick = () => {
    fetchData();
  };

  return (
    <div className="main-container">
      <img src={Kanye} alt="" />

      <div className="textcontainer">
        <div className="box sb1">
          "{props.kanye}"<br />
          <a href="/" class="fa fa-twitter"> </a>
        </div>

        <div>
          <button
            className="small blue button"
            onClick={(e) => {
              handleClick();
            }}
          >
            Talk to the Yeezy
          </button>
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
    kanye: state.kanye,
    error: state.error,
  };
};

export default connect(mapStateToProps, { fetchData })(Quote);
