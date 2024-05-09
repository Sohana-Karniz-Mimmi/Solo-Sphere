import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layouts/MainLayout";
import ErrorPage from "../Pages/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Authentication/Login";
import Register from "../Pages/Authentication/Register";
import JobDetails from "../Pages/JobDetails";
import AddJob from "../Pages/AddJob";
import MyPostedJobs from "../Pages/MyPostedJobs";
import MyBids from "../Pages/MyBids";
import BidRequests from "../Pages/BidRequests";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                // loader: () => fetch(`http://localhost:5000/jobs`)
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/job/:id",
                element: <JobDetails></JobDetails>,
                loader: ({params}) => fetch(`${import.meta.env.VITE_API_URL}/job/${params.id}`)
            },
            {
                path: "/add-job",
                element: <AddJob></AddJob>
            },
            {
                path: "/my-posted-jobs",
                element: <MyPostedJobs></MyPostedJobs>
            },
            {
                path: "/my-bids",
                element: <MyBids></MyBids>
            },
            {
                path: "/bid-requests",
                element: <BidRequests></BidRequests>
            },
        ]
    },
]);

export default router;