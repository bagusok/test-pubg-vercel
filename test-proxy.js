// // npm install axios http-proxy-agent https-proxy-agent
const axios = require('axios');
const HttpProxyAgent = require('http-proxy-agent');
const HttpsProxyAgent = require('https-proxy-agent');

const proxies = [
   { ip: '122.155.165.191', port: '3128' },
   { ip: '20.205.61.143', port: '80' },
   { ip: '64.227.188.77', port: '8080' },
   { ip: '40.119.236.22', port: '80' },
   { ip: '140.238.1.77', port: '8080' },
   { ip: '20.210.113.32', port: '80' },
   { ip: '61.28.233.217', port: '3128' },
   { ip: '113.53.231.133', port: '3129' },
   { ip: '20.111.54.16', port: '8123' },
   { ip: '102.165.51.172', port: '3128' },
   { ip: '203.112.223.126', port: '8080' },
   { ip: '103.121.149.69', port: '8080' },
   { ip: '51.68.220.201', port: '8080' },
   { ip: '138.68.195.70', port: '31290' },
   { ip: '169.55.89.6', port: '80' },
   { ip: '159.69.30.194', port: '8080' },
   { ip: '142.132.233.188', port: '8080' },
   { ip: '103.154.230.110', port: '5678' },
   { ip: '62.210.209.223', port: '3128' },
   { ip: '194.195.253.116', port: '8080' },
   { ip: '65.21.49.129', port: '8080' },
   { ip: '20.24.43.214', port: '80' },
   { ip: '20.212.147.91', port: '3128' },
   { ip: '116.203.65.201', port: '8080' },
   { ip: '65.21.244.208', port: '8080' },
   { ip: '65.109.128.221', port: '8080' },
   { ip: '65.109.172.158', port: '8080' },
   { ip: '5.78.69.176', port: '8080' },
   { ip: '118.174.211.220', port: '9870' },
   { ip: '147.139.181.92', port: '3128' },
   { ip: '65.109.169.151', port: '8080' },
   { ip: '135.181.31.199', port: '8080' },
   { ip: '135.181.255.176', port: '8080' },
   { ip: '20.210.113.32', port: '8123' },
   { ip: '47.74.34.81', port: '1111' },
   { ip: '35.198.37.50', port: '3129' },
   { ip: '35.198.60.192', port: '3129' },
   { ip: '35.198.33.67', port: '3129' },
   { ip: '34.151.236.74', port: '3129' },
   { ip: '157.90.16.197', port: '8080' },
   { ip: '35.199.81.224', port: '3129' },
   { ip: '116.203.129.42', port: '8080' },
   { ip: '35.199.82.243', port: '3129' },
   { ip: '35.198.33.35', port: '3129' },
   { ip: '35.198.7.15', port: '3129' },
   { ip: '35.247.245.218', port: '3129' },
   { ip: '35.199.84.54', port: '3129' },
   { ip: '34.95.191.217', port: '3129' },
   { ip: '20.111.54.16', port: '80' },
   { ip: '34.151.227.20', port: '3129' },
   { ip: '95.217.186.197', port: '8080' },
   { ip: '35.198.13.134', port: '3129' },
   { ip: '95.216.188.159', port: '8080' },
   { ip: '93.95.229.172', port: '3128' },
   { ip: '20.69.79.158', port: '8443' },
   { ip: '65.109.230.111', port: '8080' },
   { ip: '115.144.102.39', port: '10080' },
   { ip: '115.171.217.15', port: '7890' },
   { ip: '118.31.2.38', port: '8999' },
   { ip: '121.43.52.44', port: '3128' },
   { ip: '94.103.97.61', port: '8080' },
   { ip: '112.124.38.70', port: '3128' },
   { ip: '128.140.38.254', port: '8080' },
   { ip: '35.247.221.112', port: '3129' },
   { ip: '35.247.237.131', port: '3129' },
   { ip: '34.95.180.164', port: '3129' },
   { ip: '165.227.81.188', port: '9992' },
   { ip: '95.56.254.139', port: '3128' },
   { ip: '35.198.3.167', port: '3129' },
   { ip: '35.247.243.5', port: '3129' },
   { ip: '35.198.6.67', port: '3129' },
   { ip: '35.198.16.85', port: '3129' },
   { ip: '35.198.9.82', port: '3129' },
   { ip: '35.247.243.35', port: '3129' },
   { ip: '95.217.20.92', port: '8080' },
   { ip: '47.98.219.185', port: '8999' },
   { ip: '113.125.82.11', port: '3128' },
   { ip: '122.9.21.228', port: '8000' },
   { ip: '128.140.89.15', port: '8080' },
   { ip: '34.140.70.242', port: '8080' },
   { ip: '20.99.187.69', port: '8443' },
   { ip: '163.172.31.44', port: '80' },
   { ip: '35.247.209.65', port: '3129' },
   { ip: '95.216.213.21', port: '8080' },
   { ip: '65.108.63.60', port: '8080' },
   { ip: '34.95.175.79', port: '3129' },
   { ip: '34.95.185.169', port: '3129' },
   { ip: '20.206.106.192', port: '80' },
   { ip: '94.103.97.60', port: '8080' },
   { ip: '87.246.54.221', port: '8888' },
   { ip: '190.113.40.66', port: '999' },
   { ip: '103.69.108.78', port: '8191' },
   { ip: '34.95.187.154', port: '3129' },
   { ip: '34.151.234.30', port: '3129' },
   { ip: '34.95.204.47', port: '3129' },
   { ip: '35.199.82.214', port: '3129' },
   { ip: '35.247.223.9', port: '3129' },
   { ip: '34.95.176.173', port: '3129' },
   { ip: '35.247.236.135', port: '3129' },
   { ip: '185.108.141.49', port: '8080' },
   { ip: '35.247.228.137', port: '3129' },
   { ip: '182.253.183.98', port: '80' },
   { ip: '35.199.74.74', port: '3129' },
   { ip: '34.151.243.210', port: '3129' },
   { ip: '34.95.207.20', port: '3129' },
   { ip: '103.149.239.214', port: '8088' },
   { ip: '135.181.198.30', port: '8080' },
   { ip: '135.181.88.74', port: '8080' },
   { ip: '65.21.244.31', port: '8080' },
   { ip: '35.247.214.238', port: '3129' },
   { ip: '191.97.6.213', port: '999' },
   { ip: '181.129.20.235', port: '999' },
   { ip: '154.70.107.81', port: '3128' },
   { ip: '201.91.82.155', port: '3128' },
   { ip: '120.76.204.38', port: '8081' },
   { ip: '51.159.0.236', port: '3128' },
   { ip: '65.108.55.44', port: '8080' },
   { ip: '47.97.97.119', port: '3128' },
   { ip: '180.184.91.187', port: '443' },
   { ip: '111.225.152.232', port: '8089' },
   { ip: '121.43.168.54', port: '3128' },
   { ip: '123.57.79.183', port: '53128' },
   { ip: '181.78.13.211', port: '999' },
   { ip: '128.90.147.87', port: '8118' },
   { ip: '105.112.191.250', port: '3128' },
   { ip: '185.169.183.98', port: '8080' },
   { ip: '140.246.114.169', port: '59394' },
   { ip: '36.138.120.73', port: '3128' },
   { ip: '47.108.57.118', port: '8888' },
   { ip: '181.191.226.1', port: '999' },
   { ip: '192.227.128.179', port: '8080' },
   { ip: '120.79.86.123', port: '80' },
   { ip: '103.157.117.227', port: '8080' },
   { ip: '186.166.138.50', port: '999' },
   { ip: '202.8.74.9', port: '8080' },
   { ip: '34.151.232.117', port: '3129' },
   { ip: '35.247.253.239', port: '3129' },
   { ip: '35.198.22.74', port: '3129' },
   { ip: '134.19.254.2', port: '21231' },
   { ip: '221.6.201.74', port: '9999' },
   { ip: '64.225.4.29', port: '9499' },
   { ip: '122.52.196.36', port: '8080' },
   { ip: '181.74.81.195', port: '999' },
   { ip: '74.84.150.50', port: '3128' },
   { ip: '103.148.39.42', port: '84' },
   { ip: '27.147.209.215', port: '8080' },
   { ip: '103.1.50.56', port: '3125' },
   { ip: '185.56.235.246', port: '18081' },
   { ip: '170.80.58.102', port: '5566' },
   { ip: '154.72.90.74', port: '8081' },
   { ip: '179.1.129.93', port: '999' },
   { ip: '201.174.10.170', port: '999' },
   { ip: '5.78.42.109', port: '8080' },
   { ip: '34.95.203.204', port: '3129' },
   { ip: '47.115.16.97', port: '3128' },
   { ip: '200.105.215.22', port: '33630' },
   { ip: '103.144.18.94', port: '8083' },
   { ip: '212.46.230.102', port: '6969' },
   { ip: '35.198.33.46', port: '3129' },
   { ip: '45.167.253.129', port: '999' },
   { ip: '103.137.91.250', port: '8080' },
   { ip: '103.183.60.226', port: '9812' },
   { ip: '39.106.16.190', port: '3128' },
   { ip: '206.62.64.34', port: '8080' },
   { ip: '34.106.119.17', port: '8585' },
   { ip: '85.25.91.156', port: '5566' },
   { ip: '201.182.251.142', port: '999' },
   { ip: '43.138.174.22', port: '8888' },
   { ip: '223.204.48.65', port: '8080' },
   { ip: '95.217.179.222', port: '8080' },
   { ip: '190.90.8.74', port: '8080' },
   { ip: '185.169.183.190', port: '8080' },
   { ip: '47.100.201.85', port: '443' },
   { ip: '167.99.245.31', port: '8080' },
   { ip: '190.119.76.68', port: '8080' },
   { ip: '88.255.102.105', port: '8080' },
   { ip: '177.105.232.114', port: '8080' },
   { ip: '124.158.163.202', port: '8080' },
   { ip: '92.255.202.78', port: '8080' },
   { ip: '68.132.12.228', port: '8888' },
   { ip: '136.243.55.199', port: '3128' },
   { ip: '196.202.209.167', port: '32650' },
   { ip: '183.221.242.102', port: '9443' },
   { ip: '50.235.149.74', port: '8080' },
   { ip: '196.216.65.57', port: '8080' },
   { ip: '217.27.124.62', port: '8080' },
   { ip: '80.253.246.15', port: '8181' },
   { ip: '101.109.176.69', port: '8080' },
   { ip: '35.247.245.133', port: '3129' },
   { ip: '103.167.107.149', port: '8080' },
   { ip: '37.207.45.15', port: '48678' },
   { ip: '87.250.63.90', port: '80' },
   { ip: '64.225.4.29', port: '9864' },
   { ip: '194.169.167.5', port: '8080' },
   { ip: '102.66.242.31', port: '9999' },
   { ip: '103.241.206.29', port: '3129' },
   { ip: '90.154.124.211', port: '8080' },
   { ip: '156.234.39.152', port: '8080' },
   { ip: '185.49.107.172', port: '8080' },
   { ip: '84.54.185.203', port: '8080' },
   { ip: '45.79.122.208', port: '3128' },
   { ip: '185.32.6.129', port: '8090' },
   { ip: '208.79.11.97', port: '9080' },
   { ip: '103.36.10.143', port: '3125' },
   { ip: '92.119.71.90', port: '8880' },
   { ip: '45.61.187.67', port: '4002' },
   { ip: '45.61.187.67', port: '4004' },
   { ip: '45.61.187.67', port: '4007' },
   { ip: '179.212.175.144', port: '8085' },
   { ip: '45.61.187.67', port: '4001' },
   { ip: '190.211.175.191', port: '999' },
   { ip: '45.184.131.56', port: '8181' },
   { ip: '186.121.235.66', port: '8080' },
   { ip: '186.97.172.178', port: '60080' },
   { ip: '85.217.192.39', port: '1414' },
   { ip: '176.56.139.34', port: '8080' },
   { ip: '91.228.239.216', port: '3128' },
   { ip: '45.61.187.67', port: '4005' },
   { ip: '45.143.98.2', port: '3128' },
   { ip: '181.129.87.170', port: '999' },
   { ip: '221.113.87.173', port: '80' },
   { ip: '35.247.248.104', port: '3129' },
   { ip: '35.199.83.153', port: '3129' },
   { ip: '35.247.218.60', port: '3129' },
   { ip: '103.66.168.20', port: '80' },
   { ip: '103.156.248.150', port: '8080' },
   { ip: '85.172.0.30', port: '8080' },
   { ip: '91.194.239.122', port: '8080' },
   { ip: '187.62.211.228', port: '8080' },
   { ip: '181.65.139.235', port: '999' },
   { ip: '34.95.198.251', port: '3129' },
   { ip: '102.0.0.118', port: '32650' },
   { ip: '34.151.245.107', port: '3129' },
   { ip: '172.104.41.13', port: '16379' },
   { ip: '34.95.197.9', port: '3129' },
   { ip: '187.1.57.206', port: '20183' },
   { ip: '117.207.147.21', port: '3127' },
   { ip: '111.225.152.129', port: '8089' },
   { ip: '167.172.238.15', port: '9997' },
   { ip: '45.233.170.109', port: '999' },
   { ip: '103.154.152.47', port: '3128' },
   { ip: '64.225.8.82', port: '9990' },
   { ip: '190.211.250.130', port: '999' },
   { ip: '104.167.6.218', port: '80' },
   { ip: '51.79.50.22', port: '9300' },
   { ip: '193.138.178.6', port: '8282' },
   { ip: '103.18.47.107', port: '8080' },
   { ip: '23.132.185.101', port: '53128' },
   { ip: '177.207.208.35', port: '8080' },
   { ip: '174.138.167.178', port: '8888' },
   { ip: '212.112.127.20', port: '8080' },
   { ip: '181.189.135.90', port: '8080' },
   { ip: '202.40.177.69', port: '80' },
   { ip: '111.225.153.243', port: '8089' },
   { ip: '217.251.108.48', port: '8080' },
   { ip: '106.15.190.190', port: '3128' },
   { ip: '179.63.149.2', port: '999' },
   { ip: '64.225.4.29', port: '9498' },
   { ip: '62.210.135.99', port: '80' },
   { ip: '190.111.209.207', port: '3128' },
   { ip: '172.245.248.4', port: '3128' },
   { ip: '34.118.39.179', port: '8585' },
   { ip: '167.71.8.117', port: '3128' },
   { ip: '152.32.187.164', port: '8118' },
   { ip: '37.32.12.216', port: '4005' },
   { ip: '40.76.245.70', port: '8080' },
   { ip: '151.22.181.229', port: '8080' },
   { ip: '51.250.107.5', port: '3128' },
   { ip: '34.85.169.185', port: '8585' },
   { ip: '37.32.12.216', port: '4002' },
   { ip: '37.32.12.216', port: '4006' },
   { ip: '35.247.205.198', port: '3129' },
   { ip: '111.225.153.11', port: '8089' },
   { ip: '111.225.153.58', port: '8089' },
   { ip: '37.32.12.216', port: '4004' },
   { ip: '37.32.12.216', port: '4003' },
   { ip: '103.76.253.66', port: '3129' },
   { ip: '209.97.166.109', port: '4444' },
   { ip: '185.15.172.212', port: '3128' },
   { ip: '37.32.12.216', port: '4008' },
   { ip: '15.204.204.165', port: '3128' },
   { ip: '34.116.156.144', port: '8585' },
   { ip: '138.2.68.129', port: '3128' },
   { ip: '212.192.31.37', port: '3128' },
   { ip: '159.223.33.112', port: '5000' },
   { ip: '167.99.116.111', port: '8001' },
   { ip: '111.225.153.248', port: '8089' },
   { ip: '139.196.111.167', port: '9000' },
   { ip: '51.79.249.186', port: '3128' },
   { ip: '34.162.172.117', port: '8585' },
   { ip: '179.43.140.249', port: '3128' },
   { ip: '118.31.164.20', port: '8082' },
   { ip: '176.99.2.43', port: '1081' },
   { ip: '186.193.246.32', port: '8080' },
   { ip: '181.65.169.35', port: '999' },
   { ip: '90.84.17.133', port: '3128' },
   { ip: '111.225.153.133', port: '8089' },
   { ip: '13.233.222.84', port: '80' },
   { ip: '200.8.121.43', port: '999' },
   { ip: '82.208.111.19', port: '80' },
   { ip: '45.178.133.60', port: '999' },
   { ip: '34.174.39.81', port: '8585' },
   { ip: '' },
];

