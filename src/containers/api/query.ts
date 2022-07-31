export const query = `{
    allGames {
        id
        when
        releaseYear
        progress
        platform
        name
        part
        wiki
        dateNext
        commingSoon
        cover {
          url
        }
    }
    allVideos {
        id
        when
        videoType
        releaseYear
        progress
        platform
        part
        wiki
        name
        dateNext
        cover {
          url
        }
        commingSoon
      }
    }`;
