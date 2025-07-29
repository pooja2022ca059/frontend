import React from "react";
import { FaRegEdit } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineClipboardCopy } from "react-icons/hi";
import { PiDotsThreeBold } from "react-icons/pi";
const clientData = {
    name: "Green Tech Solution Pvt. Ltd.",
    status: "Active",
    logo: "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcTymudOtuSRp49R_iW-5XtMrDKAPes61aSK2vgqxkYA2ILZ7WmI",
    phone: "999-000-768",
    email: "kankanasinha@gmail.com",
    location: "Guwahati, Assam",
    industry: "Renewable Energy / SaaS",
    founded: "2015",
    headquarters: "Bengaluru, India",
    stats: {
        total: 5,
        active: 1,
        completed: 3,
        pending: 1,
    },
    recentActivity: [
        {
            text: "Project Apollo marked complete",
            sub: "Final milestone reached successfully",
            date: "30 June, 2025",
            color: "green",
        },
        {
            text: "Client Zenspace added",
            sub: "Client profile created in CRM",
            date: "10 June, 2025",
            color: "blue",
        },
        {
            text: "File uploaded to Project Vega",
            sub: "New document shared with the team",
            date: "9 June, 2025",
            color: "red",
        },
        {
            text: "Team member updated task status",
            sub: "New document shared with the team",
            date: "10 June, 2025",
            color: "yellow",
        },
    ],
};

const tabs = [
    "Overview",
    "Projects",
    "Contacts",
    "Documents",
    "Communication History",
];
const colorClassMap = {
    green: "bg-green-500",
    blue: "bg-blue-500",
    red: "bg-red-500",
    yellow: "bg-yellow-500",
};

const ClientDetails = () => {
    return (
        <div className="p-1 w-full bg-gray-50 min-h-screen">
            <div className="text-sm text-gray-500 mb-1 mt-0">
                Dashboard&gt;Clients&gt;Clients Details
            </div>
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-semibold text-gray-800 mb-2">
                    Client Details
                </h2>
                <button className="border flex items-center gap-2 border-gray-300 rounded-lg py-1 px-3 text-xs hover:bg-gray-100 cursor-pointer">
                    Edit Details <FaRegEdit />
                </button>
            </div>
            <div className="bg-white p-6 rounded-2xl border border-gray-300">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div className="flex items-center gap-4">
                        <img
                            src={clientData.logo}
                            alt="Logo"
                            className="rounded-full w-10 h-10 object-cover"
                        />
                        <div className="flex gap-3">
                            <h3 className="text-lg font-semibold text-gray-800">
                                {clientData.name}
                            </h3>
                            <div className="text-green-600 border border-green-600 text-xs px-2 py-0.5 rounded-full inline-block mt-1">
                                {clientData.status}
                            </div>
                        </div>
                    </div>
                    <div className="text-sm text-gray-600 md:text-right flex flex-col justify-center items-start">
                        <div>
                            <FaPhoneAlt className="inline mr-1" />{" "}
                            {clientData.phone}
                        </div>
                        <div>
                            <MdEmail className="inline mr-1" />{" "}
                            {clientData.email}
                        </div>
                        <div>
                            <IoLocationSharp className="inline mr-1" />{" "}
                            {clientData.location}
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap justify-around gap-2 my-4">
                {tabs.map((tab) => (
                    <button
                        key={tab}
                        className={`px-4 py-2 rounded-full cursor-pointer border text-xs ${
                            tab === "Overview"
                                ? "bg-purple-600 text-white"
                                : "border-gray-300 text-gray-600 hover:bg-gray-100"
                        }`}
                    >
                        {tab}
                    </button>
                ))}
            </div>
            <div className="bg-transparent py-1 px-3 my-2">
                <div className="mt-2 pb-2 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="md:col-span-2 border bg-white p-3 border-gray-300 rounded-lg">
                        <h4 className="text-lg font-semibold text-gray-700 mb-2">
                            {clientData.name}
                        </h4>
                        <p className="text-gray-600 text-sm mb-4">
                            GreenTech Solutions specializes in providing
                            eco-friendly energy management software for
                            commercial buildings, helping businesses reduce
                            carbon footprints and energy costs.
                        </p>
                        <div className="text-sm text-gray-600 space-y-1">
                            <p>
                                <div className="font-medium pb-1">
                                    Industry:
                                </div>{" "}
                                {clientData.industry}
                            </p>
                            <p>
                                <div className="font-medium pb-1">Founded:</div>{" "}
                                {clientData.founded}
                            </p>
                            <p>
                                <div className="font-medium pb-1">
                                    Headquarters:
                                </div>{" "}
                                {clientData.headquarters}
                            </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        <div className="p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between">
                            <p className="text-sm text-gray-600">
                                Total Projects
                            </p>
                            <p className="text-3xl font-semibold text-purple-700">
                                {clientData.stats.total}
                            </p>
                        </div>
                        <div className=" p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between">
                            <p className="text-sm text-gray-600">
                                Active Projects
                            </p>
                            <p className="text-3xl font-semibold text-green-700">
                                {clientData.stats.active}
                            </p>
                        </div>
                        <div className=" p-4 rounded-sm text-left border border-gray-300 flex flex-col justify-between">
                            <p className="text-sm text-gray-600">
                                Completed Projects
                            </p>
                            <p className="text-3xl font-semibold text-blue-700">
                                {clientData.stats.completed}
                            </p>
                        </div>
                        <div className=" p-4 border border-gray-300 rounded-sm text-left flex flex-col justify-between">
                            <p className="text-sm text-gray-600">
                                Pending Projects
                            </p>
                            <p className="text-3xl font-semibold text-yellow-700">
                                {clientData.stats.pending}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="bg-white py-2 rounded-2xl shadow">
                <div className="flex justify-between items-center mb-4 px-4">
                    <h4 className="text-md font-bold text-gray-700">
                        Recent Activity
                    </h4>
                    <button className="text-sm cursor-pointer">
                        View All{" "}
                        <MdKeyboardArrowDown className="inline text-xl" />
                    </button>
                </div>
                <div className="space-y-1 border border-gray-300 rounded-lg mx-4">
                    {clientData.recentActivity.map((item, index) => (
                        <div
                            key={index}
                            className="flex justify-between items-center p-3 rounded-lg hover:bg-gray-50"
                        >
                            <div className="flex items-center gap-3">
                                <div
                                    className={`w-3 h-3 rounded-full ${
                                        colorClassMap[item.color] ||
                                        "bg-gray-300"
                                    }`}
                                ></div>
                                <div>
                                    <p className="text-sm font-medium text-gray-700">
                                        {item.text}
                                    </p>

                                    <p className="text-xs text-gray-500">
                                        {item.sub}
                                    </p>
                                </div>
                                <div className="text-2xl cursor-pointer">
                                    <PiDotsThreeBold />
                                </div>
                            </div>
                            <div className="text-xs text-gray-400">
                                {item.date}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ClientDetails;
