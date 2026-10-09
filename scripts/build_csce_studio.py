#!/usr/bin/env python3
"""Build the self-contained CSCE Master's Studio HTML from catalog facts."""
import json
import random
import html
from pathlib import Path

# code, title, credits label, hours, prereq, track,
# exclusive, cross, focus, mechanism, tradeoff, confuse, pearl, t1, t2, t3
ROWS = []

def R(*a):
    assert len(a) in (16, 17), (a[0], len(a))
    if len(a) == 16:
        a = a + ("",)
    ROWS.append(a)

R("M0","How to study this studio","0","Orientation, not a catalog course",
  "None","orient","","",
  "Learn the player before you open a course.",
  "Press play and listen while you look at the three-plate diagram. The plates use the same words as the narration.",
  "A course is complete at 80 percent on its five-question check. Progress stays on this device.",
  "This is a teaching walk of published catalog descriptions. It is not a Texas A&M degree plan, not advising, and not an accredited program.",
  "Listen, then take the check. Eighty percent marks the course done on this device only.",
  "Listen","80%","Not a degree")

R("CSCE 603","Database Systems and Applications","3","3 lecture hours",
  "CSCE 601; graduate classification","data",
  "Only one of CSCE 310 or CSCE 603 will satisfy the requirements for a degree.","",
  "Relational database design for graduate students who are not computer-science majors, with hands-on application of Codd's model.",
  "A relation is a named set of tuples. Design means choosing tables, keys, and constraints so the schema can answer the application's questions.",
  "You trade full database-systems theory for a design you can build. Query processing, recovery, and distributed data are the job of CSCE 608, which assumes CSCE 310.",
  "Do not count both the undergraduate CSCE 310 and this course. The catalog allows only one of them toward a degree.",
  "603 is Codd's relational model as a design course for non-majors. It is not the systems course.",
  "Codd","Relations","Design")

R("CSCE 608","Database Systems","3","3 lecture hours",
  "CSCE 310 or approval of instructor","data","","",
  "How a database works after the schema exists: models, query languages, storage, design theory, processing, transactions, and distributed data.",
  "The logical model says what a legal query means. The physical plan says how pages, indexes, and operators actually compute it. Transactions then make concurrent updates recoverable.",
  "Expressiveness of the query language fights cost. A language rich enough for knowledge representation can still be the wrong plan if the physical layout is naive.",
  "Do not confuse this with CSCE 603. 608 assumes the undergraduate database course and goes into engines, not first-time design for non-majors.",
  "608 is the engine: queries, storage, transactions, recovery, and distributed data.",
  "Queries","Storage","Transactions")

R("CSCE 670","Information Storage and Retrieval","3","3 lecture hours",
  "CSCE 310 or CSCE 603, or approval of instructor; graduate classification","data","","",
  "How to represent, store, and access very large multimedia collections: indexing, compression, and querying.",
  "An inverted index maps terms to postings. Compression shrinks those postings. Query processing walks them without reading the whole collection.",
  "You trade a perfect scan for an index that is smaller and faster, and you must measure whether the trade still finds the right documents.",
  "A database course is the prerequisite path, not the subject. 670 is retrieval over large collections, not relational design theory.",
  "Retrieval is indexes, compression, and queries over collections too large to scan.",
  "Index","Compress","Query")

R("CSCE 676","Data Mining and Analysis","3","3 lecture hours",
  "No separate prerequisite is printed in this catalog extract","data",
  "","Cross-listed with ECEN 758 and STAT 639.",
  "Exploratory analysis, pattern mining, clustering, and classification, shared with machine learning and statistics, on scientific and online data.",
  "Exploration tells you what the sample looks like. Pattern mining finds repeating structure. Clustering groups without labels. Classification predicts a label.",
  "A pattern can be frequent and still useless. The course sits between statistics and machine learning, so the same method has to survive both a model check and a data check.",
  "Do not treat this as a pure algorithms course or a pure statistics course. The catalog explicitly crosses it with ECEN 758 and STAT 639.",
  "Mining is exploration, patterns, clusters, and classifiers on real scientific or online data.",
  "Explore","Cluster","Classify")

R("CSCE 679","Data Visualization","3","3 lecture hours",
  "Graduate classification or approval of instructor","data",
  "","Cross-listed with VIZA 676.",
  "How data becomes a visual argument: encoding, interaction, 3D views, infographics, and narratives.",
  "A visual encoding maps a data field to a mark or channel such as position, length, or color. Interaction lets the reader change which slice is on screen.",
  "A vivid graphic can still lie if the channel does not match the data type. Narrative order is a design choice, not decoration.",
  "This is the visualization course, cross-listed with visualization, not a rendering or ray-tracing course.",
  "Encode the data on purpose. Decoration is not a visual argument.",
  "Encode","Interact","Narrative")

R("CSCE 605","Compiler Design","3","3 lecture hours",
  "CSCE 434","systems","","",
  "Advanced compiler construction: parser generators, scope and dynamic storage, data-flow analysis, and code optimization.",
  "A parser generator turns a grammar into a parser. Scope resolution decides which declaration a name means. Data-flow facts then tell the optimizer which rewrites are safe.",
  "A faster code generator is worthless if the analysis is wrong. Optimization is constrained by what the data-flow facts actually prove.",
  "The prerequisite is the undergraduate compiler course, CSCE 434, which is outside this graduate extract.",
  "A compiler course at this level is analysis and optimization, not a first parser.",
  "Parse","Scope","Data-flow")

R("CSCE 606","Software Engineering","3","3 lecture hours",
  "CSCE 431 or approval of instructor","systems","","",
  "Advanced software engineering: environments that raise productivity and quality, how to choose a method, prototyping, reuse, and AI techniques applied to engineering.",
  "An environment is the set of tools around the code. A method is the rule for how work moves. Reuse and rapid prototypes are bets that less new code, checked earlier, raises quality.",
  "A heavier process can slow a team even while it catches defects. The catalog asks you to classify and select methods, not to swear loyalty to one.",
  "CSCE 431 is the undergraduate software engineering prerequisite and is not in this extract. Approval of the instructor is the other door.",
  "606 is how software is produced and judged, including when an AI technique belongs in that process.",
  "Method","Prototype","Reuse")

R("CSCE 611","Operating Systems","3","3 lecture hours",
  "CSCE 313; graduate classification","systems",
  "Only one of CSCE 410 or CSCE 611 will satisfy the requirements for a degree.","",
  "How operating systems are designed: scheduling, memory and resource allocation, process coordination, case studies, and quality of service.",
  "The scheduler chooses which ready thread runs. The memory manager chooses which pages stay resident. Coordination is how those threads wait without corrupting shared state.",
  "A policy that is fair for processes can still miss a quality-of-service need of an application. The catalog asks you to see that impact, not only the algorithm.",
  "Undergraduate CSCE 410 and this course cannot both count. CSCE 313 is the prerequisite and sits outside this extract.",
  "611 is graduate operating systems. It and CSCE 410 are one degree requirement, not two.",
  "Schedule","Memory","QoS")

R("CSCE 612","Applied Networks and Distributed Processing","3","3 lecture hours",
  "Graduate classification","systems",
  "Only one of CSCE 463 or CSCE 612 will satisfy the requirements for a degree.","",
  "Network design and protocol analysis with programming: layered architecture applied to real networks. UNIX and C help but are not required.",
  "A layer offers a service and hides the layer below. Protocol analysis checks whether a real trace matches that promise. The lab is where you see the bytes.",
  "A clean layered picture can disagree with a deployed network. The course is applied: you both analyze and program.",
  "Do not also count undergraduate CSCE 463. The catalog allows only one of 463 or 612.",
  "612 is layered networks you can analyze and program. It replaces 463, it does not stack on it.",
  "Layers","Protocols","Lab")

R("CSCE 614","Computer Architecture","3","3 lecture hours",
  "CSCE 350/ECEN 350 or CSCE 312; undergraduate computer engineering or computer science background","systems","","",
  "Past the single von Neumann core: pipelines, vectorization, array processors, multiprocessors, and dataflow.",
  "A pipeline overlaps instruction stages. Vectorization widens the data. A multiprocessor replicates cores. Dataflow fires an operation when its inputs arrive, not when a program counter says so.",
  "The von Neumann machine is the starting limit, not the whole course. Parallel structure only helps if the program exposes work the hardware can overlap.",
  "You need an undergraduate architecture or organization course first. Those numbers are not in this graduate extract.",
  "614 starts where one sequential core stops: pipeline, vector, multiprocessor, dataflow.",
  "Pipeline","Vector","Dataflow")

R("CSCE 616","Introduction to Hardware Design Verification","3","3 lecture hours",
  "CSCE 312 or CSCE 350/ECEN 350 or equivalent; familiarity with C, C++, Verilog, or VHDL","systems","","",
  "How to check that a hardware design does what it claims: functional verification, case studies, and industry practice.",
  "Functional verification asks whether the design meets its specification, not whether the silicon was manufactured cleanly. You stimulate the design, predict the result, and judge the mismatch.",
  "Simulation only builds confidence on the cases you wrote. The catalog's emphasis is that practice: what to check, and how industry organizes the checking.",
  "This is the introduction. CSCE 714 is the advanced follow-on, aimed at IP-based flows. Language familiarity is assumed, not taught as a first programming course.",
  "Verification here means functional checking of a design against its specification.",
  "Specify","Stimulate","Judge")

R("CSCE 652","Software Reverse Engineering","3","2 lecture hours and 2 lab hours",
  "CSCE 313 or approval of instructor","systems","","",
  "From source to executable and back: file formats, disassembly, control-flow graphs, static and dynamic analysis, obfuscation, and malware.",
  "A compiler lowers source to an object file the operating system can load. Disassembly lifts bytes toward instructions. A control-flow graph shows where those instructions can go.",
  "Static analysis sees the file without running it. Dynamic analysis sees a run and misses paths you did not take. Obfuscation exists to make both harder.",
  "The prerequisite is operating systems, CSCE 313, outside this extract, unless the instructor approves. The lab hours are real: two hours, plus two lecture hours.",
  "Reverse engineering reads what the compiler and the loader actually produced.",
  "Disassemble","CFG","Malware")

R("CSCE 653","Computer Methods in Applied Sciences","3","3 lecture hours",
  "CSCE 442 or MATH 417; graduate classification","theory","","",
  "Classical numerical methods for problems from science and engineering: error, roots, interpolation, integration, linear systems, splines, and differential equations.",
  "A numerical method replaces a continuous problem with a finite one and owes you an account of the error. Roots, integrals, and differential equations are different problems that share that duty.",
  "A spline can fit the points and still be the wrong tool for a partial differential equation. The catalog lines them up so you see which method matches which problem.",
  "The prerequisite is CSCE 442 or MATH 417, both outside this extract, plus graduate classification. This is numerical method, not the supercomputing course 654.",
  "653 is numerical methods with the error stated, for the problems science and engineering actually pose.",
  "Error","Approximate","Equation")

R("CSCE 654","Supercomputing","3","3 lecture hours",
  "CSCE 614","systems","","",
  "High-performance scientific computing: vectorization, programming models, numerical methods, measurement, and multitasking.",
  "A supercomputer pays off only if the code exposes vector work or parallel tasks the machine can run. Measurement tells you whether it did.",
  "Peak hardware numbers are not your speed. The catalog pairs programming with performance measurement so the gap is the subject.",
  "CSCE 614 is the architecture prerequisite. Take that before this, or you will be tuning a machine you have not studied.",
  "Supercomputing is measured parallel performance, not a bigger computer in the abstract.",
  "Vectorize","Measure","Multitask")

R("CSCE 662","Distributed Processing Systems","3","3 lecture hours",
  "CSCE 313 and CSCE 463 or CSCE 612","systems","","",
  "Practice of distributed processing: protocols, remote procedure calls, file sharing, reliability, load balancing, distributed databases, and protection.",
  "A remote procedure call makes a call on another machine look local, until failure proves it is not. Reliability, placement of load, and protection are the rest of that lie you have to repair.",
  "Shared files and distributed databases fail differently from a single node. The course is about those mechanisms, not about a single protocol trace.",
  "You need both operating systems (313, outside this extract) and a networks course, either undergraduate 463 or graduate 612.",
  "662 is what happens after the network works: calls, files, failures, and protection across machines.",
  "RPC","Failure","Protect")

R("CSCE 664","Wireless and Mobile Systems","3","3 lecture hours",
  "CSCE 463 or CSCE 464 or approval of instructor","systems","","",
  "Wireless from the medium up: access control, scheduling, transport over wireless, capacity, vehicular and sensor nets, security, and mobile applications.",
  "The wireless medium is shared and lossy. Medium-access control decides who transmits. Transport protocols written for wires often read loss as congestion and do the wrong thing.",
  "Capacity is not the same number on a wire and on a radio. The catalog also pushes the systems that sit on top: vehicles, ad hoc nets, sensors, and the applications.",
  "The prerequisite is an undergraduate networks course, 463 or 464, unless the instructor approves. 464 is not in this extract.",
  "Wireless changes the assumptions under access control, transport, and capacity.",
  "Medium","MAC","Capacity")

R("CSCE 678","Distributed Systems and Cloud Computing","3","3 lecture hours",
  "No separate prerequisite is printed in this catalog extract","systems",
  "","Cross-listed with ECEN 757.",
  "Design and analysis of distributed systems, with cloud computing as the worked application: MapReduce, synchronization, peer-to-peer, election, agreement, replication, and job assignment.",
  "MapReduce splits a large job into tasks and gathers the results. Replication copies state so a failure is not the end of the data. Agreement is how those copies decide one value.",
  "A cloud API hides election and replication until they fail. The course asks you to design and analyze those mechanisms, not only to call them.",
  "This is cross-listed with electrical engineering as ECEN 757. It is not the same course as 662, which is the broader processing-systems treatment with an operating-systems prerequisite.",
  "Cloud here means the distributed mechanisms underneath: map, sync, elect, agree, replicate.",
  "MapReduce","Agreement","Replicate")

R("CSCE 680","Testing and Diagnosis of Digital Systems","3","3 lecture hours",
  "ECEN 248 or equivalent, and ECEN 350/CSCE 350 or equivalent","systems",
  "","Cross-listed with ECEN 680.",
  "How VLSI circuits and systems are tested, and how to design them so they can be tested.",
  "A test applies inputs and compares outputs to a fault model. Design for testability changes the circuit so those inputs can reach the logic you must observe.",
  "A design that is fast but untestable fails in the factory, not on the whiteboard. Diagnosis asks which fault explains the bad output.",
  "The prerequisites are digital logic and the joint architecture course, both outside this graduate extract. It is cross-listed with ECEN 680.",
  "680 is test and diagnosis of digital hardware, including design for testability.",
  "Fault","Observe","DFT")

R("CSCE 714","Advanced Hardware Design Functional Verification","3","3 lecture hours",
  "CSCE 616, or CSCE 312, or CSCE 350/ECEN 350, or ECEN 468, or equivalent; familiarity with C, C++, Verilog, or VHDL","systems","","",
  "Advanced functional verification in an IP-based hardware methodology, past the introductory course.",
  "IP-based design assembles blocks. Verification has to ask both whether each block meets its contract and whether the assembly still does.",
  "More tooling does not replace a specification. The catalog's case studies are there because industrial practice is part of the subject, not a guest lecture.",
  "CSCE 616 is the introductory verification course. This one assumes that start, or an equivalent architecture and HDL background.",
  "714 is functional verification when the design is built from IP blocks.",
  "IP","Contract","Practice")

R("CSCE 735","Parallel Computing","3","3 lecture hours",
  "Graduate classification or approval of instructor","systems","","",
  "Parallel machines and the programs they require: architectures, tools, performance, algorithms, and applications.",
  "A parallel algorithm names the work that can happen at once and the communication that cannot. Performance says whether the machine agreement matches that split.",
  "More processors can slow you down when communication dominates. The catalog puts measurement next to algorithms on purpose.",
  "Do not swap this with CSCE 626, which is parallel algorithm design and lower bounds, or with 654, which is supercomputing after architecture.",
  "735 is the parallel stack: machine, tools, algorithm, and measured speed.",
  "Split","Communicate","Speed")

