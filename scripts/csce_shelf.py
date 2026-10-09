"""Open-shelf briefings. Facts are from public course pages, not a TAMU degree plan."""
SHELF = []

def A(*a):
    assert len(a) == 17, (a[0], len(a))
    SHELF.append(a)

A("S01","Texas A&M CSCE course catalog","The CSCE cards already on this map",
  "Official wording lives in the graduate catalog and can change",
  "Read the current catalog before you enroll","shelf","","",
  "This studio's numbered CSCE cards are a spoken walk of that catalog, not a second catalog.",
  "Each card keeps the credit count, the hours, the prerequisite, and any rule that only one of a pair may count. The open shelf below it is a different list.",
  "A paraphrase can lag the registrar. When a card and the catalog disagree, the catalog wins.",
  "Do not treat this studio as the document you submit for a degree plan.",
  "S01 is the index. The courses themselves are the CSCE cards above the open shelf.",
  "Catalog","Cards","Current",
  "https://catalog.tamu.edu/graduate/course-descriptions/csce/")

A("S02","Texas A&M Engineering Fast Track, CSE","Up to 12 graduate credits in CS or computing; up to 9 in computer engineering",
  "CSE Fast Track, not every engineering department",
  "GPA 3.5 or higher, and a commitment to a master's in this department","shelf","","",
  "Fast Track pairs a graduate CSCE course with an undergraduate course so a strong undergraduate can earn graduate credit and credit-by-exam.",
  "You take the graduate course. An A or a B, plus any extra work the instructor requires, is what the page says earns credit-by-exam for the undergraduate pair. The pair list was expanded in fall 2023.",
  "Some pairs are marked for fall 2023 or later, and the page also allows a double-asterisk mark for spring 2025 or later. An unmarked pair is not the same rule as a marked one.",
  "Computer science and computing are capped at 12 graduate credits. Computer engineering is capped at 9. A 3.5 GPA is the eligibility line on the CSE page. Another department's Fast Track is a different page.",
  "Fast Track is a named pair plus a grade, not a free stack of graduate electives.",
  "Pair","Grade","Cap",
  "https://engineering.tamu.edu/cse/academics/fast-track.html")

A("S03","UC San Diego CSE167x Computer Graphics on edX","Four units: math, transforms, OpenGL lighting, ray tracing",
  "edX offering of the UC San Diego introduction",
  "Programming, and enough linear algebra to place a camera","shelf","","",
  "CSE167x teaches you to write images of a 3D scene, not to operate a modeling package.",
  "The published unit split is overview and math, transformations, real-time OpenGL and GLSL lighting, then offline ray tracing. Homework, not a tool tutorial, is the point.",
  "The same ideas show up in CSCE 641 and 647, but those are Texas A&M courses with their own prerequisites. Finishing the edX course does not complete them.",
  "Do not confuse a virtual-reality certificate that once bundled this course with the graphics course itself. The page says it also stands alone.",
  "CSE167x is foundations you program: transform, shade, then ray trace.",
  "Transform","OpenGL","Ray trace",
  "")

A("S04","RIT Cybersecurity Fundamentals on edX","About 8 weeks, 10 to 12 hours a week",
  "RITx CYBER501x, an entry to the MicroMasters",
  "No prerequisite is listed on the edX page","shelf","","",
  "A broad first pass over computing security: concepts, cryptography, networks, system administration, detection, and malware and forensics.",
  "Information assurance here means confidentiality, integrity, and availability. Cryptography in this course is the basic idea, not a proof course like CSCE 711.",
  "Eight units will not make you the person who designs a cipher or runs a live-network investigation. CSCE 701 is the closer graduate survey, and it is still a different course.",
  "A paid certificate, if you buy one, is not Texas A&M credit. The edX page is the enrollment door.",
  "RIT's fundamentals course is the map of security work, at an introductory pace.",
  "CIA","Crypto","Detect",
  "https://www.edx.org/learn/cybersecurity/rochester-institute-of-technology-cybersecurity-fundamentals")

