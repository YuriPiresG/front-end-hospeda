# Hospeda Eventos

This is a React + TypeScript + Vite project with two pages: `/` for the activities view and `/create-activity` for the form to create new activities.

## Features

- The activities view shows a list of activities with their name, date, and time.
- The activities view has a button to create a new activity, delete or edit an existing one.
- The form to create a new activity was also used to update it, because the due date was very close.

## Technologies

- Data fetching is handled using Axios and React Query.
- Form handling is implemented with React Hook Form and Zod for validation.
- Styling is done using Tailwind CSS.

## Prerequisites

Before running the project, ensure you have the following installed on your system:

- Node.js (https://nodejs.org) (v18.13.0)
- npm (Node Package Manager)
- git

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository
2. Install the dependencies with npm i
3. Copy the env.example to an .env
4. Run npm run dev

## Environment
- Development: https://front-end-hospeda.vercel.app