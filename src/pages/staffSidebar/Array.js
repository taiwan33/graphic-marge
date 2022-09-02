import CreateJob from "./jobDetails/CreateJob";
import JobOrderList from "./jobDetails/JobOrderList";
import TaskCreate from "./taskAssigned/TaskCreate";
import TaskView from "./taskAssigned/TaskView";
import JobWorkingList from "./jobDetails/JobWorkinList";
import JobApprovedList from "./jobDetails/JobApprovedList";
import NoticeList from "./Notices/NoticeList";
import CreateNotice from "./Notices/CreateNotice";
import BookmarkList from "./bookMark/BookmarkList";
import BookMarkCreate from "./bookMark/BookMarkCreate";
import AdsList from "./newsDepart/AdsList";
import AdCreate from "./newsDepart/AdsCreate";
import NewsList from "./newsDepart/NewsList";
import NewsCreate from "./newsDepart/NewsCreate";
import CandidateReceivedList from "./Vacancy-details/CandidateReceivedList";
import VacancyPublishedList from "./Vacancy-details/VacancyPublishedList";
import CreateVacancy from "./Vacancy-details/CreateVacancy";
import PublicDownloadUpload from "./DownloadList/PublicDownloadUpload";
import StaffDownloadUpload from "./DownloadList/StaffDownloadUpload";
import ImpLinkCreate from "./publicSystemManage/ImpLinkCreate";
import ImpLinkList from "./publicSystemManage/ImpLinkList";
import Gallery from "./publicSystemManage/Gallery";
import ServiceList from "./serviceDetails/ServiceList";
import ServiceCreate from "./serviceDetails/ServiceCreate";
import IrdPanSearch from "./irdBlock/IrdPanSearch";
import IrdTaskPage from "./irdBlock/IrdTaskPage";
import IrdHome from "./irdBlock/IrdHome";
import OcrLogin from "./ocrBlock/OcrLogin";
import OcrHome from "./ocrBlock/OcrHome";
import CreateMail from "./webMail/CreateMail";
import ViewMail from "./webMail/ViewMail";
import VatList from "./vatReport/VatList";
import VatCreate from "./vatReport/VatCreate";
import ListReceived from "./createRecieved/ListReceived";
import ReceivedCreate from "./createRecieved/ReceivedCreate";
import ListInvoice from "./Invoice/ListInvoice";
import InvoiceCreate from "./Invoice/InvoiceCreate";
import StaffList from "./staffDetails/StaffList";
import CreateStaff from "./staffDetails/CreateStaff";
import DayBookCreate from "./dayBook/DaybookCreate";
import DayBookList from "./dayBook/DayBookList";
import DartaCompleteList from "./CompanyDetails/DartaCompletsList";
import CreateDartaForm from "./CompanyDetails/CreateDartaForm";
import CreatePuForm from "./CompanyDetails/CreatePuForm";
import CompanyList from "./CompanyDetails/CompanyList";
import UserTransfer from "./userBlock/UserTransfer";
import PassiveUser from "./userBlock/PassiveUser";
import CreateUser from "./userBlock/CreateUser";
import DirectUserCreate from "./userBlock/DirectUserCreate";
import JobCompletedList from "./jobDetails/JobCompletedList";
import JobPendingList from "./jobDetails/JobPendingList";
import PuList from "./CompanyDetails/PuList";