A("S05","MIT OCW 6.5830 Database Systems, Fall 2023","One OCW semester, not Texas A&M credit",
  "Graduate and undergraduate. Instructors on the OCW page: Samuel Madden and Tim Kraska",
  "No prior database course is assumed on the 2023 page","shelf","","",
  "6.5830 is how a database system works, from the relational model through query optimization and transactions, using primary readings.",
  "The relational algebra says what a query means. Normalization says when a schema is redundant. The optimizer picks a plan. Transactions make concurrent work recoverable. Later topics go past the textbook core.",
  "This is not a SQL design studio. CSCE 603 is the design course for non-majors. CSCE 608 is the systems course that assumes CSCE 310. 6.5830 overlaps 608 and does not replace it on a degree plan.",
  "OCW gives you the materials. It does not sit in a Texas A&M transcript.",
  "6.5830 is the engine: model, normalize, optimize, transact.",
  "Algebra","Optimize","Transactions",
  "https://ocw.mit.edu/courses/6-5830-database-systems-fall-2023/")

A("S06","MIT 6.S081 Operating System Engineering, 2020","A lab course on xv6, not a lecture-only survey",
  "The 2020 PDOS offering, RISC-V xv6",
  "C, and a systems course at the level of an undergraduate operating system","shelf","","",
  "You learn the operating system by changing a small one. The teaching system is xv6, on RISC-V, in the 2020 offering.",
  "A lab asks you to add a mechanism the lectures just named: traps, page tables, copy-on-write, a file system, locks. The code that boots is the definition.",
  "CSCE 611 studies scheduling, memory, coordination, and case studies. It is not this lab sequence, and watching the 2020 lectures without the labs misses the course.",
  "The S07 playlist is the videos. This entry is the course. Later years renumbered the subject; do not assume a 2024 lab matches the 2020 handout.",
  "6.S081 is operating systems you modify, on xv6.",
  "xv6","RISC-V","Labs",
  "")

A("S07","MIT 6.824 Distributed Systems","A lab course in fault-tolerant systems",
  "The PDOS course long numbered 6.824; later renumbered 6.5840",
  "Programming, and comfort with concurrency","shelf","","",
  "6.824 is how a service stays correct when machines fail and messages arrive once, twice, or never.",
  "The labs have long walked MapReduce, replication, and Raft, then a fault-tolerant key-value service. Linearizability is the usual correctness bar: the system should look like one copy, in real time.",
  "CSCE 678 names the same family of ideas, MapReduce through agreement and replication, as a Texas A&M course. Passing 6.824 does not complete 678.",
  "The YouTube playlist is the lectures. The labs are the course. A lecture without a lab report is not the offering.",
  "6.824 is failure, replication, and a single story the clients can believe.",
  "Raft","Replicate","Linearize",
  "")

A("S08","MIT OCW 6.034 Artificial Intelligence, Fall 2010","The Fall 2010 OCW offering",
  "Patrick Winston's AI survey that year",
  "Programming, and willingness to do the problem sets","shelf","","",
  "6.034 is a broad AI course: search, games, constraints, knowledge, learning, and the ethics of what the methods assume.",
  "Search finds a path. A game tree cuts branches. A constraint network prunes values. Learning methods in that era include nearest neighbors, neural nets, and support-vector machines, taught as ideas with exercises.",
  "CSCE 625 is the current Texas A&M graduate survey and includes deep learning as a basics unit. The 2010 course will not teach 2026 practice. Use it for the reasoning spine.",
  "OCW freezes a semester. It is not the live CSCE course and not 6.S191.",
  "6.034 is search, knowledge, and learning as one survey, frozen in 2010.",
  "Search","Knowledge","Learn",
  "")

