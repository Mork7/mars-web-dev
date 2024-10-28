import { Card } from "flowbite-react";
import PropTypes from "prop-types";

function MyTemplateCard({ title, description, imgSrc }) {
  return (
    <Card className="max-w-sm" imgAlt={title} imgSrc={imgSrc}>
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        {description}
      </p>
    </Card>
  );
}

export default MyTemplateCard;

MyTemplateCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  imgSrc: PropTypes.string.isRequired,
};
