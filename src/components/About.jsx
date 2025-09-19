import {
  Users,
  Target,
  Award,
  MapPin,
  Phone,
  Mail,
  Clock,
  Building,
  Shield,
  Heart,
  Star,
  CheckCircle,
  TrendingUp,
  Globe,
} from "lucide-react";

const About = () => {
  const stats = [
    {
      icon: Users,
      label: "Population Served",
      value: "5.2M+",
      color: "text-blue-600",
    },
    {
      icon: Building,
      label: "Municipal Areas",
      value: "6",
      color: "text-green-600",
    },
    {
      icon: Award,
      label: "Years of Service",
      value: "75+",
      color: "text-yellow-600",
    },
    {
      icon: CheckCircle,
      label: "Services Provided",
      value: "50+",
      color: "text-purple-600",
    },
  ];

  const services = [
    {
      title: "Public Health",
      description:
        "Comprehensive healthcare services, sanitation programs, and disease prevention initiatives.",
      icon: Heart,
      color: "bg-red-100 text-red-600",
    },
    {
      title: "Infrastructure",
      description:
        "Road maintenance, water supply, electricity, and urban development projects.",
      icon: Building,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Education",
      description:
        "School management, educational programs, and student welfare initiatives.",
      icon: Users,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Public Safety",
      description:
        "Emergency services, disaster management, and community safety programs.",
      icon: Shield,
      color: "bg-yellow-100 text-yellow-600",
    },
    {
      title: "Environmental",
      description:
        "Waste management, pollution control, and sustainable development projects.",
      icon: Globe,
      color: "bg-emerald-100 text-emerald-600",
    },
    {
      title: "Social Welfare",
      description:
        "Community development, women's welfare, and social assistance programs.",
      icon: Heart,
      color: "bg-pink-100 text-pink-600",
    },
  ];

  const achievements = [
    {
      year: "2024",
      title: "Digital Transformation Award",
      description:
        "Recognized for implementing comprehensive digital governance solutions",
    },
    {
      year: "2023",
      title: "Best Municipal Corporation",
      description:
        "Awarded by the State Government for outstanding public service delivery",
    },
    {
      year: "2022",
      title: "Green City Initiative",
      description:
        "Successfully implemented sustainable urban development programs",
    },
    {
      year: "2021",
      title: "COVID-19 Response Excellence",
      description:
        "Recognized for effective pandemic management and public health initiatives",
    },
  ];

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Municipal Commissioner",
      experience: "25+ years",
      education: "Ph.D. in Public Administration",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Ms. Priya Sharma",
      position: "Deputy Commissioner",
      experience: "20+ years",
      education: "M.A. in Urban Planning",
      image:
        "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=200&h=200&fit=crop&crop=face",
    },
    {
      name: "Mr. Amit Singh",
      position: "Chief Engineer",
      experience: "18+ years",
      education: "B.Tech in Civil Engineering",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop&crop=face",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About Our Municipal Corporation
            </h1>
            <p className="text-xl md:text-2xl text-yellow-100 max-w-3xl mx-auto">
              Serving our community with dedication, innovation, and excellence
              for over 75 years
            </p>
          </div>
        </div>
      </div>

      {/* Statistics Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div
                  className={`inline-flex p-4 rounded-full bg-gray-100 mb-4`}
                >
                  <stat.icon className={`w-8 h-8 ${stat.color}`} />
                </div>
                <h3 className="text-3xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </h3>
                <p className="text-gray-600">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mission & Vision Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <Target className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">
                  Our Mission
                </h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To provide efficient, transparent, and citizen-centric municipal
                services that enhance the quality of life for all residents. We
                are committed to sustainable urban development, environmental
                protection, and fostering a vibrant, inclusive community.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow-md p-8">
              <div className="flex items-center mb-6">
                <Star className="w-8 h-8 text-yellow-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
              </div>
              <p className="text-gray-600 text-lg leading-relaxed">
                To become a model municipal corporation that sets the standard
                for urban governance, innovation, and public service delivery.
                We envision a smart, sustainable, and prosperous city that
                serves as a beacon of excellence for future generations.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive municipal services to ensure the
              well-being and development of our community
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <div
                  className={`inline-flex p-3 rounded-full ${service.color} mb-4`}
                >
                  <service.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Achievements Section */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Achievements
            </h2>
            <p className="text-xl text-gray-600">
              Recognition and awards that reflect our commitment to excellence
            </p>
          </div>

          <div className="space-y-8">
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-md p-6 flex items-center"
              >
                <div className="bg-yellow-100 text-yellow-800 px-4 py-2 rounded-full font-bold text-lg mr-6">
                  {achievement.year}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </div>
                <Award className="w-8 h-8 text-yellow-600" />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Leadership Section */}
      <div className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Our Leadership
            </h2>
            <p className="text-xl text-gray-600">
              Meet the dedicated leaders who guide our municipal corporation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {leadership.map((leader, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 text-center"
              >
                <img
                  src={leader.image}
                  alt={leader.name}
                  className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {leader.name}
                </h3>
                <p className="text-yellow-600 font-medium mb-2">
                  {leader.position}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {leader.experience} Experience
                </p>
                <p className="text-gray-600 text-sm">{leader.education}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Contact Information */}
      <div className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Get in Touch
              </h2>
              <p className="text-xl text-gray-600">
                We're here to serve you. Contact us for any municipal services
                or inquiries.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Address
                </h3>
                <p className="text-gray-600">
                  Municipal Corporation Building
                  <br />
                  City Center, Main Street
                  <br />
                  State, Country - 123456
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Phone
                </h3>
                <p className="text-gray-600">
                  +91-9876543210
                  <br />
                  +91-9876543211
                  <br />
                  Emergency: +91-100
                </p>
              </div>

              <div className="text-center">
                <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Email
                </h3>
                <p className="text-gray-600">
                  info@municipality.gov.in
                  <br />
                  commissioner@municipality.gov.in
                  <br />
                  support@municipality.gov.in
                </p>
              </div>
            </div>

            <div className="mt-8 text-center">
              <div className="bg-yellow-100 text-yellow-600 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="w-8 h-8" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Office Hours
              </h3>
              <p className="text-gray-600">
                Monday to Friday: 9:00 AM - 5:00 PM
                <br />
                Saturday: 9:00 AM - 1:00 PM
                <br />
                Sunday: Closed (Emergency services available 24/7)
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
