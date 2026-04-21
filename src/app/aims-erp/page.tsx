// "use client";

// import { useState } from "react";
// import { motion } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ContactUs from "../components/ContactUs";
// import { Inter } from "next/font/google";
// import Image from "next/image";

// // Load Inter font
// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// export default function AimsErpPage() {
//   const menuItems = [
//     "Overview",
//     "Benefits",
//     "Features",
//     "Customizable",
//     "What's New",
//     "Download Brochure",
//   ];

//   const [activeTab, setActiveTab] = useState("Overview");
//      const renderContent = () => {
//     switch (activeTab) {
//       case "Overview":
//         return (
//             <>
//             <h2 className="text-2xl font-bold mb-4">Overview</h2>

//             <p className="mb-4 text-justify">
//                 <strong>All-in-One Business Accounting & Inventory Solution</strong>
//                 <br />
//                 AIMS ERP is a robust Accounts and Inventory Management System
//                 specifically tailored to meet the needs of growing businesses in
//                 Pakistan. Built on international standards of bookkeeping and financial
//                 control, it offers a fully integrated platform to Plan, Source, Stock,
//                 Sell, Recover, and Analyze your entire business lifecycle. It seamlessly
//                 unifies your operations with your customers, suppliers, employees, and
//                 processes, unlocking hidden ROI and improving productivity across the
//                 organization.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Powerful Financial Management</strong>
//                 <br />
//                 The Accounts & Finance Module of AIMS ERP empowers businesses to
//                 maintain accurate records, manage transactions, and gain clear financial
//                 insights. It supports flexible GL accounts, journal vouchers, payment
//                 and receipt handling, and full bank reconciliation  allowing management
//                 to make informed, strategic decisions with confidence. With built-in
//                 compliance to international auditing standards, businesses can prepare
//                 reports that are audit-ready and fully transparent.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Smart Inventory Management</strong>
//                 <br />
//                 AIMS ERP offers FIFO-based inventory tracking with real-time updates and
//                 forecasting tools. The Inventory Module helps register, monitor, and
//                 optimize stock levels using multi-unit measurement, batch barcoding, and
//                 automated reorder suggestions. Whether managing a single warehouse or
//                 multiple locations, the system provides a centralized view of inventory
//                 and ensures efficient procurement-to-sales flow, minimizing losses and
//                 maximizing client satisfaction.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Efficient Purchase & Sales Operations</strong>
//                 <br />
//                 With a streamlined Purchase Order Management (POM) system, businesses
//                 can generate and track purchase orders, manage supplier records, and
//                 accurately calculate costs including on-invoice expenses. The Sales
//                 Invoice Management (SIM) module includes advanced tools for sales
//                 orders, profit margin analysis, discount handling, and real-time sales
//                 reporting. Admin rights ensure data security, while support for multiple
//                 languages and formats enhances billing flexibility.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Retail-Ready Point of Sale (POS)</strong>
//                 <br />
//                 Designed for retail environments, AIMS ERP includes a high-speed POS
//                 system that supports barcode scanners, receipt printers, cash drawers,
//                 and even credit/debit card processing. It synchronizes with accounting
//                 and inventory modules, enabling businesses to track stock, handle
//                 multiple payment types, and process transactions offline or in the
//                 cloud. POS reports offer valuable insights into customer behavior, sales
//                 trends, and inventory performance.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Advanced Reporting & Business Intelligence</strong>
//                 <br />
//                 The system includes over 100 customizable reports across Sales,
//                 Inventory, Warehousing, Accounts, and Expenses. With powerful filters
//                 and export capabilities, reports can be generated in PDF, Excel, Word,
//                 HTML, or image formats. Managers can quickly assess key metrics like
//                 profit margins, overdue invoices, and sales by product or salesman to
//                 make data-driven decisions that grow the business.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>User-Centric Features & Simplicity</strong>
//                 <br />
//                 From role-based user access to easy document attachments, SMS device
//                 integration, and quick recovery tools, AIMS ERP is designed for
//                 usability and efficiency. It includes multi-level dashboards, reminder
//                 tools, and real-time insights all contributing to smoother operations.
//                 Whether a startup or a scaling enterprise, AIMS ERP offers a
//                 comprehensive, scalable, and cost-effective ERP experience.
//             </p>
//             </>
//         );
//       case "Benefits":
//         return (
//             <>
//             <h2 className="text-2xl font-bold mb-4">Benefits</h2>

//             <p className="mb-4 text-justify">
//                 <strong>Designed for Growing Businesses</strong>
//                 <br />
//                 AIMS ERP is tailored specifically for small to medium-sized businesses in Pakistan. 
//                 It delivers a complete suite of integrated tools for managing finances, inventory, 
//                 sales, and operations. With a user-friendly interface and localized features, it 
//                 simplifies complex processes and supports business growth without the overhead costs 
//                 of large-scale ERP systems.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Affordable and Scalable ERP Solution</strong>
//                 <br />
//                 Unlike many expensive ERP platforms, AIMS ERP offers an affordable pricing model 
//                 without compromising on features. Its modular design ensures businesses only pay 
//                 for what they use, while retaining the ability to scale seamlessly as operations 
//                 expand. Whether managing a single branch or multiple locations, AIMS adapts to the 
//                 organization’s needs over time.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Boosts Operational Efficiency</strong>
//                 <br />
//                 By automating core accounting and inventory tasks, AIMS ERP minimizes manual work 
//                 and reduces the chances of errors. From generating invoices and purchase orders to 
//                 tracking stock and calculating taxes, the software simplifies day-to-day operations 
//                 and enables faster decision-making.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Real-Time Visibility & Control</strong>
//                 <br />
//                 AIMS ERP provides real-time data insights across your entire business from sales 
//                 and inventory levels to customer balances and expenses. This transparency empowers 
//                 business owners to make informed decisions, avoid stock-outs, and control cash flow 
//                 with confidence. It also reduces dependency on external consultants for everyday 
//                 reporting.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Seamless Integration Across Departments</strong>
//                 <br />
//                 All modules in AIMS ERP including Accounts, Inventory, POS, Purchase, Sales, and 
//                 Reporting are interconnected. Data entered in one module automatically updates related 
//                 modules, eliminating duplication and ensuring consistency across the organization. 
//                 This integration enhances collaboration and streamlines workflows.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Localized Features for the Pakistani Market</strong>
//                 <br />
//                 AIMS ERP is built with a deep understanding of local business practices, tax structures, 
//                 and reporting needs. It supports Urdu and English interfaces, GST/SRB integration, and 
//                 prepares audit-ready financials aligned with Pakistani regulatory standards making 
//                 compliance easy and reliable.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Robust Data Security & User Access Control</strong>
//                 <br />
//                 The software includes role-based access controls, ensuring sensitive financial and 
//                 operational data is only accessible to authorized users. Permissions can be customized 
//                 for each employee, increasing accountability and reducing risks. Secure logins and 
//                 frequent backups ensure business continuity.
//             </p>

//             <p className="mb-4 text-justify">
//                 <strong>Customer Support & Training</strong>
//                 <br />
//                 AIMS ERP provides dedicated customer support and training resources. From initial setup 
//                 and migration to advanced usage queries, businesses receive expert guidance to ensure 
//                 smooth adoption and maximum ROI.
//             </p>
//             </>
//         );
//         case "Features":
//         return (
//             <div className="space-y-10">
            
//             {/* ===================== MAIN HEADING ===================== */}
//             <h2 className="text-3xl font-bold">Features</h2>

//             {/* ===================== STANDARD INTRO ===================== */}
//             <h3 className="text-2xl font-semibold">
//                 AIMS (Standard)  Accounts & Inventory Management System
//             </h3>

//             {/* Screenshot 1 */}
//             <Image src="/products/amis/standard1.png" width={500} height={300} className="rounded shadow" alt="Standard Screenshot 1" />

//             <h3 className="text-2xl font-semibold mt-6">Complete Package for Any Business Domain</h3>

//             {/* Screenshot 2 */}
//             <Image src="/products/amis/standard2.png" width={500} height={300} className="rounded shadow" alt="Standard Screenshot 2" />

//             <h3 className="text-2xl font-semibold mt-6">User Login</h3>

//             {/* Screenshot 3 */}
//             <Image src="/products/amis/standard3.png" width={300} height={150} className="rounded shadow" alt="Standard Screenshot 3" />

//             {/* ===================== DASHBOARD ===================== */}
//             <h3 className="text-3xl font-bold mt-10">DASHBOARD OVERVIEW</h3>

//             {/* Screenshot 4 */}
//             <Image src="/products/amis/standard4.png" width={900} height={600} className="rounded shadow" alt="Standard Screenshot 4" />

//             <ul className="list-disc pl-6 space-y-2 mt-4">
//                 <li>Dash board with a Real-Time Graphical view of your Business</li>
//                 <li>Purchases & Sales</li>
//                 <li>Active & Inactive Products</li>
//                 <li>Dead Sales Items</li>
//                 <li>Reorder Items</li>
//                 <li>Documents Statistics</li>
//                 <li>Scheduled Tasks</li>
//                 <li>To Do List</li>
//             </ul>

//             {/* ===================== ACCOUNTS MANAGEMENT ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Accounts Management (AM)</h2>

//             <p className="text-justify">
//                 AIMS (Standard) Accounts and Finance Module gives you the power to take control of your 
//                 financial decisions. Built according to international bookkeeping standards, it generates 
//                 fully compliant audit reports for businesses in Pakistan.
//             </p>

//             <p className="text-justify mt-2">
//                 With strong financial tools and automated processes, businesses can minimize costs and 
//                 maximize profitability with ease.
//             </p>

//             <h3 className="text-xl font-semibold mt-4">Key Features of AM</h3>

//             <ul className="list-disc pl-6 space-y-2">
//                 <li>Flexible GL Account (Chart of Account) & Sub-Account</li>
//                 <li>Payment & Receipt Vouchers</li>
//                 <li>Cash & Bank Vouchers with Cheque Management</li>
//                 <li>Journal Vouchers</li>
//                 <li>Create Custom Vouchers</li>
//                 <li>Scheduled / Recurring Transactions</li>
//                 <li>Reversing Entries</li>
//                 <li>Bulk Payment & Receipt Entry</li>
//                 <li>Auto Cash Transaction Posting</li>
//                 <li>Bank Reconciliation</li>
//                 <li>Multi-Level Trial Balance</li>
//                 <li>Final Statements</li>
//             </ul>

//             {/* Screenshots 5 & 6 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 <Image src="/products/amis/standard5.png" width={500} height={300} className="rounded shadow" alt="Screenshot 5" />
//                 <Image src="/products/amis/standard6.png" width={500} height={300} className="rounded shadow" alt="Screenshot 6" />
//             </div>

//             {/* Screenshots 7 & 8 */}
//             <h3 className="text-lg font-semibold mt-4">Create Supplier & Customer</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 <Image src="/products/amis/standard7.png" width={500} height={300} className="rounded shadow" alt="Screenshot 7" />
//                 <Image src="/products/amis/standard8.png" width={500} height={300} className="rounded shadow" alt="Screenshot 8" />
//             </div>

//             {/* More Screenshots (9–13) */}
//             <h3 className="text-lg font-semibold mt-6">Cash / Bank Vouchers & Journal Vouchers</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 <Image src="/products/amis/standard9.png" width={500} height={300} className="rounded shadow" alt="Screenshot 9" />
//                 <Image src="/products/amis/standard10.png" width={500} height={300} className="rounded shadow" alt="Screenshot 10" />
//                 <Image src="/products/amis/standard11.png" width={500} height={300} className="rounded shadow" alt="Screenshot 11" />
//                 <Image src="/products/amis/standard12.png" width={500} height={300} className="rounded shadow" alt="Screenshot 12" />
//                 <Image src="/products/amis/standard13.png" width={500} height={300} className="rounded shadow" alt="Screenshot 13" />
//             </div>

//             {/* ===================== INVENTORY MANAGEMENT ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Inventory Management (IM)</h2>

//             <p className="text-justify">
//                 A highly optimized FIFO-based inventory & warehouse system. It manages stock levels, 
//                 warehouse operations, forecasting, valuations, and stock movements in real-time.
//             </p>

//             <h3 className="text-xl font-semibold mt-4">Key Features of IM</h3>

//             <ul className="list-disc pl-6 space-y-2">
//                 <li>Dynamic Product Chart with Multi UOM</li>
//                 <li>Active & Inactive Products</li>
//                 <li>Unicode (Urdu) Language Support</li>
//                 <li>Multiple Barcodes & Batch Barcoding</li>
//                 <li>Advanced & Custom Filtration</li>
//                 <li>Product Grouping & Categorization</li>
//                 <li>Automated & Manual Reorder Management</li>
//                 <li>Inventory Forecasting & Valuation</li>
//                 <li>Multiple Warehouses</li>
//                 <li>Billing & Invoicing</li>
//                 <li>Purchase vs Sales Analysis</li>
//             </ul>

//             {/* Screenshots 14 & 15 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 <Image src="/products/amis/standard14.png" width={500} height={300} className="rounded shadow" alt="Screenshot 14" />
//                 <Image src="/products/amis/standard15.png" width={500} height={300} className="rounded shadow" alt="Screenshot 15" />
//             </div>

//             {/* Screenshots 16 & 17 */}
//             <h3 className="text-lg font-semibold mt-4">Barcode & Batch Printing</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Image src="/products/amis/standard16.png" width={500} height={300} className="rounded shadow" alt="Screenshot 16" />
//                 <Image src="/products/amis/standard17.png" width={500} height={300} className="rounded shadow" alt="Screenshot 17" />
//             </div>

//             {/* ===================== PURCHASE ORDER MANAGEMENT ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Purchase Order Management (POM)</h2>

//             <p className="text-justify">
//                 A complete purchase workflow with system-generated and manual POs, expense allocation, 
//                 product tracking, and document filtration.
//             </p>

//             <h3 className="text-xl font-semibold mt-4">Key Features of POM</h3>

//             <ul className="list-disc pl-6 space-y-2">
//                 <li>Full purchase management system</li>
//                 <li>Detailed & Summary Purchase Orders</li>
//                 <li>Track Purchase History</li>
//                 <li>Email POs to Suppliers</li>
//                 <li>Advanced Document Filtration</li>
//                 <li>On-Invoice Expense Allocation</li>
//                 <li>Manual & System-Generated POs</li>
//                 <li>Attachment Support</li>
//             </ul>

//             {/* Screenshots 18 & 19 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                 <Image src="/products/amis/standard18.png" width={500} height={300} className="rounded shadow" alt="Screenshot 18" />
//                 <Image src="/products/amis/standard19.png" width={500} height={300} className="rounded shadow" alt="Screenshot 19" />
//             </div>

//             {/* ===================== SALES INVOICE MANAGEMENT ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Sales Invoice Management (SIM)</h2>

//             <p className="text-justify">
//                 Sales orders, returns, multi-UOM, profit calculation, discounts, bonuses, controlled invoice 
//                 editing, and multilingual invoice printing.
//             </p>

//             <h3 className="text-xl font-semibold mt-4">Key Features of SIM</h3>

//             <ul className="list-disc pl-6 space-y-2">
//                 <li>Sales Orders & Invoices</li>
//                 <li>Sales Returns</li>
//                 <li>On-Invoice Expense Control</li>
//                 <li>Cash Receipt Controls</li>
//                 <li>Salesman Credit Balance Control</li>
//                 <li>Profit Calculator</li>
//                 <li>Admin-Controlled Invoice Permissions</li>
//                 <li>Multi-Language & Multi-Size Printing</li>
//                 <li>Audit Tracking</li>
//             </ul>

//             {/* Screenshots 20 & 21 */}
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4 my-4">
//                 <Image src="/products/amis/standard20.png" width={500} height={300} className="rounded shadow" alt="Screenshot 20" />
//                 <Image src="/products/amis/standard21.png" width={500} height={300} className="rounded shadow" alt="Screenshot 21" />
//             </div>

//             {/* ===================== POS ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Point of Sale (POS)</h2>

//             <p className="text-justify">
//                 A fast POS system supporting barcode scanners, cash drawers, receipts, multi-store, 
//                 online/offline mode, invoice history & stock syncing.
//             </p>

//             <h3 className="text-xl font-semibold mt-4">Key Features of POS</h3>

//             <ul className="list-disc pl-6 space-y-2">
//                 <li>Multiple Store Configuration</li>
//                 <li>All Payment Types Supported</li>
//                 <li>Integrated with Accounting & Inventory</li>
//                 <li>Barcode Scanners & Printers Support</li>
//                 <li>Credit/Debit Cards Support</li>
//                 <li>Hold & Resume Invoice</li>
//                 <li>Works Offline & Cloud</li>
//             </ul>

//             {/* Screenshot 22 */}
//             <Image src="/products/amis/standard22.png" width={800} height={500} className="rounded shadow my-4" alt="Screenshot 22" />

//             {/* ===================== REPORTS ===================== */}
//             <h2 className="text-3xl font-bold mt-12">Reports & Business Intelligence</h2>

//             <p className="text-justify">
//                 Over 100 detailed reports with advanced filtering, export to PDF, Excel, CSV, HTML, Image 
//                 and more. Includes BI insights and financial reporting tools.
//             </p>

//             {/* Screenshots 23––26 */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
//                 <Image src="/products/amis/standard23.png" width={300} height={200} className="rounded shadow" alt="Screenshot 23" />
//                 <Image src="/products/amis/standard24.png" width={300} height={200} className="rounded shadow" alt="Screenshot 24" />
//                 <Image src="/products/amis/standard25.png" width={300} height={200} className="rounded shadow" alt="Screenshot 25" />
//                 <Image src="/products/amis/standard26.png" width={300} height={200} className="rounded shadow" alt="Screenshot 26" />
//             </div>

