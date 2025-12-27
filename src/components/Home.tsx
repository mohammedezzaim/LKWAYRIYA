import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Brain, Users, TrendingUp, Eye, BarChart3, Rocket, Target, LineChart, Menu, X, Video, Shield, Globe, Zap } from 'lucide-react';

const Home = () => {
  const navigate = useNavigate();
  const [activeRole, setActiveRole] = useState<string | null>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('accueil');

  const handleNavigation = (id: string) => {
    if (id === 'athlete') {
      navigate('/athlete');
      return;
    }
    if (id === 'clubs') {
      navigate('/clubs');
      return;
    }
    if (id === 'users') {
      navigate('/users');
      return;
    }
    
    setActiveSection(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const navItems = [
    { id: 'accueil', label: 'Accueil' },
    // { id: 'equipe', label: 'Équipe' },
    { id: 'clubs', label: 'Clubs' },
    { id: 'athlete', label: 'Espace Athlète' },
    { id: 'contact', label: 'Contact' }
  ];

  const roles = [
    {
      id: 'founder',
      title: 'Fondateur / CEO',
      Icon: Target,
      color: 'red',
      responsibilities: [
        'Vision stratégique de NeuroLion AI',
        'Leadership de l\'équipe panafricaine',
        'Partenariats avec clubs & académies',
        'Levée de fonds et expansion'
      ],
      skills: ['Leadership', 'Stratégie', 'Networking', 'Vision Business']
    },
    {
      id: 'cto',
      title: 'CTO / Architecte IA',
      Icon: Brain,
      color: 'green',
      responsibilities: [
        'Architecture système & Infrastructure cloud',
        'Développement modèles IA/Vision',
        'Calibration algorithmes pour contexte marocain',
        'Supervision technique de la plateforme'
      ],
      skills: ['Computer Vision', 'ML/AI', 'Cloud Architecture', 'Python/TensorFlow']
    },
    {
      id: 'product',
      title: 'Product Manager',
      Icon: LineChart,
      color: 'red',
      responsibilities: [
        'Roadmap produit & Priorisation features',
        'Interface LinkFoot (réseau social)',
        'UX/UI pour scouts et académies',
        'Analytics & Métriques produit'
      ],
      skills: ['Product Design', 'User Research', 'Agile', 'Analytics']
    },
    {
      id: 'scout',
      title: 'Directeur Scouting',
      Icon: Eye,
      color: 'green',
      responsibilities: [
        'Réseau de Kachafa (scouts terrain)',
        'Validation profils joueurs',
        'Relations clubs européens & africains',
        'Détection talents académies marocaines'
      ],
      skills: ['Expertise Football', 'Réseau Clubs', 'Analyse Joueurs', 'Négociation']
    },
    {
      id: 'data',
      title: 'Data Scientist',
      Icon: BarChart3,
      color: 'red',
      responsibilities: [
        'Modèles prédictifs performance joueurs',
        'Traitement vidéos & Extraction metrics',
        'Dashboard analytics temps réel',
        'Algorithmes de matching clubs-talents'
      ],
      skills: ['Python', 'Computer Vision', 'Statistics', 'Big Data']
    },
    {
      id: 'growth',
      title: 'Growth & Partnerships',
      Icon: Rocket,
      color: 'green',
      responsibilities: [
        'Acquisition académies partenaires',
        'Marketing digital Maroc & Afrique',
        'Community management LinkFoot',
        'Relations médias & Communication'
      ],
      skills: ['Marketing', 'Sales', 'Communication', 'Community Building']
    }
  ];

  const platformFeatures = [
    {
      Icon: Video,
      title: 'IA de Vision',
      description: 'Analyse vidéo automatisée calibrée pour le contexte marocain et africain',
      color: '#ce1126'
    },
    {
      Icon: BarChart3,
      title: 'Profils Data-Vidéo',
      description: 'Création automatique de profils complets pour chaque joueur des académies',
      color: '#00703d'
    },
    {
      Icon: Shield,
      title: 'Validation Experts',
      description: 'Vérification par scouts professionnels (Kachafa) avant publication',
      color: '#ce1126'
    },
    {
      Icon: Globe,
      title: 'Portée Internationale',
      description: 'Connexion directe avec clubs africains et européens partenaires',
      color: '#00703d'
    }
  ];

  const linkfootFeatures = [
    {
      Icon: Users,
      title: 'Réseau Social Pro',
      description: 'Plateforme dédiée connectant joueurs, scouts, clubs et académies'
    },
    {
      Icon: Eye,
      title: 'Suivi en Temps Réel',
      description: 'Les recruteurs (Kachafa) suivent l\'activité et détectent les talents'
    },
    {
      Icon: Zap,
      title: 'Matching Intelligent',
      description: 'Algorithmes ML pour connecter les bons talents aux bons clubs'
    },
    {
      Icon: TrendingUp,
      title: 'Évolution Carrière',
      description: 'Suivi de progression et opportunités de développement professionnel'
    }
  ];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 50%, #f9fafb 100%)', fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' }}>
      
      {/* Navbar */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid #e5e7eb',
        zIndex: 1000,
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.05)'
      }}>
        <div style={{ maxWidth: '1400px', margin: '0 auto', padding: '1rem 2rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', cursor: 'pointer' }} onClick={() => handleNavigation('accueil')}>
            <img 
              src="/logo/logo-kwariya.png" 
              alt="LKWAYRIYA Logo" 
              style={{
                height: '100px',
                width: '100px'
              }}
            />
            <span style={{ fontSize: '1.5rem', fontWeight: 800, background: 'linear-gradient(135deg, #ce1126, #00703d)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
              LKWAYRIYA
            </span>
          </div>

          {/* Desktop Menu */}
          <div style={{ display: 'flex', gap: '2rem', alignItems: 'center' }}>
            <div className="desktop-menu" style={{ display: 'flex', gap: '2rem' }}>
              {navItems.map(item => (
                <button
                  key={item.id}
                  onClick={() => handleNavigation(item.id)}
                  style={{
                    background: 'none',
                    border: 'none',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: activeSection === item.id ? '#ce1126' : '#4b5563',
                    cursor: 'pointer',
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    transition: 'all 0.3s ease',
                    position: 'relative'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.background = '#f9fafb';
                    e.currentTarget.style.color = '#ce1126';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.background = 'none';
                    e.currentTarget.style.color = activeSection === item.id ? '#ce1126' : '#4b5563';
                  }}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <div style={{
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: '40px',
                      height: '3px',
                      background: 'linear-gradient(90deg, #ce1126, #00703d)',
                      borderRadius: '2px'
                    }} />
                  )}
                </button>
              ))}
            </div>

            <button style={{
              padding: '0.75rem 1.75rem',
              background: 'linear-gradient(135deg, #ce1126, #00703d)',
              color: 'white',
              border: 'none',
              borderRadius: '10px',
              fontSize: '1rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              boxShadow: '0 4px 15px rgba(206, 17, 38, 0.3)'
            }}
            onClick={() => navigate('/athlete')}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 6px 20px rgba(206, 17, 38, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 4px 15px rgba(206, 17, 38, 0.3)';
            }}>
              Démo
            </button>

            {/* Mobile Menu Button */}
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{
                display: 'none',
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '0.5rem'
              }}
            >
              {mobileMenuOpen ? <X size={28} color="#ce1126" /> : <Menu size={28} color="#ce1126" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            background: 'white',
            borderTop: '1px solid #e5e7eb',
            padding: '1rem 2rem'
          }}>
            {navItems.map(item => (
              <button
                key={item.id}
                onClick={() => handleNavigation(item.id)}
                style={{
                  display: 'block',
                  width: '100%',
                  textAlign: 'left',
                  background: 'none',
                  border: 'none',
                  fontSize: '1.125rem',
                  fontWeight: 600,
                  color: activeSection === item.id ? '#ce1126' : '#4b5563',
                  cursor: 'pointer',
                  padding: '1rem',
                  borderRadius: '8px',
                  marginBottom: '0.5rem'
                }}
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Spacing for fixed navbar */}
      <div style={{ height: '80px' }} />

      {/* Hero Section */}
      <div id="accueil" style={{
        position: 'relative',
        minHeight: '85vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        background: 'linear-gradient(135deg, #ce1126 0%, #00703d 100%)'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'radial-gradient(circle at 20% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(255, 255, 255, 0.15) 0%, transparent 50%)',
          opacity: 0.8
        }} />
        
        <div style={{ position: 'absolute', top: '10%', left: '5%', width: '100px', height: '100px', border: '3px solid rgba(255,255,255,0.1)', borderRadius: '20px', transform: 'rotate(45deg)' }} />
        <div style={{ position: 'absolute', bottom: '15%', right: '8%', width: '80px', height: '80px', border: '3px solid rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        
        <div style={{ position: 'relative', textAlign: 'center', color: 'white', padding: '2rem', zIndex: 10, maxWidth: '1000px' }}>
          <div style={{ marginBottom: '3rem' }}>
            <div style={{
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              marginBottom: '2rem'
            }}>
              <img 
                src="/logo/logo-kwariya.png" 
                alt="LKWAYRIYA Logo" 
                style={{
                  height: '120px',
                  width: 'auto',
                  filter: 'brightness(0) invert(1)',
                  opacity: 0.95
                }}
              />
            </div>
            
            <h1 style={{ 
              fontSize: '5rem', 
              fontWeight: 900, 
              letterSpacing: '-3px', 
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.3)', 
              marginBottom: '1.5rem',
              lineHeight: 1.1
            }}>
              LKWAYRIYA
            </h1>
            
            <div style={{
              width: '100px',
              height: '4px',
              background: 'white',
              margin: '0 auto 2rem',
              borderRadius: '2px'
            }} />
          </div>
          
          <p style={{ fontSize: '1.75rem', fontWeight: 300, marginBottom: '3rem', opacity: 0.95, lineHeight: 1.4, maxWidth: '800px', margin: '0 auto 3rem' }}>
            Plateforme SaaS panafricaine de détection de talents footballistiques
          </p>
          
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <span style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              fontSize: '1rem', 
              fontWeight: 600, 
              background: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              Made in Morocco
            </span>
            <span style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              fontSize: '1rem', 
              fontWeight: 600, 
              background: 'rgba(255, 255, 255, 0.2)', 
              backdropFilter: 'blur(10px)', 
              border: '2px solid rgba(255, 255, 255, 0.3)'
            }}>
              AI-Powered
            </span>
            <span style={{ 
              padding: '1rem 2rem', 
              borderRadius: '12px', 
              fontSize: '1rem', 
              fontWeight: 600, 
              background: 'rgba(255, 255, 255, 0.3)', 
              backdropFilter: 'blur(10px)', 
              border: '2px solid rgba(255, 255, 255, 0.4)',
              animation: 'pulse 2s ease-in-out infinite'
            }}>
              Coming Soon
            </span>
          </div>
        </div>
      </div>

      {/* Plateforme Section */}
      <section id="plateforme" style={{ padding: '8rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ce1126 0%, #00703d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              La Plateforme LKWAYRIYA
            </h2>
            <div style={{ 
              width: '80px', 
              height: '5px', 
              background: 'linear-gradient(90deg, #ce1126, #00703d)', 
              margin: '1.5rem auto 2rem', 
              borderRadius: '3px' 
            }} />
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
              Une solution complète combinant IA de vision et automatisation pour révolutionner la détection de talents
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {platformFeatures.map((feature, idx) => {
              const Icon = feature.Icon;
              return (
                <div key={idx} style={{
                  background: 'white',
                  padding: '3rem 2.5rem',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                  textAlign: 'center',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = feature.color;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${feature.color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.06)';
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '90px',
                    height: '90px',
                    marginBottom: '2rem',
                    borderRadius: '20px',
                    background: `linear-gradient(135deg, ${feature.color}15, ${feature.color}25)`
                  }}>
                    <Icon size={40} color={feature.color} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* LinkFoot Section */}
      <section id="linkfoot" style={{ padding: '8rem 2rem', background: 'linear-gradient(135deg, #f9fafb 0%, #ffffff 100%)' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <h2 style={{
              fontSize: '3.5rem',
              fontWeight: 800,
              marginBottom: '1rem',
              background: 'linear-gradient(135deg, #ce1126 0%, #00703d 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text'
            }}>
              LinkFoot - Réseau Social Pro
            </h2>
            <div style={{ 
              width: '80px', 
              height: '5px', 
              background: 'linear-gradient(90deg, #ce1126, #00703d)', 
              margin: '1.5rem auto 2rem', 
              borderRadius: '3px' 
            }} />
            <p style={{ fontSize: '1.25rem', color: '#6b7280', maxWidth: '800px', margin: '0 auto', lineHeight: 1.7 }}>
              Le réseau social professionnel intégré qui connecte talents locaux et opportunités internationales
            </p>
          </div>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2.5rem' }}>
            {linkfootFeatures.map((feature, idx) => {
              const Icon = feature.Icon;
              const color = idx % 2 === 0 ? '#ce1126' : '#00703d';
              return (
                <div key={idx} style={{
                  background: 'white',
                  padding: '3rem 2.5rem',
                  borderRadius: '24px',
                  boxShadow: '0 10px 40px rgba(0, 0, 0, 0.06)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  border: '2px solid transparent',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-12px)';
                  e.currentTarget.style.borderColor = color;
                  e.currentTarget.style.boxShadow = `0 20px 50px ${color}33`;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'transparent';
                  e.currentTarget.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.06)';
                }}>
                  <div style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '80px',
                    height: '80px',
                    marginBottom: '1.5rem',
                    borderRadius: '18px',
                    background: `linear-gradient(135deg, ${color}15, ${color}25)`
                  }}>
                    <Icon size={36} color={color} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>
                    {feature.title}
                  </h3>
                  <p style={{ color: '#6b7280', fontSize: '1.05rem', lineHeight: 1.7 }}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>

          <div style={{
            marginTop: '5rem',
            padding: '3rem',
            background: 'linear-gradient(135deg, rgba(206, 17, 38, 0.05), rgba(0, 112, 61, 0.05))',
            borderRadius: '24px',
            border: '2px solid rgba(206, 17, 38, 0.1)',
            textAlign: 'center'
          }}>
            <h3 style={{ fontSize: '1.75rem', fontWeight: 700, marginBottom: '1rem', color: '#111827' }}>
              "Kachafa deyal club chehak taychdo"
            </h3>
            <p style={{ fontSize: '1.125rem', color: '#6b7280', lineHeight: 1.7 }}>
              Les recruteurs (Kachafa) suivent l'activité en temps réel et identifient précisément les talents émergents
            </p>
          </div>
        </div>
      </section>

      {/* Roles/Team Section */}
      <section id="equipe" style={{ padding: '8rem 2rem', background: 'white' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto 5rem', textAlign: 'center' }}>
          <h2 style={{
            fontSize: '3.5rem',
            fontWeight: 800,
            marginBottom: '1rem',
            background: 'linear-gradient(135deg, #ce1126 0%, #00703d 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text'
          }}>
            Ton Rôle dans l'Équipe
          </h2>
          <div style={{ 
            width: '80px', 
            height: '5px', 
            background: 'linear-gradient(90deg, #ce1126, #00703d)', 
            margin: '1.5rem auto 2rem', 
            borderRadius: '3px' 
          }} />
          <p style={{ fontSize: '1.375rem', color: '#6b7280', lineHeight: 1.6 }}>
            Chaque membre est essentiel au succès de LKWAYRIYA.<br/>
            Découvre ton domaine d'expertise et ton impact
          </p>
        </div>

        <div style={{
          maxWidth: '1400px',
          margin: '0 auto',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))',
          gap: '2.5rem'
        }}>
          {roles.map((role) => {
            const isActive = activeRole === role.id;
            const borderColor = role.color === 'red' ? '#ce1126' : '#00703d';
            const bgLight = role.color === 'red' ? 'rgba(206, 17, 38, 0.08)' : 'rgba(0, 112, 61, 0.08)';
            const textColor = role.color === 'red' ? '#9b0d1f' : '#005030';
            const Icon = role.Icon;
            
            return (
              <div
                key={role.id}
                onClick={() => setActiveRole(isActive ? null : role.id)}
                style={{
                  background: 'white',
                  borderRadius: '24px',
                  padding: '2.5rem',
                  boxShadow: isActive ? `0 15px 50px ${role.color === 'red' ? 'rgba(206, 17, 38, 0.25)' : 'rgba(0, 112, 61, 0.25)'}` : '0 8px 30px rgba(0, 0, 0, 0.08)',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden',
                  border: `3px solid ${isActive ? borderColor : 'transparent'}`,
                  transform: isActive ? 'translateY(-10px) scale(1.02)' : 'translateY(0)'
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(-8px)';
                    e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.12)';
                    e.currentTarget.style.borderColor = borderColor;
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.08)';
                    e.currentTarget.style.borderColor = 'transparent';
                  }
                }}
              >
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '5px',
                  background: `linear-gradient(90deg, ${borderColor}, ${role.color === 'red' ? '#ff1744' : '#009951'})`
                }} />
                
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', marginBottom: '2rem' }}>
                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '70px',
                    height: '70px',
                    background: bgLight,
                    borderRadius: '16px'
                  }}>
                    <Icon size={36} color={borderColor} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontSize: '1.625rem', fontWeight: 700, color: '#111827', flex: 1, lineHeight: 1.3 }}>
                    {role.title}
                  </h3>
                </div>

                <div style={{
                  maxHeight: isActive ? '600px' : '0',
                  overflow: 'hidden',
                  transition: 'max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
                  marginBottom: isActive ? '2rem' : 0
                }}>
                  <div style={{ marginBottom: '2rem' }}>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: '#374151',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Responsabilités
                    </h4>
                    <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                      {role.responsibilities.map((resp, idx) => (
                        <li key={idx} style={{
                          padding: '0.75rem 0',
                          paddingLeft: '1.75rem',
                          position: 'relative',
                          color: '#6b7280',
                          fontSize: '1rem',
                          lineHeight: 1.6,
                          borderBottom: idx < role.responsibilities.length - 1 ? '1px solid #f3f4f6' : 'none'
                        }}>
                          <span style={{
                            position: 'absolute',
                            left: 0,
                            top: '0.75rem',
                            fontWeight: 'bold',
                            color: borderColor,
                            fontSize: '1.125rem'
                          }}>•</span>
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h4 style={{
                      fontSize: '1.125rem',
                      fontWeight: 700,
                      color: '#374151',
                      marginBottom: '1rem',
                      textTransform: 'uppercase',
                      letterSpacing: '0.5px'
                    }}>
                      Compétences Clés
                    </h4>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                      {role.skills.map((skill, idx) => (
                        <span key={idx} style={{
                          padding: '0.625rem 1.25rem',
                          borderRadius: '10px',
                          fontSize: '0.9rem',
                          fontWeight: 600,
                          background: bgLight,
                          color: textColor,
                          border: `2px solid ${borderColor}20`
                        }}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div style={{ textAlign: 'center' }}>
                  <button style={{
                    padding: '1rem 2rem',
                    border: 'none',
                    borderRadius: '12px',
                    fontSize: '1.0625rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    color: 'white',
                    width: '100%',
                    background: `linear-gradient(135deg, ${borderColor}, ${role.color === 'red' ? '#ff1744' : '#009951'})`,
                    boxShadow: `0 4px 15px ${borderColor}40`
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.boxShadow = `0 6px 20px ${borderColor}60`;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = `0 4px 15px ${borderColor}40`;
                  }}>
                    {isActive ? 'Réduire' : 'Découvrir le rôle'}
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Contact/CTA Section */}
      <section id="contact" style={{
        padding: '8rem 2rem',
        background: 'linear-gradient(135deg, #ce1126 0%, #00703d 100%)',
        color: 'white',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{ position: 'absolute', top: '5%', right: '10%', width: '120px', height: '120px', border: '3px solid rgba(255,255,255,0.1)', borderRadius: '24px', transform: 'rotate(30deg)' }} />
        <div style={{ position: 'absolute', bottom: '10%', left: '5%', width: '100px', height: '100px', border: '3px solid rgba(255,255,255,0.1)', borderRadius: '50%' }} />
        
        <div style={{ position: 'relative', zIndex: 10 }}>
          <h2 style={{ fontSize: '3.5rem', fontWeight: 800, marginBottom: '1.5rem', lineHeight: 1.2 }}>
            Rejoins l'Aventure NeuroLion AI
          </h2>
          <p style={{ fontSize: '1.625rem', marginBottom: '3.5rem', opacity: 0.95, maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            Ensemble, construisons le futur du football africain et révolutionnons la détection de talents
          </p>
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button style={{
              padding: '1.25rem 3.5rem',
              border: 'none',
              borderRadius: '14px',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: 'white',
              color: '#ce1126',
              boxShadow: '0 8px 30px rgba(0, 0, 0, 0.25)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 12px 40px rgba(0, 0, 0, 0.35)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 8px 30px rgba(0, 0, 0, 0.25)';
            }}>
              Postuler maintenant
            </button>
            <button style={{
              padding: '1.25rem 3.5rem',
              border: '3px solid white',
              borderRadius: '14px',
              fontSize: '1.125rem',
              fontWeight: 700,
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              background: 'transparent',
              color: 'white'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = 'white';
              e.currentTarget.style.color = '#00703d';
              e.currentTarget.style.transform = 'translateY(-4px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.transform = 'translateY(0)';
            }}>
              En savoir plus
            </button>
          </div>
        </div>
      </section>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.7; }
        }
        
        @media (max-width: 768px) {
          .desktop-menu {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
        }
      `}</style>
    </div>
  );
};

export default Home