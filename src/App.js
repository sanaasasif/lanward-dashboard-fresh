import './App.css';
import LanwardLogo from './LanwardLogo.png';
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
} from 'recharts';

function App() {
  // dummy data (adjust names/values later)
  const soilPh = [
    { farm: 'Hora Farm', ph: 6.4 },
    { farm: 'East Valley', ph: 6.9 },
    { farm: 'North Ridge', ph: 7.2 },
    { farm: 'Willow Creek', ph: 6.6 },
    { farm: 'Prairie View', ph: 7.0 },
  ];

  const fields = [
    { name: 'Field 1', crop: 'Corn'},
    { name: 'Field 2', crop: 'Corn' },
    { name: 'Field 3', crop: 'Wheat' },
    { name: 'Field 4', crop: 'Soy' },
    { name: 'Field 5', crop: 'Corn' },
  ];

  const cropCounts = fields.reduce((acc, field) => {
  acc[field.crop] = (acc[field.crop] || 0) + 1;
  return acc;
  }, {});

  const totalFields = fields.length;

  const pieData = Object.entries(cropCounts).map(([crop, count]) => ({
    crop,
    value: (count / totalFields) * 100, // percentage
  }));

  const ciByFarm = [
    { farm: 'Hora Farm', ci: 20.2 },
    { farm: 'East Valley', ci: -5.7 },
    { farm: 'North Ridge', ci: 11.3 },
    { farm: 'Willow Creek', ci: 29.2 },
    { farm: 'Prairie View', ci: 7.0 },
  ];

  const activities = [
    { type: 'Fertilizer', fieldId: "00000", prodApplied: 'Herbicide', rate: 3, unit: "lbs/ac" },
    { type: 'Fertilizer', fieldId: "00000", prodApplied: 'Herbicide', rate: 3, unit: "lbs/ac" },
    { type: 'Fertilizer', fieldId: "00000", prodApplied: 'Herbicide', rate: 3, unit: "lbs/ac" },
    { type: 'Fertilizer', fieldId: "00000", prodApplied: 'Herbicide', rate: 3, unit: "lbs/ac" },
    { type: 'Fertilizer', fieldId: "00000", prodApplied: 'Herbicide', rate: 3, unit: "lbs/ac" },
  ];

  const eligibility = [
    { farm: 'Hora Farm', area: '100', soil: 'Type 1', elevation: '650', ph: '6.3', eligible: 'Y'},
    { farm: 'East Valley', area: '150', soil: 'Type 2', elevation: '700', ph: '5.8', eligible: 'N'},
    { farm: 'North Ridge', area: '120', soil: 'Type 3', elevation: '710', ph: '6.2', eligible: 'Y'},
  ]

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      {/* Brand row (logo + name) */}
      <div className="pt-4">
        <div className="flex items-center">
          <img
            src={LanwardLogo}
            alt="Lanward Logo"
            className="w-8 h-8 mr-2 rounded-md shadow-sm"
          />
          <span className="text-lg font-semibold text-gray-800">Lanward</span>
        </div>

        {/* Title + grey divider*/}
        <h1 className="mt-4 text-3xl font-bold text-gray-900">Dashboard</h1>
        <hr className="mt-2 mb-6 border-gray-300" />
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
          <p className="text-gray-600">Total Clients</p>
          <p className="text-2xl font-semibold">42</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
          <p className="text-gray-600">Total Fields</p>
          <p className="text-2xl font-semibold">68</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
          <p className="text-gray-600">Total Acres</p>
          <p className="text-2xl font-semibold">1,200</p>
        </div>
        <div className="bg-gray-100 p-6 rounded-2xl shadow text-center">
          <p className="text-gray-600">Avg CI Score</p>
          <p className="text-2xl font-semibold">74</p>
        </div>
      </div>

      {/* Charts row 1: left = soil pH bar chart */}
      <div className="flex flex-wrap gap-6 mb-10 justify-center">
        {/* Left: Average Soil pH per Farm (Bar) */}
        <div className="bg-white p-6 rounded-2xl shadow w-full max-w-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Average Soil pH per Farm
          </h2>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={soilPh} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="farm" tick={{ fontSize: 9 }} />
              <YAxis domain={[5.5, 7.5]} tick={{ fontSize: 9 }} />
              <Tooltip />
              <Bar dataKey="ph" radius={[6, 6, 0, 0]} fill="#60fa81ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Charts row 1: middle = pie chart */}
        <div className="bg-white p-6 rounded-2xl shadow w-full max-w-sm">
          <h2 className="text-base font-semibold text-gray-800 mb-3 text-center">Distribution by Crop</h2>
          <ResponsiveContainer width="100%" height={160}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                nameKey="crop"
                cx="50%"
                cy="50%"
                outerRadius={40}
                fill="#6ea8fe"
                label={(entry) => `${entry.crop} (${entry.value.toFixed(0)}%)`}
              />
              <Tooltip formatter={(value) => `${value.toFixed(0)}%`} />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Charts row 1: right = Avg CI Score by farm */}
        <div className="bg-white p-6 rounded-2xl shadow w-full max-w-sm">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Average CI Score by Farm
          </h2>
          <ResponsiveContainer width="100%" height={160}>
            <BarChart data={ciByFarm} margin={{ top: 4, right: 8, left: 0, bottom: 4 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="farm" tick={{ fontSize: 9 }} />
              <YAxis domain={[-20, 30]} tick={{ fontSize: 9 }} />
              <Tooltip />
              <Bar dataKey="ci" radius={[6, 6, 0, 0]} fill="#60fa81ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

       {/* Charts row 1: left = soil pH bar chart */}
      <div className="flex flex-wrap gap-6 mb-10 justify-center">
        {/* Activities Table */}
        <div className="bg-white p-4 rounded-2xl shadow w-full max-w-3xl mx-auto mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Activities
          </h2>

          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Activity Type</th>
                <th className="py-2 px-4 border-b text-left">Field ID</th>
                <th className="py-2 px-4 border-b text-left">Product Applied</th>
                <th className="py-2 px-4 border-b text-left">Rate</th>
                <th className="py-2 px-4 border-b text-left">Unit</th>
              </tr>
            </thead>
            <tbody>
              {activities.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b">{row.type}</td>
                  <td className="py-2 px-4 border-b">{row.fieldId}</td>
                  <td className="py-2 px-4 border-b">{row.prodApplied}</td>
                  <td className="py-2 px-4 border-b">{row.rate}</td>
                  <td className="py-2 px-4 border-b">{row.unit}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Eligibility Table */}
        <div className="bg-white p-4 rounded-2xl shadow w-full max-w-3xl mx-auto mb-10">
          <h2 className="text-lg font-semibold text-gray-800 mb-4 text-center">
            Eligibility
          </h2>

          <table className="min-w-full border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="py-2 px-4 border-b text-left">Farm</th>
                <th className="py-2 px-4 border-b text-left">Area</th>
                <th className="py-2 px-4 border-b text-left">Soil</th>
                <th className="py-2 px-4 border-b text-left">Elevation</th>
                <th className="py-2 px-4 border-b text-left">pH</th>
                <th className="py-2 px-4 border-b text-left">Eligible</th>
              </tr>
            </thead>
            <tbody>
              {eligibility.map((row, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="py-2 px-4 border-b">{row.farm}</td>
                  <td className="py-2 px-4 border-b">{row.area}</td>
                  <td className="py-2 px-4 border-b">{row.soil}</td>
                  <td className="py-2 px-4 border-b">{row.elevation}</td>
                  <td className="py-2 px-4 border-b">{row.ph}</td>
                  <td className="py-2 px-4 border-b">{row.eligible}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

       
    </div>

    

  );
}

export default App;