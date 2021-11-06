/* This example requires Tailwind CSS v2.0+ */
import {
  GlobeAltIcon,
  LightningBoltIcon,
  ScaleIcon,
} from "@heroicons/react/outline";

const features = [
  {
    name: "We Have All the Equipment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GlobeAltIcon,
  },
  {
    name: "Amazing Employees",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: ScaleIcon,
  },
  {
    name: "100% Satisfied Customers",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: LightningBoltIcon,
  },
];

export default function Features() {
  return (
    <section className="py-12 bg-white lg:my-36">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">A better way to send money.</h2>
        <dl className="space-y-10 lg:space-y-0 lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((feature) => (
            <div key={feature.name} className="text-center">
              <div
                className="flex items-center justify-center h-12 w-12 rounded-md bg-yellow-500 text-white relative"
                style={{ left: "45%" }}
              >
                <feature.icon className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-5 text-lg leading-6 font-medium text-gray-900">
                {feature.name}
              </p>

              <dd className="mt-2 text-base text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
      <div className="mt-10 sm:flex sm:justify-center lg:justify-center mx-4">
        <div className="rounded-md shadow">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-yellow-50 md:py-4 md:text-lg md:px-10"
          >
            Residential
          </a>
        </div>
        <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
          <a
            href="#"
            className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-500 bg-white hover:bg-yellow-50 md:py-4 md:text-lg md:px-10"
          >
            Commercial
          </a>
        </div>
      </div>
    </section>
  );
}
