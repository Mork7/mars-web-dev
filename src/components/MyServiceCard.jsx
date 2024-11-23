import { Card } from "flowbite-react";
import PropTypes from "prop-types";

function MyServiceCard({
  title,
  description,
  price,
  inclusions = [],
  exclusions = [],
  monthly,
}) {
  return (
    <Card className="max-w-md bg-black border border-zinc-700">
      <h2 className="mb-4 text-xl font-semibold text-red-500">{title}</h2>
      <div className="flex items-baseline text-red-500">
        <span className="text-3xl font-semibold">$</span>
        <span className="text-5xl font-extrabold tracking-tight">{price}</span>
        <span className="ml-1 text-xl font-normal text-gray-400">
          {monthly ? "/ per month" : "/ flat rate"}
        </span>
      </div>
      <p className="text-sm text-gray-400 mt-2 h-32">{description}</p>
      <ul className="my-7 space-y-5">
        {inclusions.map((item, index) => (
          <li key={index} className="flex space-x-3">
            <svg
              className="h-5 w-5 shrink-0 text-red-500"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-400">
              {item}
            </span>
          </li>
        ))}
        {exclusions.map((item, index) => (
          <li
            key={index}
            className="flex space-x-3 line-through decoration-gray-600"
          >
            <svg
              className="h-5 w-5 shrink-0 text-gray-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
            <span className="text-base font-normal leading-tight text-gray-600">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

MyServiceCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  price: PropTypes.string,
  inclusions: PropTypes.array,
  exclusions: PropTypes.array,
  monthly: PropTypes.bool,
};

export default MyServiceCard;
