function About() {
  return (
    <section>
      <div className="mb-7 mx-auto py-24 px-4 sm:px-4 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-8">
          <div className="max-w-lg">
            <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
              About Us
            </h2>
            <p className="mt-4 text-gray-600 text-lg">
              <b>Career Guidance Council (CGC)</b> came into existence in 2008
              with a simple yet powerful mission – to bridge the gap between
              education and employment. Over the years, we have grown and
              evolved, but our commitment to this mission has remained
              unwavering.
            </p>
            <div className="mt-8">
              <a
                href="#"
                className="text-blue-500 hover:text-blue-600 font-medium"
              >
                Learn more about us
                <span className="ml-2">&#8594;</span>
              </a>
            </div>
          </div>
          <div className="mt-12 md:mt-0">
            <img
              src="https://images.unsplash.com/photo-1531973576160-7125cd663d86"
              alt="About Us Image"
              className="object-cover rounded-lg shadow-md"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
export default About;
