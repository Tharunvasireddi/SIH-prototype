import { useState } from "react";
import { Search, Filter, Grid, List, Download, Eye, Heart } from "lucide-react";

const Images = () => {
  const [viewMode, setViewMode] = useState("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  // Sample images data - replace with actual images from your backend
  const images = [
    {
      id: 1,
      title: "Government Building",
      category: "infrastructure",
      url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop",
      description: "Main government building showcasing modern architecture",
      date: "2024-01-15",
      likes: 24,
    },
    {
      id: 2,
      title: "Public Park",
      category: "public",
      url: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=300&fit=crop",
      description: "Beautiful public park maintained by the government",
      date: "2024-01-20",
      likes: 18,
    },
    {
      id: 3,
      title: "School Campus",
      category: "education",
      url: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=300&fit=crop",
      description: "Newly constructed school building for better education",
      date: "2024-01-25",
      likes: 32,
    },
    {
      id: 4,
      title: "Hospital Facility",
      category: "healthcare",
      url: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=300&fit=crop",
      description: "State-of-the-art medical facility for public health",
      date: "2024-02-01",
      likes: 28,
    },
    {
      id: 5,
      title: "Transport Hub",
      category: "infrastructure",
      url: "https://images.unsplash.com/photo-1544620347-c4fd4a3d5957?w=400&h=300&fit=crop",
      description: "Modern transportation hub connecting the city",
      date: "2024-02-05",
      likes: 21,
    },
    {
      id: 6,
      title: "Library Complex",
      category: "education",
      url: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=400&h=300&fit=crop",
      description: "Digital library with modern facilities",
      date: "2024-02-10",
      likes: 35,
    },
  ];

  const categories = [
    "all",
    "infrastructure",
    "public",
    "education",
    "healthcare",
  ];

  const filteredImages = images.filter((image) => {
    const matchesSearch =
      image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      image.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || image.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Government Gallery
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our collection of images showcasing government initiatives,
            infrastructure projects, and public facilities.
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
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              />
            </div>

            {/* Category Filter */}
            <div className="flex items-center space-x-4">
              <Filter className="text-gray-500" size={20} />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition-all duration-300"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category.charAt(0).toUpperCase() + category.slice(1)}
                  </option>
                ))}
              </select>
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "grid"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <Grid size={20} />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`p-2 rounded-lg transition-all duration-300 ${
                  viewMode === "list"
                    ? "bg-yellow-500 text-white"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                }`}
              >
                <List size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Images Grid/List */}
        <div
          className={`${
            viewMode === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              : "space-y-4"
          }`}
        >
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className={`bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105 group ${
                viewMode === "list" ? "flex" : ""
              }`}
            >
              {/* Image */}
              <div
                className={`relative overflow-hidden ${
                  viewMode === "list" ? "w-64 h-48 flex-shrink-0" : "h-48"
                }`}
              >
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex space-x-2">
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                      <Eye size={16} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                      <Download size={16} />
                    </button>
                    <button className="p-2 bg-white rounded-full text-gray-700 hover:bg-yellow-500 hover:text-white transition-all duration-300">
                      <Heart size={16} />
                    </button>
                  </div>
                </div>
                <div className="absolute top-2 right-2">
                  <span className="px-2 py-1 bg-yellow-500 text-white text-xs font-medium rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className={`p-4 ${viewMode === "list" ? "flex-1" : ""}`}>
                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-yellow-600 transition-colors duration-300">
                  {image.title}
                </h3>
                <p className="text-gray-600 text-sm mb-3 line-clamp-2">
                  {image.description}
                </p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{new Date(image.date).toLocaleDateString()}</span>
                  <div className="flex items-center space-x-1">
                    <Heart size={14} className="text-red-500" />
                    <span>{image.likes}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredImages.length === 0 && (
          <div className="text-center py-12">
            <div className="text-gray-400 mb-4">
              <Search size={48} className="mx-auto" />
            </div>
            <h3 className="text-lg font-medium text-gray-900 mb-2">
              No images found
            </h3>
            <p className="text-gray-600">
              Try adjusting your search or filter criteria.
            </p>
          </div>
        )}

        {/* Results Count */}
        <div className="mt-8 text-center text-gray-600">
          Showing {filteredImages.length} of {images.length} images
        </div>
      </div>
    </div>
  );
};

export default Images;
