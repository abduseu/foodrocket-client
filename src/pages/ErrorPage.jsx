const ErrorPage = () => {
    return (
        <section>
            <div className="px-5 py-16 md:px-10 md:py-24 lg:py-32">
                <div className="mx-auto flex w-full max-w-3xl flex-col items-center text-center">
                    
                    <h1 className="mb-4 text-4xl font-bold md:text-6xl prim">Sorry!</h1>
                    <p className="mx-auto mb-5 max-w-lg text-sm text-[#636262] sm:text-base md:mb-6 lg:mb-8">
                        Something went wrong!
                    </p>
                    <a href="/" className="inline-block items-center bg-prim px-8 py-4 text-center font-semibold bg-green-600 text-white rounded-lg">
                        Back Home
                    </a>
                </div>
            </div>
        </section>

    );
};

export default ErrorPage;