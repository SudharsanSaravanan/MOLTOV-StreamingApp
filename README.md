# 🎬 Moltov Streaming Platform 🍿

## Live Demo
🌐 [Moltov Stream](https://moltovstream.firebaseapp.com/)

## Project Overview
Moltov is a Netflix-like streaming platform clone that provides users with a dynamic and engaging movie browsing experience. The application fetches real-time movie data from The Movie Database (TMDB) API and presents it in an intuitive, visually appealing interface.

## 🌟 Features
- Dynamic movie rows categorized by genre
- Trending movies section
- Randomly generated banner movie
- Responsive navigation bar
- Scroll-based navigation bar styling
- Multiple movie genre categories

## 🛠 Technologies Used
- React.js
- Axios for API requests
- The Movie Database (TMDB) API
- CSS for styling
- Firebase hosting

## Project Structure
```
moltov-stream/
│
├── src/
│   ├── App.js          # Main application component
│   ├── Banner.js       # Featured movie banner
│   ├── Nav.js          # Navigation component
│   ├── Row.js          # Movie rows component
│   ├── axios.js        # Axios configuration
│   └── requests.js     # API request configurations
│
├── public/
└── package.json
```

## Installation & Setup

### Prerequisites
- Node.js
- npm or Yarn
- TMDB API Key

### Steps
1. Clone the repository
```bash
git clone https://github.com/your-username/moltov-stream.git
cd moltov-stream
```

2. Install dependencies
```bash
npm install
# or
yarn install
```

3. Create a `.env` file and add your TMDB API Key
```
REACT_APP_TMDB_API_KEY=your_api_key_here
```

4. Run the application
```bash
npm start
# or
yarn start
```

## API Integration
The project uses The Movie Database (TMDB) API to fetch:
- Trending Movies
- Top Rated Movies
- Genre-specific Movies (Action, Comedy, Horror, etc.)
- Original Series

## Deployment
Deployed using Firebase Hosting at [https://moltovstream.web.app/](https://moltovstream.web.app/)

## Creator
- SUDHARSANA SARAVANAN S

## Future Enhancements
- Add user authentication
- Implement movie trailers
- Create watchlist functionality
- Improve responsive design

## 📄 License
Distributed under the MIT License.

## 🚀 Contributing
1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## Contact
Project Link: [https://moltovstream.web.app/](https://moltovstream.web.app/)

**Happy Streaming! 🍿🎥**