A("S09","MIT 6.S191 Introduction to Deep Learning","A short independent-activities course, lecture plus labs",
  "The recurring MIT introduction, not a full semester thesis",
  "Calculus, linear algebra, and a programming language","shelf","","",
  "6.S191 is a fast introduction to deep learning: networks, convolutional and sequence models, reinforcement learning, and generative models, with software labs.",
  "A layer is a function with parameters. A loss says what to improve. Backpropagation computes the gradient. The later lectures specialize that idea to images, sequences, decisions, and generation.",
  "CSCE 636 is the Texas A&M deep-learning course and assumes MATH 251 and 304. This MIT course is shorter and does not waive that prerequisite.",
  "S31 is the 2026 playlist of the same course number. Slides move every year. Do not do a 2020 lab against a 2026 lecture.",
  "6.S191 is deep learning in a short, lab-backed introduction.",
  "Layer","Gradient","Specialize",
  "")

A("S10","Stanford CS145 Introduction to Databases, via the Internet Archive","Use an archived offering for the model and for SQL",
  "A Stanford introduction, year depending on the archive copy",
  "Programming. The archive copy's own prerequisite line wins if it names one","shelf","","",
  "CS145 is the introductory database course: the relational model, SQL, and design, not a full engine course.",
  "You learn what a table means, how a query names the answer, and how a schema avoids contradiction. Later weeks in some years add XML, JSON, or a newer store. Those weeks are year-specific.",
  "An archived semester can name a product that current CS145 no longer uses. Trust the model. Recheck the product.",
  "This is closer to CSCE 603 than to 6.5830 or CSCE 608. It will not teach you to write a buffer pool.",
  "Use CS145 for tables, SQL, and design. Check the year before you trust a tool.",
  "Tables","SQL","Design",
  "")

A("S11","Stanford CS144 Introduction to Computer Networking","A lab course: you build the stack",
  "The Stanford course site for CS144",
  "C or C++ programming, and comfort with bits","shelf","","",
  "CS144 teaches the network by making you implement it, from a reliable byte stream up through a router.",
  "A reliable stream has to survive loss, delay, and reordering. TCP is the case study. An IP router forwards datagrams. The network interface hands frames to that router. Each lab is a piece of that path.",
  "CSCE 612 is the Texas A&M applied networks course, and only one of CSCE 463 or 612 counts there. CS144 is neither of those numbers.",
  "S21 is the lecture playlist. The site's labs are the assignment. Watching is not submitting.",
  "CS144 is the network you build: reliable bytes, then datagrams, then a router.",
  "Stream","TCP","Router",
  "")

A("S12","Stanford CS229 Machine Learning, lecture playlist","Watch the lectures; the problem sets are the course",
  "The long-running Stanford ML course associated with Andrew Ng",
  "Linear algebra, probability, and calculus","shelf","","",
  "CS229 is supervised learning, generalization, unsupervised learning, and a first look at reinforcement learning, with the math written down.",
  "A model proposes a predictor. A loss scores it. Gradient methods fit it. A bias-variance or generalization argument says when the fit will fail on new data. Clustering and mixture models are the usual unsupervised turn.",
  "The playlist is the classroom. It is not CSCE 633, which surveys several learning traditions, and it is not CSCE 636.",
  "A video does not include your derivation. If you only press play, you took the playlist, not the course.",
  "CS229 is the math of learning, watched on the lecture playlist and finished on paper.",
  "Loss","Generalize","Fit",
  "")

A("S13","UC Berkeley CS287 Advanced Robotics","A graduate robotics course; the project changes by year",
  "Berkeley's advanced robotics offering",
  "Probability, linear algebra, and a prior robotics or AI course","shelf","","",
  "CS287 treats a robot as a decision maker under uncertainty: state, control, and learning, not only a kinematics worksheet.",
  "You estimate state, plan or optimize a motion, and sometimes learn the policy or the model from data. A year-specific project is part of the offering and is not stable enough to memorize from a blog.",
  "CSCE 752 is the algorithmic robotics stack, frames through SLAM. CSCE 635 is the AI survey with a lab. CS287 is a third course. None of them completes the others.",
  "Do not cite a single year's drone or arm project as if it were the permanent syllabus.",
  "CS287 is robotics as estimation, control, and learning. Verify the year's project.",
  "Estimate","Control","Learn",
  "")

