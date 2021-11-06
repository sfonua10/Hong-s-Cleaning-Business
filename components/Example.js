function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <div className="relative bg-gray-50">


      <main className="lg:relative">
        <div className="mx-auto max-w-7xl w-full pt-16 pb-20 text-center lg:py-48 lg:text-left">
          <div className="px-4 lg:w-1/2 sm:px-8 xl:pr-16">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
              {/* <span className="block xl:inline">Cleaning Services</span>{" "} */}
              <span className="block text-yellow-600 xl:inline">
                Hong's Maile Maids
              </span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-lg text-gray-500 sm:text-xl md:mt-5 md:max-w-3xl">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
            <div className="mt-10 sm:flex sm:justify-center lg:justify-start">
              <div className="rounded-md shadow">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-yellow-600 hover:bg-yellow-700 md:py-4 md:text-lg md:px-10"
                >
                  Get started
                </a>
              </div>
              {/* <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a
                  href="#"
                  className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-yellow-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10"
                >
                  Live demo
                </a>
              </div> */}
            </div>
          </div>
          
        </div>
        
        <div className="relative w-full h-64 sm:h-72 md:h-96 lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2 lg:h-full">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            // src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            // src="https://images.pexels.com/photos/7262358/pexels-photo-7262358.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            // src="https://images.pexels.com/photos/6195285/pexels-photo-6195285.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"
            src="https://images.pexels.com/photos/4098778/pexels-photo-4098778.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt=""
          />
        </div>
        
      </main>
                {/* Feature section with screenshot */}
                <div className="relative bg-gray-50 pt-16 sm:pt-24 lg:pt-32">
            <div className="mx-auto max-w-md px-4 text-center sm:px-6 sm:max-w-3xl lg:px-8 lg:max-w-7xl">
              <div>
                {/* <h2 className="text-base font-semibold tracking-wider text-cyan-600 uppercase">Serverless</h2> */}
                <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
                  Messy ofice? No problem.
                </p>
                <p className="mt-5 max-w-prose mx-auto text-xl text-gray-500">
                  Phasellus lorem quam molestie id quisque diam aenean nulla in. Accumsan in quis quis nunc, ullamcorper
                  malesuada. Eleifend condimentum id viverra nulla.
                </p>
              </div>
              <div className="mt-12 -mb-10 sm:-mb-24 lg:-mb-80">
                <img
                  className="rounded-lg shadow-xl ring-1 ring-black ring-opacity-5"
                  src="https://images.pexels.com/photos/6195277/pexels-photo-6195277.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
                  alt=""
                />
              </div>
            </div>
          </div>
    </div>
  );
}
