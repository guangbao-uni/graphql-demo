
const Query = {
  ecgs: (_, __, { dataSources: db }) => db.query('select * from ecgs'),
  ecg: (_, { ecgId }, { dataSources: db }) => db.queryObject('select * from ecgs where ecgId = ?', [ecgId]),
  ecgData: async (_, { ecgId }, { dataSources: db }) => {
    const row = await db.queryObject('select * from ecgData where ecgId = ?', [ecgId]);
    row.ecg = JSON.parse(row.ecg);
    return row;
  },
};

const Mutation = {
  updateEcg: async (_, { ecg }, { dataSources: db }) => {
    const data = Object.keys(ecg).reduce((acc, key) => {
      if (ecg[key]) acc[key] = ecg[key];
      return acc;
    }, {});
    await db.query('update ecgs set ? where ecgId = ?', [data, data.ecgId]);
    return { code: 0, message: '更新成功' };
  },
};

const Ecg = {

};

export default { Query, Mutation, Ecg };

