const Error = () => {
    return (
        <div className='bg-slate-300'>
            <div className="py-10 min-h-screen px-4 grid place-items-center max-w-screen-lg mx-auto">
                <div className="space-y-4">
                    <h3 className="text-7xl pb-2 text-center font-semibold">404 - ⚠️</h3>
                    <p className="text-3xl font-semibold text-center">Page not Found</p>
                    <p className="text-2xl text-center">The page you were looking for cloud not be found</p>
                </div>
            </div>
        </div>
    );
};

export default Error;