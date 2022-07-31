import { getFormattedSubredditData } from './getSubreddits'

test('returns subreddit arr', async() => {
    const data = await getFormattedSubredditData();
    expect(data).toBeDefined()
})
test('returns formatted subreddit data', async() => {
    const data = await getFormattedSubredditData();
    expect(data[0]).toMatchObject({
        title: expect.any(String),
        icon: expect.any(String),
        display_name: expect.any(String),
    })
})