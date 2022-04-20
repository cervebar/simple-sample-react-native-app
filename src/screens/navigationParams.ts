import { StackNavigationProp } from '@react-navigation/stack';
import { DetailScreenProps } from './DetailScreen';
import { RouteProp } from '@react-navigation/native';

export const RouteHome = 'RouteHome';
export const RouteDetail = 'RouteDetail';

export type RootStackParamList = {
    RouteHome: undefined;
    RouteDetail: DetailScreenProps;
};

export type NavigationProps = StackNavigationProp<RootStackParamList>;

// use with hook for routes:  const route = useRoute<RootRouteProps<'RouteDetail'>>();
export type RootRouteProps<RouteName extends keyof RootStackParamList> = RouteProp<RootStackParamList, RouteName>;