R("CSCE 665","Advanced Networking and Security","3","3 lecture hours",
  "Graduate classification and approval of instructor","security","","",
  "Security of network protocols, studied on live machines and live networks, including building tools.",
  "A protocol is secure only under the assumptions it states. On a live network you test those assumptions instead of trusting the diagram.",
  "Tooling on production-like machines is the method. Instructor approval is required because the work is on live systems.",
  "This is not the survey of cybersecurity foundations in 701, and it is not the general network-security course 765. It needs the instructor's approval.",
  "665 investigates protocol security on live networks. Approval is part of the prerequisite.",
  "Live net","Protocol","Tools")

R("CSCE 701","Foundations of Cybersecurity","3","3 lecture hours",
  "Graduate classification or approval of instructor","security",
  "","Cross-listed with CYBR 601.",
  "Core cybersecurity: cryptographic algorithms, hash functions, cyber-physical security, authentication, firewalls, intrusion detection, and the social side of the field.",
  "A hash is not encryption. Authentication is not authorization. A firewall filters traffic. An intrusion detection system watches for what the filter missed.",
  "The catalog refuses a tools-only view. Social constructs and domains of cybersecurity are part of the foundations, beside the algorithms.",
  "Cross-listed as CYBR 601. It is the foundation course, not the law course (702) and not modern cryptography theory (711).",
  "701 is the map: crypto primitives, controls, cyber-physical systems, and the human domain.",
  "Hash","Control","People")

R("CSCE 702","Law and Policy in Cybersecurity","3","3 lecture hours",
  "Graduate classification","security",
  "","Cross-listed with CYBR 602.",
  "Law and policy across procurement, operations, maintenance, governance, oversight, protection, and defense, in the United States and elsewhere.",
  "A control that is technically possible can still be unlawful, or required, or silent. Policy is the rule an organization actually adopts.",
  "Domestic rules and global rules disagree. The course is analysis of that disagreement, not a bar exam.",
  "Cross-listed as CYBR 602. It does not replace a technical foundations course.",
  "702 asks which cybersecurity acts are required, allowed, or forbidden.",
  "Law","Policy","Global")

R("CSCE 703","Cybersecurity Risk","3","3 lecture hours",
  "Graduate classification","security",
  "","Cross-listed with CYBR 603.",
  "Risk as a decision: avoid, accept, mitigate, or transfer, plus assessments and audit frameworks.",
  "A risk pairs a threat with a consequence. Avoidance removes the activity. Acceptance keeps it. Mitigation lowers likelihood or impact. Transfer moves the loss, often by contract or insurance.",
  "A long assessment that does not change one of those four choices is paperwork. Audit frameworks exist so someone else can check the reasoning.",
  "Cross-listed as CYBR 603. Risk here is a decision method, not a vulnerability scanner.",
  "Name the risk, then avoid, accept, mitigate, or transfer it.",
  "Avoid","Mitigate","Transfer")

R("CSCE 704","Data Analytics for Cybersecurity","3","3 lecture hours",
  "Graduate classification","security",
  "","Cross-listed with CYBR 604.",
  "Analytics used on security data: clustering, supervised learning, anomaly detection, and visualization, across networks, communities, control systems, and devices.",
  "Supervised learning needs labels, such as known attacks. Anomaly detection looks for what does not match a baseline, and will cry wolf. Visualization is how a person checks the cry.",
  "An analytic aimed at propaganda or strategic manipulation is not the same problem as a packet anomaly. The catalog lists both, so the method has to match the abuse.",
  "Cross-listed as CYBR 704. It is applied analytics for security, not the general machine-learning survey in 633.",
  "704 applies clustering, supervised models, anomalies, and pictures to security data.",
  "Anomaly","Labels","Picture")

R("CSCE 711","Foundation of Modern Cryptography","3","3 lecture hours",
  "STAT 211 and CSCE 411; graduate classification","security","","",
  "Definitions and constructions: perfect secrecy, pseudorandomness, symmetric primitives, public-key encryption, signatures, and protocols such as zero-knowledge and multiparty computation.",
  "Perfect secrecy, as in the one-time pad, leaks nothing information-theoretically. Computational schemes, such as RSA or El Gamal, are secure only against bounded adversaries, and only if the definition says so.",
  "A construction without a definition is a rumor. The catalog walks definitions first: encryption, authentication, signatures, then the heavier protocols.",
  "Prerequisites are probability (STAT 211) and algorithms (CSCE 411), both outside this extract. This is not 701's survey and not 749's applied deployment course.",
  "711 is modern cryptography from definitions: secrecy, authentication, signatures, and proof-based protocols.",
  "Define","Reduce","Prove")

R("CSCE 712","Digital Forensic Engineering","3","3 lecture hours",
  "Graduate classification","security","","",
  "Computer and network forensics: technical method, tools, and the legal rules for handling digital evidence.",
  "A forensic copy is made so the analysis does not alter the original. The chain of handling is what lets a technical finding stay admissible.",
  "A clever recovery that breaks the handling rules can be useless in the setting the catalog cares about. Tools and legal requirements are one course.",
  "This is engineering of investigations, not the policy survey in 702 and not reverse engineering as a malware-analysis course in 652, though the skills touch.",
  "712 is forensic technique plus the duty not to spoil the evidence.",
  "Copy","Handle","Admit")

R("CSCE 713","Software Security","3","3 lecture hours",
  "CSCE 431 or CSCE 606, or approval of instructor; graduate classification","security","","",
  "Design and implementation of secure software: review, static and dynamic analysis, risk, and security testing.",
  "Secure design chooses what the program is allowed to do before the code is clever. Review, including tools, looks for where the code broke that choice.",
  "A scanner is not a method. The catalog pairs tool-assisted review with risk analysis and with tests written to attack the software.",
  "You need undergraduate software engineering or CSCE 606 first, unless the instructor approves.",
  "713 is how software is built and tested so it fails closed.",
  "Design","Review","Test")

R("CSCE 715","Secure Authentication Systems","3","3 lecture hours",
  "Graduate classification","security","","",
  "Passwords, multi-factor authentication, biometrics, end-to-end encryption, side channels, and newer schemes built on machine learning, cryptography, language, and interface research.",
  "A factor is evidence: something you know, hold, or are. A second factor fails if it shares a side channel with the first. End-to-end encryption protects a channel; it does not by itself prove who is at the end.",
  "Biometrics feel stronger than passwords and are harder to rotate once leaked. The catalog puts that analysis next to the classical mechanisms.",
  "Graduate classification is the listed prerequisite. This is not the full cryptography course.",
  "Authentication is evidence of identity, and every factor has a side channel.",
  "Factors","Biometric","Side channel")

R("CSCE 716","Foundations and Applications of Blockchains","3","3 lecture hours",
  "Graduate classification","security","","",
  "What a blockchain assumes and what that lets you build, practiced on a private Ethereum network from transfers to smart contracts.",
  "A ledger is useful only under a trust assumption: who can append, who can censor, and which cryptographic tool enforces it. Change the assumption and the application may become impossible.",
  "A smart contract is a program whose state is the ledger. Hands-on work on a private Ethereum network is how the catalog keeps the foundation honest.",
  "Do not treat this as the applied-cryptography course 749, which uses blockchains as one application of heavier protocols. 716 is the foundation and the contracts.",
  "A blockchain application is only as strong as its trust assumption and its cryptography.",
  "Trust","Ledger","Contract")

R("CSCE 749","Applied Cryptography","3","3 lecture hours",
  "Graduate classification","security","","",
  "Using multiparty computation, verifiable computation, and zero-knowledge proofs for private machine learning, cryptocurrencies, and blockchains, under real efficiency limits.",
  "Secure multiparty computation lets parties compute on hidden inputs. A zero-knowledge proof lets you convince a verifier without handing over the secret. Both can be too slow for the product you wanted.",
  "The catalog's point is the constraint: privacy mechanisms that are correct on paper still have to function at the cost the application can pay.",
  "Graduate classification only, in this extract. For definitions and proofs, the foundation course is 711, which has harder prerequisites.",
  "749 is cryptography applied where privacy meets a budget: learning, coins, and chains.",
  "MPC","Zero-knowledge","Cost")

R("CSCE 765","Network Security","3","3 lecture hours",
  "Graduate classification","security","","",
  "Vulnerabilities in network communication and the defenses that match them, with cryptography applied to real protocols across the stack.",
  "Each layer can fail on its own terms: spoofing, replay, downgrade, or a protocol that authenticates the wrong thing. A defense has to sit at the layer where the vulnerability lives.",
  "A primitive used in the wrong protocol message does not become security. The catalog stresses correct application, not a new cipher.",
  "Compare with 665, which is live investigation under instructor approval, and with 701, which is the broader foundation including non-network controls.",
  "765 puts cryptographic tools into the layer where the network actually fails.",
  "Layer","Attack","Defense")

R("CSCE 620","Computational Geometry","3","3 lecture hours",
  "CSCE 311 or approval of instructor","theory",
  "","Cross-listed with VIZA 670.",
  "Algorithms for geometric problems: convex hulls, Voronoi diagrams, range searching, and proximity.",
  "A convex hull is the smallest convex set around the points. A Voronoi diagram partitions space by nearest site. Range searching asks which points fall in a query region.",
  "A geometrically obvious picture can still hide a bad asymptotic bound. The course is design and analysis, cross-listed with visualization.",
  "The prerequisite is CSCE 311, outside this extract, or the instructor's approval. It is cross-listed as VIZA 670.",
  "620 is geometric algorithms: hulls, Voronoi, ranges, and near neighbors.",
  "Hull","Voronoi","Range")

R("CSCE 626","Parallel Algorithm Design and Analysis","3","3 lecture hours",
  "CSCE 221","theory","","",
  "Algorithms for highly parallel machines, area-time complexity, lower bounds, with applications in AI, vision, and VLSI.",
  "Area-time complexity charges both the work and the time, and the hardware area that holds the work. A lower bound says no design beats that charge.",
  "A parallel algorithm that looks busy can still be sequential in the dependency that matters. The catalog wants the bound, not only the speedup story.",
  "The prerequisite is CSCE 221, undergraduate data structures and algorithms, outside this extract. This is theory of parallel algorithms, not the systems survey 735.",
  "626 prices parallel algorithms in area and time, and proves when they cannot be faster.",
  "Area-time","Lower bound","Parallel")

R("CSCE 627","Theory of Computability","3","3 lecture hours",
  "CSCE 433","theory","","",
  "Formal models of computation: pushdown automata, Turing machines, recursive functions, and what remains unsolvable or merely costly.",
  "A pushdown automaton is the machine that matches a context-free grammar. A Turing machine is the model used to define what is computable at all. An unsolvability result says no algorithm exists, not that we have not found it yet.",
  "Complexity of solvable problems is the edge of this course. The follow-on, 637, is where complexity classes become the whole subject.",
  "CSCE 433, the undergraduate theory prerequisite, is outside this extract.",
  "627 draws the line between computable, uncomputable, and costly.",
  "Turing","Unsolvable","Cost")

R("CSCE 628","Computational Biology","3","3 lecture hours",
  "Graduate classification or approval of instructor","theory",
  "","Cross-listed with BICH 628.",
  "Biology problems restated as computational problems, especially in genomics and proteomics.",
  "A biological question becomes an algorithmic question only after you name the input, the output, and what counts as a right answer. Sequence data is the usual input. The function of a protein is a much harder output.",
  "A fast algorithm on the wrong formulation solves a problem the biologist did not ask. The cross-list with biochemistry is the point of that discipline.",
  "Cross-listed as BICH 628. Graduate standing or instructor approval is enough, in this extract.",
  "628 turns a genomics or proteomics question into a computation you can defend.",
  "Formulate","Genome","Protein")

R("CSCE 629","Analysis of Algorithms","3","3 lecture hours",
  "Graduate classification","theory","","",
  "Concrete algorithm design and analysis, models of complexity, NP-completeness, and approximation and probabilistic algorithms.",
  "Analysis charges a concrete algorithm against a model of computation. NP-completeness is evidence that a problem is as hard as a large family of others. Approximation and randomness are what you do when the exact answer is too expensive.",
  "A proof of NP-completeness is not a license to stop. The catalog continues into algorithms that give a guaranteed close answer, or a probably correct one.",
  "This is the usual prerequisite for several later theory courses, including 637's sibling topics, 640, 669, 717, and 727. Graduate classification is the listed gate.",
  "629 is graduate algorithms: exact analysis, NP-completeness, then approximation and probability.",
  "Analyze","NP-complete","Approximate")

R("CSCE 637","Complexity Theory","3","3 lecture hours",
  "CSCE 627 or approval of instructor","theory","","",
  "Complexity classes and the machines that define them: deterministic, nondeterministic, alternating, and probabilistic; time, space, and parallel cost; relativization.",
  "P is deterministic polynomial time. NP is nondeterministic polynomial time. An oracle, or relativized world, can change which inclusions you can prove with certain styles of argument.",
  "Uncomputability from 627 is not the same claim as hardness inside P and NP. This course is about resources: time, space, parallelism, and randomness.",
  "Take computability, CSCE 627, first, unless the instructor approves a different background.",
  "637 classifies solvable problems by the resources a machine is allowed to spend.",
  "Class","Resource","Oracle")

R("CSCE 640","Quantum Algorithms","3","3 lecture hours",
  "CSCE 629 or approval of instructor","theory","","",
  "The quantum circuit model, basic quantum algorithms, and selected recent results in quantum information.",
  "A quantum circuit is the model: qubits, unitary gates, and measurement at the end. An algorithm in this model has to say why the measurement is more likely to yield the answer than a classical search would.",
  "The catalog promises a gentle entry and then recent results. It is not a physics sequence and not a lab in building a device.",
  "CSCE 629, analysis of algorithms, is the prerequisite unless the instructor approves otherwise.",
  "640 is quantum algorithms in the circuit model, after you can already analyze classical algorithms.",
  "Circuit","Amplitude","Measure")

R("CSCE 658","Randomized Algorithms","3","3 lecture hours",
  "Graduate classification","theory","","",
  "Design and analysis of randomized algorithms, using selected tools from probability and game theory.",
  "A randomized algorithm flips coins inside the procedure. Analysis then bounds the chance of failure or the expected cost, instead of the worst single path only.",
  "Randomness can be in the algorithm or in the input. The catalog focuses on the algorithm, and on the paradigms that keep coming back.",
  "Do not confuse this with a first probability course. Graduate classification is the listed prerequisite; 629 is the broader algorithms course that also touches probabilistic methods.",
  "658 is how and why an algorithm flips coins, and how you prove it still works.",
  "Coins","Expectation","Paradigm")

R("CSCE 668","Distributed Algorithms and Systems","3","3 lecture hours",
  "CSCE 411 or equivalent, or approval of instructor","theory","","",
  "Fundamental distributed algorithms: leader election, mutual exclusion, consensus, logical time, snapshots, fault tolerance, shared memory, and clock synchronization.",
  "Consensus asks whether every correct process can agree on one value when messages or nodes fail. Logical time orders events without a perfect wall clock. A snapshot records a consistent cut, not a magical global instant.",
  "A system can look sequential in a demo and still have no algorithm that solves consensus under the fault model you claimed. The result is often an impossibility, not a library call.",
  "The prerequisite is CSCE 411 or an equivalent algorithms course, outside this extract, or instructor approval. This is theory. 662 and 678 are the systems cousins.",
  "668 is the theorems of distribution: elect, exclude, agree, and what failure forbids.",
  "Consensus","Time","Fault")

R("CSCE 669","Computational Optimization","3","3 lecture hours",
  "CSCE 629","theory","","",
  "Polyhedral combinatorics as a way to solve combinatorial optimization, including max flow, matching, and matroids, and what that geometry says about approximation.",
  "A polytope is the geometric body of feasible solutions. An optimal vertex of the right polytope is an optimal combinatorial object, such as a matching.",
  "If you cannot optimize over the polytope you wrote down, the geometry still explains why an approximation algorithm's guarantee has the shape it has.",
  "CSCE 629 is required. This is not the machine-learning optimization course 726.",
  "669 treats optimization as geometry: polytopes, then flow, matching, and matroids.",
  "Polytope","Matching","Approx")

R("CSCE 717","Algorithmic Game Theory","3","3 lecture hours",
  "CSCE 629 or approval of instructor","theory","","",
  "Algorithms where the input is other rational agents: Nash equilibrium, social choice, mechanism design, and the complexity of those objects.",
  "A Nash equilibrium is a strategy profile no player wants to leave alone. Mechanism design builds the rules so that selfish play still yields a chosen outcome. Social choice is how preferences become one decision.",
  "An equilibrium that exists may still be intractable to compute. The catalog puts computational complexity next to the game, on purpose.",
  "Again the algorithms prerequisite is 629, unless the instructor approves. This is not 668's fault-tolerant consensus and not 658's coin flips, though probability appears.",
  "717 is games as algorithms: equilibrium, voting, mechanisms, and their cost to compute.",
  "Nash","Mechanism","Hardness")