A("S14","Texas A&M graduate program requirements, breadth","Read the current CSE graduate brochure",
  "Degree rules, not a lecture course",
  "Admission to a CSE graduate degree, or a plan you are about to submit","shelf","","",
  "Breadth is a rule about the shape of a degree plan. It is not a course you can finish inside this studio.",
  "The department publishes thesis and non-thesis master's degrees, and the PhD, in computer science and in computer engineering. The computer engineering degrees are joint with electrical engineering. The area grid, the credit totals, and the seminar caps live in that brochure.",
  "This studio will not invent the grid. A plan that is only one topic, or only seminar and research hours, is the kind of plan the word breadth exists to question. The brochure says whether it fails.",
  "Fast Track credits, exclusivity pairs such as 310 and 603, and variable hours in 681 through 691 are separate rules. They do not add up to the breadth rule by themselves.",
  "Breadth is whatever the current brochure requires. Verify it there before you file a plan.",
  "Brochure","Shape","Verify",
  "https://engineering.tamu.edu/cse/academics/degrees/graduate/program-requirements/index.html")

A("S15","mrcomputerscience.com, free CS degree claim","Not a degree program on the 2026 site",
  "A personal site, checked against the claim in your list",
  "None","shelf","","",
  "The claim that this domain is a 2026 free CS degree equivalent does not match the site.",
  "What is published there is a personal newsletter and tool recommendations. It does not list a core, a lab sequence, or a degree audit.",
  "The free, maintained curriculum people usually mean is OSSU, which is S17. Mixing the two will send you to the wrong work.",
  "Do not put this domain on a plan as if it were CS50, OCW, or a Texas A&M requirement.",
  "S15 is a correction. It is not a course. Use S17 if you wanted a free CS path.",
  "Not a path","Newsletter","Use S17",
  "https://www.mrcomputerscience.com/")

A("S16","Harvard CS50 on edX","The introduction, CS50x, roughly a semester of work",
  "Harvard's introduction, free to watch on edX",
  "None. Comfort with patience, not with C","shelf","","",
  "CS50x is a first computer science course: C, memory, data structures, Python, SQL, and a web introduction, taught as one sequence.",
  "You learn what a program is by writing one that can fail in memory, then you move up to a higher-level language. The problem sets are the course. The lecture is the map.",
  "CS50's Introduction to Artificial Intelligence with Python is S28, a later course. Do not swap them.",
  "A free certificate, if you claim one under their rules, is still not CSCE credit. The bridge courses 706, 708, and 709 are the Texas A&M on-ramps, for the audiences those cards name.",
  "CS50x is the broad introduction. Finish the problem sets, not only the videos.",
  "C","Memory","Python",
  "https://cs50.harvard.edu/x/")

A("S17","OSSU computer science, the GitHub degree-equivalent path","Intro, then core, then electives, then a project",
  "github.com/ossu/computer-science",
  "High-school algebra before the core math","shelf","","",
  "OSSU is a curated path through other people's free courses. It is not a university and it grants no degree.",
  "The path is staged: try an introduction, finish a required core across programming, math, systems, theory, security, and applications, then choose advanced electives, then a project. Core courses are required. Advanced work waits until the core is done.",
  "The knowledge can be serious. The credential is not. An employer or a graduate school may ignore it. Texas A&M will not read it as CSCE credit.",
  "S15 is not this path. If a link in the README dies, the course moved. The README is the list, not a video playlist.",
  "OSSU is a free sequence of real courses. It is not a diploma.",
  "Intro","Core","Project",
  "https://github.com/ossu/computer-science")

