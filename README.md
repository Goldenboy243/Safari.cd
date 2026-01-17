# Safari.cd - DRC Real Estate & Accommodation Marketplace

<div align="center">
  <img src="client/public/favicon.svg" alt="Safari.cd Logo" width="80" height="80">
  
  **La plateforme immobilière de confiance en République Démocratique du Congo**
  
  [🌐 Visit Site](https://safari.cd) • [📧 Contact](mailto:contact@safari.cd)
</div>

---

## 🏠 About

Safari.cd is a modern, polymorphic marketplace designed for the Democratic Republic of Congo. It combines real estate listings, student housing, and hotel bookings into one unified platform - inspired by the best of housing.com and booking.com.

### Why Safari.cd?

- 🛡️ **Anti-Scam Protection**: Verified property owners and listings to protect users
- 🎓 **Student-Focused**: Safe accommodation for students traveling between cities
- 🏨 **Hotels & Short Stays**: Book hotels like on Booking.com
- 🇨🇩 **DRC-First**: Built specifically for the Congolese market with local cities and context

## ✨ Features

### Core Features
- 🔍 **Smart Search**: Category-aware search (Real Estate, Students, Hotels)
- 📍 **City Selector**: 15+ DRC cities including Kinshasa, Lubumbashi, Goma, Bukavu
- ✅ **Verified Listings**: Trust badges and owner verification
- ⭐ **Ratings & Reviews**: User feedback system
- ❤️ **Wishlist**: Save favorite properties
- 📱 **Responsive Design**: Works on all devices

### Property Categories
- 🏡 **Immobilier**: Houses, apartments, land for sale or rent
- 🎓 **Étudiants**: Safe student housing near universities
- 🏨 **Hôtels**: Hotel and short-term accommodation bookings

### Pages
- **Home**: Hero section, featured properties, testimonials, trust badges
- **Properties**: Browse all listings with filters
- **Student Housing**: Dedicated student accommodation section
- **Hotels**: Hotel booking with date pickers
- **Publish**: List your property
- **About/Contact**: Company information

## 🛠️ Tech Stack

| Category | Technology |
|----------|------------|
| **Frontend** | React 18, TypeScript, Vite |
| **Styling** | Tailwind CSS, shadcn/ui |
| **Routing** | Wouter |
| **State** | TanStack Query |
| **Backend** | Express.js, Node.js |
| **Database** | Drizzle ORM, PostgreSQL |
| **Icons** | Lucide React |

## 🎨 Design System

### Color Palette
- **Primary**: Emerald/Teal (`#0A7558`) - Trust, growth, nature
- **Secondary**: Gold/Amber (`#F5A623`) - Premium, warmth
- **Accent**: Coral (`#FF6B6B`) - Energy, urgency

### Typography
- **Headings**: Poppins
- **Body**: Montserrat

## 🚀 Getting Started

### Prerequisites
- Node.js 18+
- npm

### Installation

```bash
# Clone the repository
git clone https://github.com/Goldenboy243/immo.git
cd immo

# Install dependencies
npm install

# Start development server
npm run dev
```

The app will be available at `http://localhost:5000`

### Production Build

```bash
npm run build
npm run start
```

## 📁 Project Structure

```
safari.cd/
├── client/                     # React frontend
│   ├── public/
│   │   └── favicon.svg        # Safari.cd logo
│   ├── src/
│   │   ├── components/
│   │   │   ├── ui/            # shadcn/ui components
│   │   │   ├── Header.tsx     # Navigation with categories
│   │   │   ├── Hero.tsx       # Category-aware hero
│   │   │   ├── Footer.tsx     # Site footer
│   │   │   ├── PropertyCard.tsx
│   │   │   ├── CategoryTabs.tsx
│   │   │   ├── CitySelector.tsx
│   │   │   ├── TrustBadges.tsx
│   │   │   ├── RatingStars.tsx
│   │   │   ├── WishlistButton.tsx
│   │   │   ├── VerifiedBadge.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── PopularCities.tsx
│   │   │   └── TestimonialsCarousel.tsx
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Properties.tsx
│   │   │   ├── StudentHousing.tsx
│   │   │   ├── Hotels.tsx
│   │   │   ├── Sell.tsx
│   │   │   ├── About.tsx
│   │   │   └── Contact.tsx
│   │   ├── hooks/
│   │   ├── lib/
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   └── index.html
├── server/                     # Express backend
│   ├── index.ts
│   ├── routes.ts
│   └── vite.ts
├── shared/                     # Shared schemas
│   └── schema.ts
├── package.json
├── tailwind.config.ts
├── vite.config.ts
└── README.md
```

## 📜 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run check` | TypeScript type checking |
| `npm run db:push` | Push database schema |

## 🌍 DRC Cities Supported

- Kinshasa
- Lubumbashi
- Goma
- Bukavu
- Kisangani
- Mbuji-Mayi
- Kananga
- Kolwezi
- Likasi
- Matadi
- Kikwit
- Uvira
- Butembo
- Beni
- Tshikapa

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

MIT License - see [LICENSE](LICENSE) for details.

## 📞 Contact

- **Email**: contact@safari.cd
- **Website**: [safari.cd](https://safari.cd)

---

<div align="center">
  Made with ❤️ for the DRC 🇨🇩
</div>


