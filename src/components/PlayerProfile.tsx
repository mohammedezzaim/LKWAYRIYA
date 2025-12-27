import React, { useState } from "react";
import "./PlayerProfile.css";

import {
  MapPin,
  Trophy,
  Calendar,
  Mail,
  ClipboardList,
  Activity,
  TrendingUp,
  PlayCircle,
  MessageCircle,
  Star,
  CheckCircle,
  Video,
  ChevronRight,
  Shield,
  Zap,
  BarChart,
  Clock,
  Send,
  X,
  Heart,
  Share2,
  MessageSquare,
  Bookmark,
  Users,
  Award,
  Target,
  FileText,
  Camera,
  Image as ImageIcon,
  Bell,
  MoreVertical,
  Edit,
  Globe,
  Linkedin,
  Instagram,
  Twitter,
  Facebook,
  ThumbsUp,
  Eye,
  TrendingUp as TrendingUpIcon,
  Youtube,
  ExternalLink,
  UserPlus,
  Download,
  Filter,
  EyeOff,
  Mic,
  MicOff,
  Volume2,
  Settings,
  HelpCircle,
  Smile,
  Paperclip,
  Search,
  Phone,
  Video as VideoIcon,
  Users as UsersIcon,
  FileBarChart,
  PieChart,
  Target as TargetIcon,
  Footprints,
  Clock as ClockIcon,
  Award as AwardIcon,
  TrendingDown,
  Maximize2,
  Minimize2,
  Bot,
  Sparkles,
  Brain,
  Cpu,
  Zap as ZapIcon,
} from "lucide-react";