R("CSCE 727","Algorithmic Foundations of Big Data Computing","3","3 lecture hours",
  "CSCE 629 or approval of instructor","theory","","",
  "Algorithms that never see the whole input at once: streaming, parallel, sublinear-time, and sketching, with theory and implementation.",
  "A stream algorithm stores a summary far smaller than the data and still approximates a statistic. A sketch is that summary. Sublinear time means you finish without reading every item.",
  "An approximation has to come with a guarantee. The catalog asks for both the theorem and a practical implementation on a real problem.",
  "Prerequisite CSCE 629 or instructor approval. This is not the mining survey 676, which is methods on data rather than the resource bounds.",
  "727 studies algorithms that are correct enough without seeing all the data.",
  "Stream","Sketch","Sublinear")

R("CSCE 624","Sketch Recognition","3","3 lecture hours",
  "Graduate classification","ai","","",
  "Sketch recognition algorithms compared: features, vision, geometry, timing, and path, and how to combine them.",
  "A stroke is a path through time. Feature methods summarize it. Vision methods look at the picture. Timing methods use when the pen moved, not only where.",
  "One recognizer fails on drawings another handles. The catalog's move is combination, using known AI techniques, not loyalty to a single feature set.",
  "Graduate classification is the prerequisite. This is recognition of drawings, not the image-synthesis sequence.",
  "624 compares how a machine reads a sketch, then combines the readers.",
  "Stroke","Feature","Combine")

R("CSCE 625","Artificial Intelligence","3","3 lecture hours",
  "CSCE 411 or approval of instructor; graduate classification","ai","","",
  "The core of AI: search, games, logic and proof, planning, probability, introductory machine learning and deep learning, plus ethics.",
  "Uninformed search enumerates. Informed search uses a heuristic. Minimax with alpha-beta pruning plays a game without expanding every line. A logical proof and a probabilistic belief answer different kinds of uncertainty.",
  "The catalog is a survey with teeth, not a single method. Philosophical issues, including ethics, are listed beside the algorithms.",
  "CSCE 411 or the instructor, plus graduate classification. Later courses such as 631 and 633 accept 625 as a way in.",
  "625 is the graduate map of AI, from search and logic to learning and ethics.",
  "Search","Logic","Uncertainty")

R("CSCE 630","Speech Processing","3","3 lecture hours",
  "ECEN 314 or equivalent, or approval of instructor; signals and systems, linear algebra, probability; a high-level programming language","ai","","",
  "Speech from the body to the model: production and perception, then analysis, coding, recognition, synthesis, and modification.",
  "Short-time Fourier analysis and linear prediction turn a waveform into frames a model can use. Recognition often pairs dynamic time warping or hidden Markov models with a language model. Synthesis has a front end and a back end.",
  "A recognizer that ignores how speech is produced will still fit a dataset and fail a speaker. The catalog starts at the apparatus and the phonetics for that reason.",
  "The prerequisite is a signals course, ECEN 314 or equivalent, plus linear algebra, probability, and programming. Those are outside this extract.",
  "630 is speech as a signal and as a sequence: analyze, recognize, synthesize, modify.",
  "Frames","Recognize","Synthesize")

R("CSCE 631","Intelligent Agents","3","3 lecture hours",
  "CSCE 420 or CSCE 625","ai","","",
  "Design and implementation of intelligent agents, and how more than one agent coordinates.",
  "An agent perceives, decides, and acts. Coordination is what changes when several agents share an environment and do not share a mind.",
  "A single-agent demo hides the conflict the course is about. Theory of coordination and a method you can implement are both required by the catalog.",
  "Take undergraduate AI, CSCE 420, which is outside this extract, or graduate AI, CSCE 625.",
  "631 is agents in the plural: decide, act, and coordinate.",
  "Agent","Act","Coordinate")

R("CSCE 633","Machine Learning","3","3 lecture hours",
  "CSCE 420 or CSCE 625","ai","","",
  "Systems that acquire knowledge and improve: induction, conceptual clustering, explanation-based learning, exemplars, analogy, discovery, and genetic algorithms.",
  "Induction generalizes from examples. Explanation-based learning uses a theory to learn from fewer examples. A genetic algorithm searches by variation and selection. They are not the same bet.",
  "The catalog's list is broader than a neural-network course. Deep learning has its own number, 636. This is the survey of how a system can change itself.",
  "Same door as agents: CSCE 420 or CSCE 625.",
  "633 is how systems learn, across several traditions, not only gradient descent.",
  "Induce","Explain","Search")

R("CSCE 634","Intelligent User Interfaces","3","3 lecture hours",
  "Graduate classification and approval of instructor","ai","","",
  "Where AI meets computer-human interaction: systems that learn about their users, tasks, and environments, and how you evaluate them.",
  "An adaptive interface changes after it observes. The scientific problem is whether the change helped the task or only fit the last session.",
  "A model of the user that you cannot evaluate is a story. The catalog puts design and evaluation in the same course, and it requires the instructor's approval.",
  "This is not the broad CHI course 671, and not the machine-learning survey. It is the intersection, under instructor approval.",
  "634 builds interfaces that adapt, and then checks whether the adaptation helped.",
  "Adapt","User","Evaluate")

R("CSCE 635","AI Robotics","3","3 lecture hours and 1 lab hour",
  "Graduate classification","ai","","",
  "AI methods for mobile robots on the ground, in the air, or on the water, emphasizing biological and cognitive ideas rather than a pure control-theory formulation.",
  "A controller can track a trajectory without deciding what the trajectory is for. This course is the deciding: perception and action organized as an intelligent system, with a lab.",
  "Control theory is the contrast the catalog names, not the syllabus. If you want wheel kinematics and SLAM as the spine, that is 752 and 753.",
  "One lab hour plus three lecture hours. Graduate classification is the prerequisite. It is a survey for science and engineering majors.",
  "635 is mobile robots as intelligent systems, with a lab, not only as control loops.",
  "Mobile","Decide","Lab")

R("CSCE 636","Deep Learning","3","3 lecture hours",
  "MATH 251 and MATH 304, or approval of instructor","ai","","",
  "Neural models: equivalence and convergence, associative memory, adaptive resonance, and uses in vision, speech, motor control, and planning.",
  "A network is a parameterized function. Convergence asks whether training approaches a defined behavior. Associative memory retrieves a pattern from a part of it. Adaptive resonance tries to learn new categories without erasing old ones.",
  "The catalog is not only today's training recipe. It includes what the models are equivalent to, and where they are used outside a benchmark.",
  "Prerequisites are multivariable calculus, MATH 251, and linear algebra, MATH 304, or the instructor. Those math courses are outside this extract.",
  "636 is neural models, what they converge to, and where they are applied.",
  "Network","Converge","Memory")

R("CSCE 638","Natural Language Processing: Foundations and Techniques","3","3 lecture hours",
  "Graduate classification","ai","","",
  "Language models, syntactic processing, and semantic understanding, then applications: extraction, translation, summarization, dialogue, and sentiment.",
  "A language model scores text. A syntactic process names the structure. Semantics asks what was claimed. Applications sit on top of those three, and fail in different ways when one of them is missing.",
  "A fluent generator can still extract the wrong fact. The catalog separates foundations from techniques so you can say which one broke.",
  "Graduate classification is the listed prerequisite. Speech processing, 630, is the signal course, not this one.",
  "638 is language from models and structure to extraction, translation, dialogue, and sentiment.",
  "Model","Syntax","Meaning")

R("CSCE 642","Deep Reinforcement Learning","3","3 lecture hours",
  "Graduate classification","ai","","",
  "Markov decision processes, the main reinforcement-learning methods, deep networks, and algorithms that join the two.",
  "A Markov decision process is states, actions, transitions, and reward. The agent changes its policy to collect more reward. A deep network represents the policy or the value when the table will not fit.",
  "If the problem is not actually Markov, a deeper network does not repair the formalization. The catalog starts at that formalization on purpose.",
  "Graduate classification is the prerequisite in this extract. 636 is deep learning; 642 is deep learning inside a decision process.",
  "642 is reward-driven decisions represented by deep networks.",
  "MDP","Policy","Reward")

R("CSCE 643","Seminar in Intelligent Systems and Robotics","3","3 lecture hours",
  "Approval of instructor","ai","","",
  "Problems, methods, and recent developments in intelligent systems and robotics. The topic changes. It may be repeated when the content changes.",
  "A seminar is not a fixed body of techniques. You read current work and discuss it. Credit the second time is allowed only because the content is different.",
  "Do not put this on a plan as if it were 625 or 635 with a stable syllabus. The instructor's approval is required, and the title will not tell you the semester's papers.",
  "Repeatable as content varies. That phrase is the whole planning rule.",
  "643 is a changing seminar. Repeating it counts only when the content actually changes.",
  "Papers","Discussion","Varies")

R("CSCE 666","Pattern Analysis","3","3 lecture hours",
  "MATH 222 and MATH 411 or equivalent; graduate classification","ai","","",
  "Classification and clustering of high-dimensional data: estimation, features, Bayesian and geometric classifiers, spectral methods, hidden Markov models, and ensembles.",
  "High dimension breaks distance and density. Feature extraction and subset selection throw away what does not help. An ensemble combines models so one bias is not the whole answer.",
  "A classifier that fits the sample can still be the wrong geometry for the data. The catalog spans statistical learning and spectral graph methods so you can see that choice.",
  "Linear algebra at the level of MATH 304's sibling, here MATH 411 or equivalent, plus MATH 222, and graduate classification. Those math courses are outside this extract.",
  "666 is how to classify and cluster when the data has too many dimensions.",
  "Features","Classify","Ensemble")

R("CSCE 726","Large-Scale Optimization for Machine Learning","3","3 lecture hours",
  "CSCE 633 or CSCE 636, or approval of instructor; graduate classification","ai","","",
  "The optimizers behind large learning problems: gradient methods, stochastic gradients, adaptive methods, momentum, convergence, and implementation.",
  "A gradient step walks downhill on a loss. Stochastic gradients use a sample of the data. Adaptive methods and momentum change the step. Convergence analysis says whether the walk is guaranteed to arrive.",
  "A popular update rule without a convergence story is a recipe. The catalog requires both the algorithm and an implementation on a real learning problem.",
  "You need machine learning or deep learning first, 633 or 636, or the instructor, plus graduate classification. This is not combinatorial optimization, 669.",
  "726 is the optimization that actually trains large models, and why the steps are valid.",
  "Gradient","Stochastic","Converge")

R("CSCE 641","Computer Graphics","3","3 lecture hours",
  "CSCE 441 or approval of instructor","graphics",
  "","Cross-listed with VIZA 672.",
  "Representation of 3D objects and the images computed from them: visibility, illumination, ray tracing, radiosity, animation, on current hardware and software.",
  "A polygon, a curved patch, a volume, and a CSG tree are different models of the same object. Hidden-surface removal decides what faces the camera. Illumination decides what color that face should be.",
  "Ray tracing and radiosity answer the light question differently. The catalog also wants practice on real graphics systems, not only the equations.",
  "Prerequisite CSCE 441, outside this extract, or instructor approval. Cross-listed as VIZA 672. Image synthesis as a lab course is 647.",
  "641 is how a 3D model becomes a shaded, visible, animated image.",
  "Model","Visible","Light")

R("CSCE 645","Geometric Modeling","3","3 lecture hours",
  "CSCE 441 and CSCE 442, or equivalent","graphics",
  "","Cross-listed with VIZA 675.",
  "Freeform curves and surfaces, and the topology and operators of solid models.",
  "Splines and Bézier curves are polynomial pieces with control points. A solid model also needs topology: what is closed, what shares a boundary. Boolean and Euler operators change that solid without leaving it nonsense.",
  "A pretty surface that is not a valid solid will break the next operation. The catalog pairs the mathematics with construction and display.",
  "You need both CSCE 441 and CSCE 442, or equivalents, outside this extract. Cross-listed as VIZA 675.",
  "645 is the math of curves, surfaces, and valid solids.",
  "Spline","Solid","Topology")

R("CSCE 646","Digital Image","3","2 lecture hours and 2 lab hours",
  "Graduate classification or approval of instructor","graphics",
  "","Cross-listed with VIZA 654.",
  "Two-dimensional digital images as material: storage, display, drawing, warping, color, filtering, and manipulation.",
  "An image is samples. Filtering mixes neighboring samples. Warping moves them. Color-space operations change the meaning of the channels, not just the brightness.",
  "Two lecture hours and two lab hours: the catalog expects you to perform the operations, not only name them. This is 2D imagery, not 3D rendering.",
  "Cross-listed as VIZA 654. Graduate classification or instructor approval.",
  "646 is hands-on 2D images: store, warp, recolor, and filter.",
  "Sample","Warp","Color")

R("CSCE 647","Image Synthesis","3","2 lecture hours and 2 lab hours",
  "Graduate classification in Visualization, VIZA 652, or approval of instructor","graphics",
  "","Cross-listed with VIZA 656.",
  "Computing an image from a 3D scene: local and global light, shading, shadows, hidden surfaces, texturing, raster algorithms, and projections.",
  "Local illumination shades a point from the lights it can name. Global illumination includes light that bounced. A shadow is visibility from the light, which is not the same test as visibility from the camera.",
  "The prerequisite path is a visualization graduate student who has had VIZA 652, or the instructor. Two lab hours sit beside two lecture hours.",
  "Cross-listed as VIZA 656. It is more specialized than the graphics overview 641, and it expects the visualization sequence.",
  "647 renders a 3D scene, including light that has bounced, in a lab as well as a lecture.",
  "Shade","Shadow","Raster")

R("CSCE 648","Computer Aided Sculpting","3","2 lecture hours and 3 lab hours",
  "Approval of instructor","graphics",
  "","Cross-listed with VIZA 657.",
  "Sculpting as both art and mathematics: proportion, posture, and line of action, together with curves, volumes, and constructive solids.",
  "Line of action and skeletal proportion decide whether the form reads. The math, parametric patches and constructive solid geometry, is how the machine stores the form you posed.",
  "Three lab hours and two lecture hours. The instructor's approval is required. This is not a survey of rendering.",
  "Cross-listed as VIZA 657. You do not substitute it for geometric modeling, 645, which is the formal curve and solid course.",
  "648 joins how a form reads with how a computer represents the volume.",
  "Pose","Volume","Sculpt")

R("CSCE 649","Physically-Based Modeling","3","2 lecture hours and 2 lab hours",
  "Approval of instructor","graphics",
  "","Cross-listed with VIZA 659.",
  "Physical simulation for choreography, modeling, and effects: particles, flexible materials, kinematics, and constraints.",
  "A particle system integrates simple laws over time. A constraint removes motion that should not happen, such as a bone stretching. Flexible materials need a model of how they bend.",
  "The same integrator can serve an animation or a special effect, and it can still look wrong if the constraint is missing. The lab is where that shows.",
  "Instructor approval is required. Cross-listed as VIZA 659. Two and two hours.",
  "649 simulates motion with particles, flexibility, and constraints.",
  "Particle","Constraint","Flex")

R("CSCE 650","Virtual Reality","3","2 lecture hours and 2 lab hours",
  "Graduate classification or approval of instructor","graphics",
  "","Cross-listed with VIZA 677.",
  "Virtual reality as systems and as experience: devices, 3D interaction, realism, navigation, augmented reality, design rules, and evaluation.",
  "An immersive display plus a 3D input device is not yet a usable environment. Interaction technique, navigation, and the decision of how real the picture must be are the design.",
  "The catalog requires a hands-on VR experience aimed at an application, a demonstration, or a research question, and it requires an evaluation, not only a demo.",
  "Cross-listed as VIZA 677. Two lecture hours and two lab hours. Graduate classification or instructor approval.",
  "650 is VR you design and evaluate, not a headset unboxed.",
  "Immersive","Navigate","Evaluate")

R("CSCE 743","Digital Fabrication Studio","3","3 lecture hours",
  "Graduate classification and approval of instructor","graphics","","",
  "Fabrication machines and materials, models of programmable material, and the recent literature in computational fabrication for human-computer interaction.",
  "A machine's mechanism and a material's behavior are the model. If you can state that model, you can propose a fabrication technique instead of only running a known printer.",
  "The catalog leans on late-breaking literature and on HCI, and it requires instructor approval. It is a studio, so the formulation has to become a process.",
  "Do not file this as a graphics rendering course. The output is a made object, and the gate is graduate standing plus the instructor.",
  "743 models the machine and the material so you can invent a fabrication method.",
  "Machine","Material","Make")

