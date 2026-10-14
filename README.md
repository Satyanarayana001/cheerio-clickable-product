
# Cheerio — Feature Discovery & Workflow Prototype

An interactive React prototype built for the **Cheerio AI Product Intern — Assignment B**.

## Overview

### Problem

Coaching institute teams use WhatsApp campaigns to communicate with prospective students. When campaign recipients do not click a tracked link, staff may need to identify those recipients and arrange follow-ups manually.

### Proposed Solution

This prototype explores a contextual **"Next Best Step"** recommendation on the dashboard. It guides users toward configuring a workflow that follows up with campaign recipients who did not click a tracked link.

The recommendation is a proposed product experience based on Cheerio's publicly documented workflow automation concepts. It does not claim that this exact recommendation already exists in Cheerio.

## Key Features

- Simulated login and dashboard.
- Contextual feature-discovery recommendation.
- Campaign selection using illustrative sample data.
- Workflow configuration with a selectable delay, condition, and follow-up action.
- Editable follow-up message for the WhatsApp action.
- Workflow review and completion screens.
- Responsive application layout.

## Technology Stack

- React
- Vite
- JavaScript (JSX)
- CSS
- Lucide React

## Getting Started

### Prerequisites

Install [Node.js](https://nodejs.org/), which includes npm.

### 1. Clone the Repository

```bash
git clone YOUR_GITHUB_REPOSITORY_URL
cd cheerio-clickable-product
```

Replace `YOUR_GITHUB_REPOSITORY_URL` with your actual GitHub repository URL.

### 2. Install Dependencies

```bash
npm install
```

### 3. Start the Development Server

```bash
npm run dev
```

Open the local URL displayed in the terminal, usually `http://localhost:5173/`.

## Production Build

Build the application for production:

```bash
npm run build
```

Vite generates the production files in the `dist/` directory.

To preview the production build locally:

```bash
npm run preview
```

## Prototype Walkthrough

1. Open the application and use the demo login screen.
2. Explore the dashboard and locate the "Next Best Step" recommendation.
3. Open the feature guide and proceed to workflow setup.
4. Select a campaign and configure the delay, condition, and follow-up action.
5. Review the configured workflow and inspect the edit controls.
6. Reach the completion screen and note the prototype's activation status.

## Scope and Limitations

This is a concept prototype created for an internship assignment. It is not connected to Cheerio's live platform.

- Authentication is simulated.
- Campaigns, contacts, and performance metrics are illustrative.
- Workflow configuration demonstrates the proposed user experience.
- The prototype does not activate or persist a real workflow.
- No real WhatsApp messages are sent.
- No production customer data or credentials are included.

## References

- [Cheerio — Introduction to Workflow Nodes](https://www.cheerioai.com/platform-features-faqs/introduction-to-workflow-nodes)
- [Cheerio — Setting Up Drip Campaigns Using Workflows](https://www.cheerioai.com/platform-features-faqs/how-to-setup-drip-campaigns-using-workflow)
- [Cheerio — Campaigns](https://www.cheerioai.com/solutions/campaigns)
- [Cheerio — Workflow](https://www.cheerioai.com/solutions/workflow)

## Assignment Context

- **Assignment:** Cheerio AI Product Intern — Assignment B
- **Project Type:** Interactive product concept prototype
- **Primary Objective:** Explore how contextual feature discovery can encourage adoption of workflow automation.