const rotateProxy = () => {
   const proxy = proxies.shift(); // Get the next available proxy
   proxies.push(proxy); // Add the current proxy back to the end of the list
   return {
      protocol: 'http',
      host: proxy.ip,
      port: proxy.port,
   };
};

for (let i = 0; i < 100; i++) {
   const url = 'https://ipv4.icanhazip.com/';
   // const proxy = 'http://cfefc7c25034976251eb0cbad1304726bbc3784f:autoparse=true@proxy.zenrows.com:8001';
   const a = rotateProxy();
   const proxy = `http://${a.host}:${a.port}`;
   // const proxy =
   //    'http://8UOJXV68Q5LY4FMAMFZPFZ1L0GT3Y33XJPE4CWWTD23FYJWLRKB6S92H7X149Y13MJWQXNM4O6EWPMB9:render_js=False&premium_proxy=True@proxy.scrapingbee.com:8886';
   const httpAgent = new HttpProxyAgent(proxy);
   const httpsAgent = new HttpsProxyAgent(proxy);
   process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';
   axios({
      url,
      httpAgent,
      httpsAgent,
      //    proxy: rotateProxy(),
      //    proxy: {
      //       host: '103.28.224.123',
      //       port: 8080,
      //       protocol: 'https',
      //       //   auth: {
      //       //      username: 'wmycieli',
      //       //      password: 'kcnrnxe04nbk',
      //       //   },
      //    },
      method: 'GET',
   })
      .then((response) => console.log(response.data || 'ssss'))
      .catch((error) => console.log(error.message));
}