R("CSCE 748","Computational Photography","3","3 lecture hours",
  "Graduate classification or approval of the instructor","graphics","","",
  "Cameras and image formation, then algorithms on images: sampling and pyramids, panoramas, light fields, retargeting, high dynamic range, and texture synthesis.",
  "A camera maps light to samples. A pyramid represents the image at several scales. A panorama stitches views. A light field stores rays, not one picture. High dynamic range keeps values the sensor wanted to clip.",
  "These are algorithms that produce a picture you could not take in one exposure or one frame. They assume you will implement, not only identify, the method.",
  "Graduate classification or instructor approval. It is adjacent to 646, the 2D image lab, but the problems are the photographic computations named here.",
  "748 computes photographs the camera did not capture in a single shot.",
  "Camera","Pyramid","HDR")

R("CSCE 752","Robotics and Spatial Intelligence","3","3 lecture hours",
  "Graduate classification or approval of instructor","graphics","","",
  "The algorithmic base of robotics: frames and maps, kinematics, motion planning, sensors, camera calibration, stereo, SLAM, and navigation.",
  "A frame is a coordinate system. Forward kinematics maps joint angles to a pose. Inverse kinematics maps a desired pose back to joints. SLAM builds a map while estimating where the robot is in it.",
  "Planning a motion in the wrong frame is a different bug from a bad sensor. The catalog is the stack of those algorithms, not a single robot platform.",
  "Graduate classification or instructor approval. AI robotics, 635, is the cognitive survey with a lab. Perception in more geometric detail is 753.",
  "752 is frames, kinematics, planning, sensing, and SLAM.",
  "Frame","Kinematics","SLAM")

R("CSCE 753","Computer Vision and Robot Perception","3","3 lecture hours",
  "Graduate classification","graphics","","",
  "Geometry of vision: projective models, multiple views, camera estimation, features, lidar, and visual or lidar SLAM.",
  "Projective geometry is how a 3D point lands on an image. Two views constrain the scene more than one. Calibration estimates the camera. Lidar gives a point cloud with different failure modes than a photograph.",
  "A feature detector is not yet a map. SLAM from images and SLAM from lidar are both in the catalog because the sensors do not tell the same story.",
  "Graduate classification is the prerequisite. Take 752 if you need the broader robotics stack; take this if the problem is perception.",
  "753 is multi-view geometry and perception, by camera and by lidar.",
  "Projective","Views","Lidar")

R("CSCE 632","Accessible Computing","3","3 lecture hours",
  "Graduate classification","hci","","",
  "Who is left out by computing, the ethical and legal reasons to include them, universal design, accessibility standards, and a literature review.",
  "Universal design aims at a wider set of people from the start, rather than a patch afterward. A standard is a checkable claim. A literature review is the course's scholarly product.",
  "The catalog puts discrimination and population characteristics in the course, not only the widget. An implementation that ignores the legal and ethical motive has missed half the description.",
  "Graduate classification is the prerequisite. This is not a general HCI methods course; that role is closer to 671 and 655.",
  "632 is accessible computing as ethics, law, standards, design, and a literature review.",
  "Exclude","Universal","Standard")

R("CSCE 655","Human-Centered Computing","3","3 lecture hours",
  "Graduate classification, or CSCE 436 or 444, or approval of instructor","hci","","",
  "A foundation in human-centered systems: how to see interaction, prototype, evaluate, use visual design, structure information, and build a small program, alone and on a team.",
  "A prototype is a question you can test. An evaluation framework says what evidence would answer it. Visual design, the use of color, space, layering, and media, is part of that evidence, not a coat of paint.",
  "The catalog includes animation and games as material, and it includes both individual and team programming. It is a foundation, so the methods matter more than a single interface style.",
  "Doors in: graduate classification, or undergraduate 436 or 444, or the instructor. 671 is the broader CHI survey. 672 is collaborative work after CHI.",
  "655 is human-centered method: understand, prototype, evaluate, and build.",
  "Prototype","Evaluate","Visual")

R("CSCE 656","Computers and New Media","3","3 lecture hours",
  "Graduate classification","hci","","",
  "What computers change in the design of new media, and the relationship between authors and readers of interactive work.",
  "In interactive media the reader acts, so authorship includes the rules of that action, not only the content on the page. Design and content both carry the effect.",
  "The catalog is an investigation of impact and of those relationships. It is not a production lab in a single tool, and it does not list a technical prerequisite beyond graduate standing.",
  "Do not substitute it for visualization, graphics, or the HCI methods courses. The subject is media and authorship.",
  "656 studies interactive media as a relationship between author and reader.",
  "Author","Reader","Interactive")

R("CSCE 671","Computer-Human Interaction","3","3 lecture hours",
  "Graduate classification","hci","","",
  "The CHI survey: history, why it matters, design theories, models of users and interfaces, empirical task analysis, and styles of interaction.",
  "A model of the user predicts where the interface will fail. Empirical task analysis checks that prediction against people doing the task. A style of interaction, command line or direct manipulation or another, is a commitment to what the user must know.",
  "History and future direction are in the catalog so the survey is not only this year's widgets. Theory without an empirical method will not match the course as written.",
  "Graduate classification. This is the prerequisite path into 672, computer-supported collaborative work, along with CSCE 610 which is not in this extract.",
  "671 is the graduate survey of human-computer interaction, theory and empirical method together.",
  "Model","Task","Style")

R("CSCE 672","Computer Supported Collaborative Work","3","3 lecture hours",
  "CSCE 671 or CSCE 610, or approval of instructor","hci","","",
  "Systems that help people work together: theory, practice, technical design, and the social issues in the CSCW literature.",
  "Collaboration is not a shared folder. The system changes who can see work, when, and how conflict is resolved. Social issues are part of the design, because the group will route around a tool that ignores them.",
  "The catalog points at current CSCW research and at future directions. It is a design and use course, not only a survey of chat products.",
  "Take 671 or CSCE 610 first, or get instructor approval. CSCE 610 is not in this extract.",
  "672 designs for groups, including the social reasons a technically fine tool still fails.",
  "Group","Conflict","Social")

R("CSCE 706","Structured Programming in C","3","3 lecture hours",
  "Graduate classification; non-computer-science majors","bridge","","",
  "Programming in C for graduate students who are not computer-science majors: algorithms, technique, language, and documentation.",
  "C makes memory and control explicit. Structured programming is how you keep that explicitness readable: small procedures, clear data, and documentation another person can run.",
  "This is an on-ramp, not a graduate systems course. The catalog limits it to non-computer-science majors.",
  "If you are a computer-science major, this is the wrong door. 709 is intermediate C++ for graduate students and does not state that major restriction.",
  "706 is C and structured programming for graduate non-majors.",
  "C","Structure","Document")

R("CSCE 708","Introduction to Computer Science Concepts and Programming","3","3 lecture hours",
  "Graduate classification; non-computer-science engineering majors","bridge","","",
  "Logic, algorithmic thinking, and an iterative way to test ideas, taught in Java, for engineering graduate students outside computer science.",
  "Algorithmic thinking means stating steps that terminate and can be checked. Iteration means you test a small idea before you stack the next one. Java is the language the catalog names for that practice.",
  "The audience is narrower than 706: non-computer-science engineering majors. It is an introduction, so it does not replace a later programming or systems course.",
  "Do not send a computer-science major here, and do not treat it as the C course or the C++ course.",
  "708 is Java plus algorithmic thinking for engineering graduate students who are not CS majors.",
  "Logic","Iterate","Java")

R("CSCE 709","Intermediate Program Design and Development with C++","3","3 lecture hours and 1 lab hour",
  "Graduate classification","bridge","","",
  "Intermediate programming in C++: computational thinking, objects, dynamic memory without leaks, and error handling that makes programs more robust.",
  "A class that owns dynamic memory must release it. That is the leak the catalog names. Error handling is part of the design, not a print statement after the crash.",
  "One lab hour plus three lecture hours. The catalog does not restrict this one to non-majors. It assumes you already program and are extending that skill.",
  "706 is C for non-majors. 708 is Java for non-CS engineers. 709 is the intermediate C++ course.",
  "709 is intermediate C++: objects, dynamic memory, and errors you actually handle.",
  "C++","Memory","Errors")

R("CSCE 681","Seminar","0 to 1","0 to 1 other hours",
  "Graduate classification","research","","",
  "Reports and discussion of current research and of selected published papers. Credit rules are strict.",
  "You present and you discuss. The work is current research, not a hidden lecture course with a fixed problem set.",
  "The catalog allows this no more than once in a master's program and no more than twice in a PhD program. Extra enrollments do not become extra degree credit.",
  "Do not plan 681 as a repeatable elective the way 689 special topics can be repeated. The limits are printed on the course.",
  "681 is a seminar with a hard cap: once on a master's, twice on a PhD.",
  "Report","Discuss","Cap")

R("CSCE 682","Introduction to Doctoral Studies","0","0 other hours",
  "Doctoral classification in Computer Science and Engineering","research","","",
  "Orientation to doctoral study: milestones, expectations, and the role of research, publication, and presentation. It carries no credits.",
  "Zero credits means it does not add hours toward a total. It still exists to make the milestones visible: what the doctorate expects, and why papers and talks are part of the work.",
  "A master's student does not use this as an elective. The prerequisite is doctoral classification in this department.",
  "Do not list 682 when you are summing master's credits. The catalog sets it at zero credits.",
  "682 is a zero-credit doctoral orientation, not a course you count.",
  "Milestones","Papers","Zero credit")

R("CSCE 684","Professional Internship","1 to 16","1 to 16 other hours",
  "Approval of the department head, and one semester of graduate work already completed","research","","",
  "Supervised work with practicing computer professionals, off the Texas A&M campus, matched to your professional objective.",
  "The credit can be as small as one hour or as large as sixteen. The work is away from campus. It is training under practitioners, not a substitute research seminar.",
  "You cannot use it to skip the first semester. The catalog requires one semester of graduate work already completed, plus the department head's approval.",
  "Do not confuse an internship's variable credits with research credits in 691. Different purpose, different approver.",
  "684 is off-campus professional work, after a semester here, with the department head's approval.",
  "Off campus","Variable","Approval")

R("CSCE 685","Directed Studies","1 to 12","1 to 12 other hours",
  "As arranged; the catalog describes limited research problems","research","","",
  "Research problems of limited scope whose purpose is to develop research technique.",
  "Limited scope is the definition. This is how you learn the technique of research, not the dissertation itself and not a classroom survey.",
  "Credits vary from 1 to 12. Because the problem is arranged, a plan that says only the number has not named the work.",
  "691 is thesis or dissertation research. 685 is the smaller, technique-building problem. 689 is a special-topics course whose content is set by an instructor.",
  "685 is a bounded research problem for learning technique, worth 1 to 12 credits.",
  "Limited","Technique","Arrange")

R("CSCE 689","Special Topics in...","0 to 4","0 to 4 other hours",
  "Approval of instructor","research","","",
  "Selected topics in a named area of computer science. It may be repeated for credit when the instructor approves.",
  "The title is unfinished on purpose. The semester's topic is the course. Repeating it is allowed, unlike the seminar cap on 681, but only with the instructor and only as a real topic.",
  "Credit can be zero to four. Zero-credit enrollment is possible and should not be summed as if it were a standard three-credit course.",
  "Do not assume two 689s are the same course. The catalog says the topics are selected and the course may be repeated.",
  "689 is a topic the instructor names. Read the semester title before you count it.",
  "Topic","Varies","Repeat")

R("CSCE 691","Research","1 to 23","1 to 23 other hours",
  "As arranged for thesis or dissertation","research","","",
  "Research credit for a thesis or a dissertation, from 1 to 23 hours.",
  "These hours are the research, not a class with lectures. The wide range exists because thesis and dissertation work is registered by the hour.",
  "Summing twenty-three hours into a plan does not create a defense. It only describes the credit range the catalog allows.",
  "Do not use 691 as a placeholder for a missing lecture course. It will not teach compilers, or graphics, or anything else on this map.",
  "691 is thesis or dissertation hours, variable from 1 to 23.",
  "Thesis","Hours","Research")

TRACKS = [
    ("orient", "Start here"),
    ("data", "Data and databases"),
    ("systems", "Systems and architecture"),
    ("security", "Security and cryptography"),
    ("theory", "Theory and algorithms"),
    ("ai", "Artificial intelligence"),
    ("graphics", "Graphics, vision, and making"),
    ("hci", "People and media"),
    ("bridge", "Bridge programming"),
    ("research", "Research and milestones"),
    ("shelf", "Open shelf"),
]

INTROS = {
    "orient": "One short module on how the player, the 80 percent check, and the plan sketch work.",
    "data": "Schemas, engines, retrieval, mining, and visual encoding.",
    "systems": "Operating systems, networks, architecture, compilers, and the machines that run them.",
    "security": "From cryptographic definitions to policy, risk, forensics, and network defense.",
    "theory": "Computability, algorithms, geometry, games, and what a machine is allowed to spend.",
    "ai": "Search, learning, language, speech, agents, and robots.",
    "graphics": "Images, models, light, fabrication, and spatial perception.",
    "hci": "People using systems, including groups and people usually left out.",
    "bridge": "Programming on-ramps the catalog limits by audience.",
    "research": "Seminar, doctorate, internship, and variable research credit. Not lecture courses.",
    "shelf": "Texas A&M paths, then open courses and the playlists that record them. A briefing is not transfer credit and not the lecture itself.",
}

def cr_sort_key(label):
    digits = "".join(ch if ch.isdigit() else " " for ch in label).split()
    if not digits:
        return 0
    if label.strip() in {"0", "0 credits"}:
        return 0
    if "to" in label:
        return -1  # variable
    return int(digits[0])

def build_courses():
    courses = []
    for row in ROWS:
        (code, title, credits, hours, prereq, track, exclusive, cross,
         focus, mechanism, tradeoff, confuse, pearl, t1, t2, t3, source) = row
        if credits[:1].isdigit():
            lead = f"{code}. {title}. {credits} credits. {hours}."
        else:
            lead = f"{code}. {title}. {hours}."
        chunks = [
            lead,
            focus,
            mechanism,
            tradeoff,
            confuse,
            f"Pearl. {pearl}",
        ]
        courses.append({
            "code": code,
            "title": title,
            "credits": credits,
            "hours": hours,
            "prereq": prereq,
            "track": track,
            "exclusive": exclusive,
            "cross": cross,
            "focus": focus,
            "mechanism": mechanism,
            "tradeoff": tradeoff,
            "confuse": confuse,
            "pearl": pearl,
            "topics": [t1, t2, t3],
            "chunks": chunks,
            "source": source,
        })
    return courses

def mcq(rng, question, correct, pool, why):
    distract = []
    for item in pool:
        if item and item != correct and item not in distract:
            distract.append(item)
        if len(distract) == 3:
            break
    while len(distract) < 3:
        distract.append("Not in this catalog entry")
    choices = distract[:3] + [correct]
    rng.shuffle(choices)
    return {"q": question, "choices": choices, "answer": choices.index(correct), "why": why}

