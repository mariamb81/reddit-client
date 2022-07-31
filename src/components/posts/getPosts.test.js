import { getFormattedHomepageData } from './getPosts'
test('returns homepage array', async() => {
    const data = await getFormattedHomepageData();
    expect(data).toBeDefined();
})
test('returns formatted post data', async() => {
    const data = await getFormattedHomepageData();
    expect(data[0]).toMatchObject({
        subreddit: {
          display_name: expect.any(String),
          name: expect.any(String),
        },
        author: expect.any(String),
        time_since_created: expect.any(Object),
        title: expect.any(String),
        is_video: expect.any(Boolean),
        media: {
          thumbnail: null,
          video: expect.any(Object),
        },
        is_ext: expect.any(Boolean),
        external_url: expect.any(String),
        domain: expect.any(String),
        score: expect.any(Number),
        num_comments: expect.any(Number),
        permalink: expect.any(String),
    })
})