// const axios = require('axios');
// const httpsProxyAgent = require('https-proxy-agent');
// const HttpProxyAgent = require('http-proxy-agent');
// const urlWithAllProxies =
//    'https://proxylist.geonode.com/api/proxy-list?limit=500&page=1&sort_by=lastChecked&sort_type=desc&protocols=http&anonymityLevel=anonymous';
// axios.get(urlWithAllProxies).then((response) => {
//    if (response.status == 200) {
//       console.log(response.data);
//       const proxiesJson = response.data;
//       proxiesJson.data.forEach((proxyRecord) => {
//          let ip = proxyRecord.ip;
//          let port = proxyRecord.port;
//          const httpsAgent = new httpsProxyAgent(`http://${ip}:${port}`);
//          const httpAgent = new HttpProxyAgent(`http://${ip}:${port}`);

//          axios
//             .get('https://ipv4.icanhazip.com/', {
//                httpsAgent: httpsAgent,
//                httpAgent: httpAgent,
//             })
//             .then((response) => {
//                if (response.status == 200) {
//                   console.log(`Proxy ${ip}:${port} works! The IP we got is ${response.data}`);
//                }
//             })
//             .catch((error) => {
//                console.log(error.message);
//             });
//       });
//    }
// });

// const axios = require('axios');
// const httpsProxyAgent = require('https-proxy-agent');
// const HttpProxyAgent = require('http-proxy-agent');
// // const urlWithAllProxies = 'https://raw.githubusercontent.com/TheSpeedX/PROXY-List/master/http.txt';