A("S18","Neso Academy compiler design, on YouTube","A lecture series, not a compiler you must ship",
  "Neso Academy's public compiler-design lectures",
  "A programming course and a discrete-math course help","shelf","","",
  "The series walks the compiler pipeline: words, grammar, a parse, a meaning, a runtime, and generated code.",
  "Lexical analysis splits the text. Parsing builds a tree from a grammar. Later lectures attach meaning and choose code. You can pause a lecture. You still need to work a grammar by hand or the terms stay as vocabulary.",
  "CSCE 605 assumes CSCE 434 and is about generators, scope, data-flow, and optimization. Neso is a first tour. It will not satisfy 605.",
  "A YouTube playlist has no grader. If you want the skill, write a small parser after the episode that introduced the grammar.",
  "Neso is the compiler pipeline as lectures. Practice a grammar or it will not stick.",
  "Lex","Parse","Generate",
  "")

A("S19","MIT 6.S081 lecture playlist","Watch with the 2020 labs, not instead of them",
  "The public videos for the 2020 offering",
  "The same preparation as S06","shelf","","",
  "This is the lecture record of S06. The teaching system is still xv6 on RISC-V.",
  "Use a lecture to see the mechanism, then open the matching lab. Page tables, traps, and the file system are much clearer when the video and the code are the same week.",
  "A later year's playlist can share the number and change the lab. Match the year in the title to the handout you are typing in.",
  "Do not count S06 and S19 as two courses. One is the offering. This is how you watch it.",
  "S19 is the 6.S081 lectures. The labs in S06 are still the work.",
  "Watch","Match","Lab",
  "")

A("S20","CS Learning Atlas, operating systems","A reading map, not a course",
  "The operating-systems page of the CS Learning Atlas on GitHub",
  "Willingness to read a textbook, not a prior OS course","shelf","","",
  "The atlas organizes operating systems as three problems: virtualization, concurrency, and persistence.",
  "Virtualization builds the illusion that a process owns the machine. Concurrency keeps shared state correct. Persistence keeps data across a crash. The page points at a free book, Operating Systems: Three Easy Pieces, and at 6.S081 as the lab course.",
  "Reading the map is not taking CSCE 611 and not taking 6.S081. It tells you which of those to open.",
  "Do not stop at the essay. Pick the book or the labs.",
  "The atlas is a pointer: three problems, then OSTEP or 6.S081.",
  "Virtualize","Concurrency","Persist",
  "https://github.com/gmkzwwg/cs-learning-atlas")

A("S21","Stanford CS144 lecture playlist","The videos for the course in S11",
  "Public lectures for CS144",
  "The same preparation as S11","shelf","","",
  "This playlist is how you hear CS144. The assignments still live on the course site.",
  "Watch the reliable-stream lecture before you write the stream. Watch the router lecture before you forward a datagram. The order is the course.",
  "A playlist sorted by popularity is the wrong order. Follow the site's week numbers.",
  "S11 is the course. S21 is the soundtrack. One completion, not two.",
  "Play CS144 in site order, then do the lab the lecture just named.",
  "Order","Lecture","Lab",
  "")

A("S22","MIT 6.824 lecture playlist","The videos for the labs in S07",
  "Public lectures for 6.824",
  "The same preparation as S07","shelf","","",
  "These are the 6.824 lectures: failure, replication, agreement, and the labs that follow.",
  "Raft will not land if you only hear the leader-election story. The lab forces the crashes the lecture mentioned. Pause and read the paper the lecturer assigned.",
  "Later semesters under the number 6.5840 may assign different labs. Match the playlist year to the lab handout.",
  "Do not list S07 and S22 as two courses on a plan.",
  "S22 is how you watch 6.824. The lab is still required.",
  "Lecture","Paper","Lab",
  "")

A("S23","edX MITx 6.004.1x Computation Structures","The edX part built from 6.004",
  "MITx, computation structures",
  "No deep circuits background; algebra and a willingness to use their tools","shelf","","",
  "6.004.1x is the computation-structures introduction: digital abstraction, gates, and the start of a machine you can reason about.",
  "A digital abstraction hides voltages. A combinational circuit has no memory. A sequential circuit does, because a state bit remembers. The edX course lets you build and check those circuits in their tools.",
  "S24 is the Spring 2017 OCW subject, which is the fuller MIT course. Part 1 on edX is not automatically the whole semester.",
  "Neither one is CSCE 614. Architecture at Texas A&M assumes an undergraduate architecture course and then talks about pipelines, vectors, and multiprocessors.",
  "6.004.1x is the digital start of a computer, checked in tools.",
  "Gate","State","Check",
  "")

