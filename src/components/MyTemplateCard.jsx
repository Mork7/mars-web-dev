import { Card } from "flowbite-react";
import PropTypes from "prop-types";

function MyTemplateCard({ title, description, imgSrc, href }) {
  return (
    <Card className="transform transition-transform duration-500 ease-in-out hover:-translate-y-3 sm:shadow-gray-500 sm:shadow-xl hover:shadow-xl hover:shadow-gray-200 max-w-sm bg-black border-zinc-700 border-2" imgAlt={title} imgSrc={imgSrc}>
      <a href={href} className="text-2xl font-bold tracking-tight text-red-500 hover:cursor-pointer hover:underline">
        {title}
      </a>
      <p className="font-normal text-gray-400">
        {description}
      </p>
    </Card>
  );
}

MyTemplateCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

export default MyTemplateCard;
