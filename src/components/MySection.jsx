import PropTypes from "prop-types";

function MySection({ title, h2Styles, children }) {
  return (
    <section
      id={`${title.toLowerCase()}`}
      aria-labelledby="services-heading"
      className="my-8"
    >
      <h2 id="services-heading" className={h2Styles}>
        {title}
      </h2>
      {children}
    </section>
  );
}

MySection.propTypes = {
  title: PropTypes.string.isRequired,
  h2Styles: PropTypes.string,
  children: PropTypes.node,
};

export default MySection;