//             </div>
//         );

//       case "Customizable":
//         return (
//             <div>
//             <h2 className="text-2xl font-bold mb-4">Customizable</h2>

//             <p className="mb-4 text-justify">
//                 <strong>Tailored to Fit Your Unique Business Needs</strong>
//                 <br />
//                 Every business operates differently, and AIMS (Standard) understands that one-size-fits-all solutions often fall short. 
//                 That’s why the system is built with customization flexibility at its core, empowering businesses to shape the software 
//                 according to their exact workflows and preferences.
//             </p>

//             <p className="mb-4 text-justify">
//                 From the very first setup, AIMS (Standard) allows you to choose and activate only the modules relevant to your operations
//                 be it Accounting, Inventory, POS, Purchase, Sales, or Reporting. As your business grows, you can add more modules without 
//                 needing a complete system overhaul.
//             </p>

//             <h3 className="text-xl font-semibold mt-6 mb-2">Flexible Chart of Accounts & Reporting</h3>
//             <p className="mb-4 text-justify">
//                 The system supports custom Chart of Accounts (COA) structures, allowing organizations to align their financial records 
//                 with internal policies or external regulatory requirements. Reporting formats can also be customized, including branded 
//                 invoice templates, tax summaries, and multi-level dashboards tailored to the management team’s KPIs.
//             </p>

//             <h3 className="text-xl font-semibold mt-6 mb-2">User Roles, Access & Workflows</h3>
//             <p className="mb-4 text-justify">
//                 With customizable user roles and permissions, you can control who accesses what within the platform. You can also define 
//                 approval hierarchies, set up email alerts for specific actions, and create automated workflows that match your internal 
//                 processes whether for order approvals, stock transfers, or payment verifications.
//             </p>

//             <h3 className="text-xl font-semibold mt-6 mb-2">Field Customization & Localization</h3>
//             <p className="mb-4 text-justify">
//                 Businesses can rename fields, add custom fields to forms, and even hide or show data based on user type. The software 
//                 supports both Urdu and English, and localized tax rules (GST/SRB) can be configured based on region and industry. Currency, 
//                 units of measurement, and barcode formats are all adjustable.
//             </p>

//             <h3 className="text-xl font-semibold mt-6 mb-2">Built for Adaptability</h3>
//             <p className="mb-4 text-justify">
//                 Whether you are a retailer, wholesaler, manufacturer, or service provider, AIMS (Standard) provides the flexibility 
//                 to adapt without needing any coding knowledge. Our technical team can also offer advanced customizations on request, 
//                 helping businesses meet complex operational or compliance needs with ease.
//             </p>
//             </div>
//         );
//       case "What's New":
//         return (
//             <div>
//             <h2 className="text-2xl font-bold mb-4">Whats New</h2>

//             <p className="mb-6 font-semibold">What’s New in AIMS (Standard)</p>

//             <ul className="list-disc pl-6 space-y-3 text-gray-700">
//                 <li>
//                 Revamped user interface with a fresh, modern, and intuitive layout for easier navigation across all devices.
//                 </li>
//                 <li>
//                 Advanced reporting engine with 100+ customizable reports, filters, and export options (PDF, Excel, Word).
//                 </li>
//                 <li>
//                 Smart document attachment system to link invoices, receipts, and contracts directly with transactions.
//                 </li>
//                 <li>
//                 Enhanced security with role-based access control, OTP verification, login history, and auto session timeout.
//                 </li>
//                 <li>
//                 Improved POS integration with faster barcode scanning, real-time sync, and offline support.
//                 </li>
//                 <li>
//                 Auto reorder alerts based on stock thresholds and intelligent purchase suggestions.
//                 </li>
//                 <li>
//                 AI-powered insights to predict sales trends, overdue payments, and slow-moving inventory.
//                 </li>
//                 <li>
//                 Multi-language interface (English & Urdu) for broader accessibility and ease of use.
//                 </li>
//                 <li>
//                 Email and SMS notification features for instant updates on purchases, sales, and payments.
//                 </li>
//                 <li>
//                 Custom field creation in sales, purchase, customer, and product forms without development effort.
//                 </li>
//             </ul>
//             </div>
//         );
//       case "Download Brochure":
//         return (
//           <>
//             <h2 className="text-2xl font-bold mb-4">Download Brochure</h2>
//             <p className="text-gray-700 leading-relaxed">
//               Download the official AIMS ERP brochure to explore all modules,
//               benefits, pricing, and technical specs.
//             </p>

//             <a
//               href="/brochures/aims-erp.pdf"
//               download
//               className="inline-block mt-6 px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition"
//             >
//               Download PDF Brochure
//             </a>
//           </>
//         );
//       default:
//         return null;
//     }
//   };

//   return (
//     <div className={`bg-[#f4f7fb] mt-10 min-h-screen ${inter.className}`}>
//       <Navbar />

//       {/* ---------- HERO SECTION ---------- */}
//       <motion.section
//         className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-20 px-6 md:px-20 flex flex-col-reverse md:flex-row items-center justify-between gap-8"
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//       >
//         <motion.div
//           className="md:w-1/2"
//           initial={{ opacity: 0, x: -50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <h1 className="text-4xl md:text-5xl font-bold mb-6">AIMS ERP</h1>
//           <p className="text-lg mb-6 text-justify">
//             Discover NetRoots Technologies AIMS ERP the ultimate business accounting, inventory, and sales management solution for small and growing businesses in Pakistan.
//           </p>
//           <motion.a
//             href="/AIMS-ERP-Brochure.pdf"
//             download
//             className="inline-block bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg shadow-lg hover:scale-105 transition-transform"
//             whileHover={{ scale: 1.05 }}
//           >
//             Download Brochure
//           </motion.a>
//         </motion.div>

//         <motion.div
//           className="md:w-1/2 flex justify-center"
//           initial={{ opacity: 0, x: 50 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//         >
//           <Image
//             src="/products/amis/Dashboard.png"
//             alt="AIMS ERP Dashboard"
//             width={1200}   // you can adjust this
//             height={700}   // adjust proportionally
//             className="w-full md:w-4/5 rounded-xl shadow-lg object-contain"
//             />

//         </motion.div>
//       </motion.section>

//       {/* ---------- MAIN SECTION ---------- */}
//       <section className="px-6 md:px-20 py-12 flex flex-col md:flex-row gap-10">
        
//         {/* SIDEBAR */}
//         <motion.div
//           className="w-full md:w-1/4"
//           initial={{ opacity: 0, x: -30 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//         >
//           <div className="bg-gradient-to-b from-blue-700 to-blue-700 shadow-lg rounded-xl p-4 sticky top-24">
//                 {menuItems.map((item) => (
//                     <button
//                     key={item}
//                     onClick={() => setActiveTab(item)}
//                     className={`w-full text-left px-4 py-3 mb-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-between ${
//                         activeTab === item
//                         ? "bg-gradient-to-r from-indigo-500 to-blue-400 text-white font-bold border-l-4 border-white shadow-lg"
//                         : "text-white bg-transparent hover:bg-white hover:text-blue-700"
//                     }`}
//                     >
//                     {item}
                    
//                     </button>
//                 ))}
//                 </div>

//         </motion.div>

//         {/* CONTENT */}
//         <motion.div
//         className="w-full md:w-3/4"
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         >
//         <motion.div
//             key={activeTab} // ensures animation on tab change
//             initial={{ opacity: 0, x: 20 }}
//             animate={{ opacity: 1, x: 0 }}
//             exit={{ opacity: 0, x: -20 }}
//             transition={{ duration: 0.5 }}
//             className={`bg-white p-8 rounded-xl shadow-lg border-l-4 ${
//             activeTab === "Overview"
//                 ? "border-blue-600"
//                 : activeTab === "Benefits"
//                 ? "border-blue-600"
//                 : activeTab === "Features"
//                 ? "border-blue-600"
//                 : activeTab === "Customizable"
//                 ? "border-blue-600"
//                 : activeTab === "What's New"
//                 ? "border-blue-600"
//                 : "border-blue-600"
//             }`}
//         >
//             {renderContent()}
//         </motion.div>
//         </motion.div>


//       </section>

//       <ContactUs />
//       <Footer />
//     </div>
//   );
// }






// "use client";

// import { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Navbar from "../components/Navbar";
// import Footer from "../components/Footer";
// import ContactUs from "../components/ContactUs";
// import { Inter } from "next/font/google";
// import Image from "next/image";

// const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

// const sidebarItems = [
//   "Accounting",
//   "Inventory",
//   "Procurement/Purchase",
//   "CRM",
//   "Sales",
//   "Tax Portal",
//   "HR/Payroll",
//   "Manufacturing",
//   "Fixed Assets",
//   "Administration",
//   "POS",
//   "Reports",
// ];

// // ─────────────────────────────────────────────────────────────────────────────
// // ACCOUNTING CONTENT  (mirrors all 8 screenshots exactly)
// // ─────────────────────────────────────────────────────────────────────────────
// function AccountingContent() {
//   const [activePoint, setActivePoint] = useState(0);

//   const stats = [
//     { value: "17+",    label: "MODULES AVAILABLE" },
//     { value: "10000+", label: "ACTIVE CLIENTS" },
//     { value: "18+",    label: "YEARS EXPERIENCE" },
//     { value: "24/7",   label: "SUPPORT SERVICE" },
//   ];

//   const featureCards = [
//     { title: "Chart of Accounts",    img: "/products/amis/standard5.png"  },
//     { title: "Financial Management", img: "/products/amis/standard6.png"  },
//     { title: "Compliance Assurance", img: "/products/amis/standard7.png"  },
//     { title: "Expense Management",   img: "/products/amis/standard8.png"  },
//     { title: "Accounting Reports",   img: "/products/amis/standard9.png"  },
//     { title: "Payment Vouchers",     img: "/products/amis/standard10.png" },
//     { title: "Receipts Vouchers",    img: "/products/amis/standard11.png" },
//     { title: "Budget Management",    img: "/products/amis/standard12.png" },
//     { title: "Data Access & Control",img: "/products/amis/standard13.png" },
//   ];

//   const keyPoints = [
//     { num: 1, title: "Cash Flow",      desc: "Track and manage the movement of money in and out of your business with clarity." },
//     { num: 2, title: "Bank/Cash Book", desc: "Maintain a complete record of all bank and cash transactions in one place." },
//     { num: 3, title: "General Ledger", desc: "A centralized record of all financial transactions across accounts." },
//     { num: 4, title: "Trial Balance",  desc: "Verify the accuracy of your records with an auto-generated trial balance." },
//     { num: 5, title: "Profit and Loss",desc: "Get a clear picture of your revenue, costs, and net profitability." },
//     { num: 6, title: "Balance Sheet",  desc: "Assess financial health with a snapshot of assets, liabilities & equity." },
//   ];

//   return (
//     <div className="space-y-0">

//       {/* ══ BLOCK 1: Title + stats + 3 images  (Screenshot 1) ══════════════════ */}
//       <div className="bg-[#00aeef] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">
//           AIMS ERP (Hybrid)
//         </h1>
//         <p className="text-blue-100 text-base mb-8">
//           Manage your business anywhere with Desktop, Mobile and Web App
//         </p>

//         {/* stat cards */}
//         <div className="grid grid-cols-4 gap-4 mb-10">
//           {stats.map((s) => (
//             <div key={s.label} className="bg-[#00aeef] border border-white/20 rounded-md p-5 text-center text-white">
//               <p className="text-3xl font-bold">{s.value}</p>
//               <p className="text-[11px] tracking-widest mt-1 text-blue-100 uppercase">{s.label}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ══ BLOCK 2: 3×3 image feature cards  (Screenshots 2 & 3) ═════════════ */}
//       <div className="bg-white px-10 py-10">
//         <div className="grid grid-cols-3 gap-5">
//           {featureCards.map((card) => (
//             <div
//               key={card.title}
//               className="relative rounded-xl overflow-hidden group h-90 cursor-pointer shadow-sm"
//             >
//               <Image
//                 src={card.img}
//                 alt={card.title}
//                 fill
//                 className="object-cover group-hover:scale-105 transition-transform duration-300"
//               />
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
//               <div className="absolute rounded-md bottom-6 left-4 right-4 px-4 py-3 bg-white/60 backdrop-blur-sm">
//                 <p className="text-black text-center font-semibold text-sm">{card.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>

//       {/* ══ BLOCK 3: AI-based accounting  (Screenshot 4) ════════════════════════ */}
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="flex gap-10 items-center">
//           {/* image left */}
//           <div className="w-1/2 relative h-72 rounded-xl overflow-hidden flex-shrink-0">
//             <Image src="/products/amis/Dashboard.png" alt="AI Accounting" fill className="object-cover" />
//           </div>
//           {/* text right */}
//           <div className="w-1/2">
//             <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
//               Explore the potential of powerful AI-based accounting software
//             </h2>
//             <p className="text-gray-500 text-sm leading-relaxed mb-6">
//               NetRoots Technologies is a hub of skilled software expertise. Our professionals carefully
//               design the modules and the entire software with meticulous attention. We include all essential
//               modules to ensure clients receive the necessary features and capabilities. Therefore, we deliver:
//             </p>
//             {/* 2×2 pill grid */}
//             <div className="border border-gray-200 rounded-xl p-5 grid grid-cols-2 gap-y-4 gap-x-8">
//               {["Module Customizations", "Diversity Leadership", "Personalized Experience", "Role-Based Access"].map((item) => (
//                 <p key={item} className="text-sm font-medium text-gray-700">{item}</p>
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* ══ BLOCK 4: Numbered list + image  (Screenshot 5) ══════════════════════ */}
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="flex gap-10">
//           {/* numbered list */}
//           <div className="w-1/2 space-y-1">
//             {keyPoints.map((point, i) => (
//               <div
//                 key={point.num}
//                 onClick={() => setActivePoint(i)}
//                 className="flex items-start gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
//               >
//                 <div className={`flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
//                   activePoint === i
//                     ? "bg-[#1a9ed4] border-[#1a9ed4] text-white"
//                     : "border-gray-300 text-gray-500"
//                 }`}>
//                   {point.num}
//                 </div>
//                 <div>
//                   <p className={`font-bold text-base ${activePoint === i ? "text-[#1a9ed4]" : "text-gray-800"}`}>
//                     {point.title}
//                   </p>
//                   {activePoint === i && (
//                     <p className="text-sm text-gray-500 mt-1 leading-relaxed">{point.desc}</p>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//           {/* right image */}
//           <div className="w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "320px" }}>
//             <Image
//               src="/products/amis/standard3.png"
//               alt="Accounting feature"
//               fill
//               className="object-cover"
//             />
//           </div>
//         </div>
//       </div>

//       {/* ══ BLOCK 5: Optimize heading + 2 large images  (Screenshot 6) ══════════ */}
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             Optimize Every Aspect of Your Business Management
//           </h2>
//           <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
//             Our carefully coded ERP software offers the best experience in all aspects of accounting. It can be
//             customized to meet your specific needs, making it perfect in every way. Our streamlined processes enable
//             effective coordination and help maintain strong relationships.
//           </p>
//         </div>
//         <div className="grid grid-cols-2 gap-6">
//           <div className="relative h-64 rounded-xl overflow-hidden">
//             <Image src="/products/amis/standard4.png" alt="Business management 1" fill className="object-cover" />
//           </div>
//           <div className="relative h-64 rounded-xl overflow-hidden">
//             <Image src="/products/amis/standard14.png" alt="Business management 2" fill className="object-cover" />
//           </div>
//         </div>
//       </div>

//       {/* ══ BLOCK 6: 2 column image + caption  (Screenshot 7) ════════════════════ */}
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="grid grid-cols-2 gap-8">
//           <div>
//             <div className="relative h-56 rounded-xl overflow-hidden mb-5">
//               <Image src="/products/amis/standard15.png" alt="Future decisions" fill className="object-cover" />
//             </div>
//             <h3 className="font-bold text-gray-900 text-lg mb-2">
//               Allows you to make decisions regarding future plans
//             </h3>
//             <p className="text-sm text-gray-500 leading-relaxed">
//               With accurate record-keeping and automation tools, our customers gain clear insights into future
//               business prospects. Our accounting software enables better and more precise decision-making for
//               business planning, tailored for charities and other organizations.
//             </p>
//           </div>
//           <div>
//             <div className="relative h-56 rounded-xl overflow-hidden mb-5">
//               <Image src="/products/amis/standard16.png" alt="Taxation" fill className="object-cover" />
//             </div>
//             <h3 className="font-bold text-gray-900 text-lg mb-2">
//               Our solution makes taxation simple and practical across all business activities.
//             </h3>
//             <p className="text-sm text-gray-500 leading-relaxed">
//               The software carefully tracks every transaction and calculates taxation accordingly, saving you
//               valuable time and effort. Whenever needed, simply use the modules to access and retrieve stored
//               information from the database for your use.
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* ══ BLOCK 7: How ERP streamlines + 4 process cards  (Screenshot 8) ══════ */}
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-10">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">
//             How Our ERP Accounting Software Streamlines Accounting in Pakistan
//           </h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
//             Our Accounting ERP software solutions for small businesses in Pakistan help you achieve the
//             desired financial outcomes. To get started, simply follow this easy process:
//           </p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "Audit Trail",       desc: "Keep a complete record of all actions to ensure accountability and transparency." },
//             { title: "Data Import/Export",desc: "Easily transfer data in and out of the system for seamless integration." },
//             { title: "Security and Privacy",desc: "Protect sensitive business information with robust security measures." },
//             { title: "Enhance",           desc: "Continuously improve system performance with regular updates and features." },
//           ].map((card) => (
//             <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{card.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>

