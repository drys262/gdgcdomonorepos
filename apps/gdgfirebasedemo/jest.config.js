module.exports = {
  name: 'gdgfirebasedemo',
  preset: '../../jest.config.js',
  transform: {
    '^.+\\.[tj]sx?$': 'ts-jest'
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx', 'html'],
  coverageDirectory: '../../coverage/apps/gdgfirebasedemo',
  setupFilesAfterEnv: ['./src/setupTests.ts']
};
