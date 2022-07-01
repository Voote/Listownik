export const query = `{
    allVideos {
        id
        when
        videoType
        releaseYear
        progress
        platform
        part
        name
        dateNext
        cover {
          url
        }
        commingSoon
      }
      allGames {
        id
        when
        releaseYear
        progress
        platform
        name
        part
        dateNext
        commingSoon
        cover {
          url
        }
      }
    }`;
