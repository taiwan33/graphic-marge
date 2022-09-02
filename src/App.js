import News from "./pages/News/News";
import "swiper/css";
import Works from "./pages/Work";
import Gallery from "./pages/Gallery";
import Layout from "./components/Layout/Layout";
import Services from "./pages/Services";
import { Route, Routes } from "react-router-dom";
import CompanyStartUp from "./pages/About/companyStartUp/CompanyStartUp";
import CompanyGoals from "./pages/About/companygoals/CompanyGoals";
import ManagerDetails from "./pages/About/managerDetails/ManagerDetails";
import EmployeeDetails from "./pages/About/employeedetails/EmployeeDetails";
import RegistrationCertificate from "./pages/About/registrationCertificate/RegistrationCertificate";
import Downloads from "./pages/downloads/Downloads";

import Payment from "./pages/payment";

import DateConverter from "./pages/date-converter/DateConverter";
import PreetiToUnicode from "./pages/preeti-to-unicode/PreetiToUnicode";
import UnicodeToPreeti from "./pages/unicode-to-preeti/UnicodeToPreeti";

import Homepage from "./pages/Homepage";

import Testimonials from "./pages/Homepage/Testonomials/Testonomials";
import MainAbout from "./pages/About/mainAbout/MainAbout";
import StaffDetails from "./pages/staffDetails/StaffDetails";

import MorePhotos from "./pages/Gallery/PhotosAndVideos/MorePhotosAndVideos";
import Photos from "./pages/Gallery/PhotosAndVideos/PhotosAndVideos";

import JobDetails from "./pages/user-dashboard/job-details/JobDetails";
import Profile from "./pages/user-dashboard/profile/Profile";
import UploadDocuments from "./pages/user-dashboard/upload-document/UploadDocument";
import ReceivedDocuments from "./pages/user-dashboard/received-documents/ReceivedDocument";
import LedgerDetails from "./pages/user-dashboard/ledger/LedgerDetails";

import LanguageTranslate from "./pages/language-translate/LanguageTranslate";
import Branch from "./pages/branches/Branch";
import ImportantLinks from "./pages/importantLinks/ImportantLinks";
import ServiceDetails from "./pages/Services/ServiceDetails";
import Notice from "./pages/notice/Notice";
import AcAndTax from "./pages/Services/acAndTax/AcAndTax";
import Calender from "./pages/calender/";

import SideBarLayout from "./components/sidebar-layout/SideBarLayout";

