const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch');
const redis = require('redis');
const { dataGame } = require('./utils/listGame/dataGame');
const _ = require('lodash');
const getZoneController = require('./controllers/getZoneController');
const { cekIdGameController } = require('./controllers/cekIdGameController');
const configIdGame = require('./idgame.config');
const { default: puppeteer } = require('puppeteer');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/public', express.static('public'));

app.get('/', (req, res) => {
   const newDataGame = dataGame.map((item) => {
      return {
         name: item.name,
         slug: item.slug,
         endpoint: `/api/game/${item.slug}`,
         query: `?id=xxxx${item.isZone ? '&zone=xxx' : ''}`,
         hasZoneId: item.isZone ? true : false,
         listZoneId: item.dropdown ? `/api/game/get-zone/${item.slug}` : null,
      };
   });

   return res.json({
      name: 'Cek Data Game',
      author: 'Bagusok',
      data: _.orderBy(newDataGame, ['name'], ['asc']),
   });
});

app.get('/api/game/:slug', cekIdGameController);

app.get('/api/game/get-zone/:game', getZoneController);

app.all('*', (req, res) => {
   res.status(404).json({
      status: false,
      message: 'Not Found',
   });
});

if (configIdGame.midasbuy) {
   (async () => {
      let redisClient = redis.createClient({
         url: 'redis://default:9e76901d0a44462288b84543e25ec3d4@social-firefly-33279.upstash.io:33279',
      });

      redisClient.on('error', (error) => console.error(`Error : ${error}`));

      await redisClient.connect();

      app.set('redis', redisClient);
   })();
}

app.listen(3001, async () => {
   console.log('Server is running on port 3000');
});
