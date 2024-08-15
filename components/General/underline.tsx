import PropTypes from "prop-types";
function Underline({ style }: { style: string }) {
  return (
    <span
      className={`absolute bottom-0 left-1/2 w-1/2 rounded-full bg-primary transform origin-center -translate-x-1/2 transition-transform duration-300 scale-x-100 ${style}`}
    ></span>
  );
}
Underline.propTypes = {
  style: PropTypes.string.isRequired,
};

export { Underline };
