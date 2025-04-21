import "./admin.css";
import Script from "next/script";
import Head from "next/head";
import Sidebar from "@/components/admin/Sidebar";
import Navbar from "@/components/admin/Navbar";
import Footer from "@/components/admin/Footer";

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <title>Dashboard | Vortrex</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta content="A fully featured admin theme which can be used to build CRM, CMS, etc." name="description" />
        <meta content="Coderthemes" name="author" />
        <link rel="shortcut icon" href="assets/admin/images/favicon.ico" />
      </Head>
      <body className="wrapper">
        <Navbar />
        <Sidebar />

        <div className="content-page">
          <div className="content">
            <div className="container-fluid">
              {children}
            </div>
          </div>
          <Footer />
        </div>


        <Script src="assets/admin/js/config.js" />
        <Script src="assets/admin/js/vendor.min.js" />
        <Script src="assets/admin/vendor/daterangepicker/moment.min.js" />
        <Script src="assets/admin/vendor/daterangepicker/daterangepicker.js" />
        <Script src="assets/admin/vendor/apexcharts/apexcharts.min.js" />
        <Script src="assets/admin/vendor/admin-resources/jquery.vectormap/jquery-jvectormap-1.2.2.min.js" />
        <Script src="assets/admin/vendor/admin-resources/jquery.vectormap/maps/jquery-jvectormap-world-mill-en.js" />
        <Script src="assets/admin/js/pages/demo.dashboard.js" />
        <Script src="assets/admin/js/app.min.js" />
      </body>
    </html>
  );
}
