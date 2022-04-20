import { useSelector } from 'react-redux';
import { RootStateType } from '../../redux/rootStateType';

/**
 * helper to use shorten useMyState hook without need of redux store type declaration
 * example: useMyState(state => state.favorite.ids);
 */
export default function useMyState<T>(selector: (state: RootStateType) => T) {
    return useSelector(selector);
}
