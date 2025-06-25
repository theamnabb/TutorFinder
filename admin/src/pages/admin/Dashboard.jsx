import React from "react";

const Dashboard = () => {
  const stats = [
    { title: "Total Tutors", value: 128 },
    { title: "Active Sessions", value: 23 },
    { title: "Pending Requests", value: 5 },
    { title: "New Messages", value: 7 },
  ];

  const quickLinks = [
    { label: "Manage Tutors", href: "/tutors-list" },
    { label: "View Sessions", href: "/all-sessions" },
  ];

  return (
    <div className="p-8 max-w-7xl mx-auto">
      {/* Header */}
      <header className="mb-8">
        <h1 className="text-4xl font-bold text-deep">Welcome Back, Admin</h1>
        <p className="text-gray-600 mt-2">
          Here's a quick overview of TutorFinder dashboard.
        </p>
      </header>

      {/* Stats Cards */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {stats.map(({ title, value }) => (
          <div
            key={title}
            className="bg-white rounded-xl shadow p-6 flex flex-col justify-center items-center 
                       transition-transform duration-300 hover:scale-105 hover:shadow-xl cursor-pointer hover:bg-secondary/80"
            title={title}
          >
            <p className="text-gray-500 font-medium">{title}</p>
            <p className="text-3xl font-bold text-deep mt-2">{value}</p>
          </div>
        ))}
      </section>

      {/* Quick Actions */}
      <section>
        <h2 className="text-2xl font-semibold text-deep mb-4">Quick Actions</h2>
        <div className="flex flex-wrap gap-6">
          {quickLinks.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="bg-deep text-white px-6 py-3 rounded-md hover:bg-deep/90 hover:shadow-lg
                         transition cursor-pointer inline-block text-center"
            >
              {label}
            </a>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
