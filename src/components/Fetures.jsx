import image1 from "../assests/over-all.jpg";

const Features = () => {
  return (
    <>
      <img src={image1} alt="these are the feautures" className="w-full " />
    </>
  );
};

export default Features;



// import { useEffect, useRef, useState } from "react";
// import { useAuth } from "../contexts/AuthContext";
// import image1 from "../assests/over-all.jpg";

// const STORAGE_REPORTS = "reports_v2";
// const STORAGE_CREDITS = "credits_v1";

// const ISSUE_TYPES = [
//   { value: "garbage", label: "Garbage" },
//   { value: "drainage", label: "Drainage" },
//   { value: "road", label: "Road / Potholes" },
//   { value: "streetlight", label: "Street Light" },
//   { value: "water", label: "Water Supply" },
//   { value: "other", label: "Other" },
// ];

// const STATUS_STEPS = ["submitted", "acknowledged", "resolved"];

// function loadReports() {
//   try {
//     const raw = localStorage.getItem(STORAGE_REPORTS);
//     return raw ? JSON.parse(raw) : [];
//   } catch {
//     return [];
//   }
// }
// function saveReports(r) {
//   localStorage.setItem(STORAGE_REPORTS, JSON.stringify(r));
// }
// function loadCredits() {
//   try {
//     const raw = localStorage.getItem(STORAGE_CREDITS);
//     return raw ? JSON.parse(raw) : { total: 0, history: [] };
//   } catch {
//     return { total: 0, history: [] };
//   }
// }
// function saveCredits(c) {
//   localStorage.setItem(STORAGE_CREDITS, JSON.stringify(c));
// }
// function notify(title, body) {
//   if ("Notification" in window) {
//     if (Notification.permission === "granted") {
//       new Notification(title, { body });
//     } else if (Notification.permission !== "denied") {
//       Notification.requestPermission().then((perm) => {
//         if (perm === "granted") new Notification(title, { body });
//         else alert(${title}\n${body});
//       });
//     } else {
//       alert(${title}\n${body});
//     }
//   } else {
//     alert(${title}\n${body});
//   }
// }

// // Duplicate detection helpers
// function normalizeText(s) {
//   return (s || "").toLowerCase().trim().replace(/\s+/g, " ");
// }
// // ~0.0005 deg ≈ 55m
// function isSameLocation(a, b, tolerance = 0.0005) {
//   if (!a || !b) return false;
//   return Math.abs(a.latitude - b.latitude) <= tolerance && Math.abs(a.longitude - b.longitude) <= tolerance;
// }
// // Return duplicate report id or null
// function findDuplicateReportId(existingReports, form) {
//   const normType = (form.type || "").toLowerCase();
//   const normTitle = normalizeText(form.title);
//   const normDesc = normalizeText(form.description);
//   const hasLoc = !!form.location;

//   for (const r of existingReports) {
//     const sameType = (r.type || "").toLowerCase() === normType;
//     const sameTitle = normalizeText(r.title) === normTitle;

//     if (hasLoc && r.location) {
//       if (sameType && sameTitle && isSameLocation(r.location, form.location)) return r.id;
//     } else {
//       const sameDesc = normalizeText(r.description) === normDesc;
//       if (sameType && sameTitle && sameDesc) return r.id;
//     }
//   }
//   return null;
// }

// // Enhanced image validation functions
// function validateImageRelevance(imageFile, issueType, description) {
//   return new Promise((resolve) => {
//     const img = new Image();
//     img.onload = () => {
//       const canvas = document.createElement('canvas');
//       const ctx = canvas.getContext('2d');
//       canvas.width = img.width;
//       canvas.height = img.height;
//       ctx.drawImage(img, 0, 0);
      
//       const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
//       const data = imageData.data;
      
//       // Analyze image characteristics
//       const analysis = analyzeImageContent(data, canvas.width, canvas.height);
      
//       // Check relevance based on issue type
//       const isRelevant = checkRelevanceByType(analysis, issueType, description);
      
//       resolve({
//         isValid: isRelevant,
//         message: isRelevant ? "Image is relevant" : getRelevanceMessage(issueType)
//       });
//     };
//     img.onerror = () => resolve({ isValid: false, message: "Invalid image file" });
//     img.src = URL.createObjectURL(imageFile);
//   });
// }

