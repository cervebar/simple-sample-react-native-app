import { StackNavigationProp } from '@react-navigation/stack';
import { DetailScreenProps } from '../screens/DetailScreen';
import { RouteProp } from '@react-navigation/native';

export const RouteHome = 'RouteHome';
export const RouteDetail = 'RouteDetail';

export type RootStackParamList = {
    RouteHome: undefined;
    RouteDetail: DetailScreenProps;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;
export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;
