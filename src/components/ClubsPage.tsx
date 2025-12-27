import React, { useState } from "react";
import {
  Search,
  MapPin,
  Users,
  Trophy,
  Star,
  Filter,
  Grid,
  List,
  ChevronRight,
  Mail,
  Phone,
  Globe,
  Calendar,
  TrendingUp,
  Award,
  Shield,
} from "lucide-react";
import "./ClubsPage.css";

interface Club {
  id: number;
  name: string;
  logo: string;
  country: string;
  city: string;
  league: string;
  founded: number;
  members: number;
  rating: number;
  verified: boolean;
  description: string;
  achievements: string[];
  contact: {
    email: string;
    phone: string;
    website: string;
  };
}

const ClubsPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedCountry, setSelectedCountry] = useState("all");
  const [selectedLeague, setSelectedLeague] = useState("all");

const clubs: Club[] = [
  {
    id: 0,
    name: "Mohammed VI Football Academy",
    logo: "AMFootball-Logo.png",
    country: "Morocco",
    city: "Salé",
    league: "Football Academy",
    founded: 2009,
    members: 200,
    rating: 4.9,
    verified: true,
    description:
      "Elite national football academy focused on developing top Moroccan and African talents.",
    achievements: [
      "Developed international players",
      "CAF Youth Competitions Participation",
      "National Youth Titles",
    ],
    contact: {
      email: "contact@academiemohammed6.ma",
      phone: "+212 537 000 000",
      website: "www.amf.ac.ma",
    },
  },
  {
    id: 1,
    name: "Wydad Athletic Club",
    logo: "Logo_Wydad_Athletic_Club.png",
    country: "Morocco",
    city: "Casablanca",
    league: "Botola Pro",
    founded: 1937,
    members: 450,
    rating: 4.8,
    verified: true,
    description:
      "One of the most successful clubs in Moroccan and African football history.",
    achievements: [
      "CAF Champions League Winner",
      "Botola Pro Champions",
      "Arab Club Champions Cup",
    ],
    contact: {
      email: "scouting@wydad.ma",
      phone: "+212 522 123 456",
      website: "www.wydad.com",
    },
  },
  {
    id: 2,
    name: "Raja Club Athletic",
    logo: "RajaClubAthleticCasablanca.png",
    country: "Morocco",
    city: "Casablanca",
    league: "Botola Pro",
    founded: 1949,
    members: 520,
    rating: 4.7,
    verified: true,
    description:
      "Historic Moroccan club with passionate fanbase and rich football tradition.",
    achievements: [
      "CAF Champions League Winner",
      "Botola Pro Champions",
      "CAF Super Cup",
    ],
    contact: {
      email: "recruitment@rajacasablanca.ma",
      phone: "+212 522 987 654",
      website: "www.rajacasablanca.com",
    },
  },
  {
    id: 3,
    name: "AS FAR Rabat",
    logo: "AS_FAR_Rabat.png",
    country: "Morocco",
    city: "Rabat",
    league: "Botola Pro",
    founded: 1958,
    members: 380,
    rating: 4.5,
    verified: true,
    description: "Military club with strong youth development program.",
    achievements: [
      "Botola Pro Champions",
      "Moroccan Throne Cup",
      "CAF Confederation Cup",
    ],
    contact: {
      email: "academy@asfar.ma",
      phone: "+212 537 456 789",
      website: "www.asfar.ma",
    },
  },
  {
    id: 4,
    name: "Renaissance Sportive de Berkane",
    logo: "Renaissance_Sportive_de_Berkane.png",
    country: "Morocco",
    city: "Berkane",
    league: "Botola Pro",
    founded: 1938,
    members: 290,
    rating: 4.4,
    verified: true,
    description:
      "Rising star of Moroccan football with recent continental success.",
    achievements: ["CAF Confederation Cup Winner", "Moroccan Cup"],
    contact: {
      email: "contact@rsberkane.ma",
      phone: "+212 536 123 456",
      website: "www.rsberkane.com",
    },
  },
  {
    id: 5,
    name: "FUS Rabat",
    logo: "FUS_Rabat.jpg",
    country: "Morocco",
    city: "Rabat",
    league: "Botola Pro",
    founded: 1946,
    members: 310,
    rating: 4.3,
    verified: true,
    description:
      "Traditional club focusing on youth development and local talent.",
    achievements: ["Botola Pro Champions", "Moroccan Cup"],
    contact: {
      email: "scouting@fusrabat.ma",
      phone: "+212 537 789 012",
      website: "www.fusrabat.ma",
    },
  },
];


  const filteredClubs = clubs.filter((club) => {
    const matchesSearch =
      club.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      club.league.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry =
      selectedCountry === "all" || club.country === selectedCountry;
    const matchesLeague =
      selectedLeague === "all" || club.league === selectedLeague;

    return matchesSearch && matchesCountry && matchesLeague;
  });

  return (
    <div className="clubs-page">
      {/* Header */}
      <div className="clubs-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Clubs & Académies</h1>
            <p>
              Découvrez les clubs partenaires et connectez-vous avec les
              recruteurs
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <Trophy size={24} color="#ce1126" />
              <div>
                <div className="stat-value">{clubs.length}</div>
                <div className="stat-label">Clubs</div>
              </div>
            </div>
            <div className="stat-item">
              <Users size={24} color="#00703d" />
              <div>
                <div className="stat-value">
                  {clubs.reduce((sum, club) => sum + club.members, 0)}
                </div>
                <div className="stat-label">Membres</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-section">
        <div className="search-bar">
          <Search size={20} />
          <input
            type="text"
            placeholder="Rechercher un club, ville, ligue..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters">
          <select
            value={selectedCountry}
            onChange={(e) => setSelectedCountry(e.target.value)}
            className="filter-select"
          >
            <option value="all">Tous les pays</option>
            <option value="Morocco">Maroc</option>
            <option value="Algeria">Algérie</option>
            <option value="Tunisia">Tunisie</option>
          </select>

          <select
            value={selectedLeague}
            onChange={(e) => setSelectedLeague(e.target.value)}
            className="filter-select"
          >
            <option value="all">Toutes les ligues</option>
            <option value="Botola Pro">Botola Pro</option>
            <option value="Ligue 1">Ligue 1</option>
            <option value="Ligue Professionnelle 1">
              Ligue Professionnelle 1
            </option>
          </select>

          <div className="view-toggle">
            <button
              className={viewMode === "grid" ? "active" : ""}
              onClick={() => setViewMode("grid")}
            >
              <Grid size={20} />
            </button>
            <button
              className={viewMode === "list" ? "active" : ""}
              onClick={() => setViewMode("list")}
            >
              <List size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Clubs Grid/List */}
      <div className={`clubs-container ${viewMode}`}>
        {filteredClubs.map((club) => (
          <div key={club.id} className="club-card">
            <div className="club-header">
              <div className="club-logo">
                <img src={club.logo} alt={club.name} />
              </div>
              <div className="club-info">
                <div className="club-name">
                  {club.name}
                  {club.verified && <Shield size={16} color="#00703d" />}
                </div>
                <div className="club-location">
                  <MapPin size={14} />
                  {club.city}, {club.country}
                </div>
                <div className="club-rating">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      size={14}
                      fill={i < Math.floor(club.rating) ? "#f59f00" : "none"}
                      color="#f59f00"
                    />
                  ))}
                  <span>{club.rating}</span>
                </div>
              </div>
            </div>

            <div className="club-body">
              <p className="club-description">{club.description}</p>

              <div className="club-details">
                <div className="detail-item">
                  <Trophy size={16} />
                  <span>{club.league}</span>
                </div>
                <div className="detail-item">
                  <Calendar size={16} />
                  <span>Fondé en {club.founded}</span>
                </div>
                <div className="detail-item">
                  <Users size={16} />
                  <span>{club.members} membres</span>
                </div>
              </div>

              <div className="club-achievements">
                <h4>Palmarès</h4>
                <div className="achievements-list">
                  {club.achievements.slice(0, 2).map((achievement, idx) => (
                    <span key={idx} className="achievement-badge">
                      <Award size={12} />
                      {achievement}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="club-footer">
              <div className="contact-info">
                <a
                  href={`mailto:${club.contact.email}`}
                  className="contact-link"
                >
                  <Mail size={16} />
                </a>
                <a href={`tel:${club.contact.phone}`} className="contact-link">
                  <Phone size={16} />
                </a>
                <a
                  href={`https://${club.contact.website}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                >
                  <Globe size={16} />
                </a>
              </div>
              <button className="btn-view-profile">
                Voir le profil
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredClubs.length === 0 && (
        <div className="no-results">
          <Filter size={48} color="#9ca3af" />
          <h3>Aucun club trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default ClubsPage;
