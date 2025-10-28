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

      {/* Charts row: left = soil pH bar chart, right left empty for now */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-10">
        {/* Left: Average Soil pH per Farm (Bar) */}
        <div className="bg-white p-6 rounded-2xl shadow">
          <h2 className="text-lg font-semibold text-gray-800 mb-4">
            Average Soil pH per Farm
          </h2>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={soilPh} margin={{ top: 2, right: 4, left: 0, bottom: 2 }}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="farm" tick={{ fontSize: 1 }} />
              <YAxis domain={[5.5, 7.5]} tick={{ fontSize: 10 }} />
              <Tooltip />
              <Bar dataKey="ph" radius={[6, 6, 0, 0]} fill="#60fa81ff" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Right side reserved for future chart/table */}
        <div className="hidden lg:block"></div>
      </div>
    </div>
  );
}

export default App;
