function Home() {
  return (
    <section className="bg-white">
      <div className="mx-auto max-h-screen-md max-w-screen-md px-4 py-8 lg:py-28">
        <div className="max-w-screen-lg text-gray-500 sm:text-lg dark:text-gray-400">
          <h2 className="mb-3 text-5xl tracking-tight font-extrabold text-center text-black">
            CGC Home
          </h2>
          <br />
          <h2 className="mb-4 text-4xl font-bold tracking-tight text-gray-900 ">
            CGC, Powering innovation at{" "}
            <span className="font-extrabold">200,000+</span> companies worldwide
          </h2>
          <p className="mb-4 font-light">
            Track work across the enterprise through an open, collaborative
            platform. Link issues across Jira and ingest data from other
            software development tools, so your IT support and operations teams
            have richer contextual information to rapidly respond to requests,
            incidents, and changes.
          </p>
          <p className="mb-4 font-medium">
            Deliver great service experiences fast - without the complexity of
            traditional ITSM solutions.Accelerate critical development work,
            eliminate toil, and deploy changes with ease.
          </p>
          <a
            href="#"
            className="text-primary-600 inline-flex items-center font-medium"
          >
            Learn more
            <svg
              className="ml-1 h-6 w-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clipRule="evenodd"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
export default Home;
