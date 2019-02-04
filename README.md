# Media Center

This is a media center which runs several docker containers and links them together.

I made this for a Raspberry Pi, hence the volume is referenced to `./pi`, but you can map those directories anywhere you want.

## Images and their URIs

- Heimdall: [your-ip:80](0.0.0.0:80)
- Plex: [your-ip:32400/web](0.0.0.0:32400/web)
- Radarr: [your-ip:7878](0.0.0.0:7878)
- Sonarr: [your-ip:8989](0.0.0.0:8989)
- Jacket: [your-ip:9117](0.0.0.0:9117)
- Transmission: [your-ip:9091](0.0.0.0:9091)

## Requirement

- [Docker](https://docs.docker.com/install/)

## How to use

First, ensure you have Docker running and you are in the project directory, then run the following command `docker-compose up`.

Docker should download all the images and start the servers. First time it boot up it takes some time to load the dashboard.

You can configure Heimdall's dashboard to have all the urls at hand without having to use the port numbers.

## Configuration

Because you are using docker, you'll have to adapt the configurations.

### Transmission

Be sure to run the docker-compose command at least one time, then stop it and do the following:

Modify the file `pi/home/media/transmission/settings.json`.

Change the following values:
- `rpc-authentication-required` to true
- `rpc-username` to "admin" (or anything you prefer)
- `rpc-password` to "admin" (or, again, anything you prefer)

### Sonarr and Radarr

#### Download client

Fill the values as 

|Field|Value|
|---|---|
|Host|transmission|
|Port|9091|
|Username|admin|
|Password|admin|

#### Adding Jackett indexers

When you click `Copy torznab Feed` button Jacket will copy a uri similar to `http://localhost:9117/api/v2.0/indexers/indexername/results/torznab/` to your clipboard.

You must replace the `localhost` value for `jackett` everytime you add an indexer. 
It should have something like `http://jackett:9117/` at the beggining.

## Cleaning the images

If you mess it up in some point, the best way to clean all the images and force a redownload of the whole project is to execute the following commands:

```bash
# Stop all the running docker images
docker stop $(docker ps -a -q)
# Remove all the existing images
docker rm $(docker ps -a -q)
# If you want to re download all the images you can also execute the following command
docker rmi $(docker images -q)
```

## Deleting all the files

If you want to delete all the existing files, simply delete the `pi` folder. You'll have to configure every server again, so be careful.