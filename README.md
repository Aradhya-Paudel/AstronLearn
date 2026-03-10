# AstronLearn

A beautiful, modern web application that brings the wonders of the universe to your screen. AstronLearn fetches daily astronomy images and information from the NASA Astronomy Picture of the Day (APOD) API, delivering stunning cosmic visuals with detailed descriptions.

## Features

✨ **Beautiful UI**

- Clean, matte design with an elegant, classy aesthetic
- Responsive layout that works seamlessly on desktop and mobile
- Smooth transitions and intuitive interactions

🔭 **NASA APOD Integration**

- Fetches real astronomy data from the NASA API
- Displays high-quality images and videos from space
- Shows detailed explanations of astronomical phenomena
- Access to years of historical data (since 1995)

🎮 **User-Friendly Experience**

- One-click to discover new astronomy content
- Automatic loading on app startup
- Error handling for API issues
- Loading states for better UX

## Tech Stack

- **React** - UI framework
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **NASA API** - Astronomy Picture of the Day data

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository:

```bash
git clone https://github.com/Aradhya-Paudel/AstronLearn.git
cd AstronLearn
```

2. Install dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Usage

1. The app automatically loads an astronomy image on startup
2. Click **"Discover Another"** to fetch a new random astronomy image
3. View detailed information including:
   - High-quality image or video
   - Title and date captured
   - Scientific explanation of the astronomical object

## API Information

This app uses the **NASA Astronomy Picture of the Day (APOD) API**.

- **Default API Key**: Uses `DEMO_KEY` for demonstration purposes
- **API Docs**: https://api.nasa.gov
- **To use your own API key**: Get a free key at https://api.nasa.gov

The APOD archive contains images dating back to June 16, 1995.

## Building for Production

```bash
npm run build
```

The optimized production build will be created in the `dist` directory.

## Project Structure

```
AstronLearn/
├── src/
│   ├── App.jsx          # Main application component
│   ├── App.css          # Application styles
│   ├── main.jsx         # Entry point
│   ├── index.css        # Global styles
│   └── assets/          # Static assets
├── public/              # Public static files
├── index.html           # HTML template
├── vite.config.js       # Vite configuration
├── package.json         # Project dependencies
└── eslint.config.js     # ESLint configuration
```

## Features & Functionality

### Real-Time Data Fetching

- Fetches astronomy data for random dates
- Uses NASA's official APOD API
- Handles both images and videos

### Responsive Design

- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

### Error Handling

- Graceful error messages
- Fallback UI states
- Loading indicators

## Performance

- **Fast Load Times**: Optimized with Vite
- **Minimal Dependencies**: Lightweight bundle
- **Efficient Rendering**: React for optimal performance

## Contributing

Contributions are welcome! Here's how you can help:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is open source and available under the MIT License.

## Author

**Aradhya Paudel**

## Acknowledgments

- NASA for providing the amazing APOD API
- React and Vite communities for excellent tools
- All astronomy enthusiasts and space explorers

## Support

For issues, questions, or suggestions, please open an issue on GitHub.

---

Explore the universe, one image at a time. 🌌✨
