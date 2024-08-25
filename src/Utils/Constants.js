const GOOGLE_API_KEY = "AIzaSyBS7iQ-JFdGG49cdnuY_pmG_R4Q4PDMzmw";

export const YOUTUBE_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&maxregionCode=US&key=" +
  GOOGLE_API_KEY;

export const SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
