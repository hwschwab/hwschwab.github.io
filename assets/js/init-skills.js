import SkillsVisualization from './skills-visualization.js';

document.addEventListener('DOMContentLoaded', () => {
    console.log('Initializing Skills Visualization');
    
    const container = document.getElementById('skills-container');
    if (!container) {
        console.error('Skills container not found!');
        return;
    }
    
    try {
        const visualization = new SkillsVisualization('skills-container');
        visualization.initialize();
        console.log('Skills visualization initialized successfully');
    } catch (error) {
        console.error('Error initializing skills visualization:', error);
    }
});