import Registration from "./pages/auth/registration/Registration";
import ClientLogin from "./pages/auth/clientLogin/ClientLogin";
import StaffLogin from "./pages/auth/staffLogin/StaffLogin";
import PrivateCompanyRegistration from "./pages/servicesForms/BusinessAndCompany/PrivateCompanyRegistration/PrivateCompanyRegistration";
import PublicCompanyRegistration from "./pages/servicesForms/BusinessAndCompany/PublicCompanyRegistration/PublicCompanyRegistration ";
import NonProfitCompanyRegistration from "./pages/servicesForms/BusinessAndCompany/NonProfitCompanyRegistration/NonProfitCompanyRegistration ";
import GhareluCompanyRegistrationA from "./pages/servicesForms/BusinessAndCompany/GhareluCompanyRegistrationA/GhareluCompanyRegistrationA";
import WardRegistration from "./pages/servicesForms/BusinessAndCompany/WardRegistrationA/WardRegistrationA";
import TrademarkRegistration from "./pages/servicesForms/BusinessAndCompany/TradeMarkRegistration/TradeMarkRegistration ";
import EximCodeRegistration from "./pages/servicesForms/BusinessAndCompany/EximCodeRegistration/EximCodeRegistration ";
import BanijyaRegistration from "./pages/servicesForms/BusinessAndCompany/BanijyaCompanyRegistration/BanijyaCompanyRegistration ";
import CalenderPrinting from "./pages/servicesForms/DesignAndPrinting/CalenderPrinting/CalenderPrinting";
import BillPrinting from "./pages/servicesForms/DesignAndPrinting/BillPrinting/BillPrinting";
import BanijyaCompanyRegistrationB from "./pages/servicesForms/BusinessAndCompany/BanijyaCompanyRegistrationB/BanijyaCompanyRegistrationB";
import BanijyaCompanyRegistration from "./pages/servicesForms/BusinessAndCompany/BanijyaCompanyRegistration/BanijyaCompanyRegistration ";
import GhareluCompanyRegistrationB from "./pages/servicesForms/BusinessAndCompany/GhareluCompanyRegistrationB/GhareluCompanyRegistrationB";
import WardRegistrationA from "./pages/servicesForms/BusinessAndCompany/WardRegistrationA/WardRegistrationA";
import WardRegistrationB from "./pages/servicesForms/BusinessAndCompany/WardRgistrataionB/WardRgistrataionB";
import VatRegistrationA from "./pages/servicesForms/BusinessAndCompany/VatRegistration/VatRegistration";
import VatRegistrationB from "./pages/servicesForms/BusinessAndCompany/VatRegistrationB/VatRegistrationB";
import SSFRegistrationA from "./pages/servicesForms/BusinessAndCompany/SSFRegistrationA/SSFRegistrationA";
import SSFRegistrationB from "./pages/servicesForms/BusinessAndCompany/SSFRegistrationB/SSFRegistrationB";
import NewsDetails from "./pages/news-details/NewsDetails";
import ThreeMonthsReturn from "./pages/servicesForms/AccountAndTaxtation/3MonthsReturnForm/ThreeMonthsReturn";
import AnualReturns from "./pages/servicesForms/AccountAndTaxtation/AnualReturns/AnualReturns";
import ShareLagat from "./pages/servicesForms/AccountAndTaxtation/ShareLagatProvideForm/ShareLagatProvideForm";
import EximCodeRenewal from "./pages/servicesForms/AccountAndTaxtation/EximCodeRenewal/EximCodeRenewal";
import BanijyaRenewal from "./pages/servicesForms/AccountAndTaxtation/BanijyaRenewal/BanijyaRenewal";
import WardRenewal from "./pages/servicesForms/AccountAndTaxtation/WardRenewal/WardRenewal";
import GhareluRenew from "./pages/servicesForms/AccountAndTaxtation/GhareluRenew/GhareluRenew";
import CompanyObjectChange from "./pages/servicesForms/AccountAndTaxtation/CompanyObjectChange/CompanyObjectChange";
import CompanyCapitalIncrease from "./pages/servicesForms/AccountAndTaxtation/CompanyCapitalIncrease/CompanyCapitalIncrease";
import CompanyAddressChange from "./pages/servicesForms/AccountAndTaxtation/CompanyAddressChange/CompanyAddressChange";
import CompanyNameChange from "./pages/servicesForms/AccountAndTaxtation/ComapanyNameChange/ComapanyNameChange";
import CompanyShareSalesPurches from "./pages/servicesForms/AccountAndTaxtation/CompanyShareSalesPurches/CompanyShareSalesPurches";
import FormBranch from "./components/common/forms/FormBranch";

