import getStringEnums from './utils/getStringEnmus';

export const Routes = getStringEnums(['Home', 'Detail']);

export type RoutesT = keyof typeof Routes;
