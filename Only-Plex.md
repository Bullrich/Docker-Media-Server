To launch only plex, execute the following command:

```bash
docker run --name plex -e VERSION=latest -e PUID=1001 -e PGID=1001 -e TZ=America/Argentina/Buenos_Aires -p 32400:32400/tcp -p 3005:3005/tcp -p 8324:8324/tcp -p 32469:32469/tcp -p 1900:1900/udp -p 32410:32410/udp -p 32412:32412/udp -p 32413:32413/udp -p 32414:32414/udp -v $(pwd)/pi/home/media/plexconfig/:/config -v $(pwd)/pi/home/nginx/config/keys:/cert_keys -v $(pwd)/pi/storage/plexmedialibrary/tv-shows/:/data/tvshows -v $(pwd)/pi/storage/plexmedialibrary/movies/:/data/movies -v $(pwd)/pi/storage/plexmedialibrary/anime/:/data/anime -v $(pwd)/pi/home/media/transcode:/transcode plexinc/pms-docker
```