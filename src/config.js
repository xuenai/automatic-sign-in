module.exports = {
  baseURL: 'http://app.edos.youyishuju.com',
  Host: 'app.edos.youyishuju.com',
  sendData: () => ({
    address: [
      '四川省成都市武侯区锦城大道靠近鑫信合中心',
      '四川省成都市武侯区天府大道北段靠近泰达时代中心',
    ][Math.floor(Math.random() + 0.5)],
    latitude: (30.57714192708333 * (1 + 0.0004 * Math.random())).toFixed(14),
    longitude: (104.0689952256945 * (1 + 0.0004 * Math.random())).toFixed(14),
    phoneNumber: 'AEABD163-0484-4C78-B11C-75C2E9841FB6',
    userId: 2833,
  }),
  range: 6 * 60 * 1000,
}
