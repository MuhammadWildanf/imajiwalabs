"use client";
import React from 'react';

export default function Navbar() {
    return (
        <div className="navbar-custom">
            <div className="topbar container-fluid">
                <div className="d-flex align-items-center gap-lg-2 gap-1">
                    <div className="logo-topbar">
                        <a href="index.html" className="logo-light">
                            <span className="logo-lg">
                                <img src="assets/admin/images/logo.png" alt="logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="assets/admin/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>

                        <a href="index.html" className="logo-dark">
                            <span className="logo-lg">
                                <img src="assets/admin/images/logo-dark.png" alt="dark logo" />
                            </span>
                            <span className="logo-sm">
                                <img src="assets/admin/images/logo-sm.png" alt="small logo" />
                            </span>
                        </a>
                    </div>

                    <button className="button-toggle-menu">
                        <i className="ri-menu-2-fill"></i>
                    </button>

                    <button className="navbar-toggle" data-bs-toggle="collapse" data-bs-target="#topnav-menu-content">
                        <div className="lines">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </button>

                    <div className="app-search dropdown d-none d-lg-block">
                        <form>
                            <div className="input-group">
                                <input type="search" className="form-control dropdown-toggle" placeholder="Search..." id="top-search" />
                                <span className="ri-search-line search-icon"></span>
                            </div>
                        </form>

                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg" id="search-dropdown">
                            <div className="dropdown-header noti-title">
                                <h5 className="text-overflow mb-1">Found <b className="text-decoration-underline">08</b> results</h5>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="ri-file-chart-line fs-16 me-1"></i>
                                <span>Analytics Report</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="ri-lifebuoy-line fs-16 me-1"></i>
                                <span>How can I help you?</span>
                            </a>

                            <a href="javascript:void(0);" className="dropdown-item notify-item">
                                <i className="ri-user-settings-line fs-16 me-1"></i>
                                <span>User profile settings</span>
                            </a>

                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow mt-2 mb-1 text-uppercase">Users</h6>
                            </div>

                            <div className="notification-list">
                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img className="d-flex me-2 rounded-circle" src="assets/admin/images/users/avatar-2.jpg" alt="Generic placeholder image" height="32" />
                                        <div className="w-100">
                                            <h5 className="m-0 fs-14">Erwin Brown</h5>
                                            <span className="fs-12 mb-0">UI Designer</span>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item notify-item">
                                    <div className="d-flex">
                                        <img className="d-flex me-2 rounded-circle" src="assets/admin/images/users/avatar-5.jpg" alt="Generic placeholder image" height="32" />
                                        <div className="w-100">
                                            <h5 className="m-0 fs-14">Jacob Deo</h5>
                                            <span className="fs-12 mb-0">Developer</span>
                                        </div>
                                    </div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <ul className="topbar-menu d-flex align-items-center gap-3">
                    <li className="dropdown d-lg-none">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-search-line fs-22"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-animated dropdown-lg p-0">
                            <form className="p-3">
                                <input type="search" className="form-control" placeholder="Search ..." aria-label="Recipient's username" />
                            </form>
                        </div>
                    </li>

                    <li className="dropdown">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <img src="assets/admin/images/flags/us.jpg" alt="user-image" className="me-0 me-sm-1" height="12" />
                            <span className="align-middle d-none d-lg-inline-block">English</span> <i className="ri-arrow-down-s-line d-none d-sm-inline-block align-middle"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated">
                            <a href="javascript:void(0);" className="dropdown-item"> <img src="assets/admin/images/flags/germany.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">German</span> </a>

                            <a href="javascript:void(0);" className="dropdown-item"> <img src="assets/admin/images/flags/italy.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Italian</span> </a>

                            <a href="javascript:void(0);" className="dropdown-item"> <img src="assets/admin/images/flags/spain.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Spanish</span> </a>

                            <a href="javascript:void(0);" className="dropdown-item"> <img src="assets/admin/images/flags/russia.jpg" alt="user-image" className="me-1" height="12" /> <span className="align-middle">Russian</span> </a>
                        </div>
                    </li>

                    <li className="dropdown notification-list">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-notification-3-line fs-22"></i>
                            <span className="noti-icon-badge"></span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg py-0">
                            <div className="p-2 border-top-0 border-start-0 border-end-0 border-dashed border">
                                <div className="row align-items-center">
                                    <div className="col">
                                        <h6 className="m-0 fs-16 fw-semibold">Notification</h6>
                                    </div>
                                    <div className="col-auto">
                                        <a href="javascript: void(0);" className="text-dark text-decoration-underline">
                                            <small>Clear All</small>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div style={{ maxHeight: '300px' }} data-simplebar>
                                <h5 className="text-muted fs-12 fw-bold p-2 text-uppercase mb-0">Today</h5>

                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item unread-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon bg-primary">
                                                    <i className="ri-message-3-line fs-18"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Datacorp <small className="fw-normal text-muted float-end ms-1">1 min ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon bg-info">
                                                    <i className="ri-user-add-line fs-18"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Admin <small className="fw-normal text-muted float-end ms-1">1 hr ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">New user registered</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <h5 className="text-muted fs-12 fw-bold p-2 mb-0 text-uppercase">Yesterday</h5>

                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/admin/images/users/avatar-2.jpg" className="img-fluid rounded-circle" alt="" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Cristina Pride <small className="fw-normal text-muted float-end ms-1">1 day ago</small></h5>
                                                <small className="noti-item-subtitle text-muted">Hi, How are you? What about our next meeting</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <h5 className="text-muted fs-12 fw-bold p-2 mb-0 text-uppercase">31 Jan 2023</h5>

                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon bg-primary">
                                                    <i className="ri-discuss-line fs-18"></i>
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Datacorp</h5>
                                                <small className="noti-item-subtitle text-muted">Caleb Flakelar commented on Admin</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <a href="javascript:void(0);" className="dropdown-item p-0 notify-item read-noti card m-0 shadow-none">
                                    <div className="card-body">
                                        <div className="d-flex align-items-center">
                                            <div className="flex-shrink-0">
                                                <div className="notify-icon">
                                                    <img src="assets/admin/images/users/avatar-4.jpg" className="img-fluid rounded-circle" alt="" />
                                                </div>
                                            </div>
                                            <div className="flex-grow-1 text-truncate ms-2">
                                                <h5 className="noti-item-title fw-semibold fs-14">Karen Robinson</h5>
                                                <small className="noti-item-subtitle text-muted">Wow ! this admin looks good and awesome design</small>
                                            </div>
                                        </div>
                                    </div>
                                </a>
                            </div>

                            <a href="javascript:void(0);" className="dropdown-item text-center text-primary text-decoration-underline fw-bold notify-item border-top border-light py-2"> View All </a>
                        </div>
                    </li>

                    <li className="dropdown d-none d-sm-inline-block">
                        <a className="nav-link dropdown-toggle arrow-none" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <i className="ri-apps-2-line fs-22"></i>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated dropdown-lg p-0">
                            <div className="p-2">
                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/github.png" alt="Github" />
                                            <span>GitHub</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/bitbucket.png" alt="bitbucket" />
                                            <span>Bitbucket</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/dropbox.png" alt="dropbox" />
                                            <span>Dropbox</span>
                                        </a>
                                    </div>
                                </div>

                                <div className="row g-0">
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/slack.png" alt="slack" />
                                            <span>Slack</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/dribbble.png" alt="dribbble" />
                                            <span>Dribbble</span>
                                        </a>
                                    </div>
                                    <div className="col">
                                        <a className="dropdown-icon-item" href="#">
                                            <img src="assets/admin/images/brands/behance.png" alt="Behance" />
                                            <span>Behance</span>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li>

                    <li className="d-none d-sm-inline-block">
                        <a className="nav-link" data-bs-toggle="offcanvas" href="#theme-settings-offcanvas">
                            <i className="ri-settings-3-line fs-22"></i>
                        </a>
                    </li>

                    <li className="d-none d-sm-inline-block">
                        <div className="nav-link" id="light-dark-mode" data-bs-toggle="tooltip" data-bs-placement="left" title="Theme Mode">
                            <i className="ri-moon-line fs-22"></i>
                        </div>
                    </li>

                    <li className="d-none d-md-inline-block">
                        <a className="nav-link" href="#" data-toggle="fullscreen">
                            <i className="ri-fullscreen-line fs-22"></i>
                        </a>
                    </li>

                    <li className="dropdown">
                        <a className="nav-link dropdown-toggle arrow-none nav-user px-2" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="false" aria-expanded="false">
                            <span className="account-user-avatar">
                                <img src="assets/admin/images/users/avatar-1.jpg" alt="user-image" width="32" className="rounded-circle" />
                            </span>
                            <span className="d-lg-flex flex-column gap-1 d-none">
                                <h5 className="my-0">Tosha Minner</h5>
                                <h6 className="my-0 fw-normal">Founder</h6>
                            </span>
                        </a>
                        <div className="dropdown-menu dropdown-menu-end dropdown-menu-animated profile-dropdown">
                            <div className="dropdown-header noti-title">
                                <h6 className="text-overflow m-0">Welcome !</h6>
                            </div>

                            <a href="pages-profile.html" className="dropdown-item">
                                <i className="ri-account-circle-line fs-18 align-middle me-1"></i>
                                <span>My Account</span>
                            </a>

                            <a href="pages-profile.html" className="dropdown-item">
                                <i className="ri-settings-4-line fs-18 align-middle me-1"></i>
                                <span>Settings</span>
                            </a>

                            <a href="pages-faq.html" className="dropdown-item">
                                <i className="ri-customer-service-2-line fs-18 align-middle me-1"></i>
                                <span>Support</span>
                            </a>

                            <a href="auth-lock-screen.html" className="dropdown-item">
                                <i className="ri-lock-password-line fs-18 align-middle me-1"></i>
                                <span>Lock Screen</span>
                            </a>

                            <a href="auth-logout-2.html" className="dropdown-item">
                                <i className="ri-logout-box-line fs-18 align-middle me-1"></i>
                                <span>Logout</span>
                            </a>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    )
}