def build_quizzes(courses):
    by_code = {c["code"]: c for c in courses}
    credits = [c["credits"] + " credits" if not c["credits"].endswith("credits") and c["credits"] != "0" else ("0 credits" if c["credits"] == "0" else c["credits"] + " credits" if "credit" not in c["credits"] else c["credits"]) for c in courses]
    # normalize credit answer labels
    def credit_label(c):
        raw = c["credits"]
        if not raw[:1].isdigit():
            return raw
        if raw == "0":
            return "0 credits"
        if "to" in raw:
            return raw + " credits"
        if raw == "1":
            return "1 credit"
        return raw + " credits"
    for c in courses:
        c["creditLabel"] = credit_label(c)
    all_credits = [c["creditLabel"] for c in courses]
    all_prereq = [c["prereq"] for c in courses]
    all_focus = [c["focus"] for c in courses]
    all_pearl = [c["pearl"] for c in courses]
    traps = []
    for c in courses:
        if c["exclusive"]:
            traps.append(c["exclusive"])
        elif c["cross"]:
            traps.append(c["cross"])
        else:
            traps.append(c["confuse"])
    for c in courses:
        if c["code"] == "M0":
            rng = random.Random("M0")
            c["quiz"] = [
                mcq(rng, "When is a course marked complete on this device?",
                    "At 80 percent on its check",
                    ["At 50 percent", "Only if you finish every course", "When you open the diagram"],
                    "The studio rule is 80 percent. It is stored on this device, not on a transcript."),
                mcq(rng, "What is this studio?",
                    "A teaching walk of published catalog descriptions",
                    ["An official Texas A&M degree plan", "Academic advising", "An accredited online degree"],
                    "It teaches the catalog. It does not enroll you, advise you, or grant a degree."),
                mcq(rng, "What should you do while a lesson plays?",
                    "Listen and look at the diagram that uses the same words",
                    ["Ignore the diagram", "Open a different course's plates", "Treat stock photos as the figure"],
                    "The plates match the narration. If they do not, they do not belong."),
                mcq(rng, "Where does progress live?",
                    "On this device",
                    ["On a university account", "In the plan sketch only", "It is not saved"],
                    "Completion is local to this browser."),
                mcq(rng, "What is the plan sketch?",
                    "A private list for spotting prerequisite gaps, not an official plan",
                    ["A degree audit", "A registration form", "A transcript"],
                    "The sketch sums credits and warns. It does not enroll you."),
            ]
            continue
        rng = random.Random(c["code"])
        trap_q = "Which catalog rule or caution applies?"
        if c["exclusive"]:
            trap_correct = c["exclusive"]
            trap_why = "The catalog prints an exclusivity rule for this course. Only one of the named pair counts."
        elif c["cross"]:
            trap_correct = c["cross"]
            trap_why = "The catalog cross-lists this course. The other number is the same course, not a second course."
        else:
            trap_correct = c["confuse"]
            trap_why = "The caution is the mix-up this catalog entry is written to prevent."
        load_q = (
            f"What credit load does the catalog give {c['code']}?"
            if c["credits"][:1].isdigit()
            else f"Which limit or format belongs to {c['code']}?"
        )
        load_why = (
            f"The catalog lists {c['creditLabel']}."
            if c["credits"][:1].isdigit()
            else "That is the limit named for this entry. It is not a Texas A&M transcript line unless the entry says so."
        )
        c["quiz"] = [
            mcq(rng, load_q,
                c["creditLabel"], all_credits,
                load_why),
            mcq(rng, f"What prerequisite does the catalog list for {c['code']}?",
                c["prereq"], all_prereq,
                "Read the prerequisite from the catalog line, including instructor approval when that is the door."),
            mcq(rng, f"Which sentence is the emphasis of {c['code']}?",
                c["focus"], all_focus,
                "That sentence is the catalog's emphasis, paraphrased for speech. The others belong to different courses."),
            mcq(rng, trap_q, trap_correct, traps, trap_why),
            mcq(rng, f"Which pearl belongs to {c['code']}?",
                c["pearl"], all_pearl,
                "The pearl is the one-line memory for this course, not a neighbor's."),
        ]
        for item in c["quiz"]:
            assert item["choices"][item["answer"]] in (c["creditLabel"], c["prereq"], c["focus"], trap_correct, c["pearl"])

EXAM_CODES = [
    "CSCE 603","CSCE 608","CSCE 611","CSCE 614","CSCE 701","CSCE 711",
    "CSCE 629","CSCE 627","CSCE 625","CSCE 636","CSCE 641","CSCE 650",
    "CSCE 671","CSCE 632","CSCE 706","CSCE 681","CSCE 691","CSCE 678",
    "CSCE 765","CSCE 670",
]

def svg_for(course):
    a, b, c = course["topics"]
    code = course["code"]
    def label(text, width):
        size = 20 if len(text) <= 12 else 16 if len(text) <= 16 else 14
        return size
    sa, sb, sc = label(a, 180), label(b, 180), label(c, 168)
    # Geometric schematic, not an illustration. Labels are the spoken topics.
    return f'''<svg viewBox="0 0 720 280" role="img" aria-label="Diagram of {html.escape(code)}: {html.escape(a)}, {html.escape(b)}, and {html.escape(c)}">
      <rect width="720" height="280" fill="#f7f4ee"/>
      <text x="28" y="36" fill="#8a8174" font-family="IBM Plex Mono, monospace" font-size="14">{html.escape(code)}</text>
      <rect x="36" y="78" width="180" height="92" rx="8" fill="#0f4c4c"/>
      <text x="126" y="130" text-anchor="middle" fill="#f4fbfa" font-family="IBM Plex Sans, sans-serif" font-size="{sa}" font-weight="600">{html.escape(a)}</text>
      <path d="M216 124 H268" stroke="#1c1916" stroke-width="2" fill="none"/>
      <path d="M260 116 L276 124 L260 132" fill="#1c1916"/>
      <rect x="276" y="78" width="180" height="92" rx="8" fill="#f7f4ee" stroke="#0f4c4c" stroke-width="2"/>
      <text x="366" y="130" text-anchor="middle" fill="#0f4c4c" font-family="IBM Plex Sans, sans-serif" font-size="{sb}" font-weight="600">{html.escape(b)}</text>
      <path d="M456 124 H508" stroke="#1c1916" stroke-width="2" fill="none"/>
      <path d="M500 116 L516 124 L500 132" fill="#1c1916"/>
      <rect x="516" y="78" width="168" height="92" rx="8" fill="#1c1916"/>
      <text x="600" y="130" text-anchor="middle" fill="#f3efe6" font-family="IBM Plex Sans, sans-serif" font-size="{sc}" font-weight="600">{html.escape(c)}</text>
      <text x="28" y="220" fill="#5f584e" font-family="IBM Plex Sans, sans-serif" font-size="16">{html.escape(a)} leads to {html.escape(b)}, then to {html.escape(c)}.</text>
      <text x="28" y="248" fill="#8a8174" font-family="IBM Plex Sans, sans-serif" font-size="14">Teaching diagram. The three words are the lesson, not a vendor architecture.</text>
    </svg>'''

def spread_lectures(rows, limit):
    if len(rows) <= limit:
        return list(rows)
    chosen = []
    seen = set()
    for i in range(limit):
        j = round(i * (len(rows) - 1) / (limit - 1))
        if j in seen:
            continue
        seen.add(j)
        chosen.append(rows[j])
    return chosen


_LECTURE_ROWS = None


def _lecture_rows(key):
    global _LECTURE_ROWS
    if _LECTURE_ROWS is None:
        _LECTURE_ROWS = json.loads(Path(__file__).with_name("csce_lectures.json").read_text())
    return _LECTURE_ROWS[key]


def studio_term(c):
    """Twelve original lectures. Facts come from this course's catalog fields, not a class recording."""
    code, title = c["code"], c["title"]
    t1, t2, t3 = c["topics"]
    focus, mechanism = c["focus"], c["mechanism"]
    tradeoff, confuse, pearl = c["tradeoff"], c["confuse"], c["pearl"]
    prereq = c["prereq"] or "the prerequisite printed on the card"
    hours = c["hours"]
    rule = c.get("exclusive") or c.get("cross") or ""
    rule_line = f" The catalog adds a rule: {rule}" if rule else ""
    lectures = [
        (f"Scope of {code}",
         f"{code}, {title}, is a graduate lecture course. The catalog load is {hours}. You are admitted to the material when this is true: {prereq}.{rule_line} "
         f"This studio lecture is not a Texas A&M class film and not a substitute for enrollment. It is the course's published scope, spoken as a first meeting. "
         f"Write three words before you go on: {t1}, {t2}, and {t3}. Those are the diagram. If a later lecture cannot be hung on one of them, it is not this course."),
        ("The question the course answers",
         f"A graduate course is a question with a method, not a tour of vocabulary. The question of {code} is this. {focus} "
         f"Say it back without looking. If your sentence names a different course, you have the wrong card. "
         f"The rest of the term does not add a second question. It takes this one apart. {t1} is the first cut, {t2} the second, {t3} the third. "
         f"When you are stuck, return here. The question has not changed."),
        ("The mechanism",
         f"Here is the working method, in the catalog's own shape. {mechanism} "
         f"Do not memorize that as a motto. Split it. What is the object the method acts on? What move does it make? What does it refuse to do? "
         f"In {title}, the object shows up as {t1}. The move shows up as {t2}. The limit of the move shows up as {t3}. "
         f"If you can point to each one in a new example, you have the mechanism. If you can only repeat the sentence, you do not."),
        (f"A pass through {t1}",
         f"Take {t1} alone. Forget {t2} and {t3} for this lecture. {focus} "
         f"Now run the method on {t1} only. {mechanism} "
         f"Ask what would count as a finished {t1} inside {title}. A finished piece has an input, a move, and a check. The check is the part students skip. "
         f"Write the check in one line: how you would know {t1} is wrong. That line is the lecture. The diagram marks {t1} because this hour belongs to it."),
        (f"A pass through {t2}",
         f"{t2} is not a synonym for {t1}. If it were, the catalog would not have spent a separate word. "
         f"Hold the same method. {mechanism} "
         f"Change only the object, from {t1} to {t2}. What gets harder? What gets easier? "
         f"A master's lecture earns its hour when the second object breaks a habit you formed on the first. "
         f"State the break in {title} without using the word 'just'. If you need 'just', you are collapsing {t2} back into {t1}."),
        (f"A pass through {t3}",
         f"{t3} is where {code} stops being a definition and becomes a judgment. {tradeoff} "
         f"Read that against {t3}. The method still applies. {mechanism} "
         f"The new work is to say what you give up. Every serious treatment of {title} has a cost that {t1} and {t2} can hide. Name the cost in {t3}. "
         f"If you cannot name a cost, you are still in the overview, and the overview was lecture two."),
        ("How the three meet",
         f"Put {t1}, {t2}, and {t3} on one diagram and make them touch. The question is still the same. {focus} "
         f"The method has to survive the contact. {mechanism} "
         f"Draw an arrow from {t1} to {t2} and label it with the move. Draw an arrow from {t2} to {t3} and label it with the cost. "
         f"If an arrow has no label, the lectures have not met. A term in {title} is this picture, not three separate definitions."),
        ("The tradeoff",
         f"This is the hour for the choice the course will not let you dodge. {tradeoff} "
         f"Choose one side in a sentence, then defend the other side with the same method. {mechanism} "
         f"Use {t1} for the side you prefer and {t3} for the side you are resisting. "
         f"Graduate work in {code} is not picking the fashionable side. It is knowing what the other side still does better. "
         f"Write both sentences. If they do not conflict, you have restated the overview."),
        ("The mistake this course is built to stop",
         f"The catalog writes a caution because people mix this course up. {confuse} "
         f"That mix-up is the trap. {pearl} "
         f"Test yourself. Explain {title} to someone who only knows the neighboring course. If they cannot tell the courses apart, you used the neighbor's words. "
         f"The repair is narrow. Say what {code} does with {t1} that the neighbor does not, and what it refuses to do with {t3}."),
        ("Practice, not a Texas A&M assignment",
         f"No problem set from College Station is reproduced here. Here is a studio problem you can do tonight. "
         f"Pick a small instance of {t1} that you can finish in half an hour. Apply the method. {mechanism} "
         f"Then change one thing so the instance becomes {t2}. Write what broke. Then ask whether {t3} would have predicted the break. {tradeoff} "
         f"Stop when you can point to the break. A long write-up that never names the break is not practice."),
        ("What the prerequisite is for",
         f"The door into {code} is {prereq}. The prerequisite is not a formality and it is not this course taught earlier. "
         f"It is the tool you are assumed to already hold while this course works on {t1}, {t2}, and {t3}. {focus} "
         f"If the tool is missing, the mechanism will look like vocabulary. {mechanism} "
         f"Do not pretend the prerequisite is optional because a lecture is playing. Repair the tool, then come back to lecture three."),
        ("What to remember",
         f"Close {code} with one sentence you could say in a corridor. {pearl} "
         f"Under it, keep the question. {focus} "
         f"Under that, keep the cost. {tradeoff} "
         f"The diagram is still {t1}, {t2}, {t3}. If a free public lecture is attached to a lesson, it is someone else's course on the same subject, not the Texas A&M class. "
         f"If no recording is attached, this spoken lecture is the lesson. Either way the check is the same: you can teach the pearl without the card in front of you."),
    ]
    return [name for name, _ in lectures], [text for _, text in lectures]


