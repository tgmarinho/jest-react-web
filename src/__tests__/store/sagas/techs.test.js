import { runSaga } from 'redux-saga';
import { getTechs } from '~/store/modules/techs/sagas';
import { getTechSuccess } from '~/store/modules/techs/actions';

describe('Techs saga', () => {
  it('should be able to fetch techs', async () => {
    const dispatch = jest.fn();

    await runSaga({ dispatch }, getTechs).toPromise();

    expect(dispatch).toHaveBeenCalledWith(getTechSuccess(['Node.js']));
  });
});
