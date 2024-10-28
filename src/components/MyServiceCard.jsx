import { Card } from "flowbite-react";
import PropTypes from "prop-types";

function MyServiceCard({ title, description, price, inclusions, exclusions }) {
  return (
    <Card className="max-w-sm">
      <h3 className="text-2xl font-bold tracking-tight text-gray-900">
        {title}
      </h3>
      <p className="font-normal text-gray-700">{description}</p>
      <h4 className="text-lg font-semibold text-gray-900">Included</h4>
      <ul className="list-disc list-inside text-gray-700">
        {inclusions &&
          inclusions.map((inclusion, index) => (
            <li key={index} className="text-green-600 font-semibold">{inclusion}</li>
          ))}
      </ul>

      {exclusions && (
        <h4 className="text-lg font-semibold text-gray-900">Excluded</h4>
      )}
      <ul className="list-disc list-inside text-gray-700">
        {exclusions &&
          exclusions.map((inclusion, index) => (
            <li key={index} className="text-red-500 font-semibold">{inclusion}</li>
          ))}
      </ul>

      <p className="font-semibold text-black">{price}</p>
    </Card>
  );
}

MyServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  inclusions: PropTypes.array,
  exclusions: PropTypes.array,
};

export default MyServiceCard;
