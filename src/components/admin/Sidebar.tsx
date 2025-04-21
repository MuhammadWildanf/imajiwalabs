// components/Sidebar.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

const Sidebar = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="leftside-menu">
      <a href="index.html" className="logo logo-light">
        <span className="logo-lg">
          <img src="assets/admin/images/logo.png" alt="logo" />
        </span>
        <span className="logo-sm">
          <img src="assets/admin/images/logo-sm.png" alt="small logo" />
        </span>
      </a>

      <a href="index.html" className="logo logo-dark">
        <span className="logo-lg">
          <img src="assets/admin/images/logo-dark.png" alt="dark logo" />
        </span>
        <span className="logo-sm">
          <img src="assets/admin/images/logo-sm.png" alt="small logo" />
        </span>
      </a>

      <div className="button-sm-hover" data-bs-toggle="tooltip" data-bs-placement="right" title="Show Full Sidebar">
        <i className="ri-checkbox-blank-circle-line align-middle"></i>
      </div>

      <div className="button-close-fullsidebar">
        <i className="ri-close-fill align-middle"></i>
      </div>

      <div className="h-100" id="leftside-menu-container" data-simplebar>
        <div className="leftbar-user">
          <a href="pages-profile.html">
            <img src="assets/admin/images/users/avatar-1.jpg" alt="user-image" height="42" className="rounded-circle shadow-sm" />
            <span className="leftbar-user-name mt-2">Tosha Minner</span>
          </a>
        </div>

        <ul className="side-nav">
          <li className="side-nav-title">Navigation</li>

          <li className="side-nav-item">
            <a data-bs-toggle="collapse" href="#sidebarDashboards" aria-expanded="false" aria-controls="sidebarDashboards" className="side-nav-link">
              <i className="ri-home-4-line"></i>
              <span className="badge bg-success float-end">2</span>
              <span> Dashboards </span>
            </a>
            <div className="collapse" id="sidebarDashboards">
              <ul className="side-nav-second-level">
                <li>
                  <a href="dashboard-analytics.html">Analytics</a>
                </li>
                <li>
                  <a href="index.html">Ecommerce</a>
                </li>
              </ul>
            </div>
          </li>
        </ul>

        <div className="clearfix"></div>
      </div>
    </div>
  );
};

export default Sidebar;
