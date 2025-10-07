import fetch from "node-fetch"
import { notifyUser } from '../src/utils/notifications';

jest.mock('node-fetch', () => jest.fn())

describe('notifyUser', () => {
    it('calls fetch woth correct URL, method and payload', async () => {
        // arrange
        const message = 'Hello world';
        const fetchSpy = jest.mocked(fetch);

        const payload = {
            message,
            timestamp: new Date().toISOString(),
          };
        fetchSpy.mockResolvedValue({ ok: true } as any);

        //act
        await notifyUser(message);


        // expect
        // expect(fetchSpy).toHaveBeenCalledTimes(1)
        expect(fetchSpy).toHaveBeenCalledWith('https://example.com/api/notify', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload),
          });

    });
});