// function analyzeImageContent(data, width, height) {
//   let totalPixels = 0;
//   let darkPixels = 0;
//   let brightPixels = 0;
//   let colorVariation = 0;
  
//   // Sample every 4th pixel for performance
//   for (let i = 0; i < data.length; i += 16) {
//     const r = data[i];
//     const g = data[i + 1];
//     const b = data[i + 2];
//     const brightness = (r + g + b) / 3;
    
//     totalPixels++;
    
//     if (brightness < 50) darkPixels++;
//     if (brightness > 200) brightPixels++;
    
//     // Calculate color variation
//     const avgColor = (r + g + b) / 3;
//     colorVariation += Math.abs(r - avgColor) + Math.abs(g - avgColor) + Math.abs(b - avgColor);
//   }
  
//   return {
//     totalPixels,
//     darkRatio: darkPixels / totalPixels,
//     brightRatio: brightPixels / totalPixels,
//     colorVariation: colorVariation / totalPixels,
//     aspectRatio: width / height
//   };
// }

// function checkRelevanceByType(analysis, issueType, description) {
//   const desc = description.toLowerCase();
  
//   switch (issueType) {
//     case 'garbage':
//       // Garbage should have organic colors, some dark areas, moderate variation
//       return analysis.colorVariation > 20 && analysis.colorVariation < 80 && 
//              analysis.darkRatio > 0.1 && analysis.darkRatio < 0.4;
             
//     case 'drainage':
//       // Drainage should have water-like colors (blues, grays), some dark areas
//       return analysis.colorVariation > 15 && analysis.colorVariation < 60 &&
//              (desc.includes('water') || desc.includes('drain') || desc.includes('sewer'));
             
//     case 'road':
//       // Roads should have asphalt-like colors (dark grays), linear patterns
//       return analysis.darkRatio > 0.3 && analysis.colorVariation < 40 &&
//              (desc.includes('road') || desc.includes('pothole') || desc.includes('asphalt'));
             
//     case 'streetlight':
//       // Street lights should have bright areas, some dark background
//       return analysis.brightRatio > 0.1 && analysis.darkRatio > 0.2 &&
//              (desc.includes('light') || desc.includes('lamp') || desc.includes('illumination'));
             
//     case 'water':
//       // Water issues should have blue/gray tones, some variation
//       return analysis.colorVariation > 10 && analysis.colorVariation < 50 &&
//              (desc.includes('water') || desc.includes('supply') || desc.includes('leak'));
             
//     default:
//       // For 'other', be more lenient but still check basic image quality
//       return analysis.colorVariation > 10 && analysis.totalPixels > 1000;
//   }
// }

// function getRelevanceMessage(issueType) {
//   const messages = {
//     garbage: "Please upload an image showing garbage/waste. The image should contain organic materials or waste items.",
//     drainage: "Please upload an image showing drainage/sewer issues. The image should contain water, pipes, or drainage systems.",
//     road: "Please upload an image showing road/pothole issues. The image should contain road surface, asphalt, or pavement.",
//     streetlight: "Please upload an image showing street light issues. The image should contain lighting fixtures or illumination problems.",
//     water: "Please upload an image showing water supply issues. The image should contain water-related problems or infrastructure.",
//     other: "Please upload an image that clearly shows the issue you're reporting."
//   };
//   return messages[issueType] || messages.other;
// }

// const Features = () => {
//     const { user, updateProfile } = useAuth();
//     const [reports, setReports] = useState(loadReports());

//   const [showReportForm, setShowReportForm] = useState(false);
//   const [showTracking, setShowTracking] = useState(false);
//   const [showCredits, setShowCredits] = useState(false);
//   const [showDashboard, setShowDashboard] = useState(false);
//   const [showBarGraph, setShowBarGraph] = useState(false);

//   // Report form state
//   const [form, setForm] = useState({
//     title: "",
//     type: "",
//     description: "",
//     photo: null,
//     location: null,
//     audio: null,
//   });
//   const [preview, setPreview] = useState(null);
//   const [locStatus, setLocStatus] = useState("");
//   const [imageValidationError, setImageValidationError] = useState("");
//   const [submitting, setSubmitting] = useState(false);

