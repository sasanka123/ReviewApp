import PropTypes from "prop-types";

function Header({ text }) {
  const headerStyle = { backgroundColor: "rgba(0,0,0,0.4)", color: "#ff6a95" };
  return (
    <header style={headerStyle}>
      <div className="container">
        <h2>{text}</h2>
      </div>
    </header>
  );
}
Header.defaultProps = {
  text: "User Feedback App",
};
Header.propTypes = {
  text: PropTypes.string.isRequired,
};
export default Header;
