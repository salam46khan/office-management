import { Link } from "react-router-dom";

// import notFound from '/undraw_warning_re_eoyh'
const ErrorPage = () => {
    return (
        <div className="container mx-auto">
            <div className=" h-screen w-full flex justify-center items-center">
                <div className="text-center w-1/2">
                    <p className="font-bold text-7xl">404 - Error</p>
                    <p className="font-bold text-2xl">page not found</p>
                    <p></p>
                    <Link to={'/dashboard'}>
                        <button className="py-2 px-8 border rounded-full">Go to Dashboard</button>
                    </Link>
                </div>
                <div className="w-1/2">
                    <img src={`/public/undraw_warning_re_eoyh.svg`} alt="" />
                </div>
            </div>
        </div>
    );
};

export default ErrorPage;