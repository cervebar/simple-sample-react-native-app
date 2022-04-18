import { useSelector } from 'react-redux';
import { RootStateType } from '../../redux/rootStateType';

export default function useMyState<T>(selector: (state: RootStateType) => T) {
    return useSelector(selector);
}