//   // Voice recording
//   const [recording, setRecording] = useState(false);
//   const [audioURL, setAudioURL] = useState(null);
//   const mediaRecorderRef = useRef(null);
//   const audioChunksRef = useRef([]);

//   // AI Chatbot state
//   const [showChat, setShowChat] = useState(false);
//   const [chatMsgs, setChatMsgs] = useState([
//     { sender: "bot", text: "Hi! I'm your assistant. How can I help you today?" },
//   ]);
//   const [chatInput, setChatInput] = useState("");

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setForm((p) => ({ ...p, [name]: value }));
//   };

//   const handleFile = async (e) => {
//     const file = e.target.files && e.target.files[0];
//     if (!file) return;
    
//     setForm((p) => ({ ...p, photo: file }));
//     setPreview(URL.createObjectURL(file));
//     setImageValidationError("");
    
//     // Validate image relevance
//     const validation = await validateImageRelevance(file, form.type, form.description);
//     if (!validation.isValid) {
//       setImageValidationError(validation.message);
//       setForm((p) => ({ ...p, photo: null }));
//       setPreview(null);
//     }
//   };

//   const getLocation = () => {
//     setLocStatus("Getting location...");
//     if (navigator.geolocation) {
//       navigator.geolocation.getCurrentPosition(
//         (pos) => {
//           setForm((p) => ({
//             ...p,
//             location: {
//               latitude: pos.coords.latitude,
//               longitude: pos.coords.longitude,
//             },
//           }));
//           setLocStatus("Location captured!");
//         },
//         () => setLocStatus("Location access denied"),
//         { timeout: 10000 }
//       );
//     } else {
//       setLocStatus("Geolocation not supported");
//     }
//   };

//   const startRecording = async () => {
//     try {
//       const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
//       mediaRecorderRef.current = new MediaRecorder(stream);
//       audioChunksRef.current = [];

//       mediaRecorderRef.current.ondataavailable = (e) => {
//         audioChunksRef.current.push(e.data);
//       };

//       mediaRecorderRef.current.onstop = () => {
//         const audioBlob = new Blob(audioChunksRef.current, { type: "audio/wav" });
//         setForm((p) => ({ ...p, audio: audioBlob }));
//         setAudioURL(URL.createObjectURL(audioBlob));
//         stream.getTracks().forEach((track) => track.stop());
//       };

//       mediaRecorderRef.current.start();
//       setRecording(true);
//     } catch (err) {
//       console.error("Error accessing microphone:", err);
//     }
//   };

//   const stopRecording = () => {
//     if (mediaRecorderRef.current && recording) {
//       mediaRecorderRef.current.stop();
//       setRecording(false);
//     }
//   };

//   const clearAudio = () => {
//     setForm((p) => ({ ...p, audio: null }));
//     setAudioURL(null);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setSubmitting(true);

//     try {
//       const reports = loadReports();
//       const duplicateId = findDuplicateReportId(reports, form);
      
//       if (duplicateId) {
//         // Update existing report with user count
//         const updatedReports = reports.map(r => 
//           r.id === duplicateId 
//             ? { ...r, userCount: (r.userCount || 1) + 1, lastReported: new Date().toISOString() }
//             : r
//         );
//         saveReports(updatedReports);
//         setReports(updatedReports);
        
//         // Award credits for duplicate report
// const newCredits = user.credits + 5;
// updateProfile({ 
//   credits: newCredits,
//   reportsCount: (user.reportsCount || 0) + 1
// });
        
//         notify("Report Updated", This issue was already reported. Your report has been added to the existing ticket #${duplicateId}. You earned 5 credits!);
//       } else {
//         // Create new report
//         const newReport = {
//           id: Date.now().toString(),
//           ...form,
//           status: "submitted",
//           priority: Math.floor(Math.random() * 100) + 1,
//           userCount: 1,
//           createdAt: new Date().toISOString(),
//           lastReported: new Date().toISOString(),
//         };
        
//         const updatedReports = [...reports, newReport];
//         saveReports(updatedReports);
//         setReports(updatedReports);
        
//        // Award credits for new report
// const newCredits = user.credits + 10;
// updateProfile({ 
//   credits: newCredits,
//   reportsCount: (user.reportsCount || 0) + 1
// });
        