//     </div>
//   );
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // OTHER TAB CONTENTS  (same visual pattern as accounting blocks)
// // ─────────────────────────────────────────────────────────────────────────────

// function InventoryContent() {
//   const featureCards = [
//     { title: "Stock Overview",      img: "/products/amis/standard14.png" },
//     { title: "Barcode Management",  img: "/products/amis/standard15.png" },
//     { title: "Warehouse Control",   img: "/products/amis/standard16.png" },
//     { title: "Reorder Management",  img: "/products/amis/standard17.png" },
//     { title: "Product Catalogue",   img: "/products/amis/standard4.png"  },
//     { title: "Inventory Forecasting",img: "/products/amis/standard5.png" },
//   ];
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">Inventory Management</h1>
//         <p className="text-blue-100 text-base mb-8">
//           A highly optimized FIFO-based inventory & warehouse system for real-time stock control.
//         </p>
//         <div className="grid grid-cols-3 gap-4">
//           {["/products/amis/standard14.png","/products/amis/standard15.png","/products/amis/standard16.png"].map((src,i)=>(
//             <div key={i} className="relative h-52 rounded-xl overflow-hidden">
//               <Image src={src} alt={`Inventory ${i+1}`} fill className="object-cover"/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10">
//         <div className="grid grid-cols-3 gap-5">
//           {featureCards.map((card)=>(
//             <div key={card.title} className="relative rounded-xl overflow-hidden group h-52 cursor-pointer shadow-sm">
//               <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
//               <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/40 backdrop-blur-sm">
//                 <p className="text-white font-semibold text-sm">{card.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">How Our Inventory Module Works</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">Streamline stock, warehouse, and procurement with AIMS ERP's inventory tools.</p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "FIFO Tracking",    desc: "Accurate costing and stock rotation using FIFO methodology." },
//             { title: "Multi Warehouse",  desc: "Centrally manage multiple warehouse locations." },
//             { title: "Auto Reorder",     desc: "Get alerts when stock falls below your defined threshold." },
//             { title: "Real-Time Sync",   desc: "Instant stock updates reflected across all modules." },
//           ].map((c)=>(
//             <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{c.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function PurchaseContent() {
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">Procurement / Purchase</h1>
//         <p className="text-blue-100 text-base mb-8">Complete purchase workflow with POs, expense allocation and document filtration.</p>
//         <div className="grid grid-cols-3 gap-4">
//           {["/products/amis/standard18.png","/products/amis/standard19.png","/products/amis/Dashboard.png"].map((src,i)=>(
//             <div key={i} className="relative h-52 rounded-xl overflow-hidden">
//               <Image src={src} alt={`Purchase ${i+1}`} fill className="object-cover"/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">How Our Purchase Module Streamlines Procurement</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">Automate and control all aspects of procurement from vendor selection to payment.</p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "Audit Trail",        desc: "Keep a complete record of all purchase actions for accountability." },
//             { title: "Data Import/Export", desc: "Move PO data in and out for seamless supplier integration." },
//             { title: "Security and Privacy",desc: "Protect sensitive procurement data with access control." },
//             { title: "Supplier Management",desc: "Manage and track all supplier records and purchase histories." },
//           ].map((c)=>(
//             <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{c.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function SalesContent() {
//   const featureCards = [
//     { title: "Sales Orders",    img: "/products/amis/standard20.png" },
//     { title: "Invoice Management",img:"/products/amis/standard21.png"},
//     { title: "Profit Calculator",img: "/products/amis/standard9.png" },
//     { title: "Sales Returns",   img: "/products/amis/standard10.png" },
//     { title: "Discount Control",img: "/products/amis/standard11.png" },
//     { title: "Audit Tracking",  img: "/products/amis/standard12.png" },
//   ];
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">Sales Invoice Management</h1>
//         <p className="text-blue-100 text-base mb-8">Sales orders, returns, profit calculation, discounts, bonuses, and multilingual invoice printing.</p>
//         <div className="grid grid-cols-3 gap-4">
//           {["/products/amis/standard20.png","/products/amis/standard21.png","/products/amis/Dashboard.png"].map((src,i)=>(
//             <div key={i} className="relative h-52 rounded-xl overflow-hidden">
//               <Image src={src} alt={`Sales ${i+1}`} fill className="object-cover"/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10">
//         <div className="grid grid-cols-3 gap-5">
//           {featureCards.map((card)=>(
//             <div key={card.title} className="relative rounded-xl overflow-hidden group h-52 cursor-pointer shadow-sm">
//               <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300"/>
//               <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent"/>
//               <div className="absolute bottom-0 left-0 right-0 px-4 py-3 bg-black/40 backdrop-blur-sm">
//                 <p className="text-white font-semibold text-sm">{card.title}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">How Our Sales Module Drives Revenue</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">Manage every stage of the sales cycle from order to payment with full transparency.</p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "Audit Trail",        desc: "Keep a complete record of all sales transactions and edits." },
//             { title: "Data Import/Export", desc: "Easily transfer sales data for seamless integration." },
//             { title: "Security and Privacy",desc: "Admin-controlled permissions for invoice editing and access." },
//             { title: "Multi-Language Print",desc: "Print invoices in English or Urdu as needed." },
//           ].map((c)=>(
//             <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{c.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function POSContent() {
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">Point of Sale (POS)</h1>
//         <p className="text-blue-100 text-base mb-8">Fast POS with barcode scanners, cash drawers, multi-store, online/offline mode.</p>
//         <div className="relative h-72 rounded-xl overflow-hidden">
//           <Image src="/products/amis/standard22.png" alt="POS Dashboard" fill className="object-cover"/>
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">How Our POS Streamlines Retail Operations</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">A complete retail solution that works online and offline, synced with your entire ERP.</p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "Audit Trail",        desc: "Complete record of all POS transactions and cashier actions." },
//             { title: "Data Import/Export", desc: "Sync POS data seamlessly with accounting and inventory modules." },
//             { title: "Security and Privacy",desc: "Secure logins and role-based access per cashier." },
//             { title: "Offline Mode",       desc: "Keep selling even without internet connectivity." },
//           ].map((c)=>(
//             <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{c.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function ReportsContent() {
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">Reports & Business Intelligence</h1>
//         <p className="text-blue-100 text-base mb-8">Over 100 detailed reports with advanced filtering and export to PDF, Excel, CSV, HTML and more.</p>
//         <div className="grid grid-cols-4 gap-4">
//           {["/products/amis/standard23.png","/products/amis/standard24.png","/products/amis/standard25.png","/products/amis/standard26.png"].map((src,i)=>(
//             <div key={i} className="relative h-44 rounded-xl overflow-hidden">
//               <Image src={src} alt={`Report ${i+1}`} fill className="object-cover"/>
//             </div>
//           ))}
//         </div>
//       </div>
//       <div className="bg-white px-10 py-10 border-t border-gray-100">
//         <div className="text-center mb-8">
//           <h2 className="text-3xl font-bold text-gray-900 mb-3">How Our Reports Drive Better Decisions</h2>
//           <p className="text-gray-500 max-w-2xl mx-auto text-sm">Get the right information at the right time to grow your business confidently.</p>
//         </div>
//         <div className="grid grid-cols-4 gap-5">
//           {[
//             { title: "Audit Trail",        desc: "Complete record of report generation and who accessed what." },
//             { title: "Data Export",        desc: "Export to PDF, Excel, Word, HTML, or image formats." },
//             { title: "Security and Privacy",desc: "Role-based access controls for sensitive financial reports." },
//             { title: "100+ Reports",       desc: "Comprehensive coverage across all business functions." },
//           ].map((c)=>(
//             <div key={c.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
//               <h4 className="font-semibold text-gray-800 mb-3">{c.title}</h4>
//               <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }

// function GenericContent({ title }: { title: string }) {
//   return (
//     <div className="space-y-0">
//       <div className="bg-[#1a6bb5] px-10 py-10">
//         <h1 className="text-4xl font-bold text-white mb-1">{title}</h1>
//         <p className="text-blue-100 text-base">This module content will be available soon.</p>
//       </div>
//       <div className="bg-white px-10 py-20 text-center text-gray-400">
//         <p>Content for <strong>{title}</strong> is coming soon.</p>
//       </div>
//     </div>
//   );
// }

// function renderContent(tab: string) {
//   switch (tab) {
//     case "Accounting":            return <AccountingContent />;
//     case "Inventory":             return <InventoryContent />;
//     case "Procurement/Purchase":  return <PurchaseContent />;
//     case "Sales":                 return <SalesContent />;
//     case "POS":                   return <POSContent />;
//     case "Reports":               return <ReportsContent />;
//     default:                      return <GenericContent title={tab} />;
//   }
// }

// // ─────────────────────────────────────────────────────────────────────────────
// // MAIN PAGE
// // ─────────────────────────────────────────────────────────────────────────────
// export default function AimsErpPage() {
//   const [activeTab, setActiveTab] = useState("Accounting");

//   return (
//     <div className={`min-h-screen ${inter.className}`}>
//       <Navbar />

//       <div className="flex" style={{ paddingTop: "64px" }}>

//         {/* ── LEFT BLUE SIDEBAR ─────────────────────────────────────────── */}
//         <aside
//           className="w-56 flex-shrink-0 bg-[#1a6bb5] sticky self-start overflow-y-auto z-10"
//           style={{ top: "64px", height: "calc(100vh - 64px)" }}
//         >
//           <nav className="py-4">
//             {sidebarItems.map((item) => (
//               <button
//                 key={item}
//                 onClick={() => setActiveTab(item)}
//                 className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-150 ${
//                   activeTab === item
//                     ? "bg-white text-[#1a6bb5] font-bold"
//                     : "text-white hover:bg-[#1559a0]"
//                 }`}
//               >
//                 {item}
//               </button>
//             ))}
//           </nav>
//         </aside>

//         {/* ── RIGHT CONTENT ─────────────────────────────────────────────── */}
//         <main className="flex-1 overflow-y-auto bg-gray-50">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={activeTab}
//               initial={{ opacity: 0, y: 10 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -10 }}
//               transition={{ duration: 0.2 }}
//             >
//               {renderContent(activeTab)}
//             </motion.div>
//           </AnimatePresence>
//         </main>

//       </div>

//       <ContactUs />
//       <Footer />
//     </div>
//   );
// }





"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
// import ContactUs from "../components/ContactUs";
import { Inter } from "next/font/google";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

const sidebarItems = [
  "Accounting",
  "Inventory",
  "Procurement/Purchase",
  "CRM",
  "Sales",
  "Tax Portal",
  "HR/Payroll",
  "Manufacturing",
  "Fixed Assets",
  "Administration",
  "POS",
  "Reports",
  "Budget",
  "Leasing",
  "Tenancy",
  "BI",
  "Project Management",
  "Download Brochure"
];

