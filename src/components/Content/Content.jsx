import PropTypes from "prop-types";

const Content = ({ header, body }) => {
  return (
    <div className="w-full flex flex-col h-dvh">
      <div className="w-full h-56">{header}</div>
      <div className="p-2 overflow-y-auto">{body}</div>
    </div>
  );
};

Content.propTypes = {
  header: PropTypes.node,
  body: PropTypes.node,
};

export default Content;
