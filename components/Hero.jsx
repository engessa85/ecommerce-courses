import React from "react";

function Hero() {
  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-screen-xl px-4 py-40 lg:flex">
        <div className="mx-auto max-w-xl text-center">
          <h1 className="text-3xl text-primary font-extrabold sm:text-5xl">
            Understand User Flow.
            <strong className="font-extrabold text-secondary sm:block">
              {" "}
              Increase Conversion.{" "}
            </strong>
          </h1>

          <p className="mt-4 sm:text-xl/relaxed text-gray-600">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt
            illo tenetur fuga ducimus numquam ea!
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a
              className="block w-full rounded bg-secondary px-12 py-3 text-sm font-medium text-white shadow hover:bg-primary focus:outline-none focus:ring active:bg-primary sm:w-auto"
              href="#"
            >
              Get Started
            </a>

            <a
              className="block w-full rounded px-12 py-3 text-sm font-medium text-primary shadow hover:text-secondary focus:outline-none focus:ring active:text-secondary sm:w-auto"
              href="#"
            >
              Learn More &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
