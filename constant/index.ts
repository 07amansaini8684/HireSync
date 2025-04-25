const userPost = [
    {
      "post": {
        "id": "post_002",
        "author": {
          "name": "TechGuru",
          "username": "@techguru",
          "role": "Developer Advocate",
          "profilePicture": "https://somecdn.com/profiles/techguru.jpg"
        },
        "title": "Building Scalable Microservices with Kubernetes",
        "content": {
          "text": "Just finished our migration to a fully containerized architecture. Here's what we learned...\n\nOur monolith was becoming unwieldy. Breaking it down into microservices has improved our deployment velocity by 300%.",
          "image": "https://somecdn.com/images/kubernetes-dashboard.png",
          "link": "https://t.co/tech-blog-microservices"
        },
        "metadata": {
          "createdAt": "Feb 12, 2025 10:23AM",
          "tags": ["#kubernetes", "#microservices", "#devops"],
          "stats": {
            "likes": 3200,
            "bookmarks": 845,
            "comments": 122,
            "shares": 510
          }
        },
        "description": "A detailed walkthrough of our journey migrating from a monolithic architecture to microservices using Kubernetes, including challenges faced and lessons learned...",
        "comments": [
          {
            "id": "comment_003",
            "author": {
              "name": "CloudNative",
              "username": "@cloud_native",
              "profilePicture": "https://somecdn.com/profiles/cloudnative.jpg"
            },
            "content": "What monitoring stack are you using? We're finding Prometheus doesn't scale well with our setup.",
            "createdAt": "3 days ago",
            "engagement": {
              "likes": 45,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_003",
        "author": {
          "name": "FoodieExplorer",
          "username": "@foodie_travels",
          "role": "Content Creator",
          "profilePicture": "https://somecdn.com/profiles/foodie_explorer.jpg"
        },
        "title": "Hidden Gems: Street Food Tour of Bangkok",
        "content": {
          "text": "The best Pad Thai isn't in the fancy restaurants...\n\nYou'll find it in this tiny stall on Sukhumvit Soi 38, run by an elderly couple who've perfected their recipe over 40 years.",
          "image": "https://somecdn.com/travel/bangkok-street-food-tour.jpg",
          "link": "https://t.co/foodie-bangkok-guide"
        },
        "metadata": {
          "createdAt": "Mar 05, 2025 6:42PM",
          "tags": ["#travel", "#foodie", "#bangkok", "#streetfood"],
          "stats": {
            "likes": 8900,
            "bookmarks": 1240,
            "comments": 203,
            "shares": 756
          }
        },
        "description": "Join me on a culinary adventure through Bangkok's vibrant street food scene, where I uncover hidden gems and share tips for finding authentic local cuisine away from tourist traps...",
        "comments": [
          {
            "id": "comment_004",
            "author": {
              "name": "WanderlustDreamer",
              "username": "@wanderlust",
              "profilePicture": "https://somecdn.com/profiles/wanderlust.jpg"
            },
            "content": "Bookmarked! Planning my trip for next month. Any recommendations for vegetarian options?",
            "createdAt": "2 days ago",
            "engagement": {
              "likes": 23,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_004",
        "author": {
          "name": "DataScienceDaily",
          "username": "@datascienceinsights",
          "role": "Research Organization",
          "profilePicture": "https://somecdn.com/profiles/datascience.jpg"
        },
        "title": "Breakthrough in Explainable AI: Making Black Box Models Transparent",
        "content": {
          "text": "Our team has developed a novel approach to interpreting deep neural networks...\n\nThe technique provides human-readable explanations for complex model decisions without sacrificing accuracy.",
          "image": "https://somecdn.com/research/xai-visualization.png",
          "link": "https://t.co/explainable-ai-research"
        },
        "metadata": {
          "createdAt": "Jan 18, 2025 9:15AM",
          "tags": ["#AI", "#MachineLearning", "#ExplainableAI", "#Research"],
          "stats": {
            "likes": 5600,
            "bookmarks": 2300,
            "comments": 89,
            "shares": 1200
          }
        },
        "description": "This groundbreaking research introduces a framework for making complex AI models more transparent and interpretable, potentially addressing key regulatory challenges in high-stakes AI applications...",
        "comments": [
          {
            "id": "comment_005",
            "author": {
              "name": "AIEthicist",
              "username": "@ai_ethics",
              "profilePicture": "https://somecdn.com/profiles/ai_ethics.jpg"
            },
            "content": "Have you tested this with fairness metrics? Would love to see how it performs on detecting biases.",
            "createdAt": "1 week ago",
            "engagement": {
              "likes": 78,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_005",
        "author": {
          "name": "FitnessJourney",
          "username": "@fitness_transform",
          "role": "Certified Trainer",
          "profilePicture": "https://somecdn.com/profiles/fitness_journey.jpg"
        },
        "title": "5 Common Myths About Muscle Building Debunked",
        "content": {
          "text": "Stop believing these fitness myths!\n\nNo, you don't need to eat every 2 hours to build muscle. Research shows meal timing is far less important than total daily protein intake.",
          "image": "https://somecdn.com/fitness/muscle-building-myths.jpg",
          "link": "https://t.co/fitness-myths-science"
        },
        "metadata": {
          "createdAt": "Apr 02, 2025 3:27PM",
          "tags": ["#fitness", "#nutrition", "#sciencebacked", "#health"],
          "stats": {
            "likes": 7200,
            "bookmarks": 1650,
            "comments": 342,
            "shares": 890
          }
        },
        "description": "Evidence-based debunking of common muscle-building myths that waste your time and effort, with practical recommendations based on current scientific literature...",
        "comments": [
          {
            "id": "comment_006",
            "author": {
              "name": "GymNewbie",
              "username": "@starting_fitness",
              "profilePicture": "https://somecdn.com/profiles/gym_newbie.jpg"
            },
            "content": "This is eye-opening! I've been meal prepping 6 times a day for months and it's exhausting.",
            "createdAt": "3 hours ago",
            "engagement": {
              "likes": 56,
              "dislikes": 2
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_006",
        "author": {
          "name": "ClimateAction",
          "username": "@climate_solutions",
          "role": "Environmental Scientist",
          "profilePicture": "https://somecdn.com/profiles/climate_scientist.jpg"
        },
        "title": "Urban Forests: The Secret Weapon Against Climate Change",
        "content": {
          "text": "Cities worldwide are discovering the power of strategic urban forestry...\n\nBeyond aesthetics, properly designed urban forests can reduce city temperatures by up to 8°C and capture 4x more carbon than traditional parks.",
          "image": "https://somecdn.com/environment/urban-forest-project.jpg",
          "link": "https://t.co/urban-forestry-guide"
        },
        "metadata": {
          "createdAt": "Feb 28, 2025 11:05AM",
          "tags": ["#ClimateAction", "#UrbanPlanning", "#Sustainability"],
          "stats": {
            "likes": 4300,
            "bookmarks": 980,
            "comments": 105,
            "shares": 670
          }
        },
        "description": "An exploration of how strategic urban forestry projects are transforming cities while fighting climate change, with case studies from Singapore, Milan, and Medellin...",
        "comments": [
          {
            "id": "comment_007",
            "author": {
              "name": "UrbanPlanner",
              "username": "@future_cities",
              "profilePicture": "https://somecdn.com/profiles/urban_planner.jpg"
            },
            "content": "The Singapore model is remarkable. They've integrated tree canopy coverage into their building codes with amazing results.",
            "createdAt": "5 days ago",
            "engagement": {
              "likes": 89,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_007",
        "author": {
          "name": "MusicProducer",
          "username": "@beats_lab",
          "role": "Audio Engineer",
          "profilePicture": "https://somecdn.com/profiles/music_producer.jpg"
        },
        "title": "How Lo-Fi Beats Became a Productivity Phenomenon",
        "content": {
          "text": "The science behind why millions are working to lo-fi beats...\n\nIt's not just aesthetic - the specific frequency ranges and predictable patterns create what neuroscientists call 'non-intrusive engagement' that boosts focus.",
          "image": "https://somecdn.com/music/lofi-beats-studio.jpg",
          "link": "https://t.co/lofi-music-science"
        },
        "metadata": {
          "createdAt": "Mar 17, 2025 8:32PM",
          "tags": ["#Music", "#Productivity", "#Neuroscience", "#LoFi"],
          "stats": {
            "likes": 6800,
            "bookmarks": 1420,
            "comments": 172,
            "shares": 830
          }
        },
        "description": "An exploration of how lo-fi beat channels grew from niche communities to productivity tools used by millions, examining the science behind their effectiveness and cultural impact...",
        "comments": [
          {
            "id": "comment_008",
            "author": {
              "name": "FocusedCoder",
              "username": "@deep_work",
              "profilePicture": "https://somecdn.com/profiles/focused_coder.jpg"
            },
            "content": "I've been coding to lo-fi for years! Do you have any playlists for more intense debugging sessions?",
            "createdAt": "2 days ago",
            "engagement": {
              "likes": 67,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_008",
        "author": {
          "name": "SpaceExplorer",
          "username": "@cosmic_journey",
          "role": "Astrophysicist",
          "profilePicture": "https://somecdn.com/profiles/space_explorer.jpg"
        },
        "title": "Europa's Ocean: Our Best Bet for Alien Life?",
        "content": {
          "text": "Jupiter's moon Europa hides secrets beneath its icy surface...\n\nRecent data from NASA's Europa Clipper suggests its subsurface ocean contains more organic compounds than previously thought, significantly raising the possibility of finding extraterrestrial life.",
          "image": "https://somecdn.com/space/europa-surface-rendering.jpg",
          "link": "https://t.co/europa-life-potential"
        },
        "metadata": {
          "createdAt": "Jan 05, 2025 4:17PM",
          "tags": ["#Space", "#Astrobiology", "#NASA", "#Europa"],
          "stats": {
            "likes": 9200,
            "bookmarks": 2700,
            "comments": 253,
            "shares": 1450
          }
        },
        "description": "A deep dive into the latest scientific findings about Europa's ocean and why astrobiologists consider it one of the most promising locations for finding life beyond Earth...",
        "comments": [
          {
            "id": "comment_009",
            "author": {
              "name": "StarGazer",
              "username": "@amateur_astro",
              "profilePicture": "https://somecdn.com/profiles/stargazer.jpg"
            },
            "content": "I remember when finding liquid water anywhere seemed like a breakthrough. Now we're discussing specific chemical signatures!",
            "createdAt": "1 week ago",
            "engagement": {
              "likes": 104,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_009",
        "author": {
          "name": "HistoryBuff",
          "username": "@time_traveler",
          "role": "Historical Researcher",
          "profilePicture": "https://somecdn.com/profiles/history_buff.jpg"
        },
        "title": "Lost Medieval Recipes Rediscovered in Monastery Archives",
        "content": {
          "text": "A culinary treasure trove hidden for centuries...\n\nThese 12th-century recipes reveal sophisticated flavor combinations and cooking techniques that challenge our assumptions about medieval cuisine.",
          "image": "https://somecdn.com/history/medieval-cookbook-page.jpg",
          "link": "https://t.co/medieval-cuisine-discovery"
        },
        "metadata": {
          "createdAt": "Apr 12, 2025 1:47PM",
          "tags": ["#History", "#Gastronomy", "#MedievalStudies", "#Archaeology"],
          "stats": {
            "likes": 3600,
            "bookmarks": 890,
            "comments": 78,
            "shares": 420
          }
        },
        "description": "The chance discovery of well-preserved recipe collections in a monastery basement is changing how historians understand everyday life and culinary practices in medieval Europe...",
        "comments": [
          {
            "id": "comment_010",
            "author": {
              "name": "CulinaryHistorian",
              "username": "@food_through_time",
              "profilePicture": "https://somecdn.com/profiles/culinary_historian.jpg"
            },
            "content": "The use of spice combinations is fascinating! Far more complex than most people realize medieval food was.",
            "createdAt": "3 days ago",
            "engagement": {
              "likes": 57,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_010",
        "author": {
          "name": "CyberSecPro",
          "username": "@security_mindset",
          "role": "Security Researcher",
          "profilePicture": "https://somecdn.com/profiles/cybersec_pro.jpg"
        },
        "title": "The Rise of Living-Off-the-Land Attacks: Defending Against the Invisible",
        "content": {
          "text": "Modern hackers aren't writing custom malware anymore...\n\nThey're using your own legitimate system tools against you, making traditional security solutions nearly blind to the attack.",
          "image": "https://somecdn.com/security/lotl-attack-diagram.png",
          "link": "https://t.co/lotl-defense-guide"
        },
        "metadata": {
          "createdAt": "Feb 20, 2025 9:58AM",
          "tags": ["#CyberSecurity", "#InfoSec", "#ThreatHunting"],
          "stats": {
            "likes": 5100,
            "bookmarks": 1870,
            "comments": 132,
            "shares": 980
          }
        },
        "description": "An in-depth analysis of living-off-the-land attack techniques that leverage legitimate system tools to evade detection, with defensive strategies for security professionals...",
        "comments": [
          {
            "id": "comment_011",
            "author": {
              "name": "DefensiveOps",
              "username": "@blue_team",
              "profilePicture": "https://somecdn.com/profiles/defensive_ops.jpg"
            },
            "content": "Process behavior monitoring is key here. We've had success with Sysmon + ELK stack to detect these patterns.",
            "createdAt": "5 days ago",
            "engagement": {
              "likes": 92,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_011",
        "author": {
          "name": "UrbanGardener",
          "username": "@city_plants",
          "role": "Horticulturist",
          "profilePicture": "https://somecdn.com/profiles/urban_gardener.jpg"
        },
        "title": "Transform Your Balcony: Edible Garden in Just 4 Square Feet",
        "content": {
          "text": "You don't need a backyard to grow your own food...\n\nWith vertical gardening techniques and these companion planting maps, even a tiny balcony can produce 30+ pounds of vegetables each season.",
          "image": "https://somecdn.com/gardening/small-space-harvest.jpg",
          "link": "https://t.co/balcony-garden-guide"
        },
        "metadata": {
          "createdAt": "Mar 25, 2025 2:12PM",
          "tags": ["#UrbanGardening", "#FoodSecurity", "#Sustainability"],
          "stats": {
            "likes": 7800,
            "bookmarks": 2340,
            "comments": 198,
            "shares": 1120
          }
        },
        "description": "A practical guide to maximizing food production in minimal urban spaces, with detailed plans, companion planting strategies, and month-by-month planting calendars for different climate zones...",
        "comments": [
          {
            "id": "comment_012",
            "author": {
              "name": "ApartmentFarmer",
              "username": "@indoor_harvest",
              "profilePicture": "https://somecdn.com/profiles/apartment_farmer.jpg"
            },
            "content": "I tried your vertical herb spiral design last month and it's thriving! Even in my north-facing window.",
            "createdAt": "2 days ago",
            "engagement": {
              "likes": 65,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_012",
        "author": {
          "name": "QuantumPhysics",
          "username": "@quantum_frontiers",
          "role": "Research Physicist",
          "profilePicture": "https://somecdn.com/profiles/quantum_physics.jpg"
        },
        "title": "Beyond Entanglement: New Quantum Phenomenon Observed",
        "content": {
          "text": "Our lab has confirmed a theoretical prediction that's puzzled physicists for decades...\n\nThis 'quantum catalysis' effect allows particles to influence each other without direct interaction or entanglement, challenging fundamental assumptions.",
          "image": "https://somecdn.com/science/quantum-experiment-setup.jpg",
          "link": "https://t.co/quantum-catalysis-paper"
        },
        "metadata": {
          "createdAt": "Jan 29, 2025 11:23AM",
          "tags": ["#QuantumPhysics", "#Science", "#Research"],
          "stats": {
            "likes": 4700,
            "bookmarks": 1560,
            "comments": 87,
            "shares": 910
          }
        },
        "description": "A groundbreaking discovery in quantum mechanics that reveals a previously theoretical phenomenon, with potential implications for quantum computing and our understanding of fundamental physics...",
        "comments": [
          {
            "id": "comment_013",
            "author": {
              "name": "PhysicsEnthusiast",
              "username": "@science_curious",
              "profilePicture": "https://somecdn.com/profiles/physics_enthusiast.jpg"
            },
            "content": "Could this have applications in quantum cryptography? The non-local influence without entanglement seems promising.",
            "createdAt": "1 week ago",
            "engagement": {
              "likes": 42,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_013",
        "author": {
          "name": "FilmCritic",
          "username": "@cinema_analysis",
          "role": "Film Historian",
          "profilePicture": "https://somecdn.com/profiles/film_critic.jpg"
        },
        "title": "The Lost Language of Silent Film: Techniques Modern Directors Are Rediscovering",
        "content": {
          "text": "Before dialogue dominated cinema, directors had developed an incredibly rich visual language...\n\nYou can see these forgotten techniques being revived in films like 'Dune' and 'Drive' - particularly in the symbolic use of negative space.",
          "image": "https://somecdn.com/film/silent-vs-modern-techniques.jpg",
          "link": "https://t.co/visual-cinema-essay"
        },
        "metadata": {
          "createdAt": "Apr 08, 2025 7:39PM",
          "tags": ["#FilmHistory", "#Cinematography", "#VisualStorytelling"],
          "stats": {
            "likes": 5800,
            "bookmarks": 1230,
            "comments": 156,
            "shares": 780
          }
        },
        "description": "An exploration of how silent film techniques are experiencing a renaissance in contemporary cinema, with side-by-side comparisons of visual storytelling approaches across a century of filmmaking...",
        "comments": [
          {
            "id": "comment_014",
            "author": {
              "name": "MovieBuff",
              "username": "@film_enthusiast",
              "profilePicture": "https://somecdn.com/profiles/movie_buff.jpg"
            },
            "content": "Incredible analysis. Have you noticed how Villeneuve's use of scale mirrors Murnau's techniques in Nosferatu?",
            "createdAt": "3 days ago",
            "engagement": {
              "likes": 78,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_014",
        "author": {
          "name": "NeuroDiversity",
          "username": "@brain_variations",
          "role": "Neuroscientist",
          "profilePicture": "https://somecdn.com/profiles/neuro_diversity.jpg"
        },
        "title": "ADHD in Adulthood: The Unexpected Strengths",
        "content": {
          "text": "Looking beyond the challenges of ADHD...\n\nNew research shows that adults with ADHD score significantly higher on creative problem-solving and pattern detection tasks, suggesting evolutionary advantages to this neurotype.",
          "image": "https://somecdn.com/health/adhd-brain-activity-scan.jpg",
          "link": "https://t.co/adhd-strengths-research"
        },
        "metadata": {
          "createdAt": "Feb 15, 2025 3:47PM",
          "tags": ["#Neuroscience", "#ADHD", "#NeuroDiversity", "#MentalHealth"],
          "stats": {
            "likes": 8400,
            "bookmarks": 2870,
            "comments": 312,
            "shares": 1650
          }
        },
        "description": "A research-based examination of how ADHD traits that present challenges in conventional settings can become significant strengths in certain contexts, with implications for workplace accommodation and education...",
        "comments": [
          {
            "id": "comment_015",
            "author": {
              "name": "ADHDNavigator",
              "username": "@adhd_life",
              "profilePicture": "https://somecdn.com/profiles/adhd_navigator.jpg"
            },
            "content": "Finally! Recognition that our brains aren't 'broken' - just different. The divergent thinking advantages are real.",
            "createdAt": "1 day ago",
            "engagement": {
              "likes": 215,
              "dislikes": 3
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_015",
        "author": {
          "name": "ArtificialLife",
          "username": "@synthetic_biology",
          "role": "Biotech Researcher",
          "profilePicture": "https://somecdn.com/profiles/artificial_life.jpg"
        },
        "title": "Living Machines: How Engineered Bacteria Are Cleaning Our Oceans",
        "content": {
          "text": "Nature's microscopic recyclers, supercharged by science...\n\nThese engineered bacteria can break down microplastics 20x faster than natural processes and then self-destruct when their work is done.",
          "image": "https://somecdn.com/science/plastic-eating-bacteria.jpg",
          "link": "https://t.co/synthetic-bio-cleanup"
        },
        "metadata": {
          "createdAt": "Mar 10, 2025 10:05AM",
          "tags": ["#SyntheticBiology", "#OceanCleanup", "#Biotechnology"],
          "stats": {
            "likes": 6300,
            "bookmarks": 1780,
            "comments": 167,
            "shares": 1240
          }
        },
        "description": "A look at groundbreaking applications of synthetic biology in environmental remediation, focusing on engineered microorganisms designed to tackle plastic pollution in marine environments...",
        "comments": [
          {
            "id": "comment_016",
            "author": {
              "name": "MarineConservation",
              "username": "@ocean_guardian",
              "profilePicture": "https://somecdn.com/profiles/marine_conservation.jpg"
            },
            "content": "How are you ensuring these engineered organisms don't disrupt natural marine ecosystems?",
            "createdAt": "4 days ago",
            "engagement": {
              "likes": 87,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
    {
      "post": {
        "id": "post_016",
        "author": {
          "name": "LanguageLovers",
          "username": "@polyglot_path",
          "role": "Linguistics Professor",
          "profilePicture": "https://somecdn.com/profiles/language_lovers.jpg"
        },
        "title": "The Memory Palace: Learn Any Language's 2000 Most Common Words in 8 Weeks",
        "content": {
          "text": "Traditional language learning has it backwards...\n\nFocus on the highest-frequency 2000 words with these spatial memory techniques, and you'll understand 80% of everyday conversations in record time.",
          "image": "https://somecdn.com/education/memory-palace-language.jpg",
          "link": "https://t.co/language-memory-method"
        },
        "metadata": {
          "createdAt": "Jan 22, 2025 5:29PM",
          "tags": ["#LanguageLearning", "#Memory", "#Linguistics", "#Education"],
          "stats": {
            "likes": 7100,
            "bookmarks": 3450,
            "comments": 198,
            "shares": 1570
          }
        },
        "description": "A systematic approach to language acquisition that combines frequency dictionaries with memory palace techniques, dramatically accelerating vocabulary acquisition and practical conversational ability...",
        "comments": [
          {
            "id": "comment_017",
            "author": {
              "name": "LanguageLearner",
              "username": "@lingua_journey",
              "profilePicture": "https://somecdn.com/profiles/language_learner.jpg"
            },
            "content": "I've been using this for Japanese and it's incredible how much faster I'm progressing than with traditional methods!",
            "createdAt": "2 weeks ago",
            "engagement": {
              "likes": 124,
              "dislikes": 0
            },
            "replies": []
          }
        ]
      }
    },
]