def assign_media(c):
    # list id, video count, what to call it, lesson stride, diagram if the track has none
    series = {
        "os": ("MIT 6.S081, Fall 2020", "stack", ["J3LCzufEYt0", "bKfeeIRWrbQ", "NUf1ST0Yrr0", "_lsMqF9nJLo", "TwdtCvKB8RE", "B04t8Y9c8pM"]),
        "dist": ("MIT 6.824 lectures", "stack", ["cQP8WApzIQQ", "gA4YXUJX7t8", "EpIgvowZr00", "M_teob23ZzY", "UzzcUS2OHqo", "64Zp3tzNbpE"]),
        "net": ("Stanford CS144, Fall 2013", "stack", ["1CP6aF09OjI", "mZcthYLpF9Q", "x9RNj6rp6wI", "j05M47PfOEk", "xfyRdpKOObU", "VJoYi6UZiCg"]),
        "compiler": ("Neso Academy, compiler design", "code", ["5ZmFlxrNaN8", "hVaAXOGxMWo", "izGDMglQzgY", "U-rg4nHeYiw", "3rzTRtjUM_I", "_rcDHRk1_zo"]),
        "arch": ("ETH digital design and architecture, 2025", "stack", ["ubhxKNlOlRg", "U-4jmbm8inw", "smHJ1W7S-2Q", "MHlj1bARKPw", "3Sqt0GIFPbc", "DBsDuQwpPsI"]),
        "algo": ("MIT 6.006, Spring 2020", "graph", ["ZA-tUyM_y7s", "IPSaG9RRc-k", "Nu8YGneFCWE", "yndgIDO0zQQ", "76dhtgZt38A", "MAyraVVYB64"]),
        "proof": ("MIT 6.042J, Fall 2010", "graph", ["L3LMbpZIKhQ", "z8HKWUWS-lA", "NuGDkmwEObM", "NuY7szYSXSw", "XX7ePR21Ook", "h9wxtqoa1jY"]),
        "db": ("UC Berkeley CS186", "table", ["j-iq40QBJy8", "YWBJMGibSbs", "GTdiC7y4GnE", "XXGmqV1gIug", "AuHsraGwwNI", "3dvarZJpjCc"]),
        "ml": ("Stanford CS229 lectures", "net", ["UzxYlbK2c7E", "5u4G23_OohI", "HZ4cvaztQEs", "nLKOQfKLUks", "qRJ3GKMOFrE", "qyyJKd-zXRE"]),
        "dl": ("MIT 6.S191 lectures", "net", ["IgSuFYamZas", "zQxm3Upr3_I", "v5JvvbP0d44", "Ly3GAnq2p34", "xWe58WGWmlk", "6QewMQT4iMM"]),
        "vision": ("Stanford CS231n, 2025", "camera", ["2fq9wYslV0A", "pdqofxJeBN8", "dyNGd06MWn4", "25zD5qJHYsk", "f3g1zGdxptI", "aVJy4O5TOk8"]),
        "graphics": ("UC Davis computer graphics", "camera", ["01YSK5gIEYQ", "0NbD-c0Ctdk", "wArGifkRD2A", "gRVxv8kWl0Q", "mpTl003EXCY", "og7hOFypKpQ"]),
        "sec": ("MIT 6.858, Fall 2014", "lock", ["GqmQg-cszw4", "r4KjHEgg9Wg", "xSQxaie_h1o", "dNl22h1kW1k", "TQhmua7Z2cY", "I0Psvvky-44"]),
        "crypto": ("MIT 6.5630, Fall 2023", "lock", ["iqSMRO78UD0", "SRY3F9vtJHo", "db1xAyO4YgM", "Ob1fFHAXlJQ", "gp21TApWetE", "L8PXcZ2ExiU"]),
        "hes": ("Harvard Extension AI stack, then Stanford CS229", "net", ["Q8fftkUjz3M", "UzxYlbK2c7E", "5u4G23_OohI", "HZ4cvaztQEs", "nLKOQfKLUks", "qRJ3GKMOFrE"]),
    }
    by_code = {
        "S06": "os", "S19": "os", "S07": "dist", "S22": "dist", "S11": "net", "S21": "net",
        "S18": "compiler", "S25": "arch", "S26": "algo", "S27": "proof", "S05": "db", "S10": "db",
        "S12": "ml", "S08": "ml", "S28": "ml", "S09": "dl", "S31": "dl", "S29": "vision",
        "S13": "vision", "S03": "graphics", "S04": "sec", "S32": "hes",
    }
    by_track = {
        "orient": "proof", "data": "db", "systems": "os", "security": "sec", "theory": "algo",
        "ai": "ml", "graphics": "graphics", "hci": "ml", "bridge": "algo", "research": "lab",
        "shelf": "algo",
    }
    diagrams = {
        "orient": "path", "data": "table", "systems": "stack", "security": "lock", "theory": "graph",
        "ai": "net", "graphics": "camera", "hci": "people", "bridge": "code", "research": "lab",
    }
    blob = " ".join([c["code"], c["title"], c["focus"], c.get("track", "")]).lower()
    fell_back = False
    key = by_code.get(c["code"])
    if not key:
        if any(w in blob for w in ("cryptograph", "cipher")):
            key = "crypto"
        elif "security" in blob or "malware" in blob or "forensic" in blob:
            key = "sec"
        elif "compiler" in blob or "parsing" in blob or "lexical" in blob:
            key = "compiler"
        elif "operating" in blob or "kernel" in blob:
            key = "os"
        elif "distributed" in blob or "replication" in blob:
            key = "dist"
        elif "network" in blob or "router" in blob:
            key = "net"
        elif "architect" in blob or "pipeline" in blob:
            key = "arch"
        elif any(w in blob for w in ("database", "sql", "schema", "relation")):
            key = "db"
        elif "deep learning" in blob or "neural" in blob:
            key = "dl"
        elif "vision" in blob or "recognition" in blob:
            key = "vision"
        elif "graphic" in blob or "render" in blob or "shader" in blob:
            key = "graphics"
        elif "robot" in blob:
            key = "vision"
        elif "algorithm" in blob or "computab" in blob:
            key = "algo" if "algorithm" in blob else "proof"
        elif "machine learning" in blob:
            key = "ml"
        else:
            key = by_track.get(c["track"], "algo")
            fell_back = True
    if c["code"] == "CSCE 625":
        key = "ml"
        fell_back = False
    if key == "lab":
        key = "algo"
    label, series_diagram, fallback_ids = series[key]
    c["diagram"] = diagrams.get(c["track"], series_diagram)
    c["lectureTitle"] = label
    if str(c["code"]).startswith("CSCE"):
        names, texts = studio_term(c)
        c["chunks"] = texts
        if fell_back:
            chosen = []
        elif key == "hes":
            chosen = spread_lectures([(vid, label) for vid in fallback_ids], 12)
        else:
            chosen = spread_lectures(_lecture_rows(key), 12)
        c["lectureNames"] = names
        c["lectureIds"] = [chosen[i][0] if i < len(chosen) else "" for i in range(len(names))]
        c["freeNames"] = [chosen[i][1] if i < len(chosen) else "" for i in range(len(names))]
        c["lecture"] = next((vid for vid in c["lectureIds"] if vid), "")
    else:
        if key == "hes":
            rows = [(vid, label) for vid in fallback_ids]
        else:
            rows = _lecture_rows(key)
        chosen = spread_lectures(rows, 6)
        c["lectureIds"] = [vid for vid, _name in chosen]
        c["lectureNames"] = [name for _vid, name in chosen]
        c["freeNames"] = list(c["lectureNames"])
        c["lecture"] = c["lectureIds"][0]
        while len(c["chunks"]) < len(chosen):
            n = len(c["chunks"]) + 1
            name = chosen[n - 1][1]
            c["chunks"].append(
                f"Lecture {n}: {name}. Watch this recording with the lesson. It is a public lecture on the subject, not a Texas A&M class film."
            )
        while len(c["lectureIds"]) < len(c["chunks"]):
            c["lectureIds"].append(c["lectureIds"][-1])
            c["lectureNames"].append(c["lectureNames"][-1])
            c["freeNames"].append(c["freeNames"][-1])
    reads = {
        "S06": ("https://pages.cs.wisc.edu/~remzi/OSTEP/", "Three Easy Pieces"),
        "S20": ("https://pages.cs.wisc.edu/~remzi/OSTEP/", "Three Easy Pieces"),
        "S32": ("https://extension.harvard.edu/academics/programs/data-science-artificial-intelligence-graduate-program/", "Harvard degree page"),
    }
    if reads.get(c["code"]):
        c["readUrl"], c["readTitle"] = reads[c["code"]]
    elif c.get("source"):
        c["readUrl"] = c["source"]
        c["readTitle"] = "Source page"
    elif str(c["code"]).startswith("CSCE"):
        c["readUrl"] = "https://catalog.tamu.edu/graduate/course-descriptions/csce/"
        c["readTitle"] = "CSCE catalog"


def main():
    from csce_shelf import SHELF
    ROWS.extend(SHELF)
    courses = build_courses()
    build_quizzes(courses)
    codes = [c["code"] for c in courses]
    assert len(codes) == len(set(codes))
    catalog_codes = {c["code"] for c in courses if c["code"] != "M0"}
    for code in EXAM_CODES:
        assert code in catalog_codes, code
    # Attach svg after quiz so it isn't huge inside quiz generation
    for c in courses:
        assign_media(c)
        assert c["diagram"] and len(c["lectureIds"]) == len(c["chunks"]) and c["chunks"]
    payload = {
        "tracks": [{"id": i, "label": lab, "intro": INTROS[i]} for i, lab in TRACKS],
        "courses": courses,
        "examCodes": EXAM_CODES,
        "degree": {
            "courses": ["S26", "S06", "S07", "S25", "S05", "S12", "S32", "S29", "S18", "S04"],
            "courseHourMin": 88,
            "courseHourMax": 100,
            "capHours": 200,
            "totalMin": 1080,
            "totalMax": 1200,
            "credits": 36,
            "milestones": [
                {"id": "proposal", "title": "Proposal", "hours": 20, "text": "Name the question, which two courses it uses, and what done means."},
                {"id": "build", "title": "Build", "hours": 120, "text": "Do the project: a system, a lab, or a paper."},
                {"id": "write", "title": "Write-up", "hours": 40, "text": "What you built, what failed, and what you would measure."},
                {"id": "defense", "title": "Defense", "hours": 20, "text": "Explain it out loud, then mark this."},
            ],
        },
    }
    missing = [code for code in payload["degree"]["courses"] if code not in {c["code"] for c in courses}]
    assert not missing, missing
    data = json.dumps(payload, ensure_ascii=False).replace("<", "\\u003c")
    page = TEMPLATE.replace("__DATA__", data)
    out = Path("/workspace/public/studio/CSCE-Masters-Studio.html")
    out.write_text(page, encoding="utf-8")
    print(f"courses {len(courses)} bytes {out.stat().st_size} -> {out}")

