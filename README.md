# pocknowledgewebapp
Proof of concept for RDF Web Application with Blazegraph and React

Demo: https://www.daniel-mantler.de/Projects/knowledge/
![screenshot](https://user-images.githubusercontent.com/54062429/71923998-6e11d180-318e-11ea-8927-798ee13a90b8.png)

Tutorial for local installation:

1. Follow Blazegraph installation guide to install the standard server at: https://wiki.blazegraph.com/wiki/index.php/Installation_guide

2. Access the dashboard at: http://localhost:9999/blazegraph/ <br>
	2.1. Load the [RDF Data](https://github.com/dmntlr/pocknowledgewebapp/blob/master/Service.owl) into the standard namespace by drag and dropping it into the 'UPDATE' tab.
3. A SPARQL REST-API for the knowledgebase is now accessible at: http://localhost:9999/bigdata/sparql

4. Install Node.js

5. Run the following commands in the [frontend](https://github.com/dmntlr/pocknowledgewebapp/tree/master/frontend) folder <br>
	5.1. 'npm install' <br>
	5.2. 'npm start' 

6. The frontend will be accessible http://localhost:3000
