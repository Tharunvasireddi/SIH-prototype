import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ExternalLink,
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Globe,
  Shield,
  FileText,
  Download,
  ChevronRight,
} from "lucide-react";

const Footer = () => {
  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Contact", path: "/contact" },
    { name: "Feedback", path: "/feedback" },
    { name: "Sitemap", path: "/sitemap" },
  ];

  const services = [
    { name: "Birth Certificate", path: "/services/birth-certificate" },
    { name: "Death Certificate", path: "/services/death-certificate" },
    { name: "Property Tax", path: "/services/property-tax" },
    { name: "Water Bill", path: "/services/water-bill" },
    { name: "Building Permit", path: "/services/building-permit" },
    { name: "Trade License", path: "/services/trade-license" },
  ];

  const departments = [
    { name: "Public Works", path: "/departments/public-works" },
    { name: "Health Department", path: "/departments/health" },
    { name: "Education", path: "/departments/education" },
    { name: "Revenue", path: "/departments/revenue" },
    { name: "Social Welfare", path: "/departments/social-welfare" },
    { name: "Environment", path: "/departments/environment" },
  ];

  const policies = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms of Service", path: "/terms-of-service" },
    { name: "Accessibility", path: "/accessibility" },
    { name: "Disclaimer", path: "/disclaimer" },
    { name: "RTI", path: "/rti" },
    { name: "Grievance", path: "/grievance" },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      icon: Facebook,
      url: "#",
      color: "hover:text-blue-600",
    },
    { name: "Twitter", icon: Twitter, url: "#", color: "hover:text-blue-400" },
    {
      name: "Instagram",
      icon: Instagram,
      url: "#",
      color: "hover:text-pink-600",
    },
    { name: "YouTube", icon: Youtube, url: "#", color: "hover:text-red-600" },
  ];

  const importantLinks = [
    {
      name: "Government of India",
      url: "https://www.india.gov.in",
      external: true,
    },
    { name: "State Government", url: "#", external: false },
    {
      name: "Digital India",
      url: "https://www.digitalindia.gov.in",
      external: true,
    },
    { name: "MyGov", url: "https://www.mygov.in", external: true },
  ];

  return (
    <footer className="bg-gray-900 text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Municipal Corporation Info */}
          <div className="lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-xl font-bold text-yellow-400 mb-4">
                Municipal Corporation
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed mb-4">
                Serving our community with dedication, transparency, and
                excellence for over 75 years. Committed to providing efficient
                municipal services and sustainable urban development.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-start space-x-3">
                  <MapPin className="w-4 h-4 text-yellow-400 mt-1 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Municipal Corporation Building</p>
                    <p>City Center, Main Street</p>
                    <p>State, Country - 123456</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Phone className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>+91-9876543210</p>
                    <p>Emergency: +91-100</p>
                  </div>
                </div>

                <div className="flex items-center space-x-3">
                  <Mail className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <p className="text-sm text-gray-300">
                    info@municipality.gov.in
                  </p>
                </div>

                <div className="flex items-center space-x-3">
                  <Clock className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                  <div className="text-sm text-gray-300">
                    <p>Mon-Fri: 9:00 AM - 5:00 PM</p>
                    <p>Sat: 9:00 AM - 1:00 PM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Services</h3>
            <ul className="space-y-2">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href={service.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Departments */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">
              Departments
            </h3>
            <ul className="space-y-2">
              {departments.map((dept, index) => (
                <li key={index}>
                  <a
                    href={dept.path}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                  >
                    <ChevronRight className="w-3 h-3 mr-2 group-hover:translate-x-1 transition-transform duration-300" />
                    {dept.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Media & Important Links */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Social Media */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Follow Us
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    className={`text-gray-400 ${social.color} transition-colors duration-300`}
                    aria-label={social.name}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>

            {/* Important Government Links */}
            <div>
              <h3 className="text-lg font-semibold text-white mb-4">
                Important Links
              </h3>
              <div className="grid grid-cols-2 gap-2">
                {importantLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-300 hover:text-yellow-400 transition-colors duration-300 text-sm flex items-center group"
                    target={link.external ? "_blank" : "_self"}
                    rel={link.external ? "noopener noreferrer" : ""}
                  >
                    {link.external && <ExternalLink className="w-3 h-3 mr-1" />}
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Policies & Legal */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex flex-wrap gap-6 mb-4 md:mb-0">
              {policies.map((policy, index) => (
                <a
                  key={index}
                  href={policy.path}
                  className="text-gray-400 hover:text-yellow-400 transition-colors duration-300 text-sm"
                >
                  {policy.name}
                </a>
              ))}
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <Shield className="w-4 h-4" />
                <span>Secure & Encrypted</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="w-4 h-4" />
                <span>Accessible Website</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-gray-800 border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-sm text-gray-400 mb-2 md:mb-0">
              © 2024 Municipal Corporation. All rights reserved.
            </div>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center space-x-2">
                <FileText className="w-4 h-4" />
                <span>Last Updated: {new Date().toLocaleDateString()}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Download className="w-4 h-4" />
                <a
                  href="/downloads"
                  className="hover:text-yellow-400 transition-colors duration-300"
                >
                  Downloads
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Accessibility Notice */}
      <div className="bg-yellow-600 text-yellow-900 py-2">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-sm">
          <p>
            <strong>Accessibility Notice:</strong> This website is designed to
            be accessible to all users. If you encounter any accessibility
            issues, please contact us at accessibility@municipality.gov.in
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
