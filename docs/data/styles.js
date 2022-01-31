var styles = [{
  "format_version": "1.0",
  "generated_by": "cytoscape-3.9.0",
  "target_cytoscapejs_version": "~2.1",
  "title": "default",
  "style": [{
    "selector": "node",
    "css": {
      "border-color": "rgb(204,204,204)",
      "color": "rgb(0,0,0)",
      "border-width": 0.0,
      "height": 35.0,
      "shape": "ellipse",
      "border-opacity": 1.0,
      "text-opacity": 1.0,
      "font-size": 12,
      "background-opacity": 1.0,
      "width": 35.0,
      "font-family": "SansSerif.plain",
      "font-weight": "normal",
      "background-color": "rgb(137,208,245)",
      "text-valign": "center",
      "text-halign": "center",
      "content": "data(name)"
    }
  }, {
    "selector": "node[BetweennessCentrality < 0,05]",
    "css": {
      "shape": "ellipse"
    }
  }, {
    "selector": "node[BetweennessCentrality = 0,05]",
    "css": {
      "shape": "ellipse"
    }
  }, {
    "selector": "node[BetweennessCentrality > 0,05]",
    "css": {
      "shape": "diamond"
    }
    }, {
    "selector": "node[agent_type = 'GroupAgent']",
    "css": {
      "background-color": "rgb(29,105,150)"
    }
  }, {
    "selector": "node[agent_type = 'EatingAgent']",
    "css": {
      "background-color": "rgb(148,52,110)"
    }
  }, {
    "selector": "node[agent_type = 'UnconditionalAgent']",
    "css": {
      "background-color": "rgb(115,175,72)"
    }
  }, {
    "selector": "node[agent_type = 'GreenBeardAgent']",
    "css": {
      "background-color": "rgb(225,124,5)"
    }
  }, {
    "selector": "node[agent_type = 'ReputationAgent']",
    "css": {
      "background-color": "rgb(204,80,62)"
    }
  }, {
    "selector": "node[agent_type = 'FakeGreenBeardAgent']",
    "css": {
      "background-color": "rgb(237,173,8)"
    }
  }, {
    "selector": "node[agent_type = 'CultureAgent']",
    "css": {
      "background-color": "rgb(56,166,165)"
    }
  }, {
    "selector": "node[agent_type = 'KinSelectionAgent']",
    "css": {
      "background-color": "rgb(15,133,84)"
    }
  }, {
    "selector": "node:selected",
    "css": {
      "background-color": "rgb(255,255,0)"
    }
    }, {
    "selector": "edge",
    "css": {
      "font-size": 10,
      "width": 2.0,
      "line-style": "solid",
      "target-arrow-shape": "none",
      "line-color": "rgb(132,132,132)",
      "text-opacity": 1.0,
      "source-arrow-color": "rgb(0,0,0)",
      "font-family": "Dialog.plain",
      "font-weight": "normal",
      "content": "",
      "color": "rgb(0,0,0)",
      "opacity": 1.0,
      "source-arrow-shape": "none",
      "target-arrow-color": "rgb(0,0,0)"
    }
  }, {
    "selector": "edge:selected",
    "css": {
      "line-color": "rgb(255,0,0)"
    }
    }]
} ]