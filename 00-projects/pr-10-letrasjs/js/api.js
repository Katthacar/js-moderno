export default class API {

  constructor() { }

  async getLyrics(artist, song) {
    const data = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
    return data.json();
  }

}