//         notify("Report Submitted", Your report has been submitted with ID #${newReport.id}. You earned 10 credits!);
//       }

//       // Reset form
//       setForm({
//         title: "",
//         type: "",
//         description: "",
//         photo: null,
//         location: null,
//         audio: null,
//       });
//       setPreview(null);
//       setAudioURL(null);
//       setImageValidationError("");
//       setLocStatus("");
      
//     } catch (error) {
//       console.error("Error submitting report:", error);
//     } finally {
//       setSubmitting(false);
//     }
//   };

//   // Send chat message
//   const sendChat = (e) => {
//     e.preventDefault();
//     const text = chatInput.trim();
//     if (!text) return;
//     const userMsg = { sender: "user", text };
//     setChatMsgs((m) => [...m, userMsg]);
//     setChatInput("");

//     // Simple bot reply (demo)
//     setTimeout(() => {
//       const reply =
//         text.toLowerCase().includes("report") || text.toLowerCase().includes("issue")
//           ? "I can help you report issues! Go to the 'Report an Issue' card and fill out the form with details, photos, and location."
//           : text.toLowerCase().includes("track")
//           ? "You can track your reports in the 'Tracking' card. It shows the status of all your submitted reports."
//           : text.toLowerCase().includes("credit")
//           ? You currently have ${credits.total} credits! Check the 'Credits & Rewards' card for details.
//           : "I'm here to help! You can report issues, track progress, view credits, and see analytics. What would you like to know?";
//       setChatMsgs((m) => [...m, { sender: "bot", text: reply }]);
//     }, 1000);
//   };

//   // Derived data
//   const deptStats = ISSUE_TYPES.reduce((acc, t) => {
//     const items = reports.filter((r) => r.type === t.value);
//     const total = items.length;
//     const solved = items.filter((r) => r.status === "resolved").length;
//     const unsolved = total - solved;
//     acc[t.value] = { label: t.label, total, solved, unsolved };
//     return acc;
//   }, {});

//   const leaderKey = Object.keys(deptStats).reduce((a, b) => 
//     deptStats[a].solved > deptStats[b].solved ? a : 
//     deptStats[a].solved === deptStats[b].solved && deptStats[a].total > deptStats[b].total ? a : b
//   );

//   const sortedByPriority = [...reports].sort((a, b) => (b.priority || 0) - (a.priority || 0));

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <div className="bg-white shadow-sm border-b">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
//           <div className="flex items-center justify-between">
//             <div>
//               <h1 className="text-3xl font-bold text-gray-900">Features Dashboard</h1>
//               <p className="text-gray-600 mt-1">Manage reports, track progress, and view analytics</p>
//             </div>
//             <div className="flex items-center space-x-4">
//               <div className="text-right">
//                 <p className="text-sm text-gray-600">Total Credits</p>
//                 <p className="text-2xl font-bold text-blue-600">{user?.credits || 0}</p>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Main Content */}
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
//           {/* Report an Issue Card */}
//           <div className="bg-white rounded-xl shadow-md border border-gray-200">
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-900">Report an Issue</h2>
//               <p className="text-gray-600 text-sm mt-1">Describe, attach photo/voice, and geotag.</p>
//               <button
//                 className="mt-4 px-4 py-2 rounded-lg bg-yellow-500 text-white font-medium hover:bg-yellow-600"
//                 onClick={() => setShowReportForm((s) => !s)}
//               >
//                 {showReportForm ? "Close" : "Open"}
//               </button>
//             </div>
//             {showReportForm && (
//               <div className="px-5 pb-5">
//                 <form onSubmit={handleSubmit} className="space-y-5">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Issue Type *
//                     </label>
//                     <select
//                       name="type"
//                       value={form.type}
//                       onChange={handleChange}
//                       required
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     >
//                       <option value="">Select issue type</option>
//                       {ISSUE_TYPES.map((type) => (
//                         <option key={type.value} value={type.value}>
//                           {type.label}
//                         </option>
//                       ))}
//                     </select>
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Title *
//                     </label>
//                     <input
//                       type="text"
//                       name="title"
//                       value={form.title}
//                       onChange={handleChange}
//                       required
//                       placeholder="Brief description of the issue"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Description *
//                     </label>
//                     <textarea
//                       name="description"
//                       value={form.description}
//                       onChange={handleChange}
//                       required
//                       rows={4}
//                       placeholder="Detailed description of the issue"
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Photo (Camera)
//                     </label>
//                     <input
//                       type="file"
//                       accept="image/*"
//                       capture="environment"
//                       onChange={handleFile}
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                     />
//                     {preview && (
//                       <div className="mt-2">
//                         <img
//                           src={preview}
//                           alt="Preview"
//                           className="w-32 h-32 object-cover rounded-lg border"
//                         />
//                       </div>
//                     )}
//                     {imageValidationError && (
//                       <p className="text-red-500 text-sm mt-1">{imageValidationError}</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Voice Recording
//                     </label>
//                     <div className="flex items-center space-x-3">
//                       <button
//                         type="button"
//                         onClick={recording ? stopRecording : startRecording}
//                         className={`px-4 py-2 rounded-lg font-medium ${
//                           recording
//                             ? "bg-red-500 text-white hover:bg-red-600"
//                             : "bg-green-500 text-white hover:bg-green-600"
//                         }`}
//                       >
//                         {recording ? "Stop Recording" : "Start Recording"}
//                       </button>
//                       {audioURL && (
//                         <div className="flex items-center space-x-2">
//                           <audio controls src={audioURL} className="h-8" />
//                           <button
//                             type="button"
//                             onClick={clearAudio}
//                             className="text-red-500 hover:text-red-700"
//                           >
//                             Remove
//                           </button>
//                         </div>
//                       )}
//                     </div>
//                     {recording && (
//                       <p className="text-sm text-gray-600 mt-1">Recording... Click stop when done</p>
//                     )}
//                   </div>

