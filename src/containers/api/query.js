export const query = `{
    allGames(first: 50) {
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
    allVideos(first: 50) {
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
