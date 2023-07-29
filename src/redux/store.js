import { configurePersistStore } from "./persistStore";

export const { store, persistor } = configurePersistStore();
export default store;