// const fs = require('fs');

// let proxies = [];

// // axios.get(urlWithAllProxies).then((response) => {
// const response = fs.readFileSync('proxy.txt', 'utf8');
// let i = 0;

// response.split('\n').forEach((proxy) => {
//    i++;
//    console.log(i);
//    proxies.push({ ip: proxy.split(':')[0], port: proxy.split(':')[1] });
//    if (i == response.split('\n').length) {
//       console.log('done');
//       fs.writeFileSync('proxies.json', JSON.stringify(proxies), { flag: 'a' });
//    }
// });
// response.split('\n').forEach((proxy) => {
//    i++;
//    proxy = proxy.split(':');
//    let ip = proxy[0];
//    let port = proxy[1];
//    const httpsAgent = new httpsProxyAgent(`http://${ip}:${port}`);
//    const httpAgent = new HttpProxyAgent(`http://${ip}:${port}`);
//    axios
//       .get('https://ipv4.icanhazip.com/', {
//          httpsAgent: httpsAgent,
//          httpAgent: httpAgent,
//       })
//       .then((response) => {
//          if (response.status == 200) {
//             console.log(`Proxy ${ip}:${port} works! The IP we got is ${response.data}`);
//             proxies.push(`${ip}:${port}`);
//          }
//          if (i == response.data.split('\n').length) {
//             console.log('done');
//             fs.writeFileSync('proxies.json', proxies, { flag: 'a' });
//          }
//       })
//       .catch((error) => {
//          // console.log(error.message);
//       });
// });

// Function to rotate through the list of proxies

// });

// axios.get(urlWithAllProxies).then((response) => {
//    if (response.status == 200) {
//       console.log(response.data);
//       const proxiesJson = response.data;
//       proxiesJson.data.forEach((proxyRecord) => {
//          let ip = proxyRecord.ip;
//          let port = proxyRecord.port;
//          const httpsAgent = new httpsProxyAgent(`http://${ip}:${port}`);
//          const httpAgent = new HttpProxyAgent(`http://${ip}:${port}`);

//          axios
//             .get('https://ipv4.icanhazip.com/', {
//                httpsAgent: httpsAgent,
//                httpAgent: httpAgent,
//             })
//             .then((response) => {
//                if (response.status == 200) {
//                   console.log(`Proxy ${ip}:${port} works! The IP we got is ${response.data}`);
//                }
//             })
//             .catch((error) => {
//                console.log(error.message);
//             });
//       });
//    }
// });
