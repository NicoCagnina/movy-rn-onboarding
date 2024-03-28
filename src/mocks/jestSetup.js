/*
 * Turbo modules mocks.
 */

jest.mock('react-native/Libraries/TurboModule/TurboModuleRegistry', () => {
  const turboModuleRegistry = jest.requireActual(
    'react-native/Libraries/TurboModule/TurboModuleRegistry',
  );
  return {
    ...turboModuleRegistry,
    getEnforcing: name => {
      // List of TurboModules libraries to mock.
      const modulesToMock = ['RNLocalize'];
      if (modulesToMock.includes(name)) {
        return null;
      }
      return turboModuleRegistry.getEnforcing(name);
    },
  };
});