//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">
//                       Location (Geotag)
//                     </label>
//                     <div className="flex items-center space-x-3">
//                       <button
//                         type="button"
//                         onClick={getLocation}
//                         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//                       >
//                         Get Current Location
//                       </button>
//                       {locStatus && (
//                         <span className="text-sm text-gray-600">{locStatus}</span>
//                       )}
//                     </div>
//                     {form.location && (
//                       <p className="text-sm text-gray-600 mt-1">
//                         Lat: {form.location.latitude.toFixed(6)}, 
//                         Lng: {form.location.longitude.toFixed(6)}
//                       </p>
//                     )}
//                   </div>

//                   <button
//                     type="submit"
//                     disabled={submitting}
//                     className="w-full px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed"
//                   >
//                     {submitting ? "Submitting..." : "Submit Report"}
//                   </button>
//                 </form>
//               </div>
//             )}
//           </div>

//           {/* Tracking Card */}
//           <div className="bg-white rounded-xl shadow-md border border-gray-200">
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-900">Track Reports</h2>
//               <p className="text-gray-600 text-sm mt-1">Monitor your submitted issues.</p>
//               <button
//                 className="mt-4 px-4 py-2 rounded-lg bg-green-500 text-white font-medium hover:bg-green-600"
//                 onClick={() => setShowTracking((s) => !s)}
//               >
//                 {showTracking ? "Close" : "View Reports"}
//               </button>
//             </div>
//             {showTracking && (
//               <div className="px-5 pb-5">
//                 <div className="space-y-4">
//                   {reports.length === 0 ? (
//                     <p className="text-gray-500 text-center py-4">No reports submitted yet</p>
//                   ) : (
//                     reports.map((report) => (
//                       <div key={report.id} className="border border-gray-200 rounded-lg p-4">
//                         <div className="flex justify-between items-start mb-2">
//                           <h3 className="font-medium text-gray-900">#{report.id}</h3>
//                           <span className={`px-2 py-1 rounded-full text-xs font-medium ${
//                             report.status === 'resolved' ? 'bg-green-100 text-green-800' :
//                             report.status === 'acknowledged' ? 'bg-yellow-100 text-yellow-800' :
//                             'bg-blue-100 text-blue-800'
//                           }`}>
//                             {report.status}
//                           </span>
//                         </div>
//                         <p className="text-sm text-gray-600 mb-2">{report.title}</p>
//                         <div className="text-xs text-gray-500">
//                           <p>Type: {ISSUE_TYPES.find(t => t.value === report.type)?.label}</p>
//                           <p>Users reported: {report.userCount || 1}</p>
//                           <p>Priority: {report.priority}%</p>
//                           <p>Created: {new Date(report.createdAt).toLocaleDateString()}</p>
//                         </div>
//                         <div className="mt-3">
//                           <div className="flex space-x-2">
//                             {STATUS_STEPS.map((step, idx) => (
//                               <div key={step} className="flex items-center">
//                                 <div className={`w-3 h-3 rounded-full ${
//                                   STATUS_STEPS.indexOf(report.status) >= idx ? 'bg-blue-500' : 'bg-gray-300'
//                                 }`} />
//                                 <span className="ml-1 text-xs text-gray-600 capitalize">{step}</span>
//                                 {idx < STATUS_STEPS.length - 1 && <div className="w-8 h-0.5 bg-gray-300 mx-2" />}
//                               </div>
//                             ))}
//                           </div>
//                         </div>
//                       </div>
//                     ))
//                   )}
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Credits & Rewards Card */}
//           <div className="bg-white rounded-xl shadow-md border border-gray-200">
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-900">Credits & Rewards</h2>
//               <p className="text-gray-600 text-sm mt-1">Your earned credits and rewards.</p>
//               <button
//                 className="mt-4 px-4 py-2 rounded-lg bg-purple-500 text-white font-medium hover:bg-purple-600"
//                 onClick={() => setShowCredits((s) => !s)}
//               >
//                 {showCredits ? "Close" : "View Credits"}
//               </button>
//             </div>
//             {showCredits && (
//               <div className="px-5 pb-5">
//                 <div className="text-center mb-4">
//                 <div className="text-3xl font-bold text-purple-600">{user?.credits || 0}</div>
//                   <div className="text-sm text-gray-600">Total Credits</div>
//                 </div>
//                 <div className="space-y-2">
//   <h3 className="font-medium text-gray-900">Account Info</h3>
//   <div className="text-sm text-gray-600">
//     <p>Reports Submitted: {user?.reportsCount || 0}</p>
//     <p>Member Since: {user?.joinDate ? new Date(user.joinDate).toLocaleDateString() : 'N/A'}</p>
//   </div>
// </div>
//               </div>
//             )}
//           </div>

