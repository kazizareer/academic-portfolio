// EDIT YOUR PORTFOLIO HERE. Replace bracketed text and set image paths, e.g. "images/portrait.jpg".
// Add your photographs to dist/images/. Leave an image value empty to show a placeholder.
window.portfolio = {
  name: 'Kazi Md Zareer', initials: 'KZ', role: 'BSc. in Mechanical Engineering',
  department: 'Department of Mechanical Engineering', university: 'Bangladesh University of Engineering and Technology (BUET)',
  affiliation: 'Bangladesh University of Engineering and Technology (BUET)',
  location: 'Dhaka, Bangladesh', email: 'zareerkazi06@gmail.com', cv: 'files/cv.pdf?v=92345aac', scholar: '', orcid: '', github: '', portrait: 'images/portrait.jpg',
  linkedin: 'https://linkedin.com/in/kazi-md-zareer-5987b922b',
  researchgate: 'https://www.researchgate.net/profile/Kazi-Md-Zareer',
  introduction: 'Hello! I am Kazi Zareer, a recent Mechanical Engineering graduate from BUET. My research interests lie in computational mechanics, finite element analysis, additive manufacturing, computational heat transfer, and machine learning.',
  biography: 'My undergraduate thesis investigated how laser powder bed fusion (LPBF) process parameters influence the mechanical integrity of 17-4PH stainless steel components. Using finite element modeling, we linked simulations of the manufacturing process to structural and fracture mechanics analyses, examining how laser power, scan speed, hatch spacing, and layer thickness affect residual stresses, stress concentration, and stress intensity factors. We also compared the as-built and H900 heat-treated conditions to explore the role of post-processing.',
  interests: ['Computational Mechanics', 'Finite Element Analysis', 'Additive Manufacturing', 'Computational Heat Transfer', 'Machine Learning'],
  approach: 'Beyond my thesis, I have worked with COMSOL Multiphysics on thermofluid simulations. With the CFDHT Research Group at BUET, I studied magnetohydrodynamic mixed convection and entropy generation in a U-shaped, lid-driven cavity containing a copper-water nanofluid, a thermally conductive elliptical obstacle, and heated corners. This work involved finite element simulations and model validation against published benchmark studies. I also completed the advanced-level COMSOL Multiphysics Simulation of Thermofluidic Problems course offered by BUET\'s Directorate of Continuing Education. Building on these experiences, I am interested in combining physics-based simulation with machine learning to better understand material behavior and guide engineering design.',
  education: [
    {
      degree: 'Bachelor of Science in Mechanical Engineering',
      institution: 'Bangladesh University of Engineering and Technology (BUET), Dhaka, Bangladesh',
      period: 'Jan. 2022 – Jun. 2026',
      logo: 'images/buet.jpg', logoLabel: 'BUET', website: 'https://www.buet.ac.bd/',
      details: [
        {label: 'Cumulative GPA', text: '3.57/4.00 · Major GPA: 3.91/4.00'},
        {label: 'Relevant coursework', text: 'Mechanics of Solids, Mechanics of Machinery, Machine Design, Applied Engineering Mathematics, Composite Materials, Control Engineering, Heat Transfer, Fluid Mechanics, Instrumentation and Measurement, and Bio-engineering.'},
        {label: 'Undergraduate thesis title', text: 'Analysis of Residual Stress and Fracture Mechanics in Laser Powder Bed Fusion of 17-4PH Stainless Steel'},
        {label: 'Academic distinctions', text: 'Mechanical Engineering Faculty Dean’s List Award and University Merit Scholarship.'}
      ]
    },
    {
      degree: 'Higher Secondary Certificate (HSC)',
      institution: 'Dhaka College, Dhaka',
      period: '2018 – 2020',
      resultDate: '30 January 2021',
      logo: 'images/dhaka college.webp', logoLabel: 'Dhaka College', website: 'https://www.dhakacollege.edu.bd/en',
      details: [{label: 'Group', text: 'Science'}, {label: 'GPA', text: '5.0/5.0'}]
    },
    {
      degree: 'Secondary School Certificate (SSC)',
      institution: 'Ideal School and College, Dhaka, Bangladesh',
      period: '2016 – 2018',
      logo: 'images/ideal.jpeg', logoLabel: 'Ideal School and College', website: 'https://iscm.edu.bd/',
      details: [{label: 'Group', text: 'Science'}, {label: 'GPA', text: '5.0/5.0'}]
    }
  ],
  research: [
    {
        "kind": "Undergraduate thesis",
        "period": "Jun. 2025 – Jun. 2026",
        "title": "Analysis of Residual Stress and Fracture Mechanics in Laser Powder Bed Fusion of 17-4PH Stainless Steel",
        "institution": "Department of Mechanical Engineering, BUET",
        "supervisor": "Dr. Mohammad A. Motalab",
        "supervisorLabel": "Thesis Supervisor",
        "summary": "Investigated how laser powder bed fusion (LPBF) process parameters influence the structural integrity of 17-4PH stainless steel, connecting manufacturing-induced residual stresses to stress concentration and fracture mechanics.",
        "contributions": [
            "Used a sequential finite element workflow linking transient thermo-mechanical LPBF simulations to static structural and contour-integral fracture analyses.",
            "Transferred the residual-stress tensor from the manufacturing mesh to the structural and fracture models.",
            "Compared laser power, scan speed, hatch spacing, and layer thickness across as-built and H900 heat-treated conditions."
        ],
        "image": "",
        "imageAlt": "Combined figure showing LPBF simulation models and fracture mechanics results",
        "imageCaption": "LPBF simulation setup and combined results",
        "splitFigure": true,
        "findings": [
            "Within the simulated parameter ranges, hatch spacing and scan speed had the strongest influence on effective stress concentration, with total variations of 9.71% and 8.74%, respectively.",
            "Laser power had the strongest influence on Mode I stress intensity, with a total variation of 11.71%; layer thickness had a much smaller influence of 0.069%.",
            "Effective stress concentration was largely independent of applied load, while stress intensity showed stronger load dependence.",
            "In the H900 heat-treatment model, residual-stress relief removed the sensitivity to the investigated process parameters."
        ],
        "galleryLabel": "Thesis",
        "images": [
            {
                "src": "images/thesis-graphical-abstract-image1.png",
                "caption": "Graphical abstract · LPBF workflow and parameter sensitivity",
                "alt": "Graphical abstract showing LPBF process parameters, two-stage finite element coupling and sensitivity of stress concentration and stress intensity."
            },
            {
                "src": "images/thesis-summary-image1.png",
                "caption": "SCF · Post-LPBF loading (ASTM D5766)",
                "alt": "Stress concentration analysis of the ASTM D5766 specimen under mechanical loading after LPBF manufacturing, including the transferred manufacturing residual stresses."
            },
            {
                "src": "images/thesis-summary-image3.png",
                "caption": "SIF · Post-LPBF loading (ASTM E647)",
                "alt": "Stress intensity analysis of the ASTM E647 compact-tension specimen under mechanical loading after LPBF manufacturing, including the transferred manufacturing residual stresses."
            },
            {
                "src": "images/thesis-summary-image2.png",
                "caption": "Combined results · Stress concentration and stress intensity",
                "alt": "Summary diagram showing amplified effective stress concentration and suppression of stress intensity by compressive residual stress."
            }
        ]
    },
    {
        "kind": "CFDHT Research Group",
        "period": "Sep. 2024 – May 2025",
        "title": "Entropy Generation on Magnetohydrodynamic Mixed Convection in a Lid-Driven and Corner-Heated U-Shaped Cavity with Conductive Elliptical Obstacle",
        "institution": "Department of Mechanical Engineering, BUET",
        "supervisor": "Dr. Sumon Saha",
        "supervisorLabel": "Under supervision of",
        "status": "Study ongoing",
        "summary": "Studied mixed convection and entropy generation in a U-shaped, lid-driven cavity containing a copper–water nanofluid, a thermally conductive elliptical obstacle, and heated corners.",
        "contributions": [
            "Performed finite element simulations in COMSOL Multiphysics to investigate coupled fluid flow, heat transfer, and magnetic-field effects.",
            "Validated the numerical model against benchmark lid-driven cavity flow and MHD entropy-generation studies.",
            "Examined the temperature and flow fields within the cavity as part of the ongoing investigation."
        ],
        "galleryLabel": "U-shaped cavity validation and streamline results",
        "figureGroups": [
            {"title":"Temperature-contour validation","description":"Published result from Tasnim et al. (2023) alongside the present study.","count":2},
            {"title":"Streamline validation","description":"Published result from Rashad et al. (2019) alongside the present study.","count":2},
            {"title":"Present study: effect of Grashof number","description":"Streamline velocity fields for Gr = 10⁵, 10⁶, and 10⁷.","count":3}
        ],
        "images": [
            {"src":"images/comsol-tasnim-2023-temperature.png","caption":"Tasnim et al. (2023) · Temperature contours","alt":"Published isotherm contours from Tasnim et al. (2023) around a central square obstacle."},
            {"src":"images/comsol-present-temperature.png","caption":"Present study · Temperature contours","alt":"Temperature-contour result from the present study around a central square obstacle."},
            {"src":"images/comsol-rashad-2019-streamlines.png","caption":"Rashad et al. (2019) · Streamlines","alt":"Published streamline contours from Rashad et al. (2019) in a U-shaped cavity."},
            {"src":"images/comsol-present-validation-streamlines.png","caption":"Present study · Streamlines","alt":"Streamline result from the present study in a U-shaped cavity, compared with Rashad et al. (2019)."},
            {"src":"images/comsol-present-streamlines-gr-1e5.png","caption":"Gr = 10⁵","alt":"Present-study streamline velocity field in the U-shaped cavity at Grashof number ten to the fifth."},
            {"src":"images/comsol-present-streamlines-gr-1e6.png","caption":"Gr = 10⁶","alt":"Present-study streamline velocity field in the U-shaped cavity at Grashof number ten to the sixth."},
            {"src":"images/comsol-present-streamlines-gr-1e7.png","caption":"Gr = 10⁷","alt":"Present-study streamline velocity field in the U-shaped cavity at Grashof number ten to the seventh."}
        ],
        "findings": [],
        "note": ""
    }
],

  activities: [
    {
        "period": "2023 – 2025",
        "title": "Inter-Hall Chess",
        "organization": "BUET Inter-Hall Chess Tournament",
        "points": [
            "Represented my hall in three editions of the tournament: 2023, 2024 and 2025; also served as team captain.",
            "Finished as runners-up with my hall team in 2023.",
            "Named Best Player on the 6th Board in 2024.",
            "Organized chess competitions and encouraged students to take up chess."
        ],
        "galleryLabel": "Inter-Hall Chess",
        "galleryMode": "photos",
        "images": [
            {
                "src": "images/chess-prize-2023.png",
                "caption": "Prize ceremony · 2023",
                "alt": "Kazi Md Zareer with his medal and team trophy at the 2023 Inter-Hall Chess prize ceremony."
            },
            {
                "src": "images/chess-runners-up-2023.png",
                "caption": "Runners-up trophy · 2023",
                "alt": "Kazi Nazrul Islam Hall first runners-up trophy from the BUET Inter-Hall Chess Tournament 2023."
            },
            {
                "src": "images/chess-best-player-2024.png",
                "caption": "Best Player · 2024",
                "alt": "Sixth Board Best Player award from the BUET Inter-Hall Chess Tournament 2024."
            }
        ]
    },
    {
        "period": "Jun. 2023 – Dec. 2024",
        "title": "Executive Member",
        "organization": "BUET Chess Club",
        "points": [
            "Helped promote chess among students by organizing and participating in tournaments."
        ]
    },
    {
        "period": "Jul. 2022 – Jun. 2026",
        "title": "Affiliate Member",
        "organization": "IMechE BUET Student Chapter",
        "points": [
            "Participated in workshops to build engineering knowledge and practical experience.",
            "Competed in Speak Out for Engineering (SOfE)."
        ]
    },
    {
        "period": "Jan. 2023 – Jul. 2024",
        "title": "Academic Team Member",
        "organization": "Bangladesh Mathematical Olympiad (BdMO)",
        "points": [
            "Proposed problems for the Olympiad."
        ]
    },
    {
        "period": "2018",
        "title": "Mathematics Olympiad",
        "organization": "Bangladesh Mathematical Olympiad (BdMO)",
        "points": [
            "2nd Runner-Up in the National Round.",
            "Participated in the national mathematics camp for International Mathematical Olympiad (IMO) preparation."
        ]
    }
],

  projects: [
    {
        "title": "GreenGuardian: Quadruped Spider Robot for Potato Disease Detection",
        "category": "ME 356: Electro-Mechanical System Design",
        "year": "Nov. 2023 – Mar. 2024",
        "image": "",
        "summary": "Developed the electrical and motion-control systems for a 3D-printed quadruped robot, integrating Arduino-based movement and ESP32-CAM video for potato leaf disease detection.",
        "detail": "GreenGuardian combines a four-legged, 12-servo platform with live video and a CNN that distinguishes early blight, late blight, and healthy potato leaves. A Bluetooth controller lets the operator move the robot forward, backward, and turn while viewing the camera feed.",
        "url": "",
        "video": "https://www.youtube.com/watch?v=ZGVEoAhN8Ps",
        "contributions": [
            "Designed and assembled the electrical system, including component arrangement, wiring, and connections between the Arduino Nano, servo motors, and Bluetooth module.",
            "Wrote the Arduino microcontroller code for robot movement and coordinated servo control, bringing the assembled robot into operation.",
            "Connected and configured the ESP32-CAM to stream live video to a computer for the team’s leaf-classification application.",
            "Contributed to SolidWorks modeling of body components before 3D printing."
        ],
        "results": [
            "Integrated locomotion, wireless control, and live camera transmission into a working prototype.",
            "The team’s application used OpenCV to capture streamed frames and a TensorFlow CNN to display leaf classifications and prediction probabilities."
        ],
        "galleryLabel": "GreenGuardian",
        "galleryMode": "photos",
        "images": [
            {
                "src": "images/greenguardian1.jpg",
                "caption": "Robot prototype",
                "alt": "GreenGuardian quadruped robot outdoors, showing its ESP32 camera, wiring, and servo-driven legs."
            },
            {
                "src": "images/greenguardian-poster.png",
                "caption": "Poster presentation",
                "alt": "GreenGuardian presentation poster showing robot components, working mechanism, disease detection workflow, and the project team."
            },
            {
                "src": "images/greenguardian_team.jpg",
                "caption": "Project team",
                "alt": "GreenGuardian project team with the robot prototype and project poster."
            }
        ]
    },
    {
        "title": "Design and Fabrication of a Shell-and-Tube Heat Exchanger with Disk-and-Doughnut Baffles",
        "category": "ME 310: Thermo-Fluid System Design",
        "year": "Aug. 2024 – Dec. 2024",
        "image": "",
        "summary": "Performed the analytical thermal design and wrote Python code to determine suitable dimensions for a shell-and-tube heat exchanger with disk-and-doughnut baffles.",
        "detail": "This team project combined analytical calculations, SolidWorks Flow Simulation, and fabrication to investigate how alternating disk-and-doughnut baffles influence shell-side flow and heat transfer. The final prototype used copper tubes, a mild-steel shell, and locally available components.",
        "url": "https://www.researchgate.net/publication/403925094_Design_and_Fabrication_of_a_Shell_and_Tube_Heat_Exchanger_with_Disk_and_Doughnut_shaped_Baffles",
        "contributions": [
            "Carried out energy-balance and log-mean temperature difference (LMTD) calculations to establish the heat duty and required heat-transfer area.",
            "Calculated shell-side and tube-side heat-transfer coefficients and the overall coefficient to support exchanger sizing.",
            "Wrote Python code to automate the calculations and iteratively solve for tube length, helping select feasible design dimensions within material and fabrication constraints."
        ],
        "results": [
            "The report’s CFD comparison showed a tube-side temperature drop of about 7.33 °C with disk-and-doughnut baffles, versus 3.46 °C without baffles under the modeled conditions.",
            "The fabricated exchanger withstood a 300 psi pressure test at the BUET hydraulics laboratory without leakage."
        ],
        "images": [
            {
                "src": "images/Heat%20Exchanger%20CFD%20Design%20Overview-1.png?v=55f7bb64",
                "caption": "Design & CFD analysis",
                "alt": "Shell-and-tube heat exchanger CAD assembly and CFD temperature and pressure distributions."
            },
            {
                "src": "images/Shell-and-tube%20heat%20exchanger%20fabrication-2.png?v=66907af9",
                "caption": "Fabrication & prototype",
                "alt": "Baffle fabrication, tube-and-baffle assembly, and the completed shell-and-tube heat exchanger."
            },
            {
                "src": "images/Heat%20Exchanger%20Performance%20and%20Pressure%20Test-3.png?v=d756fab6",
                "caption": "Performance & pressure test",
                "alt": "Heat-transfer performance comparison and the laboratory record of a 300 psi pressure test without leakage."
            }
        ],
        "galleryLabel": "Heat exchanger",
        "presentation": "files/Group-05_B2_Presentation%20Slide.pdf"
    },
    {
        "title": "Stress Analysis of Key Components in a Crane Pulley System: A Combined Finite Element and Analytical Study",
        "category": "ME 352: Machine Design Sessional",
        "year": "Oct. 2024 – Dec. 2024",
        "image": "",
        "summary": "Used finite element modeling in ANSYS to evaluate stress and deformation in crane-pulley components, including a crane hook, V-groove pulley, and cantilever beam.",
        "detail": "The project combined numerical simulation and analytical calculations to study the structural response of key components in a crane pulley system.",
        "url": "https://www.researchgate.net/publication/411189854_Stress_Analysis_of_Key_Components_in_a_Crane_Pulley_System_A_Combined_Finite_Element_and_Analytical_Study",
        "contributions": [
            "Built and analyzed finite element models in ANSYS to calculate component stresses and deformation.",
            "Examined the stress distribution and displacement results to identify highly stressed regions and understand each component’s response to loading."
        ],
        "results": [
            "The study compared crane-hook stresses with hand calculations based on Winkler–Bach curved-beam theory."
        ],
        "galleryLabel": "Crane pulley",
        "images": [
            {
                "src": "images/crane-analysis-overview.svg",
                "caption": "Analysis overview",
                "alt": "Five original ANSYS screenshots showing crane-hook stress and strain, pulley stress and deformation, and beam stress, alongside the report’s hand-calculation results."
            },
            {
                "src": "images/crane-hand-calculation-8.png",
                "caption": "Hand calculation · 1",
                "alt": "Report page 8: crane-hook geometry, centroid and neutral-axis radius calculations for a 900 N load."
            },
            {
                "src": "images/crane-hand-calculation-9.png",
                "caption": "Hand calculation · 2",
                "alt": "Report page 9: moment, area and inner- and outer-surface stress calculations, reporting 1.147 MPa and 0.83 MPa."
            }
        ],
        "document": "files/ME352_B2_5_Report.pdf"
    },
    {
        "title": "Cooling Load Calculation and Air Conditioner Sizing for a Residential Room",
        "category": "ME 415: Refrigeration and Building Mechanical System",
        "year": "May 2025 – Jun. 2025",
        "image": "",
        "summary": "Calculated the cooling load of a residential room in Dhaka and estimated its air-conditioning requirement using the ASHRAE CLTD/CLF methodology.",
        "detail": "Accounted for conduction through walls, floor, ceiling, doors, and glazing; solar gain through the window; sensible and latent loads from air exchange; and heat from occupants, lighting, and equipment. The calculation gave a total cooling load of approximately 2.12 kW (0.603 TR), with a 1 TR air conditioner proposed in the report.",
        "url": "https://www.researchgate.net/publication/396523815_Cooling_Load_Calculation_and_Air_Conditioner_Sizing_for_a_Residential_Room_in_Dhaka",
        "galleryLabel": "Room cooling load",
        "images": [
            {
                "src": "images/Room%20Cooling%20Load%20Analysis%20Overview.png",
                "caption": "Cooling load overview",
                "alt": "Room cooling load analysis: room layout, design conditions, calculation method, load components and selected air-conditioner capacity."
            }
        ]
    },
    {
        "title": "Comparison of Algorithms for Tuning PID Controllers Used in a Two-Wheeled Self-Balancing Robot",
        "category": "ME 461: Control Engineering",
        "year": "Apr. 2025 – Jun. 2025",
        "image": "",
        "summary": "Compared P, PI, and PID controllers tuned using Ziegler–Nichols, the MATLAB auto-tuner, a Genetic Algorithm, and a Clonal Selection Algorithm.",
        "detail": "The study evaluated transient and steady-state responses, including overshoot, undershoot and settling time. Penalizing undershoot in the optimization cost function improved the response; the GA-tuned PID controller achieved zero overshoot and 0.24% undershoot in the reported comparison.",
        "url": "",
        "presentation": "files/pptx.pdf",
        "contributions": [
            "Tuned the Genetic Algorithm (GA) and Clonal Selection Algorithm (CSA) used to optimize the controller gains."
        ],
        "galleryLabel": "PID control",
        "images": [
            {
                "src": "images/pid-step-response.png",
                "caption": "Step-response comparison",
                "alt": "PID step responses comparing Ziegler–Nichols, Genetic Algorithm, Clonal Selection Algorithm and MATLAB auto-tuner gains."
            },
            {
                "src": "images/pid-block-diagram.png",
                "caption": "Control-system block diagram",
                "alt": "Closed-loop block diagram with controller, state-space plant and state feedback."
            },
            {
                "src": "images/pid-mathematical-model.png",
                "caption": "Mathematical model",
                "alt": "Two-wheeled robot model showing body and wheel masses, tilt angle, wheel radius and displacement.",
                "credit": "Model reference: Mahler & Haase (2013)",
                "creditUrl": "https://repositum.tuwien.at/handle/20.500.12708/73847"
            }
        ]
    }
],

  industry: {
    role: 'Engineer Intern',
    period: '10–25 Mar. 2025',
    organization: 'United Ashuganj Energy Limited (UAEL)',
    location: 'Ashuganj, Brahmanbaria, Bangladesh',
    summary: 'During my industrial attachment at UAEL, I studied how a gas-engine combined-cycle plant generates and delivers electricity. The training connected engine operation and scheduled maintenance with waste-heat recovery, steam generation, SCADA-based monitoring, and grid integration. Visits to the engine hall, boiler and turbine section, workshop, gas regulating and metering station, and substation gave me a practical view of plant operation, troubleshooting, and safety procedures.',
    focus: [
      'Engine and auxiliary systems: fuel gas, lubrication, cooling, starting air, intake, and exhaust.',
      'Waste-heat boilers, the steam turbine, water treatment, and the combined-cycle process.',
      'SCADA and engine control panels used to monitor plant conditions and operating modes.',
      'Substation equipment, generator synchronization, power distribution, and site safety.'
    ],
    researchgate: 'https://www.researchgate.net/publication/414337310_Report_on_Industrial_Training_at_United_Ashuganj_Energy_Limited_UAEL_Ashuganj_Brahmanbaria',
    presentation: 'files/Training-Presentation.pdf',
    galleryLabel: 'UAEL industrial attachment',
    galleryMode: 'photos',
    feature: {
      src: 'images/uael-team.jpg',
      alt: 'Industrial attachment group outside the UAEL plant, wearing workwear and carrying safety helmets.',
      caption: 'The industrial attachment group at UAEL.'
    },
    images: [
      {src:'images/uael-engine-hall.png',caption:'Engine hall and exhaust systems',alt:'Rows of plant equipment and exhaust stacks at the UAEL engine hall.'},
      {src:'images/uael-generator.png',caption:'Generating unit',alt:'Blue ABB generating unit marked UE-07 inside the plant.'},
      {src:'images/uael-boiler-scada.jpg',caption:'Boiler monitoring',alt:'SCADA display showing a boiler process diagram and operating measurements.'},
      {src:'images/uael-plant-scada.jpg',caption:'Plant monitoring',alt:'SCADA display showing multiple boiler units and steam system measurements.'},
      {src:'images/uael-substation.png',caption:'Substation equipment',alt:'Large power transformer and switchyard equipment at the UAEL substation.'},
      {src:'images/uael-workshop.png',caption:'Workshop visit',alt:'Industrial workshop machine seen during the training visit.'},
      {src:'images/uael-team.jpg',caption:'Training group',alt:'Industrial attachment group outside the UAEL plant.'}
    ]
  },

  publications: [
    {
        "title": "GreenGuardian: A Quadruped Spider Robot Prototype for Real-Time Potato Disease Detection Using Deep Learning",
        "authors": "M. R. Rifad, K. M. Zareer, M. A. O. R. Hossain, M. M. H. Ashik",
        "venue": "1st International Conference on Sustainable Agriculture and Smart Development (ICSASD)",
        "date": "3 April 2026",
        "type": "Conference paper",
        "status": "Accepted · In press",
        "award": "Best Paper Award",
        "abstract": "Early Blight (Alternaria solani) and Late Blight (Phytophthora infestans) threaten potato cultivation, yet deep-learning detectors are rarely deployed on mobile platforms able to traverse uneven terrain, and most agricultural robots remain wheeled. This paper presents GreenGuardian, a quadruped spider-robot prototype for real-time potato disease detection. It integrates an ESP32-CAM for live streaming, a CNN classifying Early Blight, Late Blight, and healthy leaves, and a 3D-printed four-legged platform with 12 degrees of freedom for terrain-adaptive locomotion. The model achieved 95% accuracy (precision, recall, and F1-score 93–96%), demonstrating a low-cost, terrain-adaptive platform for potato disease screening in environments with limited resources.",
        "url": ""
    },
    {
        "title": "Residual Stress – Fracture Mechanics Correlation in Laser Powder Bed Fusion of 17-4PH Stainless Steel: A Parametric Investigation of Stress Concentration and Stress Intensity Factors",
        "authors": "R. Mostakim†, K. M. Zareer†, M. M. Rahman, M. A. Motalab",
        "authorNote": "† These authors contributed equally to this work.",
        "type": "Journal manuscript",
        "status": "Manuscript in preparation",
        "abstract": "Laser Powder Bed Fusion (LPBF) imparts complex residual stress fields on fabricated components through steep thermal gradients and rapid solidification, yet the quantitative relationship between individual process parameters and the resulting fracture mechanics metrics remains unestablished for 17-4PH stainless steel. This study presents a coupled computational framework linking LPBF process parameters to the stress concentration factor (Kt) and Mode I stress intensity factor (KI) in both as-built and H900 heat-treated conditions. A sequential finite element method (FEM) framework couples a transient thermo-mechanical LPBF process simulation with downstream static structural and contour-integral fracture analyses, enabling direct spatial mapping of the full residual stress tensor from the manufacturing mesh to the fracture domain. In the as-built condition, hatch spacing and scan speed exert the strongest influence on Kt, producing total deviations of 9.71% and 8.74% respectively, while beam power and layer thickness contribute approximately 5.5% each. For KI, the sensitivity variation changes: beam power becomes the dominant parameter with a total variation of 11.71%, followed by scan speed (6.95%) and hatch spacing (5.33%), while layer thickness has a negligible influence of 0.069%. The effective stress concentration factor remains largely independent of the applied force level, indicating dominant influence of residual stresses. Conversely, the stress intensity factor shows dependence on the applied load, indicating an external load dominance. H900 heat treatment effectively eliminates process-parameter sensitivity, with KI and effective Kt values converging across all parameter sets.",
        "url": ""
    },
    {
        "title": "Magnetohydrodynamics (MHD) Mixed Convection and Entropy Generation Analysis of Cu–Water Nanofluid in a U-Shaped Lid-Driven Cavity with a Conjugate Elliptical Obstacle and Corner Heating",
        "type": "Work in progress",
        "authors": "K. M. Zareer, I. M. Shah, M. K. Rahman",
        "abstract": "",
        "url": ""
    }
],
  certifications: [
    {
        "title": "COMSOL Multiphysics Simulation of Thermofluidic Problems (Advanced Level)",
        "issuer": "Directorate of Continuing Education (DCE), BUET",
        "year": "14–15 November 2024",
        "detail": "Completed the advanced-level short course on simulating thermofluidic problems using COMSOL Multiphysics.",
        "image": "images/certificate-comsol.webp",
        "document": "files/comsol%20advance%20.pdf",
        "documentLabel": "View certificate",
        "url": ""
    },
    {
        "title": "Machine Learning Specialization",
        "issuer": "Stanford Online · DeepLearning.AI · Coursera",
        "year": "17 September 2025",
        "detail": "Completed all three courses taught by Andrew Ng: Supervised Machine Learning: Regression and Classification; Advanced Learning Algorithms; and Unsupervised Learning, Recommenders, Reinforcement Learning.",
        "image": "images/certificate-machine-learning.webp",
        "document": "files/Coursera%20OUAW1JEB8XK3.pdf",
        "documentLabel": "View certificate",
        "url": "https://www.coursera.org/account/accomplishments/specialization/OUAW1JEB8XK3"
    },
    {
        "title": "Programming for Everybody (Getting Started with Python)",
        "issuer": "University of Michigan · Coursera",
        "year": "25 June 2024",
        "detail": "Completed the introductory Python programming course taught by Charles Severance, authorized by the University of Michigan and offered through Coursera.",
        "image": "images/1719326524266.jpeg",
        "document": "images/1719326524266.jpeg",
        "documentLabel": "View certificate",
        "url": "https://coursera.org/verify/JMTHW5MWC69L"
    },
    {
        "title": "Signal Processing Onramp",
        "issuer": "MathWorks Training Services",
        "year": "12 January 2024",
        "detail": "Completed 100% of the self-paced Signal Processing Onramp training course.",
        "image": "images/signal%20onramp.jpeg",
        "document": "images/signal%20onramp.jpeg",
        "documentLabel": "View certificate",
        "url": "https://matlabacademy.mathworks.com/progress/share/certificate.html?id=77d3da8c-3f5f-40e2-a298-f55d7e9fb67c"
    },
    {
        "title": "MATLAB Onramp",
        "issuer": "MathWorks Training Services",
        "year": "14 June 2023",
        "detail": "Completed 100% of the self-paced MATLAB Onramp training course.",
        "image": "images/matlab.jpeg",
        "document": "images/matlab.jpeg",
        "documentLabel": "View certificate",
        "url": ""
    }
],

  awards: [
    {
        "title": "Best Paper Award",
        "issuer": "International Conference on Sustainable Agriculture and Smart Development (ICSASD)",
        "year": "2026",
        "detail": "GreenGuardian: A Quadruped Spider Robot Prototype for Real-Time Potato Disease Detection Using Deep Learning.",
        "galleryLabel": "Best Paper Award",
        "galleryMode": "photos",
        "images": [
            {
                "src": "images/bestpaperaward1.jpg",
                "caption": "Award presentation",
                "alt": "Kazi Md Zareer with the Best Paper Award at ICSASD 2026."
            },
            {
                "src": "images/bestpaper2.jpg",
                "caption": "Best Paper Award trophy",
                "alt": "Close-up of the ICSASD 2026 Best Paper Award trophy."
            }
        ]
    },
    {
        "title": "Dean’s List Award",
        "issuer": "Faculty of Mechanical Engineering, BUET",
        "year": "Final year",
        "detail": "Received in my final year for maintaining a GPA of at least 3.75 in both regular terms of the academic year."
    },
    {
        "title": "University Merit Scholarship",
        "issuer": "Bangladesh University of Engineering and Technology (BUET)",
        "year": "",
        "detail": "Awarded for academic performance in an individual term, with a minimum GPA of 3.75 for that term."
    },
    {
        "title": "Board Scholarships",
        "issuer": "HSC · SSC · JSC · PECE",
        "year": "",
        "detail": "Received during my school years for outstanding performance in the board examinations."
    }
]
};