function App() {
  const serviceRoutes = [
    {
      path: "private-company-registration",
      component: <PrivateCompanyRegistration />,
    },

    {
      path: "public-company-registration",
      component: <PublicCompanyRegistration />,
    },
    {
      path: "nonprofit-company-registration",
      component: <NonProfitCompanyRegistration />,
    },
    {
      path: "banijya-registration",
      component: <BanijyaCompanyRegistration />,
    },
    {
      path: "gharelu-registrationA",
      component: <GhareluCompanyRegistrationA />,
    },
    {
      path: "ward-registration",
      component: <WardRegistration />,
    },
    {
      path: "exim-code-registration",
      component: <EximCodeRegistration />,
    },
    {
      path: "trademark-registration",
      component: <TrademarkRegistration />,
    },
    {
      path: "calender-printing",
      component: <CalenderPrinting />,
    },
    {
      path: "bill-printing",
      component: <BillPrinting />,
    },
    {
      path: "vat-registration",
      component: <VatRegistrationB />,
    },
    {
      path: "ssf-registration",
      component: <SSFRegistrationA />,
    },
    {
      component: <ThreeMonthsReturn />,
      path: "three-months-return",
    },
    {
      component: <AnualReturns />,
      path: "annual-returns",
    },
    {
      component: <ShareLagat />,
      path: "share-lagat",
    },
    {
      component: <CompanyShareSalesPurches />,
      path: "share-sales-purchase",
    },
    {
      component: <CompanyNameChange />,
      path: "company-name-change",
    },
    {
      component: <CompanyAddressChange />,
      path: "company-address-change",
    },
    {
      component: <CompanyCapitalIncrease />,
      path: "company-capital-increase",
    },
    {
      component: <CompanyObjectChange />,
      path: "company-objective-change",
    },
    {
      component: <GhareluRenew />,
      path: "gharelu-renew",
    },
    {
      component: <WardRenewal />,
      path: "ward-renew",
    },
    {
      component: <BanijyaRenewal />,
      path: "banijya-renew",
    },
    {
      component: <EximCodeRenewal />,
      path: "exim-code-renew",
    },
  ];

  return (
    <div className="font-Bree relative min-h-screen w-full">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />

          <Route path="payment" element={<Payment />} />
          <Route path="testimonials" element={<Testimonials />} />
          <Route path="downloads" element={<Downloads />} />
          <Route path="/downloads" element={<Downloads />} />
          <Route path="/date-converter" element={<DateConverter />} />
          <Route path="/language-translate" element={<LanguageTranslate />} />
          <Route path="/preeti-to-unicode" element={<PreetiToUnicode />} />
          <Route path="/unicode-to-preeti" element={<UnicodeToPreeti />} />
          <Route path="/important-links" element={<ImportantLinks />} />
          <Route path="/notices" element={<Notice />} />
          <Route path="/branches" element={<Branch />} />
          <Route path="/about" element={<MainAbout />} />
          <Route path="/calender" element={<Calender />} />
          <Route path="/company-startup" element={<CompanyStartUp />} />
          <Route path="/company-goals" element={<CompanyGoals />} />
          <Route path="/manager-details" element={<ManagerDetails />} />
          <Route path="/employee-details" element={<EmployeeDetails />} />
          <Route path="/staff-details" element={<StaffDetails />} />
          <Route
            path="/registration-certificate"
            element={<RegistrationCertificate />}
          />
          <Route path="/news" element={<News />} />
          <Route path="news/:slug" element={<NewsDetails />} />

          <Route path="services">
            <Route index element={<Services />} />
            <Route path="service-details">
              <Route index element={<ServiceDetails />} />
              {serviceRoutes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  element={route.component}
                />
              ))}
              {/* <Route path=":slug" element={<PrivateCompanyRegistration />} /> */}
            </Route>
          </Route>
          <Route path="/gallery" element={<Gallery />}>
            <Route index element={<Photos />} />
            <Route path=":slug" element={<MorePhotos />} />
          </Route>
          <Route path="/works" element={<Works />} />

          <Route path="/registration" element={<Registration />} />
          <Route
            path="/private-company-registration"
            element={<PrivateCompanyRegistration />}
          />

          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/registartion" element={<Registration />} />

          <Route path="/staff/*" element={<SideBarLayout />} />
          <Route path="/client-login" element={<ClientLogin />} />
          <Route path="/staff-login" element={<StaffLogin />} />
          <Route path="/registartion" element={<Registration />} />
        </Route>

        <Route path="client" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="job-details" element={<JobDetails />} />
          <Route path="profile" element={<Profile />} />
          <Route path="upload-documents" element={<UploadDocuments />} />
          <Route path="received-documents" element={<ReceivedDocuments />} />
          <Route path="ledger-details" element={<LedgerDetails />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
