import { SetStateString } from '@types';

const clearInput = (setState: SetStateString): void => {
  setState('');
};

export default clearInput;
