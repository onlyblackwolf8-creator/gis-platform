# 🗺️ GIS Learning Platform

A comprehensive, interactive learning platform for **Geospatial Information Science & Remote Sensing**. Built to serve students, professionals, and organizations across Africa and beyond.

## 📚 About

This platform provides a structured 4-year curriculum covering:
- Geospatial fundamentals and advanced applications
- Remote sensing and satellite image processing
- GIS software (ArcGIS, QGIS, Web GIS)
- Machine learning for geospatial data
- Real-world project applications

## 🚀 Features

- 📖 Interactive lessons with animations
- 🎥 Video tutorials for every topic
- 💻 Coding playground (Python, SQL)
- 🗺️ Virtual GIS labs (QGIS, ArcGIS integration)
- 🛰️ Real satellite imagery datasets
- 📝 Quizzes and assessments with instant feedback
- 🏅 Certificates and achievements
- 🤝 Student discussion forums
- 📊 Progress tracking and learning streaks
- 🤖 AI-powered tutor
- 📱 Mobile-friendly responsive design

## 🛠️ Tech Stack

### Frontend
- **Framework:** Next.js 14 with React 18
- **Styling:** Tailwind CSS + shadcn/ui components
- **Maps:** Leaflet + Mapbox GL for geospatial visualization
- **State Management:** Zustand
- **Package Manager:** pnpm

### Backend
- **Framework:** FastAPI (Python)
- **Database:** PostgreSQL 15+ with PostGIS extension
- **ORM:** SQLAlchemy
- **Authentication:** JWT + OAuth2
- **API Documentation:** OpenAPI/Swagger
- **Task Queue:** Celery with Redis
- **Geospatial Server:** GeoServer

### Infrastructure
- **Cloud:** AWS / Google Cloud / Azure
- **Containerization:** Docker & Docker Compose
- **CI/CD:** GitHub Actions
- **Environment Management:** Python venv, Node.js

### External Services
- **Satellite Data:** Sentinel Hub, Google Earth Engine, USGS Landsat
- **Maps API:** Mapbox, OpenStreetMap
- **Storage:** AWS S3 for datasets and media

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ (for frontend)
- Python 3.10+ (for backend)
- PostgreSQL 15+ with PostGIS
- Docker & Docker Compose (optional, for containerized setup)

### Setup

#### 1. Clone the repository
```bash
git clone https://github.com/onlyblackwolf8-creator/gis-platform.git
cd gis-platform
```

#### 2. Frontend Setup
```bash
cd frontend
pnpm install
pnpm dev
```
Frontend runs on `http://localhost:3000`

#### 3. Backend Setup
```bash
cd backend
python -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt
uvicorn app.main:app --reload
```
Backend API runs on `http://localhost:8000`

#### 4. Using Docker Compose
```bash
docker-compose up -d
```
This starts PostgreSQL, Redis, and the backend API automatically.

## 📚 Curriculum

### Year 1: Foundations
- Communication Skills
- Mathematics I & II
- Physics
- Computer Applications
- Python/C++ Programming
- Introduction to GIS
- Introduction to Remote Sensing
- Surveying Fundamentals
- Cartography
- Environmental Science

### Year 2: Core Geospatial Skills
- Spatial Database Management
- ArcGIS & QGIS
- Digital Mapping
- Geodesy & GPS/GNSS Surveying
- Photogrammetry
- Database Systems
- Statistics & OOP

### Year 3: Advanced Applications
- Satellite Image Processing
- Digital Image Analysis
- Web GIS Development
- Spatial Analysis
- Geographic Information Science
- Drone (UAV) Mapping
- Research Methods

### Year 4: Specialization
- Advanced Remote Sensing
- Machine Learning for Geospatial Data
- Climate & Environmental Monitoring
- Urban & Regional Planning
- Disaster Risk Mapping
- Geospatial Project Management
- Final Year Research Project

## 🌍 Data Sources

- [Sentinel Hub](https://www.sentinel-hub.com/) - Sentinel satellite imagery
- [Google Earth Engine](https://earthengine.google.com/) - Free satellite imagery & analysis
- [USGS Landsat](https://www.usgs.gov/faqs/what-landsat) - Landsat satellite data
- [OpenStreetMap](https://www.openstreetmap.org/) - Free mapping data
- [Natural Earth](https://www.naturalearthdata.com/) - GIS datasets

## 🤝 Contributing

We welcome contributions! Please see [CONTRIBUTING.md](./CONTRIBUTING.md) for guidelines.

## 📄 License

This project is licensed under the MIT License - see [LICENSE](./LICENSE) file for details.

## 📞 Contact & Support

- **Issues:** Use GitHub Issues for bug reports and feature requests
- **Discussions:** Join our discussions for questions and ideas
- **Email:** support@gis-platform.dev

## 🌍 Vision

To become **the African equivalent of Coursera or DataCamp**—dedicated to geospatial science, accessible to students, professionals, and organizations worldwide.

---

**Built with ❤️ for the geospatial community**
