import { Link } from "react-router-dom";

// import notFound from '/undraw_warning_re_eoyh'
const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className=" h-screen w-full flex justify-center items-center">
                <div className="text-center w-1/2 ">
                    <div className="space-y-2 max-w-lg">
                        <p className="font-bold text-7xl">404 - Error</p>
                        <p className="font-bold text-2xl">page not found</p>
                        <p>It seems like the page you're looking for doesn't exist or has been moved. You can visit our homepage to find what you're looking for</p>
                        <div className="mt-2">
                            <Link to={'/dashboard'}>
                                <button className=" px-8 border btn btn-primary rounded-full">Go to Dashboard</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-1/2">
                    <img src={`/public/undraw_warning_re_eoyh.svg`} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;