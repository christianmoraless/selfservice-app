import { BrowserRouter as Router, Routes, Route } from "react-router";
import { ScrollToTop } from "../components/common/ScrollToTop"
import AppLayout from "../layout/AppLayout"
import SignIn from "../pages/AuthPages/SignIn"
import SignUp from "../pages/AuthPages/SignUp"
import Blank from "../pages/Blank"
import BarChart from "../pages/Charts/BarChart"
import LineChart from "../pages/Charts/LineChart"
import FormElements from "../pages/Forms/FormElements"
import NotFound from "../pages/OtherPage/NotFound"
import BasicTables from "../pages/Tables/BasicTables"
import Alerts from "../pages/UiElements/Alerts"
import Avatars from "../pages/UiElements/Avatars"
import Badges from "../pages/UiElements/Badges"
import Buttons from "../pages/UiElements/Buttons"
import Images from "../pages/UiElements/Images"
import Videos from "../pages/UiElements/Videos"
import UserProfiles from "../pages/UserProfiles"
import Calendar from "../pages/Calendar"
import { Delivery, Employes, Orders, Principal, SelfService, Settings,Home } from "../pages/App";

export const AppRouter = () => {
    return (
        <Router>
            <ScrollToTop />
            <Routes>
                {/* Dashboard Layout */}
                <Route element={<AppLayout />}>
                    {/* modulos del dashboard */}
                    <Route index path="/app/" element={<Home />} />
                    <Route path="/app/employes" element={<Employes />} />
                    <Route path="/app/orders" element={<Orders />} />
                    <Route path="/app/delivery" element={<Delivery />} />
                    <Route path="/app/self-service" element={<SelfService />} />
                    <Route path="/app/settings" element={<Settings />} />

                    <Route path="/profile" element={<UserProfiles />} />


                    {/* Others Page */}
                    <Route path="/profile" element={<UserProfiles />} />
                    <Route path="/calendar" element={<Calendar />} />
                    <Route path="/blank" element={<Blank />} />

                    {/* Forms */}
                    <Route path="/form-elements" element={<FormElements />} />

                    {/* Tables */}
                    <Route path="/basic-tables" element={<BasicTables />} />

                    {/* Ui Elements */}
                    <Route path="/alerts" element={<Alerts />} />
                    <Route path="/avatars" element={<Avatars />} />
                    <Route path="/badge" element={<Badges />} />
                    <Route path="/buttons" element={<Buttons />} />
                    <Route path="/images" element={<Images />} />
                    <Route path="/videos" element={<Videos />} />

                    {/* Charts */}
                    <Route path="/line-chart" element={<LineChart />} />
                    <Route path="/bar-chart" element={<BarChart />} />
                </Route>

                {/* Auth Layout */}
                <Route path="auth/signin" element={<SignIn />} />
                <Route path="auth/signup" element={<SignUp />} />

                {/* Fallback Route */}
                <Route path="*" element={<NotFound />} />
            </Routes>
        </Router>
    )
}