const PlayerProfile: React.FC = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isChatMinimized, setIsChatMinimized] = useState(false);
  const [inputMessage, setInputMessage] = useState("");
  const [activeTab, setActiveTab] = useState("posts");
  const [isTyping, setIsTyping] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [messages, setMessages] = useState<
    { text: string; isUser: boolean; time: string; isAi?: boolean }[]
  >([
    {
      text: "Hello! I'm Youssef's AI Football Assistant. I can provide detailed insights about his performance, stats, and availability.",
      isUser: false,
      time: "10:00 AM",
      isAi: true,
    },
    {
      text: "Would you like to see his recent match performance, training videos, or discuss potential opportunities?",
      isUser: false,
      time: "10:00 AM",
      isAi: true,
    },
  ]);

  // Données pour les posts
  const posts = [
    {
      id: 1,
      type: "video",
      title: "Training Session Highlights",
      content:
        "Just finished an intense 2-hour training session focusing on precision passing and set pieces. Always room for improvement! 💪⚽",
      author: "Youssef El-Haddad",
      role: "Professional Footballer",
      time: "2 hours ago",
      likes: 124,
      comments: 28,
      shares: 12,
      views: "1.2K",
      mediaUrl:
        "ziyach-qatar-2.jpg",
      youtubeStats: {
        views: "15.4K",
        likes: "1.2K",
        comments: "87",
        duration: "4:32",  
      },
    },
    {
      id: 2,
      type: "match",
      title: "Match Day Victory!",
      content:
        "Great team effort today! 2 assists and constant threat throughout the game. Proud of the boys. #TeamWork #Victory",
      author: "Youssef El-Haddad",
      role: "Attacking Midfielder",
      time: "Yesterday",
      likes: 342,
      comments: 56,
      shares: 34,
      views: "2.5K",
      mediaUrl: "https://www.thevoice.ma/wp-content/uploads/2025/11/ziyach.jpg",
      stats: {
        rating: "8.7",
        assists: "2",
        keyPasses: "6",
        distance: "11.2km",
        sprints: "24",
        duelsWon: "12/18",
      },
    },
    {
      id: 3,
      type: "update",
      title: "New Partnership Announcement",
      content:
        "Excited to announce my new partnership with @SportPro for the upcoming season! Grateful for the opportunity.",
      author: "Youssef El-Haddad",
      role: "Professional Footballer",
      time: "3 days ago",
      likes: 567,
      comments: 89,
      shares: 45,
      views: "3.8K",
      partnership: {
        company: "SportPro",
        type: "Equipment & Apparel",
        duration: "2 years",
      },
    },
  ];

  // Données pour les vidéos YouTube - CORRIGÉES avec des images valides
  const youtubeVideos = [
    {
      id: 1,
      title: "Top 10 Plays - Season 23/24",
      channel: "Youssef El-Haddad Official",
      views: "125.4K",
      uploadDate: "2 weeks ago",
      duration: "8:45",
      thumbnail:
        "https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      youtubeUrl: "https://youtu.be/QIYPuma9HQc",
      likes: "8.7K",
      comments: "342",
      subscribers: "25.8K",
    },
    {
      id: 2,
      title: "Training Diary: Pre-season 2024",
      channel: "Youssef El-Haddad Official",
      views: "89.2K",
      uploadDate: "1 month ago",
      duration: "12:30",
      thumbnail:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      youtubeUrl: "https://youtu.be/QIYPuma9HQc",
      likes: "6.2K",
      comments: "198",
      subscribers: "25.8K",
    },
    {
      id: 3,
      title: "Skills & Drills Masterclass",
      channel: "Youssef El-Haddad Official",
      views: "156.8K",
      uploadDate: "2 months ago",
      duration: "15:20",
      thumbnail:
        "https://images.unsplash.com/photo-1543326727-b5a819dd9f18?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
      youtubeUrl: "https://youtu.be/QIYPuma9HQc",
      likes: "12.4K",
      comments: "512",
      subscribers: "25.8K",
    },
  ];

  // Données pour les matchs
  const upcomingMatches = [
    {
      id: 1,
      opponent: "Raja Casablanca",
      competition: "Botola Pro",
      date: "Nov 15, 2024",
      time: "20:00",
      venue: "Stade Mohammed V",
      type: "home",
      tvChannel: "Arryadia TV",
      odds: "2.10",
    },
    {
      id: 2,
      opponent: "AS FAR",
      competition: "Moroccan Throne Cup",
      date: "Nov 22, 2024",
      time: "19:30",
      venue: "Prince Moulay Abdellah Stadium",
      type: "away",
      tvChannel: "Al Aoula TV",
      odds: "3.25",
    },
    {
      id: 3,
      opponent: "FUS Rabat",
      competition: "Botola Pro",
      date: "Nov 29, 2024",
      time: "21:00",
      venue: "Stade Mohammed V",
      type: "home",
      tvChannel: "Arryadia TV",
      odds: "1.85",
    },
  ];

  // Statistiques détaillées
  const detailedStats = {
    passing: {
      accuracy: 84,
      completed: 412,
      total: 490,
      keyPasses: 18,
      assists: 12,
    },
    shooting: {
      goals: 8,
      shots: 45,
      onTarget: 32,
      conversionRate: 17.8,
    },
    defensive: {
      tackles: 28,
      interceptions: 19,
      clearances: 12,
      blocks: 7,
    },
    physical: {
      distanceCovered: 112.5,
      sprints: 156,
      topSpeed: 32.4,
      avgSpeed: 8.2,
    },
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage = {
      text: inputMessage,
      isUser: true,
      time: new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      }),
    };

    setMessages([...messages, userMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate AI response with different response types
    setTimeout(() => {
      setIsTyping(false);
      const responses = [
        {
          text: "Based on Youssef's recent performance, he has maintained an average rating of 8.7 with 84% pass accuracy. Would you like specific stats?",
          isAi: true,
        },
        {
          text: "I can show you his latest training videos or match highlights. Which would you prefer?",
          isAi: true,
        },
        {
          text: "Youssef is currently available for trials and has been seen by 27 scouts this week. Interested in scheduling a meeting?",
          isAi: true,
        },
        {
          text: `His YouTube channel has ${
            youtubeVideos[0].subscribers
          } subscribers with videos averaging ${Math.round(
            (125.4 + 89.2 + 156.8) / 3
          )}K views.`,
          isAi: true,
        },
      ];

      const randomResponse =
        responses[Math.floor(Math.random() * responses.length)];
      setMessages((prev) => [
        ...prev,
        {
          ...randomResponse,
          isUser: false,
          time: new Date().toLocaleTimeString([], {
            hour: "2-digit",
            minute: "2-digit",
          }),
        },
      ]);
    }, 1500);
  };

  const handleQuickQuestion = (question: string) => {
    setInputMessage(question);
    setTimeout(() => {
      handleSendMessage();
    }, 100);
  };

  return (
    <div className="player-profile" >
      {/* Header Section */}
      <div className="profile-header">
        <div className="header-banner">
          <div className="banner-overlay"></div>
          <div className="banner-actions">
            <button className="btn-banner">
              <Camera size={16} /> Add Cover
            </button>
          </div>
        </div>
        <div className="header-content">
          <div className="player-info-group">
            <div className="profile-pic-wrapper">
              <img
                src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Youssef El-Haddad"
                className="profile-pic"
              />
              <button className="btn-edit-pic">
                <Edit size={14} />
              </button>
              <span className="verified-badge">
                <CheckCircle size={16} strokeWidth={3} />
              </span>
            </div>
            <div className="player-details">
              <div className="name-header">
                <h1>
                  Youssef El-Haddad{" "}
                  <span className="arabic-name">(يوسف الحداد)</span>
                </h1>
                <div className="follow-btn">
                  <button className="btn-follow">
                    <Bell size={16} /> Follow
                  </button>
                  <button className="btn-more">
                    <MoreVertical size={20} />
                  </button>
                </div>
              </div>
              <div className="meta-info">
                <span className="meta-item">
                  <MapPin size={18} /> Casablanca, Morocco
                </span>
                <span className="meta-item">
                  <Trophy size={18} /> Attacking Midfielder (CAM)
                </span>
                <span className="meta-item">
                  <Calendar size={18} /> 19 Years Old
                </span>
                <span className="meta-item">
                  <Globe size={18} /> Available Worldwide
                </span>
              </div>
              <div className="tags">
                <span className="tag available">
                  <div className="status-dot"></div> Available for Trials
                </span>
                <span className="tag free-agent">Free Agent</span>
                <span className="tag trending">
                  <TrendingUpIcon size={14} /> Trending
                </span>
                <span className="tag youtube">
                  <Youtube size={14} /> 25.8K Subs
                </span>
              </div>

              <div className="social-stats">
                <div className="stat">
                  <strong>2.5K</strong>
                  <span>Followers</span>
                </div>
                <div className="stat">
                  <strong>156</strong>
                  <span>Following</span>
                </div>
                <div className="stat">
                  <strong>124</strong>
                  <span>Posts</span>
                </div>
              </div>

              <div className="action-buttons">
                <button className="btn btn-primary">
                  <MessageSquare size={18} /> Message
                </button>
                <button className="btn btn-outline">
                  <Bookmark size={18} /> Save
                </button>
                <button className="btn btn-outline">
                  <Share2 size={18} /> Share
                </button>
              </div>
            </div>
          </div>

          <div className="ai-score-card">
            <div className="score-title">AI Score</div>
            <div className="score-value">92</div>
            <div className="score-progress">
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: "92%" }}></div>
              </div>
              <div className="score-change">
                <TrendingUp size={12} /> +2.4%
              </div>
            </div>
            <div className="stars">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={14} fill="#f59f00" stroke="none" />
              ))}
            </div>
            <small>Based on 124 data points</small>
          </div>

          <div className="scout-info">
            <Activity size={16} color="#00703d" />
            <span>
              Seen by <strong>27 scouts</strong> this week
            </span>
            <span className="scout-change">
              <TrendingUp size={12} /> +12
            </span>
          </div>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="profile-nav">
        <div className="nav-tabs">
          <button
            className={`nav-tab ${activeTab === "posts" ? "active" : ""}`}
            onClick={() => setActiveTab("posts")}
          >
            <FileText size={18} /> Posts <span className="tab-count">24</span>
          </button>
          <button
            className={`nav-tab ${activeTab === "videos" ? "active" : ""}`}
            onClick={() => setActiveTab("videos")}
          >
            <Video size={18} /> Videos{" "}
            <span className="tab-count">{youtubeVideos.length}</span>
          </button>
          <button
            className={`nav-tab ${activeTab === "matches" ? "active" : ""}`}
            onClick={() => setActiveTab("matches")}
          >
            <Trophy size={18} /> Matches <span className="tab-count">12</span>
          </button>
          <button
            className={`nav-tab ${activeTab === "stats" ? "active" : ""}`}
            onClick={() => setActiveTab("stats")}
          >
            <BarChart size={18} /> Stats
          </button>
        </div>
        <div className="nav-actions">
          <button className="btn-create-post">
            <Edit size={16} /> Create Post
          </button>
          <button className="btn-filter">
            <Filter size={16} />
          </button>
        </div>
      </div>

      {/* Main Content based on active tab */}
      {activeTab === "posts" && (
        <div className="profile-grid">
          {/* Left Column */}
          <div className="left-column">
            {/* About Card */}
            <div className="card">
              <div className="card-title">
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <ClipboardList size={22} color="#00703d" /> About
                </span>
                <span className="card-title-arabic">نبذة عني</span>
              </div>
              <p className="bio-text">
                Dynamic playmaker with exceptional vision and passing range.
                Developed at the Raja CA academy. Known for creativity in the
                final third and high work rate.
              </p>
              <p className="bio-text bio-arabic">
                صانع ألعاب ديناميكي يتمتع برؤية استثنائية ومدى تمرير رائع. نشأ
                في أكاديمية الرجاء البيضاوي. معروف بالإبداع في الثلث الهجومي
                ومعدل العمل العالي.
              </p>

              <div className="contact-info">
                <div className="contact-item">
                  <Mail size={16} />
                  <span>contact@youssef-football.com</span>
                </div>
                <div className="social-links">
                  <a href="#" className="social-link">
                    <Linkedin size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Instagram size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Twitter size={18} />
                  </a>
                  <a href="#" className="social-link">
                    <Facebook size={18} />
                  </a>
                  <a href="#" className="social-link youtube-link">
                    <Youtube size={18} />
                  </a>
                </div>
              </div>
            </div>

            {/* Detailed Stats Card */}
            <div className="card">
              <div className="card-title">
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <BarChart size={22} color="#ce1126" /> Detailed Stats
                </span>
                <button className="btn-view-all">
                  View All <ChevronRight size={14} />
                </button>
              </div>

              <div className="stats-category">
                <div className="category-title">
                  <Target size={16} />
                  <span>Passing</span>
                </div>
                <div className="stats-grid-small">
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.passing.accuracy}%
                    </div>
                    <div className="stat-label-small">Accuracy</div>
                  </div>
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.passing.keyPasses}
                    </div>
                    <div className="stat-label-small">Key Passes</div>
                  </div>
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.passing.assists}
                    </div>
                    <div className="stat-label-small">Assists</div>
                  </div>
                </div>
              </div>

              <div className="stats-category">
                <div className="category-title">
                  <Zap size={16} />
                  <span>Shooting</span>
                </div>
                <div className="stats-grid-small">
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.shooting.goals}
                    </div>
                    <div className="stat-label-small">Goals</div>
                  </div>
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.shooting.conversionRate}%
                    </div>
                    <div className="stat-label-small">Conversion</div>
                  </div>
                  <div className="stat-item-small">
                    <div className="stat-value-small">
                      {detailedStats.shooting.onTarget}/
                      {detailedStats.shooting.shots}
                    </div>
                    <div className="stat-label-small">On Target</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Main Column - Posts */}
          <div className="main-column">
            {/* Create Post */}
            <div className="card create-post">
              <div className="create-post-header">
                <img
                  src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                  alt="Youssef"
                  className="post-author-img"
                />
                <input
                  type="text"
                  placeholder="Share your updates..."
                  className="post-input"
                />
              </div>
              <div className="create-post-actions">
                <button className="post-action-btn">
                  <Video size={18} color="#ce1126" /> Video
                </button>
                <button className="post-action-btn">
                  <ImageIcon size={18} color="#00703d" /> Photo
                </button>
                <button className="post-action-btn">
                  <Trophy size={18} color="#f59f00" /> Match
                </button>
                <button className="post-action-btn">
                  <BarChart size={18} color="#8b5cf6" /> Stats
                </button>
                <button className="btn-post">Post</button>
              </div>
            </div>

            {/* Posts Feed */}
            {posts.map((post) => (
              <div key={post.id} className="card post-card">
                <div className="post-header">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt={post.author}
                    className="post-author-img"
                  />
                  <div className="post-author-info">
                    <div className="post-author-name">{post.author}</div>
                    <div className="post-author-role">{post.role}</div>
                    <div className="post-time">
                      {post.time} • <Globe size={12} />
                    </div>
                  </div>
                  <button className="post-more">
                    <MoreVertical size={20} />
                  </button>
                </div>

                <div className="post-content">
                  <h3 className="post-title">{post.title}</h3>
                  <p className="post-text">{post.content}</p>

                  {post.mediaUrl && (
                    <div className="post-media">
                      <img
                        src={post.mediaUrl}
                        alt={post.title}
                        className="post-image"
                      />
                      {post.youtubeStats && (
                        <div className="youtube-overlay">
                          <div className="youtube-stats">
                            <span>
                              <PlayCircle size={12} /> {post.youtubeStats.views}{" "}
                              views
                            </span>
                            <span>
                              <ThumbsUp size={12} /> {post.youtubeStats.likes}
                            </span>
                            <span>
                              <Clock size={12} /> {post.youtubeStats.duration}
                            </span>
                          </div>
                        </div>
                      )}
                    </div>
                  )}

                  {post.stats && (
                    <div className="post-stats-grid">
                      <div className="post-stat-item">
                        <div className="post-stat-value highlight">
                          {post.stats.rating}
                        </div>
                        <div className="post-stat-label">Rating</div>
                      </div>
                      <div className="post-stat-item">
                        <div className="post-stat-value">
                          {post.stats.assists}
                        </div>
                        <div className="post-stat-label">Assists</div>
                      </div>
                      <div className="post-stat-item">
                        <div className="post-stat-value">
                          {post.stats.keyPasses}
                        </div>
                        <div className="post-stat-label">Key Passes</div>
                      </div>
                      <div className="post-stat-item">
                        <div className="post-stat-value">
                          {post.stats.distance}
                        </div>
                        <div className="post-stat-label">Distance</div>
                      </div>
                    </div>
                  )}
                </div>

                <div className="post-stats-bar">
                  <div className="post-stats-left">
                    <span className="stat-icon">
                      <ThumbsUp size={14} /> {post.likes}
                    </span>
                    <span className="stat-icon">
                      <MessageSquare size={14} /> {post.comments}
                    </span>
                    <span className="stat-icon">
                      <Share2 size={14} /> {post.shares}
                    </span>
                  </div>
                  <div className="post-stats-right">
                    <span className="stat-icon">
                      <Eye size={14} /> {post.views} views
                    </span>
                  </div>
                </div>

                <div className="post-actions">
                  <button className="post-action">
                    <ThumbsUp size={18} /> Like
                  </button>
                  <button className="post-action">
                    <MessageSquare size={18} /> Comment
                  </button>
                  <button className="post-action">
                    <Share2 size={18} /> Share
                  </button>
                  <button className="post-action">
                    <Bookmark size={18} /> Save
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="right-column">
            {/* YouTube Stats Card */}
            <div className="card youtube-stats-card">
              <div className="card-title">
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <Youtube size={22} color="#ff0000" /> YouTube Channel
                </span>
                <a href="#" className="channel-link">
                  Visit Channel <ExternalLink size={14} />
                </a>
              </div>

              <div className="youtube-overview">
                <div className="youtube-stat">
                  <div className="stat-value-large">25.8K</div>
                  <div className="stat-label">Subscribers</div>
                </div>
                <div className="youtube-stat">
                  <div className="stat-value-large">124K</div>
                  <div className="stat-label">Avg. Views</div>
                </div>
                <div className="youtube-stat">
                  <div className="stat-value-large">8.2K</div>
                  <div className="stat-label">Avg. Likes</div>
                </div>
              </div>

              <div className="video-thumbnails">
                {youtubeVideos.slice(0, 2).map((video) => (
                  <div key={video.id} className="thumb-card">
                    <div
                      className="thumb-image"
                      style={{
                        backgroundImage: `url(${video.thumbnail})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                      }}
                    >
                      <div className="video-duration">{video.duration}</div>
                      <div className="play-button-small">
                        <PlayCircle size={20} fill="#fff" />
                      </div>
                    </div>
                    <div className="thumb-info">
                      <div className="thumb-title">{video.title}</div>
                      <div className="thumb-stats">
                        <span>{video.views} views</span>
                        <span>•</span>
                        <span>{video.uploadDate}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Recent Match Performance */}
            <div className="card">
              <div className="card-title">
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <Shield size={22} color="#00703d" /> Recent Performance
                </span>
                <span
                  style={{ fontSize: 12, color: "#95a5a6", fontWeight: 500 }}
                >
                  Last 5 Matches
                </span>
              </div>
              <table className="matches-table">
                <thead>
                  <tr>
                    <th>Match</th>
                    <th>Date</th>
                    <th>Rating</th>
                    <th style={{ textAlign: "right" }}>Result</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>vs MAS Fes</td>
                    <td>Oct 24</td>
                    <td>
                      <span className="rating-badge excellent">8.4</span>
                    </td>
                    <td style={{ textAlign: "right" }} className="result-win">
                      W 2-1
                    </td>
                  </tr>
                  <tr>
                    <td>vs RS Berkane</td>
                    <td>Oct 18</td>
                    <td>
                      <span className="rating-badge good">7.1</span>
                    </td>
                    <td style={{ textAlign: "right" }} className="result-draw">
                      D 1-1
                    </td>
                  </tr>
                  <tr>
                    <td>vs FUS Rabat</td>
                    <td>Oct 11</td>
                    <td>
                      <span className="rating-badge excellent">7.9</span>
                    </td>
                    <td style={{ textAlign: "right" }} className="result-loss">
                      L 0-1
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Upcoming Matches */}
            <div className="card">
              <div className="card-title">
                <span
                  style={{ display: "flex", alignItems: "center", gap: 10 }}
                >
                  <Calendar size={22} color="#ce1126" /> Upcoming Matches
                </span>
              </div>
              <div className="matches-list">
                {upcomingMatches.map((match) => (
                  <div key={match.id} className="match-item">
                    <div className="match-date">
                      <div className="match-day">
                        {match.date.split(" ")[1]}
                      </div>
                      <div className="match-month">
                        {match.date.split(" ")[0]}
                      </div>
                    </div>
                    <div className="match-details">
                      <div className="match-opponent">{match.opponent}</div>
                      <div className="match-competition">
                        {match.competition}
                      </div>
                      <div className="match-info">
                        <span>
                          <Clock size={12} /> {match.time}
                        </span>
                        <span>{match.tvChannel}</span>
                      </div>
                    </div>
                    <div className={`match-type ${match.type}`}>
                      {match.type === "home" ? "H" : "A"}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* YouTube Tab Content */}
      {activeTab === "youtube" && (
        <div className="youtube-grid">
          <div className="youtube-header">
            <div className="youtube-channel-info">
              <div className="channel-avatar">
                <Youtube size={32} color="#ff0000" />
              </div>
              <div className="channel-details">
                <h2>Youssef El-Haddad Official</h2>
                <p>Professional Footballer • 25.8K subscribers • 12 videos</p>
                <div className="channel-stats">
                  <span>124K total views</span>
                  <span>•</span>
                  <span>Joined Mar 2023</span>
                </div>
              </div>
              <button className="btn-subscribe">
                <Youtube size={16} /> Subscribe
              </button>
            </div>
          </div>

          <div className="youtube-videos">
            {youtubeVideos.map((video) => (
              <div key={video.id} className="youtube-video-card">
                <div
                  className="video-thumbnail"
                  style={{
                    backgroundImage: `url(${video.thumbnail})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                >
                  <div className="video-duration-badge">{video.duration}</div>
                  <div className="play-overlay">
                    <PlayCircle size={48} fill="#fff" color="#fff" />
                  </div>
                  <a
                    href={video.youtubeUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="video-link"
                  >
                    Watch on YouTube
                  </a>
                </div>
                <div className="video-info">
                  <h3 className="video-title">{video.title}</h3>
                  <div className="video-meta">
                    <span>{video.views} views</span>
                    <span>•</span>
                    <span>{video.uploadDate}</span>
                  </div>
                  <div className="video-stats">
                    <div className="video-stat">
                      <ThumbsUp size={14} />
                      <span>{video.likes}</span>
                    </div>
                    <div className="video-stat">
                      <MessageSquare size={14} />
                      <span>{video.comments}</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Stats Tab Content */}
      {activeTab === "stats" && (
        <div className="stats-grid-detailed">
          <div className="stat-card">
            <div className="stat-card-header">
              <BarChart size={24} />
              <h3>Performance Analytics</h3>
            </div>
            <div className="stat-card-content">
              <div className="stats-visualization">
                <div className="stat-visual-item">
                  <div className="visual-label">Passing Accuracy</div>
                  <div className="visual-bar">
                    <div
                      className="visual-fill"
                      style={{
                        width: `${detailedStats.passing.accuracy}%`,
                        backgroundColor: "#00703d",
                      }}
                    >
                      {detailedStats.passing.accuracy}%
                    </div>
                  </div>
                </div>
                <div className="stat-visual-item">
                  <div className="visual-label">Shooting Conversion</div>
                  <div className="visual-bar">
                    <div
                      className="visual-fill"
                      style={{
                        width: `${detailedStats.shooting.conversionRate}%`,
                        backgroundColor: "#ce1126",
                      }}
                    >
                      {detailedStats.shooting.conversionRate}%
                    </div>
                  </div>
                </div>
                <div className="stat-visual-item">
                  <div className="visual-label">Distance Covered (km)</div>
                  <div className="visual-bar">
                    <div
                      className="visual-fill"
                      style={{
                        width: `${
                          detailedStats.physical.distanceCovered / 1.5
                        }%`,
                        backgroundColor: "#00703d",
                      }}
                    >
                      {detailedStats.physical.distanceCovered}km
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="footer">© 2024 LKWAYRIYA. Empowering Talent.</div>

      {/* Enhanced Chatbot UI */}
      <div
        className={`chatbot-container ${isChatOpen ? "open" : ""} ${
          isChatMinimized ? "minimized" : ""
        }`}
      >
        {!isChatOpen ? (
          <button
            className="chatbot-toggle"
            onClick={() => setIsChatOpen(true)}
          >
            <div className="chatbot-icon-wrapper">
              <div className="chatbot-icon-pulse"></div>
              <div className="chatbot-icon">
                <MessageCircle size={24} />
              </div>
              <span className="notification-badge">3</span>
            </div>
            <div className="chatbot-label">
              <span className="label-text">Chat Assistant</span>
              <span className="label-subtext">Ask AI about Youssef</span>
            </div>
          </button>
        ) : isChatMinimized ? (
          <div
            className="chatbot-minimized"
            onClick={() => setIsChatMinimized(false)}
          >
            <div className="minimized-content">
              <div className="minimized-avatar">
                <div className="minimized-avatar-img">
                  <img
                    src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                    alt="Youssef"
                  />
                </div>
                <div className="minimized-status-indicator"></div>
              </div>
              <div className="minimized-info">
                <div className="minimized-name">AI Assistant</div>
                <div className="minimized-message-preview">
                  Online • Ready to help
                </div>
              </div>
              <div className="minimized-actions">
                <button
                  className="minimized-action-btn maximize-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsChatMinimized(false);
                  }}
                >
                  <Maximize2 size={16} />
                </button>
                <button
                  className="minimized-action-btn close-btn"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsChatOpen(false);
                  }}
                >
                  <X size={16} />
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="chatbot-window">
            <div className="chatbot-header">
              <div className="chatbot-header-content">
                <div className="chatbot-avatar">
                  <div className="avatar-img-container">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=200&q=80"
                      alt="Youssef El-Haddad"
                      className="avatar-img"
                    />
                    <div className="avatar-status"></div>
                  </div>
                </div>
                <div className="chatbot-info">
                  <div className="chatbot-name-wrapper">
                    <h3 className="chatbot-name">Youssef's Assistant</h3>
                  </div>
                  <div className="chatbot-status-wrapper">
                    <span className="status-indicator"></span>
                    <span className="status-text">Online</span>
                    <span className="status-separator">•</span>
                  </div>
                </div>
              </div>
              <div className="chatbot-header-actions">
                <button
                  className="chatbot-action-btn voice-btn"
                  onClick={() => setIsMuted(!isMuted)}
                  title={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <MicOff size={18} /> : <Mic size={18} />}
                </button>
                <button
                  className="chatbot-action-btn minimize-btn"
                  onClick={() => setIsChatMinimized(true)}
                  title="Minimize"
                >
                  <Minimize2 size={18} />
                </button>
                <button
                  className="chatbot-action-btn close-btn"
                  onClick={() => setIsChatOpen(false)}
                  title="Close"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            <div className="chatbot-quick-actions">
              <div className="quick-actions-header">
                <Zap size={14} />
                <span>Quick Actions</span>
              </div>
              <div className="quick-actions-grid">
                <button
                  className="quick-action-btn"
                  onClick={() => handleQuickQuestion("Show recent match stats")}
                >
                  <BarChart size={16} />
                  <span>Stats</span>
                </button>
                <button
                  className="quick-action-btn"
                  onClick={() => handleQuickQuestion("Show training videos")}
                >
                  <Video size={16} />
                  <span>Videos</span>
                </button>
                <button
                  className="quick-action-btn"
                  onClick={() =>
                    handleQuickQuestion("What's his availability?")
                  }
                >
                  <Calendar size={16} />
                  <span>Schedule</span>
                </button>
                <button
                  className="quick-action-btn"
                  onClick={() => handleQuickQuestion("YouTube analytics")}
                >
                  <Youtube size={16} />
                  <span>YouTube</span>
                </button>
              </div>
            </div>

            <div className="chatbot-messages-container">
              <div className="chatbot-messages">
                <div className="welcome-message">
                  <div className="welcome-avatar">
                    <img
                      src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                      alt="Youssef"
                    />
                  </div>
                  <div className="welcome-content">
                    <div className="welcome-header">
                      <span className="welcome-name">
                        Youssef's AI Assistant
                      </span>
                      <span className="welcome-time">Just now</span>
                    </div>
                    <div className="welcome-text">
                      Hello! I'm Youssef's AI Football Assistant. I can provide
                      detailed insights about his performance, stats, and
                      availability.
                    </div>
                  </div>
                </div>

                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`message-container ${
                      msg.isUser ? "user-message" : "ai-message"
                    } ${msg.isAi ? "ai-response" : ""}`}
                  >
                    {msg.isAi && (
                      <div className="message-avatar">
                        <div className="ai-avatar-img">
                          <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            alt="AI Assistant"
                          />
                          <div className="ai-badge">
                            <Brain size={8} />
                          </div>
                        </div>
                      </div>
                    )}
                    <div
                      className={`message-bubble ${
                        msg.isUser ? "sent" : "received"
                      }`}
                    >
                      {msg.isAi && (
                        <div className="message-header">
                          <div className="message-sender">
                            <span>AI Assistant</span>
                          </div>
                          <div className="message-time">{msg.time}</div>
                        </div>
                      )}
                      <div className="message-content">{msg.text}</div>
                      {!msg.isAi && (
                        <div className="message-footer">
                          <span className="message-time">{msg.time}</span>
                        </div>
                      )}
                    </div>
                    {msg.isUser && (
                      <div className="message-avatar user-avatar">
                        <div className="user-avatar-img">
                          <img
                            src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            alt="You"
                          />
                        </div>
                      </div>
                    )}
                  </div>
                ))}

                {isTyping && (
                  <div className="typing-indicator-container">
                    <div className="typing-indicator">
                      <div className="typing-avatar">
                        <div className="typing-avatar-img">
                          <img
                            src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&auto=format&fit=crop&w=100&q=80"
                            alt="AI Assistant"
                          />
                        </div>
                      </div>
                      <div className="typing-content">
                        <div className="typing-text">
                          Youssef's AI Assistant is typing...
                        </div>
                        <div className="typing-dots">
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                          <div className="typing-dot"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="chatbot-input-container">
              <div className="input-tools">
                <button className="input-tool-btn">
                  <Smile size={20} />
                </button>
                <button className="input-tool-btn">
                  <Paperclip size={20} />
                </button>
                <button className="input-tool-btn">
                  <Camera size={20} />
                </button>
              </div>
              <div className="input-wrapper">
                <input
                  type="text"
                  placeholder="Type your question about stats, videos, or availability..."
                  className="chatbot-input"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                />
                <button
                  className="send-button"
                  onClick={handleSendMessage}
                  disabled={!inputMessage.trim()}
                >
                  <Send size={20} />
                </button>
              </div>
            </div>

            <div className="chatbot-footer">
              <div className="ai-capabilities">
                <div className="capability-item">
                  <Sparkles size={12} />
                  <span>Real-time analytics</span>
                </div>
                <div className="capability-item">
                  <Video size={12} />
                  <span>Video insights</span>
                </div>
                <div className="capability-item">
                  <BarChart size={12} />
                  <span>Performance data</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PlayerProfile;
