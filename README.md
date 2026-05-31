# Portfolio Website

My personal portfolio built with React, Vite, and Tailwind CSS v4.

## Tech Stack

- React 19
- Vite 6
- Tailwind CSS v4
- React Router v6
- Lucide React (icons)
- Formspree (contact form)

## Local Development

```bash
npm install
npm run dev
```

Opens at `http://localhost:8080`

## How to Add a New Project

1. Open `src/data/projects.json`
2. Add a new entry at the end of the array:

```json
{
  "id": 8,
  "title": "Your Project Name",
  "description": "Brief description of what the project does.",
  "image": "https://images.unsplash.com/photo-XXXXX?w=600&h=400&fit=crop",
  "technologies": ["Python", "TensorFlow", "FastAPI"],
  "category": "Machine Learning",
  "liveUrl": "https://your-live-url.com",
  "githubUrl": "https://github.com/FayselN/your-repo"
}
```

3. Commit and push:

```bash
git add .
git commit -m "Add: Your Project Name"
git push
```

4. GitHub Actions auto-deploys to `https://fayseln.github.io` within 2 minutes.

### Available Categories

- `Machine Learning`
- `Time Series`
- `NLP`
- `Backend Systems`
- `Data Science`

### Project Fields

| Field | Required | Description |
|-------|----------|-------------|
| `id` | Yes | Unique number (next in sequence) |
| `title` | Yes | Project name |
| `description` | Yes | 1-2 sentence summary |
| `image` | Yes | Unsplash or direct image URL (600x400) |
| `technologies` | Yes | Array of tech tags |
| `category` | Yes | One of the categories above |
| `liveUrl` | No | Live demo URL, use `#` if none |
| `githubUrl` | No | GitHub repo URL, use `#` if none |

### Finding Project Images

Go to [unsplash.com](https://unsplash.com) and search for relevant keywords (e.g., "machine learning", "data science", "code"). Copy the image URL with `?w=600&h=400&fit=crop` appended.

## Update Resume

Replace `public/resume.pdf` with your actual PDF file, then push.

## Update Profile Image

Replace `public/assets/profile-CLF03sl0.jpg` with your photo, then push.

## Deployment

Auto-deploys via GitHub Actions on every push to `main`. No manual steps needed.

Check deployment status: https://github.com/FayselN/fayseln.github.io/actions

Live site: https://fayseln.github.io
