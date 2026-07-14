# Backend Bootstrap Status

The Laravel backend is planned to live in this directory.

## Current blocker

`composer create-project laravel/laravel:^12.0 backend` currently fails in this environment due GitHub authentication constraints during package download.

## Next step when credentials/network are available

```bash
rm -rf backend
composer create-project laravel/laravel:^12.0 backend --no-interaction
cd backend
cp .env.example .env
php artisan key:generate
php artisan migrate
php artisan serve
```

## Planned baseline modules

- Tenant management and domain resolution
- Authentication and session/token management (Sanctum)
- RBAC policies and permissions
- Content management API
- Members, events, sermons, and announcements modules

