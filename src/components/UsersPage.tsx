import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Search,
  MapPin,
  Trophy,
  Star,
  Filter,
  Grid,
  List,
  Eye,
  TrendingUp,
  Shield,
  Users as UsersIcon,
  Award,
  Target,
  Calendar,
} from "lucide-react";
import "./UsersPage.css";

interface User {
  id: number;
  name: string;
  arabicName: string;
  photo: string;
  position: string;
  age: number;
  location: string;
  country: string;
  rating: number;
  aiScore: number;
  verified: boolean;
  available: boolean;
  followers: number;
  posts: number;
  videos: number;
  club?: string;
  stats: {
    matches: number;
    goals: number;
    assists: number;
  };
}

const UsersPage: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedPosition, setSelectedPosition] = useState("all");
  const [selectedCountry, setSelectedCountry] = useState("all");

  const users: User[] = [
    {
      id: 1,
      name: "Youssef El-Haddad",
      arabicName: "يوسف الحداد",
      photo:
        "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Attacking Midfielder",
      age: 19,
      location: "Casablanca",
      country: "Morocco",
      rating: 4.8,
      aiScore: 92,
      verified: true,
      available: true,
      followers: 2500,
      posts: 24,
      videos: 12,
      club: "Raja CA Academy",
      stats: {
        matches: 45,
        goals: 8,
        assists: 12,
      },
    },
    {
      id: 2,
      name: "Amine Benali",
      arabicName: "أمين بنعلي",
      photo:
        "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Striker",
      age: 21,
      location: "Rabat",
      country: "Morocco",
      rating: 4.6,
      aiScore: 88,
      verified: true,
      available: false,
      followers: 1800,
      posts: 18,
      videos: 8,
      club: "AS FAR",
      stats: {
        matches: 38,
        goals: 15,
        assists: 5,
      },
    },
    {
      id: 3,
      name: "Mehdi Ziani",
      arabicName: "مهدي زياني",
      photo:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Defensive Midfielder",
      age: 20,
      location: "Tangier",
      country: "Morocco",
      rating: 4.5,
      aiScore: 85,
      verified: true,
      available: true,
      followers: 1200,
      posts: 15,
      videos: 6,
      club: "IRT Tanger",
      stats: {
        matches: 42,
        goals: 3,
        assists: 8,
      },
    },
    {
      id: 4,
      name: "Karim Ouazzani",
      arabicName: "كريم الوزاني",
      photo:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Center Back",
      age: 22,
      location: "Marrakech",
      country: "Morocco",
      rating: 4.7,
      aiScore: 90,
      verified: true,
      available: true,
      followers: 2100,
      posts: 20,
      videos: 10,
      club: "KAC Marrakech",
      stats: {
        matches: 50,
        goals: 4,
        assists: 2,
      },
    },
    {
      id: 5,
      name: "Reda Alami",
      arabicName: "رضا العلمي",
      photo:
        "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Winger",
      age: 18,
      location: "Fès",
      country: "Morocco",
      rating: 4.4,
      aiScore: 83,
      verified: false,
      available: true,
      followers: 950,
      posts: 12,
      videos: 5,
      club: "MAS Fès Academy",
      stats: {
        matches: 28,
        goals: 6,
        assists: 9,
      },
    },
    {
      id: 6,
      name: "Omar Benjelloun",
      arabicName: "عمر بنجلون",
      photo:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80",
      position: "Goalkeeper",
      age: 23,
      location: "Casablanca",
      country: "Morocco",
      rating: 4.6,
      aiScore: 87,
      verified: true,
      available: false,
      followers: 1600,
      posts: 16,
      videos: 7,
      club: "Wydad AC",
      stats: {
        matches: 35,
        goals: 0,
        assists: 0,
      },
    },
  ];

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
      user.position.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesPosition =
      selectedPosition === "all" || user.position === selectedPosition;
    const matchesCountry =
      selectedCountry === "all" || user.country === selectedCountry;

    return matchesSearch && matchesPosition && matchesCountry;
  });

  const navigate = useNavigate();

  const handleViewProfile = (userId: number) => {
    navigate("/athlete");
  };

  return (
    <div className="users-page">
      {/* Header */}
      <div className="users-header">
        <div className="header-content">
          <div className="header-text">
            <h1>Joueurs & Talents</h1>
            <p>
              Découvrez les talents émergents du football marocain et africain
            </p>
          </div>
          <div className="header-stats">
            <div className="stat-item">
              <UsersIcon size={24} color="#ce1126" />
              <div>
                <div className="stat-value">{users.length}</div>
                <div className="stat-label">Joueurs</div>
              </div>
            </div>
            <div className="stat-item">
              <Trophy size={24} color="#00703d" />
              <div>
                <div className="stat-value">
                  {users.filter((u) => u.verified).length}
                </div>
                <div className="stat-label">Vérifiés</div>
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
            placeholder="Rechercher un joueur, ville, poste..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <div className="filters">
          <select
            value={selectedPosition}
            onChange={(e) => setSelectedPosition(e.target.value)}
            className="filter-select"
          >
            <option value="all">Tous les postes</option>
            <option value="Goalkeeper">Gardien</option>
            <option value="Center Back">Défenseur central</option>
            <option value="Defensive Midfielder">Milieu défensif</option>
            <option value="Attacking Midfielder">Milieu offensif</option>
            <option value="Winger">Ailier</option>
            <option value="Striker">Attaquant</option>
          </select>

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

      {/* Users Grid/List */}
      <div className={`users-container ${viewMode}`}>
        {filteredUsers.map((user) => (
          <div key={user.id} className="user-card">
            <div className="user-card-header">
              <div className="user-photo-wrapper">
                <img src={user.photo} alt={user.name} className="user-photo" />
                {user.verified && (
                  <span className="verified-badge">
                    <Shield size={14} color="#00703d" />
                  </span>
                )}
                {user.available && (
                  <span className="available-badge">
                    <div className="status-dot"></div>
                  </span>
                )}
              </div>
            </div>

            <div className="user-card-body">
              <h3 className="user-name">{user.name}</h3>
              <p className="user-arabic-name">{user.arabicName}</p>

              <div className="user-position">
                <Trophy size={14} />
                {user.position}
              </div>

              <div className="user-location">
                <MapPin size={14} />
                {user.location}, {user.country}
              </div>

              <div className="user-meta">
                <div className="meta-item">
                  <Calendar size={14} />
                  <span>{user.age} ans</span>
                </div>
                {user.club && (
                  <div className="meta-item">
                    <Shield size={14} />
                    <span>{user.club}</span>
                  </div>
                )}
              </div>

              <div className="user-stats-mini">
                <div className="stat-mini">
                  <div className="stat-mini-value">{user.stats.matches}</div>
                  <div className="stat-mini-label">Matchs</div>
                </div>
                <div className="stat-mini">
                  <div className="stat-mini-value">{user.stats.goals}</div>
                  <div className="stat-mini-label">Buts</div>
                </div>
                <div className="stat-mini">
                  <div className="stat-mini-value">{user.stats.assists}</div>
                  <div className="stat-mini-label">Passes D.</div>
                </div>
              </div>

              <div className="user-ai-score">
                <div className="ai-score-label">AI Score</div>
                <div className="ai-score-value">{user.aiScore}</div>
                <div className="ai-score-bar">
                  <div
                    className="ai-score-fill"
                    style={{ width: `${user.aiScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="user-rating">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={14}
                    fill={i < Math.floor(user.rating) ? "#f59f00" : "none"}
                    color="#f59f00"
                  />
                ))}
                <span>{user.rating}</span>
              </div>

              <div className="user-social-stats">
                <span>{user.followers} followers</span>
                <span>•</span>
                <span>{user.posts} posts</span>
                <span>•</span>
                <span>{user.videos} videos</span>
              </div>
            </div>

            <div className="user-card-footer">
              <button
                className="btn-view-profile"
                onClick={() => handleViewProfile(user.id)}
              >
                <Eye size={16} />
                Voir le profil
              </button>
            </div>
          </div>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="no-results">
          <Filter size={48} color="#9ca3af" />
          <h3>Aucun joueur trouvé</h3>
          <p>Essayez de modifier vos critères de recherche</p>
        </div>
      )}
    </div>
  );
};

export default UsersPage;
