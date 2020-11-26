import React, { useEffect } from "react";
import { Link } from "react-router-dom";
// import { Link } from 'react-router-dom';

const Sidebar = () => {
  
  const url = "#";

  return (
    <div id="layoutSidenav_nav">
      <nav
        className="sb-sidenav accordion sb-sidenav-dark"
        id="sidenavAccordion"
      >
        <div className="sb-sidenav-menu">
          <div className="nav">
            <Link className="nav-link active" to="/admin">
              <div className="sb-nav-link-icon">
                <i className="fas fa-tachometer-alt" />
              </div>
              Dashboard
            </Link>            
            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseCategories"
              aria-expanded="false"
              aria-controls="collapseCategories"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-list" />
              </div>
              Categories
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseCategories"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <Link
                  className="nav-link sub_nav_link"
                  to="/admin/all-categories"
                >
                  All Categories
                </Link>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/category/create"
                >
                  Add Category
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/category/sub-create"
                >
                  Add Sub-Category
                </a>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseProducts"
              aria-expanded="false"
              aria-controls="collapseProducts"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-box" />
              </div>
              Products
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseProducts"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a className="nav-link sub_nav_link" href="/admin/product/list">
                  All Products
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/product/create"
                >
                  Add Product
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/product/more-photo"
                >
                  Add More Image
                </a>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseLocations"
              aria-expanded="false"
              aria-controls="collapseLocations"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-map-marker-alt" />
              </div>
              Locations
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseLocations"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/list"
                >
                  All Locations
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/create"
                >
                  Add Location
                </a>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseCustomers"
              aria-expanded="false"
              aria-controls="collapseCustomers"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-users" />
              </div>
              Customers
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseCustomers"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/category/list"
                >
                  All Customers
                </a>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseOffers"
              aria-expanded="false"
              aria-controls="collapseOffers"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-gift" />
              </div>
              Offers
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseOffers"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/list"
                >
                  All Offers
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/create"
                >
                  Add Offers
                </a>
              </nav>
            </div>

            <a
              className="nav-link collapsed"
              href={url}
              data-toggle="collapse"
              data-target="#collapseOrders"
              aria-expanded="false"
              aria-controls="collapseOrders"
            >
              <div className="sb-nav-link-icon">
                <i className="fas fa-shopping-cart" />
              </div>
              Orders
              <div className="sb-sidenav-collapse-arrow">
                <i className="fas fa-angle-down" />
              </div>
            </a>
            <div
              className="collapse"
              id="collapseOrders"
              aria-labelledby="headingTwo"
              data-parent="#sidenavAccordion"
            >
              <nav className="sb-sidenav-menu-nested nav">
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/list"
                >
                  All Orders
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/create"
                >
                  Pending Orders
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/create"
                >
                  Completed Orders
                </a>
                <a
                  className="nav-link sub_nav_link"
                  href="/admin/location/create"
                >
                  Cancelled Orders
                </a>
              </nav>
            </div>

            <a className="nav-link" href="reports.html">
              <div className="sb-nav-link-icon">
                <i className="fas fa-chart-bar" />
              </div>
              Reports
            </a>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;
