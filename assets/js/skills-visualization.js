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
                // Position nodes
                { id: "Thesis Research", category: "Position", level: 3, description: "Investigating right to be forgotten and LLMs through Meta's privacy policies in EU vs US" },
                { id: "MUN President", category: "Position", level: 3, description: "President of UChicago Model UN, managing 60+ team members and $78k+ budget" },
                { id: "Data Science TA", category: "Position", level: 2, description: "Teaching Assistant for Ethics in Data Science course" },
                { id: "Data Cognition Lab", category: "Position", level: 3, description: "Research position focusing on participatory budgeting visualization" },
                { id: "Results for America", category: "Position", level: 3, description: "Data analysis role focused on government funding equity" },
                { id: "Global Human Rights Lab", category: "Position", level: 3, description: "Research position investigating human rights violations" },
                { id: "Folkmoot Guide", category: "Position", level: 2, description: "Assistant Guide for International Cultural Festival" },

                // Technical nodes
                { id: "Python", category: "Technical", level: 3, description: "Advanced Python development with 4+ years experience in data analysis and automation" },
                { id: "Data Visualization", category: "Technical", level: 3, description: "Creating interactive and static visualizations using D3.js and other tools" },
                { id: "Statistical Analysis", category: "Technical", level: 3, description: "Advanced statistical methods and analysis for research and data interpretation" },
                { id: "Machine Learning", category: "Technical", level: 2, description: "Experience with ML algorithms and frameworks" },
                { id: "Web Development", category: "Technical", level: 2, description: "Full-stack development experience with focus on data-driven applications" },

                // Research nodes
                { id: "Human Rights Research", category: "Research", level: 3, description: "Investigating and documenting human rights cases, policy analysis, and impact assessment" },
                { id: "Privacy Policy Analysis", category: "Research", level: 3, description: "Analyzing privacy policies and their implications across different jurisdictions" },
                { id: "Data Ethics", category: "Research", level: 2, description: "Understanding and applying ethical frameworks in data science" },
                { id: "Academic Writing", category: "Research", level: 2, description: "Publishing research papers and creating comprehensive reports" },

                // Leadership nodes
                { id: "Team Management", category: "Leadership", level: 3, description: "Leading and coordinating teams of 60+ members in Model UN" },
                { id: "Budget Management", category: "Leadership", level: 3, description: "Managing and allocating $78,000+ annual budget" },
                { id: "Training Development", category: "Leadership", level: 2, description: "Creating and implementing training programs for team members" },

                // Communication nodes
                { id: "Public Speaking", category: "Communication", level: 3, description: "Presenting at conferences and leading team training sessions" },
                { id: "Cross-cultural Communication", category: "Communication", level: 3, description: "Experience with international teams and cultural festivals" },
                { id: "Technical Writing", category: "Communication", level: 2, description: "Creating documentation and technical reports" },

                // Domain Knowledge nodes
                { id: "International Relations", category: "Domain", level: 2, description: "Understanding of global politics and international systems" },
                { id: "Human Rights Law", category: "Domain", level: 2, description: "Knowledge of human rights frameworks and legal systems" },
                { id: "Privacy Rights", category: "Domain", level: 3, description: "Expertise in privacy rights and data protection regulations" }
            ],
            links: [
                // Technical Foundations
                { source: "Python", target: "Data Visualization", strength: 3 },
                { source: "Python", target: "Statistical Analysis", strength: 3 },
                { source: "Python", target: "Machine Learning", strength: 2 },
                { source: "Web Development", target: "Data Visualization", strength: 2 },
                { source: "Machine Learning", target: "Data Ethics", strength: 2 },
                { source: "Machine Learning", target: "Data Visualization", strength: 2 },

                // Research Connections
                { source: "Privacy Policy Analysis", target: "Privacy Rights", strength: 3 },
                { source: "Human Rights Research", target: "Human Rights Law", strength: 3 },
                { source: "Data Ethics", target: "Privacy Rights", strength: 3 },
                { source: "Academic Writing", target: "Human Rights Research", strength: 2 },

                // Position to Technical
                { source: "Data Science TA", target: "Python", strength: 3 },
                { source: "Data Science TA", target: "Machine Learning", strength: 3 },
                { source: "Data Cognition Lab", target: "Python", strength: 3 },
                { source: "Data Cognition Lab", target: "Data Visualization", strength: 3 },
                { source: "Data Cognition Lab", target: "Academic Writing", strength: 2 },
                { source: "Data Cognition Lab", target: "Technical Writing", strength: 2 },
                { source: "Results for America", target: "Statistical Analysis", strength: 3 },
                { source: "Results for America", target: "Python", strength: 3 },
                { source: "Thesis Research", target: "Privacy Policy Analysis", strength: 3 },

                // Leadership and Management
                { source: "MUN President", target: "Team Management", strength: 3 },
                { source: "MUN President", target: "Budget Management", strength: 3 },
                { source: "MUN President", target: "Training Development", strength: 3 },
                { source: "Folkmoot Guide", target: "Budget Management", strength: 3 },

                // Communication Links
                { source: "Public Speaking", target: "Training Development", strength: 2 },
                { source: "Technical Writing", target: "Privacy Policy Analysis", strength: 2 },
                { source: "Cross-cultural Communication", target: "International Relations", strength: 3 },

                // Position to Domain
                { source: "Global Human Rights Lab", target: "Human Rights Research", strength: 3 },
                { source: "Global Human Rights Lab", target: "Human Rights Law", strength: 3 },
                { source: "Thesis Research", target: "Privacy Rights", strength: 3 },
                { source: "Folkmoot Guide", target: "Cross-cultural Communication", strength: 3 },
                { source: "Folkmoot Guide", target: "International Relations", strength: 2 },
                { source: "Data Science TA", target: "Data Ethics", strength: 2 },

                // Leadership & Domain Connections
                { source: "MUN President", target: "International Relations", strength: 3 },
                { source: "Team Management", target: "Cross-cultural Communication", strength: 2 },

                // Research & Domain/Communication Links
                { source: "Human Rights Research", target: "International Relations", strength: 2 },
                { source: "Privacy Policy Analysis", target: "International Relations", strength: 2 },
                { source: "Academic Writing", target: "Technical Writing", strength: 2 },

                // Position & Communication Links
                { source: "MUN President", target: "Public Speaking", strength: 3 },
                { source: "Data Science TA", target: "Public Speaking", strength: 2 },
                { source: "Global Human Rights Lab", target: "Technical Writing", strength: 2 },

                // Technical & Research Links
                { source: "Data Visualization", target: "Academic Writing", strength: 2 },
                { source: "Statistical Analysis", target: "Academic Writing", strength: 2 },

                // Leadership & Communication
                { source: "Team Management", target: "Public Speaking", strength: 2 },
                { source: "Training Development", target: "Cross-cultural Communication", strength: 2 }
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
            .force("collision", d3.forceCollide().radius(30));

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

        // Add circles to nodes
        this.node.append("circle")
            .attr("r", d => d.category === "Position" ? 20 : 15)
            .style("fill", d => this.categoryColors[d.category])
            .style("stroke", "white")
            .style("stroke-width", 2);

        // Add labels to nodes
        this.node.append("text")
            .text(d => d.id)
            .attr("dy", d => d.category === "Position" ? -25 : -20)
            .attr("text-anchor", "middle")
            .style("font-size", d => d.category === "Position" ? "14px" : "12px")
            .style("font-weight", d => d.category === "Position" ? "bold" : "normal")
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
            
            const tooltipContent = `
                <div style="border-bottom: 2px solid ${this.categoryColors[d.category]}; margin-bottom: 8px; padding-bottom: 8px;">
                    <strong style="font-size: 16px;">${d.id}</strong>
                    <div style="color: #666;">${d.category}</div>
                </div>
                <div>${d.description}</div>
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