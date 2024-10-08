export default function ContactSection() {
    return (
        <section id="contact" class="bg-gray-100 dark:bg-gray-900">
            <form
                class="py-8 px-6 mx-auto max-w-screen-md"
                action="https://formspree.io/xknqodbr"
                method="POST"
            >
                <h2 class="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                    Contact Me
                </h2>
                <p class="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">
                    If you’re looking for a web developer to bring your ideas to
                    life, let’s connect - I’d love to discuss how my skills can
                    help your business thrive.
                </p>
                <form action="#" class="space-y-8">
                    <div>
                        <label
                            for="email"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="_replyto"
                            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light"
                            placeholder="name@gmail.com"
                            required
                        />
                    </div>
                    <div class="sm:col-span-2 my-5">
                        <label
                            for="message"
                            class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                        >
                            Your message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows={6}
                            class="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                            placeholder="Details..."
                        />
                    </div>
                    <button
                        type="submit"
                        class="text-black w-full py-3 px-5 text-sm font-medium text-center dark:text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                    >
                        Send message
                    </button>
                </form>
            </form>
        </section>
    );
}
