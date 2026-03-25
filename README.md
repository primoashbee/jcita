# JCITA Tabacuhan

Jesus Christ is the Answer Church — Assembly of God, Tabacuhan, Sta. Rita, Olongapo City, Zambales, Philippines.

## Tech Stack

- **Backend:** Laravel (PHP) + PostgreSQL
- **Frontend:** Nuxt 3 + Vue 3 (Composition API) + TypeScript + Tailwind CSS
- **Runtime:** Bun
- **PWA:** Installable with push notifications

## Prerequisites

- [PHP 8.2+](https://www.php.net/)
- [Composer](https://getcomposer.org/)
- [Bun](https://bun.sh/)
- [PostgreSQL](https://www.postgresql.org/)

## Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/jcita.git
cd jcita
```

### 2. Backend setup (Laravel)

```bash
# Install PHP dependencies
composer install

# Copy environment file and configure your database
cp .env.example .env
php artisan key:generate

# Update .env with your PostgreSQL credentials
# DB_CONNECTION=pgsql
# DB_HOST=127.0.0.1
# DB_PORT=5432
# DB_DATABASE=jcita
# DB_USERNAME=your_user
# DB_PASSWORD=your_password

# Run migrations
php artisan migrate
```

### 3. Frontend setup (Nuxt)

```bash
# Install frontend dependencies
cd frontend
bun install
```

## Running the App

### Frontend (Nuxt)

```bash
# From the project root
bun dev

# Or from the frontend directory
cd frontend
bun dev
```

The frontend runs at **http://localhost:3000**

### Backend (Laravel)

```bash
php artisan serve
```

The API runs at **http://localhost:8000**

## Project Structure

```
jcita/
├── app/                  # Laravel controllers, models
├── config/               # Laravel config
├── database/             # Migrations, seeders
├── frontend/             # Nuxt 3 app
│   ├── pages/            # File-based routing
│   ├── layouts/          # Layouts
│   ├── composables/      # Shared logic
│   ├── stores/           # Pinia stores
│   ├── public/           # Static assets (logo, icons)
│   └── nuxt.config.ts    # Nuxt configuration
├── routes/               # Laravel routes (API)
├── package.json          # Root scripts (proxies to frontend)
└── composer.json         # PHP dependencies
```

## Social

- [Facebook](https://www.facebook.com/JCITATabacuhan)
- [X / Twitter](https://x.com/JCITATabacuhan)
