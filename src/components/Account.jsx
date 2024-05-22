import { BrowserRouter, Routes, Route } from "react-router-dom";
import CardProfile from "./profile/CardProfile";
import SiteBar from "./profile/Sitebar";
import ManageAccount from "./profile/ManageAccount";
import ProfileInfo from "./profile/ProfileInfo";

const Account = () => {
  return (
    <div className="container grid grid-cols-12 items-start gap-6 pt-4 pb-16">
      
        <div className="col-span-3">
          <CardProfile />
          <SiteBar />
        </div>
        <div className="col-span-9 ">
        </div>
      
    </div>
  );
};

export default Account;
