import { Card } from "flowbite-react";
import PropTypes from "prop-types";

function MyTemplateCard({ title, description, imgSrc, href }) {
  return (
    <Card className="max-w-sm bg-black border border-zinc-700" imgAlt={title} imgSrc={imgSrc}>
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
