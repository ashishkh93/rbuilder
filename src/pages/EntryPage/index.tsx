import RBuilderStepper from "@/components/common/RBuilderStepper";
import { useEffect } from "react";
import { Outlet } from "react-router-dom";

const EntryPage = () => {
  useEffect(() => {
    if (document.getElementById("initial-page-loader")) {
      document.getElementById("initial-page-loader").style.display = "none";
    }
  }, []);

  return (
    <>
      {/* <Breadcrumb /> */}
      <RBuilderStepper />
      {/* Entry page layout (header, etc.) */}
      <Outlet /> {/* 👈 This is crucial */}
    </>
  );
};

export default EntryPage;
