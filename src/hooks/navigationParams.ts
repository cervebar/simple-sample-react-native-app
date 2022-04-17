import { StackNavigationProp } from '@react-navigation/stack';

export const RouteHome = 'RouteHome';
export const RouteDetail = 'RouteDetail';

export type RootStackParamList = {
    RouteHome: undefined;
    RouteDetail: undefined;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