//           {/* Dashboard Card */}
//           <div className="bg-white rounded-xl shadow-md border border-gray-200">
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-900">Dashboard</h2>
//               <p className="text-gray-600 text-sm mt-1">Issues overview with priority.</p>
//               <button
//                 className="mt-4 px-4 py-2 rounded-lg bg-indigo-500 text-white font-medium hover:bg-indigo-600"
//                 onClick={() => setShowDashboard((s) => !s)}
//               >
//                 {showDashboard ? "Close" : "View Dashboard"}
//               </button>
//             </div>
//             {showDashboard && (
//               <div className="px-5 pb-5">
//                 <div className="space-y-3">
//                   <div className="text-center mb-4">
//                     <div className="text-2xl font-bold text-indigo-600">{reports.length}</div>
//                     <div className="text-sm text-gray-600">Total Issues</div>
//                   </div>
//                   <h3 className="font-medium text-gray-900">Recent Issues (by Priority)</h3>
//                   <div className="space-y-2 max-h-60 overflow-y-auto">
//                     {sortedByPriority.slice(0, 8).map((report) => (
//                       <div key={report.id} className="border border-gray-200 rounded-lg p-3">
//                         <div className="flex justify-between items-start">
//                           <div className="flex-1">
//                             <p className="text-sm font-medium text-gray-900">{report.title}</p>
//                             <p className="text-xs text-gray-600">{ISSUE_TYPES.find(t => t.value === report.type)?.label}</p>
//                           </div>
//                           <div className="text-right">
//                             <div className="text-sm font-bold text-red-600">{report.priority}%</div>
//                             <div className="text-xs text-gray-500">{report.userCount || 1} users</div>
//                           </div>
//                         </div>
//                         <div className="mt-2">
//                           <div className="w-full bg-gray-200 rounded-full h-2">
//                             <div 
//                               className="bg-red-500 h-2 rounded-full" 
//                               style={{ width: ${report.priority}% }}
//                             />
//                           </div>
//                         </div>
//                       </div>
//                     ))}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>