// ─────────────────────────────────────────────────────────────────────────────
// PINNED TOP STATS BAR — appears on every tab
// ─────────────────────────────────────────────────────────────────────────────
function PinnedStatsBar() {
  const stats = [
    { value: "17+",    label: "MODULES AVAILABLE" },
    { value: "10000+", label: "ACTIVE CLIENTS" },
    { value: "18+",    label: "YEARS EXPERIENCE" },
    { value: "24/7",   label: "SUPPORT SERVICE" },
  ];

  return (
    <div className="bg-[#00aeef] px-10 py-8">
      <h1 className="text-4xl font-bold text-white mb-1">AIMS ERP (Hybrid)</h1>
      <p className="text-blue-100 text-base mb-6">
        Manage your business anywhere with Desktop, Mobile and Web App
      </p>
      <div className="grid grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="bg-white/10 border border-white/20 rounded-md p-5 text-center text-white"
          >
            <p className="text-3xl font-bold">{s.value}</p>
            <p className="text-[11px] tracking-widest mt-1 text-blue-100 uppercase">{s.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ACCOUNTING CONTENT
// ─────────────────────────────────────────────────────────────────────────────
function AccountingContent() {
  const [activePoint, setActivePoint] = useState(0);

  const featureCards = [
    { title: "Chart of Accounts",     img: "/products/amis/standard5.png"  },
    { title: "Financial Management",  img: "/products/amis/standard6.png"  },
    { title: "Compliance Assurance",  img: "/products/amis/standard7.png"  },
    { title: "Expense Management",    img: "/products/amis/standard8.png"  },
    { title: "Accounting Reports",    img: "/products/amis/standard9.png"  },
    { title: "Payment Vouchers",      img: "/products/amis/standard10.png" },
    { title: "Receipts Vouchers",     img: "/products/amis/standard11.png" },
    { title: "Budget Management",     img: "/products/amis/standard12.png" },
    { title: "Data Access & Control", img: "/products/amis/standard13.png" },
  ];

  const keyPoints = [
    {
      num: 1,
      title: "Cash Flow",
      desc: "Track and manage the movement of money in and out of your business with clarity. Monitor real-time inflows and outflows to maintain healthy liquidity at all times.",
      img: "/products/amis/standard3.png",
    },
    {
      num: 2,
      title: "Bank/Cash Book",
      desc: "Maintain a complete record of all bank and cash transactions in one place. Reconcile accounts quickly and eliminate manual errors with automated bank feeds.",
      img: "/products/amis/standard4.png",
    },
    {
      num: 3,
      title: "General Ledger",
      desc: "A centralized record of all financial transactions across accounts. Drill down into any entry and trace the complete audit trail from source document to ledger.",
      img: "/products/amis/standard5.png",
    },
    {
      num: 4,
      title: "Trial Balance",
      desc: "Verify the accuracy of your records with an auto-generated trial balance. Instantly identify discrepancies and ensure debits and credits are always balanced.",
      img: "/products/amis/standard6.png",
    },
    {
      num: 5,
      title: "Profit and Loss",
      desc: "Get a clear picture of your revenue, costs, and net profitability. Compare across periods and cost centres to understand where your business is truly performing.",
      img: "/products/amis/standard7.png",
    },
    {
      num: 6,
      title: "Balance Sheet",
      desc: "Assess financial health with a snapshot of assets, liabilities and equity. Generate investor-ready reports at any point in time with a single click.",
      img: "/products/amis/standard8.png",
    },
  ];

  return (
    <div className="space-y-0">

      {/* 3×3 feature cards */}
      <div className="bg-white px-10 py-10">
        <div className="grid grid-cols-3 gap-5">
          {featureCards.map((card) => (
            <div
              key={card.title}
              className="relative rounded-xl overflow-hidden group h-90 cursor-pointer shadow-sm"
            >
              <Image
                src={card.img}
                alt={card.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/10 to-transparent" />
              <div className="absolute rounded-md bottom-4 left-4 right-4 px-4 py-2 bg-white/60 backdrop-blur-sm">
                <p className="text-black text-center font-semibold text-sm">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* AI-based accounting */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-72 rounded-xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/Dashboard.png" alt="AI Accounting" fill className="object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-4 leading-snug">
              Explore the potential of powerful AI-based accounting software
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              NetRoots Technologies is a hub of skilled software expertise. Our professionals carefully
              design the modules and the entire software with meticulous attention. We include all essential
              modules to ensure clients receive the necessary features and capabilities. Therefore, we deliver:
            </p>
            <div className="border border-gray-200 rounded-xl p-5 grid grid-cols-2 gap-y-4 gap-x-8">
              {["Module Customizations", "Diversity Leadership", "Personalized Experience", "Role-Based Access"].map((item) => (
                <p key={item} className="text-sm font-medium text-gray-700">{item}</p>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Numbered key points with hover — image changes per point */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10">
          {/* left: numbered list */}
          <div className="w-1/2 space-y-1">
            {keyPoints.map((point, i) => (
              <div
                key={point.num}
                onMouseEnter={() => setActivePoint(i)}
                className="flex items-start gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div
                  className={`flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                    activePoint === i
                      ? "bg-[#1a9ed4] border-[#1a9ed4] text-white"
                      : "border-gray-300 text-gray-500"
                  }`}
                >
                  {point.num}
                </div>
                <div>
                  <p className={`font-bold text-base ${activePoint === i ? "text-[#1a9ed4]" : "text-gray-800"}`}>
                    {point.title}
                  </p>
                  <AnimatePresence mode="wait">
                    {activePoint === i && (
                      <motion.p
                        key={point.num}
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-gray-500 mt-1 leading-relaxed overflow-hidden"
                      >
                        {point.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>

          {/* right: image changes on hover */}
          <div className="w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "320px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={keyPoints[activePoint].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image
                  src={keyPoints[activePoint].img}
                  alt={keyPoints[activePoint].title}
                  fill
                  className="object-cover rounded-xl"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* Optimize heading + 2 images */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Optimize Every Aspect of Your Business Management
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto text-sm leading-relaxed">
            Our carefully coded ERP software offers the best experience in all aspects of accounting. It can be
            customized to meet your specific needs, making it perfect in every way. Our streamlined processes enable
            effective coordination and help maintain strong relationships.
          </p>
        </div>
        {/* <div className="grid grid-cols-2 gap-6">
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/products/amis/standard4.png" alt="Business management 1" fill className="object-cover" />
          </div>
          <div className="relative h-64 rounded-xl overflow-hidden">
            <Image src="/products/amis/standard14.png" alt="Business management 2" fill className="object-cover" />
          </div>
        </div> */}
        <div className="grid grid-cols-2 gap-6">
  <div>
    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image src="/products/amis/standard4.png" alt="Business management 1" fill className="object-cover" />
    </div>
    <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">
      Effectively manages your relationships with business partners
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Automation in the leading accounting software in Pakistan helps customers efficiently manage interactions with vendors, sales and collection agents, and clients. Our streamlined processes enable effective coordination and foster long-lasting relationships.
    </p>
  </div>

  <div>
    <div className="relative h-64 rounded-xl overflow-hidden">
      <Image src="/products/amis/standard14.png" alt="Business management 2" fill className="object-cover" />
    </div>
    <h3 className="font-bold text-gray-900 text-lg mt-4 mb-2">
      Effectively enhance your documentation for legal concerns
    </h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Our ERP software automates documentation with easy invoicing and streamlined processes. It prepares essential documents, including bookkeeping records, all with a simple command. This functionality is especially helpful for resolving legal issues and managing related concerns efficiently.
    </p>
  </div>
</div>
      </div>

      {/* 2-column image + caption */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="grid grid-cols-2 gap-8">
          <div>
            <div className="relative h-56 rounded-xl overflow-hidden mb-5">
              <Image src="/products/amis/standard15.png" alt="Future decisions" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Allows you to make decisions regarding future plans
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              With accurate record-keeping and automation tools, our customers gain clear insights into future
              business prospects. Our accounting software enables better and more precise decision-making for
              business planning, tailored for charities and other organizations.
            </p>
          </div>
          <div>
            <div className="relative h-56 rounded-xl overflow-hidden mb-5">
              <Image src="/products/amis/standard16.png" alt="Taxation" fill className="object-cover" />
            </div>
            <h3 className="font-bold text-gray-900 text-lg mb-2">
              Our solution makes taxation simple and practical across all business activities.
            </h3>
            <p className="text-sm text-gray-500 leading-relaxed">
              The software carefully tracks every transaction and calculates taxation accordingly, saving you
              valuable time and effort. Whenever needed, simply use the modules to access and retrieve stored
              information from the database for your use.
            </p>
          </div>
        </div>
      </div>

      {/* How ERP streamlines + 4 process cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How Our ERP Accounting Software Streamlines Accounting in Pakistan
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our Accounting ERP software solutions for small businesses in Pakistan help you achieve the
            desired financial outcomes. To get started, simply follow this easy process:
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { title: "Audit Trail",        desc: "Keep a complete record of all actions to ensure accountability and transparency." },
            { title: "Data Import/Export", desc: "Easily transfer data in and out of the system for seamless integration." },
            { title: "Security and Privacy",desc: "Protect sensitive business information with robust security measures." },
            { title: "Enhance",            desc: "Continuously improve system performance with regular updates and features." },
          ].map((card) => (
            <div key={card.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-800 mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// OTHER TAB CONTENTS
// ─────────────────────────────────────────────────────────────────────────────

function InventoryContent() {
  const [activeFeature, setActiveFeature] = useState(0);

  const features = [
    { title: "Stock Tracking", desc: "Track inventory in real-time across warehouses and locations, preventing shortages or overstocking.", img: "/products/amis/standard14.png" },
    { title: "Barcode Scanning", desc: "Easily scan products with barcodes or QR codes to update stock and reduce human errors.", img: "/products/amis/standard15.png" },
    { title: "Inventory Reports", desc: "Generate detailed reports on stock levels, purchases, sales, and product performance for better insights.", img: "/products/amis/standard16.png" },
    { title: "Reorder Alerts", desc: "Set automated reorder alerts to maintain optimal stock levels and prevent stockouts.", img: "/products/amis/standard17.png" },
    { title: "Batch Management", desc: "Manage products by batch, expiry date, or serial number for traceability and compliance.", img: "/products/amis/standard4.png" },
    { title: "Location Tracking", desc: "Track inventory across multiple warehouses with a clear overview of product distribution.", img: "/products/amis/standard5.png" },
  ];

  const whyChoose = [
    { title: "Optimize Inventory Decisions", desc: "Gain insights to make informed inventory and procurement decisions based on accurate real-time data.", img: "/products/amis/standard14.png" },
    { title: "Reduce Wastage", desc: "Prevent product losses and overstocking by maintaining precise stock levels and expiry tracking.", img: "/products/amis/standard15.png" },
    { title: "Simplify Reporting", desc: "Generate automated reports to streamline audits, financial planning, and management decisions.", img: "/products/amis/standard16.png" },
    { title: "Multi-location Management", desc: "Easily manage inventory across multiple warehouses or retail stores from a single dashboard.", img: "/products/amis/standard17.png" },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: Hero */}
      <div className="bg-[#1a6bb5] mx-7 my-8 px-10 py-12 flex gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-4 leading-snug">
            AIMS ERP (Hybrid) Inventory Management
          </h1>
          <p className="text-blue-100 text-base leading-relaxed">
            Manage your stock efficiently with our modern inventory system designed to streamline operations and prevent losses.
          </p>
        </div>
        <div className="flex-1 relative h-64 rounded-xl overflow-hidden">
          <Image src="/products/amis/standard14.png" alt="Inventory Hero" fill className="object-cover" />
        </div>
      </div>

      {/* BLOCK 2: ERP Inventory Features — 3×2 cards with title + desc below */}
      <div className="bg-white px-10 py-10">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">ERP (Hybrid) Inventory Features</h2>
        <div className="grid grid-cols-3 gap-6">
          {features.map((f) => (
            <div key={f.title} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-48">
                <Image src={f.img} alt={f.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h3 className="font-bold text-[#1a6bb5] text-lg mb-2">{f.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Feature Details Preview — left image, right hoverable list */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Feature Details Preview</h2>
        <div className="flex gap-10">
          {/* left image — changes on hover */}
          <div className="w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "320px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={features[activeFeature].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={features[activeFeature].img} alt={features[activeFeature].title} fill className="object-cover rounded-xl" />
              </motion.div>
            </AnimatePresence>
          </div>
          {/* right list */}
          <div className="w-1/2 space-y-1">
            {features.map((f, i) => (
              <div
                key={f.title}
                onMouseEnter={() => setActiveFeature(i)}
                className="p-4 rounded-lg cursor-pointer hover:bg-gray-50 border-b border-gray-100 transition-colors"
              >
                <p className={`font-bold text-base ${activeFeature === i ? "text-[#1a6bb5]" : "text-gray-800"}`}>
                  {f.title}
                </p>
                <AnimatePresence mode="wait">
                  {activeFeature === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-gray-500 mt-1 leading-relaxed overflow-hidden"
                    >
                      {f.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCK 4: Why Choose — 4 cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">
          Why Choose AIMS ERP Inventory (Hybrid)
        </h2>
        <div className="grid grid-cols-4 gap-6">
          {whyChoose.map((c) => (
            <div key={c.title} className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-44">
                <Image src={c.img} alt={c.title} fill className="object-cover" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#1a6bb5] mb-2">{c.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 5: Inventory Workflow — 4 step cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Inventory Workflow</h2>
        <div className="grid grid-cols-4 gap-7">
          {[
            { title: "Add Inventory",     desc: "Enter products, quantities, and details into the system." },
            { title: "Monitor Stock",     desc: "Track stock levels and movements in real-time." },
            { title: "Manage Orders",     desc: "Handle purchase orders and sales efficiently." },
            { title: "Generate Reports",  desc: "Analyze inventory data to improve business decisions." },
          ].map((step, i) => (
            <div key={step.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              {/* <div className="w-8 h-8 rounded-full bg-[#1a6bb5] text-white flex items-center justify-center font-bold text-sm mb-3">
                {i + 1}
              </div> */}
              <h4 className="font-bold text-[#1a6bb5] text-center mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 text-center leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function PurchaseContent() {
  const [activeTab, setActiveTab] = useState("Auto Purchase Order");

  const poTabs = ["Auto Purchase Order", "Manual purchase order", "Approval Workflow", "P/O by Project"];

  const featureCards = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
        </svg>
      ),
      title: "Vendors And Contracts Management",
      desc: "Centralize vendor profiles and contract terms to maintain reliable partnerships. Monitor renewals and compliance to reduce operational risks.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
      ),
      title: "Purchase Requisition (P/R)",
      desc: "Streamline internal requests for goods and services with clear approval workflows. Improve transparency and control spending across departments.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
      title: "Request For Quotation (RFQ)",
      desc: "Send and track multiple vendor quotations efficiently. Compare prices and terms to make informed purchasing decisions.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007z" />
        </svg>
      ),
      title: "Purchase Order (P/O)",
      desc: "Create, approve, and dispatch purchase orders accurately. Keep records to ensure full procurement accountability.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
        </svg>
      ),
      title: "Goods Receipt Note (GRN)",
      desc: "Verify and document received goods against purchase orders. Track shortages and ensure quality inspection at receipt.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Inward Gate Pass (I/G)",
      desc: "Authorize and record incoming goods at the facility gate. Ensure proper inspection and documentation for every delivery.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
        </svg>
      ),
      title: "Purchase Invoicing",
      desc: "Record and match vendor invoices with POs and GRNs. Ensure accurate payment processing to maintain good relationships.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m-3-2.818l.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
      title: "Debit And Credit Note",
      desc: "Issue debit and credit notes for returns or adjustments. Maintain accurate financial records and reduce vendor disputes.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75" />
        </svg>
      ),
      title: "Accounts Payable (A/P)",
      desc: "Manage vendor balances and schedule payments accurately. Support cash flow planning and improve vendor trust.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      ),
      title: "A/P Aging",
      desc: "Analyze overdue payments by age brackets to prioritize schedules. Avoid late fees and maintain strong supplier relations.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
        </svg>
      ),
      title: "Product Management",
      desc: "Maintain a complete catalog of purchased items with accurate details. Optimize reordering to prevent stockouts.",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
        </svg>
      ),
      title: "Barcode And QR Code Design & Printing",
      desc: "Generate and print barcodes or QR codes for efficient warehouse tracking. Reduce human error during stock handling.",
    },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: 3×4 Feature Cards with icons */}
      <div className="bg-white px-10 py-10">
        <div className="grid grid-cols-3 gap-5">
          {featureCards.map((card) => (
            <div key={card.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <div className="text-gray-700 mb-4">{card.icon}</div>
              <h4 className="font-bold text-gray-900 text-base mb-2">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Empower Your Procurement Workflow */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-80 rounded-xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard4.png" alt="Procurement Workflow" fill className="object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4 leading-snug">
              Empower Your Procurement Workflow
            </h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Our cloud ERP offers additional tools that simplify procurement — from stock relocation to payment tracking. Each feature is engineered to support transparency and smooth operation across your supply chain.
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Inventory Levels", "Stock Movement", "Inventory Aging", "Inventory Audit"].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a6bb5]" />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3: Tabbed PO section with image below */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Packing game-changing tools in ERP procurement software
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Purchasing raw or semi-manufactured materials is not a wild guess. This should be carried out with the right management. Look to do it? Digitally?
          </p>
        </div>
        {/* Tab pills */}
        <div className="flex items-center justify-center gap-2 mb-6 border border-gray-200 rounded-full p-1 max-w-xl mx-auto">
          {poTabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                activeTab === tab
                  ? "bg-[#1a6bb5] text-white"
                  : "text-gray-600 hover:text-[#1a6bb5]"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
        {/* Image below tabs */}
        <div className="relative h-72 rounded-xl overflow-hidden">
          <Image src="/products/amis/standard5.png" alt="Purchase Order" fill className="object-cover" />
        </div>
      </div>

      {/* BLOCK 4: Left image + right 3 text blocks */}
      <div className="bg-blue-50 px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-start">
          <div className="w-1/2 relative h-80 rounded-xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard9.png" alt="Product Management" fill className="object-cover" />
          </div>
          <div className="w-1/2 space-y-6">
            {[
              { title: "Product Management", desc: "All products are accurately added, categorized, and tracked in the system. Procurement and purchase orders are monitored to ensure stock levels are always up to date." },
              { title: "Procurement Reporting", desc: "The system generates real-time reports on all procurement activities including purchase orders, vendor bills, stock ledgers, and payment tracking, ensuring complete transparency." },
              { title: "Vendor & Partner Management", desc: "Maintain accurate records of vendors, suppliers, and business partners. The software helps track purchase histories, generate notifications, and ensures smooth collaboration for procurement processes." },
            ].map((item) => (
              <div key={item.title}>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCK 5: How Our ERP Streamlines + 4 workflow cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            How Our ERP (Hybrid) Procurement Software Streamlines Processes
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our Procurement ERP (Hybrid) helps businesses worldwide achieve maximum efficiency and accuracy in purchasing and inventory management. Here's how it simplifies your workflow:
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { title: "Product Sync",          desc: "Every product is synced with sales and purchase records, ensuring real-time accuracy across all departments." },
            { title: "Procurement Reporting", desc: "Generate accurate reports including stock ledgers, sales logs, bills, and tax claims — on demand." },
            { title: "Vendor Management",     desc: "Maintain healthy vendor relationships with proper documentation, messaging, and performance tracking." },
            { title: "Inventory Tracking",    desc: "Track stock movement, avoid shortages, and maintain transparency across warehouses and stores." },
          ].map((c, i) => (
            <div key={c.title} className="border border-[#1a6bb5]/30 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold h-10 text-[14px] text-center text-gray-800 mb-2">{c.title}</h4>
              <p className="text-sm text-center text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function SalesContent() {
  const [activeStep, setActiveStep] = useState(0);

  // Top 3×3 flip cards
  const flipCards = [
    { title: "Sales Inquiry",     back: "Record and manage customer inquiries quickly to capture every potential lead." },
    { title: "Quotation",         back: "Create precise quotations fast and send them to clients for approval." },
    { title: "Sales Order",       back: "Convert approved quotations into confirmed sales orders ready for processing." },
    { title: "Delivery Order",    back: "Generate delivery documents and coordinate timely shipment of products to clients." },
    { title: "Debtor Price Note", back: "Issue accurate price notes to debtors and maintain transparent billing records." },
    { title: "Sales Invoice",     back: "Create and send professional invoices to ensure timely and accurate billing." },
    { title: "Sales Return",      back: "Handle product returns efficiently and update stock and accounts automatically." },
    { title: "Sales Order Status",back: "Track real-time status of every sales order from creation to delivery." },
    { title: "A/R Payment",       back: "Manage accounts receivable and track customer payments to maintain healthy cash flow.", highlight: true },
  ];

  // Numbered steps (hover interaction)
  const steps = [
    { num: 1, title: "Inquiry",      desc: "Record and manage customer inquiries quickly to capture every potential lead." },
    { num: 2, title: "Quotation",    desc: "Create precise quotations fast and send them to clients for approval." },
    { num: 3, title: "Order",        desc: "Convert approved quotations into confirmed sales orders ready for fulfillment." },
    { num: 4, title: "Delivery",     desc: "Generate delivery documents and coordinate timely shipment of products." },
    { num: 5, title: "Debtor Note",  desc: "Issue accurate price notes to debtors and maintain transparent billing." },
    { num: 6, title: "Invoice",      desc: "Create and send professional invoices to ensure timely and accurate payments." },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: 3×3 Flip Cards */}
      <div className="bg-white px-10 py-10">
        <style>{`
          .flip-card { perspective: 1000px; }
          .flip-card-inner { transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
          .flip-card:hover .flip-card-inner { transform: rotateY(180deg); }
          .flip-card-front, .flip-card-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
          .flip-card-back { transform: rotateY(180deg); }
        `}</style>
        <div className="grid grid-cols-3 gap-5">
          {flipCards.map((card) => (
            <div key={card.title} className="flip-card h-48 cursor-pointer">
              <div className="flip-card-inner w-full h-full">
                {/* Front */}
                <div className="flip-card-front absolute inset-0 rounded-2xl border bg-white border-gray-200 shadow-sm flex items-center justify-center">
                    <p className="text-lg font-semibold text-center px-4 text-gray-800">
                        {card.title}
                    </p>
                </div>
                {/* Back */}
                <div className={`flip-card-back absolute inset-0 rounded-2xl flex flex-col items-center justify-center px-6 text-center ${card.highlight ? "bg-[#0090cc]" : "bg-[#1a6bb5]"}`}>
                  <p className="text-white font-bold text-base mb-2">{card.title}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{card.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Left image + right text with 2×2 grid */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-80 rounded-2xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard4.png" alt="Sales Management" fill className="object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Unlock the Power of Intelligent Sales Management</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">
              Our Sales ERP software empowers your team to manage prospects, streamline sales processes, and boost revenue. We deliver the essential modules to maximize sales effectiveness:
            </p>
            <div className="grid grid-cols-2 gap-3">
              {["Bulk Price Change", "Sales Target & Analysis", "Job Order & Schemas", "On-Demand Reporting"].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a6bb5] flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3: Numbered hover steps + right image (same as Accounting pattern) */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10">
          <div className="w-1/2 space-y-1">
            {steps.map((step, i) => (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(i)}
                className="flex items-start gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                  activeStep === i ? "bg-[#00aeef] border-[#00aeef] text-white" : "border-gray-300 text-gray-500"
                }`}>
                  {step.num}
                </div>
                <div>
                  <p className={`font-bold text-base ${activeStep === i ? "text-[#00aeef]" : "text-gray-800"}`}>
                    {step.title}
                  </p>
                  <AnimatePresence mode="wait">
                    {activeStep === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-gray-500 mt-1 leading-relaxed overflow-hidden"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "320px" }}>
            <Image src="/products/amis/standard5.png" alt="Sales step visual" fill className="object-cover rounded-xl" />
          </div>
        </div>
      </div>

      {/* BLOCK 4: Enhance Every Aspect — 2 large image+caption cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Enhance Every Aspect of Your Sales Management</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our Sales ERP software provides comprehensive modules to optimize workflows, boost team performance, and improve client satisfaction.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6">
          {[
            { title: "Manage Product Returns",    desc: "Handle returns efficiently to maintain customer trust and keep records accurate.",         img: "/products/amis/standard14.png" },
            { title: "Order Tracking Overview",   desc: "Keep track of all orders in real-time, ensuring visibility and accountability.",           img: "/products/amis/standard15.png" },
            { title: "Receivables Management",    desc: "Monitor outstanding customer payments and manage receivables for healthy cash flow.",       img: "/products/amis/standard16.png" },
            { title: "Sales Performance Insights",desc: "Evaluate sales targets versus actual results to improve strategy and maximize revenue.",   img: "/products/amis/standard17.png" },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="relative h-52 mx-4 my-3">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <div className="p-5">
                <h4 className="font-bold text-gray-900 text-lg mb-2">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 5: How Our Sales ERP Optimizes — 4 workflow cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1a6bb5] mb-3">How Our Sales ERP Software Optimizes Your Business</h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-sm leading-relaxed">
            Our Sales ERP solutions streamline lead management, sales tracking, reporting, and team performance. Follow this simple workflow to get started:
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { title: "Client Inquiries",      desc: "Collect and organize all incoming client inquiries to kickstart the sales workflow efficiently." },
            { title: "Quotation Preparation", desc: "Create and send accurate quotations to prospects quickly, ensuring clarity and professionalism." },
            { title: "Order Confirmation",    desc: "Convert approved quotations into confirmed sales orders ready for processing and fulfillment." },
            { title: "Dispatch Management",   desc: "Generate delivery documents and coordinate timely shipment of products to clients." },
          ].map((c, i) => (
            <div key={c.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[14px] text-center h-10 text-gray-800 mb-2">{c.title}</h4>
              <p className="text-[12px] text-gray-500 text-center leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function TaxPortalContent() {
  const portalCards = [
    {
      title: "Sales Tax Portal",
      desc: "Easily manage sales tax submissions, returns, and compliance directly through the portal.",
      img: "/products/amis/standard5.png",
    },
    {
      title: "GST Info",
      desc: "Access GST records, track invoices, and ensure proper filing with accurate data.",
      img: "/products/amis/standard6.png",
    },
    {
      title: "Withholding Tax",
      desc: "Track and manage withholding tax payments, deductions, and compliance efficiently.",
      img: "/products/amis/standard7.png",
    },
    {
      title: "POS FBR Integration",
      desc: "Easily connect your POS with the FBR Tax Portal to ensure compliance and automated reporting.",
      img: "/products/amis/standard8.png",
    },
  ];

  const keyFeatures = [
    { title: "Centralized Tax Management", desc: "Handle all your tax-related tasks from a single, secure platform to save time and reduce errors." },
    { title: "Automated Compliance",       desc: "Ensure timely submission of tax returns and maintain full compliance with up-to-date regulations." },
    { title: "Detailed Reporting",         desc: "Generate comprehensive reports for all tax activities to stay informed and audit-ready." },
    { title: "User-Friendly Interface",    desc: "Navigate easily through modules with clear workflows and intuitive dashboards." },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: 4 image cards with hover-grow title */}
      <div className="bg-white px-10 py-10 mt-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-[#1a6bb5] mb-2">Seamless FBR Tax Portal Integration</h2>
        </div>
        <div className="grid grid-cols-3 gap-8">
          {portalCards.map((card) => (
            <div
              key={card.title}
              className="group bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-lg transition-all duration-300"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={card.img}
                  alt={card.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-5">
                {/* Title grows on hover */}
                <h4 className="font-bold text-center text-[#1a6bb5] text-base transition-all duration-300 group-hover:text-xl group-hover:tracking-wide">
                  {card.title}
                </h4>
                <p className="text-sm text-center text-gray-500 leading-relaxed mt-2 transition-all duration-300 group-hover:text-gray-700">
                  {card.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Key Features 2×2 grid with hover-grow titles */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Key Features of Tax Portal</h2>
        <div className="grid grid-cols-2 gap-5">
          {keyFeatures.map((f) => (
            <div
              key={f.title}
              className="group bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md hover:border-[#1a6bb5]/30 transition-all duration-300 cursor-default"
            >
              {/* Title grows smoothly on hover */}
              <h4 className="font-bold text-[#1a6bb5] text-base mb-2 transition-all duration-300 group-hover:text-xl group-hover:tracking-wide">
                {f.title}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed transition-all duration-300 group-hover:text-gray-700">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function HRPayrollContent() {
  const coreModules = [
    { title: "Employees",         desc: "Maintain detailed employee records efficiently.",              img: "/products/amis/standard14.png" },
    { title: "Designation",       desc: "Manage roles and reporting hierarchy seamlessly.",             img: "/products/amis/standard15.png" },
    { title: "Employee Types",    desc: "Classify employees for precise payroll handling.",             img: "/products/amis/standard16.png" },
    { title: "Departments",       desc: "Organize workforce by departments for clarity.",               img: "/products/amis/standard17.png" },
    { title: "Adv/Loan Application", desc: "Streamline loan and advance applications.",                img: "/products/amis/standard4.png"  },
    { title: "Employee Advances", desc: "Track and approve employee advances transparently.",           img: "/products/amis/standard5.png"  },
    { title: "Employee Loan",     desc: "Manage loans including repayments and interest.",             img: "/products/amis/standard6.png"  },
    { title: "Attendance",        desc: "Monitor attendance, overtime, and leaves accurately.",        img: "/products/amis/standard7.png"  },
    { title: "Timesheet",         desc: "Track working hours accurately with a timesheet.",            img: "/products/amis/standard8.png"  },
  ];

  const exploreModules = [
    { num: 1, title: "Manage Employees",  img: "/products/amis/standard14.png" },
    { num: 2, title: "Job Roles",         img: "/products/amis/standard15.png" },
    { num: 3, title: "Staff Categories",  img: "/products/amis/standard16.png" },
    { num: 4, title: "Departments",       img: "/products/amis/standard17.png" },
    { num: 5, title: "Adv/Loan",          img: "/products/amis/standard4.png"  },
    { num: 6, title: "Employee Advances", img: "/products/amis/standard5.png"  },
    { num: 7, title: "Employee Loans",    img: "/products/amis/standard6.png"  },
    { num: 8, title: "Track Attendance",  img: "/products/amis/standard7.png"  },
    { num: 9, title: "Attendance Logs",   img: "/products/amis/standard8.png"  },
  ];

  const benefits = [
    { title: "Automated Payroll",      desc: "Compute salaries, deductions, and taxes automatically or manually." },
    { title: "Compliance Assurance",   desc: "Ensure all payroll follows local laws and regulations." },
    { title: "Reports & Analytics",    desc: "Generate insightful reports for salaries, contributions, and deductions." },
    { title: "Employee Self-Service",  desc: "Employees can view payslips, track attendance, and apply for loans." },
  ];

  const corePayroll = [
    { title: "Payroll Voucher", desc: "Prepare payroll vouchers for accurate recordkeeping." },
    { title: "Tasks",           desc: "Assign payroll-related tasks efficiently to your HR team." },
    { title: "Allowances",      desc: "Manage housing, medical, transport, and other allowances." },
    { title: "Contributions",   desc: "Track employer & employee contributions to social schemes." },
    { title: "Deductions",      desc: "Handle taxes, loans, and other deductions accurately." },
  ];

  const workflow = [
    { title: "Holiday Management",      desc: "Set company holidays to calculate payroll correctly." },
    { title: "Import Attendance",       desc: "Upload attendance from biometric devices or spreadsheets." },
    { title: "Leave Management",        desc: "Manage leaves, approvals, and accruals efficiently." },
    { title: "Resignation & Termination", desc: "Process resignations and terminations smoothly." },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: Payroll Core Modules — image cards with overlay text */}
      <div className="bg-white px-10 py-10 mt-12">
        <h2 className="text-3xl font-extrabold text-[#1a6bb5] text-center mb-8">Payroll Core Modules</h2>
        <div className="grid grid-cols-3 gap-5">
          {coreModules.map((card) => (
            <div key={card.title} className="group relative rounded-2xl overflow-hidden h-62 cursor-pointer shadow-sm hover:shadow-md transition-shadow">
              <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-bold text-base">{card.title}</p>
                <p className="text-gray-200 text-xs leading-relaxed mt-1">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Payroll Features & Benefits — 2×2 cyan cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Payroll Features & Benefits</h2>
        <div className="grid grid-cols-2 gap-10">
          {benefits.map((b) => (
            <div key={b.title} className="bg-[#00aeef] rounded-2xl p-6 hover:bg-[#0099d4] transition-colors">
              <h4 className="font-bold text-white text-lg mb-2">{b.title}</h4>
              <p className="text-blue-50 text-sm leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Explore Payroll Modules — numbered cards with image */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Explore Payroll Modules</h2>
        <div className="grid grid-cols-3 gap-8">
          {exploreModules.map((m) => (
            <div key={m.num} className="border border-gray-200 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex justify-center pt-5">
                <div className="w-12 h-12 rounded-full bg-[#00aeef] flex items-center justify-center text-white font-bold text-lg">
                  {m.num}
                </div>
              </div>
              <p className="text-center font-bold text-[#1a6bb5] mt-3 mb-3 px-4">{m.title}</p>
              <div className="relative h-40 mx-6 my-4">
                <Image src={m.img} alt={m.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 4: Core Payroll Components — 3+2 white cards with blue title */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Core Payroll Components</h2>
        <div className="grid grid-cols-3 gap-5 mb-5">
          {corePayroll.slice(0, 3).map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#1a6bb5] text-base mb-2">{c.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-3 gap-5">
          {corePayroll.slice(3).map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#1a6bb5] text-base mb-2">{c.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 5: Payroll Process Workflow — 4 light-blue cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Payroll Process Workflow</h2>
        <div className="grid grid-cols-4 gap-5">
          {workflow.map((w) => (
            <div key={w.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 hover:shadow-md transition-shadow text-center">
              <h4 className="font-bold text-[#1a6bb5] text-base mb-2">{w.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


// ─────────────────────────────────────────────────────────────────────────────
// MANUFACTURING CONTENT
// ─────────────────────────────────────────────────────────────────────────────
function ManufacturingContent() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [activeHighlight, setActiveHighlight] = useState(0);

  const autoSlides = [
    { title: "BOM Setup",           desc: "Easily configure bills of materials with accurate details for production.",          img: "/products/amis/standard14.png" },
    { title: "Work Order",          desc: "Generate and manage work orders efficiently with real-time tracking.",               img: "/products/amis/standard15.png" },
    { title: "Production Tracking", desc: "Track production output seamlessly with detailed status insights.",                  img: "/products/amis/standard16.png" },
    { title: "Production Variance", desc: "Analyze production variances to control cost and improve efficiency.",              img: "/products/amis/standard17.png" },
  ];

  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % autoSlides.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const moduleCards = [
    { title: "BOM Setup",            desc: "Easily configure bills of materials with accurate details for production.",         img: "/products/amis/standard14.png" },
    { title: "Work Order",           desc: "Generate and manage work orders efficiently with real-time tracking.",              img: "/products/amis/standard15.png" },
    { title: "Production/Finish G",  desc: "Streamline finished goods tracking and ensure accurate inventory control.",         img: "/products/amis/standard16.png" },
    { title: "Production Variance",  desc: "Analyze production variances to control cost and improve efficiency.",             img: "/products/amis/standard17.png" },
    { title: "Machines",             desc: "Monitor machine performance and schedule preventive maintenance.",                  img: "/products/amis/standard4.png"  },
    { title: "Production Planner",   desc: "Plan and optimize production schedules with dynamic resource allocation.",         img: "/products/amis/standard5.png"  },
  ];

  const iconCards = [
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M10.343 3.94c.09-.542.56-.94 1.11-.94h1.093c.55 0 1.02.398 1.11.94l.149.894c.07.424.384.764.78.93.398.164.855.142 1.205-.108l.737-.527a1.125 1.125 0 011.45.12l.773.774c.39.389.44 1.002.12 1.45l-.527.737c-.25.35-.272.806-.107 1.204.165.397.505.71.93.78l.893.15c.543.09.94.56.94 1.109v1.094c0 .55-.397 1.02-.94 1.11l-.893.149c-.425.07-.765.383-.93.78-.165.398-.143.854.107 1.204l.527.738c.32.447.269 1.06-.12 1.45l-.774.773a1.125 1.125 0 01-1.449.12l-.738-.527c-.35-.25-.806-.272-1.203-.107-.397.165-.71.505-.781.929l-.149.894c-.09.542-.56.94-1.11.94h-1.094c-.55 0-1.019-.398-1.11-.94l-.148-.894c-.071-.424-.384-.764-.781-.93-.398-.164-.854-.142-1.204.108l-.738.527c-.447.32-1.06.269-1.45-.12l-.773-.774a1.125 1.125 0 01-.12-1.45l.527-.737c.25-.35.273-.806.108-1.204-.165-.397-.505-.71-.93-.78l-.894-.15c-.542-.09-.94-.56-.94-1.109v-1.094c0-.55.398-1.02.94-1.11l.894-.149c.424-.07.765-.383.93-.78.165-.398.143-.854-.107-1.204l-.527-.738a1.125 1.125 0 01.12-1.45l.773-.773a1.125 1.125 0 011.45-.12l.737.527c.35.25.807.272 1.204.107.397-.165.71-.505.78-.929l.15-.894z" /><path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /></svg>,
      title: "Machine Management",    desc: "Monitor and schedule machines efficiently to maximize uptime.",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" /></svg>,
      title: "Production Logistics",  desc: "Coordinate material movement and product delivery seamlessly.",
    },
    {
      icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8"><path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" /></svg>,
      title: "Performance Analytics", desc: "Track KPIs to optimize production efficiency and reduce waste.",
    },
  ];

  const workflowSteps = [
    { num: 1, title: "Production Planning", desc: "Create accurate schedules and plan resources to match demand." },
    { num: 2, title: "Shop Floor Control",  desc: "Monitor tasks, machines, and operators in real time for better flow." },
    { num: 3, title: "Inventory & Materials",desc: "Track raw materials, semi-finished, and finished goods with precision." },
    { num: 4, title: "Quality & Delivery",  desc: "Ensure product quality and meet deadlines with streamlined delivery." },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: 3×2 Module Cards */}
      <div className="bg-white px-10 py-10">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-2">Manufacturing Overview</h2>
        <p className="text-gray-500 text-center text-sm mb-8">Manage every aspect of your manufacturing process from planning to production with ease.</p>
        <div className="grid grid-cols-3 gap-6">
          {moduleCards.map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow group">
              <div className="relative h-48">
                <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-4">
                <h4 className="font-bold text-[#1a6bb5] text-base mb-1">{card.title}</h4>
                <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Auto-rotating highlights (4 sec each, smooth fade) */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">Manufacturing Highlights</h2>
            <p className="text-gray-500 text-sm mb-6">Explore how ERP simplifies your manufacturing lifecycle from BOM to final product.</p>
            <AnimatePresence mode="wait">
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.5 }}
              >
                <h3 className="text-[#1a6bb5] font-bold text-xl mb-2">{autoSlides[activeSlide].title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{autoSlides[activeSlide].desc}</p>
              </motion.div>
            </AnimatePresence>
            {/* dot indicators */}
            <div className="flex gap-2 mt-6">
              {autoSlides.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveSlide(i)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${activeSlide === i ? "bg-[#1a6bb5] w-6" : "bg-gray-300"}`}
                />
              ))}
            </div>
          </div>
          <div className="w-1/2 relative rounded-2xl overflow-hidden" style={{ height: "320px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={autoSlides[activeSlide].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
              >
                <Image src={autoSlides[activeSlide].img} alt={autoSlides[activeSlide].title} fill className="object-cover rounded-2xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BLOCK 3: Left image + right text with 2×2 pill grid */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-72 rounded-2xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard6.png" alt="Streamline Workflow" fill className="object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Streamline Your Manufacturing Workflow</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">Our ERP manufacturing module streamlines operations from material planning to production tracking, maximizing efficiency and visibility while reducing waste.</p>
            <div className="grid grid-cols-2 gap-3">
              {["Material Requirement Planning","Inventory Tracking","Supplier Management","Cost Optimization"].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a6bb5] flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 4: Full-width image + 3 icon cards below */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Optimize Your Manufacturing Process</h2>
          <p className="text-gray-500 text-sm">Streamline production, track machines, and analyze performance for better efficiency.</p>
        </div>
        <div className="relative h-72 rounded-2xl overflow-hidden mb-8">
          <Image src="/products/amis/standard7.png" alt="Manufacturing Process" fill className="object-cover" />
        </div>
        <div className="grid grid-cols-3 gap-5">
          {iconCards.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-xl p-6 hover:shadow-md transition-shadow">
              <div className="text-gray-700 mb-3">{c.icon}</div>
              <h4 className="font-bold text-gray-800 mb-2">{c.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 5: Workflow steps with connected numbers */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-3">Manufacturing Workflow Made Simple</h2>
        <p className="text-gray-500 text-center text-sm max-w-2xl mx-auto mb-10">AIMS ERP helps you control, monitor, and optimize the entire manufacturing cycle. From planning to final goods, every stage is connected for better efficiency and performance.</p>
        {/* connected number row */}
        <div className="flex items-center justify-center mb-8 gap-0">
          {workflowSteps.map((step, i) => (
            <div key={step.num} className="flex items-center">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-[#1a6bb5] flex items-center justify-center text-[#1a6bb5] font-bold text-lg">
                  {step.num}
                </div>
              </div>
              {i < workflowSteps.length - 1 && <div className="w-24 h-0.5 bg-gray-300" />}
            </div>
          ))}
        </div>
        <div className="grid grid-cols-4 gap-5">
          {workflowSteps.map((step) => (
            <div key={step.num} className="border border-gray-200 rounded-xl p-5 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// FIXED ASSETS CONTENT  (scroll-reveal on first visit)
// ─────────────────────────────────────────────────────────────────────────────
function FixedAssetsContent() {
  const exploreModules = [
    { num: 1, title: "Assets",         img: "/products/amis/standard14.png" },
    { num: 2, title: "Asset Service",  img: "/products/amis/standard15.png" },
    { num: 3, title: "Asset Disposal", img: "/products/amis/standard16.png" },
    { num: 4, title: "Asset Audit",    img: "/products/amis/standard17.png" },
    { num: 5, title: "Asset Type",     img: "/products/amis/standard4.png"  },
    { num: 6, title: "Assets Locations",img:"/products/amis/standard5.png"  },
  ];

  const keyFeatures = [
    { title: "Track Asset Life Cycle", img: "/products/amis/standard14.png" },
    { title: "Schedule Maintenance",   img: "/products/amis/standard15.png" },
    { title: "Automated Depreciation", img: "/products/amis/standard16.png" },
    { title: "Categorize Asset Types", img: "/products/amis/standard17.png" },
    { title: "Generate Reports",       img: "/products/amis/standard4.png"  },
    { title: "Audit Ready Data",       img: "/products/amis/standard5.png"  },
  ];

  const workflow = [
    { title: "Add Asset",        desc: "Register new assets into the system." },
    { title: "Manage Service",   desc: "Schedule and track asset servicing." },
    { title: "Run Depreciation", desc: "Automatically calculate asset depreciation." },
  ];

  // Scroll-reveal ref
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [visible, setVisible] = useState<boolean[]>([false, false, false, false]);

  useEffect(() => {
    const observers = sectionRefs.current.map((ref, i) => {
      if (!ref) return null;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisible((prev) => { const n = [...prev]; n[i] = true; return n; });
            obs.disconnect();
          }
        },
        { threshold: 0.15 }
      );
      obs.observe(ref);
      return obs;
    });
    return () => observers.forEach((o) => o?.disconnect());
  }, []);

  return (
    <div className="space-y-0">

      {/* BLOCK 1: Explore Fixed Asset Modules — scroll reveal */}
      <div
        ref={(el) => { sectionRefs.current[0] = el; }}
        className={`bg-white px-10 py-10 transition-all duration-700 ${visible[0] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Explore Fixed Asset Modules</h2>
        <div className="grid grid-cols-3 gap-5">
          {exploreModules.map((m) => (
            <div key={m.num} className="bg-blue-50 border border-blue-100 rounded-2xl overflow-hidden hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 p-4">
                <div className="w-10 h-10 rounded-full bg-[#00aeef] flex items-center justify-center text-white font-bold flex-shrink-0">{m.num}</div>
                <p className="font-bold text-[#1a6bb5]">{m.title}</p>
              </div>
              <div className="relative h-40">
                <Image src={m.img} alt={m.title} fill className="object-cover" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Key Asset Management Features — scroll reveal */}
      <div
        ref={(el) => { sectionRefs.current[1] = el; }}
        className={`bg-white px-10 py-10 border-t border-gray-100 transition-all duration-700 delay-100 ${visible[1] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Key Asset Management Features</h2>
        <div className="grid grid-cols-3 gap-5">
          {keyFeatures.map((f) => (
            <div key={f.title} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow">
              <div className="relative h-40 flex items-center justify-center bg-gray-50 p-4">
                <Image src={f.img} alt={f.title} fill className="object-contain p-4" />
              </div>
              <div className="p-4 text-center">
                <h4 className="font-bold text-[#1a6bb5] text-base">{f.title}</h4>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Fixed Assets Workflow — scroll reveal */}
      <div
        ref={(el) => { sectionRefs.current[2] = el; }}
        className={`bg-white px-10 py-10 border-t border-gray-100 transition-all duration-700 delay-200 ${visible[2] ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-8">Fixed Assets Workflow</h2>
        <div className="grid grid-cols-3 gap-5">
          {workflow.map((w) => (
            <div key={w.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-[#1a6bb5] text-lg mb-2">{w.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{w.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// ADMINISTRATION CONTENT
// ─────────────────────────────────────────────────────────────────────────────
function AdministrationContent() {
  const [activeStep, setActiveStep] = useState(0);

  // Flip image cards
  const imageCards = [
    { title: "Company",           img: "/products/amis/standard14.png", back: "Manage company profiles, branches, and settings centrally." },
    { title: "Role",              img: "/products/amis/standard15.png", back: "Define and assign roles to control access across the system." },
    { title: "Users",             img: "/products/amis/standard16.png", back: "Add and manage user accounts with full profile control." },
    { title: "User Settings",     img: "/products/amis/standard17.png", back: "Customize user preferences and system settings with ease." },
    { title: "Document Approvals",img: "/products/amis/standard4.png",  back: "Set up multi-level approval workflows for all documents." },
    { title: "Document Numbers",  img: "/products/amis/standard5.png",  back: "Configure automatic document numbering for every module." },
    { title: "Custom Doc Number", img: "/products/amis/standard6.png",  back: "Create custom numbering formats for specific document types." },
    { title: "Audit Trail",       img: "/products/amis/standard7.png",  back: "Track all user actions with a complete and secure audit log." },
    { title: "Dynamic Model",     img: "/products/amis/standard8.png",  back: "Configure dynamic models and fields to match your business." },
  ];

  // Numbered steps with image change
  const steps = [
    { num: 1, title: "Currency",       desc: "Configure and manage multiple currencies for global operations.",           img: "/products/amis/standard14.png" },
    { num: 2, title: "Dashboard",      desc: "Get a centralized overview of all key metrics and activities.",             img: "/products/amis/standard15.png" },
    { num: 3, title: "Email History",  desc: "View a complete log of all emails sent from the system.",                   img: "/products/amis/standard16.png" },
    { num: 4, title: "Email Settings", desc: "Configure email preferences and templates for automated communications.",   img: "/products/amis/standard17.png" },
    { num: 5, title: "My Details",     desc: "Manage personal profile, password, and notification preferences.",          img: "/products/amis/standard4.png"  },
    { num: 6, title: "To Do",          desc: "Assign and track tasks across teams for better accountability.",            img: "/products/amis/standard5.png"  },
  ];

  const essentialTools = [
    { num: 1, title: "Pending Approvals",    desc: "Easily review and approve pending documents." },
    { num: 2, title: "Unposted Transactions",desc: "Keep track of unposted items for timely actions." },
    { num: 3, title: "Instant Messaging",    desc: "Send alerts and notifications via WhatsApp integration." },
    { num: 4, title: "Operational Data",     desc: "Centralize and manage all critical data efficiently." },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: 3×3 Flip Cards with image front, text back */}
      <style>{`
        .admin-flip { perspective: 1000px; }
        .admin-flip-inner { transition: transform 0.6s; transform-style: preserve-3d; position: relative; }
        .admin-flip:hover .admin-flip-inner { transform: rotateY(180deg); }
        .admin-flip-front, .admin-flip-back { backface-visibility: hidden; -webkit-backface-visibility: hidden; }
        .admin-flip-back { transform: rotateY(180deg); }
      `}</style>
      <div className="bg-white px-10 py-10">
        <div className="grid grid-cols-3 gap-5">
          {imageCards.map((card) => (
            <div key={card.title} className="admin-flip h-52 cursor-pointer">
              <div className="admin-flip-inner w-full h-full">
                {/* Front — image with title overlay */}
                <div className="admin-flip-front absolute inset-0 rounded-2xl overflow-hidden">
                  <Image src={card.img} alt={card.title} fill className="object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 px-4 py-3">
                    <p className="text-white font-semibold text-base text-center">{card.title}</p>
                  </div>
                </div>
                {/* Back — blue with description */}
                <div className="admin-flip-back absolute inset-0 rounded-2xl bg-[#1a6bb5] flex flex-col items-center justify-center px-6 text-center">
                  <p className="text-white font-bold text-lg mb-3">{card.title}</p>
                  <p className="text-blue-100 text-sm leading-relaxed">{card.back}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Left image + right text + 2×2 pill grid */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10 items-center">
          <div className="w-1/2 relative h-80 rounded-2xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard9.png" alt="Administration" fill className="object-cover" />
          </div>
          <div className="w-1/2">
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Streamline Administration with Intelligent Modules</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-5">Our Administration module helps manage company, users, approvals, and documents with ease. Every feature is designed for efficiency and compliance, ensuring smooth operations for your organization.</p>
            <div className="grid grid-cols-2 gap-3">
              {["Role-Based Access","Custom Document Workflows","Audit Trail Management","Dynamic Configuration"].map((item) => (
                <div key={item} className="border border-gray-200 rounded-lg px-4 py-3 flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#1a6bb5] flex-shrink-0" />
                  <p className="text-sm font-medium text-gray-700">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3: Numbered hover steps 1-6 + right image changes */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="flex gap-10">
          <div className="w-1/2 space-y-1">
            {steps.map((step, i) => (
              <div
                key={step.num}
                onMouseEnter={() => setActiveStep(i)}
                className="flex items-start gap-4 p-3 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
              >
                <div className={`flex-shrink-0 w-9 h-9 rounded-full border-2 flex items-center justify-center font-bold text-sm transition-all ${
                  activeStep === i ? "bg-[#1a6bb5] border-[#1a6bb5] text-white" : "border-gray-300 text-gray-500"
                }`}>
                  {step.num}
                </div>
                <div>
                  <p className={`font-bold text-base ${activeStep === i ? "text-[#1a6bb5]" : "text-gray-800"}`}>{step.title}</p>
                  <AnimatePresence mode="wait">
                    {activeStep === i && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="text-sm text-gray-500 mt-1 leading-relaxed overflow-hidden"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            ))}
          </div>
          <div className="w-1/2 relative rounded-xl overflow-hidden" style={{ minHeight: "320px" }}>
            <AnimatePresence mode="wait">
              <motion.div
                key={steps[activeStep].img}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Image src={steps[activeStep].img} alt={steps[activeStep].title} fill className="object-cover rounded-xl" />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>

      {/* BLOCK 4: Essential Administration Tools — numbered cyan cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">Essential Administration Tools</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">Access vital features designed to streamline your organization's administrative tasks with clarity and efficiency.</p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {essentialTools.map((t) => (
            <div key={t.title} className="border border-gray-200 rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="w-10 h-10 rounded-full bg-[#00aeef] text-white flex items-center justify-center font-bold text-lg mx-auto mb-3">{t.num}</div>
              <h4 className="font-bold text-[#1a6bb5] text-base mb-2">{t.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 5: Administration Workflow Overview — light blue cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Administration Workflow Overview</h2>
        <div className="grid grid-cols-4 gap-5">
          {essentialTools.map((t) => (
            <div key={t.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-bold text-gray-800 mb-2">{t.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{t.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


function POSContent() {
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const posFeatures = [
    {
      title: "POS",
      desc: "Our personalized, speedy & accurate order processing gives an enhanced experience for customers.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
    },
    {
      title: "Barcode",
      desc: "Multiple users can operate POS terminals with designated access.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z" /><path strokeLinecap="round" strokeLinejoin="round" d="M6 6h.008v.008H6V6z" />
        </svg>
      ),
    },
    {
      title: "POS Item Details",
      desc: "Track items across multiple POS locations with centralized management.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z" />
        </svg>
      ),
    },
    {
      title: "Mobile Integration",
      desc: "Operate POS through mobile apps for Android & iOS.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7 text-white">
          <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
        </svg>
      ),
    },
  ];

  const onTheGoFeatures = [
    {
      title: "Quick Sales",
      desc: "Seamless order processing with fast checkout to enhance customer satisfaction.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00aeef" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
        </svg>
      ),
    },
    {
      title: "Smart Billing",
      desc: "Generate accurate bills instantly with customizable formats and designs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00aeef" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
        </svg>
      ),
    },
    {
      title: "Discounts & Offers",
      desc: "Apply promotions and discounts directly from the POS screen with ease.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00aeef" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 14.25l6-6m4.5-3.493V21.75l-3.75-1.5-3.75 1.5-3.75-1.5-3.75 1.5V4.757c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0111.186 0c1.1.128 1.907 1.077 1.907 2.185zM9.75 9h.008v.008H9.75V9zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm4.125 4.5h.008v.008h-.008V13.5zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
        </svg>
      ),
    },
    {
      title: "Loyalty Programs",
      desc: "Reward your customers with loyalty points and integrated promotions.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="#00aeef" strokeWidth="1.5" className="w-6 h-6">
          <path strokeLinecap="round" strokeLinejoin="round" d="M21 11.25v8.25a1.5 1.5 0 01-1.5 1.5H5.25a1.5 1.5 0 01-1.5-1.5v-8.25M12 4.875A2.625 2.625 0 109.375 7.5H12m0-2.625V7.5m0-2.625A2.625 2.625 0 1114.625 7.5H12m0 0V21m-8.625-9.75h18c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125h-18c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
        </svg>
      ),
    },
  ];

  const facilitatesFeatures = [
    { title: "Sales Records",       desc: "Maintain accurate and complete records of every sale made through the POS system." },
    { title: "Activity Monitoring", desc: "Track cashier actions, session logs, and transaction history in real time." },
    { title: "Sales Forecasting",   desc: "Use past data to predict and plan future business performance." },
    { title: "Cash Flow Control",   desc: "Monitor cash in and out at every POS terminal for better financial control." },
    { title: "Custom POS Setup",    desc: "Configure terminals, categories, and tax rules to match your business needs." },
  ];

  const stepSlides = [
    { img: "/products/amis/standard22.png", label: "Step 1: Open Terminal" },
    { img: "/products/amis/standard14.png", label: "Step 2: Search Product" },
    { img: "/products/amis/standard15.png", label: "Step 3: Add to Cart" },
    { img: "/products/amis/standard16.png", label: "Step 4: Checkout & Pay" },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: POS Features — heading + 2×2 icon cards */}
      <div className="bg-white px-10 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">POS Features</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Q-Soft Technologies ERP (Hybrid) provides advanced POS functionalities for seamless business operations.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-6 max-w-3xl mx-auto">
          {posFeatures.map((f) => (
            <div
              key={f.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-14 h-14 rounded-xl bg-[#00aeef] flex items-center justify-center mb-4">
                {f.icon}
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">{f.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: POS on the Go — left phone image + right 2×2 features */}
      <div className="bg-gray-50 px-10 py-12 border-t border-gray-100">
        <div className="flex gap-12 items-center">
          {/* Left: phone mockup image */}
          <div className="w-1/2 flex justify-center">
            <div className="relative w-72 h-[480px] rounded-[2.5rem] overflow-hidden border-4 border-gray-200 shadow-2xl">
              <Image
                src="/products/amis/standard22.png"
                alt="POS Mobile"
                fill
                className="object-cover"
              />
            </div>
          </div>
          {/* Right: text + 2×2 grid */}
          <div className="w-1/2">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">POS on the Go</h2>
            <p className="text-gray-500 text-sm mb-8 leading-relaxed">
              Experience complete POS functionality right from your mobile device.
            </p>
            <div className="grid grid-cols-2 gap-5">
              {onTheGoFeatures.map((f) => (
                <div key={f.title} className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-gray-100 flex items-center justify-center flex-shrink-0 mt-1">
                    {f.icon}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-base mb-1">{f.title}</h4>
                    <p className="text-sm text-gray-500 leading-relaxed">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* BLOCK 3: Step by Step Process — centered phone carousel with prev/next */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-10">Step by Step Process</h2>
        <div className="relative flex items-center justify-center gap-6">
          {/* Prev button */}
          <button
            onClick={() => setActiveSlide((prev) => (prev - 1 + stepSlides.length) % stepSlides.length)}
            className="w-12 h-12 rounded-full bg-[#00aeef] flex items-center justify-center shadow-md hover:bg-[#0099d4] transition-colors flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </button>

          {/* Phone mockup */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSlide}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.35 }}
              className="relative w-64 h-[460px] rounded-[2.5rem] overflow-hidden border-4 border-gray-800 shadow-2xl"
            >
              <Image
                src={stepSlides[activeSlide].img}
                alt={stepSlides[activeSlide].label}
                fill
                className="object-cover"
              />
            </motion.div>
          </AnimatePresence>

          {/* Next button */}
          <button
            onClick={() => setActiveSlide((prev) => (prev + 1) % stepSlides.length)}
            className="w-12 h-12 rounded-full bg-[#00aeef] flex items-center justify-center shadow-md hover:bg-[#0099d4] transition-colors flex-shrink-0"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {stepSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => setActiveSlide(i)}
              className={`h-2.5 rounded-full transition-all duration-300 ${activeSlide === i ? "bg-[#00aeef] w-6" : "bg-gray-300 w-2.5"}`}
            />
          ))}
        </div>
      </div>

      {/* BLOCK 4: Facilitates POS Management — dark bg, left image + right hover list */}
      <div className="bg-gray-900 px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-3">
            AIMS ERP (Hybrid) Software Facilitates Your POS Management
          </h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            AIMS ERP (Hybrid) POS software comes with the right options to manage your point of sale effectively.
            The modules equip you with the right competency to achieve optimal outcomes.
          </p>
        </div>
        <div className="flex gap-10 items-start">
          {/* Left: image */}
          <div className="w-1/2 relative h-80 rounded-2xl overflow-hidden flex-shrink-0">
            <Image src="/products/amis/standard14.png" alt="POS Management" fill className="object-cover" />
          </div>
          {/* Right: hover list */}
          <div className="w-1/2 space-y-1">
            {facilitatesFeatures.map((f, i) => (
              <div
                key={f.title}
                onMouseEnter={() => setActiveFeature(i)}
                onMouseLeave={() => setActiveFeature(0)}
                className={`p-4 rounded-xl cursor-pointer border-l-4 transition-all duration-200 ${
                  activeFeature === i
                    ? "border-[#00aeef] bg-white/10"
                    : "border-transparent hover:bg-white/5"
                }`}
              >
                <p className={`font-bold text-base transition-colors ${activeFeature === i ? "text-[#00aeef]" : "text-white"}`}>
                  {f.title}
                </p>
                <AnimatePresence mode="wait">
                  {activeFeature === i && (
                    <motion.p
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="text-sm text-gray-300 mt-1 leading-relaxed overflow-hidden"
                    >
                      {f.desc}
                    </motion.p>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCK 5: Why Choose — heading + 4 plain white cards */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Why Choose AIMS ERP POS?</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            AIMS ERP POS software is designed to simplify and secure your point-of-sale operations.
            With powerful modules, seamless integration, and reliable performance, it helps your business grow with confidence.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { title: "Remote Access",        desc: "Manage your POS anytime, anywhere without being on-site." },
            { title: "WhatsApp Alerts",      desc: "Receive instant POS updates directly on your WhatsApp." },
            { title: "Secure Transactions",  desc: "Keep your business data safe with advanced ERP security." },
            { title: "Optimized Performance",desc: "Get maximum efficiency and results with expert modules." },
          ].map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-2xl p-6 text-center hover:shadow-md transition-shadow">
              <h4 className="font-semibold text-gray-900 text-base mb-3">{c.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{c.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function ReportsContent() {
  return (
    <div className="space-y-0">

      {/* BLOCK 1: Hero Banner — blue bg, left text + right image */}
      <div className="bg-[#00aeef] mx-7 my-8 rounded-2xl px-12 py-14 flex gap-10 items-center">
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-white mb-4 leading-snug">
            AIMS ERP Reports<br />& Analytics
          </h1>
          <p className="text-blue-50 text-base leading-relaxed max-w-md">
            Get deep insights and real-time reporting with our advanced ERP reporting module.
            Visualize, analyze, and make informed decisions efficiently.
          </p>
        </div>
        <div className="flex-1 relative h-64 rounded-xl overflow-hidden flex-shrink-0">
          <Image
            src="/products/amis/standard23.png"
            alt="Reports Analytics"
            fill
            className="object-cover"
          />
        </div>
      </div>

      {/* BLOCK 2: Explore Reports Features — heading + 4 rounded images */}
      <div className="bg-white px-10 py-12">
        <h2 className="text-3xl font-bold text-[#1a6bb5] text-center mb-10">
          Explore Reports Features
        </h2>
        <div className="grid grid-cols-4 gap-5">
          {[
            "/products/amis/standard23.png",
            "/products/amis/standard24.png",
            "/products/amis/standard25.png",
            "/products/amis/standard26.png",
          ].map((src, i) => (
            <div
              key={i}
              className="relative h-56 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <Image
                src={src}
                alt={`Report feature ${i + 1}`}
                fill
                className="object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Essential Reports Tools — heading + 4 cards with small image + blue title */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Essential Reports Tools</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Access vital features designed to simplify and enhance your reporting tasks for better decision making.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            {
              title: "Pending Reports",
              desc: "Easily view and approve pending reports for timely insights.",
              img: "/products/amis/standard23.png",
            },
            {
              title: "Unposted Data",
              desc: "Monitor unposted transactions to maintain accurate reporting.",
              img: "/products/amis/standard24.png",
            },
            {
              title: "Instant Notifications",
              desc: "Send updates and alerts directly via WhatsApp or email.",
              img: "/products/amis/standard25.png",
            },
            {
              title: "Central Data Hub",
              desc: "Manage and access all reporting data from one centralized location.",
              img: "/products/amis/standard26.png",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="relative h-20 w-28 mx-auto mb-4 rounded-lg overflow-hidden">
                <Image src={card.img} alt={card.title} fill className="object-cover" />
              </div>
              <h4 className="font-bold text-[#1a6bb5] text-base mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 4: Streamline Reporting Workflow — heading + 4 plain cards with blue titles */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Streamline Reporting Workflow</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Follow a simple and effective process to create, analyze, and share reports across your organization.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            {
              title: "Generate Reports",
              desc: "Create custom and automated reports easily.",
            },
            {
              title: "Visual Insights",
              desc: "Analyze data with interactive charts and dashboards.",
            },
            {
              title: "Export & Share",
              desc: "Export reports in multiple formats and share securely.",
            },
            {
              title: "Automated Alerts",
              desc: "Set alerts for key performance metrics.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-[#1a6bb5] text-base mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


function BudgetContent() {
  return (
    <div className="space-y-0">

      {/* BLOCK 1: Hero Banner — blue bg, left text + 2×2 feature cards + right budget image */}
      <div className="bg-[#00aeef] mx-7 my-8 rounded-2xl px-12 py-12">
        <div className="flex gap-10 items-start">
          {/* Left: heading + description + 2×2 cards */}
          <div className="flex-1">
            <h1 className="text-5xl font-bold text-white mb-5 leading-tight">
              Manage Your<br />Budget<br />Effectively
            </h1>
            <p className="text-blue-50 text-base leading-relaxed mb-8 max-w-sm">
              Plan, monitor, and optimize your financial resources to ensure maximum
              efficiency and accountability across all departments and projects.
            </p>
            {/* 2×2 mini feature cards */}
            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  title: "Plan Expenditure",
                  desc: "Allocate resources efficiently for each department or project.",
                },
                {
                  title: "Track Spending",
                  desc: "Monitor budget consumption in real-time and prevent overspending.",
                },
                {
                  title: "Forecasting",
                  desc: "Predict future financial requirements accurately with historical data.",
                },
                {
                  title: "Adjust Allocations",
                  desc: "Easily reallocate funds as priorities or requirements change.",
                },
              ].map((card) => (
                <div
                  key={card.title}
                  className="bg-white/15 border border-white/20 rounded-xl p-4 hover:bg-white/20 transition-colors"
                >
                  <h4 className="font-bold text-white text-base mb-1">{card.title}</h4>
                  <p className="text-blue-50 text-xs leading-relaxed">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right: budget illustration image */}
          <div className="flex-1 relative h-96 rounded-2xl overflow-hidden flex-shrink-0">
            <Image
              src="/products/amis/standard14.png"
              alt="Budget Management"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* BLOCK 2: Explore Different Budget Types — heading + 4 light-blue cards + wide image */}
      <div className="bg-white px-10 py-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            Explore Different Budget Types
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Understand and manage various types of budgets to plan effectively and meet your organizational goals.
          </p>
        </div>

        {/* 4 light-blue cards */}
        <div className="grid grid-cols-4 gap-5 mb-10">
          {[
            {
              title: "Operational Budget",
              desc: "Manage day-to-day expenses of the organization.",
            },
            {
              title: "Capital Budget",
              desc: "Plan investments for long-term assets and infrastructure.",
            },
            {
              title: "Project Budget",
              desc: "Track costs and allocate resources for individual projects.",
            },
            {
              title: "Departmental Budget",
              desc: "Set and monitor budgets for each department independently.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-blue-50 border border-blue-100 rounded-2xl p-6 text-center hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-gray-900 text-base mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        {/* Wide centered image below cards */}
        <div className="relative h-80 rounded-2xl overflow-hidden max-w-2xl mx-auto shadow-md">
          <Image
            src="/products/amis/standard15.png"
            alt="Budget Finance Illustration"
            fill
            className="object-cover"
          />
        </div>
      </div>

    </div>
  );
}

function LeasingContent() {
  return (
    <div className="space-y-0">

      {/* BLOCK 1: Leasing Modules — heading + 3 cards */}
      <div className="bg-white px-10 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Leasing Modules</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Quickly access key leasing modules to manage your organization's leasing activities efficiently.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            {
              title: "Lease Category",
              desc: "Explore the different types of leases and choose what fits your business needs.",
            },
            {
              title: "Purchase Lease",
              desc: "Manage asset purchase leases efficiently and track all payment schedules.",
            },
            {
              title: "Sales Lease",
              desc: "Handle sales leases seamlessly with automated tracking and reporting.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-[#00aeef] text-lg mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Key Features — heading + 4 cards with blue titles */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Key Features</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Leverage the powerful features of our leasing system to simplify lease management.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            {
              title: "Flexible Terms",
              desc: "Customize lease durations and terms to fit organizational requirements.",
            },
            {
              title: "Automated Reminders",
              desc: "Never miss a payment or renewal with built-in alerts.",
            },
            {
              title: "Detailed Reports",
              desc: "Get insights on all lease agreements for better decision making.",
            },
            {
              title: "Centralized Management",
              desc: "Monitor all leases from a single dashboard for maximum efficiency.",
            },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-[#00aeef] text-base mb-3">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Leasing Workflow — heading + 4 numbered step cards */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Leasing Workflow</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Follow a clear workflow to manage leases from initiation to closure efficiently.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            {
              num: 1,
              title: "Initiate Lease",
              desc: "Create a new lease record with all necessary details.",
            },
            {
              num: 2,
              title: "Approval Process",
              desc: "Get the lease approved by the concerned authorities.",
            },
            {
              num: 3,
              title: "Active Lease",
              desc: "Track lease status, payments, and reminders efficiently.",
            },
            {
              num: 4,
              title: "Closure",
              desc: "Complete the lease lifecycle with final settlements and reporting.",
            },
          ].map((step) => (
            <div
              key={step.num}
              className="bg-white border border-gray-200 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-full bg-[#00aeef] text-white flex items-center justify-center font-bold text-lg mx-auto mb-4">
                {step.num}
              </div>
              <h4 className="font-bold text-[#00aeef] text-base mb-3">{step.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function TenancyContent() {
  const [openContract, setOpenContract] = useState<string | null>(null);

  const contracts = [
    {
      title: "Lease Agreement",
      desc: "A formal agreement between the landlord and tenant outlining lease terms, duration, and conditions.",
    },
    {
      title: "Rental Contract",
      desc: "A short-term rental contract covering monthly payments, rules, and tenant responsibilities.",
    },
    {
      title: "Commercial Lease",
      desc: "Contracts specifically designed for commercial and business properties with custom terms.",
    },
  ];

  return (
    <div className="space-y-0">

      {/* BLOCK 1: Property Overview — left text + right placeholder */}
      <div className="bg-white px-10 py-12">
        <div className="flex gap-10 items-start">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Property Overview</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-md">
              Manage all properties efficiently with complete details about each property,
              including location, amenities, and occupancy status.
            </p>
            <div className="space-y-3">
              {[
                { title: "Property Details", desc: "View and manage the details of all available properties." },
                { title: "Location Info",    desc: "Get insights on property locations and surroundings." },
              ].map((item) => (
                <div key={item.title} className="bg-gray-50 border border-gray-200 rounded-xl p-4 border-l-4 border-l-[#00aeef]">
                  <h4 className="font-bold text-[#00aeef] text-base mb-1">{item.title}</h4>
                  <p className="text-sm text-gray-500">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: placeholder box */}
          <div className="flex-1 bg-blue-50 border border-blue-100 rounded-2xl flex items-center justify-center h-64">
            <p className="text-[#00aeef] font-bold text-lg">Property Visual Placeholder</p>
          </div>
        </div>
      </div>

      {/* BLOCK 2: Property Types — heading + 4 left-border cards */}
      <div className="bg-gray-50 px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Property Types</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Explore the different property types and manage each category effectively.
          </p>
        </div>
        <div className="grid grid-cols-4 gap-5">
          {[
            { title: "Residential",  desc: "Houses, apartments, and flats for tenants." },
            { title: "Commercial",   desc: "Offices, shops, and commercial spaces." },
            { title: "Industrial",   desc: "Factories, warehouses, and industrial properties." },
            { title: "Land",         desc: "Plots, agricultural, and undeveloped land." },
          ].map((card) => (
            <div
              key={card.title}
              className="bg-white border border-gray-200 rounded-2xl p-6 border-l-4 border-l-[#00aeef] shadow-sm hover:shadow-md transition-shadow"
            >
              <h4 className="font-bold text-[#00aeef] text-base mb-2">{card.title}</h4>
              <p className="text-sm text-gray-500 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Property Owners — heading + 3 left-border list items */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Property Owners</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Manage property owners and maintain detailed records for accountability.
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {[
            { name: "John Doe",     role: "Owner", desc: "Owns multiple residential and commercial properties." },
            { name: "Jane Smith",   role: "Owner", desc: "Specializes in commercial property investments." },
            { name: "Mark Wilson",  role: "Owner", desc: "Focuses on industrial and warehouse properties." },
          ].map((owner) => (
            <div
              key={owner.name}
              className="bg-gray-50 border border-gray-200 rounded-xl p-5 border-l-4 border-l-[#00aeef]"
            >
              <h4 className="font-bold text-[#00aeef] text-base">{owner.name}</h4>
              <p className="text-sm text-gray-400 mb-1">{owner.role}</p>
              <p className="text-sm text-gray-500">{owner.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 4: Tenant Contracts — heading + expandable accordion */}
      <div className="bg-white px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">Tenant Contracts</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Manage and review all tenant contracts with easy access to terms and details.
          </p>
        </div>
        <div className="space-y-3 max-w-4xl mx-auto">
          {contracts.map((c) => (
            <div key={c.title} className="border border-gray-200 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenContract(openContract === c.title ? null : c.title)}
                className="w-full flex items-center justify-between px-6 py-4 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-bold text-[#00aeef] text-base">{c.title}</span>
                <span className="text-gray-400 text-xl font-light">
                  {openContract === c.title ? "−" : "+"}
                </span>
              </button>
              <AnimatePresence mode="wait">
                {openContract === c.title && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-6 pb-4 text-sm text-gray-500 leading-relaxed">{c.desc}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}


function BIContent() {
  return (
    <div className="space-y-0 bg-white">

      {/* BLOCK 1: Top Most Insights */}
      <div className="px-10 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Top Most Insights</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Discover top-performing products, clients, and branches to enhance your business decisions.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[
            { title: "Best-Selling Products",      desc: "Identify products that generate the highest revenue.",                       img: "/products/amis/standard14.png" },
            { title: "Top Clients",                desc: "Highlight your most valuable customers for strategic decisions.",             img: "/products/amis/standard15.png" },
            { title: "High-Performing Branches",   desc: "Track branches with the best performance metrics.",                          img: "/products/amis/standard16.png" },
          ].map((card) => (
            <div key={card.title} className="relative h-56 rounded-2xl overflow-hidden group cursor-pointer">
              <Image src={card.img} alt={card.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-5">
                <h4 className="font-bold text-white text-base mb-1">{card.title}</h4>
                <p className="text-gray-200 text-xs leading-relaxed">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Inventory Analytics — white bg, left text + right image */}
      <div className="px-10 py-12 border-t border-gray-100">
        <div className="flex gap-12 items-start">
          {/* Left: heading + desc + white bordered cards */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Inventory Analytics</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Track inventory trends, stock levels, and movements to optimize your supply chain and prevent shortages.
            </p>
            <div className="space-y-3">
              {[
                { label: "Stock Level Alerts",  desc: "Get notified when inventory drops below threshold." },
                { label: "Trend Analysis",       desc: "Identify fast-moving and slow-moving items." },
                { label: "Inventory Forecast",   desc: "Predict stock requirements based on historical data." },
              ].map((item) => (
                <div key={item.label} className="bg-white border border-gray-200 rounded-xl px-5 py-4 shadow-sm">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">{item.label}:</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
          {/* Right: image */}
          <div className="flex-1 relative rounded-2xl overflow-hidden flex-shrink-0" style={{ height: "280px" }}>
            <Image src="/products/amis/standard17.png" alt="Inventory Analytics" fill className="object-cover rounded-2xl" />
          </div>
        </div>
      </div>

      {/* BLOCK 3: Financial Analytics — white bg, left image + right text with light blue cards */}
      <div className="px-10 py-12 border-t border-gray-100">
        <div className="flex gap-12 items-start">
          {/* Left: image */}
          <div className="flex-1 relative rounded-2xl overflow-hidden flex-shrink-0" style={{ height: "280px" }}>
            <Image src="/products/amis/standard4.png" alt="Financial Analytics" fill className="object-cover rounded-2xl" />
          </div>
          {/* Right: heading + desc + light blue cards */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Financial Analytics</h2>
            <p className="text-gray-500 text-sm leading-relaxed mb-6">
              Monitor financial performance, cash flow, and revenue patterns to make informed decisions and maximize profitability.
            </p>
            <div className="space-y-3">
              {[
                { label: "Revenue Insights",     desc: "Track income and profit trends in real-time." },
                { label: "Expense Analysis",      desc: "Identify areas to reduce costs and improve efficiency." },
                { label: "Cash Flow Management",  desc: "Ensure liquidity and operational stability." },
              ].map((item) => (
                <div key={item.label} className="bg-blue-50 border border-blue-100 rounded-xl px-5 py-4">
                  <p className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-bold text-gray-900">{item.label}:</span> {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


function ProjectManagementContent() {
  const projects = [
    {
      title: "ERP Implementation",
      manager: "Alice Johnson",
      status: "In Progress",
      statusColor: "bg-yellow-400 text-white",
      progress: 65,
      tasks: ["Design Phase Completed", "Development Started", "Testing Scheduled", "Deployment Upcoming"],
      revenue: "$150,000", cost: "$90,000", profit: "$60,000",
    },
    {
      title: "Module Customization",
      manager: "Bob Smith",
      status: "Completed",
      statusColor: "bg-green-500 text-white",
      progress: 100,
      tasks: ["Design Phase Completed", "Development Started", "Testing Scheduled", "Deployment Upcoming"],
      revenue: "$80,000", cost: "$50,000", profit: "$30,000",
    },
    {
      title: "Data Migration",
      manager: "Carol Lee",
      status: "Planning",
      statusColor: "bg-[#00aeef] text-white",
      progress: 25,
      tasks: ["Design Phase Completed", "Development Started", "Testing Scheduled", "Deployment Upcoming"],
      revenue: "$40,000", cost: "$20,000", profit: "$20,000",
    },
  ];

  return (
    <div className="space-y-0 bg-white">

      {/* BLOCK 1: ERP Projects Overview — 3 progress cards */}
      <div className="px-10 py-12">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">ERP Projects Overview</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Keep track of all ERP projects including implementation, module customization, and data migration
            with clear progress indicators and assigned managers.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6 relative">
              {/* Progress circle — top right */}
              <div className="absolute top-4 right-4 w-12 h-12 rounded-full bg-[#00aeef] flex items-center justify-center">
                <span className="text-white text-xs font-bold">{p.progress}%</span>
              </div>
              <h4 className="font-bold text-[#00aeef] text-lg mb-2 pr-14">{p.title}</h4>
              <p className="text-sm text-gray-500 mb-4">Project Manager: {p.manager}</p>
              <span className={`text-xs font-semibold px-4 py-1.5 rounded-full ${p.statusColor}`}>
                {p.status}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Project Tasks & Timeline — 3 expandable task cards */}
      <div className="px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">Project Tasks & Timeline</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Visualize project progress and upcoming tasks to ensure deadlines are met efficiently.
          </p>
        </div>
        <div className="space-y-4 max-w-4xl mx-auto">
          {projects.map((p) => (
            <div key={p.title} className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm">
              <div className="flex items-center justify-between mb-4">
                <h4 className="font-bold text-[#00aeef] text-base">{p.title}</h4>
                <span className="text-sm text-gray-500">{p.status}</span>
              </div>
              <div className="space-y-1">
                {p.tasks.map((task) => (
                  <p key={task} className="text-sm text-gray-600">- {task}</p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: ERP Project PnL — 3 light-blue cards */}
      <div className="px-10 py-12 border-t border-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-900 mb-3">ERP Project PnL</h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            Monitor project financials including revenue, costs, and profits to analyze ERP project efficiency and ROI.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {projects.map((p) => (
            <div key={p.title} className="bg-blue-50 border border-blue-100 rounded-2xl p-6">
              <h4 className="font-bold text-[#00aeef] text-base mb-4">{p.title}</h4>
              <p className="text-sm text-gray-600 mb-1">Revenue: {p.revenue}</p>
              <p className="text-sm text-gray-600 mb-1">Cost: {p.cost}</p>
              <p className="text-sm font-bold text-gray-900 mt-2">Profit: {p.profit}</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function DownloadBrochureContent() {
  return (
    <div className="bg-gray-50 min-h-screen flex items-start justify-center px-10 py-16">
      <div className="bg-white rounded-3xl shadow-sm border border-gray-100 max-w-2xl w-full px-12 py-14 text-center">

        {/* Heading */}
        <h2 className="text-4xl font-bold text-[#00aeef] mb-4">Download Our Brochure</h2>
        <p className="text-gray-500 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
          Get a detailed overview of our ERP solutions, modules, and services in one professionally
          designed brochure. Click below to download the PDF instantly.
        </p>

        {/* Brochure preview image */}
        <div className="relative h-56 w-72 mx-auto rounded-2xl overflow-hidden mb-10 shadow-md">
          <Image
            src="/products/amis/standard14.png"
            alt="AIMS ERP Brochure"
            fill
            className="object-cover"
          />
        </div>

        {/* Download button */}
        <a
          href="/brochure/aims-erp-brochure.pdf"
          download="AIMS_ERP_Brochure.pdf"
          className="inline-flex items-center gap-3 bg-[#00aeef] hover:bg-[#0099d4] text-white font-semibold text-base px-10 py-4 rounded-full transition-colors shadow-md"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
            <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
            <polyline points="7 10 12 15 17 10" />
            <line x1="12" y1="15" x2="12" y2="3" />
          </svg>
          Download PDF
        </a>

      </div>
    </div>
  );
}


function CRMContent() {
  return (
    <div className="space-y-0">

      {/* BLOCK 1: 6 feature cards with arrow icon — title + desc + image */}
      <div className="bg-white px-10 py-10">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-1">CRM Solutions Tailored for You</h2>
          <div className="w-16 h-1 bg-[#1a6bb5] mx-auto mt-2 mb-3 rounded" />
          <p className="text-gray-500 text-sm">Manage customers, track activities, and drive sales with our next-generation CRM tools.</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {[
            { title: "Lead Management",           desc: "Easily capture, sort, and track potential leads. Automate follow-ups and boost conversions with smarter workflows.",                                          img: "/products/amis/standard5.png"  },
            { title: "Activity Monitoring",        desc: "Track every customer interaction, monitor progress, and keep your sales process transparent with activity logs.",                                            img: "/products/amis/standard6.png"  },
            { title: "Calendar Management",        desc: "Plan, schedule, and manage customer meetings with a built-in calendar that syncs across your CRM.",                                                          img: "/products/amis/standard7.png"  },
            { title: "Reports & Analytics",        desc: "Generate detailed sales and performance reports that provide actionable insights to drive growth.",                                                           img: "/products/amis/standard8.png"  },
            { title: "Customers/Clients Workflow", desc: "Maintain a secure, cloud-based customer database that's always accessible, organized, and easy to manage.",                                                 img: "/products/amis/standard9.png"  },
            { title: "Stage Tracking",             desc: "Visualize your sales funnel and monitor progress at every stage to maximize efficiency.",                                                                    img: "/products/amis/standard10.png" },
          ].map((card) => (
            <div key={card.title} className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden hover:shadow-md transition-shadow">
              <div className="p-5 flex items-start justify-between gap-2">
                <h4 className="font-bold text-gray-900 text-base">{card.title}</h4>
                <div className="flex-shrink-0 w-9 h-9 rounded-full bg-[#00aeef] flex items-center justify-center">
                  <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M7 17L17 7M17 7H7M17 7v10" />
                  </svg>
                </div>
              </div>
              <p className="text-sm text-gray-500 leading-relaxed px-5 pb-4">{card.desc}</p>
              <div className="relative h-44">
                <Image src={card.img} alt={card.title} fill className="object-cover px-5 py-4" />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 2: Why AIMS ERP CRM — dark background */}
      <div className="bg-gray-900 px-10 py-12">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-white mb-4">Why AIMS ERP CRM Solutions?</h2>
          <p className="text-gray-300 text-sm max-w-2xl mx-auto leading-relaxed">
            AIMS ERP has built a trusted reputation by delivering advanced CRM and ERP systems that empower businesses to manage customer relationships efficiently and grow sustainably.
          </p>
        </div>
        <div className="grid grid-cols-3 gap-5">
          {[
            {
              title: "Comprehensive Tools",
              desc: "Our CRM suite is designed to be your complete business relationship hub. Every module is customized to meet your goals and includes features such as:",
              bullets: ["Scalable customer capacity", "Flexible user roles and access", "Secure and seamless communication"],
            },
            {
              title: "Powerful Sales CRM",
              desc: "With years of expertise, AIMS ERP delivers sales-focused CRM tools that streamline your pipeline, improve conversion rates, and give your team the insights they need to close deals faster.",
              bullets: [],
            },
            {
              title: "Cutting-Edge Technology",
              desc: "AIMS ERP integrates the latest technologies and frameworks into its CRM solutions, ensuring your business stays ahead with reliable, scalable, and innovative tools.",
              bullets: [],
            },
          ].map((card) => (
            <div key={card.title} className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors">
              <h4 className="font-bold text-white text-lg mb-3">{card.title}</h4>
              <p className="text-gray-300 text-sm leading-relaxed mb-3">{card.desc}</p>
              {card.bullets.map((b) => (
                <p key={b} className="text-gray-400 text-sm mb-1">• {b}</p>
              ))}
            </div>
          ))}
        </div>
      </div>

      {/* BLOCK 3: Dashboard section — heading + large image */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold text-gray-900 mb-3">
            User-Friendly Dashboard for Efficient CRM Management Tool
          </h2>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto leading-relaxed">
            Our expert developers have designed the most easy-to-understand and easy-to-use dashboard for customer relationship management.
          </p>
        </div>
        <div className="relative h-80 rounded-2xl overflow-hidden shadow-lg">
          <Image src="/products/amis/Dashboard.png" alt="CRM Dashboard" fill className="object-cover" />
        </div>
      </div>

      {/* BLOCK 4: Streamlines Your Every CRM Needs — dark banner */}
      <div className="bg-gray-900 px-10 py-10 mx-8 my-6 rounded-xl">
        <div className="flex gap-10 items-center">
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-white mb-4">Streamlines Your Every CRM Needs</h2>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">
              AIMS ERP provides a tailored CRM management tool for all-around effective operations, streamlining activities end-to-end and adapting to your business needs.
            </p>
            <ul className="space-y-2">
              {["Customized to match client requirements", "Fast and precise processing", "Instant report generation when needed"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-gray-200 text-sm">
                  <div className="w-2 h-2 rounded-full bg-[#00aeef] shrink-0" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          {/* icon grid */}
          <div className="flex-1 grid grid-cols-4 gap-3">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-3 flex items-center justify-center h-16">
                <div className="w-8 h-8 bg-[#00aeef]/20 rounded-lg" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* BLOCK 5: CRM Workflow — circular images + step cards */}
      <div className="bg-white px-10 py-10 border-t border-gray-100">
        <div className="text-center mb-8">
          <p className="text-[#00aeef] text-sm font-medium mb-1">✦ Workflow Insights ✦</p>
          <h2 className="text-3xl font-bold text-gray-900">AIMS ERP CRM Workflow</h2>
        </div>

        {/* circular images row */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          {[
            "/products/amis/standard14.png",
            "/products/amis/standard15.png",
            "/products/amis/standard16.png",
            "/products/amis/standard17.png",
          ].map((src, i) => (
            <div key={i} className="flex flex-col items-center gap-2">
              <div className="relative w-36 h-36 rounded-full overflow-hidden border-4 border-[#00aeef]/30">
                <Image src={src} alt={`Step ${i + 1}`} fill className="object-cover" />
              </div>
              <div className="w-3 h-3 rounded-full bg-[#00aeef]" />
            </div>
          ))}
        </div>

        {/* step cards */}
        <div className="grid grid-cols-4 gap-5">
          {[
            {
              step: "STEP 01", title: "Lead Management",
              points: [
                { label: "Capture & Store:", text: "Securely capture, sort and store every lead in a cloud database." },
                { label: "Prioritize:", text: "Auto-tag leads by source and score to focus on what matters." },
                { label: "Compliance:", text: "Role-based access keeps data secure." },
              ],
            },
            {
              step: "STEP 02", title: "CRM Stages",
              points: [
                { label: "Track:", text: "Monitor each stage from New → Qualified → Won with real-time status." },
                { label: "Assess:", text: "Quickly pull stage summaries for team stand-ups and reviews." },
                { label: "Retrieve:", text: "Find any deal instantly with powerful search." },
              ],
            },
            {
              step: "STEP 03", title: "Managing Calendar",
              points: [
                { label: "Schedule:", text: "Send reminders, sequence tasks, and auto-book follow-ups." },
                { label: "Keep Record:", text: "Every meeting and note is attached to its contact or deal." },
              ],
            },
            {
              step: "STEP 04", title: "Report Generation",
              points: [
                { label: "Leads:", text: "Conversion, velocity, and attribution reports on demand." },
                { label: "Activities:", text: "Team productivity and SLA dashboards keep work on track." },
                { label: "On-Demand:", text: "Export any report instantly in multiple formats." },
              ],
            },
          ].map((card) => (
            <div key={card.step} className="bg-gradient-to-b from-gray-800 to-gray-900 rounded-2xl p-5 border border-gray-700">
              <p className="text-[#00aeef] text-xs font-semibold mb-1">{card.step}</p>
              <h4 className="font-bold text-white text-lg mb-3">{card.title}</h4>
              <div className="space-y-2 mb-4">
                {card.points.map((p) => (
                  <p key={p.label} className="text-gray-300 text-xs leading-relaxed">
                    <span className="text-[#00aeef] font-semibold">{p.label}</span> {p.text}
                  </p>
                ))}
              </div>
              <p className="text-gray-500 text-xs mt-auto">AIMS ERP • Secure • Scalable</p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

function renderContent(tab: string) {
  switch (tab) {
    case "Accounting":           return <AccountingContent />;
    case "Inventory":            return <InventoryContent />;
    case "Procurement/Purchase": return <PurchaseContent />;
    case "CRM": return <CRMContent />;
    case "Sales":                return <SalesContent />;
    case "Tax Portal": return <TaxPortalContent />;
    case "HR/Payroll": return <HRPayrollContent />;
    case "Manufacturing":  return <ManufacturingContent />;
    case "Fixed Assets":   return <FixedAssetsContent />;
    case "Administration": return <AdministrationContent />;
    case "POS":                  return <POSContent />;
    case "Reports":              return <ReportsContent />;
    case "Budget": return <BudgetContent />;
    case "Leasing": return <LeasingContent />;
    case "Tenancy": return <TenancyContent />;
    case "BI": return <BIContent />;
    case "Project Management": return <ProjectManagementContent />;
    case "Download Brochure": return <DownloadBrochureContent />;
    // default:                     return <GenericContent title={tab} />;
  }
}

// ─────────────────────────────────────────────────────────────────────────────
// FLOATING BUTTONS — Scroll to Top + WhatsApp
// ─────────────────────────────────────────────────────────────────────────────
function FloatingButtons() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    // We listen on the main scrollable content area
    const mainEl = document.getElementById("main-content");
    if (!mainEl) return;
    const handleScroll = () => setShowScrollTop(mainEl.scrollTop > 300);
    mainEl.addEventListener("scroll", handleScroll);
    return () => mainEl.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    const mainEl = document.getElementById("main-content");
    if (mainEl) mainEl.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-3 z-50">
      {/* WhatsApp */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shadow-lg hover:bg-[#1ebe5d] transition-colors"
      >
        {/* WhatsApp SVG icon */}
        <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </a>

      {/* Scroll to top — only visible after scrolling down */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.2 }}
            onClick={scrollToTop}
            title="Scroll to top"
            className="w-12 h-12 rounded-full bg-[#1a6bb5] flex items-center justify-center shadow-lg hover:bg-[#155a9e] transition-colors"
          >
            {/* Upward chevron */}
            <svg viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
              <polyline points="18 15 12 9 6 15" />
            </svg>
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─────────────────────────────────────────────────────────────────────────────
// MAIN PAGE
// ─────────────────────────────────────────────────────────────────────────────
export default function AimsErpPage() {
  const [activeTab, setActiveTab] = useState("Accounting");

  return (
    <div className={`min-h-screen ${inter.className}`}>
      <Navbar />

      <div className="flex" style={{ paddingTop: "64px" }}>

        {/* ── LEFT BLUE SIDEBAR ─────────────────────────────────────────── */}
        <aside
          className="w-56 flex-shrink-0 bg-[#1a6bb5] sticky self-start overflow-y-auto z-10"
          style={{ top: "64px", height: "calc(100vh - 64px)" }}
        >
          <nav className="py-4">
            {sidebarItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveTab(item)}
                className={`w-full text-left px-5 py-3 text-sm font-medium transition-all duration-150 ${
                  activeTab === item
                    ? "bg-white text-[#1a6bb5] font-bold"
                    : "text-white hover:bg-[#1559a0]"
                }`}
              >
                {item}
              </button>
            ))}
          </nav>
        </aside>

        {/* ── RIGHT CONTENT ─────────────────────────────────────────────── */}
        <main
          id="main-content"
          className="flex-1 overflow-y-auto bg-gray-50"
          style={{ height: "calc(100vh - 64px)" }}
        >
          {/* PINNED STATS BAR — always at the top regardless of active tab */}
          <PinnedStatsBar />

          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              {renderContent(activeTab)}
            </motion.div>
          </AnimatePresence>

          {/* <ContactUs /> */}
          <Footer />
        </main>

      </div>

      {/* Floating WhatsApp + Scroll-to-top buttons */}
      <FloatingButtons />
    </div>
  );
}