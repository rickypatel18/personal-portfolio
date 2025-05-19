export default function Newsletter() {
  return (
    <section className="px-0">
      <div className="bg-white dark:bg-black shadow-md overflow-hidden animate-slide-up px-4 ">
        <div className=" ">
          <div className="max-w-7xl mx-auto  px-0 xl:px-4 2xl:px-0">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl font-bold mb-4">
                  Subscribe to My Newsletter
                </h2>
                <p className="text-gray-600 dark:text-gray-300">
                  Get the latest updates on my projects, blog posts, and tech
                  insights delivered straight to your inbox.
                </p>
              </div>
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4   dark:text-white border-gray-300  text-gray-500  w-full  py-2 rounded-md border  dark:border-gray-900 bg-white dark:bg-gray-900 focus:outline-none focus:border-primary"
                  required
                />
                <button
                  type="submit"
                  className="bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