TEMPLATE = r'''<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>CSCE Master's Studio</title>
<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,560;9..144,650&family=IBM+Plex+Mono:wght@500&family=IBM+Plex+Sans:wght@400;500;600&display=swap"/>
<style>
  :root {
    --bg: #efeae1;
    --ink: #1c1916;
    --muted: #5f584e;
    --faint: #8a8174;
    --card: #f7f4ee;
    --line: #e0d6c8;
    --accent: #0f4c4c;
    --on-accent: #f4fbfa;
    --brass: #8a5a2a;
  }
  * { box-sizing: border-box; }
  html, body { margin: 0; background: var(--bg); color: var(--ink); font-family: "IBM Plex Sans", sans-serif; font-size: 17px; line-height: 1.5; }
  select, input[type="text"] { font: inherit; color: var(--ink); background: var(--card); border: 1px solid var(--line); border-radius: 8px; padding: 8px; max-width: 100%; }
  button { color: var(--ink); background: transparent; }
  a { color: var(--accent); }
  .wrap { max-width: 980px; margin: 0 auto; padding: 20px 16px 128px; }
  header.top { display: flex; justify-content: space-between; gap: 12px; align-items: flex-end; flex-wrap: wrap; }
  .brand { font-family: Fraunces, Georgia, serif; font-size: 1.7rem; font-weight: 560; letter-spacing: -0.02em; margin: 0; }
  .kicker { font-family: "IBM Plex Mono", monospace; font-size: 0.75rem; letter-spacing: 0.08em; text-transform: uppercase; color: var(--brass); margin: 0 0 4px; }
  .progress { margin: 14px 0 8px; height: 6px; background: var(--line); border-radius: 99px; }
  .progress > span { display: block; height: 100%; background: var(--accent); border-radius: 99px; }
  .muted { color: var(--muted); }
  .row { display: flex; gap: 8px; flex-wrap: wrap; align-items: center; }
  .chip, .btn, .choice, .card { border: 1px solid var(--line); background: var(--card); border-radius: 10px; }
  .chip { padding: 8px 12px; min-height: 44px; }
  .chip[aria-pressed="true"], .btn.primary { background: var(--accent); color: var(--on-accent); border-color: var(--accent); }
  .btn { padding: 10px 14px; min-height: 44px; }
  .btn.ghost { background: transparent; }
  input[type="search"] { flex: 1; min-width: 180px; min-height: 44px; border-radius: 10px; border: 1px solid var(--line); background: var(--card); color: var(--ink); padding: 0 12px; font: inherit; }
  .section { margin-top: 28px; }
  h2 { font-family: Fraunces, Georgia, serif; font-weight: 560; font-size: 1.35rem; margin: 0 0 6px; }
  .grid { display: grid; gap: 10px; }
  @media (min-width: 800px) { .grid.cards { grid-template-columns: 1fr 1fr; } }
  .card { text-align: left; padding: 14px 14px 12px; width: 100%; }
  .card:hover { border-color: var(--accent); }
  .code { font-family: "IBM Plex Mono", monospace; color: var(--brass); font-size: 0.82rem; }
  .card h3 { margin: 2px 0 6px; font-size: 1.05rem; font-weight: 600; }
  .card p { margin: 0; color: var(--muted); font-size: 0.95rem; }
  .done-dot { float: right; color: var(--accent); font-family: "IBM Plex Mono", monospace; font-size: 0.75rem; }
  .diagram { background: var(--card); border: 1px solid var(--line); border-radius: 12px; overflow: hidden; }
  .diagram svg { width: 100%; height: auto; max-height: 210px; display: block; }
  .lecture { background: #1c1916; border-radius: 12px; overflow: hidden; margin: 12px 0; }
  .lecture iframe { width: 100%; height: 42vh; min-height: 240px; border: 0; display: block; background: #1c1916; }
  .lecture p { color: #d9d3c7; margin: 0; padding: 8px 12px 12px; font-size: 14px; }
  .studio-lecture { background: #1c1916; color: #f4fbfa; border-radius: 12px; padding: 22px 20px; min-height: 200px; }
  .studio-lecture h3 { margin: 6px 0 8px; font-size: 1.35rem; }
  .talk { font-size: 1.05rem; line-height: 1.6; margin: 14px 0 8px; }
  .talk h3 { margin: 0 0 8px; }
  .chunk { margin: 8px 0; color: var(--faint); }
  .chunk.on { color: var(--ink); font-weight: 600; }
  .pearl { border-left: 3px solid var(--accent); padding: 8px 12px; margin: 12px 0; }
  .film { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
  .plate { min-width: 140px; min-height: 72px; padding: 10px; text-align: left; }
  .plate[aria-pressed="true"] { border-color: var(--accent); background: var(--accent); color: var(--on-accent); }
  .dock { position: fixed; left: 0; right: 0; bottom: 0; z-index: 5; background: #efeae1; border-top: 1px solid var(--line); padding: 10px 16px calc(10px + env(safe-area-inset-bottom)); display: flex; gap: 8px; flex-wrap: wrap; }
  .choice { display: block; width: 100%; text-align: left; padding: 12px; margin: 8px 0; min-height: 48px; }
  .choice[aria-pressed="true"] { border-color: var(--accent); }
  .choice.right { border-color: var(--accent); background: var(--accent); color: var(--on-accent); }
  .choice.wrong { border-color: var(--ink); }
  .warn { background: var(--card); border: 1px solid var(--line); border-radius: 10px; padding: 10px 12px; margin: 8px 0; }
  .sheet { max-width: 720px; }
  @media (max-width: 640px) {
    .hide-sm { display: none; }
    .brand { font-size: 1.45rem; }
  }
  @media print {
    .noprint { display: none !important; }
    body { background: white; }
  }
  @media (prefers-reduced-motion: reduce) { * { transition: none !important; } }
</style>
</head>
<body>
<div class="wrap" id="app"></div>
<script id="payload" type="application/json">__DATA__</script>
<script>
const DATA = JSON.parse(document.getElementById("payload").textContent);
const COURSES = DATA.courses;
const BY = Object.fromEntries(COURSES.map(c => [c.code, c]));
const KEY = "csce-masters-v1";
const state = load();
let view = "home";
let code = "M0";
let chunk = 0;
let rate = 1;
let playing = false;
let track = "all";
let query = "";
let qi = 0;
let picks = [];
let revealed = false;
let drillI = 0;
let drillScore = 0;
let drillPick = null;
let examQs = [];
let plate = 0;
let frameMode = "video";

function load() {
  try {
    const s = JSON.parse(localStorage.getItem(KEY) || "{}");
    return {
      done: s.done || {},
      sketch: s.sketch || [],
      best: s.best || {},
      hours: s.hours || {},
      capHours: s.capHours || 0,
      capDone: s.capDone || {},
      capTitle: s.capTitle || "",
      degree: Array.isArray(s.degree) && s.degree.length === 10 ? s.degree : null,
    };
  } catch (e) {
    return { done: {}, sketch: [], best: {}, hours: {}, capHours: 0, capDone: {}, capTitle: "", degree: null };
  }
}
function save() { localStorage.setItem(KEY, JSON.stringify(state)); }
function course() { return BY[code]; }
function doneCount() { return COURSES.filter(c => state.done[c.code]).length; }

function creditNumber(c) {
  if (!c || c.code === "M0") return null;
  if (String(c.credits).includes("to")) return null;
  const n = parseInt(c.credits, 10);
  return Number.isFinite(n) ? n : null;
}
function mentions(text) {
  const found = String(text || "").match(/CSCE\s*\d{3}/g) || [];
  return [...new Set(found.map(s => s.replace(/\s+/, " ").replace(/CSCE(\d)/, "CSCE $1")))];
}

function speak(text, then) {
  if (!window.speechSynthesis) { if (then) then(); return; }
  window.speechSynthesis.cancel();
  const u = new SpeechSynthesisUtterance(text);
  u.rate = rate;
  u.onend = () => { if (then) then(); };
  window.speechSynthesis.speak(u);
}
function stopSpeak() {
  playing = false;
  if (window.speechSynthesis) window.speechSynthesis.cancel();
}
function playChunk() {
  const c = course();
  playing = true;
  render();
  speak(c.chunks[chunk], () => {
    if (!playing) return;
    if (chunk < c.chunks.length - 1) { chunk += 1; playChunk(); }
    else { playing = false; render(); }
  });
}

function prereqNotes(selected) {
  const set = new Set(selected);
  const notes = [];
  selected.forEach(id => {
    const c = BY[id];
    if (!c) return;
    if (c.exclusive) notes.push(c.code + ": " + c.exclusive);
    const refs = mentions(c.prereq).filter(x => x !== c.code);
    const inside = refs.filter(x => BY[x]);
    const outside = refs.filter(x => !BY[x]);
    if (inside.length && !inside.some(x => set.has(x))) {
      const alt = outside.length ? " An alternative sits outside this extract: " + outside.join(" or ") + "." : "";
      notes.push(c.code + " still needs " + inside.join(" or ") + " in the sketch, unless you already have the outside prerequisite." + alt);
    } else if (!inside.length && outside.length) {
      notes.push(c.code + " lists " + outside.join(", ") + ", which is outside this catalog extract.");
    }
  });
  return notes;
}

function examBuild() {
  examQs = DATA.examCodes.map(id => {
    const c = BY[id];
    const item = c.quiz[2];
    return { code: id, ...item, q: c.code + ". " + item.q };
  });
}

function drillQuestion() {
  const pool = COURSES.filter(c => c.code !== "M0");
  const c = pool[drillI % pool.length];
  const rngChoices = c.quiz[1];
  return { code: c.code, title: c.title, item: rngChoices, q: "What is the catalog prerequisite for " + c.code + " " + c.title + "?" };
}

function render() {
  const app = document.getElementById("app");
  const n = doneCount();
  const total = COURSES.length;
  const pct = Math.round(100 * n / total);
  const slotKey = view === "player" ? code + ":" + chunk + ":" + frameMode : "";
  const oldFrame = document.querySelector("iframe.lecture");
  const oldKey = oldFrame ? oldFrame.dataset.key : "";
  let body = "";
  if (view === "home") body = viewHome();
  else if (view === "player") body = viewPlayer();
  else if (view === "quiz") body = viewQuiz(course().quiz, "Course check");
  else if (view === "exam") body = viewQuiz(examQs, "Catalog check");
  else if (view === "drill") body = viewDrill();
  else if (view === "plan") body = viewPlan();
  else if (view === "degree") body = viewDegree();
  else if (view === "sheet") body = viewSheet();
  app.innerHTML = `
    <header class="top noprint">
      <div>
        <p class="kicker">Teaching studio · not a degree</p>
        <h1 class="brand">CSCE Master's Studio</h1>
      </div>
      <div class="row">
        <a class="btn" href="/studio/NucMed-Board-Studio.html">Nuclear medicine studio</a>
      </div>
    </header>
    <p class="muted noprint">${n} / ${total} courses at 80 percent</p>
    <div class="progress noprint" aria-hidden="true"><span style="width:${pct}%"></span></div>
    ${body}`;
  if (oldFrame && oldKey && oldKey === slotKey) {
    const host = document.getElementById("lecture-slot");
    if (host) host.replaceChildren(oldFrame);
  }
}

function viewHome() {
  const chips = [`<button class="chip" data-act="track" data-arg="all" aria-pressed="${track==="all"}">All</button>`]
    .concat(DATA.tracks.filter(t => t.id !== "orient").map(t =>
      `<button class="chip" data-act="track" data-arg="${t.id}" aria-pressed="${track===t.id}">${t.label}</button>`)).join("");
  const sections = DATA.tracks.filter(t => t.id === "orient" || track === "all" || track === t.id).map(t => {
    const list = COURSES.filter(c => c.track === t.id).filter(c => {
      const hay = (c.code + " " + c.title + " " + c.focus).toLowerCase();
      return !query || hay.includes(query);
    });
    if (!list.length) return "";
    return `<section class="section"><h2>${t.label}</h2><p class="muted">${t.intro}</p><div class="grid cards">${list.map(card).join("")}</div></section>`;
  }).join("");
  return `
    <p>Each CSCE course is a twelve-lecture term. A free public lecture plays when one exists on that subject. The lectures that have no free recording are written and spoken here. None of them are Texas A&M class films.</p>
    <div class="row noprint" style="margin:12px 0">
      <input id="q" type="search" placeholder="Search courses" value="${escapeHtml(query)}" data-act="nop"/>
      <button class="btn" data-act="search">Search</button>
    </div>
    <div class="row noprint">${chips}</div>
    <div class="row noprint" style="margin-top:12px">
      <button class="btn primary" data-act="degree">Degree log</button>
      <button class="btn" data-act="open" data-arg="M0">How to study</button>
      <button class="btn" data-act="plan">Plan sketch</button>
      <button class="btn" data-act="drill">Prerequisite drill</button>
      <button class="btn" data-act="exam">20-question catalog check</button>
    </div>
    ${sections || `<p class="section">No course matches that search.</p>`}`;
}
function card(c) {
  const mark = state.done[c.code] ? `<span class="done-dot">Done</span>` : "";
  return `<button class="card" data-act="open" data-arg="${c.code}">${mark}<div class="code">${c.code} · ${escapeHtml(c.creditLabel)}</div><h3>${escapeHtml(c.title)}</h3><p>${escapeHtml(c.focus)}</p></button>`;
}
function shortLabel(s) {
  s = String(s || "");
  return s.length > 42 ? s.slice(0, 41) + "…" : s;
}
function lectureSrc(c, i) {
  const ids = c.lectureIds || [];
  const id = ids[i] || "";
  if (!id) return "";
  return "https://www.youtube-nocookie.com/embed/" + id + "?rel=0";
}
function diagramSvg(c, i) {
  const kind = c.diagram || "path";
  const topics = (c.topics || ["Lesson"]).map(shortLabel);
  const label = (c.lectureNames && c.lectureNames[i]) ? shortLabel(c.lectureNames[i]) : topics[i % topics.length];
  const on = i % 4;
  const ink = "#1c1916";
  const accent = "#0f4c4c";
  const brass = "#8a5a2a";
  const paper = "#f7f4ee";
  let body = "";
  if (kind === "table") {
    const rows = [0, 1, 2, 3].map(r => {
      const y = 78 + r * 42;
      const fill = r === on ? accent : paper;
      const color = r === on ? "#f4fbfa" : ink;
      return `<rect x="36" y="${y}" width="300" height="36" rx="6" fill="${fill}" stroke="${accent}"/>
        <text x="52" y="${y + 24}" fill="${color}" font-size="15" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[r % topics.length])}</text>
        <rect x="250" y="${y + 8}" width="70" height="20" rx="4" fill="${r === on ? brass : "#e0d6c8"}"/>`;
    }).join("");
    body = rows + `<path d="M348 150 H420" stroke="${ink}" stroke-width="2"/><path d="M408 142 L424 150 L408 158" fill="${ink}"/>
      <rect x="436" y="110" width="250" height="80" rx="8" fill="${accent}"/>
      <text x="561" y="156" text-anchor="middle" fill="#f4fbfa" font-size="16" font-family="IBM Plex Sans, sans-serif">joined result</text>`;
  } else if (kind === "stack") {
    const names = ["Program", "Calls", "Kernel", "Machine"];
    body = names.map((name, r) => {
      const y = 78 + r * 48;
      const fill = r === on ? accent : paper;
      const color = r === on ? "#f4fbfa" : accent;
      return `<rect x="80" y="${y}" width="560" height="40" rx="8" fill="${fill}" stroke="${accent}" stroke-width="2"/>
        <text x="100" y="${y + 26}" fill="${color}" font-size="16" font-family="IBM Plex Sans, sans-serif">${name}</text>
        <text x="620" y="${y + 26}" text-anchor="end" fill="${color}" font-size="14" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[r % topics.length])}</text>`;
    }).join("") + `<path d="M48 90 V250" stroke="${brass}" stroke-width="3"/><path d="M40 ${98 + on * 48} H78" stroke="${brass}" stroke-width="3"/>`;
  } else if (kind === "lock") {
    body = `<rect x="70" y="120" width="200" height="120" rx="10" fill="${paper}" stroke="${accent}" stroke-width="2"/>
      <text x="170" y="188" text-anchor="middle" fill="${accent}" font-size="16" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[0])}</text>
      <rect x="450" y="120" width="200" height="120" rx="10" fill="${on % 2 ? accent : paper}" stroke="${accent}" stroke-width="2"/>
      <text x="550" y="188" text-anchor="middle" fill="${on % 2 ? "#f4fbfa" : accent}" font-size="16" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[1] || topics[0])}</text>
      <path d="M270 180 H450" stroke="${brass}" stroke-width="4"/>
      <circle cx="360" cy="180" r="22" fill="${paper}" stroke="${brass}" stroke-width="3"/>
      <rect x="352" y="180" width="16" height="18" fill="${brass}"/>
      <text x="360" y="110" text-anchor="middle" fill="${ink}" font-size="15" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[2] || "channel")}</text>`;
  } else if (kind === "graph") {
    const nodes = [[140, 160], [300, 90], [300, 230], [480, 160], [620, 100]];
    const edges = [[0, 1], [0, 2], [1, 3], [2, 3], [3, 4]];
    const lines = edges.map(([a, b]) => `<line x1="${nodes[a][0]}" y1="${nodes[a][1]}" x2="${nodes[b][0]}" y2="${nodes[b][1]}" stroke="${ink}" stroke-width="2"/>`).join("");
    const dots = nodes.map((p, idx) => {
      const hot = idx === on || idx === on + 1;
      return `<circle cx="${p[0]}" cy="${p[1]}" r="18" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>`;
    }).join("");
    body = lines + dots + `<text x="140" y="200" text-anchor="middle" fill="${ink}" font-size="13" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[0])}</text>`;
  } else if (kind === "net") {
    const cols = [120, 360, 600];
    body = cols.map((x, col) => {
      return [0, 1, 2].map(row => {
        const y = 100 + row * 60;
        const hot = col === on % 3;
        const prev = cols[col - 1];
        const link = col ? [0, 1, 2].map(r => `<line x1="${prev + 16}" y1="${100 + r * 60}" x2="${x - 16}" y2="${y}" stroke="#c4b8a8" stroke-width="1.5"/>`).join("") : "";
        return link + `<circle cx="${x}" cy="${y}" r="16" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>`;
      }).join("");
    }).join("") + `<text x="120" y="78" text-anchor="middle" fill="${ink}" font-size="13" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[0])}</text>
      <text x="360" y="78" text-anchor="middle" fill="${ink}" font-size="13" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[1] || "")}</text>
      <text x="600" y="78" text-anchor="middle" fill="${ink}" font-size="13" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[2] || "")}</text>`;
  } else if (kind === "camera") {
    body = `<polygon points="80,200 80,100 200,70 200,230" fill="${accent}"/>
      <polygon points="200,150 520,70 520,230" fill="none" stroke="${brass}" stroke-width="2"/>
      <rect x="520" y="80" width="16" height="140" fill="${ink}"/>
      <rect x="560" y="${100 + (on * 12)}" width="120" height="80" fill="${paper}" stroke="${accent}" stroke-width="2"/>
      <text x="620" y="${148 + (on * 12)}" text-anchor="middle" fill="${accent}" font-size="14" font-family="IBM Plex Sans, sans-serif">${escapeHtml(label)}</text>`;
  } else if (kind === "people") {
    body = [0, 1, 2].map(p => {
      const x = 120 + p * 180;
      const hot = p === on % 3;
      return `<circle cx="${x}" cy="120" r="28" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>
        <path d="M${x - 40} 230 Q${x} 170 ${x + 40} 230" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>
        <text x="${x}" y="260" text-anchor="middle" fill="${ink}" font-size="13" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[p % topics.length])}</text>`;
    }).join("") + `<rect x="560" y="100" width="120" height="80" rx="6" fill="${ink}"/>`;
  } else if (kind === "code") {
    body = [0, 1, 2, 3, 4].map(r => {
      const y = 80 + r * 36;
      const hot = r === (i % 5);
      const indent = 50 + (r % 3) * 24;
      return `<rect x="40" y="${y}" width="${hot ? 640 : 520}" height="28" rx="4" fill="${hot ? accent : "#e7e0d4"}"/>
        <text x="${indent}" y="${y + 19}" fill="${hot ? "#f4fbfa" : ink}" font-size="14" font-family="IBM Plex Mono, monospace">${escapeHtml(topics[r % topics.length])}</text>`;
    }).join("");
  } else if (kind === "lab") {
    body = [0, 1, 2, 3].map(r => {
      const x = 40 + r * 170;
      const hot = r <= on;
      return `<rect x="${x}" y="100" width="150" height="120" rx="8" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>
        <text x="${x + 75}" y="168" text-anchor="middle" fill="${hot ? "#f4fbfa" : accent}" font-size="15" font-family="IBM Plex Sans, sans-serif">${escapeHtml(topics[r % topics.length])}</text>`;
    }).join("");
  } else {
    body = [0, 1, 2, 3, 4, 5].map(r => {
      const x = 50 + r * 110;
      const hot = r === (i % 6);
      return `<circle cx="${x}" cy="160" r="${hot ? 26 : 16}" fill="${hot ? accent : paper}" stroke="${accent}" stroke-width="2"/>
        ${r < 5 ? `<line x1="${x + 20}" y1="160" x2="${x + 90}" y2="160" stroke="${ink}"/>` : ""}`;
    }).join("") + `<text x="360" y="230" text-anchor="middle" fill="${ink}" font-size="16" font-family="IBM Plex Sans, sans-serif">${escapeHtml(label)}</text>`;
  }
  return `<svg viewBox="0 0 720 300" role="img" aria-label="Diagram of ${escapeHtml(c.code)}, lesson ${i + 1}: ${escapeHtml(label)}">
    <rect width="720" height="300" fill="${paper}"/>
    <text x="24" y="28" fill="#8a8174" font-family="IBM Plex Mono, monospace" font-size="13">${escapeHtml(c.code)} · lesson ${i + 1}</text>
    <text x="24" y="52" fill="${ink}" font-family="IBM Plex Sans, sans-serif" font-size="18" font-weight="600">${escapeHtml(label)}</text>
    ${body}
  </svg>`;
}
function viewPlayer() {
  const c = course();
  const sketched = state.sketch.includes(c.code);
  const lessons = c.chunks.map((_, i) => {
    const label = c.chunks.length > 8 ? String(i + 1) : "Lesson " + (i + 1);
    return `<button class="chip" data-act="lesson" data-arg="${i}" aria-pressed="${chunk===i}">${label}</button>`;
  }).join("");
  const videoId = frameMode === "read" ? "" : ((c.lectureIds || [])[chunk] || "");
  const src = frameMode === "read" && c.readUrl ? c.readUrl : (videoId ? lectureSrc(c, chunk) : "");
  const vkey = code + ":" + chunk + ":" + frameMode + ":" + (videoId || "studio");
  const readBtn = c.readUrl ? `<button class="chip" data-act="frame" data-arg="read" aria-pressed="${frameMode==="read"}">${escapeHtml(c.readTitle || "Reading")}</button>` : "";
  const freeName = (c.freeNames && c.freeNames[chunk]) || "";
  const lectureHead = escapeHtml((c.lectureNames && c.lectureNames[chunk]) || c.title);
  const frame = src
    ? `<div class="lecture"><div id="lecture-slot"><iframe class="lecture" data-key="${vkey}" src="${src}" title="Lecture for ${escapeHtml(c.code)} lesson ${chunk + 1}" allow="accelerometer; autoplay; encrypted-media; picture-in-picture; fullscreen" allowfullscreen referrerpolicy="strict-origin-when-cross-origin"></iframe></div><p>Lesson ${chunk + 1} of ${c.chunks.length}. ${escapeHtml(freeName || c.lectureTitle)}. Free public lecture on this subject, not a Texas A&M class film. The text under it is the studio lecture.</p></div>`
    : `<div class="studio-lecture" id="lecture-slot"><p class="kicker">Studio lecture · lesson ${chunk + 1} of ${c.chunks.length}</p><h3>${lectureHead}</h3><p>No free recording covers this hour. Press Play. The studio reads the lecture. The diagram is the figure. This is not a class film.</p></div>`;
  return `
    <div class="row noprint" style="margin:10px 0">
      <button class="btn" data-act="home">Course map</button>
      <span class="code">${c.code}</span>
      <span class="muted hide-sm">${escapeHtml(c.hours)}</span>
    </div>
    <h2>${escapeHtml(c.title)}</h2>
    <p class="muted">Prerequisite: ${escapeHtml(c.prereq)}</p>
    <div class="film noprint" aria-label="Lessons">${lessons}
      <button class="chip" data-act="frame" data-arg="video" aria-pressed="${frameMode==="video"}">Lecture</button>
      ${readBtn}
    </div>
    <div class="diagram" id="diagram">${diagramSvg(c, chunk)}</div>
    ${frame}
    <article class="talk"><h3>${lectureHead}</h3><p>${escapeHtml(c.chunks[chunk] || "")}</p></article>
    <div class="pearl"><strong>Pearl.</strong> ${escapeHtml(c.pearl)}</div>
    ${c.exclusive ? `<div class="warn">${escapeHtml(c.exclusive)}</div>` : ""}
    ${c.cross ? `<div class="warn">${escapeHtml(c.cross)}</div>` : ""}
    <div class="dock noprint">
      <button class="btn" data-act="prev">Previous</button>
      <button class="btn primary" data-act="play">${playing ? "Pause" : "Play"}</button>
      <button class="btn" data-act="next">Next</button>
      <button class="btn" data-act="rate">Speed ${rate}</button>
      <button class="btn" data-act="quiz">Course check</button>
      <button class="btn" data-act="sheet">Study sheet</button>
      ${c.source ? `<button class="btn" data-act="copy" data-arg="${escapeHtml(c.source)}">Copy source link</button>` : ""}
      <button class="btn" data-act="toggle-sketch">${sketched ? "In sketch" : "Add to sketch"}</button>
    </div>`;
}
function viewQuiz(items, title) {
  if (!items || !items.length) return `<p>No questions.</p>`;
  const item = items[qi];
  const choices = item.choices.map((ch, i) => {
    let cls = "choice";
    if (revealed && i === item.answer) cls += " right";
    else if (revealed && picks[qi] === i && i !== item.answer) cls += " wrong";
    else if (!revealed && picks[qi] === i) cls += "";
    const pressed = picks[qi] === i;
    return `<button class="${cls}" data-act="pick" data-arg="${i}" aria-pressed="${pressed}" ${revealed?"disabled":""}>${escapeHtml(ch)}</button>`;
  }).join("");
  const why = revealed ? `<div class="pearl">${escapeHtml(item.why)}</div>` : "";
  const last = qi === items.length - 1;
  let end = "";
  if (revealed && last) {
    const score = items.reduce((s, it, idx) => s + (picks[idx] === it.answer ? 1 : 0), 0);
    const pct = Math.round(100 * score / items.length);
    const pass = pct >= 80;
    end = `<div class="warn"><strong>${score} / ${items.length} · ${pct} percent.</strong> ${pass ? "That meets 80 percent." : "Below 80 percent. You can retake."}</div>`;
  }
  return `
    <div class="row noprint"><button class="btn" data-act="${view==="exam"?"home":"player"}">Back</button></div>
    <h2>${title}</h2>
    <p class="code">Question ${qi+1} of ${items.length}</p>
    <p>${escapeHtml(item.q)}</p>
    ${choices}
    ${why}
    ${end}
    <div class="dock noprint">
      ${revealed && !last ? `<button class="btn primary" data-act="qnext">Next question</button>` : ""}
      ${!revealed ? `<button class="btn primary" data-act="reveal" ${picks[qi]==null?"disabled":""}>Check</button>` : ""}
      ${revealed && last ? `<button class="btn" data-act="retake">Retake</button>` : ""}
    </div>`;
}
function viewDrill() {
  const d = drillQuestion();
  const item = d.item;
  const choices = item.choices.map((ch, i) => {
    let cls = "choice";
    if (drillPick != null && i === item.answer) cls += " right";
    else if (drillPick === i) cls += " wrong";
    return `<button class="${cls}" data-act="drill-pick" data-arg="${i}" ${drillPick!=null?"disabled":""}>${escapeHtml(ch)}</button>`;
  }).join("");
  const why = drillPick != null ? `<div class="pearl">${escapeHtml(item.why)} Score ${drillScore} correct on this pass.</div>` : "";
  return `
    <div class="row noprint"><button class="btn" data-act="home">Exit to studio</button></div>
    <h2>Prerequisite drill</h2>
    <p class="muted">Round ${drillI+1}. One best answer, from the catalog line.</p>
    <p>${escapeHtml(d.q)}</p>
    ${choices}${why}
    <div class="dock noprint">${drillPick!=null?`<button class="btn primary" data-act="drill-next">Next</button>`:""}</div>`;
}
function degreeIds() {
  const fallback = DATA.degree.courses.slice();
  if (!state.degree || state.degree.length !== 10) return fallback;
  return state.degree.map((id, i) => (BY[id] ? id : fallback[i]));
}
function fmtHours(h) {
  const totalMin = Math.round((Number(h) || 0) * 60);
  const hr = Math.floor(totalMin / 60);
  const m = totalMin % 60;
  return hr + " h " + String(m).padStart(2, "0") + " m";
}
function addLog(id, h) {
  if (id === "CAP") {
    state.capHours = Math.min(DATA.degree.capHours, Math.round(((state.capHours || 0) + h) * 100) / 100);
  } else {
    state.hours[id] = Math.min(DATA.degree.courseHourMax, Math.round(((state.hours[id] || 0) + h) * 100) / 100);
  }
  save();
}
function degreeStatus() {
  const ids = degreeIds();
  const ready = ids.filter(id => state.done[id] && (state.hours[id] || 0) >= DATA.degree.courseHourMin);
  const courseHours = ids.reduce((s, id) => s + (state.hours[id] || 0), 0);
  const sum = courseHours + (state.capHours || 0);
  const miles = DATA.degree.milestones.every(m => state.capDone[m.id]);
  const capReady = (state.capHours || 0) >= DATA.degree.capHours && miles;
  const complete = ready.length === 10 && capReady && sum >= DATA.degree.totalMin && sum <= DATA.degree.totalMax;
  return { ids, ready: ready.length, sum, capReady, complete };
}
function viewDegree() {
  const d = DATA.degree;
  const st = degreeStatus();
  const pct = Math.min(100, Math.round(100 * st.sum / d.totalMax));
  const rows = st.ids.map((id, i) => {
    const c = BY[id];
    const h = state.hours[id] || 0;
    const ok = state.done[id] && h >= d.courseHourMin;
    const options = COURSES.filter(x => x.code !== "M0").map(x =>
      `<option value="${x.code}" ${x.code === id ? "selected" : ""}>${x.code} · ${escapeHtml(x.title)}</option>`).join("");
    return `<li>
      <button class="btn" data-act="open" data-arg="${id}">${id}</button>
      ${escapeHtml(c.title)}
      <span class="muted">${fmtHours(h)} / ${d.courseHourMin}–${d.courseHourMax} h${ok ? " · ready" : ""}</span>
      <div class="row">
        <button class="btn" data-act="log" data-arg="${id}" data-h="0.5">+30 min</button>
        <button class="btn" data-act="log" data-arg="${id}" data-h="1">+1 hour</button>
        <select id="swap-${i}" data-act="nop">${options}</select>
        <button class="btn" data-act="swap" data-arg="${i}">Use</button>
      </div>
    </li>`;
  }).join("");
  const miles = d.milestones.map(m =>
    `<li><button class="btn" data-act="mile" data-arg="${m.id}" aria-pressed="${!!state.capDone[m.id]}">${state.capDone[m.id] ? "Done" : "Mark"}</button>
      <strong>${escapeHtml(m.title)}</strong> · about ${m.hours} h. ${escapeHtml(m.text)}</li>`).join("");
  return `
    <div class="row noprint"><button class="btn" data-act="home">Course map</button></div>
    <h2>36-credit equivalent</h2>
    <p>Ten courses at 3 credits, plus a 6-credit capstone, is the 36. Log 88 to 100 hours on each course and 200 hours on the capstone. The total has to land between 1,080 and 1,200. A course also needs its 80 percent check. This log is not a diploma.</p>
    <p><strong>${fmtHours(st.sum)}</strong> logged. ${st.ready} / 10 courses ready. Capstone ${st.capReady ? "ready" : "not ready"}.</p>
    <div class="progress" aria-hidden="true"><span style="width:${pct}%"></span></div>
    <p class="muted">The bar fills at 1,200 hours. 1,080 is the minimum that counts.</p>
    ${st.complete ? `<div class="pearl"><strong>The log is complete.</strong> Ten courses and the capstone are inside 1,080–1,200 hours.</div>` : ""}
    <ol>${rows}</ol>
    <h2>Capstone · 200 hours</h2>
    <p class="muted">${fmtHours(state.capHours || 0)} / 200 h</p>
    <label>Title <input id="cap-title" type="text" value="${escapeHtml(state.capTitle || "")}" data-act="nop" placeholder="What you are building"/></label>
    <div class="row">
      <button class="btn" data-act="cap-title">Save title</button>
      <button class="btn" data-act="log" data-arg="CAP" data-h="1">+1 hour</button>
      <button class="btn" data-act="log" data-arg="CAP" data-h="4">+4 hours</button>
    </div>
    <ul>${miles}</ul>`;
}
function viewPlan() {
  const selected = state.sketch.filter(id => BY[id] && id !== "M0");
  const sum = selected.reduce((s, id) => {
    const n = creditNumber(BY[id]);
    return n == null ? s : s + n;
  }, 0);
  const variable = selected.filter(id => creditNumber(BY[id]) == null);
  const notes = prereqNotes(selected);
  const shelf = selected.filter(id => /^S\d/.test(id));
  const items = selected.map(id => `<li><button class="btn" data-act="open" data-arg="${id}">${id}</button> ${escapeHtml(BY[id].title)} · ${escapeHtml(BY[id].creditLabel)}</li>`).join("");
  return `
    <div class="row noprint"><button class="btn" data-act="home">Course map</button><button class="btn" data-act="clear-sketch">Clear sketch</button></div>
    <h2>Plan sketch</h2>
    <p>Not a degree audit. Fixed-credit courses in the sketch add to <strong>${sum} credits</strong>. Variable courses are listed and not forced into that sum.</p>
    ${variable.length ? `<p class="muted">Variable credit, not in the sum: ${variable.join(", ")}.</p>` : ""}
    <ul>${items || "<li>Nothing sketched yet. Open a course and add it.</li>"}</ul>
    ${shelf.length ? `<div class="warn">Open-shelf entries in the sketch (${shelf.join(", ")}) are briefings. They are not Texas A&M credits.</div>` : ""}
    ${notes.map(n => `<div class="warn">${escapeHtml(n)}</div>`).join("") || (shelf.length ? "" : `<p class="muted">No prerequisite warning inside this extract.</p>`)}
    <p class="muted">Undergraduate numbers such as CSCE 310, 313, 411, or 434 appear only as warnings. They are not courses in this extract.</p>`;
}
function viewSheet() {
  const c = course();
  return `
    <article class="sheet">
      <p class="kicker">Study sheet · teaching copy</p>
      <h2>${c.code} · ${escapeHtml(c.title)}</h2>
      <p>${escapeHtml(c.creditLabel)}. ${escapeHtml(c.hours)}. Prerequisite: ${escapeHtml(c.prereq)}.</p>
      <p><strong>Emphasis.</strong> ${escapeHtml(c.focus)}</p>
      <p><strong>Mechanism.</strong> ${escapeHtml(c.mechanism)}</p>
      <p><strong>Tradeoff.</strong> ${escapeHtml(c.tradeoff)}</p>
      <p><strong>Caution.</strong> ${escapeHtml(c.confuse)}</p>
      ${c.exclusive ? `<p><strong>Degree rule.</strong> ${escapeHtml(c.exclusive)}</p>` : ""}
      ${c.cross ? `<p><strong>Cross-list.</strong> ${escapeHtml(c.cross)}</p>` : ""}
      ${c.source ? `<p><strong>Source.</strong> ${escapeHtml(c.source)}</p>` : ""}
      <p><strong>Pearl.</strong> ${escapeHtml(c.pearl)}</p>
      <ol>${c.quiz.map(item => `<li>${escapeHtml(item.q)} <em>${escapeHtml(item.choices[item.answer])}</em></li>`).join("")}</ol>
      <p class="muted">Not an official syllabus. Verify every rule against the current catalog before you enroll.</p>
    </article>
    <div class="dock noprint">
      <button class="btn" data-act="player">Back</button>
      <button class="btn primary" data-act="print">Print</button>
    </div>`;
}

function escapeHtml(s) {
  return String(s).replace(/[&<>"']/g, ch => ({'&':'&','<':'<','>':'>','"':'"',"'":'&#39;'}[ch]));
}

function gradeCurrent() {
  const items = view === "exam" ? examQs : course().quiz;
  const score = items.reduce((s, it, idx) => s + (picks[idx] === it.answer ? 1 : 0), 0);
  const pct = Math.round(100 * score / items.length);
  if (view === "quiz" && pct >= 80) state.done[code] = true;
  if (view === "exam" && pct >= 80) state.done["EXAM"] = true;
  state.best[view === "exam" ? "EXAM" : code] = Math.max(state.best[view === "exam" ? "EXAM" : code] || 0, pct);
  save();
}

document.body.addEventListener("click", (e) => {
  const t = e.target.closest("[data-act]");
  if (!t || t.dataset.act === "nop") return;
  const act = t.dataset.act;
  const arg = t.dataset.arg;
  if (act === "home") { stopSpeak(); view = "home"; render(); return; }
  if (act === "open") { stopSpeak(); code = arg; chunk = 0; plate = 0; frameMode = "video"; view = "player"; render(); return; }
  if (act === "player") { view = "player"; render(); return; }
  if (act === "track") { track = arg; render(); const el = document.getElementById("q"); if (el) el.focus(); return; }
  if (act === "search") {
    query = (document.getElementById("q").value || "").trim().toLowerCase();
    render();
    return;
  }
  if (act === "play") {
    if (playing) { stopSpeak(); render(); }
    else playChunk();
    return;
  }
  if (act === "next") {
    stopSpeak();
    if (chunk < course().chunks.length - 1) chunk += 1;
    render();
    return;
  }
  if (act === "prev") {
    stopSpeak();
    if (chunk > 0) chunk -= 1;
    render();
    return;
  }
  if (act === "rate") {
    rate = rate === 1 ? 1.25 : rate === 1.25 ? 0.9 : 1;
    render();
    return;
  }
  if (act === "plate") { plate = parseInt(arg, 10); render(); return; }
  if (act === "lesson") { stopSpeak(); chunk = parseInt(arg, 10) || 0; frameMode = "video"; render(); return; }
  if (act === "frame") { frameMode = arg === "read" ? "read" : "video"; render(); return; }
  if (act === "degree") { stopSpeak(); view = "degree"; render(); return; }
  if (act === "log") {
    addLog(arg, parseFloat(t.dataset.h) || 0);
    render();
    return;
  }
  if (act === "swap") {
    const sel = document.getElementById("swap-" + arg);
    const next = sel ? sel.value : "";
    if (BY[next]) {
      const ids = degreeIds().slice();
      if (!ids.includes(next)) ids[parseInt(arg, 10)] = next;
      state.degree = ids;
      save();
    }
    render();
    return;
  }
  if (act === "mile") {
    state.capDone[arg] = !state.capDone[arg];
    save();
    render();
    return;
  }
  if (act === "cap-title") {
    const el = document.getElementById("cap-title");
    state.capTitle = el ? el.value.trim() : "";
    save();
    render();
    return;
  }
  if (act === "quiz") {
    stopSpeak(); view = "quiz"; qi = 0; picks = []; revealed = false; render(); return;
  }
  if (act === "pick") { if (!revealed) { picks[qi] = parseInt(arg, 10); render(); } return; }
  if (act === "reveal") { revealed = true; gradeCurrent(); render(); return; }
  if (act === "qnext") { qi += 1; revealed = false; render(); return; }
  if (act === "retake") { qi = 0; picks = []; revealed = false; render(); return; }
  if (act === "sheet") { stopSpeak(); view = "sheet"; render(); return; }
  if (act === "print") { window.print(); return; }
  if (act === "copy") {
    const done = () => { t.textContent = "Copied"; };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(arg).then(done).catch(() => { window.prompt("Copy this link", arg); });
    } else window.prompt("Copy this link", arg);
    return;
  }
  if (act === "toggle-sketch") {
    if (code === "M0") return;
    if (state.sketch.includes(code)) state.sketch = state.sketch.filter(x => x !== code);
    else state.sketch.push(code);
    save(); render(); return;
  }
  if (act === "plan") { stopSpeak(); view = "plan"; render(); return; }
  if (act === "clear-sketch") { state.sketch = []; save(); render(); return; }
  if (act === "drill") { stopSpeak(); view = "drill"; drillI = 0; drillScore = 0; drillPick = null; render(); return; }
  if (act === "drill-pick") {
    if (drillPick != null) return;
    drillPick = parseInt(arg, 10);
    const d = drillQuestion();
    if (drillPick === d.item.answer) drillScore += 1;
    render();
    return;
  }
  if (act === "drill-next") { drillI += 1; drillPick = null; render(); return; }
  if (act === "exam") { stopSpeak(); examBuild(); view = "exam"; qi = 0; picks = []; revealed = false; render(); return; }
});

document.body.addEventListener("keydown", (e) => {
  const tag = (e.target.tagName || "").toLowerCase();
  if (tag === "input" || tag === "textarea") {
    if (e.key === "Enter" && tag === "input") {
      query = (e.target.value || "").trim().toLowerCase();
      render();
    }
    return;
  }
  if (e.key === " " && view === "player") { e.preventDefault(); document.querySelector('[data-act="play"]').click(); }
  if (e.key === "ArrowRight" && view === "player") document.querySelector('[data-act="next"]').click();
  if (e.key === "ArrowLeft" && view === "player") document.querySelector('[data-act="prev"]').click();
});

render();
</script>
</body>
</html>
'''

if __name__ == "__main__":
    main()
