import {useSelector, useDispatch, TypedUseSelectorHook} from 'react-redux';
import {RootState, AppDispatch} from 'redux/store/configureStore';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
