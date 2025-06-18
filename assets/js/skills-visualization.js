export default class SkillsVisualization {
    constructor(containerId) {
        this.containerId = containerId;
        this.width = 900;
        this.height = 300;
        
        this.categoryColors = {
            "Position": "#FF6B6B",      // Coral red
            "Technical": "#2b4c7e",      // Deep blue
            "Research": "#567eae",       // Medium blue
            "Leadership": "#88a8d5",     // Light blue
            "Communication": "#1e3a5f",  // Dark blue
            "Domain": "#6a89cc"          // Steel blue
        };
        
        this.data = {
            nodes: [
                // Current Position nodes
                { id: "World Bank Research", category: "Position", level: 4, description: "Data Science and Human Rights Research Specialist at the World Bank's Data and Analytics Global Solutions Group" },
                
                // Completed Position nodes
                { id: "Thesis Research", category: "Position", level: 3, description: "Completed thesis on right to be forgotten and LLMs through Meta's privacy policies in EU vs US" },
                { id: "MUN President", category: "Position", level: 3, description: "Former President of UChicago Model UN, managed 60+ team members and $82k+ budget (2022-2025)" },
                { id: "Data Science TA", category: "Position", level: 3, description: "Former Teaching Assistant for Data Science Clinic, received Excellence in Data Science Award" },
                { id: "Data Cognition Lab", category: "Position", level: 3, description: "Former research position focusing on participatory budgeting visualization" },
                { id: "Results for America", category: "Position", level: 3, description: "Former data analysis internship focused on government funding equity" },
                { id: "Global Human Rights Lab", category: "Position", level: 3, description: "Former research position investigating human rights violations for UN reports" },
                { id: "Data and Democracy", category: "Position", level: 3, description: "Completed project: Led team of 4 to create historical voting records dataset using LLMs" },
                { id: "IDI PalmWatch", category: "Position", level: 3, description: "Completed project: Enhanced supply chain transparency tool with human rights grievance mapping" },

                // Technical nodes - enhanced with new skills
                { id: "Python", category: "Technical", level: 4, description: "Advanced Python development with 5+ years experience in data analysis, ML, and automation" },
                { id: "Data Visualization", category: "Technical", level: 4, description: "Expert in creating interactive and static visualizations using D3.js, matplotlib, and other tools" },
                { id: "Statistical Analysis", category: "Technical", level: 4, description: "Advanced statistical methods for research, policy analysis, and discrimination detection" },
                { id: "Machine Learning", category: "Technical", level: 4, description: "Advanced ML/AI experience including LLM integration and predictive modeling" },
                { id: "Web Development", category: "Technical", level: 3, description: "Full-stack development with focus on data-driven applications and web scraping" },
                { id: "Data Pipeline Development", category: "Technical", level: 4, description: "Expert in building automated data pipelines and ETL processes" },
                { id: "LLM Integration", category: "Technical", level: 3, description: "Experience integrating Large Language Models for data processing and analysis" },
                { id: "Docker & DevOps", category: "Technical", level: 3, description: "Proficient in containerization and reproducible development environments" },

                // Research nodes - updated with thesis completion
                { id: "Human Rights Research", category: "Research", level: 4, description: "Expert in investigating human rights violations, policy analysis, and UN reporting" },
                { id: "Privacy Policy Analysis", category: "Research", level: 4, description: "Completed comprehensive analysis of privacy policies and AI governance frameworks" },
                { id: "Data Ethics", category: "Research", level: 4, description: "Advanced understanding of ethical frameworks in data science and AI systems" },
                { id: "Academic Writing", category: "Research", level: 4, description: "Proven track record publishing research papers and comprehensive reports" },
                { id: "Economic Research", category: "Research", level: 3, description: "Current research defining the human rights economy through interdisciplinary analysis" },
                { id: "Discrimination Analysis", category: "Research", level: 3, description: "Using AI/ML to analyze patterns of gender discrimination in government participation" },

                // Leadership nodes - enhanced with World Bank experience
                { id: "Team Management", category: "Leadership", level: 4, description: "Expert in leading diverse teams, from 60+ member MUN teams to technical project groups" },
                { id: "Budget Management", category: "Leadership", level: 3, description: "Experience managing $82,000+ annual budgets and resource allocation" },
                { id: "Training Development", category: "Leadership", level: 3, description: "Creating and implementing training programs for team members and students" },
                { id: "Technical Leadership", category: "Leadership", level: 4, description: "Leading technical projects and mentoring in ML/AI integration at World Bank and university" },
                { id: "Strategic Planning", category: "Leadership", level: 3, description: "Developing strategic approaches for research projects and organizational initiatives" },

                // Communication nodes - enhanced
                { id: "Public Speaking", category: "Communication", level: 4, description: "Expert presenter at conferences, thesis defense, and team training sessions" },
                { id: "Cross-cultural Communication", category: "Communication", level: 4, description: "International experience with World Bank, UN reporting, and global research partnerships" },
                { id: "Technical Writing", category: "Communication", level: 4, description: "Expert in creating technical documentation, thesis writing, and research reports" },
                { id: "Stakeholder Communication", category: "Communication", level: 4, description: "Experience communicating complex findings to both technical and non-technical audiences" },

                // Domain Knowledge nodes - expanded
                { id: "International Development", category: "Domain", level: 4, description: "Current expertise in global development challenges and World Bank methodologies" },
                { id: "Human Rights Law", category: "Domain", level: 4, description: "Advanced knowledge of human rights frameworks, GDPR, and international legal systems" },
                { id: "Privacy Rights", category: "Domain", level: 4, description: "Expert knowledge in privacy rights, AI governance, and data protection regulations" },
                { id: "AI Governance", category: "Domain", level: 4, description: "Specialized expertise in AI policy, algorithmic transparency, and progressive privacy frameworks" },
                { id: "Gender Equality", category: "Domain", level: 3, description: "Current research focus on gender discrimination and female political participation" },
                { id: "International Relations", category: "Domain", level: 3, description: "Understanding of global politics and international systems through MUN and UN work" }
            ],
            links: [
                // World Bank central connections
                { source: "World Bank Research", target: "Human Rights Research", strength: 4 },
                { source: "World Bank Research", target: "Machine Learning", strength: 4 },
                { source: "World Bank Research", target: "Statistical Analysis", strength: 4 },
                { source: "World Bank Research", target: "Economic Research", strength: 4 },
                { source: "World Bank Research", target: "Discrimination Analysis", strength: 4 },
                { source: "World Bank Research", target: "International Development", strength: 4 },
                { source: "World Bank Research", target: "Gender Equality", strength: 4 },
                { source: "World Bank Research", target: "Technical Leadership", strength: 3 },
                { source: "World Bank Research", target: "International Relations", strength: 4 },
                { source: "World Bank Research", target: "Strategic Planning", strength: 4 },
                


                // Technical Foundations - enhanced
                { source: "Python", target: "Data Visualization", strength: 4 },
                { source: "Python", target: "Statistical Analysis", strength: 4 },
                { source: "Python", target: "Machine Learning", strength: 4 },
                { source: "Python", target: "Data Pipeline Development", strength: 4 },
                { source: "Web Development", target: "Data Visualization", strength: 3 },
                { source: "Machine Learning", target: "LLM Integration", strength: 4 },
                { source: "Data Pipeline Development", target: "Docker & DevOps", strength: 3 },
                { source: "LLM Integration", target: "Data Pipeline Development", strength: 3 },

                // Research Connections - updated
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


                // Position to Technical - updated
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

                // Leadership and Management - enhanced
                { source: "MUN President", target: "Team Management", strength: 4 },
                { source: "MUN President", target: "Budget Management", strength: 4 },
                { source: "MUN President", target: "Training Development", strength: 4 },
                { source: "MUN President", target: "Strategic Planning", strength: 3 },
                { source: "MUN President", target: "Technical Leadership", strength: 3 },

                // Communication Links - enhanced
                { source: "Public Speaking", target: "Training Development", strength: 3 },
                { source: "Technical Writing", target: "Privacy Policy Analysis", strength: 4 },
                { source: "Technical Writing", target: "Academic Writing", strength: 4 },
                { source: "Cross-cultural Communication", target: "International Development", strength: 4 },
                { source: "Stakeholder Communication", target: "Technical Leadership", strength: 3 },

                // Position to Domain - updated
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
                { source: "World Bank Research", target: "Stakeholder Communication", strength: 4 },
                { source: "Global Human Rights Lab", target: "Technical Writing", strength: 3 },

                // Technical & Research Links
                { source: "Data Visualization", target: "Academic Writing", strength: 3 },
                { source: "Statistical Analysis", target: "Economic Research", strength: 3 },
                { source: "Machine Learning", target: "Discrimination Analysis", strength: 4 },

                // MUN President connections to research and other positions
                { source: "MUN President", target: "Global Human Rights Lab", strength: 3 },
                { source: "MUN President", target: "World Bank Research", strength: 2 },
                { source: "MUN President", target: "Human Rights Research", strength: 3 },
                { source: "MUN President", target: "Academic Writing", strength: 2 },

                // Leadership & Communication
                { source: "Team Management", target: "Public Speaking", strength: 3 },
                { source: "Training Development", target: "Cross-cultural Communication", strength: 3 },
                { source: "Technical Leadership", target: "Stakeholder Communication", strength: 4 }
            ]
        };

        // Initialize node positions and create node map
        this.data.nodes = this.data.nodes.map(node => ({
            ...node,
            x: this.width / 2 + (Math.random() - 0.5) * 100,
            y: this.height / 2 + (Math.random() - 0.5) * 100,
            vx: 0,
            vy: 0
        }));

        // Create a map of nodes for easy lookup
        this.nodeMap = new Map(this.data.nodes.map(node => [node.id, node]));

        // Convert link references to actual node objects
        this.data.links = this.data.links.map(link => ({
            source: this.nodeMap.get(link.source) || link.source,
            target: this.nodeMap.get(link.target) || link.target,
            strength: link.strength
        }));
    }

    initialize() {
        // Create SVG container with zoom support
        const svg = d3.select(`#${this.containerId}`)
            .append("svg")
            .attr("viewBox", `0 0 ${this.width} ${this.height}`)
            .attr("width", "100%")
            .attr("height", "100%")
            .style("background", "#ffffff");

        // Store zoom behavior as class property
        this.zoom = d3.zoom()
            .scaleExtent([0.5, 3])
            .on("zoom", (event) => {
                mainGroup.attr("transform", event.transform);
            });

        svg.call(this.zoom);

        // Main group for all visualization elements
        this.svg = svg;
        const mainGroup = svg.append("g");
        this.mainGroup = mainGroup;

        // Initialize force simulation with adjusted parameters
        this.simulation = d3.forceSimulation(this.data.nodes)
            .force("link", d3.forceLink(this.data.links)
                .id(d => d.id)
                .distance(60))
            .force("charge", d3.forceManyBody().strength(-150))
            .force("center", d3.forceCenter(this.width / 2, this.height / 2))
            .force("collision", d3.forceCollide().radius(35));

        // Create legend, tooltip, links, nodes
        this.createLegend();
        this.createTooltip();
        this.createLinks();
        this.createNodes();
        this.addInteractions();
        this.addResetButton();
    }

    createLegend() {
        const legend = d3.select(`#${this.containerId}`)
            .append("div")
            .attr("class", "skills-legend")
            .style("position", "absolute")
            .style("top", "20px")
            .style("left", "20px")
            .style("background", "rgba(255, 255, 255, 0.9)")
            .style("padding", "15px")
            .style("border-radius", "8px")
            .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)");

        Object.entries(this.categoryColors).forEach(([category, color]) => {
            legend.append("div")
                .style("display", "flex")
                .style("align-items", "center")
                .style("margin", "8px")
                .style("cursor", "pointer")
                .html(`
                    <div style="width: 12px; height: 12px; background: ${color}; border-radius: 50%; margin-right: 8px;"></div>
                    <span style="font-size: 14px;">${category}</span>
                `)
                .on("click", () => this.highlightCategory(category))
                .on("mouseover", function() {
                    d3.select(this).style("opacity", 0.8);
                })
                .on("mouseout", function() {
                    d3.select(this).style("opacity", 1);
                });
        });
    }

    createTooltip() {
        this.tooltip = d3.select(`#${this.containerId}`)
            .append("div")
            .attr("class", "skills-tooltip")
            .style("position", "fixed") // Change to fixed positioning
            .style("visibility", "hidden")
            .style("background-color", "rgba(255, 255, 255, 0.95)")
            .style("padding", "15px")
            .style("border-radius", "8px")
            .style("box-shadow", "0 2px 8px rgba(0,0,0,0.2)")
            .style("max-width", "300px")
            .style("font-size", "14px")
            .style("line-height", "1.4")
            .style("z-index", "1000")
            .style("pointer-events", "none")
            .style("transform", "translate(-50%, -100%)") // Center above cursor
            .style("margin-top", "-20px"); // Add some space above cursor
    }

    createLinks() {
        this.link = this.mainGroup.append("g")
            .attr("class", "links")
            .selectAll("line")
            .data(this.data.links)
            .join("line")
            .style("stroke", "#999")
            .style("stroke-width", d => d.strength * 0.8)
            .style("stroke-opacity", 0.6);
    }

    createNodes() {
        this.node = this.mainGroup.append("g")
            .attr("class", "nodes")
            .selectAll("g")
            .data(this.data.nodes)
            .join("g")
            .call(d3.drag()
                .on("start", (event) => this.dragstarted(event))
                .on("drag", (event) => this.dragged(event))
                .on("end", (event) => this.dragended(event)));

        // Add circles to nodes - special styling for World Bank
        this.node.append("circle")
            .attr("r", d => {
                if (d.id === "World Bank Research") return 25; // Larger for current position
                if (d.category === "Position") return 20;
                return 15;
            })
            .style("fill", d => this.categoryColors[d.category])
            .style("stroke", d => d.id === "World Bank Research" ? "#FFD700" : "white") // Gold border for current position
            .style("stroke-width", d => d.id === "World Bank Research" ? 3 : 2);

        // Add labels to nodes
        this.node.append("text")
            .text(d => d.id)
            .attr("dy", d => {
                if (d.id === "World Bank Research") return -30;
                if (d.category === "Position") return -25;
                return -20;
            })
            .attr("text-anchor", "middle")
            .style("font-size", d => {
                if (d.id === "World Bank Research") return "16px";
                if (d.category === "Position") return "14px";
                return "12px";
            })
            .style("font-weight", d => {
                if (d.id === "World Bank Research") return "bold";
                if (d.category === "Position") return "bold";
                return "normal";
            })
            .style("pointer-events", "none");
    }

    addInteractions() {
        this.node.on("mouseover", (event, d) => {
            const connections = this.data.links.filter(link => 
                link.source.id === d.id || link.target.id === d.id
            );
            const connectedNodes = new Set(connections.flatMap(link => 
                [link.source.id, link.target.id]
            ));
            
            this.node.style("opacity", node => 
                connectedNodes.has(node.id) ? 1 : 0.2
            );
            this.link.style("opacity", link =>
                link.source.id === d.id || link.target.id === d.id ? 1 : 0.1
            );
            
            const statusBadge = d.id === "World Bank Research" ? 
                `<div style="background: #28a745; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-top: 8px;">CURRENT POSITION</div>` : 
                d.category === "Position" && (d.description.includes("Former") || d.description.includes("Completed")) ?
                `<div style="background: #6c757d; color: white; padding: 2px 8px; border-radius: 12px; font-size: 12px; margin-top: 8px;">COMPLETED</div>` :
                '';

            const tooltipContent = `
                <div style="border-bottom: 2px solid ${this.categoryColors[d.category]}; margin-bottom: 8px; padding-bottom: 8px;">
                    <strong style="font-size: 16px;">${d.id}</strong>
                    <div style="color: #666;">${d.category}</div>
                </div>
                <div>${d.description}</div>
                ${statusBadge}
                ${d.category === "Position" ? 
                    `<div style="margin-top: 8px; color: #666;">
                        Connected to ${connections.length} skills/experiences
                    </div>` : 
                    ''}
            `;
            
            this.tooltip
                .html(tooltipContent)
                .style("visibility", "visible");

            this.updateTooltipPosition(event);
        })
        .on("mousemove", (event) => {
            if (this.tooltip.style("visibility") === "visible") {
                this.updateTooltipPosition(event);
            }
        })
        .on("mouseout", () => {
            this.node.style("opacity", 1);
            this.link.style("opacity", 0.6);
            this.tooltip.style("visibility", "hidden");
        });

        this.simulation.on("tick", () => {
            this.link
                .attr("x1", d => d.source.x)
                .attr("y1", d => d.source.y)
                .attr("x2", d => d.target.x)
                .attr("y2", d => d.target.y);

            this.node
                .attr("transform", d => `translate(${d.x},${d.y})`);
        });
    }

    updateTooltipPosition(event) {
        // Get the scroll position
        const scrollX = window.pageXOffset || document.documentElement.scrollLeft;
        const scrollY = window.pageYOffset || document.documentElement.scrollTop;
        
        // Get the container's position
        const containerRect = document.getElementById(this.containerId).getBoundingClientRect();
        
        // Calculate mouse position relative to viewport
        const mouseX = event.clientX;
        const mouseY = event.clientY;
        
        // Get tooltip dimensions
        const tooltipNode = this.tooltip.node();
        const tooltipRect = tooltipNode.getBoundingClientRect();
        
        // Calculate tooltip position
        let tooltipX = mouseX;
        let tooltipY = mouseY;
        
        // Adjust position if tooltip would go beyond viewport edges
        // Left edge
        if (tooltipX - (tooltipRect.width / 2) < 0) {
            tooltipX = tooltipRect.width / 2;
        }
        // Right edge
        if (tooltipX + (tooltipRect.width / 2) > window.innerWidth) {
            tooltipX = window.innerWidth - (tooltipRect.width / 2);
        }
        // Top edge
        if (tooltipY - tooltipRect.height - 20 < 0) {
            // If there's not enough space above, show below cursor
            tooltipY = mouseY + 20;
            this.tooltip.style("transform", "translate(-50%, 0)");
        } else {
            // Show above cursor
            this.tooltip.style("transform", "translate(-50%, -100%)");
        }
        
        this.tooltip
            .style("left", `${tooltipX}px`)
            .style("top", `${tooltipY}px`);
    }

    addResetButton() {
        d3.select(`#${this.containerId}`)
            .append("div")
            .attr("class", "reset-button")
            .style("position", "absolute")
            .style("top", "20px")
            .style("right", "20px")
            .style("background", "rgba(255, 255, 255, 0.9)")
            .style("padding", "8px 16px")
            .style("border-radius", "4px")
            .style("box-shadow", "0 2px 4px rgba(0,0,0,0.1)")
            .style("cursor", "pointer")
            .text("Reset View")
            .on("click", () => {
                this.resetVisualization();
            })
            .on("mouseover", function() {
                d3.select(this).style("background", "rgba(255, 255, 255, 1)");
            })
            .on("mouseout", function() {
                d3.select(this).style("background", "rgba(255, 255, 255, 0.9)");
            });
    }

    resetVisualization() {
        // Reset node and link opacities
        this.node.style("opacity", 1);
        this.link.style("opacity", 0.6);
        
        // Reset zoom
        this.svg.transition()
            .duration(750)
            .call(this.zoom.transform, d3.zoomIdentity);
            
        // Restart the simulation
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

    highlightCategory(category) {
        this.node.style("opacity", d => d.category === category ? 1 : 0.2);
        this.link.style("opacity", d => 
            d.source.category === category || d.target.category === category ? 0.6 : 0.1
        );
    }
}