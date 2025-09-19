import { useState } from "react";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Search,
  Filter,
  User,
  Building,
  Calendar,
  MessageCircle,
  ExternalLink,
} from "lucide-react";

const Contact = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedDepartment, setSelectedDepartment] = useState("all");
  const [selectedRole, setSelectedRole] = useState("all");

  // Sample municipal officers data - replace with actual data from your backend
  const officers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      position: "Municipal Commissioner",
      department: "Administration",
      email: "commissioner@municipality.gov.in",
      phone: "+91-9876543210",
      office: "Main Office, 1st Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      specializations: [
        "Urban Planning",
        "Public Administration",
        "Policy Making",
      ],
    },
    {
      id: 2,
      name: "Ms. Priya Sharma",
      position: "Deputy Commissioner",
      department: "Public Works",
      email: "deputy.commissioner@municipality.gov.in",
      phone: "+91-9876543211",
      office: "Public Works Department, 2nd Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
      specializations: [
        "Infrastructure Development",
        "Road Maintenance",
        "Water Supply",
      ],
    },
    {
      id: 3,
      name: "Mr. Amit Singh",
      position: "Health Officer",
      department: "Public Health",
      email: "health.officer@municipality.gov.in",
      phone: "+91-9876543212",
      office: "Health Department, 3rd Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      specializations: ["Public Health", "Sanitation", "Disease Control"],
    },
    {
      id: 4,
      name: "Mrs. Sunita Devi",
      position: "Education Officer",
      department: "Education",
      email: "education.officer@municipality.gov.in",
      phone: "+91-9876543213",
      office: "Education Department, 4th Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
      specializations: [
        "School Management",
        "Educational Programs",
        "Student Welfare",
      ],
    },
    {
      id: 5,
      name: "Mr. Vikram Patel",
      position: "Revenue Officer",
      department: "Revenue",
      email: "revenue.officer@municipality.gov.in",
      phone: "+91-9876543214",
      office: "Revenue Department, Ground Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face",
      specializations: [
        "Tax Collection",
        "Property Assessment",
        "Financial Management",
      ],
    },
    {
      id: 6,
      name: "Ms. Kavita Joshi",
      position: "Welfare Officer",
      department: "Social Welfare",
      email: "welfare.officer@municipality.gov.in",
      phone: "+91-9876543215",
      office: "Social Welfare Department, 2nd Floor",
      address: "Municipal Corporation Building, City Center",
      workingHours: "9:00 AM - 5:00 PM",
      availability: "Monday to Friday",
      profileImage:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face",
      specializations: [
        "Social Programs",
        "Women Welfare",
        "Child Development",
      ],
    },
  ];

  const departments = [
    "all",
    "Administration",
    "Public Works",
    "Public Health",
    "Education",
    "Revenue",
    "Social Welfare",
  ];
  const roles = [
    "all",
    "Municipal Commissioner",
    "Deputy Commissioner",
    "Health Officer",
    "Education Officer",
    "Revenue Officer",
    "Welfare Officer",
  ];

  const filteredOfficers = officers.filter((officer) => {
    const matchesSearch =
      officer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.position.toLowerCase().includes(searchTerm.toLowerCase()) ||
      officer.department.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesDepartment =
      selectedDepartment === "all" || officer.department === selectedDepartment;
    const matchesRole =
      selectedRole === "all" || officer.position === selectedRole;
    return matchesSearch && matchesDepartment && matchesRole;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Municipal Officers
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Get in touch with our dedicated municipal officers who are here to
            serve you. Find the right person for your specific needs and
            concerns.
          </p>
        </div>

        {/* Search and Filter Section */}
        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search officers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Department Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedDepartment}
                onChange={(e) => setSelectedDepartment(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {departments.map((dept) => (
                  <option key={dept} value={dept}>
                    {dept === "all" ? "All Departments" : dept}
                  </option>
                ))}
              </select>
            </div>

            {/* Role Filter */}
            <div className="flex items-center space-x-4">
              <User className="text-gray-500" size={20} />
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {roles.map((role) => (
                  <option key={role} value={role}>
                    {role === "all" ? "All Roles" : role}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Officers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredOfficers.map((officer) => (
            <div
              key={officer.id}
              className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group"
            >
              {/* Officer Header */}
              <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 p-6 text-white">
                <div className="flex items-center space-x-4">
                  <img
                    src={officer.profileImage}
                    alt={officer.name}
                    className="w-16 h-16 rounded-full border-4 border-white object-cover"
                  />
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold">{officer.name}</h3>
                    <p className="text-yellow-100 text-sm">
                      {officer.position}
                    </p>
                    <p className="text-yellow-200 text-xs">
                      {officer.department}
                    </p>
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="p-6 space-y-4">
                {/* Contact Details */}
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="text-yellow-500" size={16} />
                    <a
                      href={`tel:${officer.phone}`}
                      className="text-gray-700 hover:text-yellow-600 transition-colors duration-300"
                    >
                      {officer.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="text-yellow-500" size={16} />
                    <a
                      href={`mailto:${officer.email}`}
                      className="text-gray-700 hover:text-yellow-600 transition-colors duration-300 text-sm break-all"
                    >
                      {officer.email}
                    </a>
                  </div>
                  <div className="flex items-start space-x-3">
                    <MapPin className="text-yellow-500 mt-1" size={16} />
                    <div className="text-gray-700 text-sm">
                      <p className="font-medium">{officer.office}</p>
                      <p>{officer.address}</p>
                    </div>
                  </div>
                </div>

                {/* Working Hours */}
                <div className="border-t pt-4">
                  <div className="flex items-center space-x-3 mb-2">
                    <Clock className="text-yellow-500" size={16} />
                    <span className="text-gray-700 font-medium">
                      Working Hours
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm">
                    {officer.workingHours}
                  </p>
                  <p className="text-gray-500 text-xs">
                    {officer.availability}
                  </p>
                </div>

                {/* Specializations */}
                <div className="border-t pt-4">
                  <h4 className="text-gray-700 font-medium mb-2 text-sm">
                    Specializations
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {officer.specializations.map((spec, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs rounded-full"
                      >
                        {spec}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="border-t pt-4 flex space-x-2">
                  <button className="flex-1 bg-yellow-500 text-white px-4 py-2 rounded-lg hover:bg-yellow-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <MessageCircle size={16} />
                    <span>Message</span>
                  </button>
                  <button className="flex-1 bg-gray-100 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-200 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <ExternalLink size={16} />
                    <span>Profile</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredOfficers.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <User size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No officers found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-600">
          Showing {filteredOfficers.length} of {officers.length} officers
        </div>

        {/* Emergency Contact Section */}
        <div className="mt-12 bg-red-50 border border-red-200 rounded-lg p-6">
          <h3 className="text-lg font-semibold text-red-800 mb-4 flex items-center">
            <Phone className="mr-2" size={20} />
            Emergency Contacts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="text-center">
              <p className="font-medium text-red-700">Emergency Helpline</p>
              <p className="text-red-600">+91-100</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-red-700">Municipal Emergency</p>
              <p className="text-red-600">+91-9876543200</p>
            </div>
            <div className="text-center">
              <p className="font-medium text-red-700">24/7 Support</p>
              <p className="text-red-600">+91-9876543201</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
