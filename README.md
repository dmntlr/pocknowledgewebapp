# pocknowledgewebapp
Proof of concept for RDF Web Application with Blazegraph and React

Demo: https://www.daniel-mantler.de/Projects/knowledge/

Tutorial for local installation:

1. Follow Blazegraph installation guide to install the standard server at: https://wiki.blazegraph.com/wiki/index.php/Installation_guide

2. Access the dashboard at http://localhost:9999/blazegraph/
  2.1. Create a the namespace 'prod' under the tab 'NAMESPACES'
  2.2. Use the namespace
  2.3. Load the RDF Data into the namespace by drag and dropping it into the 'UPDATE' tab.
3. A SPARQL REST-API for the knowledgebase is now accessible at http://localhost:9999/bigdata/sparql

4. Install Node.js

5. Run the following commands in the frontend folder(:
  5.1. 'npm install'
  5.2. 'npm start'

6. The frontend will be accessible http://localhost:3000
