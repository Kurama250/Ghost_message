<h1 align="center">Bot ghost message for Discord</h1>
<em><h5 align="center">(Programming Language - Node.js | Shell)</h5></em>

<p align="center">
  <img src="https://img.shields.io/github/stars/Kurama250/Ghost_message">
  <img src="https://img.shields.io/github/license/Kurama250/Ghost_message">
  <img src="https://img.shields.io/github/repo-size/Kurama250/Ghost_message">
  <img src="https://img.shields.io/badge/stability-stable-green">
</p>

<p align="center">
  <img src="https://img.shields.io/npm/v/module-name">
  <img src="https://img.shields.io/npm/v/discord.js@12?label=discord.js@12">
  <img src="https://img.shields.io/npm/v/fs?label=fs">
</p>

# Tutorial to install the bot ! For LINUX (VPS or Dedicated Server)

## 1 - on Terminal

<h5>A) Auto installer</h5>

- Run command :

```shell script
bash <(curl -s https://raw.githubusercontent.com/Ghost_message/main/setup.sh)
```
<h5>B) Manual installer</h5>

```shell script
apt update && apt upgrade -y
apt install npm nodejs git -y
curl -fsSL https://deb.nodesource.com/setup_20.x | bash - &&\
apt-get install -y nodejs
```

```shell script
git clone https://github.com/Kurama250/Ghost_message.git
cd Ghost_message/
npm install fs discord.js@12
npm install pm2 -g
```
## 2 - on Terminal

```shell script
nano config.json
```

- And you also change this line :

```json
    "token": "YOUR_TOKEN",
    "ghostServers": ["SERVER_ID_1", "SERVER_ID_2"],
```

- After doing this, press CTRL + X and you press Y and ENTER then you do the following commands !

## 3 - on Terminal

```shell script
pm2 start main.js --watch
```
- Demo : 

![alt text](https://github.com/Kurama250/Ghost_message/blob/main/ghost.png)

<h3 align="center"><strong>Support on Discord :</strong> <a href="https://discord.gg/6aebQGdDxB">Discord Link</a></3>
<h3 align="center">If you like this repository don't hesitate to give it a star ⭐ !</h3>
<h1 align="center">Then it's the end you have started the bot have fun !</h1>