//           {/* Bar Graph Card */}
//           <div className="bg-white rounded-xl shadow-md border border-gray-200">
//             <div className="p-5">
//               <h2 className="text-xl font-semibold text-gray-900">Department Analytics</h2>
//               <p className="text-gray-600 text-sm mt-1">Performance by department.</p>
//               <button
//                 className="mt-4 px-4 py-2 rounded-lg bg-orange-500 text-white font-medium hover:bg-orange-600"
//                 onClick={() => setShowBarGraph((s) => !s)}
//               >
//                 {showBarGraph ? "Close" : "View Analytics"}
//               </button>
//             </div>
//             {showBarGraph && (
//               <div className="px-5 pb-5">
//                 <div className="space-y-4">
//                   <div className="text-center mb-4">
//                     <div className="text-lg font-bold text-orange-600">{deptStats[leaderKey]?.label}</div>
//                     <div className="text-sm text-gray-600">Leading Department</div>
//                     <div className="text-xs text-gray-500">
//                       {deptStats[leaderKey]?.solved} solved, {deptStats[leaderKey]?.unsolved} unsolved
//                     </div>
//                   </div>
//                   <div className="space-y-3">
//                     {ISSUE_TYPES.map((type) => {
//                       const stats = deptStats[type.value];
//                       if (!stats || stats.total === 0) return null;
//                       return (
//                         <div key={type.value} className="border border-gray-200 rounded-lg p-3">
//                           <div className="flex justify-between items-center mb-2">
//                             <span className="text-sm font-medium text-gray-900">{type.label}</span>
//                             <span className="text-xs text-gray-600">{stats.total} total</span>
//                           </div>
//                           <div className="grid grid-cols-2 gap-2 text-xs">
//                             <div className="text-green-600">✓ {stats.solved} solved</div>
//                             <div className="text-red-600">✗ {stats.unsolved} unsolved</div>
//                           </div>
//                           <div className="mt-2">
//                             <div className="w-full bg-gray-200 rounded-full h-2">
//                               <div 
//                                 className="bg-green-500 h-2 rounded-full" 
//                                 style={{ width: ${(stats.solved / stats.total) * 100}% }}
//                               />
//                             </div>
//                           </div>
//                         </div>
//                       );
//                     })}
//                   </div>
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* AI Chatbot */}
//       <div className="fixed bottom-6 right-6 z-50">
//         <button
//           onClick={() => setShowChat(!showChat)}
//           className="bg-blue-600 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
//           </svg>
//         </button>

//         {showChat && (
//           <div className="absolute bottom-20 right-0 w-80 h-96 bg-white rounded-lg shadow-xl border border-gray-200 flex flex-col">
//             <div className="p-4 border-b border-gray-200">
//               <div className="flex justify-between items-center">
//                 <h3 className="font-medium text-gray-900">AI Assistant</h3>
//                 <button
//                   onClick={() => setShowChat(false)}
//                   className="text-gray-400 hover:text-gray-600"
//                 >
//                   ✕
//                 </button>
//               </div>
//             </div>
//             <div className="flex-1 overflow-y-auto p-4 space-y-3">
//               {chatMsgs.map((msg, idx) => (
//                 <div
//                   key={idx}
//                   className={flex ${msg.sender === "user" ? "justify-end" : "justify-start"}}
//                 >
//                   <div
//                     className={`max-w-xs px-3 py-2 rounded-lg text-sm ${
//                       msg.sender === "user"
//                         ? "bg-blue-600 text-white"
//                         : "bg-gray-100 text-gray-900"
//                     }`}
//                   >
//                     {msg.text}
//                   </div>
//                 </div>
//               ))}
//             </div>
//             <form onSubmit={sendChat} className="p-4 border-t border-gray-200">
//               <div className="flex space-x-2">
//                 <input
//                   type="text"
//                   value={chatInput}
//                   onChange={(e) => setChatInput(e.target.value)}
//                   placeholder="Type your message..."
//                   className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
//                 />
//                 <button
//                   type="submit"
//                   className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 text-sm"
//                 >
//                   Send
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default Features;