A("S24","MIT OCW 6.004 Computation Structures, Spring 2017","The full Spring 2017 subject on OCW",
  "MIT OCW, computation structures",
  "The OCW page's own prerequisite note","shelf","","",
  "6.004 builds a computer from the digital abstraction up through a programmable machine.",
  "You go from gates to finite-state machines, then to a simple processor, then to the reasons a pipeline and a memory system change the programmer's model. The 2017 calendar is the one frozen on OCW.",
  "Use S23 if you want the edX checker. Use this if you want the semester's notes and exams. Do not assume the problem sets are identical.",
  "OCW will not grade you, and it will not appear as CSCE credit.",
  "Spring 2017 6.004 is the whole computation-structures arc, frozen.",
  "Digital","Machine","Pipeline",
  "")

A("S25","ETH, Onur Mutlu, computer architecture","Digital design through architecture, lecture-heavy",
  "ETH Zürich lectures by Onur Mutlu",
  "Digital logic. Programming helps for the later projects in a given year","shelf","","",
  "Mutlu's course walks from digital design into a processor: gates, state, a datapath, pipelining, and the memory system that dominates real speed.",
  "A pipeline overlaps instructions until a hazard stalls it. A cache hides slow memory until the working set no longer fits. Later lectures in his series often use research papers, including attacks on memory, as the consequence of that design.",
  "CSCE 614 starts from von Neumann limits and moves to parallel structure. The overlap is real. The exams are not the same exam.",
  "Match the year of the playlist to the slides. He re-teaches the course and the paper list moves.",
  "Mutlu's course is the processor and its memory, taught from the digital layer up.",
  "Datapath","Pipeline","Memory",
  "")

A("S26","MIT OCW 6.006 Introduction to Algorithms, Spring 2020","The Spring 2020 algorithms course",
  "OCW. The subject is now often numbered 6.1210",
  "Python, and comfort with proofs at the level of a discrete-math course","shelf","","",
  "6.006 is concrete algorithms and the cost of each one: sorting, hashing, trees, graphs, and dynamic programming.",
  "You learn a method, then you bound it. A graph search is not a library call until you can say what it costs. Dynamic programming is recursion plus a table that stops you from repeating work.",
  "CSCE 629 is the graduate course: NP-completeness, approximation, and probability sit on top of this material. 6.006 does not replace 629, and 629's prerequisite on the CSCE card is graduate classification, not this OCW page.",
  "Spring 2020 assignments are frozen. A later MIT offering can change the language and the problem set.",
  "6.006 is algorithms you can analyze, from sorting through graphs and dynamic programming.",
  "Bound","Graph","DP",
  "")

A("S27","MIT 6.1200J Mathematics for Computer Science, lecture 1 and the subject","Start at lecture 1; the subject is proof",
  "The course long numbered 6.042J, now 6.1200J",
  "High-school algebra. The lecture is not a programming course","shelf","","",
  "Lecture 1 is the door. The course is how to prove a claim a computer scientist actually uses.",
  "Induction is the tool for recursive structures. Number theory and graphs give you objects to prove things about. Counting and discrete probability come after you can say what a proof is.",
  "One video is not the course. The problem sets are. OSSU uses this subject as core math for that reason.",
  "This does not replace STAT 211, which CSCE 711 names, and it does not replace MATH 304.",
  "6.1200J is proof. Lecture 1 only starts it.",
  "Proof","Induction","Count",
  "")

