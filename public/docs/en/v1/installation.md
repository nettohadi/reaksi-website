# Installation

React and other popular UI libraries usually provide a CLI to quickly setup development environment for their users. 
This makes getting started on any of them easy and straight forward. Unfortunately, Reaksi does not have a CLI yet, 
but we're planning to create one in the future. For now, you can clone our ready made template on GitHub to get 
started using Reaksi.

Here are the 3 steps to get started with Reaksi :

## 1. Clone the GitHub template

Run the following command to clone the template.

```bash
npx degit nettohadi/reaksi-template [your-project-name]
```

If you prefer to use Typescript, you can clone the template for Typescript.

```bash
npx degit nettohadi/reaksi-template-ts [your-project-name]
```

## 2. Install Dependencies

First, cd into [your-project-name] folder.

```bash
cd [your-project-name]
```

## 3. Run Local Development Server

To run local development server and watch for changes :

```bash
npm run start
```

We've setup Webpack hot module replacement feature in this template, so everytime you make changes, the browser will automatically refresh.
