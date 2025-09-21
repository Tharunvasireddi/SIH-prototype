import { useState } from "react";
import { Upload, FileText, MapPin, Camera, AlertCircle, CheckCircle } from "lucide-react";

const ReportIssue = () => {
  const [formData, setFormData] = useState({
    description: "",
    location: "",
  });
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  // Handle text inputs
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // File upload
  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files);
    const newFiles = files.map((file) => ({
      id: Date.now() + Math.random(),
      file,
      name: file.name,
      size: file.size,
      type: file.type,
    }));

    setUploadedFiles((prev) => [...prev, ...newFiles]);
  };

  const removeFile = (fileId) => {
    setUploadedFiles((prev) => prev.filter((file) => file.id !== fileId));
  };

  // Auto fetch location
  const getLocation = () => {
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFormData((prev) => ({
          ...prev,
          location: `${position.coords.latitude}, ${position.coords.longitude}`,
        }));
      },
      () => {
        alert("Unable to fetch your location.");
      }
    );
  };

  // Validate
  const validateForm = () => {
    const newErrors = {};
    if (!formData.description.trim()) newErrors.description = "Description is required";
    if (uploadedFiles.length === 0) newErrors.files = "Please upload at least one image";
    if (!formData.location.trim()) newErrors.location = "Please enable location";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 2000);
  };

  if (submitSuccess) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="max-w-md bg-white p-8 shadow-xl rounded-lg text-center">
          <CheckCircle className="mx-auto h-16 w-16 text-green-500 mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Issue Submitted!</h2>
          <p className="text-gray-600 mb-6">
            Thank you for reporting. Our team will review and take necessary action.
          </p>
          <button
            onClick={() => setSubmitSuccess(false)}
            className="px-6 py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 transition"
          >
            Report Another Issue
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-lg overflow-hidden">
        <form onSubmit={handleSubmit} className="p-8 space-y-6">
          {/* Header */}
          <div className="text-center">
            <Camera className="h-10 w-10 mx-auto text-yellow-600 mb-3" />
            <h2 className="text-2xl font-bold text-gray-900">Report an Issue</h2>
            <p className="text-gray-600">Help us improve by reporting civic issues in your area</p>
          </div>

          {/* Description */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Problem Description *
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={4}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 ${
                errors.description ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Describe the issue (e.g., pothole near XYZ street)..."
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.description}
              </p>
            )}
          </div>

          {/* File Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Upload Images *</label>
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-yellow-400 transition">
              <Camera className="mx-auto h-10 w-10 text-gray-400 mb-2" />
              <p className="text-sm text-gray-600">Upload photos of the issue</p>
              <input
                type="file"
                multiple
                accept=".png,.jpg,.jpeg"
                onChange={handleFileUpload}
                className="hidden"
                id="issue-file-upload"
              />
              <label
                htmlFor="issue-file-upload"
                className="mt-3 inline-flex items-center px-4 py-2 bg-yellow-600 text-white rounded-md cursor-pointer hover:bg-yellow-700 transition"
              >
                <Upload className="h-4 w-4 mr-2" />
                Choose Images
              </label>
            </div>
            {errors.files && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.files}
              </p>
            )}

            {/* Uploaded Preview */}
            {uploadedFiles.length > 0 && (
              <div className="mt-3 space-y-2">
                {uploadedFiles.map((file) => (
                  <div
                    key={file.id}
                    className="flex items-center justify-between p-3 bg-gray-50 rounded-lg"
                  >
                    <div className="flex items-center space-x-3">
                      <FileText className="h-5 w-5 text-gray-400" />
                      <span className="text-sm font-medium">{file.name}</span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeFile(file.id)}
                      className="text-red-500 hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Location */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Location *</label>
            <div className="flex space-x-2">
              <input
                type="text"
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                readOnly
                className={`flex-1 px-4 py-3 border rounded-lg focus:ring-2 focus:ring-yellow-500 ${
                  errors.location ? "border-red-500" : "border-gray-300"
                }`}
                placeholder="Enable GPS to get location"
              />
              <button
                type="button"
                onClick={getLocation}
                className="px-4 py-2 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700"
              >
                <MapPin className="h-5 w-5" />
              </button>
            </div>
            {errors.location && (
              <p className="mt-1 text-sm text-red-600 flex items-center">
                <AlertCircle className="h-4 w-4 mr-1" /> {errors.location}
              </p>
            )}
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 bg-yellow-600 text-white rounded-lg hover:bg-yellow-700 disabled:opacity-50"
            >
              {isSubmitting ? "Submitting..." : "Submit Issue"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ReportIssue;
