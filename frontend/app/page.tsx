'use client'

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-green-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">🗺️</span>
            <h1 className="text-xl font-bold text-gray-900">GIS Platform</h1>
          </div>
          <div className="space-x-4">
            <a href="#" className="text-gray-600 hover:text-gray-900">Courses</a>
            <a href="#" className="text-gray-600 hover:text-gray-900">Dashboard</a>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
              Sign In
            </button>
          </div>
        </div>
      </nav>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Learn Geospatial Science
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Master GIS, Remote Sensing, and Geospatial Technology through
            interactive lessons, real satellite data, and hands-on projects.
          </p>
          <button className="bg-green-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-green-700">
            Start Learning Today
          </button>
        </div>
      </section>

      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Why Choose Our Platform?
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: '📚', title: 'Structured Curriculum', desc: '4-year comprehensive path' },
              { icon: '🛰️', title: 'Real Satellite Data', desc: 'Learn with actual imagery' },
              { icon: '🗺️', title: 'Virtual GIS Labs', desc: 'QGIS & ArcGIS integration' },
            ].map((feature, i) => (
              <div key={i} className="text-center p-6">
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
                <p className="text-gray-600">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  )
}
