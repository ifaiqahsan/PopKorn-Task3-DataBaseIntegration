# PopKorn - Database Integration

The core data management layer for the PopKorn movie booking system. This repository handles the database schemas, controller logic, and live movie data synchronization.

## 🛠 Technical Stack
* **Database:** MongoDB (Atlas)
* **ODM:** Mongoose
* **Runtime:** Node.js
* **External API:** TMDb (The Movie Database) for real-time movie metadata

## 📂 Key Features
* **Schema Definition:** Robust Mongoose schemas for Users, Movies, and Bookings.
* **Automated Seeding:** A dedicated script (`seed/fetchMovies.js`) that synchronizes the database with live data from TMDb.
* **RESTful Controllers:** Clean separation of business logic for movie queries and booking operations.

## 📊 Verification
* **Database Sync:** Successfully integrated with TMDb API to fetch 20+ real-time movie listings.
* **Schema Integrity:** Fully validated models with required fields and relational references.

### Verification Screenshots
* [View Seeder Output](docs/screenshots/PopKorn%20DB%20Integration.png)
* [View MongoDB Collection](docs/screenshots/PopKorn%20MongoDB.png)

## 🚀 Setup
1. Clone the repository: `git clone https://github.com/ifaiqahsan/PopKorn-Task3-DatabaseIntegration.git`
2. Install dependencies: `npm install`
3. Configure your `.env` file with your `MONGO_URI` and `TMDB_API_KEY`.
4. Run the seeder: `node seed/fetchMovies.js`
5. Start the server: `node server.js`