A("S28","CS50's Introduction to Artificial Intelligence with Python","A CS50 follow-on, in Python",
  "Harvard, on edX",
  "CS50x or an equivalent first programming course, plus Python","shelf","","",
  "CS50 AI teaches search, knowledge, uncertainty, optimization, learning, neural nets, and language, in Python projects.",
  "Each unit is a project: an agent that searches, a model of knowledge, a probability calculation, a learner. The code is smaller than a research library and large enough that you cannot skip the project.",
  "It is not CS50x, which is S16. It is not CSCE 625, and it will not satisfy the CSCE 411 prerequisite on that card.",
  "A certificate from edX is not a graduate admission.",
  "CS50 AI is Python projects across the AI map, after you can already program.",
  "Search","Uncertainty","Python",
  "https://cs50.harvard.edu/ai/")

A("S29","Stanford CS231n, CNNs for visual recognition","A deep course in convolutional networks for vision",
  "Stanford CS231n lectures, often watched on YouTube",
  "Linear algebra, calculus, and a machine-learning course","shelf","","",
  "CS231n is how a convolutional network sees: the layer, the training loop, and the vision tasks people actually ship.",
  "Convolution shares a filter across an image. Backpropagation trains it. Later units cover detection, segmentation, and generative models. The assignment is usually a substantial notebook, not a quiz.",
  "CSCE 636 includes vision as an application of neural models. CS231n is the vision course. Taking one does not complete the other.",
  "Match the assignment year to the lecture year. A 2016 notebook will fail a 2024 library.",
  "CS231n is convolutional vision, trained and tested, not a highlight reel.",
  "Convolve","Train","Detect",
  "")

A("S30","edX school listing","A directory, not a course",
  "edX's list of schools",
  "None","shelf","","",
  "The school listing tells you who teaches on edX. It has no lectures and no problem set.",
  "Use it to find a school, then open that school's course page, then read the syllabus. RIT, Harvard, MIT, and UC San Diego on this shelf are found that way.",
  "A search result is not enrollment and not a grade. The course page names the weeks.",
  "Do not add the listing to a degree plan. It is a door, like a library catalog.",
  "S30 finds a school. The course page is the course.",
  "Directory","School","Syllabus",
  "https://www.edx.org/")

A("S31","MIT 6.S191 2026 lecture playlist","The 2026 videos of the course in S09",
  "The 2026 public playlist",
  "The same preparation as S09","shelf","","",
  "This is a newer lecture record of Introduction to Deep Learning. The subject is still networks, images, sequences, decisions, and generation.",
  "Watch 2026 when you want the current examples. The labs and the software stack move. A notebook from an older winter will not import cleanly.",
  "S09 is the course identity. S31 is one year's videos. Count it once.",
  "Do not treat a 2026 slide as the rule in CSCE 636. That card has its own math prerequisites and its own scope.",
  "S31 is how 6.S191 looked in 2026. Check the lab year before you code.",
  "2026","Labs","Once",
  "")

A("S32","Harvard master's in data science and artificial intelligence","Harvard ALM, 12 courses",
  "Eleven courses can be online. One three-week course is on the Cambridge campus.",
  "You can write functions in Python and you are comfortable with calculus. If not, CSCI 7 and MATH 15 come first.","ai","","",
  "Harvard Extension School's master's in data science and artificial intelligence. The degree is a Master of Liberal Arts in Extension Studies, twelve graduate courses, forty-eight credits.",
  "Two named starters are CSCI 101, foundations of data science and engineering, and CSCI 106, statistical data modeling. After those come four data-science core courses, four electives, an on-campus precapstone, and a capstone.",
  "The precapstone is three weeks on campus, in January or in the summer, with a team and an industry partner. The capstone is the next semester, online, and it is the only course that term. The project is the one you scoped on campus.",
  "This is not CS50's Introduction to Artificial Intelligence with Python, which is S28, and it is not a CSCE course. Example electives on the Harvard page include deep learning and foundations of large language models. Those examples are not the whole required list.",
  "Twelve courses, one of them three weeks in Cambridge, then a team capstone. It does not count as CSCE credit.",
  "Foundation","Models","Capstone",
  "https://extension.harvard.edu/academics/programs/data-science-artificial-intelligence-graduate-program/")

