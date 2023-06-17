function main() {
  completeHeaderOperation(document.querySelector(".header-section"));
  mountServicesJobs(document.querySelector(".services-jobs"), "services");
  completeFormOperation(document.querySelector(".form-section"));
  mountFooter(document.querySelector(".footer-section"));
}

main();
