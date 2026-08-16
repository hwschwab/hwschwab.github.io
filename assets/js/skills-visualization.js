export default class SkillsVisualization {
    constructor(containerId) {
        this.containerId = containerId;
        this.width = 1000;
        this.height = 700;

        // The node id that always renders as the "current position" —
        // gets the maroon ring, larger radius, and "Current Position" badge.
        this.currentPositionId = "SRI International";

        // Muted, period-plausible palette — tints/shades of navy, warm
        // gray, brass and maroon, kept desaturated so the six categories
        // stay distinguishable without introducing bright/neon hues.
        this.categoryColors = {
            "Position": "#1F3A5F",       // Navy — the site's single accent
            "Technical": "#4B6584",      // Slate blue
            "Research": "#8A7B4E",       // Muted brass/olive
            "Leadership": "#857F6E",     // Warm gray-taupe
            "Communication": "#6E8299",  // Soft slate blue
            "Domain": "#8B4A52"          // Muted maroon/wine
        };

        // Interaction/filter state
        this.activeCategories = new Set(); // empty set = no category filter (show all)
        this.searchQuery = "";
        this.minLevelOnly = false;
        this.selectedNode = null; // sticky, click/tap/keyboard-selected
        this.previewNode = null;  // transient, hover/focus-previewed
        this.supportsHover = typeof window.matchMedia === "function" &&
            window.matchMedia("(hover: hover)").matches;
        this._autoFitDone = false;

        this.data = {
            nodes: [
                // Current Position node — links to the "Current Work" section
                { id: "SRI International", category: "Position", level: 4, link: "/experience/#sri-international", description: "Research Analyst at SRI International, supporting the National Science Foundation's Office of the Chief of Research Security Strategy and Policy (OCRSSP) on research security policy implementation" },

                // Completed Position nodes — each links to its entry on the site
                { id: "The World Bank", category: "Position", level: 3, link: "/experience/#the-world-bank", description: "Former Summer Research Assistant, researching the intersection of human rights and economic development, including gender discrimination in workforce participation" },
                { id: "Thesis Research", category: "Position", level: 3, link: "/research/#thesis", description: "Completed thesis on right to be forgotten and LLMs through Meta's privacy policies in EU vs US" },
                { id: "MUN President", category: "Position", level: 3, link: "/experience/#mun-president", description: "Former President of UChicago Model UN, managed 60+ team members and $82k+ budget (2022-2025)" },
                { id: "Data Science TA", category: "Position", level: 3, link: "/experience/#data-science-institute", description: "Former Teaching Assistant for Data Science Clinic, received Excellence in Data Science Award" },
                { id: "Data Cognition Lab", category: "Position", level: 3, link: "/experience/#data-cognition-lab", description: "Former research position focusing on participatory budgeting visualization" },
                { id: "Results for America", category: "Position", level: 3, link: "/experience/#results-for-america", description: "Former data analysis internship focused on government funding equity" },
                { id: "Global Human Rights Lab", category: "Position", level: 3, link: "/experience/#global-human-rights-lab", description: "Former research position investigating human rights violations for UN reports" },
                { id: "Data and Democracy", category: "Position", level: 3, link: "/research/#data-and-democracy", description: "Completed project: Led team of 4 to create historical voting records dataset using LLMs" },
                { id: "IDI PalmWatch", category: "Position", level: 3, link: "/research/#idi-palmwatch", description: "Completed project: Enhanced supply chain transparency tool with human rights grievance mapping" },

                // Technical nodes
                { id: "Python", category: "Technical", level: 4, description: "Advanced Python development with 5+ years experience in data analysis, ML, and automation" },
                { id: "Data Visualization", category: "Technical", level: 4, description: "Expert in creating interactive and static visualizations using D3.js, matplotlib, and other tools" },
                { id: "Statistical Analysis", category: "Technical", level: 4, description: "Advanced statistical methods for research, policy analysis, and discrimination detection" },
                { id: "Machine Learning", category: "Technical", level: 4, description: "Advanced ML/AI experience including LLM integration and predictive modeling" },
                { id: "Web Development", category: "Technical", level: 3, description: "Full-stack development with focus on data-driven applications and web scraping" },
                { id: "Data Pipeline Development", category: "Technical", level: 4, description: "Expert in building automated data pipelines and ETL processes" },
                { id: "LLM Integration", category: "Technical", level: 3, description: "Experience integrating Large Language Models for data processing and analysis" },
                { id: "Docker & DevOps", category: "Technical", level: 3, description: "Proficient in containerization and reproducible development environments" },

                // Research nodes
                { id: "Human Rights Research", category: "Research", level: 4, description: "Expert in investigating human rights violations, policy analysis, and UN reporting" },
                { id: "Privacy Policy Analysis", category: "Research", level: 4, description: "Completed comprehensive analysis of privacy policies and AI governance frameworks" },
                { id: "Data Ethics", category: "Research", level: 4, description: "Advanced understanding of ethical frameworks in data science and AI systems" },
                { id: "Academic Writing", category: "Research", level: 4, description: "Proven track record publishing research papers and comprehensive reports" },
                { id: "Economic Research", category: "Research", level: 3, description: "Research defining the human rights economy through interdisciplinary analysis" },
                { id: "Discrimination Analysis", category: "Research", level: 3, description: "Using AI/ML to analyze patterns of gender discrimination in government participation" },

                // Leadership nodes
                { id: "Team Management", category: "Leadership", level: 4, description: "Expert in leading diverse teams, from 60+ member MUN teams to technical project groups" },
                { id: "Budget Management", category: "Leadership", level: 3, description: "Experience managing $82,000+ annual budgets and resource allocation" },
                { id: "Training Development", category: "Leadership", level: 3, description: "Creating and implementing training programs for team members and students" },
                { id: "Technical Leadership", category: "Leadership", level: 4, description: "Leading technical projects and mentoring in ML/AI integration at SRI, the World Bank, and university" },
                { id: "Strategic Planning", category: "Leadership", level: 3, description: "Developing strategic approaches for research projects and organizational initiatives" },

                // Communication nodes
                { id: "Public Speaking", category: "Communication", level: 4, description: "Expert presenter at conferences, thesis defense, and team training sessions" },
                { id: "Cross-cultural Communication", category: "Communication", level: 4, description: "International experience with the World Bank, UN reporting, and global research partnerships" },
                { id: "Technical Writing", category: "Communication", level: 4, description: "Expert in creating technical documentation, thesis writing, and research reports" },
                { id: "Stakeholder Communication", category: "Communication", level: 4, description: "Experience communicating complex findings to both technical and non-technical audiences" },

                // Domain Knowledge nodes
                { id: "International Development", category: "Domain", level: 4, description: "Expertise in global development challenges and World Bank methodologies" },
                { id: "Human Rights Law", category: "Domain", level: 4, description: "Advanced knowledge of human rights frameworks, GDPR, and international legal systems" },
                { id: "Privacy Rights", category: "Domain", level: 4, description: "Expert knowledge in privacy rights, AI governance, and data protection regulations" },
                { id: "AI Governance", category: "Domain", level: 4, description: "Specialized expertise in AI policy, algorithmic transparency, and progressive privacy frameworks" },
                { id: "Gender Equality", category: "Domain", level: 3, description: "Research focus on gender discrimination and female political participation" },
                { id: "International Relations", category: "Domain", level: 3, description: "Understanding of global politics and international systems through MUN, UN, and national security policy work" }
            ],
            links: [
                // SRI International central connections
                { source: "SRI International", target: "Machine Learning", strength: 4 },
                { source: "SRI International", target: "Statistical Analysis", strength: 4 },
                { source: "SRI International", target: "Technical Leadership", strength: 3 },
                { source: "SRI International", target: "International Relations", strength: 4 },
                { source: "SRI International", target: "Strategic Planning", strength: 4 },
                { source: "SRI International", target: "AI Governance", strength: 3 },
                { source: "SRI International", target: "Stakeholder Communication", strength: 4 },

                // The World Bank connections
                { source: "The World Bank", target: "Human Rights Research", strength: 4 },
                { source: "The World Bank", target: "Economic Research", strength: 4 },
                { source: "The World Bank", target: "Discrimination Analysis", strength: 4 },
                { source: "The World Bank", target: "International Development", strength: 4 },
                { source: "The World Bank", target: "Gender Equality", strength: 4 },
                { source: "The World Bank", target: "Statistical Analysis", strength: 3 },
                { source: "The World Bank", target: "Machine Learning", strength: 3 },

                // Technical Foundations
                { source: "Python", target: "Data Visualization", strength: 4 },
                { source: "Python", target: "Statistical Analysis", strength: 4 },
                { source: "Python", target: "Machine Learning", strength: 4 },
                { source: "Python", target: "Data Pipeline Development", strength: 4 },
                { source: "Web Development", target: "Data Visualization", strength: 3 },
                { source: "Machine Learning", target: "LLM Integration", strength: 4 },
                { source: "Data Pipeline Development", target: "Docker & DevOps", strength: 3 },
                { source: "LLM Integration", target: "Data Pipeline Development", strength: 3 },

                // Research Connections
                { source: "Privacy Policy Analysis", target: "Privacy Rights", strength: 4 },
                { source: "Privacy Policy Analysis", target: "AI Governance", strength: 4 },
                { source: "Human Rights Research", target: "Human Rights Law", strength: 4 },
                { source: "Data Ethics", target: "Privacy Rights", strength: 4 },
                { source: "Data Ethics", target: "AI Governance", strength: 4 },
                { source: "Academic Writing", target: "Human Rights Research", strength: 4 },
                { source: "Economic Research", target: "International Development", strength: 3 },
                { source: "Discrimination Analysis", target: "Gender Equality", strength: 4 },
                { source: "Discrimination Analysis", target: "Machine Learning", strength: 4 },

                // Completed projects to skills
                { source: "Data and Democracy", target: "LLM Integration", strength: 4 },
                { source: "Data and Democracy", target: "Team Management", strength: 3 },
                { source: "Data and Democracy", target: "Data Pipeline Development", strength: 3 },
                { source: "Data and Democracy", target: "Technical Leadership", strength: 4 },
                { source: "IDI PalmWatch", target: "Web Development", strength: 4 },
                { source: "IDI PalmWatch", target: "Human Rights Research", strength: 4 },
                { source: "IDI PalmWatch", target: "Technical Leadership", strength: 4 },
                { source: "IDI PalmWatch", target: "LLM Integration", strength: 3 },
                { source: "IDI PalmWatch", target: "Team Management", strength: 3 },

                // Position to Technical
                { source: "Data Science TA", target: "Python", strength: 4 },
                { source: "Data Science TA", target: "Machine Learning", strength: 4 },
                { source: "Data Science TA", target: "Docker & DevOps", strength: 3 },
                { source: "Data Science TA", target: "Technical Leadership", strength: 4 },
                { source: "Data Cognition Lab", target: "Python", strength: 3 },
                { source: "Data Cognition Lab", target: "Data Visualization", strength: 4 },
                { source: "Results for America", target: "Statistical Analysis", strength: 4 },
                { source: "Results for America", target: "Data Pipeline Development", strength: 4 },
                { source: "Thesis Research", target: "Privacy Policy Analysis", strength: 4 },
                { source: "Thesis Research", target: "Academic Writing", strength: 4 },

                // Leadership and Management
                { source: "MUN President", target: "Team Management", strength: 4 },
                { source: "MUN President", target: "Budget Management", strength: 4 },
                { source: "MUN President", target: "Training Development", strength: 4 },
                { source: "MUN President", target: "Strategic Planning", strength: 3 },
                { source: "MUN President", target: "Technical Leadership", strength: 3 },

                // Communication Links
                { source: "Public Speaking", target: "Training Development", strength: 3 },
                { source: "Technical Writing", target: "Privacy Policy Analysis", strength: 4 },
                { source: "Technical Writing", target: "Academic Writing", strength: 4 },
                { source: "Cross-cultural Communication", target: "International Development", strength: 4 },
                { source: "Stakeholder Communication", target: "Technical Leadership", strength: 3 },

                // Position to Domain
                { source: "Global Human Rights Lab", target: "Human Rights Research", strength: 4 },
                { source: "Global Human Rights Lab", target: "Human Rights Law", strength: 3 },
                { source: "Global Human Rights Lab", target: "International Relations", strength: 3 },
                { source: "Thesis Research", target: "Privacy Rights", strength: 4 },
                { source: "Thesis Research", target: "AI Governance", strength: 4 },
                { source: "Data Science TA", target: "Data Ethics", strength: 3 },

                // Leadership & Domain Connections
                { source: "MUN President", target: "International Relations", strength: 4 },
                { source: "MUN President", target: "Human Rights Law", strength: 3 },
                { source: "MUN President", target: "International Development", strength: 2 },
                { source: "Team Management", target: "Cross-cultural Communication", strength: 3 },
                { source: "Technical Leadership", target: "AI Governance", strength: 3 },

                // Position & Communication Links
                { source: "MUN President", target: "Public Speaking", strength: 4 },
                { source: "MUN President", target: "Cross-cultural Communication", strength: 4 },
                { source: "MUN President", target: "Stakeholder Communication", strength: 3 },
                { source: "Data Science TA", target: "Stakeholder Communication", strength: 3 },
                { source: "Global Human Rights Lab", target: "Technical Writing", strength: 3 },

                // Technical & Research Links
                { source: "Data Visualization", target: "Academic Writing", strength: 3 },
                { source: "Statistical Analysis", target: "Economic Research", strength: 3 },
                { source: "Machine Learning", target: "Discrimination Analysis", strength: 4 },

                // MUN President connections to research and other positions
                { source: "MUN President", target: "Global Human Rights Lab", strength: 3 },
                { source: "MUN President", target: "SRI International", strength: 2 },
                { source: "MUN President", target: "Human Rights Research", strength: 3 },
                { source: "MUN President", target: "Academic Writing", strength: 2 },

                // Leadership & Communication
                { source: "Team Management", target: "Public Speaking", strength: 3 },
                { source: "Training Development", target: "Cross-cultural Communication", strength: 3 },
                { source: "Technical Leadership", target: "Stakeholder Communication", strength: 4 }
            ]
        };

        // Seed initial positions on a per-category ring so the simulation
        // settles into a legible layout faster and with less overlap than
        // starting every node clustered at the center.
        const categories = Object.keys(this.categoryColors);
        const angleStep = (2 * Math.PI) / categories.length;
        this.data.nodes = this.data.nodes.map(node => {
            const catIndex = categories.indexOf(node.category);
            const angle = catIndex * angleStep + (Math.random() - 0.5) * 0.6;
            const radius = 140 + Math.random() * 160;
            return {
                ...node,
                x: this.width / 2 + Math.cos(angle) * radius,
                y: this.height / 2 + Math.sin(angle) * radius,
                vx: 0,
                vy: 0
            };
        });

        this.nodeMap = new Map(this.data.nodes.map(node => [node.id, node]));

        this.data.links = this.data.links.map(link => ({
            source: this.nodeMap.get(link.source) || link.source,
            target: this.nodeMap.get(link.target) || link.target,
            strength: link.strength
        }));
    }

    // ------------------------------------------------------------------
    // Setup
    // ------------------------------------------------------------------

    initialize() {
        // Controls (search, legend filters, level toggle, reset) are built
        // and appended to the container first, so they sit before the
        // graph in DOM/tab order — search box, then filters, then the 39
        // graph nodes, then the reset button. Building the graph node
        // list first would put 39 Tab stops before a keyboard user ever
        // reaches the search box.
        this.createControls();

        const svg = d3.select(`#${this.containerId}`)
            .append("svg")
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .attr("width", "100%")
            .attr("height", "100%")
            .attr("role", "application")
            .attr("aria-roledescription", "skills network diagram")
            .attr("aria-label", "Interactive skills and experience network. Tab between nodes and press Enter to select one; use the search box or category filters above to narrow the view.")
            .style("background", "#F7F5EF");

        this.zoom = d3.zoom()
            .scaleExtent([0.5, 3])
            .on("zoom", (event) => {
                mainGroup.attr("transform", event.transform);
            });

        svg.call(this.zoom);

        // Clicking empty canvas clears any sticky selection
        svg.on("click", (event) => {
            if (event.target === svg.node()) this.clearSelection();
        });

        this.svg = svg;
        const mainGroup = svg.append("g");
        this.mainGroup = mainGroup;

        this.simulation = d3.forceSimulation(this.data.nodes)
            .force("link", d3.forceLink(this.data.links)
                .id(d => d.id)
                .distance(80))
            .force("charge", d3.forceManyBody().strength(-260))
            .force("center", d3.forceCenter(this.width / 2, this.height / 2))
            .force("collision", d3.forceCollide().radius(d => this.nodeRadius(d) + 10));

        this.createTooltip();
        this.createLinks();
        this.createNodes();
        this.addInteractions();
        // Created last so it sits after the graph in DOM/tab order —
        // search → filters → 39 graph nodes → reset button.
        this.createResetButton();

        this.simulation.on("tick", () => this.onTick());
        this.simulation.on("end", () => this.onSimulationEnd());

        document.addEventListener("keydown", (event) => {
            if (event.key === "Escape") this.clearSelection();
        });

        this.applyFilters();
        this.applyInitialHash();
    }

    nodeRadius(d) {
        const base = 9 + (d.level || 3) * 3;
        return d.id === this.currentPositionId ? base + 6 : base;
    }

    // ------------------------------------------------------------------
    // Controls: legend (multi-select), search, level filter, reset,
    // jump-to-list link. Chrome (colors/borders/fonts) lives in
    // pages/_skills.scss; this only builds structure + behavior.
    // ------------------------------------------------------------------

    createControls() {
        const container = d3.select(`#${this.containerId}`);

        const panel = container.append("div")
            .attr("class", "skills-legend")
            .style("position", "absolute");

        panel.append("p")
            .attr("class", "skills-hint")
            .text("Click or tap a node for details. Filter below, or see the full text list.");

        const searchWrap = panel.append("div").attr("class", "skills-search-wrap");
        this.searchInput = searchWrap.append("input")
            .attr("type", "search")
            .attr("class", "skills-search")
            .attr("placeholder", "Search skills…")
            .attr("aria-label", "Search skills and experience")
            .on("input", (event) => {
                this.searchQuery = event.target.value.trim().toLowerCase();
                this.applyFilters();
            })
            .on("keydown", (event) => {
                if (event.key !== "Enter") return;
                const matches = this.data.nodes.filter(d => this.passesFilters(d));
                if (matches.length === 1) {
                    event.preventDefault();
                    this.selectNode(matches[0]);
                    this.panToNode(matches[0]);
                }
            });

        const legendList = panel.append("div")
            .attr("class", "skills-legend-list")
            .attr("role", "group")
            .attr("aria-label", "Filter by category");

        Object.entries(this.categoryColors).forEach(([category, color]) => {
            const btn = legendList.append("button")
                .attr("type", "button")
                .attr("class", "legend-item")
                .attr("aria-pressed", "false")
                .on("click", () => this.toggleCategory(category, btn));

            btn.append("span")
                .attr("class", "legend-swatch")
                .style("background", color);
            btn.append("span")
                .attr("class", "legend-label")
                .text(category);
        });
        this.legendButtons = legendList.selectAll(".legend-item");

        this.levelToggle = panel.append("button")
            .attr("type", "button")
            .attr("class", "skills-level-toggle")
            .attr("aria-pressed", "false")
            .text("Core skills only")
            .on("click", () => {
                this.minLevelOnly = !this.minLevelOnly;
                this.levelToggle.attr("aria-pressed", String(this.minLevelOnly));
                this.applyFilters();
            });

        panel.append("a")
            .attr("class", "skills-list-link")
            .attr("href", "#technical-competencies")
            .text("View full text list ↓");
    }

    createResetButton() {
        d3.select(`#${this.containerId}`)
            .append("button")
            .attr("type", "button")
            .attr("class", "reset-button")
            .attr("aria-label", "Reset skills graph view")
            .style("position", "absolute")
            .text("Reset View")
            .on("click", () => this.resetVisualization());
    }

    toggleCategory(category, btn) {
        if (this.activeCategories.has(category)) {
            this.activeCategories.delete(category);
            btn.attr("aria-pressed", "false").classed("is-active", false);
        } else {
            this.activeCategories.add(category);
            btn.attr("aria-pressed", "true").classed("is-active", true);
        }
        this.applyFilters();
    }

    createTooltip() {
        this.tooltip = d3.select(`#${this.containerId}`)
            .append("div")
            .attr("class", "skills-tooltip")
            .style("position", "fixed")
            .style("visibility", "hidden")
            .style("background-color", "#F7F5EF")
            .style("border", "1px solid #C9C3AE")
            .style("padding", "12px 15px")
            .style("font-family", "Arial, Helvetica, sans-serif")
            .style("max-width", "300px")
            .style("font-size", "13px")
            .style("line-height", "1.4")
            .style("z-index", "1000")
            .style("transform", "translate(-50%, -100%)")
            .style("margin-top", "-20px");
    }

    createLinks() {
        this.link = this.mainGroup.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(this.data.links)
            .join("line")
            .style("stroke", "#C9C3AE")
            .style("stroke-width", d => d.strength * 0.8);
    }

    createNodes() {
        this.node = this.mainGroup.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(this.data.nodes)
            .join("g")
            .call(d3.drag()
                .clickDistance(6)
                .on("start", (event) => this.dragstarted(event))
                .on("drag", (event) => this.dragged(event))
                .on("end", (event) => this.dragended(event)));

        // tabindex/role live on the <circle>, not the <g> — Chromium
        // excludes plain <g> elements from Tab-key sequential focus
        // navigation even with tabindex set (though .focus() still works
        // on them programmatically); shape elements like <circle> are
        // reliably included.
        this.circles = this.node.append("circle")
            .attr("r", d => this.nodeRadius(d))
            .attr("tabindex", 0)
            .attr("role", "button")
            .attr("aria-label", d => `${d.id}, ${d.category}${d.link ? ", has related page" : ""}`)
            .style("fill", d => this.categoryColors[d.category])
            .style("stroke", d => d.id === this.currentPositionId ? "#7A2331" : "#F7F5EF")
            .style("stroke-width", d => d.id === this.currentPositionId ? 3 : 2);

        this.node.append("text")
            .text(d => d.id)
            .attr("dy", d => -(this.nodeRadius(d) + 6))
            .attr("text-anchor", "middle")
            .style("font-family", "Arial, Helvetica, sans-serif")
            .style("fill", "#1A1917")
            .style("font-size", d => d.id === this.currentPositionId ? "16px" : (d.category === "Position" ? "14px" : "12px"))
            .style("font-weight", d => d.category === "Position" ? "bold" : "normal")
            .style("pointer-events", "none");
    }

    // ------------------------------------------------------------------
    // Interaction
    // ------------------------------------------------------------------

    addInteractions() {
        this.node
            .on("mouseover", (event, d) => {
                if (!this.supportsHover || this.selectedNode) return;
                this.previewNode = d;
                this.applyFilters();
                this.showTooltip(d, event, { sticky: false });
            })
            .on("mousemove", (event) => {
                if (this.tooltip.style("visibility") === "visible" && !this.selectedNode) {
                    this.positionTooltip(event);
                }
            })
            .on("mouseout", () => {
                if (this.selectedNode) return;
                this.previewNode = null;
                this.applyFilters();
                this.tooltip.style("visibility", "hidden");
            })
            .on("click", (event, d) => {
                event.stopPropagation();
                if (this.selectedNode && this.selectedNode.id === d.id) {
                    this.clearSelection();
                } else {
                    this.selectNode(d, event);
                }
            });

        // Keyboard focus lives on the <circle> (see createNodes for why);
        // mirror the same preview/select behavior as mouse hover/click.
        this.circles
            .on("focus", (event, d) => {
                this.lastFocusedNodeId = d.id;
                if (this.selectedNode) return;
                this.previewNode = d;
                this.applyFilters();
                this.showTooltip(d, event, { sticky: false, anchorToNode: true });
            })
            .on("blur", () => {
                if (this.selectedNode) return;
                this.previewNode = null;
                this.applyFilters();
                this.tooltip.style("visibility", "hidden");
            })
            .on("keydown", (event, d) => {
                if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault();
                    if (this.selectedNode && this.selectedNode.id === d.id) {
                        this.clearSelection();
                    } else {
                        // No cursor position on a keyboard event — anchor
                        // the tooltip to the node itself instead.
                        this.selectNode(d);
                    }
                }
            });
    }

    onTick() {
        this.link
            .attr("x1", d => d.source.x)
            .attr("y1", d => d.source.y)
            .attr("x2", d => d.target.x)
            .attr("y2", d => d.target.y);

        this.node.attr("transform", d => `translate(${d.x},${d.y})`);
    }

    onSimulationEnd() {
        if (this._autoFitDone) return;
        this._autoFitDone = true;
        this.fitToView();
    }

    fitToView(duration = 750) {
        const nodes = this.data.nodes;
        const pad = 70;
        const minX = d3.min(nodes, d => d.x) - pad;
        const maxX = d3.max(nodes, d => d.x) + pad;
        const minY = d3.min(nodes, d => d.y) - pad;
        const maxY = d3.max(nodes, d => d.y) + pad;
        const w = Math.max(1, maxX - minX);
        const h = Math.max(1, maxY - minY);
        const scale = Math.max(0.5, Math.min(3, Math.min(this.width / w, this.height / h)));
        const tx = this.width / 2 - scale * (minX + maxX) / 2;
        const ty = this.height / 2 - scale * (minY + maxY) / 2;

        this.fitTransform = d3.zoomIdentity.translate(tx, ty).scale(scale);
        this.svg.transition().duration(duration).call(this.zoom.transform, this.fitTransform);
    }

    panToNode(d, scale = 1.6) {
        const clampedScale = Math.max(0.5, Math.min(3, scale));
        const t = d3.zoomIdentity
            .translate(this.width / 2 - clampedScale * d.x, this.height / 2 - clampedScale * d.y)
            .scale(clampedScale);
        this.svg.transition().duration(600).call(this.zoom.transform, t);
    }

    // ------------------------------------------------------------------
    // Selection / tooltip
    // ------------------------------------------------------------------

    selectNode(d, event) {
        this.selectedNode = d;
        this.previewNode = null;
        this.applyFilters();
        this.showTooltip(d, event, { sticky: true, anchorToNode: !event });
        history.replaceState(null, "", `#skill=${encodeURIComponent(d.id)}`);
    }

    clearSelection() {
        if (!this.selectedNode) return;
        this.selectedNode = null;
        this.applyFilters();
        this.tooltip.style("visibility", "hidden");
        history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    connectedIds(d) {
        const connections = this.data.links.filter(link =>
            link.source.id === d.id || link.target.id === d.id
        );
        return new Set(connections.flatMap(link => [link.source.id, link.target.id]));
    }

    passesFilters(d) {
        if (this.minLevelOnly && d.level < 4) return false;
        if (this.activeCategories.size > 0 && !this.activeCategories.has(d.category)) return false;
        if (this.searchQuery) {
            return d.id.toLowerCase().includes(this.searchQuery) ||
                d.category.toLowerCase().includes(this.searchQuery);
        }
        return true;
    }

    applyFilters() {
        const focus = this.selectedNode || this.previewNode;
        const focusConnections = focus ? this.connectedIds(focus) : null;

        this.node.style("opacity", d => {
            if (!this.passesFilters(d)) return 0.06;
            if (!focus) return 1;
            return (d.id === focus.id || focusConnections.has(d.id)) ? 1 : 0.15;
        });

        this.link.style("opacity", l => {
            const visible = this.passesFilters(l.source) && this.passesFilters(l.target);
            if (!visible) return 0.03;
            if (!focus) return 0.6;
            return (l.source.id === focus.id || l.target.id === focus.id) ? 0.9 : 0.05;
        });
    }

    showTooltip(d, event, { sticky, anchorToNode } = {}) {
        const connections = this.data.links.filter(link =>
            link.source.id === d.id || link.target.id === d.id
        );

        const statusBadge = d.id === this.currentPositionId ?
            `<div style="display: inline-block; border: 1px solid #1F3A5F; color: #1F3A5F; padding: 2px 8px; font-family: Arial, Helvetica, sans-serif; text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-top: 8px;">Current Position</div>` :
            d.category === "Position" && (d.description.includes("Former") || d.description.includes("Completed")) ?
            `<div style="display: inline-block; border: 1px solid #C9C3AE; color: #5C594F; padding: 2px 8px; font-family: Arial, Helvetica, sans-serif; text-transform: uppercase; letter-spacing: 0.05em; font-size: 11px; margin-top: 8px;">Completed</div>` :
            '';

        const viewLink = d.link ?
            `<div style="margin-top: 10px;"><a href="${d.link}" style="font-family: Arial, Helvetica, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; color: #1A4B8C;">View on site →</a></div>` :
            '';

        const closeButton = sticky ?
            `<button type="button" class="skills-tooltip-close" aria-label="Close details">×</button>` :
            '';

        const tooltipContent = `
            ${closeButton}
            <div style="border-bottom: 2px solid ${this.categoryColors[d.category]}; margin-bottom: 8px; padding-bottom: 8px;">
                <strong style="font-size: 15px; font-family: Georgia, 'Times New Roman', serif;">${d.id}</strong>
                <div style="color: #5C594F; font-family: Arial, Helvetica, sans-serif; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em;">${d.category}</div>
            </div>
            <div style="font-family: Georgia, 'Times New Roman', serif;">${d.description}</div>
            ${statusBadge}
            ${viewLink}
            ${d.category === "Position" ?
                `<div style="margin-top: 8px; color: #5C594F; font-family: Arial, Helvetica, sans-serif; font-size: 12px;">
                    Connected to ${connections.length} skills/experiences
                </div>` :
                ''}
        `;

        this.tooltip
            .html(tooltipContent)
            .style("visibility", "visible")
            .style("pointer-events", sticky ? "auto" : "none");

        if (sticky) {
            this.tooltip.select(".skills-tooltip-close").on("click", () => this.clearSelection());
        }

        if (anchorToNode) {
            // Anchor near the node's own screen position rather than the
            // mouse — needed for keyboard focus/selection, where there's
            // no cursor coordinate to use.
            const nodeEl = this.node.filter(n => n.id === d.id).node();
            if (nodeEl) {
                const nodeRect = nodeEl.getBoundingClientRect();
                this.positionTooltipAt(nodeRect.left + nodeRect.width / 2, nodeRect.top);
            }
        } else if (event) {
            this.positionTooltip(event);
        }
    }

    positionTooltip(event) {
        this.positionTooltipAt(event.clientX, event.clientY);
    }

    positionTooltipAt(x, y) {
        const tooltipNode = this.tooltip.node();
        const tooltipRect = tooltipNode.getBoundingClientRect();

        let tooltipX = x;
        let tooltipY = y;

        if (tooltipX - (tooltipRect.width / 2) < 0) {
            tooltipX = tooltipRect.width / 2;
        }
        if (tooltipX + (tooltipRect.width / 2) > window.innerWidth) {
            tooltipX = window.innerWidth - (tooltipRect.width / 2);
        }
        if (tooltipY - tooltipRect.height - 20 < 0) {
            tooltipY = y + 20;
            this.tooltip.style("transform", "translate(-50%, 0)");
        } else {
            this.tooltip.style("transform", "translate(-50%, -100%)");
        }

        this.tooltip
            .style("left", `${tooltipX}px`)
            .style("top", `${tooltipY}px`);
    }

    // ------------------------------------------------------------------
    // Deep-linking in: #skill=<name> in the URL selects and pans to a node
    // ------------------------------------------------------------------

    applyInitialHash() {
        const match = window.location.hash.match(/^#skill=(.+)$/);
        if (!match) return;
        const name = decodeURIComponent(match[1]);
        const node = this.nodeMap.get(name);
        if (!node) return;

        this.searchInput.property("value", name);
        this.searchQuery = name.toLowerCase();
        this.applyFilters();

        // Wait for the initial auto-fit transition to finish before panning
        // to the requested node, so the two animations don't fight.
        window.setTimeout(() => {
            this.selectNode(node);
            this.panToNode(node);
        }, 900);
    }

    // ------------------------------------------------------------------
    // Reset
    // ------------------------------------------------------------------

    resetVisualization() {
        this.searchQuery = "";
        this.searchInput.property("value", "");
        this.activeCategories.clear();
        this.legendButtons.attr("aria-pressed", "false").classed("is-active", false);
        this.minLevelOnly = false;
        this.levelToggle.attr("aria-pressed", "false");
        this.clearSelection();
        this.previewNode = null;
        this.applyFilters();

        this.svg.transition()
            .duration(750)
            .call(this.zoom.transform, this.fitTransform || d3.zoomIdentity);

        this.simulation.alpha(0.3).restart();
    }

    dragstarted(event) {
        if (!event.active) this.simulation.alphaTarget(0.3).restart();
        event.subject.fx = event.subject.x;
        event.subject.fy = event.subject.y;
    }

    dragged(event) {
        event.subject.fx = event.x;
        event.subject.fy = event.y;
    }

    dragended(event) {
        if (!event.active) this.simulation.alphaTarget(0);
        event.subject.fx = null;
        event.subject.fy = null;
    }
}