const sidebar = [
  {
    name: "Task Assigned",
    link: "task-assigned",
    chidren: [
      {
        name: "New Task Create",
        link: "new-task-create",
        component: TaskCreate,
      },
      {
        name: "Task Assigned List",
        link: "task-assigned-list",
        component: TaskView,
      },
    ],
  },
  {
    name: "Job Working Details",
    link: "job-working-JobDetails",

    chidren: [
      {
        name: "Create New Job",
        link: "create-new-job",
        component: CreateJob,
      },
      {
        name: "Job Order List With Status",
        link: "job-order-list",
        component: JobOrderList,
      },
      {
        name: "Job Working List",
        link: "job-working-list",
        component: JobWorkingList,
      },
      {
        name: "Job Approved List",
        link: "job-approved-list",
        component: JobApprovedList,
      },
      {
        name: "Job Pending List",
        link: "job-pending-list",
        component: JobPendingList,
      },
      {
        name: "Job Completed List",
        link: "job-completed-list",
        component: JobCompletedList,
      },
    ],
  },
  {
    name: "User Block",
    link: "user-block",

    chidren: [
      {
        name: "Create User",
        link: "create-user",
        component: CreateUser,
      },
      {
        name: "Direct User Create List",
        link: "direct-user-create-list",
        component: DirectUserCreate,
      },
      {
        name: "Active Users",
        link: "active-users",
        component: CreateUser,
      },
      {
        name: "Passive Users",
        link: "passive-users",
        component: PassiveUser,
      },
      {
        name: "User Transfer",
        link: "user-transfer",
        component: UserTransfer,
      },
    ],
  },
  {
    name: "Company Details",
    link: "company-details",

    chidren: [
      {
        name: "Company List",
        link: "/company-list",
        component: CompanyList,
      },
      {
        name: "Create PU Given Form",
        link: "create-pu-form",
        component: CreatePuForm,
      },
      {
        name: "PU Given List",
        link: "pu-list",
        component: PuList,
      },
      {
        name: "Create Darta Complete Form",
        link: "create-darta-form",
        component: CreateDartaForm,
      },
      {
        name: "Darta Complete Form List",
        link: "darta-complete-form-list",
        component: DartaCompleteList,
      },
    ],
  },
  {
    name: "Day Books",
    link: "day-books",
    chidren: [
      {
        name: "New DayBook Create",
        link: "new-daybook-create",
        component: DayBookCreate,
      },
      {
        name: "Day Book List",
        link: "day-book-list",
        component: DayBookList,
      },
    ],
  },
  {
    name: "Staff Details",
    link: "staff-details",
    chidren: [
      {
        name: "Create Staff",
        link: "create-staff",
        component: CreateStaff,
      },
      {
        name: "Staff List",
        link: "staff-list",
        component: StaffList,
      },
    ],
  },
  {
    name: "Invoice",
    link: "invoice",
    chidren: [
      {
        name: "New Invoice Create",
        link: "new-involve-create",
        component: InvoiceCreate,
      },
      {
        name: "List Invoice",
        link: "list-invoice",
        component: ListInvoice,
      },
    ],
  },
  {
    name: "Create Received",
    link: "create-received",
    chidren: [
      {
        name: "New Received Create",
        link: "new-received-create",
        component: ReceivedCreate,
      },
      {
        name: "List Received",
        link: "list-received",
        component: ListReceived,
      },
    ],
  },
  {
    name: "Vat Report",
    link: "vat-report",
    chidren: [
      {
        name: "New Vat Create",
        link: "new-vat-create",
        component: VatCreate,
      },
      {
        name: "List Vat Report",
        link: "list-vat-report",
        component: VatList,
      },
    ],
  },
  {
    name: "Web Mail",
    link: "web-mail",
    chidren: [
      {
        name: "View Mail",
        link: "view-mail",
        component: ViewMail,
      },
      {
        name: "Create Mail",
        link: "create-mail",
        component: CreateMail,
      },
    ],
  },
  {
    name: "OCR Work Block",
    link: "ocr-work-block",
    chidren: [
      {
        name: "Homepage",
        link: "homepage",
        component: OcrHome,
      },
      {
        name: "Company Login",
        link: "company-login",
        component: OcrLogin,
      },
    ],
  },
  {
    name: "IRD Work Block",
    link: "ird-work-block",
    chidren: [
      {
        name: "Homepage",
        link: "homepage",
        component: IrdHome,
      },
      {
        name: "Tax Payer Portal",
        link: "tax-payer-portal",
        component: IrdTaskPage,
      },
      {
        name: "Pan Search",
        link: "pan-search",
        component: IrdPanSearch,
      },
    ],
  },
  {
    name: "Services Details",
    link: "service-details",
    chidren: [
      {
        name: "Create Services",
        link: "create-servies",
        component: ServiceCreate,
      },
      {
        name: "Services Details",
        link: "services-details",
        component: ServiceList,
      },
    ],
  },
  {
    name: "Public System Manage",
    link: "public-system-manage",
    chidren: [
      {
        name: "Gallery",
        link: "gallery",
        component: Gallery,
      },
      {
        name: "Create Important Link",
        link: "create-important-link",
        component: ImpLinkCreate,
      },
      {
        name: "Important Link Details",
        link: "important-link-details",
        component: ImpLinkList,
      },
    ],
  },
  {
    name: "Download Details",
    link: "downloads-details",
    chidren: [
      {
        name: "Staff Downloads/Upload List",
        link: "staff-download/upload-list",
        component: StaffDownloadUpload,
      },
      {
        name: "Public Downloads/Upload List",
        link: "public-download/upload-list",
        component: PublicDownloadUpload,
      },
    ],
  },
  {
    name: "Vacancy Details",
    link: "vacancy-details",
    chidren: [
      {
        name: "Create Vacancy",
        link: "create-vacancy",
        component: CreateVacancy,
      },
      {
        name: "Vacancy Published List",
        link: "vacancy-published-list",
        component: VacancyPublishedList,
      },
      {
        name: "Candidate Received List",
        link: "candidate-received-list",
        component: CandidateReceivedList,
      },
    ],
  },
  {
    name: "News Depart",
    link: "news-depart",
    chidren: [
      {
        name: "Create News Post",
        link: "create-news-post",
        component: NewsCreate,
      },
      {
        name: "Posted News List",
        link: "posted-news-list",
        component: NewsList,
      },
      {
        name: "Create Ads",
        link: "create-ads",
        component: AdCreate,
      },
      {
        name: "View Ads List",
        link: "view-ads-list",
        component: AdsList,
      },
    ],
  },
  {
    name: "Bookmarks",
    link: "bookmarks",
    chidren: [
      {
        name: "Create Bookmarks",
        link: "create-bookmarks",
        component: BookMarkCreate,
      },
      {
        name: "Bookmark List",
        link: "bookmark-list",
        component: BookmarkList,
      },
    ],
  },
  {
    name: "Notice Details",
    link: "notice-details",
    chidren: [
      {
        name: "Create notice",
        link: "create-notice",
        component: CreateNotice,
      },
      {
        name: "Notice List",
        link: "notice-list",
        component: NoticeList,
      },
    ],
  },
];

export default sidebar;
