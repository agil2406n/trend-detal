# Trend Detal Hetzner deploy

Bu layihə statik saytdır. Hetzner serverində Nginx ilə yayımlamaq ən sadə yoldur.

## Lazım olan məlumatlar

- Server IP-si
- SSH istifadəçisi, məsələn `root` və ya `deploy`
- Domen adı, məsələn `trenddetal.az`
- Domenin DNS A record-u server IP-sinə yönəlməlidir

## 1. Serverə daxil ol

```bash
ssh root@SERVER_IP
```

## 2. Lazım olan paketləri qur

Ubuntu/Debian server üçün:

```bash
apt update
apt install -y nginx git certbot python3-certbot-nginx
```

## 3. Saytı serverə çək

```bash
mkdir -p /var/www
cd /var/www
git clone https://github.com/agil2406n/trend-detal.git trend-detal
chown -R www-data:www-data /var/www/trend-detal
```

Əgər qovluq əvvəlcədən varsa, yeniləmək üçün:

```bash
cd /var/www/trend-detal
git pull --ff-only
chown -R www-data:www-data /var/www/trend-detal
```

## 4. Nginx sayt faylını yarat

`/etc/nginx/sites-available/trend-detal` faylı:

```nginx
server {
    listen 80;
    listen [::]:80;
    server_name trenddetal.az www.trenddetal.az;

    root /var/www/trend-detal;
    index index.html;

    access_log /var/log/nginx/trend-detal.access.log;
    error_log /var/log/nginx/trend-detal.error.log;

    location / {
        try_files $uri $uri/ /index.html;
    }

    location ~* \.(?:css|js|json|png|jpg|jpeg|gif|svg|webp|ico|pdf)$ {
        expires 30d;
        add_header Cache-Control "public, max-age=2592000";
        try_files $uri =404;
    }
}
```

`server_name` sətrində domeni öz domeninlə dəyiş.

## 5. Saytı aktiv et

```bash
ln -s /etc/nginx/sites-available/trend-detal /etc/nginx/sites-enabled/trend-detal
nginx -t
systemctl reload nginx
```

## 6. HTTPS qoş

DNS artıq server IP-sinə yönəlibsə:

```bash
certbot --nginx -d trenddetal.az -d www.trenddetal.az
```

## 7. Konfiqurasiyanı real məlumatlarla dəyiş

`/var/www/trend-detal/config.js` faylında bunları yenilə:

```js
whatsappNumber: "994XXXXXXXXX",
forkcartAdminUrl: "https://...",
forkcartStoreUrl: "https://...",
```

Sonra:

```bash
systemctl reload nginx
```

## Yoxlama

```bash
curl -I http://trenddetal.az
curl -I https://trenddetal.az
```

Hər ikisində sayt cavab verməlidir. HTTPS qoşulandan sonra HTTP avtomatik HTTPS-ə yönləndirilə bilər.
