import PropTypes from "prop-types";

function MySection({ title, children }) {
  return (
    <section id={`${title.toLowerCase()}`} className={title === 'Templates' ? 'bg-zinc-800 mt-8 pt-8' : ' ' + `mt-8 space-y-8 scroll-mt-24`}>
      <h2 className="text-4xl font-extrabold tracking-tight text-red-500">
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
